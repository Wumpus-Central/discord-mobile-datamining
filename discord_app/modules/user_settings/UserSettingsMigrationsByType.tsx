// === Module 1343: MAX_FAVORITES ===

// Module 1343 (MAX_FAVORITES)
import set from "set" /* 2 */;
import MAX_FAVORITES from "MAX_FAVORITES" /* 685 */;

const UserSettingsTypes = MAX_FAVORITES.UserSettingsTypes;
const result = set.fileFinishedImporting("modules/user_settings/UserSettingsMigrationsByType.tsx");

export default { [UserSettingsTypes.PRELOADED_USER_SETTINGS]: [], [UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: [] };