// === Module 13137: ChannelMemberCountStore ===

// Module 13137 (ChannelMemberCountStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5443 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import size from "module_2" /* 2 */;

let closure_6;

let closure_4 = Object.freeze({ online: null, total: null });
let closure_5 = {};
const metroRequire = {};
let closure_7 = null;
const PersistedStore = get_initializedDefault.PersistedStore;
class ChannelMemberCountStore extends PersistedStore {
  initialize(arg0) {
    let tmp = arg0;
    this.waitFor(GatewayConnectionStore, ChannelStore);
    if (arg0 == null) {
      tmp = closure_5;
    }
    closure_6 = tmp;
  }
  getState() {
    return closure_6;
  }
  getMemberCount(arg0) {
    let tmp = closure_6[arg0];
    if (tmp == null) {
      tmp = closure_4;
    }
    return tmp;
  }
  requestCount(guild_id, id) {
    closure_7 = { guildId: guild_id, channelId: id };
    const socket = GatewayConnectionStore.getSocket();
    const channelMemberCount = socket.requestChannelMemberCount(guild_id, id);
  }
}
const prototype = ChannelMemberCountStore.prototype;
ChannelMemberCountStore.displayName = "ChannelMemberCountStore";
ChannelMemberCountStore.persistKey = "channelMemberCounts";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let channel;
    if (null != closure_7) {
      const socket = GatewayConnectionStore.getSocket();
      const channelMemberCount = socket.requestChannelMemberCount(closure_7.guildId, closure_7.channelId);
    }
    const obj2 = SnowflakeUtilsDefault;
    const keys = obj2.keys(closure_6);
    const item = keys.forEach((item) => {
      const tmp = item;
      if (null == channel.getChannel(item)) {
        delete closure_1_6[tmp];
      }
    });
  },
  CHANNEL_MEMBER_COUNT_UPDATE: function handleMemberCountUpdate(channelId) {
    let online;
    let total;
    ({ online, total } = channelId);
    let tmp = null == online;
    channelId = channelId.channelId;
    if (tmp) {
      tmp = null == total;
    }
    if (!tmp) {
      const obj = { online, total };
      closure_6[channelId] = obj;
    }
    return true;
  }
};
const channelMemberCountStore = new ChannelMemberCountStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/channel/ChannelMemberCountStore.tsx");

export default channelMemberCountStore;