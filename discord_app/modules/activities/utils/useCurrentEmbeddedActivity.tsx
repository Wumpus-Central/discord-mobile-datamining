// discord_app/modules/activities/utils/useCurrentEmbeddedActivity.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import closure_2 from "../EmbeddedActivitiesStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedActivity.tsx");

export default function useCurrentEmbeddedActivity() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => currentEmbeddedActivity.getCurrentEmbeddedActivity());
};