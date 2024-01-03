import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Experience from "./components/Experience";
function App() {


  return (
    <>
     <Canvas
        flat
        camera={{ position: [0, 1.5, 6], fov: 30 }}
      >
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
    </>
  )
}

export default App
