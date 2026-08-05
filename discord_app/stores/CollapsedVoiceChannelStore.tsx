// discord_app/stores/CollapsedVoiceChannelStore.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import { PersistedStore } from "initialize";
import { DISCORD_EPOCH } from "../utils/SnowflakeUtils.tsx";

function handleConnectionOpen() {
  const obj = DISCORD_EPOCH;
  const keys = obj.keys(obj);
  const item = keys.forEach((arg0) => {
    if (null == channel.getChannel(arg0)) {
      delete tmp[tmp2];
    }
  });
}
let obj = {};
class CollapsedVoiceChannelStore extends PersistedStore {
}
const prototype = CollapsedVoiceChannelStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  const tmp = arg0;
  this.waitFor(ensureGuildLoaded);
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
const collapsedVoiceChannelStore = new CollapsedVoiceChannelStore(require("dispatcher"), obj);
const result = require("initialize").fileFinishedImporting("stores/CollapsedVoiceChannelStore.tsx");

export default collapsedVoiceChannelStore;