// discord_app/modules/messages/native/renderer/system_messages/JoinRequestNotificationSystemMessage.tsx
import updateSubmittedGuildJoinRequestTotal from "updateSubmittedGuildJoinRequestTotal";
import handleGatewayJoinRequestUpdate from "handleGatewayJoinRequestUpdate";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import { MessageTypes } from "ME";
import { getSystemLocale } from "../../../../../intl/index.native.tsx";
import { DISCORD_EPOCH } from "../../../../../utils/SnowflakeUtils.tsx";
import { createCommonMessage } from "createCommonMessage.tsx";

const require = arg1;
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/messages/native/renderer/system_messages/JoinRequestNotificationSystemMessage.tsx");

export const createJoinRequestNotificationSystemMessage = function createJoinRequestNotificationSystemMessage(message) {
  message = message.message;
  let obj = DISCORD_EPOCH;
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
      const intl5 = getSystemLocale.intl;
      let stringResult = intl5.string(getSystemLocale.t["2VLV0d"]);
    }
    const intl6 = getSystemLocale.intl;
    obj = { username: null, guildName: null };
    obj[0] = username;
    obj[1] = name;
    stringResult = intl6.formatToParts(getSystemLocale.t.EloBG4, obj);
  } else {
    if (tmp13.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION === type) {
      if (null != username) {
        if (null != name) {
          const intl4 = getSystemLocale.intl;
          obj = { username: null, guildName: null };
          obj[0] = username;
          obj[1] = name;
          let formatToPartsResult = intl4.formatToParts(getSystemLocale.t["UGN/Yy"], obj);
        }
        let str = formatToPartsResult;
      }
      const intl3 = getSystemLocale.intl;
      formatToPartsResult = intl3.string(getSystemLocale.t.FVF6qU);
    } else {
      str = "";
      if (tmp13.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION === type) {
        if (null != username) {
          if (null != name) {
            const intl2 = getSystemLocale.intl;
            const obj1 = { username: null, guildName: null };
            obj1[0] = username;
            obj1[1] = name;
            let formatToPartsResult1 = intl2.formatToParts(getSystemLocale.t.u4movT, obj1);
          }
          str = formatToPartsResult1;
        }
        const intl = getSystemLocale.intl;
        formatToPartsResult1 = intl.string(getSystemLocale.t.BMlbE7);
      }
    }
    const obj2 = { content: null };
    obj2[0] = str;
    const merged = Object.assign(createCommonMessage(message));
    return obj2;
  }
};