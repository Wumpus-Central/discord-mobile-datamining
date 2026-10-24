// === Module 15933: openPremiumTryItOutModal ===

// Module 15933 (openPremiumTryItOutModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8680 */;
import UserStore from "UserStore" /* 1392 */;

require = fn;
const constants = fn(8672).TrackUserProfileEditActions;
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
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15934, dependencyMap.paths), { initialTarget: avatar }, undefined, { presentation: "fullScreenModal", fullScreenGestureEnabled: true });
  const obj4 = { initialTarget: avatar };
};