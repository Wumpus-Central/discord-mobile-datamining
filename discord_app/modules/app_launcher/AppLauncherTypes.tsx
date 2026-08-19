// discord_app/modules/app_launcher/AppLauncherTypes.tsx
import obj132 from "../../../_runtime/00002_obj132.js";

const result = obj132.fileFinishedImporting("modules/app_launcher/AppLauncherTypes.tsx");

export const AppLauncherEntrypoint = { NONE: "NONE", TEXT: "TEXT", VOICE: "VOICE" };
export const AppLauncherSectionName = { SEARCH: "search", RECENT: "recent", INSTALLED: "installed", ACTIVITIES: "activities", RECENT_APPS: "recent_apps", RECENT_COMMANDS: "recent_commands", NEW_TO_APPS: "new_to_apps", APPS_IN_THIS_SERVER: "apps_in_this_server" };
export const AppLauncherLocations = { HOME: "home", APP_DETAIL: "app_detail" };
export const AppLauncherEmptyStateType = { HOME_EMPTY: "home_empty", SEARCH_EMPTY: "search_empty", HOME_NO_PERMISSIONS: "home_no_permissions", COMMAND_NO_PERMISSIONS: "command_no_permissions", COMMAND_NOT_FOUND: "command_not_found" };
export const AppLauncherCloseReason = { DISMISSED: 0, [0]: "DISMISSED", COMMAND: 1, [1]: "COMMAND", ACTIVITY: 2, [2]: "ACTIVITY" };
export const EntryPointCommandButtonActions = { OPEN_APP_DM: "open_app_dm", USE_APP_COMMAND: "use_app_command" };