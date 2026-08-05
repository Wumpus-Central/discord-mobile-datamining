// discord_app/design/components/Text/native/useManaTextMigrationHighlightRestartNotice.tsx
import noop from "noop";
import getUserAgnosticState from "getUserAgnosticState";

const require = arg1;
const result = require("initialize").fileFinishedImporting("design/components/Text/native/useManaTextMigrationHighlightRestartNotice.tsx");

export const useManaTextMigrationHighlightRestartNotice = function useManaTextMigrationHighlightRestartNotice() {
  const items = [getUserAgnosticState];
  const stateFromStores = _require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => getUserAgnosticState.get("highlight_mana_text"));
  _require = React.useRef(true);
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (ref.current) {
      tmp.current = false;
    } else {
      outer1_1(outer1_2[3]).show({ title: "Mana Text Migration Highlighter", body: "Restart the app (force quit and reopen) to see the change." });
      const obj = outer1_1(outer1_2[3]);
    }
  }, items1);
};