import React, { useRef, useState, Suspense } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Fox = () => {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Amazing 3D Team',
        from_email: form.email,
        to_email: 'contact@amazing3d.com',
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setLoading(false);
      alert('Thank you. We will get back to you as soon as possible.');
      setForm({
        name: '',
        email: '',
        message: '',
      });
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong. Please try again.');
    });
  };

  return (
    <div className="container mx-auto p-8 flex flex-col md:flex-row">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <form ref={formRef} onSubmit={handleSubmit} className="max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full p-2 bg-gray-800 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full p-2 bg-gray-800 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Your Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Hello, I'd like to talk about..."
              rows={4}
              className="w-full p-2 bg-gray-800 rounded"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
      <div className="md:w-1/2">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <Fox />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Contact;