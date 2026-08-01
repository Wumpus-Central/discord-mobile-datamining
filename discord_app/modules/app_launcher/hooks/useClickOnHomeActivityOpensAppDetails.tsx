// === Module 11276: useClickOnHomeActivityOpensAppDetails ===

// Module 11276 (useClickOnHomeActivityOpensAppDetails)
const result = require("set").fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = require(3866) /* explicitContentFromProto */.DeveloperMode;
  return DeveloperMode.useSetting();
};