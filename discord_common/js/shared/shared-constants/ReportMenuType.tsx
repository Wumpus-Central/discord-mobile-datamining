// === Module 8139: set ===

// Module 8139 (set)
import obj132 from "obj132" /* 2 */;

const obj = { IN_APP: new Set(["application", "first_dm", "guild", "guild_directory_entry", "guild_discovery", "guild_scheduled_event", "message", "report_to_mod_message", "stage_channel", "user", "widget"]), REPORT_TO_MOD: null, UNAUTHENTICATED: null, CONSOLE: null };
const set = new Set(["application", "first_dm", "guild", "guild_directory_entry", "guild_discovery", "guild_scheduled_event", "message", "report_to_mod_message", "stage_channel", "user", "widget"]);
obj[1] = new Set(["report_to_mod_message"]);
const set1 = new Set(["report_to_mod_message"]);
obj[2] = new Set(["guild_urf", "media_takedown", "message_urf", "user_urf"]);
const set2 = new Set(["guild_urf", "media_takedown", "message_urf", "user_urf"]);
obj[3] = new Set(["playstation_console_voice", "xbox_console_voice"]);
const set3 = new Set(["playstation_console_voice", "xbox_console_voice"]);
const result = obj132.fileFinishedImporting("../discord_common/js/shared/shared-constants/ReportMenuType.tsx");

export const ReportMenuType = { message: "message", first_dm: "first_dm", guild: "guild", guild_directory_entry: "guild_directory_entry", guild_discovery: "guild_discovery", user: "user", stage_channel: "stage_channel", guild_scheduled_event: "guild_scheduled_event", application: "application", widget: "widget", user_urf: "user_urf", message_urf: "message_urf", guild_urf: "guild_urf", media_takedown: "media_takedown", xbox_console_voice: "xbox_console_voice", playstation_console_voice: "playstation_console_voice", report_to_mod_message: "report_to_mod_message" };
export const ReportMenuTypeSets = obj;