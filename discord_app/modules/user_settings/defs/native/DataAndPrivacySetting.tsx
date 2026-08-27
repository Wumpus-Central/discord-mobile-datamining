// === Module 15243: route ===

// Module 15243 (route)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import closure_2 from "noop" /* 19 */;
import createToggle from "createToggle" /* 10988 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.OAuOHD);
  },
  parent: null,
  IconComponent: require("ShieldLockIcon").ShieldLockIcon,
  screen: createToggle,
  usePreNavigationAction() {
    return React.useCallback(() => {
      const consents = callback(14410).fetchConsents();
      const obj = callback(14410);
      const harvestStatus = callback(14413).fetchHarvestStatus();
      return true;
    }, []);
  }
};
createToggle = {
  route: require("ME").UserSettingsSections.DATA_AND_PRIVACY,
  getComponent() {
    return require(15244) /* DataAndPrivacySettings */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/DataAndPrivacySetting.tsx");

export default createToggle;