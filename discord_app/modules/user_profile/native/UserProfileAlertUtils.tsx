// === Module 12567: UserProfileAlertUtils ===

// Module 12567 (UserProfileAlertUtils)
import useAlertStore from "useAlertStore" /* 6094 */;
import UserProfileConfirmCancelFriendRequestDefault from "UserProfileConfirmCancelFriendRequest" /* 12568 */;
import UserProfileConfirmRemoveFriendDefault from "UserProfileConfirmRemoveFriend" /* 12569 */;
import UserProfileConfirmRemoveGameFriendDefault from "UserProfileConfirmRemoveGameFriend" /* 12570 */;
import UserProfileConfirmVideoUnstableConnectionDefault from "UserProfileConfirmVideoUnstableConnection" /* 12571 */;
import UserProfileAlertUserReportedDefault from "UserProfileAlertUserReported" /* 12572 */;
import UserProfileConfirmThreadRemoveDefault from "UserProfileConfirmThreadRemove" /* 12573 */;
import UserProfileConfirmRemoveWidgetDefault from "UserProfileConfirmRemoveWidget" /* 12574 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAlertUtils.tsx");

export function confirmCancelFriendRequest(arg0) {
  const obj = useAlertStore;
  const obj2 = {};
  const merged = Object.assign(arg0);
  obj.openAlert("cancel-friend-request", jsx(UserProfileConfirmCancelFriendRequestDefault, {}));
}
export function confirmRemoveFriend(arg0) {
  const obj = useAlertStore;
  const obj2 = {};
  const merged = Object.assign(arg0);
  obj.openAlert("remove-friend", jsx(UserProfileConfirmRemoveFriendDefault, {}));
}
export function confirmRemoveGameFriend(arg0) {
  const obj = useAlertStore;
  const obj2 = {};
  const merged = Object.assign(arg0);
  obj.openAlert("remove-game-friend", jsx(UserProfileConfirmRemoveGameFriendDefault, {}));
}
export function confirmVideoUnstableConnection(onConfirm) {
  useAlertStore.openAlert("video-unstable-connection", jsx(UserProfileConfirmVideoUnstableConnectionDefault, { onConfirm }));
}
export function alertUserReported() {
  useAlertStore.openAlert("user-reported", jsx(UserProfileAlertUserReportedDefault, {}));
}
export function confirmThreadRemove(arg0) {
  const obj = useAlertStore;
  const obj2 = {};
  const merged = Object.assign(arg0);
  obj.openAlert("thread-remove", jsx(UserProfileConfirmThreadRemoveDefault, {}));
}
export function confirmRemoveWidget(arg0) {
  ({ onConfirm: require, onDismissWithoutRemoving: importDefault } = arg0);
  c2 = false;
  const merged = Object.assign(arg0, Object.assign({ onConfirm: 0, onDismissWithoutRemoving: 0 }));
  const obj2 = {};
  const obj = useAlertStore;
  const merged1 = Object.assign(merged);
  obj2.onConfirm = function onConfirm() {
    c2 = true;
    require();
  };
  obj.openAlert("remove-widget", jsx(UserProfileConfirmRemoveWidgetDefault, {}), () => {
    if (!c2) {
      if (importDefault != null) {
        tmp();
      }
    }
  });
}