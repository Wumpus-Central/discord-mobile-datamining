// === Module 14303: useIs2FAEnabled ===

// Module 14303 (useIs2FAEnabled)
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 647 */;
import closure_2 from "fetchFingerprint" /* 1218 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;

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