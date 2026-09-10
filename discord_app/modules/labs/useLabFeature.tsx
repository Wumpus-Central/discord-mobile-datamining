// === Module 8420: useLabFeature ===

// Module 8420 (useLabFeature)
import LabFeatureStore from "LabFeatureStore" /* 8418 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/labs/useLabFeature.tsx");

export default function useLabFeature(ICYMI_LAB_FEATURE) {
  _require = ICYMI_LAB_FEATURE;
  const items = [LabFeatureStore];
  const items1 = [ICYMI_LAB_FEATURE];
  return require("initialize").useStateFromStores(items, () => LabFeatureStore.get(closure_0), items1);
};