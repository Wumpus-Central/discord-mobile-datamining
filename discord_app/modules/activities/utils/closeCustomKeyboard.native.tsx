// === Module 8745: closeCustomKeyboard ===

// Module 8745 (closeCustomKeyboard)
import obj132 from "obj132" /* 2 */;
import getBestActiveInput from "getBestActiveInput" /* 4237 */;

const result = obj132.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(channelId) {
  const bestActiveInputForChannelId = getBestActiveInput.getBestActiveInputForChannelId(channelId);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};