import { useSafeAreaInsets } from "../../../safe_area/useSafeAreaInsets.native.tsx";
// discord_app/modules/search/native/hooks/useSearchLayoutInsetTop.tsx
const result = require("set").fileFinishedImporting("modules/search/native/hooks/useSearchLayoutInsetTop.tsx");

export default function useSearchLayoutInsetTop() {
  return useSafeAreaInsets().top + 8;
};