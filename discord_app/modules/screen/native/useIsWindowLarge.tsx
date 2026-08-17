// discord_app/modules/screen/native/useIsWindowLarge.tsx
import set from "../../../../_runtime/00002_set.js";
import useWindowSizeClassifier from "useWindowSizeClassifier.tsx";
import useWindowSizeClassifierDefault from "useWindowSizeClassifier.tsx";

const result = set.fileFinishedImporting("modules/screen/native/useIsWindowLarge.tsx");

export default function useIsWindowLarge() {
  return useWindowSizeClassifierDefault() >= useWindowSizeClassifier.WindowSizeClassifier.LARGE;
};
export const getIsWindowLarge = function getIsWindowLarge() {
  const windowSizeClassifier = useWindowSizeClassifier.getWindowSizeClassifier();
  return windowSizeClassifier >= useWindowSizeClassifier.WindowSizeClassifier.LARGE;
};