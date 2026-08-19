// === Module 11266: useClickOnHomeActivityOpensAppDetails ===

// Module 11266 (useClickOnHomeActivityOpensAppDetails)
import obj132 from "obj132" /* 2 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;

const result = obj132.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = explicitContentFromProto.DeveloperMode;
  return DeveloperMode.useSetting();
};