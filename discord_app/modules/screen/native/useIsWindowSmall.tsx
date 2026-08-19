// === Module 8520: getIsWindowSmall ===

// Module 8520 (getIsWindowSmall)
import obj132 from "obj132" /* 2 */;
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4233 */;
import useWindowSizeClassifierDefault from "useWindowSizeClassifier" /* 4233 */;

const result = obj132.fileFinishedImporting("modules/screen/native/useIsWindowSmall.tsx");

export default function getIsWindowSmall() {
  const windowSizeClassifier = useWindowSizeClassifier.getWindowSizeClassifier();
  return windowSizeClassifier <= useWindowSizeClassifier.WindowSizeClassifier.SMALL;
};
export const useIsWindowSmall = function useIsWindowSmall() {
  return useWindowSizeClassifierDefault() <= useWindowSizeClassifier.WindowSizeClassifier.SMALL;
};