// discord_app/modules/messages/native/renderer/system_messages/GuildSpaceSystemMessage.tsx
import intl3 from "../../../../../intl/index.native.tsx";
import GlobalUtils from "../../../../../utils/GlobalUtils.tsx";
import _modDef2425 from "../../../../guild_space/GuildSpace.messages.js";
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import GuildSpaceLeaderboardSystemMessage from "GuildSpaceLeaderboardSystemMessage.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/GuildSpaceSystemMessage.tsx",
);

export const createGuildSpaceSystemMessage = function createGuildSpaceSystemMessage(message) {
  let guildSpaceLeaderboardSystemMessage;
  let obj3;
  let roleStyle;
  let tmp19;
  let tmp20;
  let tmp9;
  let user;
  const guildSpaceData = message.message.guildSpaceData;
  let whiteboard_busy;
  if (guildSpaceData != null) {
    whiteboard_busy = guildSpaceData.whiteboard_busy;
  }
  if (null != whiteboard_busy) {
    ({ message, roleStyle } = message);
    const sampled_user_ids = whiteboard_busy.sampled_user_ids;
    const mapped = sampled_user_ids.map((item) => user.getUser(item));
    const found = mapped.filter(GlobalUtils.isNotNullish);
    const substr = found.slice(0, 2);
    const diff = whiteboard_busy.connected_user_count - substr.length;
    if (0 !== substr.length) {
      let tmp12;
      let formatToPartsResult;
      if (diff > 0) {
        const channel = ChannelStore.getChannel(message.channel_id);
        [tmp19, tmp20] = substr;
        _slicedToArray(substr, 2);
        const tmp6Result = useAuthorWithProcessedColor;
        const userAuthorWithProcessedColor = tmp6Result.getUserAuthorWithProcessedColor(tmp19, channel);
        const tmp6Result2 = useAuthorWithProcessedColor;
        const userAuthorWithProcessedColor1 = tmp6Result2.getUserAuthorWithProcessedColor(tmp20, channel);
        const intl2 = intl3.intl;
        tmp12 = importDefault;
        const formatToParts = intl2.formatToParts;
        const obj2 = {
          displayCount: substr.length,
          username: userAuthorWithProcessedColor.nick,
          usernameOnClick: formatUsernameOnClickDefault(obj3),
          username2: userAuthorWithProcessedColor1.nick,
          username2OnClick: tmp9,
          additionalCount: diff,
        };
        const zUiZPF = _modDef2425.zUiZPF;
        tmp9 = undefined;
        obj3 = { userId: tmp19.id, message, author: userAuthorWithProcessedColor, roleStyle };
        if (null != tmp20) {
          const obj4 = { userId: tmp20.id, message, author: userAuthorWithProcessedColor1, roleStyle };
          tmp9 = tmp12(7621)(obj4);
        }
        formatToPartsResult = formatToParts(zUiZPF, obj2);
      }
      const obj5 = { content: formatToPartsResult };
      const merged = Object.assign(tmp12(7623)(message));
      guildSpaceLeaderboardSystemMessage = obj5;
    }
    const intl = intl3.intl;
    formatToPartsResult = intl.string(_modDef2425.Sxxqdx);
    tmp12 = importDefault;
  } else {
    const guildSpaceData2 = message.message.guildSpaceData;
    let leaderboard;
    if (guildSpaceData2 != null) {
      leaderboard = guildSpaceData2.leaderboard;
    }
    guildSpaceLeaderboardSystemMessage = null;
    if (null != leaderboard) {
      const obj = GuildSpaceLeaderboardSystemMessage;
      guildSpaceLeaderboardSystemMessage = obj.createGuildSpaceLeaderboardSystemMessage(message);
    }
  }
  return guildSpaceLeaderboardSystemMessage;
};
