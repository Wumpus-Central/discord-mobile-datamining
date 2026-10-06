// discord_app/modules/user_settings/defs/native/FamilyCenterScheduleDowntimeSetting.tsx
import Constants from "../../../../Constants.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import _modDef2521 from "../../../parent_tools/FamilyCenter.messages.js";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2521["w/ISB8"]);
  },
  parent: MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  unsearchable: true,
  screen: {
    route: UserSettingsSections.FAMILY_CENTER_SCHEDULE_DOWNTIME,
    getComponent() {
      return require("ScheduleDowntimeScreen").default;
    },
  },
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterScheduleDowntimeSetting.tsx");

export default route;
