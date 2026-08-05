// discord_app/modules/user_profile/utils/parseProviderRouteHeadlessSessionId.tsx
import _slicedToArray from "_slicedToArray";

let c3 = "h:";
const result = require("set").fileFinishedImporting("modules/user_profile/utils/parseProviderRouteHeadlessSessionId.tsx");

export default function parseProviderRouteHeadlessSessionId(str) {
  if (null != str) {
    if (str.startsWith(c3)) {
      const first = callback(str.slice(2).split(","), 1)[0];
      if (null != first) {
        if (0 !== first.length) {
          const value = require("../../../lib/Platforms.tsx").get(first);
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