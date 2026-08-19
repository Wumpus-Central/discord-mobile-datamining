// discord_app/hooks/analytics.tsx
import expandEventProperties from "../utils/AnalyticsUtils.tsx";
import noop from "../../_runtime/00019_noop.js";

require = fn;
const result = require("obj132").fileFinishedImporting("hooks/analytics.tsx");

export const useAnalyticsContext = function useAnalyticsContext() {
  return React.useContext(expandEventProperties.AnalyticsContext);
};