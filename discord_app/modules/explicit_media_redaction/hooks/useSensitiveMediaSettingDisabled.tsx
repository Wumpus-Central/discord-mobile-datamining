// discord_app/modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx
import useParentalControlSettings from "../../parent_tools/hooks/useParentalControlSettings.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx",
);

export function useSensitiveMediaSettingDisabled() {
  return useParentalControlSettings.useIsParentallyControlled();
}
