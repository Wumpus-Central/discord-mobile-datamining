// discord_app/modules/channel_autocomplete/ChannelAutocompleteConstants.tsx
import set from "set" /* 2 */;

let closure_0 = [];
const tmp2 = /^<@\$(\d+)>/;
const regExp = new RegExp(tmp2.source.replace(/^\^/, ""), "g");
const result = set.fileFinishedImporting("modules/channel_autocomplete/ChannelAutocompleteConstants.tsx");

export const MENTION_SENTINEL = "@";
export const GAME_MENTION_SENTINEL = "$";
export const CHANNEL_SENTINEL = "#";
export const EMOJI_SENTINEL = ":";
export const REACTION_START_SENTINEL = "+:";
export const REACTION_END_SENTINEL = ":";
export const COMMAND_SENTINEL = "/";
export const GAME_MENTION_INPUT_PREFIX = "@game:";
export const formatGameMentionRaw = function formatGameMentionRaw(arg0) {
  return "<@$" + arg0 + ">";
};
export const formatGameMentionToken = function formatGameMentionToken(arg0) {
  return "$" + arg0;
};
export const GAME_MENTION_RAW_RE = tmp2;
export const GAME_MENTION_RAW_RE_GLOBAL = regExp;
export const extractGameMentionIds = function extractGameMentionIds(arr) {
  if (arr.includes("<@$")) {
    const items = [];
    HermesBuiltin.arraySpread(arr.matchAll(regExp), 0);
    let mapped = items.map((arg0) => arg0[1]);
    if (mapped.length <= 0) {
      mapped = closure_0;
    }
    return mapped;
  } else {
    return closure_0;
  }
};