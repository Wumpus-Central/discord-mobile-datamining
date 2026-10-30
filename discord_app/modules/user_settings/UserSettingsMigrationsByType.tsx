// === Module 1236: UserSettingsMigrationsByType ===

// Module 1236 (UserSettingsMigrationsByType)
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import size from "module_2" /* 2 */;

const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
const result = size.fileFinishedImporting("modules/user_settings/UserSettingsMigrationsByType.tsx");

export default { [UserSettingsTypes.PRELOADED_USER_SETTINGS]: [], [UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: [] };