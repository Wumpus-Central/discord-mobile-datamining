// === Module 7925: useIsWindowLarge ===

// Module 7925 (useIsWindowLarge)
import obj132 from "obj132" /* 2 */;
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4233 */;
import useWindowSizeClassifierDefault from "useWindowSizeClassifier" /* 4233 */;

const result = obj132.fileFinishedImporting("modules/screen/native/useIsWindowLarge.tsx");

export default function useIsWindowLarge() {
  return useWindowSizeClassifierDefault() >= useWindowSizeClassifier.WindowSizeClassifier.LARGE;
};
export const getIsWindowLarge = function getIsWindowLarge() {
  const windowSizeClassifier = useWindowSizeClassifier.getWindowSizeClassifier();
  return windowSizeClassifier >= useWindowSizeClassifier.WindowSizeClassifier.LARGE;
};