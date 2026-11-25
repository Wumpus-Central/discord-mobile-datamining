// === Module 12999: useClickOnHomeActivityOpensAppDetails ===

// Module 12999 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 4837 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
}