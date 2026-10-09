// === Module 9492: useShowNitroUpsellCallback ===

// Module 9492 (useShowNitroUpsellCallback)
import c from "c" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/roadblocks/native/hooks/useShowNitroUpsellCallback.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useShowNitroUpsellCallback() {
  const cResult = c.c(5);
  const sharedValue = ReanimatedRexport.useSharedValue(false);
  if (cResult[0] !== sharedValue) {
    const fn = function l(arg0) {
      const result = sharedValue.set(arg0);
    };
    cResult[0] = sharedValue;
    cResult[1] = fn;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === tmp3) {
    if (cResult[3] === sharedValue) {
      let tmp4 = cResult[4];
    }
    return tmp4;
  }
  const obj3 = { shouldShowUpsell: sharedValue, onShowNitroUpsell: tmp3 };
  cResult[2] = tmp3;
  cResult[3] = sharedValue;
  cResult[4] = obj3;
  tmp4 = obj3;
}) : (function useShowNitroUpsellCallback() {
  const sharedValue = ReanimatedRexport.useSharedValue(false);
  const items = [sharedValue];
  return {
    shouldShowUpsell: sharedValue,
    onShowNitroUpsell: noop.useCallback((arg0) => {
      const result = sharedValue.set(arg0);
    }, items)
  };
});