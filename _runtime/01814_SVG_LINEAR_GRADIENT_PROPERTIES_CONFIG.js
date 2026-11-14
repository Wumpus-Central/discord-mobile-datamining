// _runtime/01814_SVG_LINEAR_GRADIENT_PROPERTIES_CONFIG.js
const obj = {
  x1: true,
  x2: true,
  y1: true,
  y2: true,
  gradient: { process: fn(1803).processSVGGradientStops },
  gradientUnits: {
    process(arg0) {
      let num = 0;
      if ("userSpaceOnUse" === arg0) {
        num = 1;
      }
      return num;
    },
  },
};

export const SVG_LINEAR_GRADIENT_PROPERTIES_CONFIG = obj;
