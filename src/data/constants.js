export const templates = [
  {
    id: "editorial",
    name: "Shashin Margin",
    note: "写真留白、生活方式海报",
  },
  {
    id: "gallery",
    name: "Muji Note",
    note: "无印感、细线网格、清爽信息",
  },
  {
    id: "index",
    name: "Kissa Menu",
    note: "喫茶店菜单、小字密排",
  },
  {
    id: "split",
    name: "Ticket Stub",
    note: "车票票据、活动入场券",
  },
  {
    id: "cover",
    name: "Tategaki",
    note: "竖排标题、书腰与短句",
  },
  {
    id: "modern",
    name: "City Pop Grid",
    note: "平成复古、轻快几何色块",
  },
  {
    id: "archive",
    name: "Zine Collage",
    note: "手作拼贴、独立小刊",
  },
  {
    id: "neo",
    name: "Neo Grid",
    note: "现代网格、品牌视觉",
  },
  {
    id: "typewave",
    name: "Type Wave",
    note: "大字波形、音乐活动",
  },
  {
    id: "minimaltech",
    name: "Minimal Tech",
    note: "科技发布、极简信息",
  },
  {
    id: "maximal",
    name: "Maximal Pop",
    note: "强视觉、潮流拼色",
  },
];

export const palettes = [
  { paper: "#fbf7ed", ink: "#2c2b27", tone: "#9cc8c2", accent: "#e86f5b" },
  { paper: "#f8f3f0", ink: "#33302c", tone: "#e8b7c8", accent: "#7fa5c8" },
  { paper: "#f5f0df", ink: "#273029", tone: "#b7c99c", accent: "#e3a545" },
  { paper: "#f7f7f2", ink: "#222426", tone: "#c8d7e8", accent: "#ef7b72" },
  { paper: "#f2f6f3", ink: "#172326", tone: "#85d6cd", accent: "#ff6b4a" },
  { paper: "#fff9e8", ink: "#28231e", tone: "#f4c95d", accent: "#2b6f9f" },
  { paper: "#f5f1ff", ink: "#252238", tone: "#b9a7ff", accent: "#ff7aa8" },
  { paper: "#f4f5ef", ink: "#1c1f1a", tone: "#d6e36c", accent: "#111111" },
  { paper: "#eef3ff", ink: "#1a2435", tone: "#96b7ff", accent: "#ff814f" },
  { paper: "#fff4ef", ink: "#30231f", tone: "#ffb199", accent: "#4d8b77" },
];

export const backgrounds = [
  {
    id: "amber",
    name: "Milk Tea",
    image:
      "radial-gradient(circle at 22% 18%, rgba(255,255,255,.85) 0 10%, transparent 11%), linear-gradient(145deg, #fbf6ea 0%, #ead9bd 46%, #d7bfa2 100%)",
  },
  {
    id: "mono",
    name: "Window Light",
    image:
      "linear-gradient(90deg, rgba(255,255,255,.72) 0 28%, transparent 28%), linear-gradient(155deg, #f6f3ea, #d9e3df 52%, #b6c8c0)",
  },
  {
    id: "cyan",
    name: "Soda Blue",
    image:
      "radial-gradient(circle at 72% 30%, rgba(255,255,255,.8) 0 7%, transparent 8%), linear-gradient(135deg, #eef8f6, #a8d7df 48%, #6ea7be)",
  },
  {
    id: "rose",
    name: "Sakura Paper",
    image:
      "radial-gradient(circle at 72% 24%, rgba(255,255,255,.7) 0 12%, transparent 13%), linear-gradient(155deg, #fff6f5, #edc8cf 55%, #d9a7b4)",
  },
  {
    id: "green",
    name: "Matcha",
    image:
      "repeating-linear-gradient(90deg, rgba(255,255,255,.28) 0 1px, transparent 1px 22px), linear-gradient(130deg, #f4f1df, #cad8a5 48%, #9fb67d)",
  },
  {
    id: "blue",
    name: "Evening Train",
    image:
      "linear-gradient(180deg, rgba(255,255,255,.76) 0 18%, transparent 18%), linear-gradient(160deg, #f2f4f1, #c8d5e6 48%, #89a7c9)",
  },
];

export const fontModules = [
  { id: "didot", name: "日杂衬线" },
  { id: "grotesk", name: "窄体刊头" },
  { id: "song", name: "明朝书感" },
  { id: "minimal", name: "无印轻体" },
  { id: "brutal", name: "平成粗圆" },
  { id: "noto-sans", name: "Noto Sans 开源" },
  { id: "noto-serif", name: "Noto Serif 开源" },
  { id: "zen-maru", name: "Zen Maru 圆体" },
  { id: "m-plus", name: "M PLUS 日文" },
  { id: "roboto-condensed", name: "Roboto 窄体" },
];

export const defaultLayers = [
  { id: "title", name: "标题", z: 12 },
  { id: "kicker", name: "眉标", z: 11 },
  { id: "subtitle", name: "副标题", z: 11 },
  { id: "meta", name: "日期地点", z: 11 },
  { id: "shapeCircle", name: "矢量圆形", z: 8 },
  { id: "shapeRect", name: "矢量矩形", z: 7 },
  { id: "shapeLine", name: "矢量线条", z: 9 },
  { id: "art", name: "装饰图形", z: 4 },
  { id: "grain", name: "纸纹质感", z: 18 },
  { id: "bg", name: "底图", z: 0 },
];

export const defaultContent = {
  kicker: "小さな週末",
  title: "春日散策",
  subtitle: "午後四点の光、街角のコーヒーと慢慢经过的风。把日常放进一张安静的纸面。",
  date: "2026.06.18",
  place: "Kichijoji",
};
