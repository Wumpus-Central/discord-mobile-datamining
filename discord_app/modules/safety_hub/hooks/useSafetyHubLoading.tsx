// === Module 14107: useIsSafetyHubLoading ===

// Module 14107 (useIsSafetyHubLoading)
import initialize from "initialize" /* 589 */;
import handleSafetyHubRequestAgeVerificationResetModalAction from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 11061 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => fetching.isFetching());
};