// === Module 12380: closeCustomKeyboard ===

// Module 12380 (closeCustomKeyboard)
import set from "set" /* 2 */;
import getBestActiveInput from "getBestActiveInput" /* 4307 */;

const result = set.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(channelId) {
  const bestActiveInputForChannelId = getBestActiveInput.getBestActiveInputForChannelId(channelId);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};