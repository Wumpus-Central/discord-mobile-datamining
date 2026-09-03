// === Module 6184: initialize ===

// Module 6184 (initialize)
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import closure_0 from "fetchFingerprint" /* 1215 */;

let closure_1 = { users: {} };
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class ChannelSpoilerAgreeStore extends DeviceSettingsStore {
}
const prototype = ChannelSpoilerAgreeStore.prototype;
prototype["initialize"] = function initialize(users) {
  this.waitFor(closure_0);
  if (null != users) {
    if (null != users.users) {
      const obj = { users: null };
      obj[0] = users.users;
    }
    closure_1 = { users: {} };
  }
};
prototype["didAgree"] = function didAgree(arg0) {
  if (null == arg0) {
    return false;
  } else {
    const id = store.getId();
    let tmp3 = null != id;
    if (tmp3) {
      let flag;
      if (closure_1.users[id] != null) {
        flag = tmp5.channels[arg0];
      }
      if (!flag) {
        flag = false;
      }
      tmp3 = flag;
    }
    return tmp3;
  }
};
prototype["getState"] = function getState() {
  return closure_1;
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return closure_1;
};
ChannelSpoilerAgreeStore.displayName = "ChannelSpoilerAgreeStore";
ChannelSpoilerAgreeStore.persistKey = "ChannelSpoilerAgreeStore";
const channelSpoilerAgreeStore = new ChannelSpoilerAgreeStore(dispatcherDefault, {
  CHANNEL_SPOILER_AGREE: function handleChannelSpoilerAgree(channelId) {
    const id = store.getId();
    if (null == id) {
      return false;
    } else {
      if (null == closure_1.users[id]) {
        const obj = { channels: null };
        obj[0] = {};
        closure_1.users[id] = obj;
      }
      closure_1.users[id].channels[channelId.channelId] = true;
    }
  },
  CHANNEL_SPOILER_AGREE_CLEAR: function handleChannelSpoilerAgreeClear(arg0) {
    const id = store.getId();
    let tmp4 = null != id;
    if (tmp4) {
      if (null != closure_1.users[id]) {
        const channels = closure_1.users[id].channels;
        delete tmp[tmp2];
      }
      tmp4 = tmp6;
    }
    return tmp4;
  }
});
const result = require("set").fileFinishedImporting("modules/spoiler_channels/ChannelSpoilerAgreeStore.tsx");

export default channelSpoilerAgreeStore;