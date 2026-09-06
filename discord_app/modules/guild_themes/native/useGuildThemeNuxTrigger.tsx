// === Module 16160: useGuildThemeNuxTrigger ===

// Module 16160 (useGuildThemeNuxTrigger)
import initialize from "initialize" /* 504 */;
import guild_themes_useGuildThemeNuxTriggerDefault from "guild_themes/useGuildThemeNuxTrigger" /* 16166 */;
import noop from "module_19" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4251 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_themes/native/useGuildThemeNuxTrigger.tsx");

export default function useGuildThemeNuxTrigger(arg0) {
  const items = [ActionSheetStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    key = key.getKey();
    return key === require("GuildThemeNuxActionSheet").GUILD_THEME_NUX_ACTION_SHEET_KEY;
  });
  const callback = noop.useCallback((arg0) => {
    const tmp = require("asyncRequireImpl")(paths[4], paths.paths);
    require("ActionSheetActionCreators").openLazy(tmp, require("GuildThemeNuxActionSheet").GUILD_THEME_NUX_ACTION_SHEET_KEY, arg0, "stack");
    return tmp;
  }, []);
  guild_themes_useGuildThemeNuxTriggerDefault(arg0, { isNuxOpen: stateFromStores, openNux: callback });
};