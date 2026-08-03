import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2255).ahKIJO);
  },
  parent: require("MobileSetting").MobileSetting.FAMILY_CENTER,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS,
  getComponent() {
    return require(14046) /* FamilyCenterParentalControlsSettings */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterSettingParentalControlsSetting.tsx");

export default route;
export const FamilyCenterParentalControlsSetting = route;