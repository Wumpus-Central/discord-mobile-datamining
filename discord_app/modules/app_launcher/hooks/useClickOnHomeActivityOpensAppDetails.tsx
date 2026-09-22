// === Module 12346: useClickOnHomeActivityOpensAppDetails ===

// Module 12346 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 2020 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
};