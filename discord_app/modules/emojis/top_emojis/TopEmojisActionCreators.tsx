import { Endpoints } from "ME";

const result = require("dispatcher").fileFinishedImporting("modules/emojis/top_emojis/TopEmojisActionCreators.tsx");

export const fetchTopEmojis = function fetchTopEmojis(guildId) {
  const _require = guildId;
  let obj = _require(4028);
  if (!obj.isPseudoGuildId(guildId)) {
    obj = { type: "TOP_EMOJIS_FETCH", guildId: null };
    obj[1] = guildId;
    importDefault(709).dispatch(obj);
    const HTTP = _require(530).HTTP;
    obj = { url: null, oldFormErrors: true, rejectWithError: true };
    obj[0] = Endpoints.TOP_EMOJIS_FOR_GUILD(guildId);
    const value = HTTP.get(obj);
    value.then((body) => {
      let obj = outer1_1(outer1_2[2]);
      obj = { type: "TOP_EMOJIS_FETCH_SUCCESS", guildId: closure_0, topEmojisMetadata: null };
      const items = body.body.items;
      const mapped = items.map((emojiId) => ({ emojiId: emojiId.emoji_id, rank: emojiId.emoji_rank }));
      obj[2] = mapped.sort((rank, rank2) => rank.rank - rank2.rank);
      return obj.dispatch(obj);
    }, () => {
      let obj = outer1_1(outer1_2[2]);
      obj = { type: "TOP_EMOJIS_FETCH_FAILURE", guildId: closure_0 };
      return obj.dispatch(obj);
    });
    const obj2 = importDefault(709);
  }
};
export const updateNewlyAddedLastSeen = function updateNewlyAddedLastSeen(guildId, id) {
  let obj = importDefault(709);
  obj.dispatch({ type: "NEWLY_ADDED_EMOJI_SEEN_UPDATED" });
  if (tmp4) {
    obj = { type: "NEWLY_ADDED_EMOJI_SEEN_PENDING", guildId: null, emojiId: null };
    obj[1] = guildId;
    obj[2] = id;
    importDefault(709).dispatch(obj);
    const tmpResult = importDefault(709);
  }
};
export const updateNewlyAddedEmojiSeenAcknowledged = function updateNewlyAddedEmojiSeenAcknowledged(arg0, arg1) {
  if (tmp) {
    let obj = importDefault(709);
    obj = { type: "NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED", guildId: null, emojiId: null };
    obj[1] = arg0;
    obj[2] = arg1;
    obj.dispatch(obj);
  }
};