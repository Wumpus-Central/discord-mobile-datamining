import { DISCORD_EPOCH } from "../../../../../utils/SnowflakeUtils.tsx";
import { ApplicationCommandSectionType } from "../../../../application_commands/ApplicationCommandTypes.tsx";
import { result } from "../hooks/useCanShowAppLauncherOnboarding.tsx";
// discord_app/modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingStore.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { Store } from "initialize";

const require = arg1;
class AppLauncherOnboardingStore extends Store {
}
const prototype = AppLauncherOnboardingStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(mergeGuildAvatar);
};
prototype["getRecentMessageMetadata"] = function getRecentMessageMetadata() {
  return closure_3;
};
prototype["getRecentApplicationCommandMetadata"] = function getRecentApplicationCommandMetadata() {
  return closure_4;
};
AppLauncherOnboardingStore.displayName = "AppLauncherOnboardingStore";
const appLauncherOnboardingStore = new AppLauncherOnboardingStore(require("dispatcher"), {
  APPLICATION_COMMAND_USED: function handleApplicationCommandUsed(context) {
    let command;
    let commandOrigin;
    context = context.context;
    ({ command, commandOrigin } = context);
    let tmp = commandOrigin !== ApplicationCommandSectionType /* ApplicationCommandSectionType */.CommandOrigin.APPLICATION_LAUNCHER;
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
    let channelId;
    let guildId;
    message = message.message;
    ({ channelId, guildId } = message);
    currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      if (null != currentUser.id) {
        if (null != message.author) {
          if (currentUser.id === message.author.id) {
            let obj = DISCORD_EPOCH;
            const extractTimestampResult = obj.extractTimestamp(message.id);
            const _Date = Date;
            const timestamp = Date.now();
            if (timestamp <= extractTimestampResult + result /* result */.RECENT_MESSAGE_MS) {
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
const result = require("result").fileFinishedImporting("modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingStore.tsx");

export default appLauncherOnboardingStore;