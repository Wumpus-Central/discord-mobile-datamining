// === Module 9268: usePreviewCollectibleProduct ===

// Module 9268 (usePreviewCollectibleProduct)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { isAvatarDecorationRecord, isNameplateRecord, isProfileEffectRecord, isProfileFrameRecord } from "fromServer" /* 5306 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/collectibles/hooks/usePreviewCollectiblesProduct.tsx");

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
        if (firstAvatarDecoration(callback)) {
          obj.avatarDecoration = callback;
        } else {
          if (firstProfileFrame(callback)) {
            obj.profileEffect = callback;
          } else if (!firstNameplate(callback)) {
            if (isProfileFrameRecord(callback)) {
              obj.profileFrame = callback;
            }
          }
          obj.nameplate = callback;
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
      } else if (isProfileFrameRecord(first)) {
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