import updateSubmittedGuildJoinRequestTotal from "updateSubmittedGuildJoinRequestTotal";
import handleGatewayJoinRequestUpdate from "handleGatewayJoinRequestUpdate";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import { MessageTypes } from "ME";

const require = arg1;
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/messages/native/renderer/system_messages/JoinRequestNotificationSystemMessage.tsx");

export const createJoinRequestNotificationSystemMessage = function createJoinRequestNotificationSystemMessage(message) {
  message = message.message;
  let obj = importDefault(11);
  request = request.getRequest(obj.cast(message.channel_id));
  let tmp4;
  if (null != request) {
    guild = guild.getGuild(request.guildId);
    if (guild == null) {
      guild = joinRequestGuild.getJoinRequestGuild(request.guildId);
    }
    tmp4 = guild;
  }
  let userId;
  if (request != null) {
    userId = request.userId;
  }
  user = user.getUser(userId);
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
      const intl5 = require(1236) /* getSystemLocale */.intl;
      let stringResult = intl5.string(require(1236) /* getSystemLocale */.t["2VLV0d"]);
    }
    const intl6 = require(1236) /* getSystemLocale */.intl;
    obj = { username: null, guildName: null };
    obj[0] = username;
    obj[1] = name;
    stringResult = intl6.formatToParts(require(1236) /* getSystemLocale */.t.EloBG4, obj);
  } else {
    if (tmp13.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION === type) {
      if (null != username) {
        if (null != name) {
          const intl4 = require(1236) /* getSystemLocale */.intl;
          obj = { username: null, guildName: null };
          obj[0] = username;
          obj[1] = name;
          let formatToPartsResult = intl4.formatToParts(require(1236) /* getSystemLocale */.t["UGN/Yy"], obj);
        }
        let str = formatToPartsResult;
      }
      const intl3 = require(1236) /* getSystemLocale */.intl;
      formatToPartsResult = intl3.string(require(1236) /* getSystemLocale */.t.FVF6qU);
    } else {
      str = "";
      if (tmp13.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION === type) {
        if (null != username) {
          if (null != name) {
            const intl2 = require(1236) /* getSystemLocale */.intl;
            const obj1 = { username: null, guildName: null };
            obj1[0] = username;
            obj1[1] = name;
            let formatToPartsResult1 = intl2.formatToParts(require(1236) /* getSystemLocale */.t.u4movT, obj1);
          }
          str = formatToPartsResult1;
        }
        const intl = require(1236) /* getSystemLocale */.intl;
        formatToPartsResult1 = intl.string(require(1236) /* getSystemLocale */.t.BMlbE7);
      }
    }
    const obj2 = { content: null };
    obj2[0] = str;
    const merged = Object.assign(importDefault(7870)(message));
    return obj2;
  }
};