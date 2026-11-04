// === Module 16830: SettingsAccountUtils ===

// Module 16830 (SettingsAccountUtils)
import useStateFromStores from "useStateFromStores" /* 563 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/SettingsAccountUtils.tsx");

export function useIs2FAEnabled() {
  items = [UserStore];
  return useStateFromStores.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.mfaEnabled;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
}
export function useIsTOTPEnabled() {
  items = [AuthenticationStore];
  return useStateFromStores.useStateFromStores(items, () => AuthenticationStore.hasTOTPEnabled());
}
export function useIsUserVerified() {
  items = [UserStore];
  return useStateFromStores.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.verified;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
}