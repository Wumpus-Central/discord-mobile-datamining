// === Module 5444: CallStore ===

// Module 5444 (CallStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import size from "module_2" /* 2 */;

function callConnect() {
  let obj;
  let channelId = arg1;
  if (arg1 === undefined) {
    channelId = SelectedChannelStore.getChannelId();
  }
  const channel = ChannelStore.getChannel(channelId);
  let tmp3 = null == channel || null != channel.getGuildId() || null == channelId;
  if (!tmp3) {
    tmp3 = null != obj[channelId] && !arg0;
    const tmp5 = null != obj[channelId] && !arg0;
  }
  let flag = !tmp3;
  if (flag) {
    let tmp8 = obj[channelId];
    const tmp7 = obj;
    if (tmp8 == null) {
      obj = { channelId, ringing: [] };
      tmp8 = obj;
    }
    tmp7[channelId] = tmp8;
    const obj2 = { type: "CALL_CONNECT", channelId };
    const obj3 = DispatcherDefault;
    obj3.dispatch(obj2);
    flag = true;
  }
  return flag;
}
const Endpoints = Constants.Endpoints;
let calls = {};
const metroImportAll = {};
const Store = get_initializedDefault.Store;
class CallStore extends Store {
  initialize() {
    this.waitFor(ChannelStore, SelectedChannelStore, SelectedGuildStore);
  }
  getCall(channelId) {
    return obj[channelId];
  }
  getCalls() {
    return Object.values(obj);
  }
  getMessageId(channelId) {
    const call = this.getCall(channelId);
    let messageId = null;
    if (null != call) {
      messageId = call.messageId;
    }
    return messageId;
  }
  isCallActive(channelId, id) {
    let tmp2 = null != tmp && !tmp.unavailable;
    if (tmp2) {
      let tmp4;
      if (null != id) {
        tmp4 = tmp.messageId === id;
      } else {
        tmp4 = null != tmp.region;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  }
  isCallUnavailable(id) {
    return null != obj[id] && obj[id].unavailable;
  }
  getInternalState() {
    calls = { calls, enqueuedRings };
    return calls;
  }
}
const prototype = CallStore.prototype;
CallStore.displayName = "CallStore";
calls = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    return callConnect(true);
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    let closure_8 = {};
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(callStoreInternalState) {
    callStoreInternalState = callStoreInternalState.callStoreInternalState;
    const merged = Object.assign(callStoreInternalState.calls);
    const obj2 = {};
    const merged1 = Object.assign(callStoreInternalState.enqueuedRings);
    let closure_8 = obj2;
  },
  CONNECTION_RESUMED: function handleConnectionResumed() {
    return callConnect(true);
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    return callConnect(false, channelId.channelId);
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    if (null != enqueuedRings[channel.id]) {
      delete enqueuedRings[channel.id];
    }
    if (null == obj[channel.id]) {
      return false;
    } else {
      delete obj[channel.id];
    }
  },
  CALL_CREATE: function handleCallCreate(channelId) {
    let obj2;
    channelId = channelId.channelId;
    const obj = { channelId, messageId: channelId.messageId, region: channelId.region, ringing: Object.keys(channelId.ongoingRings), unavailable: false, regionUpdated: false };
    obj[channelId] = obj;
    if (null != enqueuedRings[channelId]) {
      delete enqueuedRings[channelId];
      let tmp = arr;
      if (1 !== enqueuedRings[channelId].indexOf("all")) {
        tmp = null;
      }
      const HTTP = HTTPUtils.HTTP;
      const request = { url: Endpoints.CALL_RING(channelId), body: obj2, oldFormErrors: true, rejectWithError: true };
      const post = HTTP.post;
      obj2 = { recipients: tmp };
      post(request);
    }
  },
  CALL_UPDATE: function handleCallUpdate(arg0) {
    let channelId;
    let messageId;
    let obj;
    let ongoingRings;
    let region;
    ({ channelId, region } = arg0);
    let tmp2 = null != tmp;
    ({ messageId, ongoingRings } = arg0);
    if (tmp2) {
      tmp2 = obj[channelId].regionUpdated || obj[channelId].region !== region;
    }
    obj = { messageId, region, ringing: Object.keys(ongoingRings), regionUpdated: tmp2 };
    const merged = Object.assign(obj[channelId]);
    obj[channelId] = obj;
  },
  CALL_DELETE: function handleCallDelete(arg0) {
    let channelId;
    let obj;
    let unavailable;
    ({ channelId, unavailable } = arg0);
    if (true === unavailable) {
      if (null != obj[channelId]) {
        obj = { unavailable };
        const merged = Object.assign(tmp);
      }
      tmp2[channelId] = { channelId, ringing: [], messageId: null, region: null, regionUpdated: false, unavailable };
      if (null != enqueuedRings[channelId]) {
        delete enqueuedRings[channelId];
      }
    }
  },
  CALL_ENQUEUE_RING: function handleCallEnqueueRing(arg0) {
    let channelId;
    let recipients;
    ({ channelId, recipients } = arg0);
    let items = enqueuedRings[channelId];
    const union = _modDef12.union;
    _modDef12;
    if (items == null) {
      items = [];
    }
    if (recipients == null) {
      recipients = ["all"];
    }
    enqueuedRings[channelId] = union(items, recipients);
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    if (null == channelId.channelId) {
      let closure_8 = {};
    }
  }
};
const callStore = new CallStore(DispatcherDefault, calls);
const result = size.fileFinishedImporting("stores/CallStore.tsx");

export default callStore;