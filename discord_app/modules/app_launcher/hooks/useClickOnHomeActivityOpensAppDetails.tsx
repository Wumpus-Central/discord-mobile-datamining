// discord_app/modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx
import set from "set" /* 2 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;

const result = set.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = explicitContentFromProto.DeveloperMode;
  return DeveloperMode.useSetting();
};