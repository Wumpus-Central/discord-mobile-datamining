// === Module 9615: useCurrentEmbeddedActivity ===

// Module 9615 (useCurrentEmbeddedActivity)
import initialize from "initialize" /* 586 */;
import closure_2 from "participantFromServer" /* 1385 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedActivity.tsx");

export default function useCurrentEmbeddedActivity() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => currentEmbeddedActivity.getCurrentEmbeddedActivity());
};