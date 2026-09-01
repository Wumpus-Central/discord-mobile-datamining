// discord_app/modules/messages/getAdaptiveMessageLimit.native.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";

const MAX_MESSAGES_PER_CHANNEL = ME.MAX_MESSAGES_PER_CHANNEL;
const result = set.fileFinishedImporting("modules/messages/getAdaptiveMessageLimit.native.tsx");

export function getMessageLimit(arg0) {
  return MAX_MESSAGES_PER_CHANNEL;
}
export function useMessageLimit() {
  return MAX_MESSAGES_PER_CHANNEL;
}
