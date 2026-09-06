// === Module 9633: useCurrentEmbeddedActivity ===

// Module 9633 (useCurrentEmbeddedActivity)
import initialize from "initialize" /* 504 */;
import closure_2 from "participantFromServer" /* 1956 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedActivity.tsx");

export default function useCurrentEmbeddedActivity() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => currentEmbeddedActivity.getCurrentEmbeddedActivity());
};