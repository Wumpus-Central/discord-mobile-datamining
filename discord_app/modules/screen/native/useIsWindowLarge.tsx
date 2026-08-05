import { useWindowSizeClassifier } from "useWindowSizeClassifier.tsx";
// discord_app/modules/screen/native/useIsWindowLarge.tsx
const result = require("set").fileFinishedImporting("modules/screen/native/useIsWindowLarge.tsx");

export default function useIsWindowLarge() {
  return useWindowSizeClassifier() >= useWindowSizeClassifier /* useWindowSizeClassifier */.WindowSizeClassifier.LARGE;
};
export const getIsWindowLarge = function getIsWindowLarge() {
  const windowSizeClassifier = useWindowSizeClassifier /* useWindowSizeClassifier */.getWindowSizeClassifier();
  return windowSizeClassifier >= useWindowSizeClassifier /* useWindowSizeClassifier */.WindowSizeClassifier.LARGE;
};