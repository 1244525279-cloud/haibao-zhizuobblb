# Poster Atelier - React + Vite 版本

这是一个使用 React 18 和 Vite 重构的日系海报排版工作台。

## 项目结构

```
src/
├── components/
│   ├── Sidebar.jsx          # 左侧边栏：模板选择、画幅控制、图层管理
│   ├── StageArea.jsx        # 中央舞台区：画布预览和工具栏
│   ├── PosterCanvas.jsx     # 海报画布组件
│   └── Inspector.jsx        # 右侧检查器：属性编辑面板
├── data/
│   └── constants.js         # 所有数据常量（模板、配色、背景等）
├── App.jsx                  # 主应用组件，状态管理
├── main.jsx                 # 入口文件
└── index.css                # 全局样式

package.json                 # 项目配置
vite.config.js              # Vite 配置
index.html                  # HTML 入口
```

## 功能特性

✅ **模板系统** - 11 种预设排版风格
✅ **配色方案** - 10 套预定义配色和自定义颜色控制
✅ **背景风格** - 6 种装饰背景和自定义图片上传
✅ **字体模块** - 10 种字体选择
✅ **画幅比例** - 竖版、方形、长图预设和自定义尺寸
✅ **图层管理** - 可视化图层列表和顺序调整
✅ **图层细节** - 位置、缩放、旋转、透明度、层级控制
✅ **内容编辑** - 眉标、标题、副标题、日期、地点
✅ **撤销重做** - 完整的历史记录系统（支持80步）
✅ **随机组合** - 一键随机生成海报配置
✅ **快捷键支持** - Cmd/Ctrl+Z 撤销，Cmd/Ctrl+Shift+Z 重做

## 开发环境

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```
应用将在 `http://localhost:5173` 打开

### 构建生产版本
```bash
npm run build
```

### 预览生产构建
```bash
npm run preview
```

## 技术栈

- **React 18** - UI 框架
- **Vite 5** - 构建工具
- **CSS3** - 样式（Grid、Flexbox、CSS 变量）
- **JavaScript ES6+** - 现代 JavaScript

## 状态管理

项目使用 React Hooks（useState、useCallback、useRef）进行状态管理：

- `currentTemplate` - 当前选中的排版模板
- `currentPalette` - 当前选中的配色方案
- `colors` - 自定义颜色对象
- `content` - 海报文本内容
- `layerState` - 所有图层的变换状态
- `history/future` - 撤销/重做历史记录

## 主要改进

相比原始 vanilla JavaScript 版本：

1. **组件化** - 代码模块化，易于维护和扩展
2. **反应式** - 自动 UI 更新，不需要手动 DOM 操作
3. **更快速** - Vite 提供极速开发体验和优化的构建输出
4. **类型安全** - 可轻松添加 TypeScript 支持
5. **开发工具** - React DevTools 集成调试

## 后续开发建议

- [ ] 添加 TypeScript 支持
- [ ] 实现图片上传和自定义背景
- [ ] 完善导出 PNG 功能
- [ ] 添加动态海报功能
- [ ] 实现自定义元素添加
- [ ] 优化性能和大屏幕响应式设计
- [ ] 添加项目保存/加载功能
- [ ] 支持拖拽图层排序

## 许可证

MIT
