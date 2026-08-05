// discord_app/modules/labs/useLabFeature.tsx
import getUserAgnosticState from "getUserAgnosticState";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/labs/useLabFeature.tsx");

export default function useLabFeature(arg0) {
  const _require = arg0;
  const items = [getUserAgnosticState];
  const items1 = [arg0];
  return _require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => outer1_2.get(closure_0), items1);
};