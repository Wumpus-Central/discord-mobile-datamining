// === Module 9086: getMessageLimit ===

// Module 9086 (getMessageLimit)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;

const MAX_MESSAGES_PER_CHANNEL = ME.MAX_MESSAGES_PER_CHANNEL;
const result = obj132.fileFinishedImporting("modules/messages/getAdaptiveMessageLimit.native.tsx");

export function getMessageLimit(arg0) {
  return MAX_MESSAGES_PER_CHANNEL;
}
export function useMessageLimit() {
  return MAX_MESSAGES_PER_CHANNEL;
}