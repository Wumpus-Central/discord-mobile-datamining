// discord_app/modules/emojis/top_emojis/TopEmojisActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/emojis/top_emojis/TopEmojisActionCreators.tsx");

export const fetchTopEmojis = function fetchTopEmojis(guildId) {
  _require = guildId;
  let obj = require("RouteUtils");
  if (!obj.isPseudoGuildId(guildId)) {
    obj = { type: "TOP_EMOJIS_FETCH", guildId };
    DispatcherDefault.dispatch(obj);
    const HTTP = tmp(1272).HTTP;
    obj = { url: Endpoints.TOP_EMOJIS_FOR_GUILD(guildId), oldFormErrors: true, rejectWithError: true };
    value = HTTP.get(obj);
    value.then(
      (body) => {
        const obj = { type: "TOP_EMOJIS_FETCH_SUCCESS", guildId, topEmojisMetadata: null };
        const items = body.body.items;
        const mapped = items.map((emojiId) => ({ emojiId: emojiId.emoji_id, rank: emojiId.emoji_rank }));
        obj.topEmojisMetadata = mapped.sort((rank, rank2) => rank.rank - rank2.rank);
        return obj.dispatch(obj);
      },
      () => {
        const obj = { type: "TOP_EMOJIS_FETCH_FAILURE", guildId };
        return obj.dispatch(obj);
      },
    );
  }
  tmp = _require;
};
export const updateNewlyAddedLastSeen = function updateNewlyAddedLastSeen(guildId, id) {
  let obj = DispatcherDefault;
  obj.dispatch({ type: "NEWLY_ADDED_EMOJI_SEEN_UPDATED" });
  if (tmp4) {
    obj = { type: "NEWLY_ADDED_EMOJI_SEEN_PENDING", guildId, emojiId: id };
    DispatcherDefault.dispatch(obj);
    const tmpResult = DispatcherDefault;
  }
  tmp4 = null != guildId && null != id;
};
export const updateNewlyAddedEmojiSeenAcknowledged = function updateNewlyAddedEmojiSeenAcknowledged(guildId, emojiId) {
  if (tmp) {
    const obj = { type: "NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED", guildId, emojiId };
    obj.dispatch(obj);
  }
  tmp = null != guildId && null != emojiId;
};
