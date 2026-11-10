// === Module 18267: DataAndPrivacySetting ===

// Module 18267 (DataAndPrivacySetting)
import util from "util" /* 1113 */;
import ConsentActionCreators from "ConsentActionCreators" /* 17104 */;
import RequestYourDataSetting from "RequestYourDataSetting" /* 17107 */;
import noop from "module_19" /* 19 */;

require = fn;
const SettingBuilders = fn(11694);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.OAuOHD);
  },
  parent: null,
  IconComponent: fn(15001).ShieldLockIcon,
  screen: {
    route: fn(1072).UserSettingsSections.DATA_AND_PRIVACY,
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
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DataAndPrivacySetting.tsx");

export default route;