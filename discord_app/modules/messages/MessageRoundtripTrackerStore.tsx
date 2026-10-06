// === Module 6980: MessageRoundtripTrackerStore ===

// Module 6980 (MessageRoundtripTrackerStore)
import LoggerDefault from "Logger" /* 3 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import NetStats from "NetStats" /* 6981 */;
import getDeviceMetadataDefault from "getDeviceMetadata" /* 7174 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4786 */;
import NetworkStore from "NetworkStore" /* 4945 */;
import size from "module_2" /* 2 */;

function trackRoundtrip(channelId) {
  const basicChannel = ChannelStore.getBasicChannel(channelId.channelId);
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
      const obj = NetStats;
      const signalStrength = obj.getSignalStrength();
      const obj3 = { api_latency_ms: diff, gateway_latency_ms: diff1, guild_size: GuildMemberCountStore.getMemberCount(basicChannel.guild_id), mobile_network_type: NetworkStore.getType(), num_attachments: channelId.attachmentCount };
      const track = AnalyticsUtilsDefault.track;
      const SEND_MESSAGE_ROUNDTRIP = AnalyticEvents.SEND_MESSAGE_ROUNDTRIP;
      AnalyticsUtilsDefault;
      const merged = Object.assign(getDeviceMetadataDefault());
      ({ id: obj2.channel_id, type: obj2.channel_type, guild_id: obj2.guild_id } = basicChannel);
      let tmp18 = null != signalStrength;
      if (tmp18) {
        tmp18 = { mobile_signal_strength_level: signalStrength };
        const obj5 = { mobile_signal_strength_level: signalStrength };
      }
      const merged1 = Object.assign(tmp18);
      track(SEND_MESSAGE_ROUNDTRIP, obj3);
    }
  } else {
    const _HermesInternal = HermesInternal;
    logger.warn("Ignoring a messageData for channel " + channelId.channelId + " because we can't find that channel.");
  }
}
const AnalyticEvents = Constants.AnalyticEvents;
const logger = new LoggerDefault("MessageRoundtripTrackerStore");
const tmp2 = new LoggerDefault("MessageRoundtripTrackerStore");
const Store = get_initializedDefault.Store;
class MessageRoundtripTrackerStoreClass extends Store {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.pendingMessages = new Map();
    new Map();
    return applyArgumentsResult;
  }
  initialize() {
    this.waitFor(ChannelStore, GuildMemberCountStore, NetworkStore);
  }
  recordMessageSendAttempt(channelId, nonce, arg2) {
    const self = this;
    let closure_0 = nonce;
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
    let pendingMessages = this.pendingMessages;
    const obj2 = { initialSendTimestamp: Date.now(), apiResponseTimestamp: null, gatewaySeenTimestamp: null, channelId, attachmentCount: num + num2 };
    const result = pendingMessages.set(nonce, obj2);
    const timerId = setTimeout(() => {
      const pendingMessages = self.pendingMessages;
      const value = pendingMessages.get(nonce);
      if (null != value) {
        trackRoundtrip(value);
        const pendingMessages2 = self.pendingMessages;
        pendingMessages2.delete(nonce);
      }
    }, 30000);
  }
  recordMessageSendApiResponse(stickerById) {
    const self = this;
    const pendingMessages = this.pendingMessages;
    const value = pendingMessages.get(stickerById);
    if (null != value) {
      const obj = { apiResponseTimestamp: Date.now() };
      const merged = Object.assign(value);
      const _Date = Date;
      const tmp6 = null != obj.apiResponseTimestamp && null != obj.gatewaySeenTimestamp;
      if (tmp6) {
        trackRoundtrip(obj);
        const pendingMessages3 = self.pendingMessages;
        pendingMessages3.delete(stickerById);
      } else {
        const pendingMessages2 = self.pendingMessages;
        const result = pendingMessages2.set(stickerById, obj);
      }
    }
  }
  recordGatewayResponse(nonce) {
    const self = this;
    const pendingMessages = this.pendingMessages;
    const value = pendingMessages.get(nonce);
    if (null != value) {
      const obj = { gatewaySeenTimestamp: Date.now() };
      const merged = Object.assign(value);
      const _Date = Date;
      const tmp6 = null != obj.apiResponseTimestamp && null != obj.gatewaySeenTimestamp;
      if (tmp6) {
        trackRoundtrip(obj);
        const pendingMessages3 = self.pendingMessages;
        pendingMessages3.delete(nonce);
      } else {
        const pendingMessages2 = self.pendingMessages;
        const result = pendingMessages2.set(nonce, obj);
      }
    }
  }
}
const prototype = MessageRoundtripTrackerStoreClass.prototype;
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
const messageRoundtripTrackerStoreClass = new MessageRoundtripTrackerStoreClass(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/messages/MessageRoundtripTrackerStore.tsx");

export default messageRoundtripTrackerStoreClass;