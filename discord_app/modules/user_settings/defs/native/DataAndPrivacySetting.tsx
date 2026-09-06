// discord_app/modules/user_settings/defs/native/DataAndPrivacySetting.tsx
import util from "../../../../intl/index.native.tsx";
import ConsentActionCreators from "../../../../actions/ConsentActionCreators.tsx";
import RequestYourDataSetting from "RequestYourDataSetting.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.OAuOHD);
  },
  parent: null,
  IconComponent: fn(9212).ShieldLockIcon,
  screen: {
    route: fn(1074).UserSettingsSections.DATA_AND_PRIVACY,
    getComponent() {
      return require("DataAndPrivacyScreen").default;
    },
  },
  usePreNavigationAction() {
    return noop.useCallback(() => {
      const consents = ConsentActionCreators.fetchConsents();
      const harvestStatus = RequestYourDataSetting.fetchHarvestStatus();
      return true;
    }, []);
  },
};
SettingBuilders = SettingBuilders.createRoute(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DataAndPrivacySetting.tsx");

export default SettingBuilders;
