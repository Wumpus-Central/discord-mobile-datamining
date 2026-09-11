// === Module 12713: UserProfileAlertUtils ===

// Module 12713 (UserProfileAlertUtils)
import useAlertStore from "useAlertStore" /* 4952 */;
import UserProfileConfirmCancelFriendRequestDefault from "UserProfileConfirmCancelFriendRequest" /* 12714 */;
import UserProfileConfirmRemoveFriendDefault from "UserProfileConfirmRemoveFriend" /* 12715 */;
import UserProfileConfirmRemoveGameFriendDefault from "UserProfileConfirmRemoveGameFriend" /* 12716 */;
import UserProfileConfirmVideoUnstableConnectionDefault from "UserProfileConfirmVideoUnstableConnection" /* 12717 */;
import UserProfileAlertUserReportedDefault from "UserProfileAlertUserReported" /* 12718 */;
import UserProfileConfirmThreadRemoveDefault from "UserProfileConfirmThreadRemove" /* 12719 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAlertUtils.tsx");

export const confirmCancelFriendRequest = function confirmCancelFriendRequest(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("cancel-friend-request", jsx(UserProfileConfirmCancelFriendRequestDefault, {}));
};
export const confirmRemoveFriend = function confirmRemoveFriend(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("remove-friend", jsx(UserProfileConfirmRemoveFriendDefault, {}));
};
export const confirmRemoveGameFriend = function confirmRemoveGameFriend(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("remove-game-friend", jsx(UserProfileConfirmRemoveGameFriendDefault, {}));
};
export const confirmVideoUnstableConnection = function confirmVideoUnstableConnection(onConfirm) {
  const obj = { onConfirm };
  obj.openAlert("video-unstable-connection", jsx(UserProfileConfirmVideoUnstableConnectionDefault, { onConfirm }));
};
export const alertUserReported = function alertUserReported() {
  useAlertStore.openAlert("user-reported", jsx(UserProfileAlertUserReportedDefault, {}));
};
export const confirmThreadRemove = function confirmThreadRemove(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("thread-remove", jsx(UserProfileConfirmThreadRemoveDefault, {}));
};