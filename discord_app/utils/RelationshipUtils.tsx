// discord_app/utils/RelationshipUtils.tsx
import set from "../../_runtime/00002_set.js";
import ME from "../Constants.tsx";
import getSystemLocale from "../intl/index.native.tsx";
import getAvatarURLDefault from "AvatarUtils.tsx";
import _modDef15343 from "../actions/NotificationActionCreators.tsx";

const FriendsSections = ME.FriendsSections;
const result = set.fileFinishedImporting("utils/RelationshipUtils.tsx");

export const showPendingNotification = function showPendingNotification(user) {
  const intl = getSystemLocale.intl;
  let obj = _modDef15343;
  const stringResult = intl.string(getSystemLocale.t["t3+Af3"]);
  obj = {
    omitViewTracking: true,
    omitClickTracking: true,
    tag: user.id,
    onClick: () => {
      callback(table[4]).transitionToSection(constants.PENDING, { explicit: true });
    },
    isUserAvatar: true,
  };
  obj.showNotification(getAvatarURLDefault.getUserAvatarURL(user), user.username, stringResult, {}, obj);
};
export const showAcceptedNotification = function showAcceptedNotification(user) {
  const _require = user;
  const intl = require("../intl/index.native.tsx").intl;
  let obj = _modDef15343;
  const stringResult = intl.string(require("../intl/index.native.tsx").t.MYr3Ka);
  obj = {
    omitViewTracking: true,
    omitClickTracking: true,
    tag: user.id,
    onClick: () => {
      let obj = closure_1_1(closure_1_2[5]);
      obj = { recipientIds: user.id };
      obj.openPrivateChannel(obj);
    },
    isUserAvatar: true,
  };
  obj.showNotification(getAvatarURLDefault.getUserAvatarURL(user), user.username, stringResult, {}, obj);
};
