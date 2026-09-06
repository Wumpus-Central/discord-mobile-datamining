// === Module 8259: isStreaming ===

// Module 8259 (isStreaming)
import Constants from "Constants" /* 1074 */;
import Constants2 from "Constants" /* 1920 */;
import size from "module_2" /* 2 */;

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

export default function isStreaming(activeSourceId) {
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
};