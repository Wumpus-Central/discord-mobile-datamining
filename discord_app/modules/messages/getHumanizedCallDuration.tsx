// === Module 8508: getHumanizedCallDuration ===

// Module 8508 (getHumanizedCallDuration)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/getHumanizedCallDuration.tsx");

export default function getHumanizedCallDuration(call) {
  duration = null;
  if (null != call.call) {
    duration = call.call.duration;
  }
  let humanizeResult = null;
  if (null != duration) {
    humanizeResult = duration.humanize();
  }
  return humanizeResult;
};