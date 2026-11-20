// === Module 12836: useClickOnHomeActivityOpensAppDetails ===

// Module 12836 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 4619 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
}