// discord_app/modules/client_themes/native/useIsUsingClientTheme.tsx
import set from "set" /* 2 */;
import useActiveThemeType from "useActiveThemeType" /* 8503 */;

const result = set.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveThemeType.useIsClientThemeOrCustomThemeActive();
};