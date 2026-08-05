// discord_app/modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return require("../../parent_tools/hooks/useParentalControlSettings.tsx") /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
};