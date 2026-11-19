// === Module 8452: useIsUsingClientTheme ===

// Module 8452 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 8453 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveTheme.useIsClientThemeOrCustomThemeActive();
};