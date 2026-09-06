// discord_app/modules/client_themes/native/useIsUsingClientTheme.tsx
import useActiveTheme from "useActiveTheme.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveTheme.useIsClientThemeOrCustomThemeActive();
}
