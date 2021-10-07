import React, {useState} from 'react';
import { fabric } from "fabric";
import { getData, initialJSON } from './services/getData.js'
import Form from './components/Form'

const App = () => {

  const [canvas, setCanvas] = useState(null);

  const fabricService = {
    initCanvas(canvasEl) {
      this.canvas = new fabric.Canvas(canvasEl);
    }
  }

  const Canvas = ({width = 600, height = 600}) => {
    const canvasRef = React.useRef(null);

    React.useEffect(() => {
      fabricService.initCanvas(canvasRef.current);
      console.log(fabricService)
      setCanvas(fabricService.canvas)
    }, []);

    return <canvas ref={canvasRef} width={width} height={height}/>
  }

  const initData = () => {
    const canvaasdass =  fabricService.canvas
    const objects = getData()
    objects.forEach((object) => {
        const rect = new fabric.Rect(object);  
        canvas.add(rect)
    })
    canvaasdass.on('mouse:down', function(options) {
      console.log(options);
    });
  }

  return <>
    <Form
      onClick = {initData}
      initialJSON ={initialJSON}
    />
    <Canvas/>
  </>
}

export default App;
