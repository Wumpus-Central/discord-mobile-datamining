// discord_app/modules/devtools/design_toggles/useDesignToggle.tsx
import closure_2 from "DesignTogglesStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/devtools/design_toggles/useDesignToggle.tsx");

export default function useDesignToggle(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const items1 = [arg0];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items,
    () => closure_1_2.get(closure_0),
    items1,
  );
}
