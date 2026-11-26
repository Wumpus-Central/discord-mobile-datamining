// === Module 9014: useIsUsingClientTheme ===

// Module 9014 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 9015 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveTheme.useIsClientThemeOrCustomThemeActive();
};