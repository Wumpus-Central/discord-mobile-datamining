// discord_app/modules/user_settings/defs/native/AccountAgeGroupAssignedAdultSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import messagesProxyDefault from "../../../age_assurance/AgeAssurance.messages.js";
import useAgeVerificationRunner from "../../../age_assurance/AgeVerificationUtils.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { SettingsAgeGroupHeader } from "../../age_group/native/SettingsAgeGroupScreen.tsx";

const obj = {
  route: ME.UserSettingsSections.AGE_GROUP,
  getComponent() {
    return SettingsAgeGroupHeader /* SettingsAgeGroupHeader */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAssignedAdultSetting.tsx");

export default route;