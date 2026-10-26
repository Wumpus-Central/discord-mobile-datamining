// === Module 16222: FamilyCenterSettingParentalControlsSetting ===

// Module 16222 (FamilyCenterSettingParentalControlsSetting)
import Constants from "Constants" /* 1087 */;
import util from "util" /* 1128 */;
import _modDef2536 from "module_2536" /* 2536 */;
import SettingsConstants from "SettingsConstants" /* 8332 */;
import SettingBuilders from "SettingBuilders" /* 11209 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2536.ahKIJO);
  },
  parent: SettingsConstants.MobileUserSettings.FAMILY_CENTER,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS,
    getComponent() {
      return require("UserSettingsFamilyCenterParentalControls").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterSettingParentalControlsSetting.tsx");

export default route;
export const FamilyCenterParentalControlsSetting = route;