const result = require("set").fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return require(9012) /* useActiveThemeType */.useIsClientThemeOrCustomThemeActive();
};