import { Canvas } from './components/canvas';
import { PropertiesPanel } from './components/propertiesPanel';
import { Toolbar } from './components/toolBar';

function App() {
  return (
    <div className="app">
      <Toolbar />
      <div className="wrapper">
        <div className="content">
          <Canvas />
        </div>

        <PropertiesPanel />
      </div>
    </div>
  );
}

export default App;
