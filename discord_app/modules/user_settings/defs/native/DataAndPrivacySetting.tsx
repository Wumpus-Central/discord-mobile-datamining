// === Module 15931: DataAndPrivacySetting ===

// Module 15931 (DataAndPrivacySetting)
import util from "util" /* 1114 */;
import ConsentActionCreators from "ConsentActionCreators" /* 14910 */;
import RequestYourDataSetting from "RequestYourDataSetting" /* 14913 */;
import noop from "module_19" /* 19 */;

require = fn;
fn(11562);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.OAuOHD);
  },
  parent: null,
  IconComponent: fn(9302).ShieldLockIcon,
  screen: {
    route: fn(1074).UserSettingsSections.DATA_AND_PRIVACY,
    getComponent() {
      return require("DataAndPrivacyScreen").default;
    }
  },
  usePreNavigationAction() {
    return noop.useCallback(() => {
      const consents = ConsentActionCreators.fetchConsents();
      const harvestStatus = RequestYourDataSetting.fetchHarvestStatus();
      return true;
    }, []);
  }
};
SettingBuilders = SettingBuilders.createRoute(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DataAndPrivacySetting.tsx");

export default SettingBuilders;