// === Module 10279: TopEmojisActionCreators ===

// Module 10279 (TopEmojisActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/emojis/top_emojis/TopEmojisActionCreators.tsx");

export const fetchTopEmojis = function fetchTopEmojis(guildId) {
  _require = guildId;
  let obj = require("RouteUtils");
  if (!obj.isPseudoGuildId(guildId)) {
    obj = { type: "TOP_EMOJIS_FETCH", guildId };
    DispatcherDefault.dispatch(obj);
    const HTTP = require("HTTPUtils").HTTP;
    obj = { url: Endpoints.TOP_EMOJIS_FOR_GUILD(guildId), oldFormErrors: true, rejectWithError: true };
    value = HTTP.get(obj);
    value.then((body) => {
      const obj = { type: "TOP_EMOJIS_FETCH_SUCCESS", guildId, topEmojisMetadata: null };
      const items = body.body.items;
      const mapped = items.map((emojiId) => ({ emojiId: emojiId.emoji_id, rank: emojiId.emoji_rank }));
      obj.topEmojisMetadata = mapped.sort((rank, rank2) => rank.rank - rank2.rank);
      return obj.dispatch(obj);
    }, () => {
      const obj = { type: "TOP_EMOJIS_FETCH_FAILURE", guildId };
      return obj.dispatch(obj);
    });
  }
};
export const updateNewlyAddedLastSeen = function updateNewlyAddedLastSeen(guildId, id) {
  let obj = DispatcherDefault;
  obj.dispatch({ type: "NEWLY_ADDED_EMOJI_SEEN_UPDATED" });
  if (tmp4) {
    obj = { type: "NEWLY_ADDED_EMOJI_SEEN_PENDING", guildId, emojiId: id };
    DispatcherDefault.dispatch(obj);
    const tmpResult = DispatcherDefault;
  }
};
export const updateNewlyAddedEmojiSeenAcknowledged = function updateNewlyAddedEmojiSeenAcknowledged(guildId, emojiId) {
  if (tmp) {
    const obj = { type: "NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED", guildId, emojiId };
    obj.dispatch(obj);
  }
};