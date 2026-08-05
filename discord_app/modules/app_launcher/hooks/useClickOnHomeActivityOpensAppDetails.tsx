// discord_app/modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx
import { explicitContentFromProto } from "../../user_settings/UserSettings.tsx";
const result = require("set").fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = explicitContentFromProto /* explicitContentFromProto */.DeveloperMode;
  return DeveloperMode.useSetting();
};