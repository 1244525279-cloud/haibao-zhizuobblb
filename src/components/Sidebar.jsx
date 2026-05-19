import { useState } from 'react'
import { templates } from '../data/constants'

export default function Sidebar({
  currentTemplate,
  onTemplateChange,
  layers,
  activeLayer,
  onLayerSelect,
  currentSize,
  onSizeChange,
  layerState,
  onLayerStateChange,
}) {
  const [width, setWidth] = useState(currentSize.width)
  const [height, setHeight] = useState(currentSize.height)

  const handleRatioClick = (ratio) => {
    const sizes = {
      portrait: { width: 1080, height: 1350 },
      square: { width: 1080, height: 1080 },
      story: { width: 1080, height: 1920 },
    }
    const { width: w, height: h } = sizes[ratio]
    setWidth(w)
    setHeight(h)
    onSizeChange(w, h, ratio)
  }

  const handleApplySize = () => {
    onSizeChange(width, height, 'custom')
  }

  const handleTemplateSelect = (id) => {
    onTemplateChange(id)
  }

  return (
    <aside className="sidebar">
      <div className="brand-block">
        <span className="mark"></span>
        <div>
          <p className="eyebrow">Tokyo Layout Room</p>
          <h1>日系海报排版工作台</h1>
        </div>
      </div>

      <section className="panel">
        <div className="panel-head">
          <h2>排版风格</h2>
          <span>{templates.length} 款</span>
        </div>
        <div className="template-list">
          {templates.map((template) => (
            <button
              key={template.id}
              className={`template-card ${template.id === currentTemplate ? 'active' : ''}`}
              onClick={() => handleTemplateSelect(template.id)}
            >
              <span className={`thumb ${template.id}`}></span>
              <span>
                <strong>{template.name}</strong>
                <span>{template.note}</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="panel-head">
          <h2>画幅</h2>
        </div>
        <div className="segmented">
          <button
            className={currentSize.mode === 'portrait' ? 'active' : ''}
            onClick={() => handleRatioClick('portrait')}
          >
            竖版
          </button>
          <button
            className={currentSize.mode === 'square' ? 'active' : ''}
            onClick={() => handleRatioClick('square')}
          >
            方形
          </button>
          <button
            className={currentSize.mode === 'story' ? 'active' : ''}
            onClick={() => handleRatioClick('story')}
          >
            长图
          </button>
        </div>
        <div className="field-grid compact-grid">
          <label>
            <span>宽 px</span>
            <input
              type="number"
              min="240"
              max="3000"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
            />
          </label>
          <label>
            <span>高 px</span>
            <input
              type="number"
              min="240"
              max="4000"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
            />
          </label>
        </div>
        <button className="text-button full-button" onClick={handleApplySize}>
          应用自定义尺寸
        </button>
      </section>

      <section className="panel">
        <div className="panel-head">
          <h2>图层</h2>
          <span>{layers.find(l => l.id === activeLayer)?.name || '标题'}</span>
        </div>
        <div className="layer-list">
          {layers.map((layer) => (
            <button
              key={layer.id}
              className={`layer-item ${layer.id === activeLayer ? 'active' : ''}`}
              onClick={() => onLayerSelect(layer.id)}
            >
              {layer.name}
              <span data-layer-z={layer.id}>Z {layerState[layer.id]?.z || 0}</span>
            </button>
          ))}
        </div>
      </section>
    </aside>
  )
}
