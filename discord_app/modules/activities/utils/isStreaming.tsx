// discord_app/modules/activities/utils/isStreaming.tsx
import Constants from "../Constants.tsx";
import ActivityTypes from "../../../../discord_common/js/shared/shared-constants/ActivityTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function _isStreaming(type) {
  let tmp = type.type === ActivityTypes.ActivityTypes.STREAMING;
  if (tmp) {
    let isMatch = null != type.url;
    if (isMatch) {
      isMatch = validStreamURL.test(type.url);
    }
    tmp = isMatch;
  }
  return tmp;
}
const validStreamURL = Constants.validStreamURL;
const result = size.fileFinishedImporting("modules/activities/utils/isStreaming.tsx");

export default function isStreaming(activeSourceId) {
  if (null == activeSourceId) {
    return tmp;
  } else {
    const _Array = Array;
    if (Array.isArray(activeSourceId)) {
      let someResult = activeSourceId.some(_isStreaming);
    } else {
      someResult = activeSourceId.type === ActivityTypes.ActivityTypes.STREAMING;
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
