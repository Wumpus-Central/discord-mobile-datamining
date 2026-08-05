// discord_app/stores/CallStore.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import handleConnectionOpen from "handleConnectionOpen";
import closure_5 from "handleConnectionOpen";
import { Endpoints } from "ME";
import { Store } from "initialize";
import { apply } from "../../_runtime/00012_apply.js";
import { sendRequest } from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { dispatcher } from "../Dispatcher.tsx";

const require = arg1;
function callConnect() {
  let channelId = arg1;
  if (arg1 === undefined) {
    channelId = channelId.getChannelId();
  }
  channel = channel.getChannel(channelId);
  let tmp3 = null == channel;
  if (!tmp3) {
    tmp3 = null != channel.getGuildId();
  }
  if (!tmp3) {
    tmp3 = null == channelId;
  }
  if (!tmp3) {
    let tmp5 = null != dependencyMap[channelId];
    if (tmp5) {
      tmp5 = !arg0;
    }
    tmp3 = tmp5;
  }
  let flag = !tmp3;
  if (!tmp3) {
    let tmp8 = dependencyMap[channelId];
    if (tmp8 == null) {
      let obj = { channelId: null, ringing: null };
      obj[0] = channelId;
      obj[1] = [];
      tmp8 = obj;
    }
    dependencyMap[channelId] = tmp8;
    obj = { type: "CALL_CONNECT", channelId: null };
    obj[1] = channelId;
    dispatcher.dispatch(obj);
    flag = true;
    const obj3 = dispatcher;
    const tmp7 = dependencyMap;
  }
  return flag;
}
let closure_7 = {};
let closure_8 = {};
class CallStore extends Store {
}
const prototype = CallStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ensureGuildLoaded, handleConnectionOpen, closure_5);
};
prototype["getCall"] = function getCall(channelId) {
  return dependencyMap[channelId];
};
prototype["getCalls"] = function getCalls() {
  return Object.values(closure_7);
};
prototype["getMessageId"] = function getMessageId(channelId) {
  const call = this.getCall(channelId);
  let messageId = null;
  if (null != call) {
    messageId = call.messageId;
  }
  return messageId;
};
prototype["isCallActive"] = function isCallActive(closure_0, closure_1) {
  let messageId = dependencyMap[closure_0];
  if (!(null != messageId && !messageId.unavailable)) {
    return tmp;
  } else if (null != closure_1) {
    messageId = messageId.messageId;
    let tmp3 = messageId === closure_1;
  } else {
    tmp3 = null != messageId.region;
  }
};
prototype["isCallUnavailable"] = function isCallUnavailable(id) {
  return null != dependencyMap[id] && dependencyMap[id].unavailable;
};
prototype["getInternalState"] = function getInternalState() {
  return { calls: closure_7, enqueuedRings: closure_8 };
};
CallStore.displayName = "CallStore";
const callStore = new CallStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    return callConnect(true);
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    let closure_7 = {};
    let closure_8 = {};
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(callStoreInternalState) {
    callStoreInternalState = callStoreInternalState.callStoreInternalState;
    let obj = {};
    const merged = Object.assign(callStoreInternalState.calls);
    obj = {};
    const merged1 = Object.assign(callStoreInternalState.enqueuedRings);
  },
  CONNECTION_RESUMED: function handleConnectionResumed() {
    return callConnect(true);
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    return callConnect(false, channelId.channelId);
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    if (null != dependencyMap2[channel.id]) {
      const id = channel.id;
      delete tmp4[tmp3];
    }
    if (null == dependencyMap[channel.id]) {
      return false;
    } else {
      const id2 = channel.id;
      delete tmp2[tmp];
    }
  },
  CALL_CREATE: function handleCallCreate(channelId) {
    channelId = channelId.channelId;
    let obj = { channelId, messageId: channelId.messageId, region: channelId.region, ringing: Object.keys(channelId.ongoingRings), unavailable: false, regionUpdated: false };
    closure_7[channelId] = obj;
    if (null != dependencyMap2[channelId]) {
      delete tmp[tmp2];
      let tmp3 = arr;
      if (1 !== dependencyMap2[channelId].indexOf("all")) {
        tmp3 = null;
      }
      const HTTP = sendRequest /* sendRequest */.HTTP;
      obj = { url: null, body: null, oldFormErrors: true, rejectWithError: true };
      obj[0] = Endpoints.CALL_RING(channelId);
      obj = { recipients: null };
      obj[0] = tmp3;
      obj[1] = obj;
      HTTP.post(obj);
    }
  },
  CALL_UPDATE: function handleCallUpdate(arg0) {
    let channelId;
    let messageId;
    let ongoingRings;
    let region;
    ({ channelId, region } = arg0);
    let tmp2 = null != tmp;
    ({ messageId, ongoingRings } = arg0);
    if (tmp2) {
      tmp2 = tmp.regionUpdated || tmp.region !== region;
      const tmp3 = tmp.regionUpdated || tmp.region !== region;
    }
    const obj = {};
    const merged = Object.assign(dependencyMap[channelId]);
    obj.messageId = messageId;
    obj.region = region;
    obj.ringing = Object.keys(ongoingRings);
    obj.regionUpdated = tmp2;
    dependencyMap[channelId] = obj;
  },
  CALL_DELETE: function handleCallDelete(arg0) {
    let channelId;
    let unavailable;
    ({ channelId, unavailable } = arg0);
    if (true === unavailable) {
      if (null != tmp3) {
        const obj = {};
        const merged = Object.assign(tmp3);
        obj.unavailable = unavailable;
      }
      tmp4[channelId] = { channelId, ringing: [], messageId: null, region: null, regionUpdated: false, unavailable };
      if (null != dependencyMap2[channelId]) {
        delete tmp[tmp2];
      }
    }
  },
  CALL_ENQUEUE_RING: function handleCallEnqueueRing(arg0) {
    let channelId;
    let recipients;
    ({ channelId, recipients } = arg0);
    let items = dependencyMap2[channelId];
    if (items == null) {
      items = [];
    }
    if (recipients == null) {
      recipients = ["all"];
    }
    dependencyMap2[channelId] = apply.union(items, recipients);
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    if (null == channelId.channelId) {
      let closure_8 = {};
    }
  }
});
const result = require("handleConnectionOpen").fileFinishedImporting("stores/CallStore.tsx");

export default callStore;