// discord_app/modules/safety_hub/hooks/useSafetyHubFetchError.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import closure_2 from "../SafetyHubStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubFetchError.tsx");

export const useSafetyHubFetchError = function useSafetyHubFetchError() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => fetchError.getFetchError());
};
