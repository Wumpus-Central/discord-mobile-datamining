// === Module 14490: SettingsAccountUtils ===

// Module 14490 (SettingsAccountUtils)
import useStateFromStores from "useStateFromStores" /* 573 */;
import c from "c" /* 576 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
fn(558);
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function s() {
      currentUser = currentUser.getCurrentUser();
      let flag;
      if (currentUser != null) {
        flag = currentUser.mfaEnabled;
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return useStateFromStores.useStateFromStores(tmp4, tmp5);
}) : (() => {
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
});
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    const fn = function s() {
      return AuthenticationStore.hasTOTPEnabled();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return useStateFromStores.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [AuthenticationStore];
  return useStateFromStores.useStateFromStores(items, () => AuthenticationStore.hasTOTPEnabled());
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/SettingsAccountUtils.tsx");

export const useIs2FAEnabled = tmp2;
export const useIsTOTPEnabled = tmp3;
export const useIsUserVerified = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function s() {
      currentUser = currentUser.getCurrentUser();
      let flag;
      if (currentUser != null) {
        flag = currentUser.verified;
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return useStateFromStores.useStateFromStores(tmp4, tmp5);
}) : (() => {
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
});