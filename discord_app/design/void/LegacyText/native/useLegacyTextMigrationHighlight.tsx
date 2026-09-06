// discord_app/design/void/LegacyText/native/useLegacyTextMigrationHighlight.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import DevSettingsStore from "../../../../modules/devtools/dev_settings/DevSettingsStore.tsx";

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
