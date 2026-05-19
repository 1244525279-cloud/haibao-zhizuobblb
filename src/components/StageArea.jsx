import { useEffect } from 'react'
import PosterCanvas from './PosterCanvas'

export default function StageArea({
  currentTemplate,
  colors,
  content,
  layerState,
  currentSize,
  currentFont,
  currentBackground,
  backgrounds,
  onUndo,
  onRedo,
  onRandomize,
}) {
  const currentTemplateName = {
    editorial: 'Shashin Margin',
    gallery: 'Muji Note',
    index: 'Kissa Menu',
    split: 'Ticket Stub',
    cover: 'Tategaki',
    modern: 'City Pop Grid',
    archive: 'Zine Collage',
    neo: 'Neo Grid',
    typewave: 'Type Wave',
    minimaltech: 'Minimal Tech',
    maximal: 'Maximal Pop',
  }[currentTemplate] || 'Shashin Margin'

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'z') {
        e.preventDefault()
        e.shiftKey ? onRedo() : onUndo()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onUndo, onRedo])

  return (
    <section className="stage-area">
      <header className="topbar">
        <div>
          <p className="eyebrow">实时预览</p>
          <h2>{currentTemplateName}</h2>
        </div>
        <div className="toolbar">
          <button className="icon-button" onClick={onUndo} title="撤销 Cmd/Ctrl+Z">
            <span aria-hidden="true">↶</span>
          </button>
          <button className="icon-button" onClick={onRedo} title="重做 Cmd/Ctrl+Shift+Z / Ctrl+Y">
            <span aria-hidden="true">↷</span>
          </button>
          <button className="icon-button" onClick={onRandomize} title="随机组合">
            <span aria-hidden="true">↻</span>
          </button>
          <button className="text-button">导出 PNG</button>
        </div>
      </header>

      <div className="canvas-wrap">
        <PosterCanvas
          currentTemplate={currentTemplate}
          colors={colors}
          content={content}
          layerState={layerState}
          currentSize={currentSize}
          currentFont={currentFont}
          currentBackground={currentBackground}
          backgrounds={backgrounds}
        />
      </div>
    </section>
  )
}
