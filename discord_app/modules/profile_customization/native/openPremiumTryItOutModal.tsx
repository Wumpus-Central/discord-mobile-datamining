// === Module 16852: openPremiumTryItOutModal ===

// Module 16852 (openPremiumTryItOutModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8833 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
const constants = fn(8825).TrackUserProfileEditActions;
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
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16853, dependencyMap.paths), { initialTarget: avatar }, undefined, { presentation: "fullScreenModal", fullScreenGestureEnabled: true });
  const obj4 = { initialTarget: avatar };
}