// === Module 11952: useCurrentEmbeddedActivity ===

// Module 11952 (useCurrentEmbeddedActivity)
import initialize from "initialize" /* 504 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4988 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedActivity.tsx");

export default function useCurrentEmbeddedActivity() {
  items = [EmbeddedActivitiesStore];
  return initialize.useStateFromStores(items, () => currentEmbeddedActivity.getCurrentEmbeddedActivity());
};