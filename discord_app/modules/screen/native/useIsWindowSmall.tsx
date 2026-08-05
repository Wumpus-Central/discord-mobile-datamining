// discord_app/modules/screen/native/useIsWindowSmall.tsx
import { useWindowSizeClassifier } from "useWindowSizeClassifier.tsx";
const result = require("set").fileFinishedImporting("modules/screen/native/useIsWindowSmall.tsx");

export default function getIsWindowSmall() {
  const windowSizeClassifier = useWindowSizeClassifier.getWindowSizeClassifier();
  return windowSizeClassifier <= useWindowSizeClassifier.WindowSizeClassifier.SMALL;
};
export const useIsWindowSmall = function useIsWindowSmall() {
  return useWindowSizeClassifier() <= useWindowSizeClassifier.WindowSizeClassifier.SMALL;
};