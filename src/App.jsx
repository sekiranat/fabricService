import React, {useState} from 'react';
import { fabric } from "fabric";
import { getData, initialJSON } from './services/getData.js'
import { Form } from './components/form'
import './app.css'

export default function App() {
  const [data, setData] = useState("");

  const canvasRef = React.useRef(null);
  let canvasFabric



  React.useEffect(() => {
    fabricInit(canvasRef.current)
  }, []);

  const fabricInit = (canvasEl) => {
    canvasFabric = new fabric.Canvas(canvasEl);
    canvasFabric.on('mouse:move', function () {
      updateJson()
    });
  }

  const initData = () => {
    const objects = getData()
    objects.forEach((object) => {
      const rect = new fabric.Rect(object);
      canvasFabric.add(rect)
    })


  }

  const updateJson = () => {
    setData(canvasFabric.toJSON())
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
    canvasFabric.add(rect);
  }

  const resizeObject = ()=> {
    const object = canvasFabric.getActiveObject()
    console.log(object)
    object.width = 500
    canvasFabric.renderAll()
  }

  return <>
    <Form
      onInitData={initData}
      onAddSquare={addSquare}
      onResizeObject={resizeObject}
      data={data}
    />
    <canvas ref={canvasRef}  width={600} height={600} />
  </>
}
