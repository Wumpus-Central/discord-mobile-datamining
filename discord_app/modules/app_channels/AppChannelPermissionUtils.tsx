// === Module 11245: AppChannelPermissionUtils ===

// Module 11245 (AppChannelPermissionUtils)
import c from "c" /* 576 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import AppChannelPermissions from "AppChannelPermissions" /* 4522 */;
import useAppChannelApplication from "useAppChannelApplication" /* 6759 */;
import ApplicationStore from "ApplicationStore" /* 5124 */;

require = fn;
const ChannelTypes = fn(1085).ChannelTypes;
const ReactCompilerGating = fn(558);
function getAppChannelBotUserIdFromApplication(type, bot) {
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/AppChannelPermissionUtils.tsx");

export { getAppChannelBotUserIdFromApplication };
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
export const useAppChannelBotUserId = ReactCompilerGating.isReactCompilerEnabled() ? ((type) => {
  const cResult = c.c(3);
  const appChannelApplication = useAppChannelApplication.useAppChannelApplication(type);
  if (cResult[0] === appChannelApplication) {
    if (cResult[1] === type) {
      let tmp3 = cResult[2];
    }
    return tmp3;
  }
  let tmp4;
  if (null != type) {
    let tmp6;
    if (type.type === ChannelTypes.GUILD_APP) {
      if (null != type.application_id) {
        let id;
        if (appChannelApplication != null) {
          const bot = appChannelApplication.bot;
          if (bot != null) {
            id = bot.id;
          }
        }
        if (id == null) {
          id = type.application_id;
        }
        tmp6 = id;
      }
    }
    tmp4 = tmp6;
  }
  cResult[0] = appChannelApplication;
  cResult[1] = type;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : ((type) => {
  const appChannelApplication = useAppChannelApplication.useAppChannelApplication(type);
  let tmp2;
  if (null != type) {
    let tmp4;
    if (type.type === ChannelTypes.GUILD_APP) {
      if (null != type.application_id) {
        let id;
        if (appChannelApplication != null) {
          const bot = appChannelApplication.bot;
          if (bot != null) {
            id = bot.id;
          }
        }
        if (id == null) {
          id = type.application_id;
        }
        tmp4 = id;
      }
    }
    tmp2 = tmp4;
  }
  return tmp2;
});
export const isAppChannelFloorPermission = function isAppChannelFloorPermission(appChannelBotUserId, id, VIEW_CHANNEL) {
  let hasItem = appChannelBotUserId === id;
  if (hasItem) {
    hasItem = BigFlagUtilsAll.has(AppChannelPermissions.APP_CHANNEL_MINIMUM_BOT_PERMISSIONS, VIEW_CHANNEL);
  }
  return hasItem;
};