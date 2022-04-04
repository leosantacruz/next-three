import { Canvas } from "@react-three/fiber";
import Box from "../components/Box";
import LightBulb from "../components/Light";
import Floor from "../components/Floor";
import OrbitControls from "../components/OrbitControls";
import Draggable from "../components/Draggable";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <h1>Canvas!</h1>
      <Canvas
        shadows={true}
        className="canvas"
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.2} />
        <LightBulb position={[0, 3, 0]} />
        <OrbitControls />
        <Draggable>
          <Suspense fallback={null}>
            <Box rotateX={3} rotateY={0.2} />
          </Suspense>
        </Draggable>
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}
