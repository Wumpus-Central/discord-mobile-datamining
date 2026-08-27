// === Module 14483: route ===

// Module 14483 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2369 */;
import MobileUserSettings from "MobileUserSettings" /* 7816 */;
import createToggle from "createToggle" /* 10988 */;

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
    return require(14484) /* FamilyCenterParentalControlsSettings */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterSettingParentalControlsSetting.tsx");

export default route;
export const FamilyCenterParentalControlsSetting = route;