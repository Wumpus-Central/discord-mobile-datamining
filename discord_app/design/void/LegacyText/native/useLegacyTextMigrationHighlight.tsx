// === Module 8613: useLegacyTextMigrationHighlight ===

// Module 8613 (useLegacyTextMigrationHighlight)
import nativeDefault from "native" /* 576 */;
import DevSettingsStore from "DevSettingsStore" /* 4559 */;

const require = fn;
fn(4560);
let createStyles = { highlight: null };
createStyles = { borderWidth: 1, borderColor: nativeDefault.colors.STATUS_DANGER };
createStyles.highlight = createStyles;
let closure_3 = createStyles.createStyles(createStyles);
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