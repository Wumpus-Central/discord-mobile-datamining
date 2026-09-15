// === Module 12223: useClickOnHomeActivityOpensAppDetails ===

// Module 12223 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 1936 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
};