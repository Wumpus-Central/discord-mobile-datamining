import { useWindowSizeClassifier } from "useWindowSizeClassifier.tsx";
// discord_app/modules/screen/native/useIsWindowSmall.tsx
const result = require("set").fileFinishedImporting("modules/screen/native/useIsWindowSmall.tsx");

export default function getIsWindowSmall() {
  const windowSizeClassifier = useWindowSizeClassifier /* useWindowSizeClassifier */.getWindowSizeClassifier();
  return windowSizeClassifier <= useWindowSizeClassifier /* useWindowSizeClassifier */.WindowSizeClassifier.SMALL;
};
export const useIsWindowSmall = function useIsWindowSmall() {
  return useWindowSizeClassifier() <= useWindowSizeClassifier /* useWindowSizeClassifier */.WindowSizeClassifier.SMALL;
};