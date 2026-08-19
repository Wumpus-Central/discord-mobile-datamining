// === Module 8506: SearchEntrypointAnalyticsLocations ===

// Module 8506 (SearchEntrypointAnalyticsLocations)
import obj132 from "obj132" /* 2 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 8507 */;

({ SearchHistoryItemTypes, SearchTabs } = MessageEmbedTypes);
let obj = { RECENT: "recent", CHANNELS: "channels", MEDIA: "media", PINS: "pins", LINKS: "links", FILES: "files", MESSAGES: "messages", PEOPLE: "people", MEMBERS: "members", THREADS: "threads" };
obj = { GUILD_CHANNEL: "guild_channel", GDM_CHANNEL: "gdm_channel", DM_CHANNEL: "dm_channel", PLAINTEXT: "plaintext" };
const result = obj132.fileFinishedImporting("modules/search/native/tracking/TrackingConstants.tsx");

export const SearchEntrypointAnalyticsLocations = { GUILD: "guild", CHANNEL_HEADER: "channel_header", CHANNEL_DETAILS_HEADER: "channel_details_header", DM_LIST: "dm_list", INDIVIDUAL_DM: "individual_dm" };
export const AnalyticsSearchTabs = obj;
export const SEARCH_TAB_TO_ANALYTICS_SEARCH_TAB = obj;
export const AnalyticsSearchHistoryTypes = obj;
export const SEARCH_HISTORY_TO_ANALYTICS_SEARCH_HISTORY = { [SearchHistoryItemTypes.GUILD_TEXT_CHANNEL]: obj.GUILD_CHANNEL, [SearchHistoryItemTypes.GUILD_VOICE_CHANNEL]: obj.GUILD_CHANNEL, [SearchHistoryItemTypes.GROUP_DM]: obj.GDM_CHANNEL, [SearchHistoryItemTypes.DM]: obj.DM_CHANNEL, [SearchHistoryItemTypes.TEXT]: obj.PLAINTEXT };
export const SearchFilterAddLocations = { SEARCH_HISTORY: "search_history", SEARCH_INPUT_DROPDOWN: "search_input_dropdown", CONTEXT_MENU: "context_menu", CLIENT_AUTO_ADD: "client_auto_add", SEARCH_INPUT_PLAINTEXT: "search_input_plaintext" };
export const SearchResultContentEntityTypes = { CHANNEL: "channel", MESSAGE: "message", USER: "user" };