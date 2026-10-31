// === Module 10049: analytics ===

// Module 10049 (analytics)
import AnalyticsUtils from "AnalyticsUtils" /* 1252 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("hooks/analytics.tsx");

export function useAnalyticsContext() {
  return noop.useContext(AnalyticsUtils.AnalyticsContext);
}