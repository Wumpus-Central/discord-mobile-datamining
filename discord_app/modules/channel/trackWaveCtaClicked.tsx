// discord_app/modules/channel/trackWaveCtaClicked.tsx
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import { AnalyticEvents } from "../../Constants.tsx";

const result = require("obj132").fileFinishedImporting("modules/channel/trackWaveCtaClicked.tsx");

export const getDmHasMessageHistory = function getDmHasMessageHistory(arg0) {
  const channel = store.getChannel(arg0);
  let lastMessageId;
  if (channel != null) {
    lastMessageId = channel.lastMessageId;
  }
  return null != lastMessageId;
};
export const trackWaveCtaClicked = function trackWaveCtaClicked(channelId) {
  const obj = { channel_id: channelId.channelId, source: channelId.source, dm_has_message_history: null };
  const channel = store.getChannel(channelId.channelId);
  let lastMessageId;
  if (channel != null) {
    lastMessageId = channel.lastMessageId;
  }
  obj[2] = null != lastMessageId;
  obj.track(AnalyticEvents.WAVE_CTA_CLICKED, obj);
};