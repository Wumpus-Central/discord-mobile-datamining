// discord_app/modules/avatar/native/AddAvatarModalActionCreators.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import AlertActionCreatorsDefault from "../../../actions/AlertActionCreators.tsx";
import UserSettingsAccountActionCreators from "../../../actions/UserSettingsAccountActionCreators.tsx";
import UserProfileSettingsActionCreators from "../../user_profile/UserProfileSettingsActionCreators.tsx";
import ProfileCustomizationUtils from "../../profile_customization/ProfileCustomizationUtils.tsx";
import NUFActionCreators from "../../nuf/native/NUFActionCreators.tsx";
import AddAvatarModalConstants from "components/AddAvatarModalConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ADD_AVATAR_MODAL_KEY = AddAvatarModalConstants.ADD_AVATAR_MODAL_KEY;
const AnalyticEvents = Constants.AnalyticEvents;
let result = size.fileFinishedImporting("modules/avatar/native/AddAvatarModalActionCreators.tsx");

export const handlePressNext = function handlePressNext(pendingImage, default_avatar_selected, fn) {
  if (null != pendingImage) {
    let obj = { default_avatar_selected, is_guild_profile: false, location: { page: "Onboarding" } };
    AnalyticsUtilsDefault.track(AnalyticEvents.USER_AVATAR_UPDATED, obj);
    obj = { avatar: null, avatar_description: null };
    ({ imageUri: obj6.avatar, description: obj6.avatar_description } = pendingImage);
    const result = UserSettingsAccountActionCreators.saveProfileAndAccountRequest(obj);
  }
  if (null != fn) {
    fn();
  } else {
    obj = ModalActionCreatorsDefault;
    obj.popWithKey(ADD_AVATAR_MODAL_KEY);
    NUFActionCreators.nextOnboardingStep({ skip: false });
  }
};
export const showSkipAvatarModal = function showSkipAvatarModal(arg0) {
  _require = arg0;
  let obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.NUO_TRANSITION, {
    flow_type: "Mobile NUX Post Reg",
    from_step: "Skip avatar modal",
    skip_attempt: true,
  });
  obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, hideActionSheet: false };
  const intl = require("util").intl;
  obj.title = intl.string(require("util").t.DnKHuV);
  const intl2 = require("util").intl;
  obj.body = intl2.string(require("util").t["1EPySE"]);
  const intl3 = require("util").intl;
  obj.cancelText = intl3.string(require("util").t["7eZ3ji"]);
  const intl4 = require("util").intl;
  obj.confirmText = intl4.string(require("util").t.nhJ8OC);
  obj.onConfirm = function onConfirm() {
    UserProfileSettingsActionCreators.setPendingChanges({ avatar: null });
    const result = ProfileCustomizationUtils.announcePendingAvatarChange("remove");
    if (null != closure_0) {
      tmp5(true);
    } else {
      ModalActionCreatorsDefault.popWithKey(ADD_AVATAR_MODAL_KEY);
      NUFActionCreators.nextOnboardingStep({ skip: true });
      const tmpResult = NUFActionCreators;
    }
  };
  AlertActionCreatorsDefault.show(obj);
};
export const openAddAvatarModal = function openAddAvatarModal() {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17435, dependencyMap.paths), {}, ADD_AVATAR_MODAL_KEY);
};
