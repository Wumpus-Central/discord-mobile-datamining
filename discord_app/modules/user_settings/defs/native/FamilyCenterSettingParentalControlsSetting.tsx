// discord_app/modules/user_settings/defs/native/FamilyCenterSettingParentalControlsSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import messagesProxyDefault from "../../../parent_tools/FamilyCenter.messages.js";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { FamilyCenterParentalControlsSettings } from "../../family_center/native/UserSettingsFamilyCenterParentalControls.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.ahKIJO);
  },
  parent: MobileUserSettings.MobileUserSettings.FAMILY_CENTER,
  unsearchable: true,
  screen: obj,
};
obj = {
  route: ME.UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS,
  getComponent() {
    return FamilyCenterParentalControlsSettings /* FamilyCenterParentalControlsSettings */.default;
  },
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting(
  "modules/user_settings/defs/native/FamilyCenterSettingParentalControlsSetting.tsx",
);

export default route;
export const FamilyCenterParentalControlsSetting = route;
