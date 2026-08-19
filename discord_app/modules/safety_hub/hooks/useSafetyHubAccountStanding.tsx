// === Module 11068: useSafetyHubAccountStanding ===

// Module 11068 (useSafetyHubAccountStanding)
import initialize from "initialize" /* 589 */;
import handleSafetyHubRequestAgeVerificationResetModalAction from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 11061 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubAccountStanding.tsx");

export const useSafetyHubAccountStanding = function useSafetyHubAccountStanding() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => accountStanding.getAccountStanding());
};