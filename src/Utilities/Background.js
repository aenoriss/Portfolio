import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import React, { useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader, extend, useThree } from '@react-three/fiber';

function Background(src) {
    const { scene } = useThree();
    const [count, setCount] = useState(2000000)
    const [particlesGeometry, setParticlesGeometry] = useState(new THREE.BufferGeometry())
    const [effect, setEffect] = useState(true)


    useEffect(() => {

        //Load particles
        const textureLoader = new THREE.TextureLoader()
        const particleTexture = textureLoader.load("2.png")
        console.log(particleTexture)

        const particlesGeometry = new THREE.BufferGeometry();

        const positions = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)

        for (let i = 0; i < count * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 10
            colors[i] = Math.random();
        }


        particlesGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3)
        )

        // particlesGeometry.setAttribute(
        //     "color",
        //     new THREE.BufferAttribute(colors, 3)
        // )


        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.03,
            transparent: true,
            sizeAttenuation: true,
            color: "#03A062",
            alphaMap: particleTexture,
            // alphaTest: 0.001
            // depthTest: false
            depthWrite: false,
            blending: THREE.AdditiveBlending,

            //depthWrite could be the best, depending on the project
        })

        //Points
        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles)

       

    }, []);

    useFrame(() => {
        // This function runs at the native refresh rate inside of a shared render-loop
        const elapsedTime = clock.getElapsedTime()
        for(let i = 0; i < count; i++){
            const i3 = i * 4
    
            const x = particlesGeometry.attributes.position.array[i3] 
            particlesGeometry.attributes.position.array[i3 + 1] = particlesGeometry.attributes.position.array[i3 + 1]  -  Math.sin(elapsedTime - x)
        }
    
        particlesGeometry.attributes.position.needsUpdate = true;
      })

    return (
        null
    );
};

export default Background;