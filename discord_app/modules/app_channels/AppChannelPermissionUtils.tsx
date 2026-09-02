// === Module 11419: getAppChannelBotUserIdFromApplication ===

// Module 11419 (getAppChannelBotUserIdFromApplication)
import fromStringAll from "fromString" /* 503 */;
import Permissions from "Permissions" /* 4127 */;
import useAppChannelApplication from "useAppChannelApplication" /* 11420 */;
import closure_3 from "addApplication" /* 4519 */;
import { ChannelTypes } from "ME" /* 673 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/app_channels/AppChannelPermissionUtils.tsx");

export const getAppChannelBotUserIdFromApplication = function getAppChannelBotUserIdFromApplication(type, bot) {
  if (type.type === ChannelTypes.GUILD_APP) {
    if (null != type.application_id) {
      let id;
      if (bot != null) {
        bot = bot.bot;
        if (bot != null) {
          id = bot.id;
        }
      }
      if (id == null) {
        id = type.application_id;
      }
      return id;
    }
  }
};
export const getAppChannelBotUserId = function getAppChannelBotUserId(c18) {
  application = application.getApplication(c18.application_id);
  let tmp2;
  if (c18.type === ChannelTypes.GUILD_APP) {
    if (null != c18.application_id) {
      let id;
      if (application != null) {
        const bot = application.bot;
        if (bot != null) {
          id = bot.id;
        }
      }
      if (id == null) {
        id = c18.application_id;
      }
      tmp2 = id;
    }
  }
  return tmp2;
};
export const useAppChannelBotUserId = function useAppChannelBotUserId(channel) {
  const appChannelApplication = useAppChannelApplication.useAppChannelApplication(channel);
  let tmp2;
  if (null != channel) {
    let tmp4;
    if (channel.type === ChannelTypes.GUILD_APP) {
      if (null != channel.application_id) {
        let id;
        if (appChannelApplication != null) {
          const bot = appChannelApplication.bot;
          if (bot != null) {
            id = bot.id;
          }
        }
        if (id == null) {
          id = channel.application_id;
        }
        tmp4 = id;
      }
    }
    tmp2 = tmp4;
  }
  return tmp2;
};
export const isAppChannelFloorPermission = function isAppChannelFloorPermission(closure_6, id, arg2) {
  let hasItem = closure_6 === id;
  if (hasItem) {
    hasItem = fromStringAll.has(Permissions.APP_CHANNEL_MINIMUM_BOT_PERMISSIONS, arg2);
    const obj = fromStringAll;
  }
  return hasItem;
};