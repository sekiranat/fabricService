import React, {useState} from 'react';
import { fabric } from "fabric";
import { getData, initialJSON } from './services/getData.js'
import { Form } from './components/form'
import './app.css'
import { JsonArea} from './components/jsonArea'



export default function App() {

  const [data, setData] = useState(initialJSON);


  const fabricService = {
    initCanvas(canvasEl) {
      this.canvas = new fabric.Canvas(canvasEl);
    }
  }

  const Canvas = ({ width = 600, height = 450 })=> {
    const canvasRef = React.useRef();
    
    React.useEffect(() => {
      fabricService.initCanvas(canvasRef.current);
      fabricService.canvas.on('mouse:move', function () {
       // setData(fabricService.canvas.toJSON())
      });
    }, []);

    return <canvas ref={canvasRef} width={width} height={height} />
  }
  
  const initData = () => {
    const objects = getData()
    objects.forEach((object) => {
      const rect = new fabric.Rect(object);
      fabricService.canvas.add(rect)
    })
  }

  const addSquare = () => {
    const rect = new fabric.Rect({
      width: 50,
      height: 70,
      fill: "green",
      angle: 145,
      top: 350,
      left: 400
    });
    fabricService.canvas.add(rect);
  }

  const increaseObject = ()=> {
    const object = fabricService.canvas.getActiveObject()
    if (object) {
      object.set("width", object.width + 50 < 0 ? 5 : object.width + 50);
      fabricService.canvas.renderAll()
    }
  }

  const decreaseObject = () => {
    const object = fabricService.canvas.getActiveObject()
    if (object) {
      object.set("width", object.width - 50 < 0 ? 5 : object.width - 50);
      fabricService.canvas.renderAll()
    }
  }

  const changeColor = () => {
    const object = fabricService.canvas.getActiveObject()
    console.log(object)
    if (object) {
      const color = "#" + ((1 << 24) * Math.random() | 0).toString(16)
      object.set("fill", color);
      fabricService.canvas.renderAll()
    }
  }

  const deleteObject = () => {
    const canvas = fabricService.canvas
    canvas.remove(...canvas.getActiveObjects());
    canvas.discardActiveObject().renderAll();
  }

  const clearObjects = () => {
    const canvas = fabricService.canvas
    canvas.remove(...canvas.getObjects());
    canvas.discardActiveObject().renderAll();
  }

  return <>
    <div className="form-wrapper">
      <JsonArea
        data={data}
      />
      <Form
        onInitData={initData}
        onAddSquare={addSquare}
        onIncreaseObject={increaseObject}
        onDecreaseObject={decreaseObject}
        onDeleteObject={deleteObject}
        onClearObjects={clearObjects}
        onChangeColor={changeColor}
      />
      <Canvas />
    </div>
  </>
}
