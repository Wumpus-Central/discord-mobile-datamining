// discord_app/modules/user_settings/defs/native/AccountStandingSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import useAccountStandingStatusLabel from "../../../safety_hub/hooks/useAccountStandingStatusLabel.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { SettingsAccountStandingScreen } from "../../standing/native/SettingsAccountStandingScreen.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["16r9jm"]);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  useTrailing: useAccountStandingStatusLabel.useAccountStandingStatusLabel,
  screen: obj,
};
obj = {
  route: ME.UserSettingsSections.ACCOUNT_STANDING,
  getComponent() {
    return SettingsAccountStandingScreen /* SettingsAccountStandingScreen */.default;
  },
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AccountStandingSetting.tsx");

export default route;
