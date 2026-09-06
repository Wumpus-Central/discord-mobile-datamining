// discord_app/modules/user_settings/UserSettingsMigrationsByType.tsx
import UserSettingsConstants from "UserSettingsConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
const result = size.fileFinishedImporting("modules/user_settings/UserSettingsMigrationsByType.tsx");

export default {
  [UserSettingsTypes.PRELOADED_USER_SETTINGS]: [],
  [UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: [],
};
