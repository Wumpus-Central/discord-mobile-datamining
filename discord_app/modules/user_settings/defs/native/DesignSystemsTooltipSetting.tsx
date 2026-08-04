import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Tooltip";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_TOOLTIP,
  getComponent() {
    return require(14701) /* Content */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTooltipSetting.tsx");

export default route;