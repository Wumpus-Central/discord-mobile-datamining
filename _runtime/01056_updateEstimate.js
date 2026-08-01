// === Module 1056: updateEstimate ===

// Module 1056 (updateEstimate)
const require = arg1;
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
      let num = 0;
      if (bound) {
        num = (bound - closure_4) / 7 + 1;
      }
    }
  });
}
arg5.getInteractionCount = () => {
  if (closure_2) {
    let tmp2 = c3;
  } else {
    const _performance = performance;
    tmp2 = performance.interactionCount || 0;
  }
  return tmp2;
};
arg5.initInteractionCountPolyfill = () => {
  if (!tmp) {
    let closure_2 = require(1046) /* observe */.observe("event", updateEstimate, { type: "event", buffered: true, durationThreshold: 0 });
    const obj = require(1046) /* observe */;
  }
};