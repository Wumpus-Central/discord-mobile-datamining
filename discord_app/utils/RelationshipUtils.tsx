// === Module 17474: RelationshipUtils ===

// Module 17474 (RelationshipUtils)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4573 */;
import NotificationActionCreatorsDefault from "NotificationActionCreators" /* 15515 */;
import FriendsActionCreatorsDefault from "FriendsActionCreators" /* 17475 */;
import size from "module_2" /* 2 */;

const FriendsSections = Constants.FriendsSections;
const result = size.fileFinishedImporting("utils/RelationshipUtils.tsx");

export const showPendingNotification = function showPendingNotification(user) {
  const intl = util.intl;
  const stringResult = intl.string(util.t["t3+Af3"]);
  const obj = {
    omitViewTracking: true,
    omitClickTracking: true,
    tag: user.id,
    onClick: () => {
      FriendsActionCreatorsDefault.transitionToSection(constants.PENDING, { explicit: true });
    },
    isUserAvatar: true
  };
  obj.showNotification(AvatarUtilsDefault.getUserAvatarURL(user), user.username, stringResult, {}, obj);
};
export const showAcceptedNotification = function showAcceptedNotification(user) {
  _require = user;
  const intl = require("util").intl;
  const stringResult = intl.string(require("util").t.MYr3Ka);
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
  obj.showNotification(AvatarUtilsDefault.getUserAvatarURL(user), user.username, stringResult, {}, obj);
};