// === Module 11988: SmartSearchConstants ===

// Module 11988 (SmartSearchConstants)
import DurationsDefault from "Durations" /* 1102 */;

const result = 60 * DurationsDefault.Millis.MINUTE;
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/intelligence_layer/search/SmartSearchConstants.tsx");

export const MAX_CACHED_ANSWER_GUILDS = 10;
export const MAX_CACHED_ANSWERS_PER_GUILD = 5;
export const MAX_PRESENTED_CITATIONS = 3;
export const MAX_CACHED_SUGGESTED_SEARCH_GUILDS = 5;
export const MAX_CACHED_SUGGESTED_SEARCH_CHANNELS = 5;
export const SUGGESTED_SEARCHES_REQUEST_LIMIT = 20;
export const SUGGESTED_SEARCH_CHANNEL_KEY_DELIMITER = "|";
export const SUGGESTED_SEARCHES_RETRY_MIN_MS = DurationsDefault.Millis.MINUTE;
export const SUGGESTED_SEARCHES_RETRY_MAX_MS = result;
export const SUGGESTED_SEARCHES_WINDOW_SIZE = 3;
export const SUGGESTED_SEARCH_COMPACT_LABEL_HEIGHT = 40;