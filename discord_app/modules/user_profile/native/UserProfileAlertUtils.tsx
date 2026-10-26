// === Module 13546: UserProfileAlertUtils ===

// Module 13546 (UserProfileAlertUtils)
import useAlertStore from "useAlertStore" /* 5910 */;
import UserProfileConfirmCancelFriendRequestDefault from "UserProfileConfirmCancelFriendRequest" /* 13547 */;
import UserProfileConfirmRemoveFriendDefault from "UserProfileConfirmRemoveFriend" /* 13548 */;
import UserProfileConfirmRemoveGameFriendDefault from "UserProfileConfirmRemoveGameFriend" /* 13549 */;
import UserProfileConfirmVideoUnstableConnectionDefault from "UserProfileConfirmVideoUnstableConnection" /* 13550 */;
import UserProfileAlertUserReportedDefault from "UserProfileAlertUserReported" /* 13551 */;
import UserProfileConfirmThreadRemoveDefault from "UserProfileConfirmThreadRemove" /* 13552 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAlertUtils.tsx");

export const confirmCancelFriendRequest = function confirmCancelFriendRequest(arg0) {
  const obj = useAlertStore;
  const obj2 = {};
  const merged = Object.assign(arg0);
  obj.openAlert("cancel-friend-request", jsx(UserProfileConfirmCancelFriendRequestDefault, {}));
};
export const confirmRemoveFriend = function confirmRemoveFriend(arg0) {
  const obj = useAlertStore;
  const obj2 = {};
  const merged = Object.assign(arg0);
  obj.openAlert("remove-friend", jsx(UserProfileConfirmRemoveFriendDefault, {}));
};
export const confirmRemoveGameFriend = function confirmRemoveGameFriend(arg0) {
  const obj = useAlertStore;
  const obj2 = {};
  const merged = Object.assign(arg0);
  obj.openAlert("remove-game-friend", jsx(UserProfileConfirmRemoveGameFriendDefault, {}));
};
export const confirmVideoUnstableConnection = function confirmVideoUnstableConnection(onConfirm) {
  useAlertStore.openAlert("video-unstable-connection", jsx(UserProfileConfirmVideoUnstableConnectionDefault, { onConfirm }));
};
export const alertUserReported = function alertUserReported() {
  useAlertStore.openAlert("user-reported", jsx(UserProfileAlertUserReportedDefault, {}));
};
export const confirmThreadRemove = function confirmThreadRemove(arg0) {
  const obj = useAlertStore;
  const obj2 = {};
  const merged = Object.assign(arg0);
  obj.openAlert("thread-remove", jsx(UserProfileConfirmThreadRemoveDefault, {}));
};