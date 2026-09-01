// === Module 12939: initialize ===

// Module 12939 (initialize)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_2 from "_handleConnectionOpen" /* 5221 */;
import closure_3 from "ensureGuildLoaded" /* 1387 */;

let closure_4 = Object.freeze({ online: null, total: null });
let closure_5 = {};
let closure_6 = {};
let c7 = null;
const PersistedStore = initializeDefault.PersistedStore;
class ChannelMemberCountStore extends PersistedStore {
}
const prototype = ChannelMemberCountStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let tmp = arg0;
  this.waitFor(closure_2, closure_3);
  if (arg0 == null) {
    tmp = closure_5;
  }
  closure_6 = tmp;
};
prototype["getState"] = function getState() {
  return closure_6;
};
prototype["getMemberCount"] = function getMemberCount(arg0) {
  let tmp = table[arg0];
  if (tmp == null) {
    tmp = closure_4;
  }
  return tmp;
};
prototype["requestCount"] = function requestCount(guild_id, id) {
  closure_7 = { guildId: guild_id, channelId: id };
  const socket = store.getSocket();
  const channelMemberCount = socket.requestChannelMemberCount(guild_id, id);
};
ChannelMemberCountStore.displayName = "ChannelMemberCountStore";
ChannelMemberCountStore.persistKey = "channelMemberCounts";
const channelMemberCountStore = new ChannelMemberCountStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    if (null != _null) {
      const socket = store.getSocket();
      const channelMemberCount = socket.requestChannelMemberCount(_null.guildId, _null.channelId);
    }
    const keys = DISCORD_EPOCHDefault.keys(closure_6);
    const item = keys.forEach((arg0) => {
      if (null == channel.getChannel(arg0)) {
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
      const obj = { online: null, total: null };
      obj[0] = online;
      obj[1] = total;
      closure_6[channelId.channelId] = obj;
    }
    return true;
  }
});
const result = require("set").fileFinishedImporting("modules/channel/ChannelMemberCountStore.tsx");

export default channelMemberCountStore;