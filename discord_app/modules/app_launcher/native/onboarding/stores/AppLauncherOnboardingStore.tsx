// discord_app/modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingStore.tsx
import SnowflakeUtilsDefault from "../../../../../utils/SnowflakeUtils.tsx";
import initializeDefault from "../../../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../../../Dispatcher.tsx";
import ApplicationCommandTypes from "../../../../application_commands/ApplicationCommandTypes.tsx";
import useCanShowAppLauncherOnboarding from "../hooks/useCanShowAppLauncherOnboarding.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
const Store = initializeDefault.Store;
class AppLauncherOnboardingStore extends Store {}
const prototype = AppLauncherOnboardingStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(UserStore);
};
prototype["getRecentMessageMetadata"] = function getRecentMessageMetadata() {
  return obj;
};
prototype["getRecentApplicationCommandMetadata"] = function getRecentApplicationCommandMetadata() {
  return obj;
};
AppLauncherOnboardingStore.displayName = "AppLauncherOnboardingStore";
const appLauncherOnboardingStore = new AppLauncherOnboardingStore(DispatcherDefault, {
  APPLICATION_COMMAND_USED: function handleApplicationCommandUsed(context) {
    context = context.context;
    ({ command, commandOrigin } = context);
    let tmp = commandOrigin !== ApplicationCommandTypes.CommandOrigin.APPLICATION_LAUNCHER;
    if (tmp) {
      tmp = null != context.channel;
    }
    if (tmp) {
      obj = { timeMs: null, applicationId: null, guildId: null, channelId: null };
      const _Date = Date;
      obj.timeMs = Date.now();
      obj.applicationId = command.applicationId;
      const guild = context.guild;
      let id;
      if (guild != null) {
        id = guild.id;
      }
      obj.guildId = id;
      obj.channelId = context.channel.id;
    }
  },
  MESSAGE_CREATE: function handleMessageCreate(message) {
    message = message.message;
    ({ channelId, guildId } = message);
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      if (null != currentUser.id) {
        if (null != message.author) {
          if (currentUser.id === message.author.id) {
            obj = SnowflakeUtilsDefault;
            const extractTimestampResult = obj.extractTimestamp(message.id);
            const _Date = Date;
            const timestamp = Date.now();
            if (timestamp <= extractTimestampResult + useCanShowAppLauncherOnboarding.RECENT_MESSAGE_MS) {
              obj = { timeMs: extractTimestampResult, guildId, channelId };
            }
          }
        }
      }
    }
  },
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingStore.tsx",
);

export default appLauncherOnboardingStore;
