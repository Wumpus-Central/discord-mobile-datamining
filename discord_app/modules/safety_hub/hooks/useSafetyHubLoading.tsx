// discord_app/modules/safety_hub/hooks/useSafetyHubLoading.tsx
import handleSafetyHubRequestAgeVerificationResetModalAction from "handleSafetyHubRequestAgeVerificationResetModalAction";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  const items = [handleSafetyHubRequestAgeVerificationResetModalAction];
  return initialize /* initialize */.useStateFromStores(items, () => fetching.isFetching());
};