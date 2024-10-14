import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, useGLTF, Html } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';

// Placeholder for Island component
const Island = () => {
  // TODO: Replace with actual 3D model
  return <mesh><boxGeometry args={[1, 1, 1]} /><meshStandardMaterial color="green" /></mesh>;
};

// Placeholder for Plane component
const Plane = () => {
  // TODO: Replace with actual 3D model
  return <mesh position={[2, 2, 0]}><boxGeometry args={[0.5, 0.2, 1]} /><meshStandardMaterial color="blue" /></mesh>;
};

// Placeholder for Bird component
const Bird = () => {
  // TODO: Replace with actual 3D model
  return <mesh><sphereGeometry args={[0.2, 32, 32]} /><meshStandardMaterial color="red" /></mesh>;
};

const Popup = ({ position, content }) => {
  const [show, setShow] = useState(false);
  const { camera } = useThree();

  useFrame(() => {
    const distance = camera.position.distanceTo(new THREE.Vector3(...position));
    if (distance < 5 && !show) setShow(true);
    else if (distance >= 5 && show) setShow(false);
  });

  return show ? (
    <Html position={position}>
      <div className="bg-white p-2 rounded shadow-lg">
        <p className="text-black">{content}</p>
      </div>
    </Html>
  ) : null;
};

const Scene = () => {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      
      <Suspense fallback={null}>
        <Island />
        <Plane />
        <Bird />
        <Popup position={[1, 2, 1]} content="Welcome to the Amazing 3D Island!" />
        <Popup position={[-1, 1, -1]} content="Explore our projects here!" />
      </Suspense>
    </>
  );
};

const Home: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Amazing 3D</h1>
        <p className="text-xl mb-8">Explore our immersive 3D world</p>
      </div>
      <div className="flex-1">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <Scene />
        </Canvas>
      </div>
    </div>
  );
};

export default Home;