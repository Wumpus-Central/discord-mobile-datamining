// === Module 9547: closeCustomKeyboard ===

// Module 9547 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 4425 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(channelId) {
  const bestActiveInputForChannelId = ChatInputUtils.getBestActiveInputForChannelId(channelId);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};