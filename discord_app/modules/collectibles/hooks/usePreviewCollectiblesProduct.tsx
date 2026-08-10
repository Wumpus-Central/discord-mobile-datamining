// discord_app/modules/collectibles/hooks/usePreviewCollectiblesProduct.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { isAvatarDecorationRecord } from "fromServer";
import { isNameplateRecord } from "fromServer";
import { isProfileEffectRecord } from "fromServer";
import { isProfileFrameRecord } from "fromServer";
import { firstAvatarDecoration } from "useShopProductItems.tsx";

const require = arg1;
const result = require("fromServer").fileFinishedImporting("modules/collectibles/hooks/usePreviewCollectiblesProduct.tsx");

export const usePreviewCollectibleProduct = function usePreviewCollectibleProduct(product, arg1, arg2) {
  const _require = product;
  const dependencyMap = arg1;
  let _slicedToArray = arg2;
  const shopProductItems = _firstAvatarDecoration.useShopProductItems(product);
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
            if (outer1_7(tmp11)) {
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
        const obj1 = { profileEffect: null };
        obj1[0] = first;
        objResult.setPendingChanges(obj1);
      } else if (firstNameplate(first)) {
        const obj2 = { nameplate: null };
        obj2[0] = first;
        obj(setPendingChangesResult[8]).setPendingChanges(obj2);
        const objResult1 = obj(setPendingChangesResult[8]);
      } else if (outer1_7(first)) {
        const obj3 = { profileFrame: null };
        obj3[0] = first;
        obj(setPendingChangesResult[8]).setPendingChanges(obj3);
        const objResult2 = obj(setPendingChangesResult[8]);
      }
      return () => {
        if (closure_1) {
          outer1_0(outer1_1[8]).setPendingChanges({ avatarDecoration: "HermesInternal", profileEffect: "accessibilityRole", nameplate: "onPress", profileFrame: "keys" });
          const obj = outer1_0(outer1_1[8]);
        }
      };
    }
  }, items);
};