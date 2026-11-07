// === Module 17039: useSensitiveMediaSettingDisabled ===

// Module 17039 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 17027 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export function useSensitiveMediaSettingDisabled() {
  return useParentalControlSettings.useIsParentallyControlled();
}