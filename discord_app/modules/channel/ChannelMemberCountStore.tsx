// === Module 13276: ChannelMemberCountStore ===

// Module 13276 (ChannelMemberCountStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5277 */;
import ChannelStore from "ChannelStore" /* 1957 */;

let closure_4 = Object.freeze({ online: null, total: null });
let closure_5 = {};
let closure_6 = {};
let closure_7 = null;
const PersistedStore = initializeDefault.PersistedStore;
class ChannelMemberCountStore extends PersistedStore {
}
const prototype = ChannelMemberCountStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let tmp = arg0;
  this.waitFor(GatewayConnectionStore, ChannelStore);
  if (arg0 == null) {
    tmp = closure_5;
  }
  closure_6 = tmp;
};
prototype["getState"] = function getState() {
  return closure_6;
};
prototype["getMemberCount"] = function getMemberCount(arg0) {
  let tmp = closure_6[arg0];
  if (tmp == null) {
    tmp = closure_4;
  }
  return tmp;
};
prototype["requestCount"] = function requestCount(guild_id, id) {
  closure_7 = { guildId: guild_id, channelId: id };
  const socket = GatewayConnectionStore.getSocket();
  const channelMemberCount = socket.requestChannelMemberCount(guild_id, id);
};
ChannelMemberCountStore.displayName = "ChannelMemberCountStore";
ChannelMemberCountStore.persistKey = "channelMemberCounts";
const channelMemberCountStore = new ChannelMemberCountStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    if (null != closure_7) {
      const socket = GatewayConnectionStore.getSocket();
      const channelMemberCount = socket.requestChannelMemberCount(closure_7.guildId, closure_7.channelId);
    }
    const keys = SnowflakeUtilsDefault.keys(closure_6);
    const item = keys.forEach((item) => {
      if (null == channel.getChannel(item)) {
        delete tmp[tmp2];
      }
    });
  },
  CHANNEL_MEMBER_COUNT_UPDATE: function handleMemberCountUpdate(channelId) {
    ({ online, total } = channelId);
    let tmp = null == online;
    if (tmp) {
      tmp = null == total;
    }
    if (!tmp) {
      const obj = { online, total };
      closure_6[channelId.channelId] = obj;
    }
    return true;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/ChannelMemberCountStore.tsx");

export default channelMemberCountStore;