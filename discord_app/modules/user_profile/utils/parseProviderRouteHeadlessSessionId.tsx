// === Module 12112: parseProviderRouteHeadlessSessionId ===

// Module 12112 (parseProviderRouteHeadlessSessionId)
import getPlatformUserUrlDefault from "getPlatformUserUrl" /* 5097 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

let c3 = "h:";
const result = require("obj132").fileFinishedImporting("modules/user_profile/utils/parseProviderRouteHeadlessSessionId.tsx");

export default function parseProviderRouteHeadlessSessionId(str) {
  if (null != str) {
    if (str.startsWith(c3)) {
      str = str.slice(2);
      const first = callback(str.split(","), 1)[0];
      if (null != first) {
        if (0 !== first.length) {
          const value = getPlatformUserUrlDefault.get(first);
          let tmp5 = null;
          if (null != value) {
            tmp5 = null;
            if (value.enabled) {
              tmp5 = value;
            }
          }
          return tmp5;
        }
      }
      return null;
    }
  }
  return null;
};
export const HEADLESS_SESSION_ID_PREFIX = "h:";