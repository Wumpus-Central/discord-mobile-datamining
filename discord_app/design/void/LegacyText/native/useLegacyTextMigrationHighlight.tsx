// === Module 8913: useLegacyTextMigrationHighlight ===

// Module 8913 (useLegacyTextMigrationHighlight)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import DevSettingsStore from "DevSettingsStore" /* 4889 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj = { highlight: { borderWidth: 1, borderColor: nativeDefault.colors.STATUS_DANGER } };
({ borderWidth: 1, borderColor: nativeDefault.colors.STATUS_DANGER });
let closure_3 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp5;
  let tmp6;
  const obj = react;
  const cResult = obj.c(2);
  const tmp4 = closure_3();
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
  let highlight = null;
  const tmpResult = get_initialized;
  if (tmpResult.useStateFromStores(tmp5, tmp6)) {
    highlight = tmp4.highlight;
  }
  return highlight;
}) : (() => {
  const items = [DevSettingsStore];
  let highlight = null;
  const tmp = closure_3();
  const obj = get_initialized;
  if (obj.useStateFromStores(items, () => DevSettingsStore.get("highlight_mana_text"))) {
    highlight = tmp.highlight;
  }
  return highlight;
});
const result = size.fileFinishedImporting("design/void/LegacyText/native/useLegacyTextMigrationHighlight.tsx");

export const useLegacyTextMigrationHighlight = tmp2;