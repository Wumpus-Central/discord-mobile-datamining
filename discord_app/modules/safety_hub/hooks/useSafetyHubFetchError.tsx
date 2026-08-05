// discord_app/modules/safety_hub/hooks/useSafetyHubFetchError.tsx
import handleSafetyHubRequestAgeVerificationResetModalAction from "handleSafetyHubRequestAgeVerificationResetModalAction";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubFetchError.tsx");

export const useSafetyHubFetchError = function useSafetyHubFetchError() {
  const items = [handleSafetyHubRequestAgeVerificationResetModalAction];
  return initialize /* initialize */.useStateFromStores(items, () => fetchError.getFetchError());
};