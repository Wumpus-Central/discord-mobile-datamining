import ensureGuildLoaded from "ensureGuildLoaded";
import handleInviteData from "handleInviteData";
import handleConnectionInfoChange from "handleConnectionInfoChange";
import { AnalyticEvents } from "ME";
import { Store } from "initialize";

const require = arg1;
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
      let obj = require(6830) /* receiveNetworkInfoformation */;
      const signalStrength = obj.getSignalStrength();
      obj = {};
      const merged = Object.assign(importDefault(7057)());
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
      importDefault(698).track(AnalyticEvents.SEND_MESSAGE_ROUNDTRIP, obj);
      const obj2 = importDefault(698);
    }
  } else {
    const _HermesInternal = HermesInternal;
    tmp2.warn("Ignoring a messageData for channel " + channelId.channelId + " because we can't find that channel.");
  }
}
const error = new require("ME")("MessageRoundtripTrackerStore");
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
  this.waitFor(ensureGuildLoaded, handleInviteData, handleConnectionInfoChange);
};
prototype["recordMessageSendAttempt"] = function recordMessageSendAttempt(outer1_0, closure_1, c3) {
  const self = this;
  let closure_0 = closure_1;
  let obj = c3;
  if (c3 === undefined) {
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
  obj = { initialSendTimestamp: Date.now(), apiResponseTimestamp: null, gatewaySeenTimestamp: null, channelId: outer1_0, attachmentCount: sum };
  sum = num + num2;
  let pendingMessages = this.pendingMessages;
  const result = pendingMessages.set(closure_1, obj);
  const timerId = setTimeout(() => {
    const pendingMessages = self.pendingMessages;
    const value = pendingMessages.get(closure_0);
    if (null != value) {
      outer1_8(value);
      const pendingMessages2 = self.pendingMessages;
      pendingMessages2.delete(closure_0);
    }
  }, 30000);
};
prototype["recordMessageSendApiResponse"] = function recordMessageSendApiResponse(outer1_13) {
  const self = this;
  const pendingMessages = this.pendingMessages;
  const value = pendingMessages.get(outer1_13);
  if (null != value) {
    const obj = {};
    const merged = Object.assign(value);
    const _Date = Date;
    obj.apiResponseTimestamp = Date.now();
    if (tmp6) {
      trackRoundtrip(obj);
      const pendingMessages3 = self.pendingMessages;
      pendingMessages3.delete(outer1_13);
    } else {
      const pendingMessages2 = self.pendingMessages;
      const result = pendingMessages2.set(outer1_13, obj);
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
const messageRoundtripTrackerStoreClass = new MessageRoundtripTrackerStoreClass(require("dispatcher"), {
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
const tmp2 = new require("ME")("MessageRoundtripTrackerStore");
let result = require("handleConnectionInfoChange").fileFinishedImporting("modules/messages/MessageRoundtripTrackerStore.tsx");

export default messageRoundtripTrackerStoreClass;