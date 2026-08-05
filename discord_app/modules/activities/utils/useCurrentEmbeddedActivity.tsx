// discord_app/modules/activities/utils/useCurrentEmbeddedActivity.tsx
import participantFromServer from "participantFromServer";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedActivity.tsx");

export default function useCurrentEmbeddedActivity() {
  const items = [participantFromServer];
  return require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => currentEmbeddedActivity.getCurrentEmbeddedActivity());
};