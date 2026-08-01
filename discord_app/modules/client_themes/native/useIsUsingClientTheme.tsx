// === Module 8834: useIsUsingClientTheme ===

// Module 8834 (useIsUsingClientTheme)
const result = require("set").fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return require(8835) /* useActiveThemeType */.useIsClientThemeOrCustomThemeActive();
};