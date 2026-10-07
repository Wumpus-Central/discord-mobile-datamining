// discord_app/hooks/analytics.tsx
import AnalyticsUtils from "../utils/AnalyticsUtils.tsx";
import noop from "../../_runtime/metro/00019__.js";

require = fn;
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result1 = size.fileFinishedImporting("hooks/analytics.tsx");

export const useAnalyticsContext = () => noop.useContext(AnalyticsUtils.AnalyticsContext);
