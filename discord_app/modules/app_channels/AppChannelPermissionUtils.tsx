// === Module 11609: AppChannelPermissionUtils ===

// Module 11609 (AppChannelPermissionUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1084 */;
import AppChannelPermissions from "AppChannelPermissions" /* 4948 */;
import useAppChannelApplication from "useAppChannelApplication" /* 7414 */;
import ApplicationStore from "ApplicationStore" /* 2040 */;

require = fn;
const ChannelTypes = fn(1072).ChannelTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/AppChannelPermissionUtils.tsx");

export function getAppChannelBotUserIdFromApplication(type, bot) {
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
}
export function getAppChannelBotUserId(c18) {
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
}
export function useAppChannelBotUserId(channel) {
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
}
export function isAppChannelFloorPermission(appChannelBotUserId, id, VIEW_CHANNEL) {
  let hasItem = appChannelBotUserId === id;
  if (hasItem) {
    hasItem = BigFlagUtilsAll.has(AppChannelPermissions.APP_CHANNEL_MINIMUM_BOT_PERMISSIONS, VIEW_CHANNEL);
  }
  return hasItem;
}