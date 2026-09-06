// === Module 9943: getMessageLimit ===

// Module 9943 (getMessageLimit)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;

const MAX_MESSAGES_PER_CHANNEL = ME.MAX_MESSAGES_PER_CHANNEL;
const result = set.fileFinishedImporting("modules/messages/getAdaptiveMessageLimit.native.tsx");

export function getMessageLimit(arg0) {
  return MAX_MESSAGES_PER_CHANNEL;
}
export function useMessageLimit() {
  return MAX_MESSAGES_PER_CHANNEL;
}