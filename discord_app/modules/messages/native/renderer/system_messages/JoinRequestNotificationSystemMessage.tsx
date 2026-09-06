// discord_app/modules/messages/native/renderer/system_messages/JoinRequestNotificationSystemMessage.tsx
import SnowflakeUtilsDefault from "../../../../../utils/SnowflakeUtils.tsx";
import util from "../../../../../intl/index.native.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import GuildJoinRequestStore from "../../../../guild_member_verification/GuildJoinRequestStore.tsx";
import UserGuildJoinRequestStore from "../../../../guild_member_verification/UserGuildJoinRequestStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
const MessageTypes = fn(1074).MessageTypes;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/JoinRequestNotificationSystemMessage.tsx",
);

export const createJoinRequestNotificationSystemMessage = function createJoinRequestNotificationSystemMessage(message) {
  message = message.message;
  let obj = SnowflakeUtilsDefault;
  const request = GuildJoinRequestStore.getRequest(obj.cast(message.channel_id));
  let tmp4;
  if (null != request) {
    let guild = GuildStore.getGuild(request.guildId);
    if (guild == null) {
      guild = UserGuildJoinRequestStore.getJoinRequestGuild(request.guildId);
    }
    tmp4 = guild;
  }
  let userId;
  if (request != null) {
    userId = request.userId;
  }
  let user = UserStore.getUser(userId);
  let username;
  if (user != null) {
    username = user.username;
  }
  if (username == null) {
    let username1;
    if (request != null) {
      user = request.user;
      if (user != null) {
        username1 = user.username;
      }
    }
    username = username1;
  }
  const type = message.type;
  if (tmp4 != null) {
    const name = tmp4.name;
  }
  if (MessageTypes.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION === type) {
    if (null == username) {
      const intl5 = util.intl;
      let stringResult = intl5.string(util.t["2VLV0d"]);
    }
    const intl6 = util.intl;
    obj = { username, guildName: name };
    stringResult = intl6.formatToParts(util.t.EloBG4, obj);
  } else {
    if (tmp13.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION === type) {
      if (null != username) {
        if (null != name) {
          const intl4 = util.intl;
          obj = { username, guildName: name };
          let formatToPartsResult = intl4.formatToParts(util.t["UGN/Yy"], obj);
        }
        let str = formatToPartsResult;
      }
      const intl3 = util.intl;
      formatToPartsResult = intl3.string(util.t.FVF6qU);
    } else {
      str = "";
      if (tmp13.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION === type) {
        if (null != username) {
          if (null != name) {
            const intl2 = util.intl;
            const obj1 = { username, guildName: name };
            let formatToPartsResult1 = intl2.formatToParts(util.t.u4movT, obj1);
          }
          str = formatToPartsResult1;
        }
        const intl = util.intl;
        formatToPartsResult1 = intl.string(util.t.BMlbE7);
      }
    }
    const obj2 = { content: str };
    const merged = Object.assign(createCommonMessageDefault(message));
    return obj2;
  }
};
