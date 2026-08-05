// discord_app/modules/devtools/design_toggles/useDesignToggle.tsx
import getUserAgnosticState from "getUserAgnosticState";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/devtools/design_toggles/useDesignToggle.tsx");

export default function useDesignToggle(arg0) {
  const _require = arg0;
  const items = [getUserAgnosticState];
  const items1 = [arg0];
  return _initialize.useStateFromStores(items, () => outer1_2.get(closure_0), items1);
};