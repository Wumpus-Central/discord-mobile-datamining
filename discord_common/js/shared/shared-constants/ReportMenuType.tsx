// === Module 8315: ReportMenuType ===

// Module 8315 (ReportMenuType)
import size from "module_2" /* 2 */;

const obj = { IN_APP: new Set(["application", "first_dm", "guild", "guild_directory_entry", "guild_discovery", "guild_scheduled_event", "message", "report_to_mod_message", "stage_channel", "user", "widget"]), REPORT_TO_MOD: new Set(["report_to_mod_message"]), UNAUTHENTICATED: new Set(["guild_urf", "media_takedown", "message_urf", "user_urf"]), CONSOLE: new Set(["playstation_console_voice", "xbox_console_voice"]) };
new Set(["application", "first_dm", "guild", "guild_directory_entry", "guild_discovery", "guild_scheduled_event", "message", "report_to_mod_message", "stage_channel", "user", "widget"]);
new Set(["report_to_mod_message"]);
new Set(["guild_urf", "media_takedown", "message_urf", "user_urf"]);
new Set(["playstation_console_voice", "xbox_console_voice"]);
const result = size.fileFinishedImporting("../discord_common/js/shared/shared-constants/ReportMenuType.tsx");

export const ReportMenuType = { message: "message", first_dm: "first_dm", guild: "guild", guild_directory_entry: "guild_directory_entry", guild_discovery: "guild_discovery", user: "user", stage_channel: "stage_channel", guild_scheduled_event: "guild_scheduled_event", application: "application", widget: "widget", user_urf: "user_urf", message_urf: "message_urf", guild_urf: "guild_urf", media_takedown: "media_takedown", xbox_console_voice: "xbox_console_voice", playstation_console_voice: "playstation_console_voice", report_to_mod_message: "report_to_mod_message" };
export const ReportMenuTypeSets = obj;