// discord_app/modules/collectibles/hooks/usePreviewCollectiblesProduct.tsx
import closure_2 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../../../../_runtime/00019_noop.js";
import closure_4 from "../../user_profile/UserProfileSettingsStore.tsx";
import {
  isAvatarDecorationRecord,
  isNameplateRecord,
  isProfileEffectRecord,
  isProfileFrameRecord,
} from "../records/AvatarDecorationRecord.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/usePreviewCollectiblesProduct.tsx");

export const usePreviewCollectibleProduct = function usePreviewCollectibleProduct(product, arg1, arg2) {
  const _require = product;
  dependencyMap = arg1;
  closure_2 = arg2;
  const shopProductItems = require("useShopProductItems.tsx").useShopProductItems(product);
  const firstProfileEffect = shopProductItems.firstProfileEffect;
  const firstAvatarDecoration = shopProductItems.firstAvatarDecoration;
  const firstNameplate = shopProductItems.firstNameplate;
  const firstProfileFrame = shopProductItems.firstProfileFrame;
  const items = [product, arg1, firstProfileEffect, firstAvatarDecoration, firstNameplate, firstProfileFrame, arg2];
  const effect = firstProfileEffect.useEffect(() => {
    let obj = product;
    obj1 = product(11088);
    product = obj1.currentPreviewGeneration();
    const pendingChanges = firstAvatarDecoration.getPendingChanges();
    dependencyMap = {
      avatarDecoration: pendingChanges.pendingAvatarDecoration,
      profileEffect: pendingChanges.pendingProfileEffect,
      nameplate: pendingChanges.pendingNameplate,
      profileFrame: pendingChanges.pendingProfileFrame,
    };
    if (product.type === product(1889).CollectiblesItemType.BUNDLE) {
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
        if (firstNameplate(tmp12)) {
          obj.avatarDecoration = tmp12;
        } else {
          if (closure_1_7(tmp12)) {
            obj.profileEffect = tmp12;
          } else if (!firstProfileFrame(tmp12)) {
            if (closure_1_8(tmp12)) {
              obj.profileFrame = tmp12;
            }
          }
          obj.nameplate = tmp12;
        }
      }
      obj = obj(8164);
      obj.setPendingChanges(obj);
    } else {
      const first = callback(product.items, 1)[0];
      if (firstNameplate(first)) {
        let objResult = obj(8164);
        obj = { avatarDecoration: null };
        obj[0] = first;
        objResult.setPendingChanges(obj);
      } else if (closure_1_7(first)) {
        objResult = obj(8164);
        obj1 = { profileEffect: null };
        obj1[0] = first;
        objResult.setPendingChanges(obj1);
      } else if (firstProfileFrame(first)) {
        let obj2 = { nameplate: null };
        obj2[0] = first;
        obj(8164).setPendingChanges(obj2);
        const objResult1 = obj(8164);
      } else if (closure_1_8(first)) {
        const obj3 = { profileFrame: null };
        obj3[0] = first;
        obj(8164).setPendingChanges(obj3);
        const objResult2 = obj(8164);
      }
      return () => {
        let tmp = dependencyMap;
        if (dependencyMap) {
          tmp = callback === callback(11088).currentPreviewGeneration();
          const obj = callback(11088);
        }
        if (tmp) {
          callback(8164).setPendingChanges(dependencyMap);
          const obj2 = callback(8164);
        }
      };
    }
  }, items);
};
