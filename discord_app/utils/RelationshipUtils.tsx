// === Module 16692: showPendingNotification ===

// Module 16692 (showPendingNotification)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getAvatarURLDefault from "getAvatarURL" /* 1435 */;
import _modDef4770 from "module_4770" /* 4770 */;
import _modDef14825 from "module_14825" /* 14825 */;

const FriendsSections = ME.FriendsSections;
const result = obj132.fileFinishedImporting("utils/RelationshipUtils.tsx");

export const showPendingNotification = function showPendingNotification(user) {
  const intl = getSystemLocale.intl;
  const stringResult = intl.string(getSystemLocale.t["t3+Af3"]);
  const obj = {
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
  const intl = _require(1236).intl;
  const stringResult = intl.string(_require(1236).t.MYr3Ka);
  let obj = {
    omitViewTracking: true,
    omitClickTracking: true,
    tag: user.id,
    onClick: () => {
      const obj = { recipientIds: user.id };
      obj.openPrivateChannel(obj);
    },
    isUserAvatar: true
  };
  obj.showNotification(getAvatarURLDefault.getUserAvatarURL(user), user.username, stringResult, {}, obj);
};