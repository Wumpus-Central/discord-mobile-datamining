// discord_app/hooks/analytics.tsx
import AnalyticsUtils from "../utils/AnalyticsUtils.tsx";
import noop from "../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("hooks/analytics.tsx");

export const useAnalyticsContext = function useAnalyticsContext() {
  return noop.useContext(AnalyticsUtils.AnalyticsContext);
};
