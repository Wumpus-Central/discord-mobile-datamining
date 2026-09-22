// discord_app/design/void/LegacyText/native/useLegacyTextMigrationHighlight.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import DevSettingsStore from "../../../../modules/devtools/dev_settings/DevSettingsStore.tsx";

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
