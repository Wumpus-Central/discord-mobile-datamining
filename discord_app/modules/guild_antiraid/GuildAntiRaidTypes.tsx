// === Module 8017: GuildAntiRaidTypes ===

// Module 8017 (GuildAntiRaidTypes)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidTypes.tsx");

export const GuildIncidentActionSources = { MESSAGE: "message", NAGBAR: "nagbar", GUILD_SETTINGS: "guild_settings", CONTEXT_MENU: "context_menu", GUILD_PROFILE: "guild_profile", MEMBER_SAFETY_PAGE: "member_safety_page" };
export const GuildIncidentAlertTypes = { JOIN_RAID: "join_raid", DM_RAID: "dm_raid" };
export const GuildIncidentActionTypes = { INVITES_DISABLED: "invites_disabled", DMS_DISABLED: "dms_disabled" };