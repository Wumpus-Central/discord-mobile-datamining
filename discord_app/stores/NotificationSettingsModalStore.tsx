// === Module 17090: FormStates ===

// Module 17090 (FormStates)
import set from "set" /* 2 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import createChannelRecord from "createChannelRecord" /* 1391 */;
import getFlattenedChannelListDefault from "getFlattenedChannelList" /* 5480 */;
import closure_4 from "setIndex" /* 5479 */;
import closure_5 from "comparator" /* 1982 */;
import closure_6 from "handleInviteData" /* 4398 */;
import closure_7 from "createGuildRecordFromRust" /* 1909 */;
import closure_8 from "updateUserGuildSettingsInternal" /* 4701 */;
import ME from "ME" /* 676 */;

let closure_3 = createChannelRecord.isGuildSelectableChannelType;
const FormStates = ME.FormStates;
const ChannelTypes = ME.ChannelTypes;
let CLOSED = FormStates.CLOSED;
const Store = initializeDefault.Store;
class NotificationSettingsModalStore extends Store {
}
const prototype = NotificationSettingsModalStore.prototype;
prototype["initialize"] = function initialize() {
  const self = this;
  this.waitFor(closure_4, closure_5, closure_6, closure_7, closure_8);
  const items = [closure_8, closure_5, closure_7];
  this.syncWith(items, () => self.isOpen());
};
prototype["isOpen"] = function isOpen() {
  return CLOSED !== FormStates.CLOSED;
};
prototype["getProps"] = function getProps() {
  categories = categories.getCategories(closure_2);
  return {
    guildId: closure_2,
    categories,
    guild: guild.getGuild(closure_2),
    memberCount: memberCount.getMemberCount(closure_2),
    suppressEveryone: store.isSuppressEveryoneEnabled(closure_2),
    suppressRoles: store.isSuppressRolesEnabled(closure_2),
    mobilePush: store.isMobilePushEnabled(closure_2),
    muted: store.isMuted(closure_2),
    muteConfig: store.getMuteConfig(closure_2),
    messageNotifications: store.getMessageNotifications(closure_2),
    channelOverrides: store.getChannelOverrides(closure_2),
    channels: getFlattenedChannelListDefault(categories._categories, categories, (channel) => {
      const type = channel.channel.type;
      let tmp = callback(type);
      if (!tmp) {
        tmp = type === constants.GUILD_CATEGORY;
      }
      return tmp;
    })
  };
};
NotificationSettingsModalStore.displayName = "NotificationSettingsModalStore";
const notificationSettingsModalStore = new NotificationSettingsModalStore(dispatcherDefault, {
  NOTIFICATION_SETTINGS_MODAL_OPEN: function handleFormOpen(guildId) {
    const OPEN = FormStates.OPEN;
    guildId = guildId.guildId;
  },
  NOTIFICATION_SETTINGS_MODAL_CLOSE: function handleFormClose() {
    CLOSED = FormStates.CLOSED;
    c2 = null;
  }
});
const result = set.fileFinishedImporting("stores/NotificationSettingsModalStore.tsx");

export default notificationSettingsModalStore;