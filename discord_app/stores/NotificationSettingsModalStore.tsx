import { isGuildSelectableChannelType as closure_3 } from "createChannelRecord";
import setIndex from "setIndex";
import comparator from "comparator";
import handleInviteData from "handleInviteData";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import ME from "ME";
import { Store } from "initialize";

const FormStates = ME.FormStates;
const ChannelTypes = ME.ChannelTypes;
let CLOSED = FormStates.CLOSED;
class NotificationSettingsModalStore extends Store {
}
const prototype = NotificationSettingsModalStore.prototype;
prototype["initialize"] = function initialize() {
  const self = this;
  this.waitFor(setIndex, comparator, handleInviteData, createGuildRecordFromRust, updateUserGuildSettingsInternal);
  const items = [updateUserGuildSettingsInternal, comparator, createGuildRecordFromRust];
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
    channels: importDefault(5223)(categories._categories, categories, (channel) => {
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
const notificationSettingsModalStore = new NotificationSettingsModalStore(require("dispatcher"), {
  NOTIFICATION_SETTINGS_MODAL_OPEN: function handleFormOpen(guildId) {
    const OPEN = FormStates.OPEN;
    guildId = guildId.guildId;
  },
  NOTIFICATION_SETTINGS_MODAL_CLOSE: function handleFormClose() {
    const CLOSED = FormStates.CLOSED;
    let c2 = null;
  }
});
const result = require("comparator").fileFinishedImporting("stores/NotificationSettingsModalStore.tsx");

export default notificationSettingsModalStore;