// discord_app/modules/activities/utils/closeCustomKeyboard.native.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import getBestActiveInput from "../../../utils/native/ChatInputUtils.tsx";

const result = obj132.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(channelId) {
  const bestActiveInputForChannelId = getBestActiveInput.getBestActiveInputForChannelId(channelId);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};