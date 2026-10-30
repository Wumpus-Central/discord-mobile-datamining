// discord_app/modules/activities/utils/useCurrentEmbeddedActivity.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import EmbeddedActivitiesStore from "../EmbeddedActivitiesStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedActivity.tsx");

export default function useCurrentEmbeddedActivity() {
  const items = [EmbeddedActivitiesStore];
  return initialize.useStateFromStores(items, () => currentEmbeddedActivity.getCurrentEmbeddedActivity());
}
