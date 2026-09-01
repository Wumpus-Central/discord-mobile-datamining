// discord_app/hooks/analytics.tsx
import expandEventProperties from "../utils/AnalyticsUtils.tsx";
import closure_2 from "../../_runtime/00019_noop.js";

require = arg1;
const result = require("set").fileFinishedImporting("hooks/analytics.tsx");

export const useAnalyticsContext = function useAnalyticsContext() {
  return React.useContext(expandEventProperties.AnalyticsContext);
};
