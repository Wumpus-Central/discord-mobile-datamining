// discord_app/modules/user_settings/defs/native/DataAndPrivacySetting.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import ShieldLockIcon from "../../../../design/components/Icon/native/redesign/generated/ShieldLockIcon.tsx";
import ConsentActionCreators from "../../../../actions/ConsentActionCreators.tsx";
import RequestYourDataSetting from "RequestYourDataSetting.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          const obj = ConsentActionCreators;
          const consents = obj.fetchConsents();
          const obj2 = RequestYourDataSetting;
          const harvestStatus = obj2.fetchHarvestStatus();
          return true;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () =>
      react.useCallback(() => {
        const obj = ConsentActionCreators;
        const consents = obj.fetchConsents();
        const obj2 = RequestYourDataSetting;
        const harvestStatus = obj2.fetchHarvestStatus();
        return true;
      }, []);
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.OAuOHD);
  },
  parent: null,
  IconComponent: ShieldLockIcon.ShieldLockIcon,
  screen: {
    route: UserSettingsSections.DATA_AND_PRIVACY,
    getComponent() {
      return require("DataAndPrivacyScreen").default;
    },
  },
  usePreNavigationAction: tmp2,
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DataAndPrivacySetting.tsx");

export default route;
