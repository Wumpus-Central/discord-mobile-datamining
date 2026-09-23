// === Module 8202: useIsUsingClientTheme ===

// Module 8202 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 8203 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveTheme.useIsClientThemeOrCustomThemeActive();
};