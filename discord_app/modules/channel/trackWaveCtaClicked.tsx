// discord_app/modules/channel/trackWaveCtaClicked.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";

const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/trackWaveCtaClicked.tsx");

export const getDmHasMessageHistory = function getDmHasMessageHistory(arg0) {
  const channel = ChannelStore.getChannel(arg0);
  let lastMessageId;
  if (channel != null) {
    lastMessageId = channel.lastMessageId;
  }
  return null != lastMessageId;
};
export const trackWaveCtaClicked = function trackWaveCtaClicked(channelId) {
  const obj = { channel_id: channelId.channelId, source: channelId.source, dm_has_message_history: null };
  const channel = ChannelStore.getChannel(channelId.channelId);
  let lastMessageId;
  if (channel != null) {
    lastMessageId = channel.lastMessageId;
  }
  obj.dm_has_message_history = null != lastMessageId;
  obj.track(AnalyticEvents.WAVE_CTA_CLICKED, obj);
};
