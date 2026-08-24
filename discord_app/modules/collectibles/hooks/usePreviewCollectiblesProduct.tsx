// === Module 9268: usePreviewCollectibleProduct ===

// Module 9268 (usePreviewCollectibleProduct)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import { isAvatarDecorationRecord, isNameplateRecord, isProfileEffectRecord, isProfileFrameRecord } from "fromServer" /* 5306 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/usePreviewCollectiblesProduct.tsx");

export const usePreviewCollectibleProduct = function usePreviewCollectibleProduct(product, arg1, arg2) {
  const _require = product;
  dependencyMap = arg1;
  closure_2 = arg2;
  const shopProductItems = _require(9205).useShopProductItems(product);
  const firstProfileEffect = shopProductItems.firstProfileEffect;
  const firstAvatarDecoration = shopProductItems.firstAvatarDecoration;
  const firstNameplate = shopProductItems.firstNameplate;
  const firstProfileFrame = shopProductItems.firstProfileFrame;
  const items = [product, arg1, firstProfileEffect, firstAvatarDecoration, firstNameplate, firstProfileFrame, arg2];
  const effect = firstProfileEffect.useEffect(() => {
    let obj = product;
    let setPendingChangesResult = table;
    if (product.type === product(table[7]).CollectiblesItemType.BUNDLE) {
      obj = {};
      if (null != firstAvatarDecoration) {
        obj.avatarDecoration = firstAvatarDecoration;
      }
      if (null != firstProfileEffect) {
        obj.profileEffect = firstProfileEffect;
      }
      if (null != firstNameplate) {
        obj.nameplate = firstNameplate;
      }
      if (null != firstProfileFrame) {
        obj.profileFrame = firstProfileFrame;
      }
      if (null != callback) {
        if (firstAvatarDecoration(tmp11)) {
          obj.avatarDecoration = tmp11;
        } else {
          if (firstProfileFrame(tmp11)) {
            obj.profileEffect = tmp11;
          } else if (!firstNameplate(tmp11)) {
            if (closure_1_7(tmp11)) {
              obj.profileFrame = tmp11;
            }
          }
          obj.nameplate = tmp11;
        }
      }
      obj = obj(setPendingChangesResult[8]);
      setPendingChangesResult = obj.setPendingChanges(obj);
    } else {
      const first = callback(product.items, 1)[0];
      if (firstAvatarDecoration(first)) {
        let objResult = obj(setPendingChangesResult[8]);
        obj = { avatarDecoration: null };
        obj[0] = first;
        objResult.setPendingChanges(obj);
      } else if (firstProfileFrame(first)) {
        objResult = obj(setPendingChangesResult[8]);
        obj1 = { profileEffect: null };
        obj1[0] = first;
        objResult.setPendingChanges(obj1);
      } else if (firstNameplate(first)) {
        const obj2 = { nameplate: null };
        obj2[0] = first;
        obj(setPendingChangesResult[8]).setPendingChanges(obj2);
        const objResult1 = obj(setPendingChangesResult[8]);
      } else if (closure_1_7(first)) {
        const obj3 = { profileFrame: null };
        obj3[0] = first;
        obj(setPendingChangesResult[8]).setPendingChanges(obj3);
        const objResult2 = obj(setPendingChangesResult[8]);
      }
      return () => {
        if (closure_1) {
          closure_1_0(closure_1_1[8]).setPendingChanges({ avatarDecoration: "Array", profileEffect: "flex", nameplate: "y", profileFrame: "HermesInternal" });
          const obj = closure_1_0(closure_1_1[8]);
        }
      };
    }
  }, items);
};