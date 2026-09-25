// === Module 12688: useCollectibleProfileOverrides ===

// Module 12688 (useCollectibleProfileOverrides)
import CollectiblesItemType from "CollectiblesItemType" /* 1973 */;
import useShopProductItems from "useShopProductItems" /* 7609 */;
import noop from "module_19" /* 19 */;

require = fn;
const isAvatarDecorationRecord = fn(6962).isAvatarDecorationRecord;
const isProfileEffectRecord = fn(6963).isProfileEffectRecord;
const isProfileFrameRecord = fn(6964).isProfileFrameRecord;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useCollectibleProfileOverrides.tsx");

export const useCollectibleProfileOverrides = function useCollectibleProfileOverrides(selectedProduct, arg1) {
  closure_1 = arg1;
  const items = [selectedProduct, arg1];
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
};