// discord_app/modules/messages/getAdaptiveMessageLimit.native.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ME from "../../Constants.tsx";

const MAX_MESSAGES_PER_CHANNEL = ME.MAX_MESSAGES_PER_CHANNEL;
const result = obj132.fileFinishedImporting("modules/messages/getAdaptiveMessageLimit.native.tsx");

export function getMessageLimit(arg0) {
  return MAX_MESSAGES_PER_CHANNEL;
}
export function useMessageLimit() {
  return MAX_MESSAGES_PER_CHANNEL;
}