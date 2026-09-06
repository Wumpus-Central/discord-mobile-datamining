// discord_app/modules/messages/MessageViewTrackingManager.tsx
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import discord_common_AnalyticsUtils from "../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import privDefault from "../../../_runtime/01437_priv.js";
import AnalyticsLocationDefault from "../app_analytics/AnalyticsLocation.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

function getAnalyticsConfig(type) {
  type = type.type;
  if (properties.ANNOUNCEMENT === type) {
    properties = { event: AnalyticEvents.ANNOUNCEMENT_MESSAGE_VIEWED, properties: null };
    properties = { message_id: null, channel_id: null, guild_id: null, source_channel_id: null, source_guild_id: null };
    ({
      messageId: obj9.message_id,
      channelId: obj9.channel_id,
      guildId: obj9.guild_id,
      sourceChannelId: obj9.source_channel_id,
      sourceGuildId: obj9.source_guild_id,
    } = type);
    properties.properties = properties;
    return properties;
  } else if (tmp.APP_EMBED === type) {
    const obj1 = { event: AnalyticEvents.APP_EMBED_VIEWED, properties: null };
    ({
      applicationId: obj7.application_id,
      linkType: obj7.link_type,
      messageId: obj7.message_id,
      channelId: obj7.channel_id,
      guildId: obj7.guild_id,
    } = type);
    obj1.properties = { application_id: null, link_type: null, message_id: null, channel_id: null, guild_id: null };
    return obj1;
  } else if (tmp.OFFICIAL_MESSAGE === type) {
    const obj3 = { event: AnalyticEvents.OFFICIAL_MESSAGE_VIEWED, properties: null };
    ({ messageId: obj5.message_id, channelId: obj5.channel_id, guildId: obj5.guild_id } = type);
    obj3.properties = { message_id: null, channel_id: null, guild_id: null };
    return obj3;
  } else if (tmp.VOICE_INVITE_EMBED === type) {
    const obj5 = { event: discord_common_AnalyticsUtils.ImpressionNames.VOICE_INVITE_EMBED, properties: null };
    const obj6 = {
      impression_type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW,
      invite_code: null,
      invite_guild_id: null,
      invite_channel_id: null,
      invite_instance_id: null,
      has_active_stream: null,
      location_stack: null,
    };
    ({
      inviteCode: obj3.invite_code,
      inviteGuildId: obj3.invite_guild_id,
      inviteChannelId: obj3.invite_channel_id,
      inviteInstanceId: obj3.invite_instance_id,
      hasActiveStream: obj3.has_active_stream,
      treatmentRendered,
    } = type);
    const INVITE_EMBED = AnalyticsLocationDefault.INVITE_EMBED;
    if (treatmentRendered) {
      const items = [INVITE_EMBED, AnalyticsLocationDefault.VOICE_CHANNEL_LIST_INVITE_EMBED];
      let items1 = items;
    } else {
      items1 = [INVITE_EMBED];
    }
    obj6.location_stack = items1;
    obj5.properties = obj6;
    return obj5;
  } else {
    properties = GlobalUtils;
    return properties.assertNever(type);
  }
}
function getMessageViewKey(type) {
  if (type.type === obj.VOICE_INVITE_EMBED) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + type.messageId + "-" + type.inviteCode + "-" + type.type;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + type.messageId + "-" + type.type;
  }
  return combined;
}
const AnalyticEvents = Constants.AnalyticEvents;
const MessageViewTrackingType = {
  ANNOUNCEMENT: "announcement",
  APP_EMBED: "app_embed",
  OFFICIAL_MESSAGE: "official_message",
  VOICE_INVITE_EMBED: "voice_invite_embed",
};
class MessageViewTrackingManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.currentlyVisibleMessageTimers = {};
    set = new Set();
    applyArgumentsResult.viewsInCurrentChannel = set;
    tmp4 = new closure_1(closure_2[5])({ max: 500, maxAge: 60000 });
    applyArgumentsResult.recentViewTimes = tmp4;
    applyArgumentsResult.batchBuffer = [];
    applyArgumentsResult.batchTimerId = null;
    applyArgumentsResult.actions = {
      CHANNEL_SELECT() {
        return applyArgumentsResult.handleChannelSelect();
      },
    };
    return applyArgumentsResult;
  }
}
const prototype = MessageViewTrackingManager.prototype;
prototype["handleMessageBecameVisible"] = function handleMessageBecameVisible(type) {
  const self = this;
  closure_1 = type;
  if (type.type === obj.VOICE_INVITE_EMBED) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + type.messageId + "-" + type.inviteCode + "-" + type.type;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + type.messageId + "-" + type.type;
  }
  if (null == self.currentlyVisibleMessageTimers[combined]) {
    let viewsInCurrentChannel = self.viewsInCurrentChannel;
    if (!viewsInCurrentChannel.has(combined)) {
      let recentViewTimes = self.recentViewTimes;
      value = recentViewTimes.get(combined);
      if (null == value) {
        const _setTimeout = setTimeout;
        self.currentlyVisibleMessageTimers[combined] = setTimeout(() => {
          delete tmp[tmp2];
          const viewsInCurrentChannel = self.viewsInCurrentChannel;
          viewsInCurrentChannel.add(combined);
          const recentViewTimes = self.recentViewTimes;
          const result = recentViewTimes.set(combined, Date.now());
          self.bufferViewTrack(closure_1);
        }, 1000);
      } else {
        const _Date = Date;
      }
    }
  }
};
prototype["handleMessageLostVisibility"] = function handleMessageLostVisibility(arg0, arg1, arg2) {
  if (null != arg2) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + arg0 + "-" + arg2 + "-" + arg1;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + arg0 + "-" + arg1;
  }
  if (null != this.currentlyVisibleMessageTimers[combined]) {
    const _clearTimeout = clearTimeout;
    clearTimeout(tmp10);
    const currentlyVisibleMessageTimers = tmp9.currentlyVisibleMessageTimers;
    delete tmp[tmp2];
  }
};
prototype["handleMessageListVisibilityChange"] = function handleMessageListVisibilityChange(items, ANNOUNCEMENT) {
  const self = this;
  while (tmp !== undefined) {
    let result = self.handleMessageBecameVisible(tmp2);
    continue;
  }
  const keys = Object.keys(self.currentlyVisibleMessageTimers);
  if (keys.length > 0) {
    const _Set = Set;
    const set = new Set(items.map(getMessageViewKey));
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp6 = nextResult;
      let _HermesInternal = HermesInternal;
      let endsWithResult = nextResult.endsWith("-" + ANNOUNCEMENT);
      if (endsWithResult) {
        endsWithResult = !set.has(tmp6);
      }
      if (endsWithResult) {
        let clearTimerResult = self.clearTimer(tmp6);
      }
      continue;
    }
  }
};
prototype["clearTimer"] = function clearTimer(arg0) {
  if (null != this.currentlyVisibleMessageTimers[arg0]) {
    const _clearTimeout = clearTimeout;
    clearTimeout(tmp4);
    const currentlyVisibleMessageTimers = tmp3.currentlyVisibleMessageTimers;
    delete tmp[tmp2];
  }
};
prototype["handleChannelSelect"] = function handleChannelSelect() {
  const self = this;
  const values = Object.values(this.currentlyVisibleMessageTimers);
  for (const item10010 of values) {
    let _clearTimeout = clearTimeout;
    let clearTimeoutResult = clearTimeout(item10010);
    continue;
  }
  self.currentlyVisibleMessageTimers = {};
  const viewsInCurrentChannel = self.viewsInCurrentChannel;
  viewsInCurrentChannel.clear();
  self.drainBuffer();
};
prototype["drainBuffer"] = function drainBuffer() {
  const self = this;
  while (tmp !== undefined) {
    let tmp4 = getAnalyticsConfig(tmp2);
    obj = AnalyticsUtilsDefault;
    let trackResult = obj.track(tmp4.event, tmp4.properties);
    continue;
  }
  self.batchBuffer = [];
  if (null != self.batchTimerId) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self.batchTimerId);
    self.batchTimerId = null;
  }
};
prototype["bufferViewTrack"] = function bufferViewTrack(arg0) {
  const self = this;
  if (this.batchBuffer.length >= 10) {
    self.drainBuffer();
  }
  const batchBuffer = self.batchBuffer;
  batchBuffer.push(arg0);
  if (null == self.batchTimerId) {
    const _setTimeout = setTimeout;
    self.batchTimerId = setTimeout(() => self.drainBuffer(), 2000);
  }
};
const messageViewTrackingManager = new MessageViewTrackingManager();
let result = size.fileFinishedImporting("modules/messages/MessageViewTrackingManager.tsx");

export default messageViewTrackingManager;
export { MessageViewTrackingType };
