// === Module 7564: useIsUsingClientTheme ===

// Module 7564 (useIsUsingClientTheme)
import set from "set" /* 2 */;
import useActiveThemeType from "useActiveThemeType" /* 7565 */;

const result = set.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveThemeType.useIsClientThemeOrCustomThemeActive();
};