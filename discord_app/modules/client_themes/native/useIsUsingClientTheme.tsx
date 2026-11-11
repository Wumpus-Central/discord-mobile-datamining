// === Module 8995: useIsUsingClientTheme ===

// Module 8995 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 8996 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveTheme.useIsClientThemeOrCustomThemeActive();
};