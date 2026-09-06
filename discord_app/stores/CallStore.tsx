// === Module 5278: CallStore ===

// Module 5278 (CallStore)
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;

require = fn;
function callConnect() {
  let channelId = arg1;
  if (arg1 === undefined) {
    channelId = SelectedChannelStore.getChannelId();
  }
  const channel = ChannelStore.getChannel(channelId);
  let tmp3 = null == channel;
  if (!tmp3) {
    tmp3 = null != channel.getGuildId();
  }
  if (!tmp3) {
    tmp3 = null == channelId;
  }
  if (!tmp3) {
    let tmp5 = null != obj[channelId];
    if (tmp5) {
      tmp5 = !arg0;
    }
    tmp3 = tmp5;
  }
  let flag = !tmp3;
  if (!tmp3) {
    let tmp8 = obj[channelId];
    if (tmp8 == null) {
      obj = { channelId, ringing: [] };
      tmp8 = obj;
    }
    obj[channelId] = tmp8;
    obj = { type: "CALL_CONNECT", channelId };
    DispatcherDefault.dispatch(obj);
    flag = true;
  }
  return flag;
}
const Endpoints = fn(1074).Endpoints;
let obj = {};
const enqueuedRings = {};
const Store = initializeDefault.Store;
class CallStore extends Store {
}
const prototype = CallStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore, SelectedChannelStore, SelectedGuildStore);
};
prototype["getCall"] = function getCall(channelId) {
  return obj[channelId];
};
prototype["getCalls"] = function getCalls() {
  return Object.values(obj);
};
prototype["getMessageId"] = function getMessageId(channelId) {
  const call = this.getCall(channelId);
  let messageId = null;
  if (null != call) {
    messageId = call.messageId;
  }
  return messageId;
};
prototype["isCallActive"] = function isCallActive(channelId, id) {
  let messageId = obj[channelId];
  if (!(null != messageId && !messageId.unavailable)) {
    return tmp;
  } else if (null != id) {
    messageId = messageId.messageId;
    let tmp3 = messageId === id;
  } else {
    tmp3 = null != messageId.region;
  }
};
prototype["isCallUnavailable"] = function isCallUnavailable(id) {
  return null != obj[id] && obj[id].unavailable;
};
prototype["getInternalState"] = function getInternalState() {
  calls = { calls, enqueuedRings };
  return calls;
};
CallStore.displayName = "CallStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    return callConnect(true);
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    closure_8 = {};
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(callStoreInternalState) {
    callStoreInternalState = callStoreInternalState.callStoreInternalState;
    obj = {};
    const merged = Object.assign(callStoreInternalState.calls);
    obj = {};
    const merged1 = Object.assign(callStoreInternalState.enqueuedRings);
    closure_8 = obj;
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
      const id = channel.id;
      delete tmp4[tmp3];
    }
    if (null == obj[channel.id]) {
      return false;
    } else {
      const id2 = channel.id;
      delete tmp2[tmp];
    }
  },
  CALL_CREATE: function handleCallCreate(channelId) {
    channelId = channelId.channelId;
    let body = { channelId, messageId: channelId.messageId, region: channelId.region, ringing: Object.keys(channelId.ongoingRings), unavailable: false, regionUpdated: false };
    body[channelId] = body;
    if (null != enqueuedRings[channelId]) {
      delete tmp[tmp2];
      let tmp3 = arr;
      if (1 !== enqueuedRings[channelId].indexOf("all")) {
        tmp3 = null;
      }
      const HTTP = HTTPUtils.HTTP;
      const request = { url: Endpoints.CALL_RING(channelId), body: null, oldFormErrors: true, rejectWithError: true };
      body = { recipients: tmp3 };
      request.body = body;
      HTTP.post(request);
    }
  },
  CALL_UPDATE: function handleCallUpdate(arg0) {
    ({ channelId, region } = arg0);
    let tmp2 = null != tmp;
    ({ messageId, ongoingRings } = arg0);
    if (tmp2) {
      tmp2 = tmp.regionUpdated || tmp.region !== region;
      const tmp3 = tmp.regionUpdated || tmp.region !== region;
    }
    obj = {};
    const merged = Object.assign(obj[channelId]);
    obj.messageId = messageId;
    obj.region = region;
    obj.ringing = Object.keys(ongoingRings);
    obj.regionUpdated = tmp2;
    obj[channelId] = obj;
  },
  CALL_DELETE: function handleCallDelete(arg0) {
    ({ channelId, unavailable } = arg0);
    if (true === unavailable) {
      if (null != tmp3) {
        obj = {};
        const merged = Object.assign(tmp3);
        obj.unavailable = unavailable;
      }
      tmp4[channelId] = { channelId, ringing: [], messageId: null, region: null, regionUpdated: false, unavailable };
      if (null != enqueuedRings[channelId]) {
        delete tmp[tmp2];
      }
    }
  },
  CALL_ENQUEUE_RING: function handleCallEnqueueRing(arg0) {
    ({ channelId, recipients } = arg0);
    let items = enqueuedRings[channelId];
    if (items == null) {
      items = [];
    }
    if (recipients == null) {
      recipients = ["all"];
    }
    enqueuedRings[channelId] = _modDef12.union(items, recipients);
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    if (null == channelId.channelId) {
      closure_8 = {};
    }
  }
};
const callStore = new CallStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("stores/CallStore.tsx");

export default callStore;