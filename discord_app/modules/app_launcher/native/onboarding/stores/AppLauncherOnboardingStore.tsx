// === Module 11846: initialize ===

// Module 11846 (initialize)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import ApplicationCommandSectionType from "ApplicationCommandSectionType" /* 7278 */;
import result2 from "result" /* 11844 */;
import closure_5 from "mergeGuildAvatar" /* 1921 */;

require = arg1;
const Store = initializeDefault.Store;
class AppLauncherOnboardingStore extends Store {
}
const prototype = AppLauncherOnboardingStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_5);
};
prototype["getRecentMessageMetadata"] = function getRecentMessageMetadata() {
  return closure_3;
};
prototype["getRecentApplicationCommandMetadata"] = function getRecentApplicationCommandMetadata() {
  return closure_4;
};
AppLauncherOnboardingStore.displayName = "AppLauncherOnboardingStore";
const appLauncherOnboardingStore = new AppLauncherOnboardingStore(dispatcherDefault, {
  APPLICATION_COMMAND_USED: function handleApplicationCommandUsed(context) {
    context = context.context;
    ({ command, commandOrigin } = context);
    let tmp = commandOrigin !== ApplicationCommandSectionType.CommandOrigin.APPLICATION_LAUNCHER;
    if (tmp) {
      tmp = null != context.channel;
    }
    if (tmp) {
      const obj = { timeMs: null, applicationId: null, guildId: null, channelId: null };
      const _Date = Date;
      obj[0] = Date.now();
      obj[1] = command.applicationId;
      const guild = context.guild;
      let id;
      if (guild != null) {
        id = guild.id;
      }
      obj[2] = id;
      obj[3] = context.channel.id;
    }
  },
  MESSAGE_CREATE: function handleMessageCreate(message) {
    message = message.message;
    ({ channelId, guildId } = message);
    currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      if (null != currentUser.id) {
        if (null != message.author) {
          if (currentUser.id === message.author.id) {
            let obj = DISCORD_EPOCHDefault;
            const extractTimestampResult = obj.extractTimestamp(message.id);
            const _Date = Date;
            const timestamp = Date.now();
            if (timestamp <= extractTimestampResult + result2.RECENT_MESSAGE_MS) {
              obj = { timeMs: null, guildId: null, channelId: null };
              obj[0] = extractTimestampResult;
              obj[1] = guildId;
              obj[2] = channelId;
            }
          }
        }
      }
    }
  }
});
const result = require("set").fileFinishedImporting("modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingStore.tsx");

export default appLauncherOnboardingStore;