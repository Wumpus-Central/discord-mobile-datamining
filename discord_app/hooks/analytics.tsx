// === Module 9706: analytics ===

// Module 9706 (analytics)
import AnalyticsUtils from "AnalyticsUtils" /* 1241 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("hooks/analytics.tsx");

export const useAnalyticsContext = function useAnalyticsContext() {
  return noop.useContext(AnalyticsUtils.AnalyticsContext);
};