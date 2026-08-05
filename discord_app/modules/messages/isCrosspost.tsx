import { hasFlag } from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
// discord_app/modules/messages/isCrosspost.tsx
import ME from "ME";

let c3;
let c4;
let obj1;
({ MessageFlags: obj1, MessageReferenceTypes: c3, MessageTypes: c4 } = ME);
const result = require("set").fileFinishedImporting("modules/messages/isCrosspost.tsx");

export default function isCrosspost(type) {
  let hasFlagResult = type.type === constants3.DEFAULT;
  if (hasFlagResult) {
    hasFlagResult = hasFlag /* hasFlag */.hasFlag(type.flags, constants.IS_CROSSPOST);
    const obj = hasFlag /* hasFlag */;
  }
  if (hasFlagResult) {
    hasFlagResult = null != type.messageReference;
  }
  if (hasFlagResult) {
    hasFlagResult = type.messageReference.type !== constants2.FORWARD;
  }
  return hasFlagResult;
};