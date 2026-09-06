// discord_app/stores/NotificationSettingsModalStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import ChannelRecord from "../records/ChannelRecord.tsx";
import getFlattedChannelListDefault from "../modules/channel/getFlattedChannelList.tsx";
import GuildCategoryStore from "GuildCategoryStore.tsx";
import GuildChannelStore from "GuildChannelStore.tsx";
import GuildMemberCountStore from "GuildMemberCountStore.tsx";
import GuildStore from "GuildStore.tsx";
import UserGuildSettingsStore from "UserGuildSettingsStore.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

let closure_3 = ChannelRecord.isGuildSelectableChannelType;
const FormStates = Constants.FormStates;
const ChannelTypes = Constants.ChannelTypes;
let CLOSED = FormStates.CLOSED;
const Store = initializeDefault.Store;
class NotificationSettingsModalStore extends Store {}
const prototype = NotificationSettingsModalStore.prototype;
prototype["initialize"] = function initialize() {
  const self = this;
  this.waitFor(GuildCategoryStore, GuildChannelStore, GuildMemberCountStore, GuildStore, UserGuildSettingsStore);
  const items = [UserGuildSettingsStore, GuildChannelStore, GuildStore];
  this.syncWith(items, () => self.isOpen());
};
prototype["isOpen"] = function isOpen() {
  return CLOSED !== FormStates.CLOSED;
};
prototype["getProps"] = function getProps() {
  const categories = GuildCategoryStore.getCategories(guildId);
  return {
    guildId,
    categories,
    guild: GuildStore.getGuild(guildId),
    memberCount: GuildMemberCountStore.getMemberCount(guildId),
    suppressEveryone: UserGuildSettingsStore.isSuppressEveryoneEnabled(guildId),
    suppressRoles: UserGuildSettingsStore.isSuppressRolesEnabled(guildId),
    mobilePush: UserGuildSettingsStore.isMobilePushEnabled(guildId),
    muted: UserGuildSettingsStore.isMuted(guildId),
    muteConfig: UserGuildSettingsStore.getMuteConfig(guildId),
    messageNotifications: UserGuildSettingsStore.getMessageNotifications(guildId),
    channelOverrides: UserGuildSettingsStore.getChannelOverrides(guildId),
    channels: getFlattedChannelListDefault(categories._categories, categories, (channel) => {
      const type = channel.channel.type;
      let tmp = closure_1_3(type);
      if (!tmp) {
        tmp = type === constants.GUILD_CATEGORY;
      }
      return tmp;
    }),
  };
};
NotificationSettingsModalStore.displayName = "NotificationSettingsModalStore";
const notificationSettingsModalStore = new NotificationSettingsModalStore(DispatcherDefault, {
  NOTIFICATION_SETTINGS_MODAL_OPEN: function handleFormOpen(guildId) {
    CLOSED = FormStates.OPEN;
    guildId = guildId.guildId;
  },
  NOTIFICATION_SETTINGS_MODAL_CLOSE: function handleFormClose() {
    CLOSED = FormStates.CLOSED;
    c2 = null;
  },
});
const result = size.fileFinishedImporting("stores/NotificationSettingsModalStore.tsx");

export default notificationSettingsModalStore;
