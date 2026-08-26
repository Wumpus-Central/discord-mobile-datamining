// === Module 8946: useAnalyticsContext ===

// Module 8946 (useAnalyticsContext)
import expandEventProperties from "expandEventProperties" /* 698 */;
import closure_2 from "noop" /* 19 */;

require = arg1;
const result = require("set").fileFinishedImporting("hooks/analytics.tsx");

export const useAnalyticsContext = function useAnalyticsContext() {
  return React.useContext(expandEventProperties.AnalyticsContext);
};