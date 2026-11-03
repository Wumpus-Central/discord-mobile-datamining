// === Module 1813: ? ===

// Module 1813
const size = {
  x: true,
  y: true,
  width: true,
  height: true,
  patternUnits: {
    process(arg0) {
      let num = 0;
      if ("userSpaceOnUse" === arg0) {
        num = 1;
      }
      return num;
    }
  },
  patternContentUnits: {
    process(arg0) {
      let num = 0;
      if ("userSpaceOnUse" === arg0) {
        num = 1;
      }
      return num;
    }
  }
};

export const SVG_PATTERN_PROPERTIES_CONFIG = size;