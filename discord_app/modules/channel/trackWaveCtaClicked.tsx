// === Module 12265: getDmHasMessageHistory ===

// Module 12265 (getDmHasMessageHistory)
import expandEventPropertiesDefault from "expandEventProperties" /* 1242 */;
import closure_2 from "ensureGuildLoaded" /* 1957 */;
import { AnalyticEvents } from "ME" /* 1074 */;

const result = require("set").fileFinishedImporting("modules/channel/trackWaveCtaClicked.tsx");

export const getDmHasMessageHistory = function getDmHasMessageHistory(arg0) {
  const channel = store.getChannel(arg0);
  let lastMessageId;
  if (channel != null) {
    lastMessageId = channel.lastMessageId;
  }
  return null != lastMessageId;
};
export const trackWaveCtaClicked = function trackWaveCtaClicked(channelId) {
  let obj = expandEventPropertiesDefault;
  obj = { channel_id: channelId.channelId, source: channelId.source, dm_has_message_history: null };
  const channel = store.getChannel(channelId.channelId);
  let lastMessageId;
  if (channel != null) {
    lastMessageId = channel.lastMessageId;
  }
  obj[2] = null != lastMessageId;
  obj.track(AnalyticEvents.WAVE_CTA_CLICKED, obj);
};