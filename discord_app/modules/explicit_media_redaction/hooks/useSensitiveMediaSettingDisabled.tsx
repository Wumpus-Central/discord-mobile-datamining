// discord_app/modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import useParentalControlledExplicitContentSettings from "../../parent_tools/hooks/useParentalControlSettings.tsx";

const result = obj132.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return useParentalControlledExplicitContentSettings.useIsParentallyControlled();
};