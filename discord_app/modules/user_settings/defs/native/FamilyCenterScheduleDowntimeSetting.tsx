// discord_app/modules/user_settings/defs/native/FamilyCenterScheduleDowntimeSetting.tsx
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../parent_tools/FamilyCenter.messages.js")["w/ISB8"]);
  },
  parent: require("MobileSetting").MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.FAMILY_CENTER_SCHEDULE_DOWNTIME,
  getComponent() {
    return require("../../../parent_tools/native/ScheduleDowntimeScreen.tsx") /* OverlappingSchedulesWarning */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterScheduleDowntimeSetting.tsx");

export default route;