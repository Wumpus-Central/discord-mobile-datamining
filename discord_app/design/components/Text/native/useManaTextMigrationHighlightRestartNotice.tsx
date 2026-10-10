// === Module 14254: useManaTextMigrationHighlightRestartNotice ===

// Module 14254 (useManaTextMigrationHighlightRestartNotice)
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5300 */;
import noop from "module_19" /* 19 */;
import DevSettingsStore from "DevSettingsStore" /* 5091 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Text/native/useManaTextMigrationHighlightRestartNotice.tsx");

export const useManaTextMigrationHighlightRestartNotice = ReactCompilerGating.isReactCompilerEnabled() ? (function useManaTextMigrationHighlightRestartNotice() {
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DevSettingsStore];
    const fn = function s() {
      return DevSettingsStore.get("highlight_mana_text");
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
  _require = noop.useRef(true);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function c() {
      if (ref.current) {
        tmp.current = false;
      } else {
        actions_AlertActionCreatorsDefault.show({ title: "Mana Text Migration Highlighter", body: "Restart the app (force quit and reopen) to see the change." });
      }
    };
    cResult[2] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== stateFromStores) {
    const items1 = [stateFromStores];
    cResult[3] = stateFromStores;
    cResult[4] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[4];
  }
  const effect = noop.useEffect(tmp8, tmp9);
  const tmpResult = require("initialize");
}) : (function useManaTextMigrationHighlightRestartNotice() {
  const items = [DevSettingsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => DevSettingsStore.get("highlight_mana_text"));
  _require = noop.useRef(true);
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (ref.current) {
      tmp.current = false;
    } else {
      actions_AlertActionCreatorsDefault.show({ title: "Mana Text Migration Highlighter", body: "Restart the app (force quit and reopen) to see the change." });
    }
  }, items1);
});