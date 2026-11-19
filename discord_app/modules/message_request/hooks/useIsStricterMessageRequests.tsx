// === Module 13240: useIsStricterMessageRequests ===

// Module 13240 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 13199 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return RegionalTeenUtils.useIsTeenInCountrySet(set);
};