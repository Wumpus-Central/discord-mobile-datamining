// === Module 8571: useIsUsingClientTheme ===

// Module 8571 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 8572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveTheme.useIsClientThemeOrCustomThemeActive();
};