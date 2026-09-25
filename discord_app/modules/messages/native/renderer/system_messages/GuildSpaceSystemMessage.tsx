// discord_app/modules/messages/native/renderer/system_messages/GuildSpaceSystemMessage.tsx
import GlobalUtils from "../../../../../utils/GlobalUtils.tsx";
import _modDef2418 from "../../../../guild_space/GuildSpace.messages.js";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/GuildSpaceSystemMessage.tsx",
);

export const createGuildSpaceSystemMessage = function createGuildSpaceSystemMessage(message) {
  const guildSpaceData = message.message.guildSpaceData;
  let whiteboard_busy;
  if (guildSpaceData != null) {
    whiteboard_busy = guildSpaceData.whiteboard_busy;
  }
  if (null == whiteboard_busy) {
    return null;
  } else {
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
        [tmp14, tmp15] = substr;
        const tmp13 = _slicedToArray(substr, 2);
        const userAuthorWithProcessedColor = string(7397).getUserAuthorWithProcessedColor(tmp14, channel);
        const stringResult = string(7397);
        const userAuthorWithProcessedColor1 = string(7397).getUserAuthorWithProcessedColor(tmp15, channel);
        const intl2 = string(1115).intl;
        let tmp7 = importDefault;
        const obj2 = {
          displayCount: substr.length,
          username: userAuthorWithProcessedColor.nick,
          usernameOnClick: null,
          username2: null,
          username2OnClick: null,
          additionalCount: null,
        };
        const obj3 = { userId: tmp14.id, message, author: userAuthorWithProcessedColor, roleStyle };
        obj2.usernameOnClick = formatUsernameOnClickDefault(obj3);
        obj2.username2 = userAuthorWithProcessedColor1.nick;
        let tmp4;
        if (null != tmp15) {
          const obj = { userId: tmp15.id, message, author: userAuthorWithProcessedColor1, roleStyle };
          tmp4 = tmp7(7399)(obj);
        }
        obj2.username2OnClick = tmp4;
        obj2.additionalCount = diff;
        let formatToPartsResult = intl2.formatToParts(_modDef2418.zUiZPF, obj2);
        const stringResult1 = string(7397);
      }
      const obj4 = { content: formatToPartsResult };
      merged = Object.assign(tmp7(7401)(message));
    }
    const intl = string(1115).intl;
    string = intl.string;
    formatToPartsResult = string(_modDef2418.Sxxqdx);
    tmp7 = importDefault;
  }
};
