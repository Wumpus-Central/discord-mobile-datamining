// discord_app/modules/user_settings/UserSettingsMigrationsByType.tsx
import set from "../../../_runtime/00002_set.js";
import MAX_FAVORITES from "UserSettingsConstants.tsx";

const UserSettingsTypes = MAX_FAVORITES.UserSettingsTypes;
const result = set.fileFinishedImporting("modules/user_settings/UserSettingsMigrationsByType.tsx");

export default { [UserSettingsTypes.PRELOADED_USER_SETTINGS]: [], [UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: [] };