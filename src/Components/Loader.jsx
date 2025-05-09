import React from "react";
import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{
        width: '200px',
        height: '20px',
        background: '#f0f0f0',
        borderRadius: '10px',
        overflow: 'hidden'
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          background: '#a8a8a8',
          transition: 'width 0.3s ease-in-out'
        }} />
      </div>
      <div style={{
        textAlign: 'center',
        marginTop: '10px',
        color: '#a8a8a8'
      }}>
        {Math.round(progress)}% loaded
      </div>
    </Html>
  );
}
