// === Module 8972: useIsUsingClientTheme ===

// Module 8972 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 8973 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveTheme.useIsClientThemeOrCustomThemeActive();
};