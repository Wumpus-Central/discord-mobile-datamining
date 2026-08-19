// === Module 9305: fetchTopEmojis ===

// Module 9305 (fetchTopEmojis)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const Endpoints = ME.Endpoints;
const result = set.fileFinishedImporting("modules/emojis/top_emojis/TopEmojisActionCreators.tsx");

export const fetchTopEmojis = function fetchTopEmojis(guildId) {
  const _require = guildId;
  let obj = _require(4215);
  if (!obj.isPseudoGuildId(guildId)) {
    obj = { type: "TOP_EMOJIS_FETCH", guildId: null };
    obj[1] = guildId;
    dispatcherDefault.dispatch(obj);
    const HTTP = _require(530).HTTP;
    obj = { url: null, oldFormErrors: true, rejectWithError: true };
    obj[0] = Endpoints.TOP_EMOJIS_FOR_GUILD(guildId);
    const value = HTTP.get(obj);
    value.then((body) => {
      let obj = closure_1_1(closure_1_2[2]);
      obj = { type: "TOP_EMOJIS_FETCH_SUCCESS", guildId: closure_0, topEmojisMetadata: null };
      const items = body.body.items;
      const mapped = items.map((emojiId) => ({ emojiId: emojiId.emoji_id, rank: emojiId.emoji_rank }));
      obj[2] = mapped.sort((rank, rank2) => rank.rank - rank2.rank);
      return obj.dispatch(obj);
    }, () => {
      let obj = closure_1_1(closure_1_2[2]);
      obj = { type: "TOP_EMOJIS_FETCH_FAILURE", guildId: closure_0 };
      return obj.dispatch(obj);
    });
    const obj2 = dispatcherDefault;
  }
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
};
export const updateNewlyAddedEmojiSeenAcknowledged = function updateNewlyAddedEmojiSeenAcknowledged(arg0, arg1) {
  if (tmp) {
    let obj = dispatcherDefault;
    obj = { type: "NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED", guildId: null, emojiId: null };
    obj[1] = arg0;
    obj[2] = arg1;
    obj.dispatch(obj);
  }
};