// discord_app/modules/messages/native/renderer/system_messages/GuildSpaceSystemMessage.tsx
import GlobalUtils from "../../../../../utils/GlobalUtils.tsx";
import _modDef2440 from "../../../../guild_space/GuildSpace.messages.js";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import GuildSpaceLeaderboardSystemMessage from "GuildSpaceLeaderboardSystemMessage.tsx";
import GuildSpaceMusicSystemMessage from "GuildSpaceMusicSystemMessage.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/GuildSpaceSystemMessage.tsx",
);

export function createGuildSpaceSystemMessage(message) {
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
        [tmp21, tmp22] = substr;
        const tmp20 = _slicedToArray(substr, 2);
        const userAuthorWithProcessedColor = string(8373).getUserAuthorWithProcessedColor(tmp21, channel);
        const stringResult = string(8373);
        const userAuthorWithProcessedColor1 = string(8373).getUserAuthorWithProcessedColor(tmp22, channel);
        const intl2 = string(1125).intl;
        let tmp14 = importDefault;
        const obj3 = {
          displayCount: substr.length,
          username: userAuthorWithProcessedColor.nick,
          usernameOnClick: null,
          username2: null,
          username2OnClick: null,
          additionalCount: null,
        };
        const obj4 = { userId: tmp21.id, message, author: userAuthorWithProcessedColor, roleStyle };
        obj3.usernameOnClick = formatUsernameOnClickDefault(obj4);
        obj3.username2 = userAuthorWithProcessedColor1.nick;
        let tmp11;
        if (null != tmp22) {
          const obj5 = { userId: tmp22.id, message, author: userAuthorWithProcessedColor1, roleStyle };
          tmp11 = tmp14(8375)(obj5);
        }
        obj3.username2OnClick = tmp11;
        obj3.additionalCount = diff;
        let formatToPartsResult = intl2.formatToParts(_modDef2440.zUiZPF, obj3);
        const stringResult1 = string(8373);
      }
      const obj6 = { content: formatToPartsResult };
      merged = Object.assign(tmp14(8377)(message));
    }
    const intl = string(1125).intl;
    string = intl.string;
    formatToPartsResult = string(_modDef2440.Sxxqdx);
    tmp14 = importDefault;
  } else {
    const guildSpaceData3 = message.message.guildSpaceData;
    let leaderboard;
    if (guildSpaceData3 != null) {
      leaderboard = guildSpaceData3.leaderboard;
    }
    if (null != leaderboard) {
      let guildSpaceLeaderboardSystemMessage =
        GuildSpaceLeaderboardSystemMessage.createGuildSpaceLeaderboardSystemMessage(message);
    } else {
      const guildSpaceData2 = message.message.guildSpaceData;
      let music;
      if (guildSpaceData2 != null) {
        music = guildSpaceData2.music;
      }
      guildSpaceLeaderboardSystemMessage = null;
      if (null != music) {
        guildSpaceLeaderboardSystemMessage = GuildSpaceMusicSystemMessage.createGuildSpaceMusicSystemMessage(message);
      }
    }
    return guildSpaceLeaderboardSystemMessage;
  }
}
