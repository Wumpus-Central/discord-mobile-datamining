// _runtime/01819_SVG_RADIAL_GRADIENT_PROPERTIES_CONFIG.js
const obj = {
  r: {
    process(rx) {
      return { rx, ry: rx };
    },
  },
  rx: true,
  ry: true,
  cx: {
    process(fx) {
      return { fx, cx: fx };
    },
  },
  cy: {
    process(fy) {
      return { fy, cy: fy };
    },
  },
  fx: true,
  fy: true,
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

export const SVG_RADIAL_GRADIENT_PROPERTIES_CONFIG = obj;
