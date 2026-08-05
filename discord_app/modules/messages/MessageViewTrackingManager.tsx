// discord_app/modules/messages/MessageViewTrackingManager.tsx
import { AnalyticEvents } from "ME";
import "initialize";
import { encodeProperties } from "../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";
import { isDiscordFrontendDevelopment } from "../../utils/GlobalUtils.tsx";
import { QUICK_SWITCHER } from "../app_analytics/AnalyticsLocation.tsx";

function getAnalyticsConfig(type) {
  let treatmentRendered;
  type = type.type;
  if (obj.ANNOUNCEMENT === type) {
    obj = { event: null, properties: null };
    obj[0] = AnalyticEvents.ANNOUNCEMENT_MESSAGE_VIEWED;
    obj = { message_id: null, channel_id: null, guild_id: null, source_channel_id: null, source_guild_id: null };
    ({ messageId: obj9[0], channelId: obj9[1], guildId: obj9[2], sourceChannelId: obj9[3], sourceGuildId: obj9[4] } = type);
    obj[1] = obj;
    return obj;
  } else if (tmp.APP_EMBED === type) {
    const obj1 = { event: null, properties: null };
    obj1[0] = AnalyticEvents.APP_EMBED_VIEWED;
    ({ applicationId: obj7[0], linkType: obj7[1], messageId: obj7[2], channelId: obj7[3], guildId: obj7[4] } = type);
    obj1[1] = { application_id: null, link_type: null, message_id: null, channel_id: null, guild_id: null };
    return obj1;
  } else if (tmp.OFFICIAL_MESSAGE === type) {
    const obj3 = { event: null, properties: null };
    obj3[0] = AnalyticEvents.OFFICIAL_MESSAGE_VIEWED;
    ({ messageId: obj5[0], channelId: obj5[1], guildId: obj5[2] } = type);
    obj3[1] = { message_id: null, channel_id: null, guild_id: null };
    return obj3;
  } else if (tmp.VOICE_INVITE_EMBED === type) {
    const obj5 = { event: null, properties: null };
    obj5[0] = encodeProperties.ImpressionNames.VOICE_INVITE_EMBED;
    const obj6 = { impression_type: null, invite_code: null, invite_guild_id: null, invite_channel_id: null, invite_instance_id: null, has_active_stream: null, location_stack: null };
    obj6[0] = encodeProperties.ImpressionTypes.VIEW;
    ({ inviteCode: obj3[1], inviteGuildId: obj3[2], inviteChannelId: obj3[3], inviteInstanceId: obj3[4], hasActiveStream: obj3[5], treatmentRendered } = type);
    const INVITE_EMBED = QUICK_SWITCHER.INVITE_EMBED;
    if (treatmentRendered) {
      const items = [INVITE_EMBED, QUICK_SWITCHER.VOICE_CHANNEL_LIST_INVITE_EMBED];
      let items1 = items;
    } else {
      items1 = [INVITE_EMBED];
    }
    obj6[6] = items1;
    obj5[1] = obj6;
    return obj5;
  } else {
    obj = isDiscordFrontendDevelopment;
    return obj.assertNever(type);
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
let obj = { ANNOUNCEMENT: "announcement", APP_EMBED: "app_embed", OFFICIAL_MESSAGE: "official_message", VOICE_INVITE_EMBED: "voice_invite_embed" };
class MessageViewTrackingManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.currentlyVisibleMessageTimers = {};
    set = new Set();
    applyArgumentsResult.viewsInCurrentChannel = set;
    tmp4 = new require("priv")({ max: 500, maxAge: 60000 });
    applyArgumentsResult.recentViewTimes = tmp4;
    applyArgumentsResult.batchBuffer = [];
    applyArgumentsResult.batchTimerId = null;
    applyArgumentsResult.actions = {
      CHANNEL_SELECT() {
            return applyArgumentsResult.handleChannelSelect();
          }
    };
    return applyArgumentsResult;
  }
}
const prototype = MessageViewTrackingManager.prototype;
prototype["handleMessageBecameVisible"] = function handleMessageBecameVisible(type) {
  let self = this;
  self = this;
  let closure_1 = type;
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
      const value = recentViewTimes.get(combined);
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
        let tmp8 = nextResult;
        endsWithResult = !set.has(tmp6);
      }
      if (endsWithResult) {
        let tmp9 = nextResult;
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
    let tmp3 = getAnalyticsConfig;
    let tmp4 = getAnalyticsConfig(tmp2);
    let tmp5 = importDefault;
    let tmp6 = dependencyMap;
    let obj = expandEventProperties;
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
prototype["bufferViewTrack"] = function bufferViewTrack(closure_1) {
  let self = this;
  self = this;
  if (this.batchBuffer.length >= 10) {
    self.drainBuffer();
  }
  const batchBuffer = self.batchBuffer;
  batchBuffer.push(closure_1);
  if (null == self.batchTimerId) {
    const _setTimeout = setTimeout;
    self.batchTimerId = setTimeout(() => self.drainBuffer(), 2000);
  }
};
const messageViewTrackingManager = new MessageViewTrackingManager();
let result = require("QUICK_SWITCHER").fileFinishedImporting("modules/messages/MessageViewTrackingManager.tsx");

export default messageViewTrackingManager;
export const MessageViewTrackingType = obj;