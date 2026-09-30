// === Module 14570: useSensitiveMediaSettingDisabled ===

// Module 14570 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 14559 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return useParentalControlSettings.useIsParentallyControlled();
};