// === Module 12966: useCollectibleProfileOverrides ===

// Module 12966 (useCollectibleProfileOverrides)
import c from "c" /* 576 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import useShopProductItems from "useShopProductItems" /* 7842 */;
import noop from "module_19" /* 19 */;

require = fn;
const isAvatarDecorationRecord = fn(7058).isAvatarDecorationRecord;
const isProfileEffectRecord = fn(7059).isProfileEffectRecord;
const isProfileFrameRecord = fn(7060).isProfileFrameRecord;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useCollectibleProfileOverrides.tsx");

export const useCollectibleProfileOverrides = ReactCompilerGating.isReactCompilerEnabled() ? ((items, first1) => {
  const cResult = c.c(9);
  if (cResult[0] !== items) {
    const productItems = useShopProductItems.getProductItems(items);
    cResult[0] = items;
    cResult[1] = productItems;
    let tmp4 = productItems;
    const tmpResult = useShopProductItems;
  } else {
    tmp4 = cResult[1];
  }
  ({ firstAvatarDecoration, firstProfileEffect, firstProfileFrame } = tmp4);
  const tmp6 = items.type === CollectiblesItemType.CollectiblesItemType.BUNDLE;
  if (cResult[2] === firstAvatarDecoration) {
    if (cResult[3] === firstProfileEffect) {
      if (cResult[4] === firstProfileFrame) {
        if (cResult[5] === tmp6) {
          if (cResult[6] === items.items) {
            if (cResult[7] === first1) {
              return cResult[8];
            }
          }
        }
      }
    }
  }
  if (tmp6) {
    const obj2 = { avatarDecoration: firstAvatarDecoration, profileEffect: firstProfileEffect, profileFrame: firstProfileFrame };
    let obj3 = obj2;
  } else {
    obj3 = {};
  }
  let first = first1;
  if (!tmp6) {
    first = items.items[0];
  }
  if (isAvatarDecorationRecord(first)) {
    obj3.avatarDecoration = first;
    cResult[2] = firstAvatarDecoration;
    cResult[3] = firstProfileEffect;
    cResult[4] = firstProfileFrame;
    cResult[5] = tmp6;
    items = items.items;
    cResult[6] = items;
    cResult[7] = first1;
    cResult[8] = obj3;
  } else if (!isProfileEffectRecord(first)) {
    if (isProfileFrameRecord(first)) {
      obj3.profileFrame = first;
    }
  }
  obj3.profileEffect = first;
}) : ((arg0, arg1) => {
  const type = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  return noop.useMemo(() => {
    const productItems = useShopProductItems.getProductItems(type);
    ({ firstAvatarDecoration, firstProfileEffect, firstProfileFrame } = productItems);
    const tmp3 = type.type === CollectiblesItemType.CollectiblesItemType.BUNDLE;
    if (tmp3) {
      const obj2 = { avatarDecoration: firstAvatarDecoration, profileEffect: firstProfileEffect, profileFrame: firstProfileFrame };
      let obj3 = obj2;
    } else {
      obj3 = {};
    }
    if (tmp3) {
      let first = closure_1;
    } else {
      first = type.items[0];
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
});