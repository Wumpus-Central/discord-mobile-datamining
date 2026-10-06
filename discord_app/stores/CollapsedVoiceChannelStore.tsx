// === Module 7051: CollapsedVoiceChannelStore ===

// Module 7051 (CollapsedVoiceChannelStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import size from "module_2" /* 2 */;

function handleConnectionOpen() {
  let channel;
  obj = SnowflakeUtilsDefault;
  const keys = obj.keys(obj);
  const item = keys.forEach((item) => {
    const tmp = item;
    if (null == channel.getChannel(item)) {
      delete obj[tmp];
    }
  });
}
let obj = {};
const PersistedStore = get_initializedDefault.PersistedStore;
class CollapsedVoiceChannelStore extends PersistedStore {
  initialize(arg0) {
    this.waitFor(ChannelStore);
  }
  getState() {
    return obj;
  }
  getCollapsed() {
    return obj;
  }
  isCollapsed(arg0) {
    return obj[arg0] || false;
  }
}
const prototype = CollapsedVoiceChannelStore.prototype;
CollapsedVoiceChannelStore.displayName = "CollapsedVoiceChannelStore";
CollapsedVoiceChannelStore.persistKey = "collapsedChannels";
const obj2 = {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  CHANNEL_COLLAPSE: function handleChannelCollapse(channelId) {
    channelId = channelId.channelId;
    if (obj[channelId]) {
      delete obj[channelId];
    } else {
      obj[channelId] = true;
    }
    obj = {};
    const merged = Object.assign(obj);
  }
};
const collapsedVoiceChannelStore = new CollapsedVoiceChannelStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("stores/CollapsedVoiceChannelStore.tsx");

export default collapsedVoiceChannelStore;