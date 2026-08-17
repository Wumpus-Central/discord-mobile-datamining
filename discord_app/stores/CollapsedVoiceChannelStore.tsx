// discord_app/stores/CollapsedVoiceChannelStore.tsx
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_2 from "ensureGuildLoaded" /* 1391 */;

function handleConnectionOpen() {
  obj = DISCORD_EPOCHDefault;
  const keys = obj.keys(obj);
  const item = keys.forEach((arg0) => {
    if (null == channel.getChannel(arg0)) {
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
const result = require("set").fileFinishedImporting("stores/CollapsedVoiceChannelStore.tsx");

export default collapsedVoiceChannelStore;