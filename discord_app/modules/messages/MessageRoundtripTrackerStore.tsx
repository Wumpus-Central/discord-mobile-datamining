// discord_app/modules/messages/MessageRoundtripTrackerStore.tsx
import LoggerDefault from "../debug/Logger.tsx";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import NetStats from "../network/NetStats.android.tsx";
import getDeviceMetadataDefault from "../device/getDeviceMetadata.native.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberCountStore from "../../stores/GuildMemberCountStore.tsx";
import NetworkStore from "../../stores/NetworkStore.tsx";

require = fn;
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
      let obj = NetStats;
      const signalStrength = obj.getSignalStrength();
      obj = {};
      const merged = Object.assign(getDeviceMetadataDefault());
      obj.api_latency_ms = diff;
      obj.gateway_latency_ms = diff1;
      ({ id: obj3.channel_id, type: obj3.channel_type, guild_id: obj3.guild_id } = basicChannel);
      obj.guild_size = GuildMemberCountStore.getMemberCount(basicChannel.guild_id);
      obj.mobile_network_type = NetworkStore.getType();
      obj.num_attachments = channelId.attachmentCount;
      let tmp17 = null != signalStrength;
      if (tmp17) {
        obj = { mobile_signal_strength_level: signalStrength };
        tmp17 = obj;
      }
      const merged1 = Object.assign(tmp17);
      AnalyticsUtilsDefault.track(AnalyticEvents.SEND_MESSAGE_ROUNDTRIP, obj);
    }
  } else {
    const _HermesInternal = HermesInternal;
    logger.warn("Ignoring a messageData for channel " + channelId.channelId + " because we can't find that channel.");
  }
}
const AnalyticEvents = fn(1074).AnalyticEvents;
const logger = new LoggerDefault("MessageRoundtripTrackerStore");
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
  this.waitFor(ChannelStore, GuildMemberCountStore, NetworkStore);
};
prototype["recordMessageSendAttempt"] = function recordMessageSendAttempt(channelId, arg1, arg2) {
  const self = this;
  closure_0 = arg1;
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
  obj = {
    initialSendTimestamp: Date.now(),
    apiResponseTimestamp: null,
    gatewaySeenTimestamp: null,
    channelId,
    attachmentCount: num + num2,
  };
  let pendingMessages = this.pendingMessages;
  const result = pendingMessages.set(arg1, obj);
  const timerId = setTimeout(() => {
    const pendingMessages = self.pendingMessages;
    value = pendingMessages.get(closure_0);
    if (null != value) {
      trackRoundtrip(value);
      const pendingMessages2 = self.pendingMessages;
      pendingMessages2.delete(closure_0);
    }
  }, 30000);
};
prototype["recordMessageSendApiResponse"] = function recordMessageSendApiResponse(stickerById) {
  const self = this;
  const pendingMessages = this.pendingMessages;
  value = pendingMessages.get(stickerById);
  if (null != value) {
    const obj = {};
    const merged = Object.assign(value);
    const _Date = Date;
    obj.apiResponseTimestamp = Date.now();
    if (tmp6) {
      trackRoundtrip(obj);
      const pendingMessages3 = self.pendingMessages;
      pendingMessages3.delete(stickerById);
    } else {
      const pendingMessages2 = self.pendingMessages;
      const result = pendingMessages2.set(stickerById, obj);
    }
    tmp6 = null != obj.apiResponseTimestamp && null != obj.gatewaySeenTimestamp;
  }
};
prototype["recordGatewayResponse"] = function recordGatewayResponse(nonce) {
  const self = this;
  const pendingMessages = this.pendingMessages;
  value = pendingMessages.get(nonce);
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
const messageRoundtripTrackerStoreClass = new MessageRoundtripTrackerStoreClass(DispatcherDefault, {
  MESSAGE_CREATE: function handleMessageCreate(optimistic) {
    optimistic = optimistic.optimistic;
    const nonce = optimistic.message.nonce;
    if (!optimistic) {
      optimistic = null == nonce;
    }
    if (!optimistic) {
      const result = messageRoundtripTrackerStoreClass.recordGatewayResponse(nonce);
    }
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/MessageRoundtripTrackerStore.tsx");

export default messageRoundtripTrackerStoreClass;
