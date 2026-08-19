// discord_app/modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import explicitContentFromProto from "../../user_settings/UserSettings.tsx";

const result = obj132.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = explicitContentFromProto.DeveloperMode;
  return DeveloperMode.useSetting();
};