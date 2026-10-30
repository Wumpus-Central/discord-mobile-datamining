// discord_app/modules/user_settings/account/native/SettingsAccountUtils.tsx
import useStateFromStores from "../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/SettingsAccountUtils.tsx");

export function useIs2FAEnabled() {
  const items = [UserStore];
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
  const items = [AuthenticationStore];
  return useStateFromStores.useStateFromStores(items, () => AuthenticationStore.hasTOTPEnabled());
}
export function useIsUserVerified() {
  const items = [UserStore];
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
