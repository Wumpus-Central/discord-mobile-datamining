// discord_app/modules/user_settings/defs/native/DataAndPrivacySetting.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { DataAndPrivacySettings } from "../../privacy_and_safety/native/DataAndPrivacyScreen.tsx";

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
    return DataAndPrivacySettings /* DataAndPrivacySettings */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/DataAndPrivacySetting.tsx");

export default createToggle;