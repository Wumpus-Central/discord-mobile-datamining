// === Module 16103: openPremiumTryItOutModal ===

// Module 16103 (openPremiumTryItOutModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 6351 */;
import UserStore from "UserStore" /* 1386 */;

require = fn;
const constants = fn(6106).TrackUserProfileEditActions;
const size = fn(2);
let result = size.fileFinishedImporting("modules/profile_customization/native/openPremiumTryItOutModal.tsx");

export function openPremiumTryItOutModal(avatar) {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const result = UserProfileAnalyticsUtils.trackUserProfileEditAction({ userId: id, action: constants.ENTER_TRY_OUT_PREMIUM_PREVIEW });
  const obj2 = { userId: id, action: constants.ENTER_TRY_OUT_PREMIUM_PREVIEW };
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16104, dependencyMap.paths), { initialTarget: avatar }, undefined, { presentation: "fullScreenModal", fullScreenGestureEnabled: true });
  const obj4 = { initialTarget: avatar };
}