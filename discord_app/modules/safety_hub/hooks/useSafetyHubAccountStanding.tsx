// === Module 11068: useSafetyHubAccountStanding ===

// Module 11068 (useSafetyHubAccountStanding)
import initialize from "initialize" /* 589 */;
import closure_2 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 11061 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubAccountStanding.tsx");

export const useSafetyHubAccountStanding = function useSafetyHubAccountStanding() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => accountStanding.getAccountStanding());
};