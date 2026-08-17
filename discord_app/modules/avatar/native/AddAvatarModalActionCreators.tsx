// discord_app/modules/avatar/native/AddAvatarModalActionCreators.tsx
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import setDefault from "set" /* 4827 */;
import _modDef5260 from "module_5260" /* 5260 */;
import saveProfileAndAccountRequest from "saveProfileAndAccountRequest" /* 8620 */;
import _startContactSyncForDiscoverability from "_startContactSyncForDiscoverability" /* 11877 */;
import ADD_AVATAR_MODAL_KEY2 from "ADD_AVATAR_MODAL_KEY" /* 16646 */;
import { getSystemLocale } from "../../../intl/index.native.tsx";

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
    obj = _modDef5260;
    obj.popWithKey(ADD_AVATAR_MODAL_KEY);
    _startContactSyncForDiscoverability.nextOnboardingStep({ skip: false });
    const obj2 = _startContactSyncForDiscoverability;
  }
};
export const showSkipAvatarModal = function showSkipAvatarModal(arg0) {
  const _require = arg0;
  let obj = expandEventPropertiesDefault;
  obj.track(AnalyticEvents.NUO_TRANSITION, { flow_type: "Mobile NUX Post Reg", from_step: "Skip avatar modal", skip_attempt: true });
  obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, hideActionSheet: false };
  const intl = _getSystemLocale.intl;
  obj[0] = intl.string(_getSystemLocale.t.DnKHuV);
  const intl2 = _getSystemLocale.intl;
  obj[1] = intl2.string(_getSystemLocale.t["1EPySE"]);
  const intl3 = _getSystemLocale.intl;
  obj[2] = intl3.string(_getSystemLocale.t["7eZ3ji"]);
  const intl4 = _getSystemLocale.intl;
  obj[3] = intl4.string(_getSystemLocale.t.nhJ8OC);
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
  _modDef5260.pushLazy(asyncRequireImpl(16647, dependencyMap.paths), {}, ADD_AVATAR_MODAL_KEY);
};