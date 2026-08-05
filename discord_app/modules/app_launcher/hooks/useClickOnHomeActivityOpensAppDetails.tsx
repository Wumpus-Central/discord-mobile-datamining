// discord_app/modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx
const result = require("set").fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = require("../../user_settings/UserSettings.tsx") /* explicitContentFromProto */.DeveloperMode;
  return DeveloperMode.useSetting();
};