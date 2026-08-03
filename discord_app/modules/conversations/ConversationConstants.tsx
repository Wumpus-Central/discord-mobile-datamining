// === Module 6954: CONVERSATION_COLORS ===

// Module 6954 (CONVERSATION_COLORS)
const result = require("set").fileFinishedImporting("modules/conversations/ConversationConstants.tsx");

export const CONVERSATION_COLORS = ["rgba(237, 66, 69, 0.12)", "rgba(230, 126, 34, 0.12)", "rgba(254, 231, 92, 0.12)", "rgba(87, 242, 135, 0.12)", "rgba(52, 152, 219, 0.12)", "rgba(88, 101, 242, 0.12)", "rgba(155, 89, 182, 0.12)"];
export const FETCH_LIMIT = 25;
export const MOBILE_FETCH_LIMIT = 10;
export const MIN_CONVERSATION_FETCH_BUFFER = 10;
export const MAX_CHANNELS_WITH_CONVERSATIONS = 10;
export const MAX_CONVERSATIONS_PER_CHANNEL = 50;
export const FETCH_BACKOFF_MIN_MS = 2000;
export const FETCH_BACKOFF_MAX_MS = 180000;
export const CONVERSATION_FEEDBACK_RATINGS_CACHE_MAX = 10;
export const PREVIEW_MESSAGE_COUNT = 4;
export const MOBILE_PREVIEW_MESSAGE_COUNT = 3;
export const CONVERSATION_HAS_MORE_EXPIRATION_MS = 3600000;