// discord_app/modules/labs/useLabFeature.tsx
import LabFeatureStore from "LabFeatureStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/labs/useLabFeature.tsx");

export default function useLabFeature(arg0) {
  _require = arg0;
  const items = [LabFeatureStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => LabFeatureStore.get(closure_0), items1);
}
