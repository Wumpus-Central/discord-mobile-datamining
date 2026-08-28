// === Module 12399: closeCustomKeyboard ===

// Module 12399 (closeCustomKeyboard)
import set from "set" /* 2 */;
import getBestActiveInput from "getBestActiveInput" /* 4308 */;

const result = set.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(channelId) {
  const bestActiveInputForChannelId = getBestActiveInput.getBestActiveInputForChannelId(channelId);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};