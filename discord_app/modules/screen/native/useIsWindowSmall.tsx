// === Module 7577: getIsWindowSmall ===

// Module 7577 (getIsWindowSmall)
import set from "set" /* 2 */;
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4303 */;
import useWindowSizeClassifierDefault from "useWindowSizeClassifier" /* 4303 */;

const result = set.fileFinishedImporting("modules/screen/native/useIsWindowSmall.tsx");

export default function getIsWindowSmall() {
  const windowSizeClassifier = useWindowSizeClassifier.getWindowSizeClassifier();
  return windowSizeClassifier <= useWindowSizeClassifier.WindowSizeClassifier.SMALL;
};
export const useIsWindowSmall = function useIsWindowSmall() {
  return useWindowSizeClassifierDefault() <= useWindowSizeClassifier.WindowSizeClassifier.SMALL;
};