// discord_app/utils/RelationshipUtils.tsx
import { FriendsSections } from "ME";

const result = require("getAvatarURL").fileFinishedImporting("utils/RelationshipUtils.tsx");

export const showPendingNotification = function showPendingNotification(user) {
  const intl = require("../intl/index.native.tsx") /* getSystemLocale */.intl;
  let obj = require("../actions/NotificationActionCreators.tsx");
  const stringResult = intl.string(require("../intl/index.native.tsx") /* getSystemLocale */.t["t3+Af3"]);
  obj = {
    omitViewTracking: true,
    omitClickTracking: true,
    tag: user.id,
    onClick: () => {
      callback(table[4]).transitionToSection(constants.PENDING, { explicit: true });
    },
    isUserAvatar: true
  };
  obj.showNotification(require("AvatarUtils.tsx").getUserAvatarURL(user), user.username, stringResult, {}, obj);
};
export const showAcceptedNotification = function showAcceptedNotification(user) {
  const _require = user;
  const intl = _require("../intl/index.native.tsx").intl;
  let obj = require("../actions/NotificationActionCreators.tsx");
  const stringResult = intl.string(_require("../intl/index.native.tsx").t.MYr3Ka);
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
  obj.showNotification(require("AvatarUtils.tsx").getUserAvatarURL(user), user.username, stringResult, {}, obj);
};