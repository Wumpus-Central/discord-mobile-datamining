// discord_app/modules/profile_customization/native/openPremiumTryItOutModal.tsx
import asyncRequireImpl from "../../../../_runtime/02002_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import UserProfileAnalyticsUtils from "../../user_profile/UserProfileAnalyticsUtils.tsx";
import UserStore from "../../../stores/UserStore.tsx";

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
  const result = UserProfileAnalyticsUtils.trackUserProfileEditAction({
    userId: id,
    action: constants.ENTER_TRY_OUT_PREMIUM_PREVIEW,
  });
  const obj2 = { userId: id, action: constants.ENTER_TRY_OUT_PREMIUM_PREVIEW };
  ModalActionCreatorsDefault.pushLazy(
    asyncRequireImpl(15938, dependencyMap.paths),
    { initialTarget: avatar },
    undefined,
    { presentation: "fullScreenModal", fullScreenGestureEnabled: true },
  );
  const obj4 = { initialTarget: avatar };
};
