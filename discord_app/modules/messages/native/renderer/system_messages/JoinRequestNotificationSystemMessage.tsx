// === Module 7716: JoinRequestNotificationSystemMessage ===

// Module 7716 (JoinRequestNotificationSystemMessage)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import Constants from "Constants" /* 1085 */;
import intl7 from "intl" /* 1126 */;
import createCommonMessageDefault from "createCommonMessage" /* 7623 */;
import GuildJoinRequestStore from "GuildJoinRequestStore" /* 5932 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4700 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

const MessageTypes = Constants.MessageTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/JoinRequestNotificationSystemMessage.tsx");

export const createJoinRequestNotificationSystemMessage = function createJoinRequestNotificationSystemMessage(message) {
  let name;
  let str;
  message = message.message;
  const obj = SnowflakeUtilsDefault;
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
  const getUser = UserStore.getUser;
  if (request != null) {
    userId = request.userId;
  }
  const user1 = getUser(userId);
  let username;
  if (user1 != null) {
    username = user1.username;
  }
  if (username == null) {
    let username1;
    if (request != null) {
      const user = request.user;
      if (user != null) {
        username1 = user.username;
      }
    }
    username = username1;
  }
  const type = message.type;
  if (tmp4 != null) {
    name = tmp4.name;
  }
  if (MessageTypes.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION === type) {
    if (null != username) {
      let formatToPartsResult;
      if (null != name) {
        const intl6 = intl7.intl;
        const obj2 = { username, guildName: name };
        formatToPartsResult = intl6.formatToParts(intl7.t.EloBG4, obj2);
      }
      str = formatToPartsResult;
    }
    const intl5 = intl7.intl;
    formatToPartsResult = intl5.string(intl7.t["2VLV0d"]);
  } else if (MessageTypes.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION === type) {
    if (null != username) {
      let formatToPartsResult1;
      if (null != name) {
        const intl4 = intl7.intl;
        const obj3 = { username, guildName: name };
        formatToPartsResult1 = intl4.formatToParts(intl7.t["UGN/Yy"], obj3);
      }
      str = formatToPartsResult1;
    }
    const intl3 = intl7.intl;
    formatToPartsResult1 = intl3.string(intl7.t.FVF6qU);
  } else {
    str = "";
    if (MessageTypes.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION === type) {
      if (null != username) {
        let formatToPartsResult2;
        if (null != name) {
          const intl2 = intl7.intl;
          const obj4 = { username, guildName: name };
          formatToPartsResult2 = intl2.formatToParts(intl7.t.u4movT, obj4);
        }
        str = formatToPartsResult2;
      }
      const intl = intl7.intl;
      formatToPartsResult2 = intl.string(intl7.t.BMlbE7);
    }
  }
  const obj5 = { content: str };
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj5;
};