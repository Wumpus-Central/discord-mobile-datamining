// discord_app/modules/user_settings/defs/native/FamilyCenterSettingParentalControlsSetting.tsx
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../parent_tools/FamilyCenter.messages.js").ahKIJO);
  },
  parent: require("MobileSetting").MobileSetting.FAMILY_CENTER,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS,
  getComponent() {
    return require("../../family_center/native/UserSettingsFamilyCenterParentalControls.tsx") /* FamilyCenterParentalControlsSettings */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterSettingParentalControlsSetting.tsx");

export default route;
export const FamilyCenterParentalControlsSetting = route;