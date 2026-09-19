// === Module 12516: trackWaveCtaClicked ===

// Module 12516 (trackWaveCtaClicked)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ChannelStore from "ChannelStore" /* 2041 */;

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
  const obj2 = { channel_id: channelId.channelId, source: channelId.source, dm_has_message_history: null };
  const channel = ChannelStore.getChannel(channelId.channelId);
  let lastMessageId;
  if (channel != null) {
    lastMessageId = channel.lastMessageId;
  }
  obj2.dm_has_message_history = null != lastMessageId;
  AnalyticsUtilsDefault.track(AnalyticEvents.WAVE_CTA_CLICKED, obj2);
};