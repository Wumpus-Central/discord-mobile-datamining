// discord_app/design/void/LegacyText/native/useLegacyTextMigrationHighlight.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getUserAgnosticState from "../../../../modules/devtools/dev_settings/DevSettingsStore.tsx";
import "createCacheKey";

const require = fn;
const createCacheKey = { borderWidth: 1, borderColor: ThemesDefault.colors.STATUS_DANGER };
createCacheKey[0] = createCacheKey;
let closure_3 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("design/void/LegacyText/native/useLegacyTextMigrationHighlight.tsx");

export const useLegacyTextMigrationHighlight = function useLegacyTextMigrationHighlight() {
  const tmp = callback();
  const items = [closure_2];
  let highlight = null;
  if (obj.useStateFromStores(items, () => closure_2.get("highlight_mana_text"))) {
    highlight = tmp.highlight;
  }
  return highlight;
};