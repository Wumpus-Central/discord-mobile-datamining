// === Module 8873: useIsUsingClientTheme ===

// Module 8873 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 8874 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveTheme.useIsClientThemeOrCustomThemeActive();
};