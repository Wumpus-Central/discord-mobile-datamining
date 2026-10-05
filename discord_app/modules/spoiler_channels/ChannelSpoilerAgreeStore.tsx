// === Module 6833: ChannelSpoilerAgreeStore ===

// Module 6833 (ChannelSpoilerAgreeStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let closure_1;

const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class ChannelSpoilerAgreeStore extends DeviceSettingsStore {
  initialize(users) {
    this.waitFor(AuthenticationStore);
    if (null != users) {
      closure_1 = { users: {} };
    }
  }
  didAgree(arg0) {
    if (null == arg0) {
      return false;
    } else {
      const id = AuthenticationStore.getId();
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
  }
  getState() {
    return closure_1;
  }
  getUserAgnosticState() {
    return closure_1;
  }
}
const prototype = ChannelSpoilerAgreeStore.prototype;
ChannelSpoilerAgreeStore.displayName = "ChannelSpoilerAgreeStore";
ChannelSpoilerAgreeStore.persistKey = "ChannelSpoilerAgreeStore";
let obj = {
  CHANNEL_SPOILER_AGREE: function handleChannelSpoilerAgree(channelId) {
    channelId = channelId.channelId;
    const id = AuthenticationStore.getId();
    if (null == id) {
      return false;
    } else {
      if (null == closure_1.users[id]) {
        const obj = { channels: {} };
        closure_1.users[id] = obj;
      }
      closure_1.users[id].channels[channelId] = true;
    }
  },
  CHANNEL_SPOILER_AGREE_CLEAR: function handleChannelSpoilerAgreeClear(channelId) {
    channelId = channelId.channelId;
    const id = AuthenticationStore.getId();
    let tmp2 = null != id;
    if (tmp2) {
      if (null != closure_1.users[id]) {
        delete closure_1.users[tmp].channels[channelId];
      }
      tmp2 = tmp4;
    }
    return tmp2;
  }
};
const channelSpoilerAgreeStore = new ChannelSpoilerAgreeStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/spoiler_channels/ChannelSpoilerAgreeStore.tsx");

export default channelSpoilerAgreeStore;