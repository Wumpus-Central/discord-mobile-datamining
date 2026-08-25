// === Module 11060: closeCustomKeyboard ===

// Module 11060 (closeCustomKeyboard)
import set from "set" /* 2 */;
import getBestActiveInput from "getBestActiveInput" /* 4242 */;

const result = set.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(channelId) {
  const bestActiveInputForChannelId = getBestActiveInput.getBestActiveInputForChannelId(channelId);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};