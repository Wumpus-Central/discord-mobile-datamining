// discord_app/design/components/Text/native/useManaTextMigrationHighlightRestartNotice.tsx
import _modDef4656 from "../../../../actions/native/AlertActionCreators.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import getUserAgnosticState from "../../../../modules/devtools/dev_settings/DevSettingsStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("design/components/Text/native/useManaTextMigrationHighlightRestartNotice.tsx");

export const useManaTextMigrationHighlightRestartNotice = function useManaTextMigrationHighlightRestartNotice() {
  const items = [closure_4];
  const stateFromStores = require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => closure_4.get("highlight_mana_text"));
  _require = React.useRef(true);
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (ref.current) {
      tmp.current = false;
    } else {
      _modDef4656.show({ title: "Mana Text Migration Highlighter", body: "Restart the app (force quit and reopen) to see the change." });
    }
  }, items1);
};