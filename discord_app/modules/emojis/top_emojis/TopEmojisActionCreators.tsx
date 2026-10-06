// === Module 9886: TopEmojisActionCreators ===

// Module 9886 (TopEmojisActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/emojis/top_emojis/TopEmojisActionCreators.tsx");

export const fetchTopEmojis = function fetchTopEmojis(guildId) {
  _require = guildId;
  const tmp = _require;
  let obj = require("RouteUtils");
  if (!obj.isPseudoGuildId(guildId)) {
    let obj2 = DispatcherDefault;
    const obj3 = { type: "TOP_EMOJIS_FETCH", guildId };
    obj2.dispatch(obj3);
    const HTTP = tmp(1282).HTTP;
    const get = HTTP.get;
    const obj4 = { url: Endpoints.TOP_EMOJIS_FOR_GUILD(guildId), oldFormErrors: true, rejectWithError: true };
    const value = get(obj4);
    value.then((body) => {
      let mapped;
      const items = body.body.items;
      const obj = { type: "TOP_EMOJIS_FETCH_SUCCESS", guildId, topEmojisMetadata: mapped.sort((rank, rank2) => rank.rank - rank2.rank) };
      const dispatch = DispatcherDefault.dispatch;
      DispatcherDefault;
      mapped = items.map((emojiId) => ({ emojiId: emojiId.emoji_id, rank: emojiId.emoji_rank }));
      return dispatch(obj);
    }, () => {
      const obj = DispatcherDefault;
      const obj2 = { type: "TOP_EMOJIS_FETCH_FAILURE", guildId };
      return obj.dispatch(obj2);
    });
  }
};
export const updateNewlyAddedLastSeen = function updateNewlyAddedLastSeen(guildId, id) {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "NEWLY_ADDED_EMOJI_SEEN_UPDATED" });
  const tmp4 = null != guildId && null != id;
  if (tmp4) {
    const obj2 = { type: "NEWLY_ADDED_EMOJI_SEEN_PENDING", guildId, emojiId: id };
    const tmpResult = DispatcherDefault;
    tmpResult.dispatch(obj2);
  }
};
export const updateNewlyAddedEmojiSeenAcknowledged = function updateNewlyAddedEmojiSeenAcknowledged(guildId, emojiId) {
  const tmp = null != guildId && null != emojiId;
  if (tmp) {
    const obj2 = { type: "NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED", guildId, emojiId };
    const obj = DispatcherDefault;
    obj.dispatch(obj2);
  }
};