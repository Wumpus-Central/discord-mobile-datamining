// === Module 14878: useSensitiveMediaSettingDisabled ===

// Module 14878 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 14879 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return useParentalControlSettings.useIsParentallyControlled();
};