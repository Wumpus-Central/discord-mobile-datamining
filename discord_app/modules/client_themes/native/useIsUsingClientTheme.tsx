// === Module 7472: useIsUsingClientTheme ===

// Module 7472 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 7473 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveTheme.useIsClientThemeOrCustomThemeActive();
};