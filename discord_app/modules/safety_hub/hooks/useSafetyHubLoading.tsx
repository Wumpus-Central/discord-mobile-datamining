// === Module 14579: useIsSafetyHubLoading ===

// Module 14579 (useIsSafetyHubLoading)
import initialize from "initialize" /* 586 */;
import closure_2 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 8716 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => fetching.isFetching());
};