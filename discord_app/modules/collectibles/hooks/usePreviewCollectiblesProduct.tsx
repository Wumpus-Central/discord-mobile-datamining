// === Module 11089: usePreviewCollectiblesProduct ===

// Module 11089 (usePreviewCollectiblesProduct)
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8164 */;
import CollectiblePreviewSession from "CollectiblePreviewSession" /* 11088 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8160 */;

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
    dependencyMap = { avatarDecoration: pendingChanges.pendingAvatarDecoration, profileEffect: pendingChanges.pendingProfileEffect, nameplate: pendingChanges.pendingNameplate, profileFrame: pendingChanges.pendingProfileFrame };
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
      if (null != nameplate) {
        if (firstNameplate(nameplate)) {
          obj.avatarDecoration = nameplate;
        } else {
          if (isProfileEffectRecord(nameplate)) {
            obj.profileEffect = nameplate;
          } else if (!firstProfileFrame(nameplate)) {
            if (isProfileFrameRecord(nameplate)) {
              obj.profileFrame = nameplate;
            }
          }
          obj.nameplate = nameplate;
        }
      }
      obj = obj(8164);
      obj.setPendingChanges(obj);
    } else {
      const first = nameplate(tmp3.items, 1)[0];
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
    tmp3 = product;
  }, items);
};