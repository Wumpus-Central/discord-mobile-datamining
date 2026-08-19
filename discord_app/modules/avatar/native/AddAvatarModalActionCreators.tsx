// === Module 16645: handlePressNext ===

// Module 16645 (handlePressNext)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import obj132Default from "obj132" /* 4827 */;
import _modDef5260 from "module_5260" /* 5260 */;
import saveProfileAndAccountRequest from "saveProfileAndAccountRequest" /* 8620 */;
import _startContactSyncForDiscoverability from "_startContactSyncForDiscoverability" /* 11877 */;
import ADD_AVATAR_MODAL_KEY2 from "ADD_AVATAR_MODAL_KEY" /* 16646 */;

const ADD_AVATAR_MODAL_KEY = ADD_AVATAR_MODAL_KEY2.ADD_AVATAR_MODAL_KEY;
const AnalyticEvents = ME.AnalyticEvents;
let result = obj132.fileFinishedImporting("modules/avatar/native/AddAvatarModalActionCreators.tsx");

export const handlePressNext = function handlePressNext(pendingImage, arg1, fn) {
  if (null != pendingImage) {
    let obj = { default_avatar_selected: null, is_guild_profile: false, location: null };
    obj[0] = arg1;
    obj[2] = { page: "Onboarding" };
    expandEventPropertiesDefault.track(AnalyticEvents.USER_AVATAR_UPDATED, obj);
    obj = { avatar: null, avatar_description: null };
    ({ imageUri: obj6[0], description: obj6[1] } = pendingImage);
    const result = saveProfileAndAccountRequest.saveProfileAndAccountRequest(obj);
  }
  if (null != fn) {
    fn();
  } else {
    obj = _modDef5260;
    obj.popWithKey(ADD_AVATAR_MODAL_KEY);
    _startContactSyncForDiscoverability.nextOnboardingStep({ skip: false });
  }
};
export const showSkipAvatarModal = function showSkipAvatarModal(arg0) {
  const _require = arg0;
  let obj = expandEventPropertiesDefault;
  obj.track(AnalyticEvents.NUO_TRANSITION, { flow_type: "Mobile NUX Post Reg", from_step: "Skip avatar modal", skip_attempt: true });
  obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, hideActionSheet: false };
  const intl = _require(1236).intl;
  obj[0] = intl.string(_require(1236).t.DnKHuV);
  const intl2 = _require(1236).intl;
  obj[1] = intl2.string(_require(1236).t["1EPySE"]);
  const intl3 = _require(1236).intl;
  obj[2] = intl3.string(_require(1236).t["7eZ3ji"]);
  const intl4 = _require(1236).intl;
  obj[3] = intl4.string(_require(1236).t.nhJ8OC);
  obj[4] = function onConfirm() {
    callback(dependencyMap[6]).setPendingChanges({ avatar: null });
    const obj = callback(dependencyMap[6]);
    const result = callback(dependencyMap[7]).announcePendingAvatarChange("remove");
    if (null != callback) {
      tmp5(true);
    } else {
      _modDef5260.popWithKey(ADD_AVATAR_MODAL_KEY);
      callback(dependencyMap[11]).nextOnboardingStep({ skip: true });
      const tmpResult = callback(dependencyMap[11]);
    }
    const obj2 = callback(dependencyMap[7]);
  };
  obj132Default.show(obj);
};
export const openAddAvatarModal = function openAddAvatarModal() {
  _modDef5260.pushLazy(asyncRequireImpl(16647, dependencyMap.paths), {}, ADD_AVATAR_MODAL_KEY);
};