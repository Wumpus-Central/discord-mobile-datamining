// === Module 14180: useSensitiveMediaSettingDisabled ===

// Module 14180 (useSensitiveMediaSettingDisabled)
import obj132 from "obj132" /* 2 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14181 */;

const result = obj132.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return useParentalControlledExplicitContentSettings.useIsParentallyControlled();
};