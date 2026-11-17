// === Module 13577: useClickOnHomeActivityOpensAppDetails ===

// Module 13577 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 5135 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
}