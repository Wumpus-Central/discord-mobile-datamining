// === Module 9612: analytics ===

// Module 9612 (analytics)
import AnalyticsUtils from "AnalyticsUtils" /* 1255 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("hooks/analytics.tsx");

export function useAnalyticsContext() {
  return noop.useContext(AnalyticsUtils.AnalyticsContext);
}