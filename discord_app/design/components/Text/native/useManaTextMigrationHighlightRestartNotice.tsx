// discord_app/design/components/Text/native/useManaTextMigrationHighlightRestartNotice.tsx
import closure_3 from "../../../../../_runtime/00019_noop.js";
import closure_4 from "../../../../modules/devtools/dev_settings/DevSettingsStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting(
  "design/components/Text/native/useManaTextMigrationHighlightRestartNotice.tsx",
);

export const useManaTextMigrationHighlightRestartNotice = function useManaTextMigrationHighlightRestartNotice() {
  const items = [closure_4];
  const stateFromStores = require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items,
    () => closure_4.get("highlight_mana_text"),
  );
  _require = React.useRef(true);
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (ref.current) {
      tmp.current = false;
    } else {
      closure_1_1(closure_1_2[3]).show({
        title: "Mana Text Migration Highlighter",
        body: "Restart the app (force quit and reopen) to see the change.",
      });
      const obj = closure_1_1(closure_1_2[3]);
    }
  }, items1);
};
