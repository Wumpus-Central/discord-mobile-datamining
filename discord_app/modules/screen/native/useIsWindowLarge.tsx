// discord_app/modules/screen/native/useIsWindowLarge.tsx
const result = require("set").fileFinishedImporting("modules/screen/native/useIsWindowLarge.tsx");

export default function useIsWindowLarge() {
  return require("useWindowSizeClassifier.tsx")() >= require("useWindowSizeClassifier.tsx") /* useWindowSizeClassifier */.WindowSizeClassifier.LARGE;
};
export const getIsWindowLarge = function getIsWindowLarge() {
  const windowSizeClassifier = require("useWindowSizeClassifier.tsx") /* useWindowSizeClassifier */.getWindowSizeClassifier();
  return windowSizeClassifier >= require("useWindowSizeClassifier.tsx") /* useWindowSizeClassifier */.WindowSizeClassifier.LARGE;
};