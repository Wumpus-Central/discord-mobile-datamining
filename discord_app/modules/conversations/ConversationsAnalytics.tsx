// discord_app/modules/conversations/ConversationsAnalytics.tsx
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
let obj = {
  trackEntrypointImpression(channelId) {
    let guild_id;
    let type;
    channelId = channelId.channelId;
    const track = AnalyticsUtilsDefault.track;
    const TOPICAL_NAV_ENTRYPOINT_IMPRESSION = AnalyticEvents.TOPICAL_NAV_ENTRYPOINT_IMPRESSION;
    AnalyticsUtilsDefault;
    const channel = ChannelStore.getChannel(channelId);
    const obj = { channel_id: channelId, channel_type: type, guild_id };
    type = undefined;
    if (channel != null) {
      type = channel.type;
    }
    if (type == null) {
      type = null;
    }
    guild_id = undefined;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    const obj2 = { conversation_count: channelId.conversationCount };
    const merged = Object.assign(obj);
    track(TOPICAL_NAV_ENTRYPOINT_IMPRESSION, obj2);
  },
  trackTopicsUnitImpression(channelId) {
    let guild_id;
    let type;
    channelId = channelId.channelId;
    const track = AnalyticsUtilsDefault.track;
    const TOPICAL_NAV_TOPICS_UNIT_IMPRESSION = AnalyticEvents.TOPICAL_NAV_TOPICS_UNIT_IMPRESSION;
    AnalyticsUtilsDefault;
    const channel = ChannelStore.getChannel(channelId);
    const obj = { channel_id: channelId, channel_type: type, guild_id };
    type = undefined;
    if (channel != null) {
      type = channel.type;
    }
    if (type == null) {
      type = null;
    }
    guild_id = undefined;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    const obj3 = {};
    const merged = Object.assign(obj);
    ({ conversationIds: obj2.conversation_ids, isFocusMode: obj2.is_focus_mode } = channelId);
    track(TOPICAL_NAV_TOPICS_UNIT_IMPRESSION, obj3);
  },
  trackPreviewImpression(channelId) {
    let guild_id;
    let type;
    channelId = channelId.channelId;
    const track = AnalyticsUtilsDefault.track;
    const TOPICAL_NAV_PREVIEW_IMPRESSION = AnalyticEvents.TOPICAL_NAV_PREVIEW_IMPRESSION;
    AnalyticsUtilsDefault;
    const channel = ChannelStore.getChannel(channelId);
    const obj = { channel_id: channelId, channel_type: type, guild_id };
    type = undefined;
    if (channel != null) {
      type = channel.type;
    }
    if (type == null) {
      type = null;
    }
    guild_id = undefined;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    const obj3 = {};
    const merged = Object.assign(obj);
    ({ conversationId: obj2.conversation_id, isFocusMode: obj2.is_focus_mode } = channelId);
    track(TOPICAL_NAV_PREVIEW_IMPRESSION, obj3);
  },
  trackTopicsUnitClicked(channelId) {
    let guild_id;
    let type;
    channelId = channelId.channelId;
    const track = AnalyticsUtilsDefault.track;
    const TOPICAL_NAV_TOPICS_UNIT_CLICKED = AnalyticEvents.TOPICAL_NAV_TOPICS_UNIT_CLICKED;
    AnalyticsUtilsDefault;
    const channel = ChannelStore.getChannel(channelId);
    const obj = { channel_id: channelId, channel_type: type, guild_id };
    type = undefined;
    if (channel != null) {
      type = channel.type;
    }
    if (type == null) {
      type = null;
    }
    guild_id = undefined;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    const obj3 = {};
    const merged = Object.assign(obj);
    ({ conversationId: obj2.conversation_id, isFocusMode: obj2.is_focus_mode } = channelId);
    track(TOPICAL_NAV_TOPICS_UNIT_CLICKED, obj3);
  },
  trackFocusModeImpression(channelId) {
    let guild_id;
    let type;
    channelId = channelId.channelId;
    const track = AnalyticsUtilsDefault.track;
    const TOPICAL_NAV_FOCUS_MODE_IMPRESSION = AnalyticEvents.TOPICAL_NAV_FOCUS_MODE_IMPRESSION;
    AnalyticsUtilsDefault;
    const channel = ChannelStore.getChannel(channelId);
    const obj = { channel_id: channelId, channel_type: type, guild_id };
    type = undefined;
    if (channel != null) {
      type = channel.type;
    }
    if (type == null) {
      type = null;
    }
    guild_id = undefined;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    const obj2 = { conversation_id: channelId.conversationId };
    const merged = Object.assign(obj);
    track(TOPICAL_NAV_FOCUS_MODE_IMPRESSION, obj2);
  },
  trackFocusModeDismissed(channelId) {
    let guild_id;
    let type;
    channelId = channelId.channelId;
    const track = AnalyticsUtilsDefault.track;
    const TOPICAL_NAV_FOCUS_MODE_DISMISSED = AnalyticEvents.TOPICAL_NAV_FOCUS_MODE_DISMISSED;
    AnalyticsUtilsDefault;
    const channel = ChannelStore.getChannel(channelId);
    const obj = { channel_id: channelId, channel_type: type, guild_id };
    type = undefined;
    if (channel != null) {
      type = channel.type;
    }
    if (type == null) {
      type = null;
    }
    guild_id = undefined;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    const obj3 = {};
    const merged = Object.assign(obj);
    ({ conversationId: obj2.conversation_id, dismissReason: obj2.dismiss_reason } = channelId);
    track(TOPICAL_NAV_FOCUS_MODE_DISMISSED, obj3);
  },
  trackThumbsClicked(channelId) {
    let guild_id;
    let type;
    channelId = channelId.channelId;
    const track = AnalyticsUtilsDefault.track;
    const TOPICAL_NAV_THUMBS_CLICKED = AnalyticEvents.TOPICAL_NAV_THUMBS_CLICKED;
    AnalyticsUtilsDefault;
    const channel = ChannelStore.getChannel(channelId);
    const obj = { channel_id: channelId, channel_type: type, guild_id };
    type = undefined;
    if (channel != null) {
      type = channel.type;
    }
    if (type == null) {
      type = null;
    }
    guild_id = undefined;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    const obj3 = {};
    const merged = Object.assign(obj);
    ({
      conversationId: obj2.conversation_id,
      isThumbsUp: obj2.is_thumbs_up,
      isFocusMode: obj2.is_focus_mode,
    } = channelId);
    track(TOPICAL_NAV_THUMBS_CLICKED, obj3);
  },
  trackThumbsDownReasonSelected(channelId) {
    let guild_id;
    let type;
    channelId = channelId.channelId;
    const track = AnalyticsUtilsDefault.track;
    const TOPICAL_NAV_THUMBS_DOWN_REASON_SELECTED = AnalyticEvents.TOPICAL_NAV_THUMBS_DOWN_REASON_SELECTED;
    AnalyticsUtilsDefault;
    const channel = ChannelStore.getChannel(channelId);
    const obj = { channel_id: channelId, channel_type: type, guild_id };
    type = undefined;
    if (channel != null) {
      type = channel.type;
    }
    if (type == null) {
      type = null;
    }
    guild_id = undefined;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    const obj3 = {};
    const merged = Object.assign(obj);
    ({
      conversationId: obj2.conversation_id,
      isFocusMode: obj2.is_focus_mode,
      reasons: obj2.reasons,
      otherText: obj2.other_text,
    } = channelId);
    track(TOPICAL_NAV_THUMBS_DOWN_REASON_SELECTED, obj3);
  },
};
const result = size.fileFinishedImporting("modules/conversations/ConversationsAnalytics.tsx");

export const ConversationsAnalytics = obj;
