// === Module 14285: route ===

// Module 14285 (route)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2335 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import createToggle from "createToggle" /* 10669 */;

const obj = {
  route: ME.UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS,
  getComponent() {
    return require(14286) /* FamilyCenterParentalControlsSettings */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterSettingParentalControlsSetting.tsx");

export default route;
export const FamilyCenterParentalControlsSetting = route;