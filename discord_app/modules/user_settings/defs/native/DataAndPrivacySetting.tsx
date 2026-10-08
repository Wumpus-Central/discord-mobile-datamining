// === Module 16069: DataAndPrivacySetting ===

// Module 16069 (DataAndPrivacySetting)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import ConsentActionCreators from "ConsentActionCreators" /* 14940 */;
import RequestYourDataSetting from "RequestYourDataSetting" /* 14943 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11262);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePreNavigationAction() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const consents = ConsentActionCreators.fetchConsents();
      const harvestStatus = RequestYourDataSetting.fetchHarvestStatus();
      return true;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function usePreNavigationAction() {
  return noop.useCallback(() => {
    const consents = ConsentActionCreators.fetchConsents();
    const harvestStatus = RequestYourDataSetting.fetchHarvestStatus();
    return true;
  }, []);
});
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.OAuOHD);
  },
  parent: null,
  IconComponent: fn(9105).ShieldLockIcon,
  screen: {
    route: fn(1085).UserSettingsSections.DATA_AND_PRIVACY,
    getComponent() {
      return require("DataAndPrivacyScreen").default;
    }
  },
  usePreNavigationAction: ReactCompilerGating.isReactCompilerEnabled() ? (function usePreNavigationAction() {
    const cResult = c.c(1);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function t() {
        const consents = ConsentActionCreators.fetchConsents();
        const harvestStatus = RequestYourDataSetting.fetchHarvestStatus();
        return true;
      };
      cResult[0] = fn;
      let first = fn;
    } else {
      first = cResult[0];
    }
    return first;
  }) : (function usePreNavigationAction() {
    return noop.useCallback(() => {
      const consents = ConsentActionCreators.fetchConsents();
      const harvestStatus = RequestYourDataSetting.fetchHarvestStatus();
      return true;
    }, []);
  })
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DataAndPrivacySetting.tsx");

export default route;