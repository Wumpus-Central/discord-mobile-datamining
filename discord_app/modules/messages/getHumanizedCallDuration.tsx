// === Module 8203: getHumanizedCallDuration ===

// Module 8203 (getHumanizedCallDuration)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/messages/getHumanizedCallDuration.tsx");

export default function getHumanizedCallDuration(call) {
  let duration = null;
  if (null != call.call) {
    duration = call.call.duration;
  }
  let humanizeResult = null;
  if (null != duration) {
    humanizeResult = duration.humanize();
  }
  return humanizeResult;
};