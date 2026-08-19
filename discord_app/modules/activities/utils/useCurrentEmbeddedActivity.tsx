// discord_app/modules/activities/utils/useCurrentEmbeddedActivity.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import participantFromServer from "../EmbeddedActivitiesStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedActivity.tsx");

export default function useCurrentEmbeddedActivity() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => currentEmbeddedActivity.getCurrentEmbeddedActivity());
};