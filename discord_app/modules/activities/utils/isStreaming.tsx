// discord_app/modules/activities/utils/isStreaming.tsx
import Constants from "../../../Constants.tsx";
import Constants2 from "../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
const validStreamURL = Constants2.validStreamURL;
const ActivityTypes = Constants.ActivityTypes;
const result = size.fileFinishedImporting("modules/activities/utils/isStreaming.tsx");

export default function isStreaming(noop) {
  if (null == noop) {
    return tmp;
  } else {
    const _Array = Array;
    if (Array.isArray(noop)) {
      let someResult = noop.some(_isStreaming);
    } else {
      someResult = noop.type === ActivityTypes.STREAMING;
      if (someResult) {
        let isMatch = null != noop.url;
        if (isMatch) {
          isMatch = validStreamURL.test(noop.url);
        }
        someResult = isMatch;
      }
    }
  }
}
