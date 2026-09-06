// discord_app/modules/user_settings/defs/native/FamilyCenterSettingParentalControlsSetting.tsx
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef2396 from "../../../parent_tools/FamilyCenter.messages.js";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2396.ahKIJO);
  },
  parent: SettingsConstants.MobileUserSettings.FAMILY_CENTER,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS,
    getComponent() {
      return require("UserSettingsFamilyCenterParentalControls").default;
    },
  },
});
const result = size.fileFinishedImporting(
  "modules/user_settings/defs/native/FamilyCenterSettingParentalControlsSetting.tsx",
);

export default route;
export const FamilyCenterParentalControlsSetting = route;
