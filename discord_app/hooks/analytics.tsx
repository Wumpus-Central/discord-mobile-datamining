// discord_app/hooks/analytics.tsx
import AnalyticsUtils from "../utils/AnalyticsUtils.tsx";
import react from "../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../_runtime/metro/00002__.js";

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("hooks/analytics.tsx");

export const useAnalyticsContext = () => react.useContext(AnalyticsUtils.AnalyticsContext);
