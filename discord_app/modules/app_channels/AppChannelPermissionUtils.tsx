// discord_app/modules/app_channels/AppChannelPermissionUtils.tsx
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import AppChannelPermissions from "AppChannelPermissions.tsx";
import useAppChannelApplication from "useAppChannelApplication.tsx";
import ApplicationStore from "../applications/ApplicationStore.tsx";

require = fn;
const ChannelTypes = fn(1074).ChannelTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/AppChannelPermissionUtils.tsx");

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
  const application = ApplicationStore.getApplication(c18.application_id);
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
export const isAppChannelFloorPermission = function isAppChannelFloorPermission(appChannelBotUserId, id, arg2) {
  let hasItem = appChannelBotUserId === id;
  if (hasItem) {
    hasItem = BigFlagUtilsAll.has(AppChannelPermissions.APP_CHANNEL_MINIMUM_BOT_PERMISSIONS, arg2);
  }
  return hasItem;
};
