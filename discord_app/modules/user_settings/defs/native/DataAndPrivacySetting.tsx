import noop from "noop";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.OAuOHD);
  },
  parent: null,
  IconComponent: require("ShieldLockIcon").ShieldLockIcon,
  screen: createToggle,
  usePreNavigationAction() {
    return React.useCallback(() => {
      const consents = callback(13972).fetchConsents();
      const obj = callback(13972);
      const harvestStatus = callback(13975).fetchHarvestStatus();
      return true;
    }, []);
  }
};
createToggle = {
  route: require("ME").UserSettingsSections.DATA_AND_PRIVACY,
  getComponent() {
    return require(14741) /* DataAndPrivacySettings */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("handleRequestSuccess").fileFinishedImporting("modules/user_settings/defs/native/DataAndPrivacySetting.tsx");

export default createToggle;