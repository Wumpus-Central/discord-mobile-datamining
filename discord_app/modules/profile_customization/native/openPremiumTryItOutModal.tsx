// === Module 15744: openPremiumTryItOutModal ===

// Module 15744 (openPremiumTryItOutModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6623 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8617 */;
import UserStore from "UserStore" /* 1392 */;

require = fn;
const constants = fn(8609).TrackUserProfileEditActions;
const size = fn(2);
let result = size.fileFinishedImporting("modules/profile_customization/native/openPremiumTryItOutModal.tsx");

export const openPremiumTryItOutModal = function openPremiumTryItOutModal(avatar) {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const result = UserProfileAnalyticsUtils.trackUserProfileEditAction({ userId: id, action: constants.ENTER_TRY_OUT_PREMIUM_PREVIEW });
  const obj2 = { userId: id, action: constants.ENTER_TRY_OUT_PREMIUM_PREVIEW };
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15745, dependencyMap.paths), { initialTarget: avatar }, undefined, { presentation: "fullScreenModal", fullScreenGestureEnabled: true });
  const obj4 = { initialTarget: avatar };
};