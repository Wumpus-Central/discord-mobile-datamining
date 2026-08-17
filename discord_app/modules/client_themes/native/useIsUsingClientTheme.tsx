// discord_app/modules/client_themes/native/useIsUsingClientTheme.tsx
import set from "../../../../_runtime/00002_set.js";
import useActiveThemeType from "useActiveTheme.tsx";

const result = set.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveThemeType.useIsClientThemeOrCustomThemeActive();
};