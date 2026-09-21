// === Module 17879: RelationshipUtils ===

// Module 17879 (RelationshipUtils)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4769 */;
import NotificationActionCreatorsDefault from "NotificationActionCreators" /* 15792 */;
import FriendsActionCreatorsDefault from "FriendsActionCreators" /* 17880 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const FriendsSections = Constants.FriendsSections;
const result = size.fileFinishedImporting("utils/RelationshipUtils.tsx");

export const showPendingNotification = function showPendingNotification(user) {
  const intl = util.intl;
  const stringResult = intl.string(util.t["t3+Af3"]);
  const obj = NotificationActionCreatorsDefault;
  obj.showNotification(AvatarUtilsDefault.getUserAvatarURL(user), user.username, stringResult, {}, {
    omitViewTracking: true,
    omitClickTracking: true,
    tag: user.id,
    onClick: () => {
      FriendsActionCreatorsDefault.transitionToSection(constants.PENDING, { explicit: true });
    },
    isUserAvatar: true
  });
};
export const showAcceptedNotification = function showAcceptedNotification(user) {
  _require = user;
  const intl = require("util").intl;
  const stringResult = intl.string(require("util").t.MYr3Ka);
  const obj = NotificationActionCreatorsDefault;
  obj.showNotification(AvatarUtilsDefault.getUserAvatarURL(user), user.username, stringResult, {}, {
    omitViewTracking: true,
    omitClickTracking: true,
    tag: user.id,
    onClick: () => {
      ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: user.id });
    },
    isUserAvatar: true
  });
};