// === Module 12475: useIsStricterMessageRequests ===

// Module 12475 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 12449 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return RegionalTeenUtils.useIsTeenInCountrySet(set);
};