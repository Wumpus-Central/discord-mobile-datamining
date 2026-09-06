// === Module 1695: WebEasings ===

// Module 1695 (WebEasings)
const WebEasings = { linear: [0, 0, 1, 1], ease: [0.42, 0, 1, 1], quad: [0.11, 0, 0.5, 0], cubic: [0.32, 0, 0.67, 0], sin: [0.12, 0, 0.39, 0], circle: [0.55, 0, 1, 0.45], exp: [0.7, 0, 0.84, 0] };

export { WebEasings };
export const getEasingByName = function getEasingByName(linear) {
  return "cubic-bezier(" + obj[linear].toString() + ")";
};
export const maybeGetBezierEasing = function maybeGetBezierEasing(easingV) {
  if ("factory" in easingV) {
    const factory = easingV.factory;
    if ("__closure" in factory) {
      const __closure = factory.__closure;
      let combined = null;
      if ("Bezier" in __closure) {
        const _HermesInternal = HermesInternal;
        combined = "cubic-bezier(" + __closure.x1 + ", " + __closure.y1 + ", " + __closure.x2 + ", " + __closure.y2 + ")";
      }
      return combined;
    } else {
      return null;
    }
  } else {
    return null;
  }
};