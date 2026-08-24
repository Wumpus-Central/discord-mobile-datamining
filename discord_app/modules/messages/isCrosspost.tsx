// discord_app/modules/messages/isCrosspost.tsx
import set from "../../../_runtime/00002_set.js";
import hasFlag from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import ME from "../../Constants.tsx";

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