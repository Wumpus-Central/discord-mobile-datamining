// discord_app/modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx
import { useParentalControlledExplicitContentSettings } from "../../parent_tools/hooks/useParentalControlSettings.tsx";
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return useParentalControlledExplicitContentSettings /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
};