// === Module 6433: useIsWindowLarge ===

// Module 6433 (useIsWindowLarge)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4740 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useWindowSizeClassifierDefault = useWindowSizeClassifier;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/screen/native/useIsWindowLarge.tsx");

export default () => useWindowSizeClassifierDefault() >= useWindowSizeClassifier.WindowSizeClassifier.LARGE;
export const getIsWindowLarge = function getIsWindowLarge() {
  const windowSizeClassifier = useWindowSizeClassifier.getWindowSizeClassifier();
  return windowSizeClassifier >= useWindowSizeClassifier.WindowSizeClassifier.LARGE;
};