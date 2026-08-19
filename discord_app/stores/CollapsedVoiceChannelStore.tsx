// discord_app/stores/CollapsedVoiceChannelStore.tsx
import DISCORD_EPOCHDefault from "../utils/SnowflakeUtils.tsx";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import ensureGuildLoaded from "ChannelStore.tsx";

function handleConnectionOpen() {
  obj = DISCORD_EPOCHDefault;
  const keys = obj.keys(obj);
  const item = keys.forEach((item, index) => {
    if (null == channel.getChannel(item)) {
      delete tmp[tmp2];
    }
  });
}
let obj = {};
const PersistedStore = initializeDefault.PersistedStore;
class CollapsedVoiceChannelStore extends PersistedStore {
}
const prototype = CollapsedVoiceChannelStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let tmp = arg0;
  this.waitFor(closure_2);
  if (arg0 == null) {
    tmp = obj;
  }
  closure_4 = tmp;
};
prototype["getState"] = function getState() {
  return obj;
};
prototype["getCollapsed"] = function getCollapsed() {
  return obj;
};
prototype["isCollapsed"] = function isCollapsed(arg0) {
  return obj[arg0] || false;
};
CollapsedVoiceChannelStore.displayName = "CollapsedVoiceChannelStore";
CollapsedVoiceChannelStore.persistKey = "collapsedChannels";
obj = {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  CHANNEL_COLLAPSE: function handleChannelCollapse(channelId) {
    channelId = channelId.channelId;
    if (obj[channelId]) {
      delete tmp[tmp2];
    } else {
      tmp3[channelId] = true;
    }
    obj = {};
    const merged = Object.assign(obj);
  }
};
const collapsedVoiceChannelStore = new CollapsedVoiceChannelStore(dispatcherDefault, obj);
const result = require("obj132").fileFinishedImporting("stores/CollapsedVoiceChannelStore.tsx");

export default collapsedVoiceChannelStore;