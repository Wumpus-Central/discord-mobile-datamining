// === Module 8502: useIsUsingClientTheme ===

// Module 8502 (useIsUsingClientTheme)
import obj132 from "obj132" /* 2 */;
import useActiveThemeType from "useActiveThemeType" /* 8503 */;

const result = obj132.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveThemeType.useIsClientThemeOrCustomThemeActive();
};