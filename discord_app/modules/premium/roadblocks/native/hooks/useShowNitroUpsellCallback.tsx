// === Module 9739: useShowNitroUpsellCallback ===

// Module 9739 (useShowNitroUpsellCallback)
import _mod1654 from "module_1654" /* 1654 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/roadblocks/native/hooks/useShowNitroUpsellCallback.tsx");

export default function useShowNitroUpsellCallback() {
  const sharedValue = _mod1654.useSharedValue(false);
  items = [sharedValue];
  return {
    shouldShowUpsell: sharedValue,
    onShowNitroUpsell: noop.useCallback((arg0) => {
      const result = sharedValue.set(arg0);
    }, items)
  };
};