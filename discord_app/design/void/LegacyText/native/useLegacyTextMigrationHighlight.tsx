import getUserAgnosticState from "getUserAgnosticState";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { highlight: null };
createCacheKey = { borderWidth: 1, borderColor: require("Themes").colors.STATUS_DANGER };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("Themes").fileFinishedImporting("design/void/LegacyText/native/useLegacyTextMigrationHighlight.tsx");

export const useLegacyTextMigrationHighlight = function useLegacyTextMigrationHighlight() {
  const tmp = createCacheKey();
  const items = [getUserAgnosticState];
  let highlight = null;
  if (obj.useStateFromStores(items, () => getUserAgnosticState.get("highlight_mana_text"))) {
    highlight = tmp.highlight;
  }
  return highlight;
};