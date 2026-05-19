import { useState } from 'react'

export default function Inspector({
  backgrounds,
  currentBackground,
  onBackgroundChange,
  content,
  onContentChange,
  fontModules,
  currentFont,
  onFontChange,
  palettes,
  currentPalette,
  onPaletteChange,
  colors,
  onColorChange,
  layerState,
  activeLayer,
  onLayerStateChange,
}) {
  const [imageShade, setImageShade] = useState(18)
  const [imageBlur, setImageBlur] = useState(0)

  const handleContentChange = (key, value) => {
    onContentChange(key, value)
  }

  const handleLayerChange = (key, value) => {
    onLayerStateChange(activeLayer, { [key]: value })
  }

  const currentLayerState = layerState[activeLayer] || {}

  return (
    <aside className="inspector">
      <section className="panel">
        <div className="panel-head">
          <h2>底图</h2>
        </div>
        <label className="upload-box">
          <span>上传自己的底图</span>
          <input type="file" accept="image/*" />
        </label>
        <div className="background-list">
          {backgrounds.map((bg) => (
            <button
              key={bg.id}
              className={`background-card ${bg.id === currentBackground ? 'active' : ''}`}
              style={{ '--preview': bg.image }}
              title={bg.name}
              onClick={() => onBackgroundChange(bg.id)}
            ></button>
          ))}
        </div>
        <label>
          <span>底图明暗</span>
          <input
            type="range"
            min="0"
            max="100"
            value={imageShade}
            onChange={(e) => setImageShade(e.target.value)}
          />
        </label>
        <label>
          <span>底图模糊</span>
          <input
            type="range"
            min="0"
            max="100"
            value={imageBlur}
            onChange={(e) => setImageBlur(e.target.value)}
          />
        </label>
      </section>

      <section className="panel">
        <div className="panel-head">
          <h2>新增元素</h2>
        </div>
        <div className="element-actions">
          <button className="mini-button">文字</button>
          <button className="mini-button">圆形</button>
          <button className="mini-button">矩形</button>
          <button className="mini-button">线条</button>
        </div>
        <label className="upload-box">
          <span>导入图片元素</span>
          <input type="file" accept="image/*" />
        </label>
      </section>

      <section className="panel">
        <div className="panel-head">
          <h2>动态海报</h2>
        </div>
        <label className="toggle-line">
          <span>开启动态预览</span>
          <input type="checkbox" />
        </label>
        <div className="segmented motion-modes">
          <button className="active">漂浮</button>
          <button>呼吸</button>
          <button>横移</button>
        </div>
        <label>
          <span>速度</span>
          <input type="range" min="4" max="24" value="10" />
        </label>
        <label className="upload-box">
          <span>替换动态物体</span>
          <input type="file" accept="image/*" />
        </label>
      </section>

      <section className="panel">
        <div className="panel-head">
          <h2>内容</h2>
        </div>
        <label>
          <span>眉标</span>
          <input
            value={content.kicker}
            onChange={(e) => handleContentChange('kicker', e.target.value)}
          />
        </label>
        <label>
          <span>标题</span>
          <textarea
            rows="3"
            value={content.title}
            onChange={(e) => handleContentChange('title', e.target.value)}
          ></textarea>
        </label>
        <label>
          <span>副标题</span>
          <textarea
            rows="4"
            value={content.subtitle}
            onChange={(e) => handleContentChange('subtitle', e.target.value)}
          ></textarea>
        </label>
        <div className="field-grid">
          <label>
            <span>日期</span>
            <input
              value={content.date}
              onChange={(e) => handleContentChange('date', e.target.value)}
            />
          </label>
          <label>
            <span>地点</span>
            <input
              value={content.place}
              onChange={(e) => handleContentChange('place', e.target.value)}
            />
          </label>
        </div>
      </section>

      <section className="panel">
        <div className="panel-head">
          <h2>字体模块</h2>
        </div>
        <label className="upload-box">
          <span>导入字体文件</span>
          <input type="file" accept=".ttf,.otf,.woff,.woff2,font/*" />
        </label>
        <div className="font-list">
          {fontModules.map((font) => (
            <button
              key={font.id}
              className={`font-card ${font.id === currentFont ? 'active' : ''}`}
              onClick={() => onFontChange(font.id)}
            >
              {font.name}
            </button>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="panel-head">
          <h2>选中图层细节</h2>
          <button className="mini-button">重置</button>
        </div>
        <label className="toggle-line">
          <span>显示图层</span>
          <input
            type="checkbox"
            checked={currentLayerState.visible !== false}
            onChange={(e) => handleLayerChange('visible', e.target.checked)}
          />
        </label>
        <div className="field-grid">
          <label>
            <span>X 位置</span>
            <input
              type="range"
              min="-220"
              max="220"
              value={currentLayerState.x || 0}
              onChange={(e) => handleLayerChange('x', Number(e.target.value))}
            />
          </label>
          <label>
            <span>Y 位置</span>
            <input
              type="range"
              min="-220"
              max="220"
              value={currentLayerState.y || 0}
              onChange={(e) => handleLayerChange('y', Number(e.target.value))}
            />
          </label>
        </div>
        <div className="field-grid">
          <label>
            <span>缩放</span>
            <input
              type="range"
              min="40"
              max="180"
              value={currentLayerState.scale || 100}
              onChange={(e) => handleLayerChange('scale', Number(e.target.value))}
            />
          </label>
          <label>
            <span>旋转</span>
            <input
              type="range"
              min="-35"
              max="35"
              value={currentLayerState.rotate || 0}
              onChange={(e) => handleLayerChange('rotate', Number(e.target.value))}
            />
          </label>
        </div>
        <div className="field-grid">
          <label>
            <span>透明度</span>
            <input
              type="range"
              min="0"
              max="100"
              value={currentLayerState.opacity || 100}
              onChange={(e) => handleLayerChange('opacity', Number(e.target.value))}
            />
          </label>
          <label>
            <span>层级</span>
            <input
              type="range"
              min="0"
              max="20"
              value={currentLayerState.z || 10}
              onChange={(e) => handleLayerChange('z', Number(e.target.value))}
            />
          </label>
        </div>
      </section>

      <section className="panel">
        <div className="panel-head">
          <h2>色彩与细节</h2>
        </div>
        <div className="swatches">
          {palettes.map((palette, index) => (
            <button
              key={index}
              className={`swatch ${index === currentPalette ? 'active' : ''}`}
              style={{
                '--paper': palette.paper,
                '--ink': palette.ink,
                '--tone': palette.tone,
              }}
              onClick={() => onPaletteChange(index)}
              title={`配色 ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="color-grid">
          <label>
            <span>纸张</span>
            <input
              type="color"
              value={colors.paper}
              onChange={(e) => onColorChange('paper', e.target.value)}
            />
          </label>
          <label>
            <span>文字</span>
            <input
              type="color"
              value={colors.ink}
              onChange={(e) => onColorChange('ink', e.target.value)}
            />
          </label>
          <label>
            <span>图形</span>
            <input
              type="color"
              value={colors.tone}
              onChange={(e) => onColorChange('tone', e.target.value)}
            />
          </label>
          <label>
            <span>强调</span>
            <input
              type="color"
              value={colors.accent}
              onChange={(e) => onColorChange('accent', e.target.value)}
            />
          </label>
        </div>
      </section>
    </aside>
  )
}
