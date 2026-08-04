import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useAlertStore").fileFinishedImporting("modules/user_profile/native/UserProfileAlertUtils.tsx");

export const confirmCancelFriendRequest = function confirmCancelFriendRequest(arg0) {
  let obj = require(4625) /* useAlertStore */;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("cancel-friend-request", jsx(importDefault(11890), {}));
};
export const confirmRemoveFriend = function confirmRemoveFriend(arg0) {
  let obj = require(4625) /* useAlertStore */;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("remove-friend", jsx(importDefault(11891), {}));
};
export const confirmRemoveGameFriend = function confirmRemoveGameFriend(arg0) {
  let obj = require(4625) /* useAlertStore */;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("remove-game-friend", jsx(importDefault(11892), {}));
};
export const confirmVideoUnstableConnection = function confirmVideoUnstableConnection(onConfirm) {
  let obj = require(4625) /* useAlertStore */;
  obj = { onConfirm };
  obj.openAlert("video-unstable-connection", jsx(importDefault(11893), { onConfirm }));
};
export const alertUserReported = function alertUserReported() {
  require(4625) /* useAlertStore */.openAlert("user-reported", jsx(importDefault(11894), {}));
};
export const confirmThreadRemove = function confirmThreadRemove(arg0) {
  let obj = require(4625) /* useAlertStore */;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("thread-remove", jsx(importDefault(11895), {}));
};