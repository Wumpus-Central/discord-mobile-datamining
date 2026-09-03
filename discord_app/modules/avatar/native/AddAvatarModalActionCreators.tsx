// === Module 17267: handlePressNext ===

// Module 17267 (handlePressNext)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4724 from "module_4724" /* 4724 */;
import setDefault from "set" /* 4858 */;
import saveProfileAndAccountRequest from "saveProfileAndAccountRequest" /* 7768 */;
import _startContactSyncForDiscoverability from "_startContactSyncForDiscoverability" /* 12478 */;
import ADD_AVATAR_MODAL_KEY2 from "ADD_AVATAR_MODAL_KEY" /* 17268 */;

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
    obj = _modDef4724;
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
  const intl = _require(1233).intl;
  obj[0] = intl.string(_require(1233).t.DnKHuV);
  const intl2 = _require(1233).intl;
  obj[1] = intl2.string(_require(1233).t["1EPySE"]);
  const intl3 = _require(1233).intl;
  obj[2] = intl3.string(_require(1233).t["7eZ3ji"]);
  const intl4 = _require(1233).intl;
  obj[3] = intl4.string(_require(1233).t.nhJ8OC);
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
  _modDef4724.pushLazy(asyncRequireImpl(17269, dependencyMap.paths), {}, ADD_AVATAR_MODAL_KEY);
};