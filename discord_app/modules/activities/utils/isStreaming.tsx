// === Module 8456: _isStreaming ===

// Module 8456 (_isStreaming)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import items3 from "items3" /* 4408 */;

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
};