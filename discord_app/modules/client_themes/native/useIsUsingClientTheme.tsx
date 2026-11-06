// === Module 9928: useIsUsingClientTheme ===

// Module 9928 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 9929 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveTheme.useIsClientThemeOrCustomThemeActive();
};