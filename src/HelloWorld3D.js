import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";

function HelloWorld3D() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!ready) return null;

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Text position={[0, 0, 0]} fontSize={1} color="white">
        Hello World
      </Text>
    </Canvas>
  );
}

export default HelloWorld3D;
