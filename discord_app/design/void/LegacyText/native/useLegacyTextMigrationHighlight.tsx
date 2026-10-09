// === Module 8581: useLegacyTextMigrationHighlight ===

// Module 8581 (useLegacyTextMigrationHighlight)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import DevSettingsStore from "DevSettingsStore" /* 5090 */;

require = fn;
const createStyles = fn(5091);
const obj2 = { highlight: { borderWidth: 1, borderColor: nativeDefault.colors.STATUS_DANGER } };
let closure_3 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { borderWidth: 1, borderColor: nativeDefault.colors.STATUS_DANGER };
const size = fn(2);
const result = size.fileFinishedImporting("design/void/LegacyText/native/useLegacyTextMigrationHighlight.tsx");

export const useLegacyTextMigrationHighlight = ReactCompilerGating.isReactCompilerEnabled() ? (function useLegacyTextMigrationHighlight() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DevSettingsStore];
    const fn = function n() {
      return DevSettingsStore.get("highlight_mana_text");
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmp4 = closure_3();
  let highlight = null;
  if (tmpResult.useStateFromStores(tmp5, tmp6)) {
    highlight = tmp4.highlight;
  }
  return highlight;
}) : (function useLegacyTextMigrationHighlight() {
  const tmp = closure_3();
  const items = [DevSettingsStore];
  let highlight = null;
  if (obj.useStateFromStores(items, () => DevSettingsStore.get("highlight_mana_text"))) {
    highlight = tmp.highlight;
  }
  return highlight;
});