
import { extend } from '@react-three/fiber';
import { LumaSplatsThree, LumaSplatsSemantics } from "@lumaai/luma-web";
import { OrbitControls } from '@react-three/drei';

// Make LumaSplatsThree available to R3F
extend({ LumaSplats: LumaSplatsThree });
const Experience = () => {
  return (
    <>
      <OrbitControls />
      <lumaSplats
        semanticsMask={LumaSplatsSemantics.FOREGROUND}
        source='https://lumalabs.ai/capture/822bac8d-70d6-404e-aaae-f89f46672c67'
        position={[0, 0, 0]}
        scale={0.5} />
    </>
  )
}

export default Experience