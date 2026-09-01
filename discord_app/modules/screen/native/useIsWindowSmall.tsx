// discord_app/modules/screen/native/useIsWindowSmall.tsx
import set from "../../../../_runtime/00002_set.js";
import useWindowSizeClassifier from "useWindowSizeClassifier.tsx";
import useWindowSizeClassifierDefault from "useWindowSizeClassifier.tsx";

const result = set.fileFinishedImporting("modules/screen/native/useIsWindowSmall.tsx");

export default function getIsWindowSmall() {
  const windowSizeClassifier = useWindowSizeClassifier.getWindowSizeClassifier();
  return windowSizeClassifier <= useWindowSizeClassifier.WindowSizeClassifier.SMALL;
}
export const useIsWindowSmall = function useIsWindowSmall() {
  return useWindowSizeClassifierDefault() <= useWindowSizeClassifier.WindowSizeClassifier.SMALL;
};
