// === Module 9471: analytics ===

// Module 9471 (analytics)
import AnalyticsUtils from "AnalyticsUtils" /* 1264 */;
import noop from "module_19" /* 19 */;

require = fn;
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result1 = size.fileFinishedImporting("hooks/analytics.tsx");

export const useAnalyticsContext = function useAnalyticsContext() {
  return noop.useContext(AnalyticsUtils.AnalyticsContext);
};