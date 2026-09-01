// discord_app/modules/avatar/native/AddAvatarModalActionCreators.tsx
import set from "../../../../_runtime/00002_set.js";
import ME from "../../../Constants.tsx";
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/02009_asyncRequireImpl.js";
import _modDef4723 from "../../../actions/ModalActionCreators.tsx";
import setDefault from "../../../actions/AlertActionCreators.tsx";
import saveProfileAndAccountRequest from "../../../actions/UserSettingsAccountActionCreators.tsx";
import _startContactSyncForDiscoverability from "../../nuf/native/NUFActionCreators.tsx";
import ADD_AVATAR_MODAL_KEY2 from "components/AddAvatarModalConstants.tsx";

const ADD_AVATAR_MODAL_KEY = ADD_AVATAR_MODAL_KEY2.ADD_AVATAR_MODAL_KEY;
const AnalyticEvents = ME.AnalyticEvents;
let result = set.fileFinishedImporting("modules/avatar/native/AddAvatarModalActionCreators.tsx");

export const handlePressNext = function handlePressNext(pendingImage, first, fn) {
  if (null != pendingImage) {
    let obj = { default_avatar_selected: null, is_guild_profile: false, location: null };
    obj[0] = first;
    obj[2] = { page: "Onboarding" };
    expandEventPropertiesDefault.track(AnalyticEvents.USER_AVATAR_UPDATED, obj);
    const obj3 = expandEventPropertiesDefault;
    obj = { avatar: null, avatar_description: null };
    ({ imageUri: obj6[0], description: obj6[1] } = pendingImage);
    const result = saveProfileAndAccountRequest.saveProfileAndAccountRequest(obj);
    const obj5 = saveProfileAndAccountRequest;
  }
  if (null != fn) {
    fn();
  } else {
    obj = _modDef4723;
    obj.popWithKey(ADD_AVATAR_MODAL_KEY);
    _startContactSyncForDiscoverability.nextOnboardingStep({ skip: false });
    const obj2 = _startContactSyncForDiscoverability;
  }
};
export const showSkipAvatarModal = function showSkipAvatarModal(arg0) {
  const _require = arg0;
  let obj = expandEventPropertiesDefault;
  obj.track(AnalyticEvents.NUO_TRANSITION, {
    flow_type: "Mobile NUX Post Reg",
    from_step: "Skip avatar modal",
    skip_attempt: true,
  });
  obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, hideActionSheet: false };
  const intl = require("../../../intl/index.native.tsx").intl;
  obj[0] = intl.string(require("../../../intl/index.native.tsx").t.DnKHuV);
  const intl2 = require("../../../intl/index.native.tsx").intl;
  obj[1] = intl2.string(require("../../../intl/index.native.tsx").t["1EPySE"]);
  const intl3 = require("../../../intl/index.native.tsx").intl;
  obj[2] = intl3.string(require("../../../intl/index.native.tsx").t["7eZ3ji"]);
  const intl4 = require("../../../intl/index.native.tsx").intl;
  obj[3] = intl4.string(require("../../../intl/index.native.tsx").t.nhJ8OC);
  obj[4] = function onConfirm() {
    callback(closure_1_2[6]).setPendingChanges({ avatar: null });
    const obj = callback(closure_1_2[6]);
    const tmp = callback;
    const result = callback(closure_1_2[7]).announcePendingAvatarChange("remove");
    if (null != callback) {
      tmp5(true);
    } else {
      closure_1_1(tmp2[8]).popWithKey(closure_1_3);
      const obj3 = closure_1_1(tmp2[8]);
      tmp(tmp2[11]).nextOnboardingStep({ skip: true });
      const tmpResult = tmp(tmp2[11]);
    }
  };
  setDefault.show(obj);
};
export const openAddAvatarModal = function openAddAvatarModal() {
  _modDef4723.pushLazy(asyncRequireImpl(17013, dependencyMap.paths), {}, ADD_AVATAR_MODAL_KEY);
};
