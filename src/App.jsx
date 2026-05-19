import { useState, useCallback, useRef } from 'react'
import Sidebar from './components/Sidebar'
import StageArea from './components/StageArea'
import Inspector from './components/Inspector'
import { templates, palettes, backgrounds, fontModules, defaultLayers, defaultContent } from './data/constants'

export default function App() {
  const [currentTemplate, setCurrentTemplate] = useState(templates[0].id)
  const [currentPalette, setCurrentPalette] = useState(0)
  const [currentBackground, setCurrentBackground] = useState(backgrounds[0].id)
  const [currentFont, setCurrentFont] = useState(fontModules[0].id)
  const [currentSize, setCurrentSize] = useState({ width: 1080, height: 1350, mode: 'portrait' })
  const [activeLayer, setActiveLayer] = useState('title')
  const [layers, setLayers] = useState(defaultLayers)
  
  const [colors, setColors] = useState({
    paper: palettes[0].paper,
    ink: palettes[0].ink,
    tone: palettes[0].tone,
    accent: palettes[0].accent,
  })
  
  const [content, setContent] = useState(defaultContent)
  
  const [layerState, setLayerState] = useState(() => {
    return Object.fromEntries(
      defaultLayers.map((layer) => [
        layer.id,
        { x: 0, y: 0, scale: 100, rotate: 0, opacity: 100, z: layer.z, visible: true },
      ]),
    )
  })
  
  const [history, setHistory] = useState([])
  const [future, setFuture] = useState([])
  const isRestoringRef = useRef(false)

  const snapshotState = useCallback(() => {
    return {
      currentTemplate,
      currentPalette,
      currentBackground,
      currentFont,
      activeLayer,
      currentSize: { ...currentSize },
      layerOrder: layers.map((layer) => layer.id),
      layerState: JSON.parse(JSON.stringify(layerState)),
      colors: { ...colors },
      content: { ...content },
    }
  }, [currentTemplate, currentPalette, currentBackground, currentFont, activeLayer, currentSize, layers, layerState, colors, content])

  const pushHistory = useCallback(() => {
    if (isRestoringRef.current) return
    const snapshot = snapshotState()
    setHistory(prev => {
      const newHistory = [...prev, snapshot]
      if (newHistory.length > 80) newHistory.shift()
      return newHistory
    })
    setFuture([])
  }, [snapshotState])

  const restoreState = useCallback((snapshot) => {
    if (!snapshot) return
    isRestoringRef.current = true
    
    setCurrentTemplate(snapshot.currentTemplate)
    setCurrentPalette(snapshot.currentPalette)
    setCurrentBackground(snapshot.currentBackground)
    setCurrentFont(snapshot.currentFont)
    setActiveLayer(snapshot.activeLayer)
    setCurrentSize({ ...snapshot.currentSize })
    setLayers(snapshot.layerOrder.map((id) => defaultLayers.find((layer) => layer.id === id)).filter(Boolean))
    setLayerState(JSON.parse(JSON.stringify(snapshot.layerState)))
    setColors({ ...snapshot.colors })
    setContent({ ...snapshot.content })
    
    isRestoringRef.current = false
  }, [])

  const undo = useCallback(() => {
    if (history.length === 0) return
    setFuture(prev => [snapshotState(), ...prev])
    setHistory(prev => {
      const newHistory = [...prev]
      const snapshot = newHistory.pop()
      if (snapshot) restoreState(snapshot)
      return newHistory
    })
  }, [snapshotState, restoreState])

  const redo = useCallback(() => {
    if (future.length === 0) return
    setHistory(prev => [...prev, snapshotState()])
    setFuture(prev => {
      const newFuture = [...prev]
      const snapshot = newFuture.shift()
      if (snapshot) restoreState(snapshot)
      return newFuture
    })
  }, [snapshotState, restoreState])

  const applyPalette = useCallback((index) => {
    pushHistory()
    const palette = palettes[index]
    setCurrentPalette(index)
    setColors({
      paper: palette.paper,
      ink: palette.ink,
      tone: palette.tone,
      accent: palette.accent,
    })
    const root = document.documentElement
    root.style.setProperty('--paper', palette.paper)
    root.style.setProperty('--ink', palette.ink)
    root.style.setProperty('--tone', palette.tone)
    root.style.setProperty('--accent', palette.accent)
  }, [pushHistory])

  const applyCustomColor = useCallback((key, value) => {
    setColors(prev => ({ ...prev, [key]: value }))
    document.documentElement.style.setProperty(`--${key}`, value)
  }, [])

  const applyCustomSize = useCallback((width, height, mode = 'custom') => {
    setCurrentSize({ width: Number(width), height: Number(height), mode })
  }, [])

  const updateContent = useCallback((key, value) => {
    setContent(prev => ({ ...prev, [key]: value }))
  }, [])

  const updateLayerState = useCallback((layerId, updates) => {
    setLayerState(prev => ({
      ...prev,
      [layerId]: { ...prev[layerId], ...updates }
    }))
  }, [])

  const handleRandomize = useCallback(() => {
    pushHistory()
    const randomTemplate = templates[Math.floor(Math.random() * templates.length)].id
    const randomPalette = Math.floor(Math.random() * palettes.length)
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)].id
    const randomFont = fontModules[Math.floor(Math.random() * fontModules.length)].id
    
    setCurrentTemplate(randomTemplate)
    applyPalette(randomPalette)
    setCurrentBackground(randomBackground)
    setCurrentFont(randomFont)
  }, [pushHistory, applyPalette])

  return (
    <div className="app-shell">
      <Sidebar
        templates={templates}
        currentTemplate={currentTemplate}
        onTemplateChange={(id) => {
          pushHistory()
          setCurrentTemplate(id)
        }}
        layers={layers}
        activeLayer={activeLayer}
        onLayerSelect={setActiveLayer}
        currentSize={currentSize}
        onSizeChange={applyCustomSize}
        layerState={layerState}
        onLayerStateChange={updateLayerState}
      />
      <StageArea
        currentTemplate={currentTemplate}
        colors={colors}
        content={content}
        layerState={layerState}
        currentSize={currentSize}
        currentFont={currentFont}
        currentBackground={currentBackground}
        backgrounds={backgrounds}
        onUndo={undo}
        onRedo={redo}
        onRandomize={handleRandomize}
      />
      <Inspector
        backgrounds={backgrounds}
        currentBackground={currentBackground}
        onBackgroundChange={(id) => {
          pushHistory()
          setCurrentBackground(id)
        }}
        content={content}
        onContentChange={updateContent}
        fontModules={fontModules}
        currentFont={currentFont}
        onFontChange={(id) => {
          pushHistory()
          setCurrentFont(id)
        }}
        palettes={palettes}
        currentPalette={currentPalette}
        onPaletteChange={applyPalette}
        colors={colors}
        onColorChange={applyCustomColor}
        layerState={layerState}
        activeLayer={activeLayer}
        onLayerStateChange={updateLayerState}
      />
    </div>
  )
}
