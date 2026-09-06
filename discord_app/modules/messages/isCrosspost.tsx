// === Module 8036: isCrosspost ===

// Module 8036 (isCrosspost)
import set from "set" /* 2 */;
import hasFlag from "hasFlag" /* 1384 */;
import ME from "ME" /* 1074 */;

({ MessageFlags: obj1, MessageReferenceTypes: c3, MessageTypes: c4 } = ME);
const result = set.fileFinishedImporting("modules/messages/isCrosspost.tsx");

export default function isCrosspost(type) {
  let hasFlagResult = type.type === constants3.DEFAULT;
  if (hasFlagResult) {
    hasFlagResult = hasFlag.hasFlag(type.flags, constants.IS_CROSSPOST);
    const obj = hasFlag;
  }
  if (hasFlagResult) {
    hasFlagResult = null != type.messageReference;
  }
  if (hasFlagResult) {
    hasFlagResult = type.messageReference.type !== constants2.FORWARD;
  }
  return hasFlagResult;
};