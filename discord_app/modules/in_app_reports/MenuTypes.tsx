// === Module 8698: ReportNames ===

// Module 8698 (ReportNames)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/in_app_reports/MenuTypes.tsx");

export const ReportNames = { GUILD: "guild", GUILD_DISCOVERY: "guild_discovery", GUILD_DIRECTORY_ENTRY: "guild_directory_entry", MESSAGE: "message", STAGE_CHANNEL: "stage_channel", GUILD_SCHEDULED_EVENT: "guild_scheduled_event", FIRST_DM: "first_dm", USER: "user", APPLICATION: "application", WIDGET: "widget" };
export const ModeratorReportNames = { MESSAGE: "report_to_mod_message" };
export const UnauthenticatedReportNames = { MESSAGE: "message_urf", USER: "user_urf", GUILD: "guild_urf", MEDIA_TAKEDOWN: "media_takedown" };
export const ReportSubType = { SUB_SPAM: "sub_spam", SUB_UNSOLICITED_PORN: "sub_unsolicited_porn", SUB_SEXUALLY_DEGRADING_CONTENT: "sub_sexually_degrading_content", SUB_NCP: "sub_ncp", SUB_LOLI: "sub_loli", SUB_CSAM: "sub_csam", SUB_GENERAL_HARASSMENT: "sub_general_harassment", SUB_VULGAR_LANGUAGE: "sub_vulgar_language", SUB_RACIST_OR_DICRIMINATORY_LANGUAGE_OR_IMAGERY: "sub_racist_or_discriminatory_language_or_imagery", SUB_GORE: "sub_gore", SUB_GLORIFYING_VIOLENCE: "sub_glorifying_violence" };
export const SettingsUpsells = { SAFETY_DM_SPAM_FILTER: "safety_dm_spam_filter", SAFETY_SC_FILTERS_SEXUAL_MEDIA: "safety_sc_filters_sexual_media", SAFETY_SC_FILTERS_GRAPHIC_MEDIA: "safety_sc_filters_graphic_media" };