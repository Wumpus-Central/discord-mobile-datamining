// discord_app/modules/conversations/ConversationsAnalytics.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";

const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/ConversationsAnalytics.tsx");

export const ConversationsAnalytics = {
  trackEntrypointImpression(channelId) {
    channelId = channelId.channelId;
    const channel = ChannelStore.getChannel(channelId);
    const obj2 = { channel_id: channelId, channel_type: null, guild_id: null };
    let type;
    if (channel != null) {
      type = channel.type;
    }
    if (type == null) {
      type = null;
    }
    obj2.channel_type = type;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    const obj3 = {};
    obj2.guild_id = guild_id;
    const merged = Object.assign(obj2);
    obj3.conversation_count = channelId.conversationCount;
    AnalyticsUtilsDefault.track(AnalyticEvents.TOPICAL_NAV_ENTRYPOINT_IMPRESSION, obj3);
  },
  trackTopicsUnitImpression(channelId) {
    channelId = channelId.channelId;
    const channel = ChannelStore.getChannel(channelId);
    const obj2 = { channel_id: channelId, channel_type: null, guild_id: null };
    let type;
    if (channel != null) {
      type = channel.type;
    }
    if (type == null) {
      type = null;
    }
    obj2.channel_type = type;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    obj2.guild_id = guild_id;
    const merged = Object.assign(obj2);
    ({ conversationIds: obj3.conversation_ids, isFocusMode: obj3.is_focus_mode } = channelId);
    AnalyticsUtilsDefault.track(AnalyticEvents.TOPICAL_NAV_TOPICS_UNIT_IMPRESSION, {});
  },
  trackPreviewImpression(channelId) {
    channelId = channelId.channelId;
    const channel = ChannelStore.getChannel(channelId);
    const obj2 = { channel_id: channelId, channel_type: null, guild_id: null };
    let type;
    if (channel != null) {
      type = channel.type;
    }
    if (type == null) {
      type = null;
    }
    obj2.channel_type = type;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    obj2.guild_id = guild_id;
    const merged = Object.assign(obj2);
    ({ conversationId: obj3.conversation_id, isFocusMode: obj3.is_focus_mode } = channelId);
    AnalyticsUtilsDefault.track(AnalyticEvents.TOPICAL_NAV_PREVIEW_IMPRESSION, {});
  },
  trackTopicsUnitClicked(channelId) {
    channelId = channelId.channelId;
    const channel = ChannelStore.getChannel(channelId);
    const obj2 = { channel_id: channelId, channel_type: null, guild_id: null };
    let type;
    if (channel != null) {
      type = channel.type;
    }
    if (type == null) {
      type = null;
    }
    obj2.channel_type = type;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    obj2.guild_id = guild_id;
    const merged = Object.assign(obj2);
    ({ conversationId: obj3.conversation_id, isFocusMode: obj3.is_focus_mode } = channelId);
    AnalyticsUtilsDefault.track(AnalyticEvents.TOPICAL_NAV_TOPICS_UNIT_CLICKED, {});
  },
  trackFocusModeImpression(channelId) {
    channelId = channelId.channelId;
    const channel = ChannelStore.getChannel(channelId);
    const obj2 = { channel_id: channelId, channel_type: null, guild_id: null };
    let type;
    if (channel != null) {
      type = channel.type;
    }
    if (type == null) {
      type = null;
    }
    obj2.channel_type = type;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    const obj3 = {};
    obj2.guild_id = guild_id;
    const merged = Object.assign(obj2);
    obj3.conversation_id = channelId.conversationId;
    AnalyticsUtilsDefault.track(AnalyticEvents.TOPICAL_NAV_FOCUS_MODE_IMPRESSION, obj3);
  },
  trackFocusModeDismissed(channelId) {
    channelId = channelId.channelId;
    const channel = ChannelStore.getChannel(channelId);
    const obj2 = { channel_id: channelId, channel_type: null, guild_id: null };
    let type;
    if (channel != null) {
      type = channel.type;
    }
    if (type == null) {
      type = null;
    }
    obj2.channel_type = type;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    obj2.guild_id = guild_id;
    const merged = Object.assign(obj2);
    ({ conversationId: obj3.conversation_id, dismissReason: obj3.dismiss_reason } = channelId);
    AnalyticsUtilsDefault.track(AnalyticEvents.TOPICAL_NAV_FOCUS_MODE_DISMISSED, {});
  },
  trackThumbsClicked(channelId) {
    channelId = channelId.channelId;
    const channel = ChannelStore.getChannel(channelId);
    const obj2 = { channel_id: channelId, channel_type: null, guild_id: null };
    let type;
    if (channel != null) {
      type = channel.type;
    }
    if (type == null) {
      type = null;
    }
    obj2.channel_type = type;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    obj2.guild_id = guild_id;
    const merged = Object.assign(obj2);
    ({
      conversationId: obj3.conversation_id,
      isThumbsUp: obj3.is_thumbs_up,
      isFocusMode: obj3.is_focus_mode,
    } = channelId);
    AnalyticsUtilsDefault.track(AnalyticEvents.TOPICAL_NAV_THUMBS_CLICKED, {});
  },
  trackThumbsDownReasonSelected(channelId) {
    channelId = channelId.channelId;
    const channel = ChannelStore.getChannel(channelId);
    const obj2 = { channel_id: channelId, channel_type: null, guild_id: null };
    let type;
    if (channel != null) {
      type = channel.type;
    }
    if (type == null) {
      type = null;
    }
    obj2.channel_type = type;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    obj2.guild_id = guild_id;
    const merged = Object.assign(obj2);
    ({
      conversationId: obj3.conversation_id,
      isFocusMode: obj3.is_focus_mode,
      reasons: obj3.reasons,
      otherText: obj3.other_text,
    } = channelId);
    AnalyticsUtilsDefault.track(AnalyticEvents.TOPICAL_NAV_THUMBS_DOWN_REASON_SELECTED, {});
  },
};
