import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { messagesProxy } from "../../../parent_tools/FamilyCenter.messages.js";
import { OverlappingSchedulesWarning } from "../../../parent_tools/native/ScheduleDowntimeScreen.tsx";
// discord_app/modules/user_settings/defs/native/FamilyCenterScheduleDowntimeSetting.tsx
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(messagesProxy["w/ISB8"]);
  },
  parent: require("MobileSetting").MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.FAMILY_CENTER_SCHEDULE_DOWNTIME,
  getComponent() {
    return OverlappingSchedulesWarning /* OverlappingSchedulesWarning */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterScheduleDowntimeSetting.tsx");

export default route;