// === Module 7946: useIsUsingClientTheme ===

// Module 7946 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 7947 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveTheme.useIsClientThemeOrCustomThemeActive();
};