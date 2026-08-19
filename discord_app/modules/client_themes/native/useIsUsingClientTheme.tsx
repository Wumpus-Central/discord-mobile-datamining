// discord_app/modules/client_themes/native/useIsUsingClientTheme.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import useActiveThemeType from "useActiveTheme.tsx";

const result = obj132.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveThemeType.useIsClientThemeOrCustomThemeActive();
};