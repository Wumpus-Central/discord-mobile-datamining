// discord_app/modules/safety_hub/hooks/useSafetyHubLoading.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import SafetyHubStore from "../SafetyHubStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  const items = [SafetyHubStore];
  return initialize.useStateFromStores(items, () => fetching.isFetching());
}
