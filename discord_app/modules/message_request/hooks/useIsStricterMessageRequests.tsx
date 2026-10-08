// === Module 12180: useIsStricterMessageRequests ===

// Module 12180 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 12150 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return RegionalTeenUtils.useIsTeenInCountrySet(set);
};