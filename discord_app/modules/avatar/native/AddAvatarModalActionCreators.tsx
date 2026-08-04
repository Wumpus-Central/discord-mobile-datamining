import { ADD_AVATAR_MODAL_KEY } from "ADD_AVATAR_MODAL_KEY";
import { AnalyticEvents } from "ME";

let result = require("expandEventProperties").fileFinishedImporting("modules/avatar/native/AddAvatarModalActionCreators.tsx");

export const handlePressNext = function handlePressNext(pendingImage, first, fn) {
  if (null != pendingImage) {
    let obj = { default_avatar_selected: null, is_guild_profile: false, location: null };
    obj[0] = first;
    obj[2] = { page: "Onboarding" };
    importDefault(698).track(AnalyticEvents.USER_AVATAR_UPDATED, obj);
    const obj3 = importDefault(698);
    obj = { avatar: null, avatar_description: null };
    ({ imageUri: obj6[0], description: obj6[1] } = pendingImage);
    const result = require(8321) /* saveProfileAndAccountRequest */.saveProfileAndAccountRequest(obj);
    const obj5 = require(8321) /* saveProfileAndAccountRequest */;
  }
  if (null != fn) {
    fn();
  } else {
    obj = importDefault(4490);
    obj.popWithKey(ADD_AVATAR_MODAL_KEY);
    require(11972) /* _startContactSyncForDiscoverability */.nextOnboardingStep({ skip: false });
    const obj2 = require(11972) /* _startContactSyncForDiscoverability */;
  }
};
export const showSkipAvatarModal = function showSkipAvatarModal(arg0) {
  const _require = arg0;
  let obj = importDefault(698);
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
    callback(outer1_2[6]).setPendingChanges({ avatar: null });
    const obj = callback(outer1_2[6]);
    const tmp = callback;
    const result = callback(outer1_2[7]).announcePendingAvatarChange("remove");
    if (null != callback) {
      tmp5(true);
    } else {
      outer1_1(tmp2[8]).popWithKey(outer1_3);
      const obj3 = outer1_1(tmp2[8]);
      tmp(tmp2[11]).nextOnboardingStep({ skip: true });
      const tmpResult = tmp(tmp2[11]);
    }
  };
  importDefault(4623).show(obj);
};
export const openAddAvatarModal = function openAddAvatarModal() {
  importDefault(4490).pushLazy(require(1959) /* asyncRequireImpl */(16380, dependencyMap.paths), {}, ADD_AVATAR_MODAL_KEY);
};