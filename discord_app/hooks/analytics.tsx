// === Module 9398: useAnalyticsContext ===

// Module 9398 (useAnalyticsContext)
import expandEventProperties from "expandEventProperties" /* 698 */;
import noop from "noop" /* 19 */;

require = fn;
const result = require("obj132").fileFinishedImporting("hooks/analytics.tsx");

export const useAnalyticsContext = function useAnalyticsContext() {
  return React.useContext(expandEventProperties.AnalyticsContext);
};