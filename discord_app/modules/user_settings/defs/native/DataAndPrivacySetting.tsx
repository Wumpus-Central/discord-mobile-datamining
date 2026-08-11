// discord_app/modules/user_settings/defs/native/DataAndPrivacySetting.tsx
import noop from "noop";
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { DataAndPrivacySettings } from "../../privacy_and_safety/native/DataAndPrivacyScreen.tsx";

const require = arg1;
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
      const consents = callback(14110).fetchConsents();
      const obj = callback(14110);
      const harvestStatus = callback(14113).fetchHarvestStatus();
      return true;
    }, []);
  }
};
createToggle = {
  route: require("ME").UserSettingsSections.DATA_AND_PRIVACY,
  getComponent() {
    return DataAndPrivacySettings.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("handleRequestSuccess").fileFinishedImporting("modules/user_settings/defs/native/DataAndPrivacySetting.tsx");

export default createToggle;