// === Module 19634: NotificationSettingsModalStore ===

// Module 19634 (NotificationSettingsModalStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import ChannelRecord from "ChannelRecord" /* 4867 */;
import getFlattedChannelListDefault from "getFlattedChannelList" /* 7281 */;
import GuildCategoryStore from "GuildCategoryStore" /* 7280 */;
import GuildChannelStore from "GuildChannelStore" /* 4944 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5242 */;
import GuildStore from "GuildStore" /* 4885 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6775 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let closure_3 = ChannelRecord.isGuildSelectableChannelType;
const FormStates = Constants.FormStates;
const ChannelTypes = Constants.ChannelTypes;
let CLOSED = FormStates.CLOSED;
const Store = initializeDefault.Store;
class NotificationSettingsModalStore extends Store {
}
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
    })
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
  }
});
const result = size.fileFinishedImporting("stores/NotificationSettingsModalStore.tsx");

export default notificationSettingsModalStore;