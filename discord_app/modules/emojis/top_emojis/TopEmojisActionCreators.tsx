// === Module 10537: TopEmojisActionCreators ===

// Module 10537 (TopEmojisActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/emojis/top_emojis/TopEmojisActionCreators.tsx");

export const fetchTopEmojis = function fetchTopEmojis(guildId) {
  _require = guildId;
  if (!obj.isPseudoGuildId(guildId)) {
    const obj3 = { type: "TOP_EMOJIS_FETCH", guildId };
    DispatcherDefault.dispatch(obj3);
    const HTTP = tmp(1271).HTTP;
    const obj4 = { url: Endpoints.TOP_EMOJIS_FOR_GUILD(guildId), oldFormErrors: true, rejectWithError: true };
    value = HTTP.get(obj4);
    value.then((body) => {
      const obj2 = { type: "TOP_EMOJIS_FETCH_SUCCESS", guildId, topEmojisMetadata: null };
      const items = body.body.items;
      const mapped = items.map((emojiId) => ({ emojiId: emojiId.emoji_id, rank: emojiId.emoji_rank }));
      obj2.topEmojisMetadata = mapped.sort((rank, rank2) => rank.rank - rank2.rank);
      return DispatcherDefault.dispatch(obj2);
    }, () => DispatcherDefault.dispatch({ type: "TOP_EMOJIS_FETCH_FAILURE", guildId }));
  }
  obj = require("RouteUtils");
  tmp = _require;
};
export const updateNewlyAddedLastSeen = function updateNewlyAddedLastSeen(guildId, id) {
  DispatcherDefault.dispatch({ type: "NEWLY_ADDED_EMOJI_SEEN_UPDATED" });
  if (tmp4) {
    const obj2 = { type: "NEWLY_ADDED_EMOJI_SEEN_PENDING", guildId, emojiId: id };
    DispatcherDefault.dispatch(obj2);
    const tmpResult = DispatcherDefault;
  }
  tmp4 = null != guildId && null != id;
};
export const updateNewlyAddedEmojiSeenAcknowledged = function updateNewlyAddedEmojiSeenAcknowledged(guildId, emojiId) {
  if (tmp) {
    const obj2 = { type: "NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED", guildId, emojiId };
    DispatcherDefault.dispatch(obj2);
  }
  tmp = null != guildId && null != emojiId;
};