// === Module 9305: fetchTopEmojis ===

// Module 9305 (fetchTopEmojis)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const Endpoints = ME.Endpoints;
const result = obj132.fileFinishedImporting("modules/emojis/top_emojis/TopEmojisActionCreators.tsx");

export const fetchTopEmojis = function fetchTopEmojis(guildId) {
  const _require = guildId;
  let obj = _require(4215);
  if (!obj.isPseudoGuildId(guildId)) {
    obj = { type: "TOP_EMOJIS_FETCH", guildId: null };
    obj[1] = guildId;
    dispatcherDefault.dispatch(obj);
    const HTTP = tmp(530).HTTP;
    obj = { url: null, oldFormErrors: true, rejectWithError: true };
    obj[0] = Endpoints.TOP_EMOJIS_FOR_GUILD(guildId);
    const value = HTTP.get(obj);
    value.then((result) => {
      const obj = { type: "TOP_EMOJIS_FETCH_SUCCESS", guildId: closure_0, topEmojisMetadata: null };
      const items = result.body.items;
      const mapped = items.map((item, index) => ({ emojiId: item.emoji_id, rank: item.emoji_rank }));
      obj[2] = mapped.sort((rank, rank2) => rank.rank - rank2.rank);
      return obj.dispatch(obj);
    }, () => {
      const obj = { type: "TOP_EMOJIS_FETCH_FAILURE", guildId: closure_0 };
      return obj.dispatch(obj);
    });
  }
  tmp = _require;
};
export const updateNewlyAddedLastSeen = function updateNewlyAddedLastSeen(guildId, id) {
  let obj = dispatcherDefault;
  obj.dispatch({ type: "NEWLY_ADDED_EMOJI_SEEN_UPDATED" });
  if (tmp4) {
    obj = { type: "NEWLY_ADDED_EMOJI_SEEN_PENDING", guildId: null, emojiId: null };
    obj[1] = guildId;
    obj[2] = id;
    dispatcherDefault.dispatch(obj);
    const tmpResult = dispatcherDefault;
  }
  tmp4 = null != guildId && null != id;
};
export const updateNewlyAddedEmojiSeenAcknowledged = function updateNewlyAddedEmojiSeenAcknowledged(arg0, arg1) {
  if (tmp) {
    const obj = { type: "NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED", guildId: null, emojiId: null };
    obj[1] = arg0;
    obj[2] = arg1;
    obj.dispatch(obj);
  }
  tmp = null != arg0 && null != arg1;
};