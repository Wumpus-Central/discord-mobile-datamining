// === Module 7768: GuildSpaceSystemMessage ===

// Module 7768 (GuildSpaceSystemMessage)
import intl3 from "intl" /* 1126 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import _modDef2425 from "module_2425" /* 2425 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7630 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7632 */;
import GuildSpaceLeaderboardSystemMessage from "GuildSpaceLeaderboardSystemMessage" /* 7769 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildSpaceSystemMessage.tsx");

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
        const obj2 = { displayCount: substr.length, username: userAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault(obj3), username2: userAuthorWithProcessedColor1.nick, username2OnClick: tmp9, additionalCount: diff };
        const zUiZPF = _modDef2425.zUiZPF;
        tmp9 = undefined;
        obj3 = { userId: tmp19.id, message, author: userAuthorWithProcessedColor, roleStyle };
        if (null != tmp20) {
          const obj4 = { userId: tmp20.id, message, author: userAuthorWithProcessedColor1, roleStyle };
          tmp9 = tmp12(7632)(obj4);
        }
        formatToPartsResult = formatToParts(zUiZPF, obj2);
      }
      const obj5 = { content: formatToPartsResult };
      const merged = Object.assign(tmp12(7634)(message));
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