// discord_app/modules/search/native/hooks/useSearchLayoutInsetTop.tsx
import set from "../../../../../_runtime/00002_set.js";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";

const result = set.fileFinishedImporting("modules/search/native/hooks/useSearchLayoutInsetTop.tsx");

export default function useSearchLayoutInsetTop() {
  return useSafeAreaInsetsDefault().top + 8;
};