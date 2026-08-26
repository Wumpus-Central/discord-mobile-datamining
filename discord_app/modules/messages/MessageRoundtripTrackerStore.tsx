// === Module 7132: trackRoundtrip ===

// Module 7132 (trackRoundtrip)
import timestampDefault from "timestamp" /* 3 */;
import initializeDefault from "initialize" /* 589 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import receiveNetworkInfoformation from "receiveNetworkInfoformation" /* 7133 */;
import getDeviceMetadataDefault from "getDeviceMetadata" /* 7348 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;
import closure_4 from "handleInviteData" /* 4364 */;
import closure_5 from "handleConnectionInfoChange" /* 4538 */;
import { AnalyticEvents } from "ME" /* 676 */;

require = arg1;
function trackRoundtrip(channelId) {
  basicChannel = basicChannel.getBasicChannel(channelId.channelId);
  if (null != basicChannel) {
    const _Math = Math;
    if (Math.random() <= 0.1) {
      let diff = null;
      if (null != channelId.apiResponseTimestamp) {
        diff = channelId.apiResponseTimestamp - channelId.initialSendTimestamp;
      }
      let diff1 = null;
      if (null != channelId.gatewaySeenTimestamp) {
        diff1 = channelId.gatewaySeenTimestamp - channelId.initialSendTimestamp;
      }
      let obj = receiveNetworkInfoformation;
      const signalStrength = obj.getSignalStrength();
      obj = {};
      const merged = Object.assign(getDeviceMetadataDefault());
      obj.api_latency_ms = diff;
      obj.gateway_latency_ms = diff1;
      ({ id: obj3.channel_id, type: obj3.channel_type, guild_id: obj3.guild_id } = basicChannel);
      obj.guild_size = memberCount.getMemberCount(basicChannel.guild_id);
      obj.mobile_network_type = type.getType();
      obj.num_attachments = channelId.attachmentCount;
      let tmp17 = null != signalStrength;
      if (tmp17) {
        obj = { mobile_signal_strength_level: null };
        obj[0] = signalStrength;
        tmp17 = obj;
      }
      const merged1 = Object.assign(tmp17);
      expandEventPropertiesDefault.track(AnalyticEvents.SEND_MESSAGE_ROUNDTRIP, obj);
      const obj2 = expandEventPropertiesDefault;
    }
  } else {
    const _HermesInternal = HermesInternal;
    logger.warn("Ignoring a messageData for channel " + channelId.channelId + " because we can't find that channel.");
  }
}
let closure_7 = new timestampDefault("MessageRoundtripTrackerStore");
const Store = initializeDefault.Store;
class MessageRoundtripTrackerStoreClass extends Store {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    map = new Map();
    applyArgumentsResult.pendingMessages = map;
    return applyArgumentsResult;
  }
}
const prototype = MessageRoundtripTrackerStoreClass.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_3, closure_4, closure_5);
};
prototype["recordMessageSendAttempt"] = function recordMessageSendAttempt(closure_1_0, closure_1, arg2) {
  const self = this;
  closure_0 = closure_1;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const attachments = obj.attachments;
  let num;
  if (attachments != null) {
    num = attachments.length;
  }
  if (num == null) {
    num = 0;
  }
  const attachmentsToUpload = obj.attachmentsToUpload;
  let num2;
  if (attachmentsToUpload != null) {
    num2 = attachmentsToUpload.length;
  }
  if (num2 == null) {
    num2 = 0;
  }
  obj = { initialSendTimestamp: Date.now(), apiResponseTimestamp: null, gatewaySeenTimestamp: null, channelId: closure_1_0, attachmentCount: sum };
  sum = num + num2;
  let pendingMessages = this.pendingMessages;
  const result = pendingMessages.set(closure_1, obj);
  const timerId = setTimeout(() => {
    const pendingMessages = self.pendingMessages;
    const value = pendingMessages.get(closure_0);
    if (null != value) {
      closure_1_8(value);
      const pendingMessages2 = self.pendingMessages;
      pendingMessages2.delete(closure_0);
    }
  }, 30000);
};
prototype["recordMessageSendApiResponse"] = function recordMessageSendApiResponse(closure_1_13) {
  const self = this;
  const pendingMessages = this.pendingMessages;
  const value = pendingMessages.get(closure_1_13);
  if (null != value) {
    const obj = {};
    const merged = Object.assign(value);
    const _Date = Date;
    obj.apiResponseTimestamp = Date.now();
    if (tmp6) {
      trackRoundtrip(obj);
      const pendingMessages3 = self.pendingMessages;
      pendingMessages3.delete(closure_1_13);
    } else {
      const pendingMessages2 = self.pendingMessages;
      const result = pendingMessages2.set(closure_1_13, obj);
    }
    tmp6 = null != obj.apiResponseTimestamp && null != obj.gatewaySeenTimestamp;
  }
};
prototype["recordGatewayResponse"] = function recordGatewayResponse(nonce) {
  const self = this;
  const pendingMessages = this.pendingMessages;
  const value = pendingMessages.get(nonce);
  if (null != value) {
    const obj = {};
    const merged = Object.assign(value);
    const _Date = Date;
    obj.gatewaySeenTimestamp = Date.now();
    if (tmp6) {
      trackRoundtrip(obj);
      const pendingMessages3 = self.pendingMessages;
      pendingMessages3.delete(nonce);
    } else {
      const pendingMessages2 = self.pendingMessages;
      const result = pendingMessages2.set(nonce, obj);
    }
    tmp6 = null != obj.apiResponseTimestamp && null != obj.gatewaySeenTimestamp;
  }
};
const messageRoundtripTrackerStoreClass = new MessageRoundtripTrackerStoreClass(dispatcherDefault, {
  MESSAGE_CREATE: function handleMessageCreate(optimistic) {
    optimistic = optimistic.optimistic;
    const nonce = optimistic.message.nonce;
    if (!optimistic) {
      optimistic = null == nonce;
    }
    if (!optimistic) {
      const result = messageRoundtripTrackerStoreClass.recordGatewayResponse(nonce);
    }
  }
});
let obj = {
  MESSAGE_CREATE: function handleMessageCreate(optimistic) {
    optimistic = optimistic.optimistic;
    const nonce = optimistic.message.nonce;
    if (!optimistic) {
      optimistic = null == nonce;
    }
    if (!optimistic) {
      const result = messageRoundtripTrackerStoreClass.recordGatewayResponse(nonce);
    }
  }
};
const tmp2 = new timestampDefault("MessageRoundtripTrackerStore");
let result = require("set").fileFinishedImporting("modules/messages/MessageRoundtripTrackerStore.tsx");

export default messageRoundtripTrackerStoreClass;