// === Module 1924: set ===

// Module 1924 (set)
import set from "set" /* 2 */;

const obj = { REACTION: 0, [0]: "REACTION", STATUS: 1, [1]: "STATUS", COMMUNITY_CONTENT: 2, [2]: "COMMUNITY_CONTENT", CHAT: 3, [3]: "CHAT", GUILD_STICKER_RELATED_EMOJI: 4, [4]: "GUILD_STICKER_RELATED_EMOJI", GUILD_ROLE_BENEFIT_EMOJI: 5, [5]: "GUILD_ROLE_BENEFIT_EMOJI", SOUNDBOARD: 6, [6]: "SOUNDBOARD", VOICE_CHANNEL_TOPIC: 7, [7]: "VOICE_CHANNEL_TOPIC", GIFT: 8, [8]: "GIFT", AUTO_SUGGESTION: 9, [9]: "AUTO_SUGGESTION", POLLS: 10, [10]: "POLLS", PROFILE: 11, [11]: "PROFILE", GUILD_PROFILE: 12, [12]: "GUILD_PROFILE", DEFAULT_REACT_EMOJI: 13, [13]: "DEFAULT_REACT_EMOJI", NO_CUSTOM_EMOJI: 14, [14]: "NO_CUSTOM_EMOJI", TYPING_INDICATOR: 15, [15]: "TYPING_INDICATOR" };
const items = [, , , , ];
({ COMMUNITY_CONTENT: arr[0], GUILD_STICKER_RELATED_EMOJI: arr[1], GUILD_ROLE_BENEFIT_EMOJI: arr[2], SOUNDBOARD: arr[3], GIFT: arr[4] } = obj);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/emojis/EmojiConstants.tsx");

export const DEFAULT_EMOJI_SLOTS = 50;
export const EMOJI_MAX_SLOTS_MORE = 200;
export const EMOJI_MAX_LENGTH = 32;
export const EMOJI_RE = /[^a-zA-Z0-9_]/g;
export const EMOJI_MAX_FILESIZE_KB = 256;
export const EMOJI_MAX_FILESIZE = 262144;
export const EMOJI_URL_BASE_SIZE = 48;
export const EmojiSprites = { NonDiversityPerRow: 42, [42]: "NonDiversityPerRow", DiversityPerRow: 10, [10]: "DiversityPerRow", PickerPerRow: 11, [11]: "PickerPerRow", PickerCount: 50, [50]: "PickerCount" };
export const EmojiDisabledReasons = { DISALLOW_EXTERNAL: 0, [0]: "DISALLOW_EXTERNAL", GUILD_SUBSCRIPTION_UNAVAILABLE: 1, [1]: "GUILD_SUBSCRIPTION_UNAVAILABLE", PREMIUM_LOCKED: 2, [2]: "PREMIUM_LOCKED", ONLY_GUILD_EMOJIS_ALLOWED: 3, [3]: "ONLY_GUILD_EMOJIS_ALLOWED", ROLE_SUBSCRIPTION_LOCKED: 4, [4]: "ROLE_SUBSCRIPTION_LOCKED", ROLE_SUBSCRIPTION_UNAVAILABLE: 5, [5]: "ROLE_SUBSCRIPTION_UNAVAILABLE", DISALLOW_CUSTOM: 6, [6]: "DISALLOW_CUSTOM" };
export const EmojiIntention = obj;
export const EmojiInteractionPoint = { EmojiButtonMouseEntered: "EMOJI_BUTTON_MOUSE_ENTERED", EmojiButtonFocused: "EMOJI_BUTTON_FOCUSED", ChatInputExpressionPressed: "CHAT_INPUT_EXPRESSION_PRESSED", ChatInputSuggestionsShown: "CHAT_INPUT_SUGGESTIONS_SHOWN", SearchEmojiKeybindPressed: "SEARCH_EMOJI_KEYBIND_PRESSED", AutocompleteTyped: "AUTOCOMPLETE_TYPED", AutocompleteWrapperShown: "AUTOCOMPLETE_WRAPPER_SHOWN", GuildLeaveModalShown: "GUILD_LEAVE_MODAL_SHOWN", AddReactionPopoutMouseEntered: "ADD_REACTION_POPOUT_MOUSE_ENTERED", AddReactionPopoutFocused: "ADD_REACTION_POPOUT_FOCUSED", MessageContextMenuMouseEntered: "MESSAGE_CONTEXT_MENU_MOUSE_ENTERED", EmojiPickerActionSheetOpened: "EMOJI_PICKER_ACTION_SHEET_OPENED", TrackOpenPopoutUsed: "TRACK_OPEN_POPOUT_USED", CustomEmojiTooltipShown: "CUSTOM_EMOJI_TOOLTIP_SHOWN" };
export const isExternalEmojiAllowedForIntention = function isExternalEmojiAllowedForIntention(arg0) {
  return !set.has(arg0);
};