import React from "react";
import styles from "./MultiLayerParallax.styles";

function MultiLayerParallax() {
  return (
    <div className="w-full h-screen overflow-hidden relative grid place-items-center">
      <h1 className="font-bold text-white text-7xl md:text-9xl relative z-10">
        PARALLAX
      </h1>

      <div className="absolute inset-0 z-0" style={styles.imgFull} />
      <div className="absolute inset-0 z-20" style={styles.imgBottom} />
    </div>
  );
}

export default MultiLayerParallax;
