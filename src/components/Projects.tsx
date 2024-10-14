import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const ProjectModel = ({ position, rotation, scale }) => {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Interactive 3D Gallery</h2>
          <p className="mb-4">An immersive 3D art gallery experience.</p>
          <div className="h-64">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <Suspense fallback={null}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <ProjectModel
                  position={[0, 0, 0]}
                  rotation={[0, 0, 0]}
                  scale={[0.5, 0.5, 0.5]}
                />
              </Suspense>
            </Canvas>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">3D Product Configurator</h2>
          <p className="mb-4">Customize products in real-time 3D.</p>
          <div className="h-64">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <Suspense fallback={null}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <ProjectModel
                  position={[0, 0, 0]}
                  rotation={[0, 0, 0]}
                  scale={[0.5, 0.5, 0.5]}
                />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;