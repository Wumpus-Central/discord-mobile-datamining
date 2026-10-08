// === Module 12159: EnglishEmojiSuggestionsConstants ===

// Module 12159 (EnglishEmojiSuggestionsConstants)
import size from "module_2" /* 2 */;

const set = new Set(["aw", "bi", "dr", "ew", "ez", "gg", "go", "ha", "hi", "hm", "no", "np", "oh", "ok", "or", "tm", "tv", "ty", "wp", "xd", "yo"]);
const result = size.fileFinishedImporting("modules/chat_input/native/EnglishEmojiSuggestionsConstants.tsx");

export const SHORT_QUERY_ALLOWLIST = set;
export const QUERY_DENYLIST = new Set(["about", "all", "and", "any", "are", "been", "but", "can", "could", "for", "from", "get", "had", "has", "have", "her", "his", "how", "into", "its", "just", "new", "not", "now", "our", "see", "should", "some", "take", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "those", "too", "very", "was", "were", "what", "when", "where", "which", "who", "will", "with", "would", "you", "your"]);