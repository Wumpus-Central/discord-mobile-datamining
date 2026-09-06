// === Module 17474: showPendingNotification ===

// Module 17474 (showPendingNotification)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import getAvatarURLDefault from "getAvatarURL" /* 1396 */;
import _modDef15515 from "module_15515" /* 15515 */;

const FriendsSections = ME.FriendsSections;
const result = set.fileFinishedImporting("utils/RelationshipUtils.tsx");

export const showPendingNotification = function showPendingNotification(user) {
  const intl = getSystemLocale.intl;
  let obj = _modDef15515;
  const stringResult = intl.string(getSystemLocale.t["t3+Af3"]);
  obj = {
    omitViewTracking: true,
    omitClickTracking: true,
    tag: user.id,
    onClick: () => {
      callback(table[4]).transitionToSection(constants.PENDING, { explicit: true });
    },
    isUserAvatar: true
  };
  obj.showNotification(getAvatarURLDefault.getUserAvatarURL(user), user.username, stringResult, {}, obj);
};
export const showAcceptedNotification = function showAcceptedNotification(user) {
  const _require = user;
  const intl = _require(1114).intl;
  let obj = _modDef15515;
  const stringResult = intl.string(_require(1114).t.MYr3Ka);
  obj = {
    omitViewTracking: true,
    omitClickTracking: true,
    tag: user.id,
    onClick: () => {
      let obj = closure_1_1(closure_1_2[5]);
      obj = { recipientIds: user.id };
      obj.openPrivateChannel(obj);
    },
    isUserAvatar: true
  };
  obj.showNotification(getAvatarURLDefault.getUserAvatarURL(user), user.username, stringResult, {}, obj);
};