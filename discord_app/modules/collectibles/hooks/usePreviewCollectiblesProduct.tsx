// discord_app/modules/collectibles/hooks/usePreviewCollectiblesProduct.tsx
import UserProfileSettingsActionCreators from "../../user_profile/UserProfileSettingsActionCreators.tsx";
import CollectiblePreviewSession from "../CollectiblePreviewSession.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserProfileSettingsStore from "../../user_profile/UserProfileSettingsStore.tsx";

require = fn;
const isAvatarDecorationRecord = fn(7547).isAvatarDecorationRecord;
const isNameplateRecord = fn(1887).isNameplateRecord;
const isProfileEffectRecord = fn(7548).isProfileEffectRecord;
const isProfileFrameRecord = fn(7549).isProfileFrameRecord;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/usePreviewCollectiblesProduct.tsx");

export const usePreviewCollectibleProduct = function usePreviewCollectibleProduct(product, arg1, arg2) {
  _require = product;
  dependencyMap = arg1;
  closure_2 = arg2;
  const shopProductItems = require("useShopProductItems").useShopProductItems(product);
  const firstProfileEffect = shopProductItems.firstProfileEffect;
  const firstAvatarDecoration = shopProductItems.firstAvatarDecoration;
  const firstNameplate = shopProductItems.firstNameplate;
  const firstProfileFrame = shopProductItems.firstProfileFrame;
  const items = [product, arg1, firstProfileEffect, firstAvatarDecoration, firstNameplate, firstProfileFrame, arg2];
  const effect = firstProfileEffect.useEffect(() => {
    let obj = product;
    let obj1 = product(11088);
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
      if (null != closure_2) {
        if (firstNameplate(tmp12)) {
          obj.avatarDecoration = tmp12;
        } else {
          if (isProfileEffectRecord(tmp12)) {
            obj.profileEffect = tmp12;
          } else if (!firstProfileFrame(tmp12)) {
            if (isProfileFrameRecord(tmp12)) {
              obj.profileFrame = tmp12;
            }
          }
          obj.nameplate = tmp12;
        }
      }
      obj = obj(8164);
      obj.setPendingChanges(obj);
    } else {
      const first = closure_2(product.items, 1)[0];
      if (firstNameplate(first)) {
        let objResult = obj(8164);
        obj = { avatarDecoration: first };
        objResult.setPendingChanges(obj);
      } else if (isProfileEffectRecord(first)) {
        objResult = obj(8164);
        obj1 = { profileEffect: first };
        objResult.setPendingChanges(obj1);
      } else if (firstProfileFrame(first)) {
        let obj2 = { nameplate: first };
        obj(8164).setPendingChanges(obj2);
        const objResult1 = obj(8164);
      } else if (isProfileFrameRecord(first)) {
        const obj3 = { profileFrame: first };
        obj(8164).setPendingChanges(obj3);
        const objResult2 = obj(8164);
      }
      return () => {
        let tmp = closure_1;
        if (closure_1) {
          tmp = closure_0 === CollectiblePreviewSession.currentPreviewGeneration();
        }
        if (tmp) {
          UserProfileSettingsActionCreators.setPendingChanges(closure_1);
        }
      };
    }
  }, items);
};
