// discord_app/modules/activities/utils/isStreaming.tsx
import set from "../../../../_runtime/00002_set.js";
import ME from "../../../Constants.tsx";
import items3 from "../Constants.tsx";

function _isStreaming(type) {
  let tmp = type.type === ActivityTypes.STREAMING;
  if (tmp) {
    let isMatch = null != type.url;
    if (isMatch) {
      isMatch = validStreamURL.test(type.url);
    }
    tmp = isMatch;
  }
  return tmp;
}
const validStreamURL = items3.validStreamURL;
const ActivityTypes = ME.ActivityTypes;
const result = set.fileFinishedImporting("modules/activities/utils/isStreaming.tsx");

export default function isStreaming(activeSourceId, arg1) {
  if (null == activeSourceId) {
    return tmp;
  } else {
    const _Array = Array;
    if (Array.isArray(activeSourceId)) {
      let someResult = activeSourceId.some(_isStreaming);
    } else {
      someResult = activeSourceId.type === ActivityTypes.STREAMING;
      if (someResult) {
        let isMatch = null != activeSourceId.url;
        if (isMatch) {
          isMatch = validStreamURL.test(activeSourceId.url);
        }
        someResult = isMatch;
      }
    }
  }
}
