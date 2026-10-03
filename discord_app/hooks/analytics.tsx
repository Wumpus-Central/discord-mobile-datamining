// === Module 9101: analytics ===

// Module 9101 (analytics)
import AnalyticsUtils from "AnalyticsUtils" /* 1252 */;
import noop from "module_19" /* 19 */;

require = fn;
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result1 = size.fileFinishedImporting("hooks/analytics.tsx");

export const useAnalyticsContext = () => noop.useContext(AnalyticsUtils.AnalyticsContext);