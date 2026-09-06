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
    let obj = { channel_id: channelId, channel_type: null, guild_id: null };
    let type;
    if (channel != null) {
      type = channel.type;
    }
    if (type == null) {
      type = null;
    }
    obj.channel_type = type;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    obj = { guild_id };
    const merged = Object.assign(obj);
    obj.conversation_count = channelId.conversationCount;
    obj.track(AnalyticEvents.TOPICAL_NAV_ENTRYPOINT_IMPRESSION, obj);
  },
  trackTopicsUnitImpression(channelId) {
    channelId = channelId.channelId;
    const channel = ChannelStore.getChannel(channelId);
    let obj = { channel_id: channelId, channel_type: null, guild_id: null };
    let type;
    if (channel != null) {
      type = channel.type;
    }
    if (type == null) {
      type = null;
    }
    obj.channel_type = type;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    obj = { guild_id };
    const merged = Object.assign(obj);
    ({ conversationIds: obj3.conversation_ids, isFocusMode: obj3.is_focus_mode } = channelId);
    obj.track(AnalyticEvents.TOPICAL_NAV_TOPICS_UNIT_IMPRESSION, obj);
  },
  trackPreviewImpression(channelId) {
    channelId = channelId.channelId;
    const channel = ChannelStore.getChannel(channelId);
    let obj = { channel_id: channelId, channel_type: null, guild_id: null };
    let type;
    if (channel != null) {
      type = channel.type;
    }
    if (type == null) {
      type = null;
    }
    obj.channel_type = type;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    obj = { guild_id };
    const merged = Object.assign(obj);
    ({ conversationId: obj3.conversation_id, isFocusMode: obj3.is_focus_mode } = channelId);
    obj.track(AnalyticEvents.TOPICAL_NAV_PREVIEW_IMPRESSION, obj);
  },
  trackTopicsUnitClicked(channelId) {
    channelId = channelId.channelId;
    const channel = ChannelStore.getChannel(channelId);
    let obj = { channel_id: channelId, channel_type: null, guild_id: null };
    let type;
    if (channel != null) {
      type = channel.type;
    }
    if (type == null) {
      type = null;
    }
    obj.channel_type = type;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    obj = { guild_id };
    const merged = Object.assign(obj);
    ({ conversationId: obj3.conversation_id, isFocusMode: obj3.is_focus_mode } = channelId);
    obj.track(AnalyticEvents.TOPICAL_NAV_TOPICS_UNIT_CLICKED, obj);
  },
  trackFocusModeImpression(channelId) {
    channelId = channelId.channelId;
    const channel = ChannelStore.getChannel(channelId);
    let obj = { channel_id: channelId, channel_type: null, guild_id: null };
    let type;
    if (channel != null) {
      type = channel.type;
    }
    if (type == null) {
      type = null;
    }
    obj.channel_type = type;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    obj = { guild_id };
    const merged = Object.assign(obj);
    obj.conversation_id = channelId.conversationId;
    obj.track(AnalyticEvents.TOPICAL_NAV_FOCUS_MODE_IMPRESSION, obj);
  },
  trackFocusModeDismissed(channelId) {
    channelId = channelId.channelId;
    const channel = ChannelStore.getChannel(channelId);
    let obj = { channel_id: channelId, channel_type: null, guild_id: null };
    let type;
    if (channel != null) {
      type = channel.type;
    }
    if (type == null) {
      type = null;
    }
    obj.channel_type = type;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    obj = { guild_id };
    const merged = Object.assign(obj);
    ({ conversationId: obj3.conversation_id, dismissReason: obj3.dismiss_reason } = channelId);
    obj.track(AnalyticEvents.TOPICAL_NAV_FOCUS_MODE_DISMISSED, obj);
  },
  trackThumbsClicked(channelId) {
    channelId = channelId.channelId;
    const channel = ChannelStore.getChannel(channelId);
    let obj = { channel_id: channelId, channel_type: null, guild_id: null };
    let type;
    if (channel != null) {
      type = channel.type;
    }
    if (type == null) {
      type = null;
    }
    obj.channel_type = type;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    obj = { guild_id };
    const merged = Object.assign(obj);
    ({
      conversationId: obj3.conversation_id,
      isThumbsUp: obj3.is_thumbs_up,
      isFocusMode: obj3.is_focus_mode,
    } = channelId);
    obj.track(AnalyticEvents.TOPICAL_NAV_THUMBS_CLICKED, obj);
  },
  trackThumbsDownReasonSelected(channelId) {
    channelId = channelId.channelId;
    const channel = ChannelStore.getChannel(channelId);
    let obj = { channel_id: channelId, channel_type: null, guild_id: null };
    let type;
    if (channel != null) {
      type = channel.type;
    }
    if (type == null) {
      type = null;
    }
    obj.channel_type = type;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    obj = { guild_id };
    const merged = Object.assign(obj);
    ({
      conversationId: obj3.conversation_id,
      isFocusMode: obj3.is_focus_mode,
      reasons: obj3.reasons,
      otherText: obj3.other_text,
    } = channelId);
    obj.track(AnalyticEvents.TOPICAL_NAV_THUMBS_DOWN_REASON_SELECTED, obj);
  },
};
