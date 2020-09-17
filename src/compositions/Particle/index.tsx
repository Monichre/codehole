import React from 'react'
import Particles from 'react-particles-js'

const ParticlesComponent = () => {
  return (
    <>
      <Particles
        className='particle'
        params={{
          particles: {
            number: {
              value: 7,
              density: { enable: true, value_area: 800 },
            },

            shape: {
              type: ['images'],
              images: [
                {
                  src: '', //`${Particle1}`,
                  width: 25,
                  height: 25,
                },
                {
                  src: '', //`${Particle2}`,
                  width: 18,
                  height: 18,
                },
                {
                  src: '', //`${Particle3}`,
                  width: 32,
                  height: 32,
                },
                {
                  src: '', //`${Particle4}`,
                  width: 41,
                  height: 41,
                },
                {
                  src: '', //`${Particle5}`,
                  width: 22,
                  height: 22,
                },
                {
                  src: '', //`${Particle6}`,
                  width: 22,
                  height: 22,
                },
                {
                  src: '', //`${Particle7}`,
                  width: 22,
                  height: 22,
                },
              ],
            },
            opacity: {
              value: 0.17626369048095938,
              random: true,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 10,
              random: false,
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: 'none',
              random: false,
              straight: false,
              bounce: true,
              attract: { enable: true, rotateX: 100, rotateY: 400 },
            },
          },
          retina_detect: true,
        }}
      />
    </>
  )
}
export default ParticlesComponent
