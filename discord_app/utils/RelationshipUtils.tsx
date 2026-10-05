// === Module 17614: RelationshipUtils ===

// Module 17614 (RelationshipUtils)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4903 */;
import NotificationActionCreatorsDefault from "NotificationActionCreators" /* 15342 */;
import FriendsActionCreatorsDefault from "FriendsActionCreators" /* 17615 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const FriendsSections = Constants.FriendsSections;
const result = size.fileFinishedImporting("utils/RelationshipUtils.tsx");

export const showPendingNotification = function showPendingNotification(user) {
  const intl = intl2.intl;
  const stringResult = intl.string(intl2.t["t3+Af3"]);
  const showNotification = NotificationActionCreatorsDefault.showNotification;
  NotificationActionCreatorsDefault;
  let obj = AvatarUtilsDefault;
  const obj2 = {
    omitViewTracking: true,
    omitClickTracking: true,
    tag: user.id,
    onClick: () => {
      const obj = FriendsActionCreatorsDefault;
      obj.transitionToSection(constants.PENDING, { explicit: true });
    },
    isUserAvatar: true
  };
  showNotification(obj.getUserAvatarURL(user), user.username, stringResult, {}, obj2);
};
export const showAcceptedNotification = function showAcceptedNotification(user) {
  _require = user;
  const intl = require("intl").intl;
  const stringResult = intl.string(require("intl").t.MYr3Ka);
  const showNotification = NotificationActionCreatorsDefault.showNotification;
  NotificationActionCreatorsDefault;
  let obj = AvatarUtilsDefault;
  let obj2 = {
    omitViewTracking: true,
    omitClickTracking: true,
    tag: user.id,
    onClick: () => {
      const obj = ChannelActionCreatorsDefault;
      const obj2 = { recipientIds: user.id };
      obj.openPrivateChannel(obj2);
    },
    isUserAvatar: true
  };
  showNotification(obj.getUserAvatarURL(user), user.username, stringResult, {}, obj2);
};