// === Module 11234: useCurrentEmbeddedActivity ===

// Module 11234 (useCurrentEmbeddedActivity)
import initialize from "initialize" /* 589 */;
import participantFromServer from "participantFromServer" /* 1390 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedActivity.tsx");

export default function useCurrentEmbeddedActivity() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => currentEmbeddedActivity.getCurrentEmbeddedActivity());
};