// discord_app/design/void/LegacyText/native/useLegacyTextMigrationHighlight.tsx
import ThemesDefault from "Themes" /* 712 */;
import closure_2 from "getUserAgnosticState" /* 4737 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
createCacheKey = { highlight: null };
createCacheKey = { borderWidth: 1, borderColor: ThemesDefault.colors.STATUS_DANGER };
createCacheKey[0] = createCacheKey;
let closure_3 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("design/void/LegacyText/native/useLegacyTextMigrationHighlight.tsx");

export const useLegacyTextMigrationHighlight = function useLegacyTextMigrationHighlight() {
  const tmp = callback();
  const items = [closure_2];
  let highlight = null;
  if (obj.useStateFromStores(items, () => closure_2.get("highlight_mana_text"))) {
    highlight = tmp.highlight;
  }
  return highlight;
};