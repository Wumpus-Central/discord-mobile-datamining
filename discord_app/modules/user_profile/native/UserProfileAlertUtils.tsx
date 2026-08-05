// discord_app/modules/user_profile/native/UserProfileAlertUtils.tsx
import "noop";
import { jsx } from "jsxProd";
import { useAlertStore } from "../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import { UserProfileAlertUserReported } from "UserProfileAlertUserReported.tsx";
import { UserProfileConfirmCancelFriendRequest } from "UserProfileConfirmCancelFriendRequest.tsx";
import { UserProfileConfirmRemoveFriend } from "UserProfileConfirmRemoveFriend.tsx";
import { UserProfileConfirmRemoveGameFriend } from "UserProfileConfirmRemoveGameFriend.tsx";
import { UserProfileConfirmThreadRemove } from "UserProfileConfirmThreadRemove.tsx";
import { UserProfileConfirmVideoUnstableConnection } from "UserProfileConfirmVideoUnstableConnection.tsx";

const require = arg1;
const result = require("useAlertStore").fileFinishedImporting("modules/user_profile/native/UserProfileAlertUtils.tsx");

export const confirmCancelFriendRequest = function confirmCancelFriendRequest(arg0) {
  let obj = useAlertStore;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("cancel-friend-request", jsx(UserProfileConfirmCancelFriendRequest, {}));
};
export const confirmRemoveFriend = function confirmRemoveFriend(arg0) {
  let obj = useAlertStore;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("remove-friend", jsx(UserProfileConfirmRemoveFriend, {}));
};
export const confirmRemoveGameFriend = function confirmRemoveGameFriend(arg0) {
  let obj = useAlertStore;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("remove-game-friend", jsx(UserProfileConfirmRemoveGameFriend, {}));
};
export const confirmVideoUnstableConnection = function confirmVideoUnstableConnection(onConfirm) {
  let obj = useAlertStore;
  obj = { onConfirm };
  obj.openAlert("video-unstable-connection", jsx(UserProfileConfirmVideoUnstableConnection, { onConfirm }));
};
export const alertUserReported = function alertUserReported() {
  useAlertStore.openAlert("user-reported", jsx(UserProfileAlertUserReported, {}));
};
export const confirmThreadRemove = function confirmThreadRemove(arg0) {
  let obj = useAlertStore;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("thread-remove", jsx(UserProfileConfirmThreadRemove, {}));
};