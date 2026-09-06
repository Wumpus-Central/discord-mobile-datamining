// discord_app/modules/premium/roadblocks/native/hooks/useShowNitroUpsellCallback.tsx
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/roadblocks/native/hooks/useShowNitroUpsellCallback.tsx");

export default function useShowNitroUpsellCallback() {
  let obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(false);
  const items = [sharedValue];
  obj = {
    shouldShowUpsell: sharedValue,
    onShowNitroUpsell: noop.useCallback((arg0) => {
      const result = sharedValue.set(arg0);
    }, items),
  };
  return obj;
}
