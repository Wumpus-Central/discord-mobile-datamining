// === Module 9565: useAnalyticsContext ===

// Module 9565 (useAnalyticsContext)
import noop from "noop";

const require = arg1;
const result = require("set").fileFinishedImporting("hooks/analytics.tsx");

export const useAnalyticsContext = function useAnalyticsContext() {
  return React.useContext(require(698) /* expandEventProperties */.AnalyticsContext);
};