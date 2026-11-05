// === Module 9977: useIsUsingClientTheme ===

// Module 9977 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 9978 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveTheme.useIsClientThemeOrCustomThemeActive();
};