// discord_app/modules/vibegrations/stores/VibegrationsAppChannelsStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";

const set = new Set();
const Store = initializeDefault.Store;
class VibegrationsAppChannelsStore extends Store {}
VibegrationsAppChannelsStore.prototype["isChatOpen"] = function isChatOpen(current) {
  return set.has(current);
};
const vibegrationsAppChannelsStore = new VibegrationsAppChannelsStore(DispatcherDefault, {
  LOGOUT: function handleLogout() {
    if (0 === set.size) {
      return false;
    } else {
      set.clear();
    }
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    let tmp = null;
    if (null != channelId) {
      tmp = null;
      if (set.has(channelId)) {
        tmp = channelId;
      }
    }
    let num = 0;
    if (null != tmp) {
      num = 1;
    }
    if (set.size === num) {
      return false;
    } else {
      set.clear();
      if (null != tmp) {
        set.add(tmp);
      }
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    const id = channel.channel.id;
    if (set.has(id)) {
      set.delete(id);
    } else {
      return false;
    }
  },
  VIBEGRATIONS_APP_CHANNEL_CHAT_SET: function handleChatSet(arg0) {
    ({ channelId, open } = arg0);
    if (set.has(channelId) === open) {
      return false;
    } else if (open) {
      set.add(channelId);
    } else {
      set.delete(channelId);
    }
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/stores/VibegrationsAppChannelsStore.tsx");

export default vibegrationsAppChannelsStore;
