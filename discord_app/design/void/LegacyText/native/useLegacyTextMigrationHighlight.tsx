// === Module 8896: useLegacyTextMigrationHighlight ===

// Module 8896 (useLegacyTextMigrationHighlight)
import nativeDefault from "native" /* 576 */;
import DevSettingsStore from "DevSettingsStore" /* 4756 */;

const require = fn;
const createStyles = fn(4757);
const obj2 = { highlight: { borderWidth: 1, borderColor: nativeDefault.colors.STATUS_DANGER } };
let closure_3 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/LegacyText/native/useLegacyTextMigrationHighlight.tsx");

export const useLegacyTextMigrationHighlight = function useLegacyTextMigrationHighlight() {
  const tmp = closure_3();
  const items = [DevSettingsStore];
  let highlight = null;
  if (obj.useStateFromStores(items, () => DevSettingsStore.get("highlight_mana_text"))) {
    highlight = tmp.highlight;
  }
  return highlight;
};