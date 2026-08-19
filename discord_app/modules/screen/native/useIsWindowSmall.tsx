// discord_app/modules/screen/native/useIsWindowSmall.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import useWindowSizeClassifier from "useWindowSizeClassifier.tsx";
import useWindowSizeClassifierDefault from "useWindowSizeClassifier.tsx";

const result = obj132.fileFinishedImporting("modules/screen/native/useIsWindowSmall.tsx");

export default function getIsWindowSmall() {
  const windowSizeClassifier = useWindowSizeClassifier.getWindowSizeClassifier();
  return windowSizeClassifier <= useWindowSizeClassifier.WindowSizeClassifier.SMALL;
};
export const useIsWindowSmall = function useIsWindowSmall() {
  return useWindowSizeClassifierDefault() <= useWindowSizeClassifier.WindowSizeClassifier.SMALL;
};