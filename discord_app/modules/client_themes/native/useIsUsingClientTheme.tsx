import { useActiveThemeType } from "useActiveTheme.tsx";
// discord_app/modules/client_themes/native/useIsUsingClientTheme.tsx
const result = require("set").fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveThemeType /* useActiveThemeType */.useIsClientThemeOrCustomThemeActive();
};