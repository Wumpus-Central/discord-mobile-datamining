// === Module 921: ? ===

// Module 921
import observe from "observe" /* 911 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let c3 = 0;
const Infinity = Infinity;
let c5 = 0;
function updateEstimate(arr) {
  const item = arr.forEach((interactionId) => {
    if (interactionId.interactionId) {
      const _Math = Math;
      closure_4 = Math.min(closure_4, interactionId.interactionId);
      const _Math2 = Math;
      bound = Math.max(bound, interactionId.interactionId);
      if (bound) {
        num = (bound - closure_4) / 7 + 1;
      }
    }
  });
}

export const getInteractionCount = () => {
  if (closure_2) {
    let tmp2 = c3;
  } else {
    const _performance = performance;
    tmp2 = performance.interactionCount || 0;
  }
  return tmp2;
};
export const initInteractionCountPolyfill = () => {
  if (!tmp) {
    closure_2 = observe.observe("event", updateEstimate, { type: "event", buffered: true, durationThreshold: 0 });
  }
};