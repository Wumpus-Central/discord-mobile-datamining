// discord_app/modules/user_profile/native/UserProfileAlertUtils.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useAlertStore").fileFinishedImporting("modules/user_profile/native/UserProfileAlertUtils.tsx");

export const confirmCancelFriendRequest = function confirmCancelFriendRequest(arg0) {
  let obj = require("../../../design/components/AlertModal/native/useAlertStore.native.tsx") /* useAlertStore */;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("cancel-friend-request", jsx(require("UserProfileConfirmCancelFriendRequest.tsx"), {}));
};
export const confirmRemoveFriend = function confirmRemoveFriend(arg0) {
  let obj = require("../../../design/components/AlertModal/native/useAlertStore.native.tsx") /* useAlertStore */;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("remove-friend", jsx(require("UserProfileConfirmRemoveFriend.tsx"), {}));
};
export const confirmRemoveGameFriend = function confirmRemoveGameFriend(arg0) {
  let obj = require("../../../design/components/AlertModal/native/useAlertStore.native.tsx") /* useAlertStore */;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("remove-game-friend", jsx(require("UserProfileConfirmRemoveGameFriend.tsx"), {}));
};
export const confirmVideoUnstableConnection = function confirmVideoUnstableConnection(onConfirm) {
  let obj = require("../../../design/components/AlertModal/native/useAlertStore.native.tsx") /* useAlertStore */;
  obj = { onConfirm };
  obj.openAlert("video-unstable-connection", jsx(require("UserProfileConfirmVideoUnstableConnection.tsx"), { onConfirm }));
};
export const alertUserReported = function alertUserReported() {
  require("../../../design/components/AlertModal/native/useAlertStore.native.tsx") /* useAlertStore */.openAlert("user-reported", jsx(require("UserProfileAlertUserReported.tsx"), {}));
};
export const confirmThreadRemove = function confirmThreadRemove(arg0) {
  let obj = require("../../../design/components/AlertModal/native/useAlertStore.native.tsx") /* useAlertStore */;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("thread-remove", jsx(require("UserProfileConfirmThreadRemove.tsx"), {}));
};