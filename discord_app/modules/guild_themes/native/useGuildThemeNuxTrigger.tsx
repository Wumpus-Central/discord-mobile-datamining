// === Module 15421: useGuildThemeNuxTrigger ===

// Module 15421 (useGuildThemeNuxTrigger)
import initialize from "initialize" /* 589 */;
import useGuildThemeNuxTriggerDefault from "useGuildThemeNuxTrigger" /* 15427 */;
import noop from "noop" /* 19 */;
import setContent from "setContent" /* 4086 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_themes/native/useGuildThemeNuxTrigger.tsx");

export default function useGuildThemeNuxTrigger(arg0) {
  const items = [closure_4];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    key = key.getKey();
    return key === callback(paths[3]).GUILD_THEME_NUX_ACTION_SHEET_KEY;
  });
  const callback = React.useCallback((arg0) => {
    const tmp = callback(paths[5])(paths[4], paths.paths);
    callback2(paths[6]).openLazy(tmp, callback(paths[3]).GUILD_THEME_NUX_ACTION_SHEET_KEY, arg0, "stack");
    return tmp;
  }, []);
  useGuildThemeNuxTriggerDefault(arg0, { isNuxOpen: stateFromStores, openNux: callback });
};