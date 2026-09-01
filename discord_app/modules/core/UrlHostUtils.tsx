// discord_app/modules/core/UrlHostUtils.tsx
import set from "../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("modules/core/UrlHostUtils.tsx");

export const getHostWithoutPort = function getHostWithoutPort(arg0) {
  let first;
  if (arg0 != null) {
    first = arg0.split(":")[0];
  }
  return first;
};
export function isLocalhost(arg0) {
  let tmp = "localhost" === arg0;
  if (!tmp) {
    tmp = "127.0.0.1" === arg0;
  }
  return tmp;
}
