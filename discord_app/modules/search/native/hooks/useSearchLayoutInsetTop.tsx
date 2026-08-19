// discord_app/modules/search/native/hooks/useSearchLayoutInsetTop.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";

const result = obj132.fileFinishedImporting("modules/search/native/hooks/useSearchLayoutInsetTop.tsx");

export default function useSearchLayoutInsetTop() {
  return useSafeAreaInsetsDefault().top + 8;
};