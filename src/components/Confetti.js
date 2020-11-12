import React from 'react';
import ConfettiCanvas from 'react-confetti-canvas';

const canvas = {
  width: "400px",
  backgroundcolor:"black",
  position:"absolute",
}

const Confetti = ()=>{
  return(
   <ConfettiCanvas
  //  ribbonParticleAngle={90}
  //  ribbonParticleDist={8.0}
  //  ribbonParticleCount={30}
   paperCount={100}
    colors={[
    ['#F1948A', '#C39BD3'],
    ['#7FB3D5', '#76D7C4'],
    ['#F0B27A', '#7DCEA0'],
    ['white', '#7DCEA0']
  ]} /> 
  )

}

export default Confetti