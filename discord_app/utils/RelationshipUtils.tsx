// discord_app/utils/RelationshipUtils.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import ME from "../Constants.tsx";
import getSystemLocale from "../intl/index.native.tsx";
import getAvatarURLDefault from "AvatarUtils.tsx";
import _modDef4770 from "../actions/ChannelActionCreators.tsx";
import _modDef14825 from "../actions/NotificationActionCreators.tsx";

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
  const intl = require("../intl/index.native.tsx").intl;
  const stringResult = intl.string(require("../intl/index.native.tsx").t.MYr3Ka);
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