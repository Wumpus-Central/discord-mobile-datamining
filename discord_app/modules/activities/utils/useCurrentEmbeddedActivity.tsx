// === Module 10656: useCurrentEmbeddedActivity ===

// Module 10656 (useCurrentEmbeddedActivity)
import initialize from "initialize" /* 504 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4642 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedActivity.tsx");

export default function useCurrentEmbeddedActivity() {
  items = [EmbeddedActivitiesStore];
  return initialize.useStateFromStores(items, () => currentEmbeddedActivity.getCurrentEmbeddedActivity());
};