// === Module 8994: useIsUsingClientTheme ===

// Module 8994 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 8995 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveTheme.useIsClientThemeOrCustomThemeActive();
};