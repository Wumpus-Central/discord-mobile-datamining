// discord_app/modules/user_settings/UserSettingsMigrationsByType.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import MAX_FAVORITES from "UserSettingsConstants.tsx";

const UserSettingsTypes = MAX_FAVORITES.UserSettingsTypes;
const result = obj132.fileFinishedImporting("modules/user_settings/UserSettingsMigrationsByType.tsx");

export default { [UserSettingsTypes.PRELOADED_USER_SETTINGS]: [], [UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: [] };