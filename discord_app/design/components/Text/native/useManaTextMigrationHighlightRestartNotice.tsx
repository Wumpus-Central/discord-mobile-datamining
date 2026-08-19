// === Module 15161: useManaTextMigrationHighlightRestartNotice ===

// Module 15161 (useManaTextMigrationHighlightRestartNotice)
import _modDef4656 from "module_4656" /* 4656 */;
import noop from "noop" /* 19 */;
import getUserAgnosticState from "getUserAgnosticState" /* 4737 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("design/components/Text/native/useManaTextMigrationHighlightRestartNotice.tsx");

export const useManaTextMigrationHighlightRestartNotice = function useManaTextMigrationHighlightRestartNotice() {
  const items = [closure_4];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_4.get("highlight_mana_text"));
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