// discord_app/modules/activities/utils/closeCustomKeyboard.native.tsx
import set from "../../../../_runtime/00002_set.js";
import getBestActiveInput from "../../../utils/native/ChatInputUtils.tsx";

const result = set.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(channelId) {
  const bestActiveInputForChannelId = getBestActiveInput.getBestActiveInputForChannelId(channelId);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
}
