// === Module 7877: isCrosspost ===

// Module 7877 (isCrosspost)
import set from "set" /* 2 */;
import hasFlag from "hasFlag" /* 1403 */;
import ME from "ME" /* 676 */;

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