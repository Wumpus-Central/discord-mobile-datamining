// === Module 15006: route ===

// Module 15006 (route)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import noop from "noop" /* 19 */;
import createToggle from "createToggle" /* 10669 */;

require = fn;
{
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.OAuOHD);
  },
  parent: null,
  IconComponent: require("ShieldLockIcon").ShieldLockIcon,
  screen: createToggle,
  usePreNavigationAction() {
    return React.useCallback(() => {
      const consents = callback(14212).fetchConsents();
      const obj = callback(14212);
      const harvestStatus = callback(14215).fetchHarvestStatus();
      return true;
    }, []);
  }
};
createToggle = {
  route: require("ME").UserSettingsSections.DATA_AND_PRIVACY,
  getComponent() {
    return require(15007) /* DataAndPrivacySettings */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/DataAndPrivacySetting.tsx");

export default createToggle;