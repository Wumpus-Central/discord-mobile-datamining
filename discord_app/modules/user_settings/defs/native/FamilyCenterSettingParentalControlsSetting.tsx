// discord_app/modules/user_settings/defs/native/FamilyCenterSettingParentalControlsSetting.tsx
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2335 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import createToggle from "createToggle" /* 10669 */;
import { FamilyCenterParentalControlsSettings } from "../../family_center/native/UserSettingsFamilyCenterParentalControls.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.ahKIJO);
  },
  parent: MobileUserSettings.MobileUserSettings.FAMILY_CENTER,
  unsearchable: true,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS,
  getComponent() {
    return FamilyCenterParentalControlsSettings.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterSettingParentalControlsSetting.tsx");

export default route;
export const FamilyCenterParentalControlsSetting = route;