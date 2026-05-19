import { useMemo } from 'react'

export default function PosterCanvas({
  currentTemplate,
  colors,
  content,
  layerState,
  currentSize,
  currentFont,
  currentBackground,
  backgrounds,
}) {
  const backgroundImage = useMemo(() => {
    if (currentBackground === 'custom') {
      return ''
    }
    const bg = backgrounds.find((b) => b.id === currentBackground)
    return bg ? bg.image : backgrounds[0].image
  }, [currentBackground, backgrounds])

  const posterClasses = `poster template-${currentTemplate} ratio-${currentSize.mode} font-${currentFont}`
  const posterStyle = {
    '--custom-ratio': `${currentSize.width} / ${currentSize.height}`,
    '--bg-image': backgroundImage || `linear-gradient(135deg, ${colors.paper}, ${colors.paper})`,
  }

  return (
    <article className={posterClasses} style={posterStyle}>
      <div
        className="poster-bg"
        style={{
          background: `var(--bg-image)`,
        }}
      ></div>
      <div className="poster-grain"></div>
      <div
        className="poster-art"
        style={{
          opacity: layerState.art?.opacity / 100 || 0.15,
        }}
      ></div>
      <svg
        className="vector-shape shape-circle"
        viewBox="0 0 100 100"
        aria-hidden="true"
        style={{
          transform: `translate(${layerState.shapeCircle?.x || 0}px, ${layerState.shapeCircle?.y || 0}px) scale(${(layerState.shapeCircle?.scale || 100) / 100}) rotate(${layerState.shapeCircle?.rotate || 0}deg)`,
          opacity: (layerState.shapeCircle?.opacity || 100) / 100,
          visibility: layerState.shapeCircle?.visible ? 'visible' : 'hidden',
          zIndex: layerState.shapeCircle?.z || 8,
        }}
      >
        <circle cx="50" cy="50" r="42"></circle>
      </svg>
      <svg
        className="vector-shape shape-rect"
        viewBox="0 0 100 100"
        aria-hidden="true"
        style={{
          transform: `translate(${layerState.shapeRect?.x || 0}px, ${layerState.shapeRect?.y || 0}px) scale(${(layerState.shapeRect?.scale || 100) / 100}) rotate(${layerState.shapeRect?.rotate || 0}deg)`,
          opacity: (layerState.shapeRect?.opacity || 100) / 100,
          visibility: layerState.shapeRect?.visible ? 'visible' : 'hidden',
          zIndex: layerState.shapeRect?.z || 7,
        }}
      >
        <rect x="10" y="18" width="80" height="64" rx="4"></rect>
      </svg>
      <svg
        className="vector-shape shape-line"
        viewBox="0 0 100 100"
        aria-hidden="true"
        style={{
          transform: `translate(${layerState.shapeLine?.x || 0}px, ${layerState.shapeLine?.y || 0}px) scale(${(layerState.shapeLine?.scale || 100) / 100}) rotate(${layerState.shapeLine?.rotate || 0}deg)`,
          opacity: (layerState.shapeLine?.opacity || 100) / 100,
          visibility: layerState.shapeLine?.visible ? 'visible' : 'hidden',
          zIndex: layerState.shapeLine?.z || 9,
        }}
      >
        <path d="M8 50H92"></path>
      </svg>
      <div className="poster-content">
        <p
          className="poster-kicker"
          style={{
            color: colors.tone,
            opacity: (layerState.kicker?.opacity || 100) / 100,
            visibility: layerState.kicker?.visible ? 'visible' : 'hidden',
          }}
        >
          {content.kicker}
        </p>
        <h3
          className="poster-title"
          style={{
            color: colors.ink,
            opacity: (layerState.title?.opacity || 100) / 100,
            visibility: layerState.title?.visible ? 'visible' : 'hidden',
          }}
        >
          {content.title}
        </h3>
        <p
          className="poster-subtitle"
          style={{
            color: colors.muted || `rgba(${parseInt(colors.ink.slice(1, 3), 16)}, ${parseInt(colors.ink.slice(3, 5), 16)}, ${parseInt(colors.ink.slice(5, 7), 16)}, 0.58)`,
            opacity: (layerState.subtitle?.opacity || 100) / 100,
            visibility: layerState.subtitle?.visible ? 'visible' : 'hidden',
          }}
        >
          {content.subtitle}
        </p>
        <div
          className="poster-meta"
          style={{
            color: colors.tone,
            opacity: (layerState.meta?.opacity || 100) / 100,
            visibility: layerState.meta?.visible ? 'visible' : 'hidden',
          }}
        >
          <span>{content.date}</span>
          <span>{content.place}</span>
        </div>
      </div>
    </article>
  )
}
