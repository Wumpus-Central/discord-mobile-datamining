// === Module 16358: useSearchLayoutInsetTop ===

// Module 16358 (useSearchLayoutInsetTop)
import set from "set" /* 2 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;

const result = set.fileFinishedImporting("modules/search/native/hooks/useSearchLayoutInsetTop.tsx");

export default function useSearchLayoutInsetTop() {
  return useSafeAreaInsetsDefault().top + 8;
};