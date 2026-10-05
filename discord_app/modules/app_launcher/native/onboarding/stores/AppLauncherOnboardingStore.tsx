// discord_app/modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingStore.tsx
import SnowflakeUtilsDefault from "../../../../../utils/SnowflakeUtils.tsx";
import get_initializedDefault from "../../../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../../../Dispatcher.tsx";
import ApplicationCommandTypes from "../../../../application_commands/ApplicationCommandTypes.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const Store = get_initializedDefault.Store;
class AppLauncherOnboardingStore extends Store {
  initialize() {
    this.waitFor(UserStore);
  }
  getRecentMessageMetadata() {
    return obj2;
  }
  getRecentApplicationCommandMetadata() {
    return obj;
  }
}
const prototype = AppLauncherOnboardingStore.prototype;
AppLauncherOnboardingStore.displayName = "AppLauncherOnboardingStore";
let obj = {
  APPLICATION_COMMAND_USED: function handleApplicationCommandUsed(context) {
    let command;
    let commandOrigin;
    let id;
    context = context.context;
    ({ command, commandOrigin } = context);
    const tmp = commandOrigin !== ApplicationCommandTypes.CommandOrigin.APPLICATION_LAUNCHER && null != context.channel;
    if (tmp) {
      ({ timeMs: Date.now(), applicationId: command.applicationId, guildId: id, channelId: context.channel.id });
      const _Date = Date;
      const guild = context.guild;
      id = undefined;
      if (guild != null) {
        id = guild.id;
      }
    }
  },
  MESSAGE_CREATE: function handleMessageCreate(message) {
    let channelId;
    let guildId;
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
          }
        }
      }
    }
  },
};
const appLauncherOnboardingStore = new AppLauncherOnboardingStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingStore.tsx",
);

export default appLauncherOnboardingStore;
