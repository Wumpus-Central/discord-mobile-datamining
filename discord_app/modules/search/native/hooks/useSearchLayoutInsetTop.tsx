// discord_app/modules/search/native/hooks/useSearchLayoutInsetTop.tsx
const result = require("set").fileFinishedImporting("modules/search/native/hooks/useSearchLayoutInsetTop.tsx");

export default function useSearchLayoutInsetTop() {
  return require("../../../safe_area/useSafeAreaInsets.native.tsx")().top + 8;
};