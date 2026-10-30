// === Module 19541: RelationshipUtils ===

// Module 19541 (RelationshipUtils)
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1114 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7479 */;
import NotificationActionCreatorsDefault from "NotificationActionCreators" /* 17440 */;
import FriendsActionCreatorsDefault from "FriendsActionCreators" /* 19542 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const FriendsSections = Constants.FriendsSections;
const result = size.fileFinishedImporting("utils/RelationshipUtils.tsx");

export function showPendingNotification(user) {
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
}
export function showAcceptedNotification(user) {
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
}