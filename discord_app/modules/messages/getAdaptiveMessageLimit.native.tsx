// discord_app/modules/messages/getAdaptiveMessageLimit.native.tsx
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const MAX_MESSAGES_PER_CHANNEL = Constants.MAX_MESSAGES_PER_CHANNEL;
const result = size.fileFinishedImporting("modules/messages/getAdaptiveMessageLimit.native.tsx");

export function getMessageLimit() {
  return MAX_MESSAGES_PER_CHANNEL;
}
export function useMessageLimit() {
  return MAX_MESSAGES_PER_CHANNEL;
}
