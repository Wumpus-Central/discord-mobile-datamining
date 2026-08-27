// === Module 9523: useCurrentEmbeddedActivity ===

// Module 9523 (useCurrentEmbeddedActivity)
import initialize from "initialize" /* 589 */;
import closure_2 from "participantFromServer" /* 1390 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedActivity.tsx");

export default function useCurrentEmbeddedActivity() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => currentEmbeddedActivity.getCurrentEmbeddedActivity());
};