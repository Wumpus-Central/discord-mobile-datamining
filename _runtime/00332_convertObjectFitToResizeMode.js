// === Module 332: convertObjectFitToResizeMode ===

// Module 332 (convertObjectFitToResizeMode)
let closure_0 = { contain: "contain", cover: "cover", fill: "stretch", "scale-down": "contain", none: "none" };

export const convertObjectFitToResizeMode = function convertObjectFitToResizeMode(objectFit) {
  let tmp;
  if (null != objectFit) {
    tmp = closure_0[objectFit];
  }
  return tmp;
};