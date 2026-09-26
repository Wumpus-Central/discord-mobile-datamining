// === Module 7531: GuildSpaceSystemMessage ===

// Module 7531 (GuildSpaceSystemMessage)
import GlobalUtils from "GlobalUtils" /* 1370 */;
import _modDef2419 from "module_2419" /* 2419 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7404 */;
import GuildSpaceLeaderboardSystemMessage from "GuildSpaceLeaderboardSystemMessage" /* 7532 */;
import _slicedToArray from "module_32" /* 32 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildSpaceSystemMessage.tsx");

export const createGuildSpaceSystemMessage = function createGuildSpaceSystemMessage(message) {
  const guildSpaceData = message.message.guildSpaceData;
  let whiteboard_busy;
  if (guildSpaceData != null) {
    whiteboard_busy = guildSpaceData.whiteboard_busy;
  }
  if (null != whiteboard_busy) {
    ({ message, roleStyle } = message);
    const sampled_user_ids = whiteboard_busy.sampled_user_ids;
    const mapped = sampled_user_ids.map((item) => user.getUser(item));
    let string = require;
    let merged = dependencyMap;
    const found = mapped.filter(GlobalUtils.isNotNullish);
    const substr = found.slice(0, 2);
    const diff = whiteboard_busy.connected_user_count - substr.length;
    if (0 !== substr.length) {
      if (diff > 0) {
        const channel = ChannelStore.getChannel(message.channel_id);
        [tmp18, tmp19] = substr;
        const tmp17 = _slicedToArray(substr, 2);
        const userAuthorWithProcessedColor = string(7402).getUserAuthorWithProcessedColor(tmp18, channel);
        const stringResult = string(7402);
        const userAuthorWithProcessedColor1 = string(7402).getUserAuthorWithProcessedColor(tmp19, channel);
        const intl2 = string(1115).intl;
        let tmp11 = importDefault;
        const obj2 = { displayCount: substr.length, username: userAuthorWithProcessedColor.nick, usernameOnClick: null, username2: null, username2OnClick: null, additionalCount: null };
        const obj3 = { userId: tmp18.id, message, author: userAuthorWithProcessedColor, roleStyle };
        obj2.usernameOnClick = formatUsernameOnClickDefault(obj3);
        obj2.username2 = userAuthorWithProcessedColor1.nick;
        let tmp8;
        if (null != tmp19) {
          const obj4 = { userId: tmp19.id, message, author: userAuthorWithProcessedColor1, roleStyle };
          tmp8 = tmp11(7404)(obj4);
        }
        obj2.username2OnClick = tmp8;
        obj2.additionalCount = diff;
        let formatToPartsResult = intl2.formatToParts(_modDef2419.zUiZPF, obj2);
        const stringResult1 = string(7402);
      }
      const obj5 = { content: formatToPartsResult };
      merged = Object.assign(tmp11(7406)(message));
    }
    const intl = string(1115).intl;
    string = intl.string;
    formatToPartsResult = string(_modDef2419.Sxxqdx);
    tmp11 = importDefault;
  } else {
    const guildSpaceData2 = message.message.guildSpaceData;
    let leaderboard;
    if (guildSpaceData2 != null) {
      leaderboard = guildSpaceData2.leaderboard;
    }
    let guildSpaceLeaderboardSystemMessage = null;
    if (null != leaderboard) {
      guildSpaceLeaderboardSystemMessage = GuildSpaceLeaderboardSystemMessage.createGuildSpaceLeaderboardSystemMessage(message);
    }
    return guildSpaceLeaderboardSystemMessage;
  }
};