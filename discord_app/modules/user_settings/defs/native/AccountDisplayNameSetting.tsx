// === Module 14518: AccountDisplayNameSetting ===

// Module 14518 (AccountDisplayNameSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11129);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function s() {
      currentUser = currentUser.getCurrentUser();
      let globalName;
      if (currentUser != null) {
        globalName = currentUser.globalName;
      }
      return globalName;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [UserStore];
  return initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let globalName;
    if (currentUser != null) {
      globalName = currentUser.globalName;
    }
    return globalName;
  });
});
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["9AjdkD"]);
  },
  parent: fn(7634).MobileUserSettings.ACCOUNT,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(2);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [UserStore];
      const fn = function s() {
        currentUser = currentUser.getCurrentUser();
        let globalName;
        if (currentUser != null) {
          globalName = currentUser.globalName;
        }
        return globalName;
      };
      cResult[0] = items;
      cResult[1] = fn;
      tmp4 = items;
      tmp5 = fn;
    } else {
      [tmp4, tmp5] = cResult;
    }
    return initialize.useStateFromStores(tmp4, tmp5);
  }) : (() => {
    const items = [UserStore];
    return initialize.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let globalName;
      if (currentUser != null) {
        globalName = currentUser.globalName;
      }
      return globalName;
    });
  }),
  screen: {
    route: fn(1085).UserSettingsSections.PROFILE_CUSTOMIZATION,
    getComponent() {
      return require("ProfileCustomizationSettingScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountDisplayNameSetting.tsx");

export default route;