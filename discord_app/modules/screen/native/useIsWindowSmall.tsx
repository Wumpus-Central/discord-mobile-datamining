// discord_app/modules/screen/native/useIsWindowSmall.tsx
const result = require("set").fileFinishedImporting("modules/screen/native/useIsWindowSmall.tsx");

export default function getIsWindowSmall() {
  const windowSizeClassifier = require("useWindowSizeClassifier.tsx") /* useWindowSizeClassifier */.getWindowSizeClassifier();
  return windowSizeClassifier <= require("useWindowSizeClassifier.tsx") /* useWindowSizeClassifier */.WindowSizeClassifier.SMALL;
};
export const useIsWindowSmall = function useIsWindowSmall() {
  return require("useWindowSizeClassifier.tsx")() <= require("useWindowSizeClassifier.tsx") /* useWindowSizeClassifier */.WindowSizeClassifier.SMALL;
};