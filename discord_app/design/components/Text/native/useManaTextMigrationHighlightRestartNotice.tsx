// === Module 15307: useManaTextMigrationHighlightRestartNotice ===

// Module 15307 (useManaTextMigrationHighlightRestartNotice)
import closure_3 from "noop" /* 19 */;
import closure_4 from "getUserAgnosticState" /* 4477 */;

const require = arg1;
const result = require("set").fileFinishedImporting("design/components/Text/native/useManaTextMigrationHighlightRestartNotice.tsx");

export const useManaTextMigrationHighlightRestartNotice = function useManaTextMigrationHighlightRestartNotice() {
  const items = [closure_4];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_4.get("highlight_mana_text"));
  _require = React.useRef(true);
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (ref.current) {
      tmp.current = false;
    } else {
      closure_1_1(closure_1_2[3]).show({ title: "Mana Text Migration Highlighter", body: "Restart the app (force quit and reopen) to see the change." });
      const obj = closure_1_1(closure_1_2[3]);
    }
  }, items1);
};