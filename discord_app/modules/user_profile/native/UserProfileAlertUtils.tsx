// discord_app/modules/user_profile/native/UserProfileAlertUtils.tsx
import useAlertStore from "../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import UserProfileConfirmCancelFriendRequestDefault from "UserProfileConfirmCancelFriendRequest.tsx";
import UserProfileConfirmRemoveFriendDefault from "UserProfileConfirmRemoveFriend.tsx";
import UserProfileConfirmRemoveGameFriendDefault from "UserProfileConfirmRemoveGameFriend.tsx";
import UserProfileConfirmVideoUnstableConnectionDefault from "UserProfileConfirmVideoUnstableConnection.tsx";
import UserProfileAlertUserReportedDefault from "UserProfileAlertUserReported.tsx";
import UserProfileConfirmThreadRemoveDefault from "UserProfileConfirmThreadRemove.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
