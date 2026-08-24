// discord_app/modules/user_settings/account/native/SettingsAccountUtils.tsx
import defaultAreStatesEqual from "../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import closure_2 from "../../../../stores/AuthenticationStore.tsx";
import closure_3 from "../../../../stores/UserStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/account/native/SettingsAccountUtils.tsx");

export const useIs2FAEnabled = function useIs2FAEnabled() {
  const items = [closure_3];
  return defaultAreStatesEqual.useStateFromStores(items, () => {
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
};
export const useIsTOTPEnabled = function useIsTOTPEnabled() {
  const items = [closure_2];
  return defaultAreStatesEqual.useStateFromStores(items, () => closure_2.hasTOTPEnabled());
};
export const useIsUserVerified = function useIsUserVerified() {
  const items = [closure_3];
  return defaultAreStatesEqual.useStateFromStores(items, () => {
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
};