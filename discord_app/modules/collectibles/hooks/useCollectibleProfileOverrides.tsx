// === Module 15246: useCollectibleProfileOverrides ===

// Module 15246 (useCollectibleProfileOverrides)
import CollectiblesItemType from "CollectiblesItemType" /* 2116 */;
import useShopProductItems from "useShopProductItems" /* 8883 */;
import noop from "module_19" /* 19 */;

require = fn;
const isAvatarDecorationRecord = fn(7865).isAvatarDecorationRecord;
const isProfileEffectRecord = fn(7866).isProfileEffectRecord;
const isProfileFrameRecord = fn(7867).isProfileFrameRecord;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useCollectibleProfileOverrides.tsx");

export function useCollectibleProfileOverrides(selectedProduct, arg1) {
  closure_1 = arg1;
  items = [selectedProduct, arg1];
  return noop.useMemo(() => {
    const productItems = useShopProductItems.getProductItems(selectedProduct);
    ({ firstAvatarDecoration, firstProfileEffect, firstProfileFrame } = productItems);
    const tmp3 = selectedProduct.type === CollectiblesItemType.CollectiblesItemType.BUNDLE;
    if (tmp3) {
      const obj2 = { avatarDecoration: firstAvatarDecoration, profileEffect: firstProfileEffect, profileFrame: firstProfileFrame };
      let obj3 = obj2;
    } else {
      obj3 = {};
    }
    if (tmp3) {
      let first = closure_1;
    } else {
      first = selectedProduct.items[0];
    }
    if (isAvatarDecorationRecord(first)) {
      obj3.avatarDecoration = first;
    } else if (isProfileEffectRecord(first)) {
      obj3.profileEffect = first;
    } else if (isProfileFrameRecord(first)) {
      obj3.profileFrame = first;
    }
    return obj3;
  }, items);
}