// discord_app/design/components/Text/native/useManaTextMigrationHighlightRestartNotice.tsx
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import DevSettingsStore from "../../../../modules/devtools/dev_settings/DevSettingsStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/Text/native/useManaTextMigrationHighlightRestartNotice.tsx",
);

export const useManaTextMigrationHighlightRestartNotice = function useManaTextMigrationHighlightRestartNotice() {
  const items = [DevSettingsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    DevSettingsStore.get("highlight_mana_text"),
  );
  _require = noop.useRef(true);
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (ref.current) {
      tmp.current = false;
    } else {
      actions_AlertActionCreatorsDefault.show({
        title: "Mana Text Migration Highlighter",
        body: "Restart the app (force quit and reopen) to see the change.",
      });
    }
  }, items1);
};
