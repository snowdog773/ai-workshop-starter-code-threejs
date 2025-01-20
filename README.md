# THREE.JS PORTFOLIO DEMO

A 3D interactive portfolio viewer built with Three.js, featuring rotating project cubes in a navigable space.

## PREREQUISITES

- Node.js (v14+)
- npm
- Modern web browser with WebGL support
- Graphics card with WebGL capability

## INSTALLATION

1. Clone repository:
   git clone [repository-url]
   cd threejs-portfolio

2. Install dependencies:
   npm install

3. Start development server:
   npm run dev

4. Open browser:
   http://localhost:5173

## FEATURES

- 3D Environment

  - Dynamic lighting system
  - Responsive canvas
  - Floor plane for depth
  - Auto-rotating project cubes

- Interactive Elements

  - Color-coded project cubes
  - Click detection
  - Project information display
  - Smooth animations

- Camera System
  - Multiple control schemes
  - Smooth movement
  - Orbit controls
  - Dynamic perspective

## CONTROLS

Keyboard Navigation:
↑ - Move forward
↓ - Move backward
← - Move left
→ - Move right
Q - Rotate left
E - Rotate right

Mouse Controls:

- Left Click + Drag: Orbit camera
- Click on Cube: Show project details
- Mouse Wheel: Zoom in/out

## PROJECT STRUCTURE

threejs-portfolio/
├── src/
│ ├── index.js # Main Three.js setup
│ ├── components/ # 3D components
│ └── styles/ # CSS styling
├── public/ # Static assets
├── tests/ # Test files
└── dist/ # Production build

## DEVELOPMENT COMMANDS

npm run dev # Start development server
npm run build # Build for production
npm run preview # Preview production build
npm test # Run tests

## TROUBLESHOOTING

Black Screen:

- Check WebGL support
- Update graphics drivers

Performance Issues:

- Reduce window size
- Check browser compatibility

## BROWSER SUPPORT

- Chrome (recommended)
- Firefox
- Safari
- Edge

## LICENSE

MIT License - Free to use for personal/commercial projects
# ai-workshop-starter-code-threejs
