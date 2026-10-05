// === Module 10020: MessageViewTrackingManager ===

// Module 10020 (MessageViewTrackingManager)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import LRUCacheDefault from "LRUCache" /* 1444 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
import size from "module_2" /* 2 */;

let set;

function getAnalyticsConfig(type) {
  let items1;
  let obj;
  let obj18;
  let obj20;
  let obj4;
  let obj8;
  let treatmentRendered;
  type = type.type;
  if (obj.ANNOUNCEMENT === type) {
    const obj2 = { event: AnalyticEvents.ANNOUNCEMENT_MESSAGE_VIEWED, properties: obj4 };
    obj4 = { message_id: null, channel_id: null, guild_id: null, source_channel_id: null, source_guild_id: null };
    ({ messageId: obj9.message_id, channelId: obj9.channel_id, guildId: obj9.guild_id, sourceChannelId: obj9.source_channel_id, sourceGuildId: obj9.source_guild_id } = type);
    return obj2;
  } else if (obj.APP_EMBED === type) {
    const obj6 = { event: AnalyticEvents.APP_EMBED_VIEWED, properties: obj8 };
    obj8 = { application_id: null, link_type: null, message_id: null, channel_id: null, guild_id: null };
    ({ applicationId: obj7.application_id, linkType: obj7.link_type, messageId: obj7.message_id, channelId: obj7.channel_id, guildId: obj7.guild_id } = type);
    return obj6;
  } else if (obj.OFFICIAL_MESSAGE === type) {
    const obj17 = { event: AnalyticEvents.OFFICIAL_MESSAGE_VIEWED, properties: obj18 };
    obj18 = { message_id: null, channel_id: null, guild_id: null };
    ({ messageId: obj5.message_id, channelId: obj5.channel_id, guildId: obj5.guild_id } = type);
    return obj17;
  } else if (obj.VOICE_INVITE_EMBED === type) {
    const obj19 = { event: discord_common_AnalyticsUtils.ImpressionNames.VOICE_INVITE_EMBED, properties: obj20 };
    ({ inviteCode: obj3.invite_code, inviteGuildId: obj3.invite_guild_id, inviteChannelId: obj3.invite_channel_id, inviteInstanceId: obj3.invite_instance_id, hasActiveStream: obj3.has_active_stream, treatmentRendered } = type);
    obj20 = { impression_type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, invite_code: null, invite_guild_id: null, invite_channel_id: null, invite_instance_id: null, has_active_stream: null, location_stack: items1 };
    const INVITE_EMBED = AnalyticsLocationDefault.INVITE_EMBED;
    if (treatmentRendered) {
      const items = [INVITE_EMBED, AnalyticsLocationDefault.VOICE_CHANNEL_LIST_INVITE_EMBED];
      items1 = items;
    } else {
      items1 = [INVITE_EMBED];
    }
    return obj19;
  } else {
    obj = GlobalUtils;
    return obj.assertNever(type);
  }
}
function getMessageViewKey(type) {
  let combined;
  if (type.type === obj.VOICE_INVITE_EMBED) {
    const _HermesInternal2 = HermesInternal;
    combined = "" + type.messageId + "-" + type.inviteCode + "-" + type.type;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + type.messageId + "-" + type.type;
  }
  return combined;
}
const AnalyticEvents = Constants.AnalyticEvents;
const MessageViewTrackingType = { ANNOUNCEMENT: "announcement", APP_EMBED: "app_embed", OFFICIAL_MESSAGE: "official_message", VOICE_INVITE_EMBED: "voice_invite_embed" };
class MessageViewTrackingManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.currentlyVisibleMessageTimers = {};
    applyArgumentsResult.viewsInCurrentChannel = new Set();
    new Set();
    applyArgumentsResult.recentViewTimes = new LRUCacheDefault({ max: 500, maxAge: 60000 });
    applyArgumentsResult.batchBuffer = [];
    applyArgumentsResult.batchTimerId = null;
    applyArgumentsResult.actions = {
      CHANNEL_SELECT() {
        return applyArgumentsResult.handleChannelSelect();
      }
    };
    new LRUCacheDefault({ max: 500, maxAge: 60000 });
    return applyArgumentsResult;
  }
  handleMessageBecameVisible(type) {
    let combined;
    const self = this;
    let closure_1 = type;
    if (type.type === obj.VOICE_INVITE_EMBED) {
      const _HermesInternal2 = HermesInternal;
      combined = "" + type.messageId + "-" + type.inviteCode + "-" + type.type;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + type.messageId + "-" + type.type;
    }
    if (null == self.currentlyVisibleMessageTimers[combined]) {
      let viewsInCurrentChannel = self.viewsInCurrentChannel;
      if (!viewsInCurrentChannel.has(combined)) {
        let recentViewTimes = self.recentViewTimes;
        const value = recentViewTimes.get(combined);
        if (null == value) {
          const _setTimeout = setTimeout;
          self.currentlyVisibleMessageTimers[combined] = setTimeout(() => {
            delete self.currentlyVisibleMessageTimers[combined];
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
  }
  handleMessageLostVisibility(arg0, arg1, arg2) {
    let combined;
    if (null != arg2) {
      const _HermesInternal2 = HermesInternal;
      combined = "" + arg0 + "-" + arg2 + "-" + arg1;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + arg0 + "-" + arg1;
    }
    if (null != this.currentlyVisibleMessageTimers[combined]) {
      const _clearTimeout = clearTimeout;
      clearTimeout(this.currentlyVisibleMessageTimers[combined]);
      delete tmp7.currentlyVisibleMessageTimers[tmp2];
    }
  }
  handleMessageListVisibilityChange(items, ANNOUNCEMENT) {
    const self = this;
    const tmp = items[Symbol.iterator]();
    while (tmp !== undefined) {
      let result = self.handleMessageBecameVisible(tmp2);
      continue;
    }
    const keys = Object.keys(self.currentlyVisibleMessageTimers);
    if (keys.length > 0) {
      const _Set = Set;
      const self2 = this;
      const self3 = this;
      set = new Set(items.map(getMessageViewKey));
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
  }
  clearTimer(arg0) {
    if (null != this.currentlyVisibleMessageTimers[arg0]) {
      const _clearTimeout = clearTimeout;
      clearTimeout(this.currentlyVisibleMessageTimers[arg0]);
      delete tmp.currentlyVisibleMessageTimers[tmp2];
    }
  }
  handleChannelSelect() {
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
  }
  drainBuffer() {
    const self = this;
    const tmp = this.batchBuffer[Symbol.iterator]();
    while (tmp !== undefined) {
      let tmp4 = getAnalyticsConfig(tmp2);
      let obj = AnalyticsUtilsDefault;
      let trackResult = obj.track(tmp4.event, tmp4.properties);
      continue;
    }
    self.batchBuffer = [];
    if (null != self.batchTimerId) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.batchTimerId);
      self.batchTimerId = null;
    }
  }
  bufferViewTrack(arg0) {
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
  }
}
const prototype = MessageViewTrackingManager.prototype;
const messageViewTrackingManager = new MessageViewTrackingManager();
let result = size.fileFinishedImporting("modules/messages/MessageViewTrackingManager.tsx");

export default messageViewTrackingManager;
export { MessageViewTrackingType };