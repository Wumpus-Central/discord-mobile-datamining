// === Module 11297: analytics ===

// Module 11297 (analytics)
import AnalyticsUtils from "AnalyticsUtils" /* 1256 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("hooks/analytics.tsx");

export function useAnalyticsContext() {
  return noop.useContext(AnalyticsUtils.AnalyticsContext);
}