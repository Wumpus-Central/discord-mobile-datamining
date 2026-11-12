// === Module 13315: useClickOnHomeActivityOpensAppDetails ===

// Module 13315 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 5068 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
}