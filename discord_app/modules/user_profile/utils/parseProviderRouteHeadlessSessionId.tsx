// discord_app/modules/user_profile/utils/parseProviderRouteHeadlessSessionId.tsx
import PlatformsDefault from "../../../lib/Platforms.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

let c3 = "h:";
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/utils/parseProviderRouteHeadlessSessionId.tsx");

export default function parseProviderRouteHeadlessSessionId(str) {
  if (null != str) {
    if (str.startsWith(c3)) {
      str = str.slice(2);
      const first = _slicedToArray(str.split(","), 1)[0];
      if (null != first) {
        if (0 !== first.length) {
          value = PlatformsDefault.get(first);
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
}
export const HEADLESS_SESSION_ID_PREFIX = "h:";
