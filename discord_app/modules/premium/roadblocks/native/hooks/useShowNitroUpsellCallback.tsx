// discord_app/modules/premium/roadblocks/native/hooks/useShowNitroUpsellCallback.tsx
import _mod1655 from "../../../../../../_runtime/metro/01655__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/roadblocks/native/hooks/useShowNitroUpsellCallback.tsx");

export default function useShowNitroUpsellCallback() {
  const sharedValue = _mod1655.useSharedValue(false);
  items = [sharedValue];
  return {
    shouldShowUpsell: sharedValue,
    onShowNitroUpsell: noop.useCallback((arg0) => {
      const result = sharedValue.set(arg0);
    }, items),
  };
}
