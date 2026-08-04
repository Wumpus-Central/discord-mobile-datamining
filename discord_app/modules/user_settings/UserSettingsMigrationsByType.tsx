// discord_app/modules/user_settings/UserSettingsMigrationsByType.tsx
import { UserSettingsTypes } from "MAX_FAVORITES";

const result = require("set").fileFinishedImporting("modules/user_settings/UserSettingsMigrationsByType.tsx");

export default { [UserSettingsTypes.PRELOADED_USER_SETTINGS]: [], [UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: [] };