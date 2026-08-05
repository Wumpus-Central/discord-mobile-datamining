import { NotificationActionCreators } from "../actions/NotificationActionCreators.tsx";
import { getSystemLocale } from "../intl/index.native.tsx";
import { getAvatarURL } from "AvatarUtils.tsx";
// discord_app/utils/RelationshipUtils.tsx
import { FriendsSections } from "ME";

const result = require("getAvatarURL").fileFinishedImporting("utils/RelationshipUtils.tsx");

export const showPendingNotification = function showPendingNotification(user) {
  const intl = getSystemLocale /* getSystemLocale */.intl;
  let obj = NotificationActionCreators;
  const stringResult = intl.string(getSystemLocale /* getSystemLocale */.t["t3+Af3"]);
  obj = {
    omitViewTracking: true,
    omitClickTracking: true,
    tag: user.id,
    onClick: () => {
      callback(table[4]).transitionToSection(constants.PENDING, { explicit: true });
    },
    isUserAvatar: true
  };
  obj.showNotification(getAvatarURL.getUserAvatarURL(user), user.username, stringResult, {}, obj);
};
export const showAcceptedNotification = function showAcceptedNotification(user) {
  const _require = user;
  const intl = _getSystemLocale.intl;
  let obj = NotificationActionCreators;
  const stringResult = intl.string(_getSystemLocale.t.MYr3Ka);
  obj = {
    omitViewTracking: true,
    omitClickTracking: true,
    tag: user.id,
    onClick: () => {
      let obj = outer1_1(outer1_2[5]);
      obj = { recipientIds: user.id };
      obj.openPrivateChannel(obj);
    },
    isUserAvatar: true
  };
  obj.showNotification(getAvatarURL.getUserAvatarURL(user), user.username, stringResult, {}, obj);
};