// === Module 11394: useSafetyHubAccountStanding ===

// Module 11394 (useSafetyHubAccountStanding)
import initialize from "initialize" /* 589 */;
import closure_2 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 11387 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubAccountStanding.tsx");

export const useSafetyHubAccountStanding = function useSafetyHubAccountStanding() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => accountStanding.getAccountStanding());
};