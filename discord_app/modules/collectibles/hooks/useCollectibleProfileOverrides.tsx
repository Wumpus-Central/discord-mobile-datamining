// === Module 12985: useCollectibleProfileOverrides ===

// Module 12985 (useCollectibleProfileOverrides)
import react2 from "react" /* 576 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import AvatarDecorationRecord from "AvatarDecorationRecord" /* 7071 */;
import ProfileEffectRecord from "ProfileEffectRecord" /* 7072 */;
import ProfileFrameRecord from "ProfileFrameRecord" /* 7073 */;
import useShopProductItems from "useShopProductItems" /* 7853 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const isAvatarDecorationRecord = AvatarDecorationRecord.isAvatarDecorationRecord;
const isProfileEffectRecord = ProfileEffectRecord.isProfileEffectRecord;
const isProfileFrameRecord = ProfileFrameRecord.isProfileFrameRecord;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((type, first1) => {
  let firstAvatarDecoration;
  let firstProfileEffect;
  let firstProfileFrame;
  let obj3;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(9);
  if (cResult[0] !== type) {
    const tmpResult = useShopProductItems;
    const productItems = tmpResult.getProductItems(type);
    cResult[0] = type;
    cResult[1] = productItems;
    tmp4 = productItems;
  } else {
    tmp4 = cResult[1];
  }
  ({ firstAvatarDecoration, firstProfileEffect, firstProfileFrame } = tmp4);
  const tmp6 = type.type === CollectiblesItemType.CollectiblesItemType.BUNDLE;
  if (cResult[2] === firstAvatarDecoration) {
    if (cResult[3] === firstProfileEffect) {
      if (cResult[4] === firstProfileFrame) {
        if (cResult[5] === tmp6) {
          if (cResult[6] === type.items) {
            let tmp7;
            if (cResult[7] === first1) {
              tmp7 = cResult[8];
            }
            return tmp7;
          }
        }
      }
    }
  }
  if (tmp6) {
    obj3 = { avatarDecoration: firstAvatarDecoration, profileEffect: firstProfileEffect, profileFrame: firstProfileFrame };
    const obj2 = { avatarDecoration: firstAvatarDecoration, profileEffect: firstProfileEffect, profileFrame: firstProfileFrame };
  } else {
    obj3 = {};
  }
  let first = first1;
  if (!tmp6) {
    first = type.items[0];
  }
  if (isAvatarDecorationRecord(first)) {
    obj3.avatarDecoration = first;
  } else if (isProfileEffectRecord(first)) {
    obj3.profileEffect = first;
  } else if (isProfileFrameRecord(first)) {
    obj3.profileFrame = first;
  }
  cResult[2] = firstAvatarDecoration;
  cResult[3] = firstProfileEffect;
  cResult[4] = firstProfileFrame;
  cResult[5] = tmp6;
  cResult[6] = type.items;
  cResult[7] = first1;
  cResult[8] = obj3;
  tmp7 = obj3;
}) : ((arg0, arg1) => {
  const type = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  return react.useMemo(() => {
    let first;
    let firstAvatarDecoration;
    let firstProfileEffect;
    let firstProfileFrame;
    let obj3;
    const obj = useShopProductItems;
    const productItems = obj.getProductItems(type);
    ({ firstAvatarDecoration, firstProfileEffect, firstProfileFrame } = productItems);
    const tmp3 = type.type === CollectiblesItemType.CollectiblesItemType.BUNDLE;
    if (tmp3) {
      obj3 = { avatarDecoration: firstAvatarDecoration, profileEffect: firstProfileEffect, profileFrame: firstProfileFrame };
      const obj2 = { avatarDecoration: firstAvatarDecoration, profileEffect: firstProfileEffect, profileFrame: firstProfileFrame };
    } else {
      obj3 = {};
    }
    if (tmp3) {
      first = closure_1;
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
const result = size.fileFinishedImporting("modules/collectibles/hooks/useCollectibleProfileOverrides.tsx");

export const useCollectibleProfileOverrides = tmp2;