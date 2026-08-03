// === Module 7982: _isStreaming ===

// Module 7982 (_isStreaming)
import { validStreamURL } from "items3";
import { ActivityTypes } from "ME";

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
const result = require("set").fileFinishedImporting("modules/activities/utils/isStreaming.tsx");

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