// discord_app/utils/RelationshipUtils.tsx
import Constants from "../Constants.tsx";
import util from "../intl/index.native.tsx";
import AvatarUtilsDefault from "AvatarUtils.tsx";
import ChannelActionCreatorsDefault from "../actions/ChannelActionCreators.tsx";
import NotificationActionCreatorsDefault from "../actions/NotificationActionCreators.tsx";
import FriendsActionCreatorsDefault from "../actions/FriendsActionCreators.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const FriendsSections = Constants.FriendsSections;
const result = size.fileFinishedImporting("utils/RelationshipUtils.tsx");

export const showPendingNotification = function showPendingNotification(user) {
  const intl = util.intl;
  const stringResult = intl.string(util.t["t3+Af3"]);
  const obj = NotificationActionCreatorsDefault;
  obj.showNotification(
    AvatarUtilsDefault.getUserAvatarURL(user),
    user.username,
    stringResult,
    {},
    {
      omitViewTracking: true,
      omitClickTracking: true,
      tag: user.id,
      onClick: () => {
        FriendsActionCreatorsDefault.transitionToSection(constants.PENDING, { explicit: true });
      },
      isUserAvatar: true,
    },
  );
};
export const showAcceptedNotification = function showAcceptedNotification(user) {
  _require = user;
  const intl = require("util").intl;
  const stringResult = intl.string(require("util").t.MYr3Ka);
  const obj = NotificationActionCreatorsDefault;
  obj.showNotification(
    AvatarUtilsDefault.getUserAvatarURL(user),
    user.username,
    stringResult,
    {},
    {
      omitViewTracking: true,
      omitClickTracking: true,
      tag: user.id,
      onClick: () => {
        ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: user.id });
      },
      isUserAvatar: true,
    },
  );
};
