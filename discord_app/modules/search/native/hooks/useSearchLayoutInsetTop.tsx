// discord_app/modules/search/native/hooks/useSearchLayoutInsetTop.tsx
import { useSafeAreaInsets } from "../../../safe_area/useSafeAreaInsets.native.tsx";
const result = require("set").fileFinishedImporting("modules/search/native/hooks/useSearchLayoutInsetTop.tsx");

export default function useSearchLayoutInsetTop() {
  return useSafeAreaInsets().top + 8;
};