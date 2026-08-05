// discord_app/hooks/analytics.tsx
import noop from "noop";
import { expandEventProperties } from "../utils/AnalyticsUtils.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("hooks/analytics.tsx");

export const useAnalyticsContext = function useAnalyticsContext() {
  return React.useContext(expandEventProperties /* expandEventProperties */.AnalyticsContext);
};