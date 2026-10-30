// === Module 10028: analytics ===

// Module 10028 (analytics)
import AnalyticsUtils from "AnalyticsUtils" /* 1253 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("hooks/analytics.tsx");

export function useAnalyticsContext() {
  return noop.useContext(AnalyticsUtils.AnalyticsContext);
}