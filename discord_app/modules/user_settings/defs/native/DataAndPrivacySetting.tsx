// discord_app/modules/user_settings/defs/native/DataAndPrivacySetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import ConsentActionCreators from "../../../../actions/ConsentActionCreators.tsx";
import RequestYourDataSetting from "RequestYourDataSetting.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11142);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
    }
  : () =>
      noop.useCallback(() => {
        const consents = ConsentActionCreators.fetchConsents();
        const harvestStatus = RequestYourDataSetting.fetchHarvestStatus();
        return true;
      }, []);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.OAuOHD);
  },
  parent: null,
  IconComponent: fn(9444).ShieldLockIcon,
  screen: {
    route: fn(1085).UserSettingsSections.DATA_AND_PRIVACY,
    getComponent() {
      return require("DataAndPrivacyScreen").default;
    },
  },
  usePreNavigationAction: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
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
      }
    : () =>
        noop.useCallback(() => {
          const consents = ConsentActionCreators.fetchConsents();
          const harvestStatus = RequestYourDataSetting.fetchHarvestStatus();
          return true;
        }, []),
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DataAndPrivacySetting.tsx");

export default route;
