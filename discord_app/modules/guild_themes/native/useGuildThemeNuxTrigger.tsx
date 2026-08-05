// discord_app/modules/guild_themes/native/useGuildThemeNuxTrigger.tsx
import noop from "noop";
import setContent from "setContent";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { useGuildThemeNuxTrigger } from "../useGuildThemeNuxTrigger.tsx";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/guild_themes/native/useGuildThemeNuxTrigger.tsx");

export default function useGuildThemeNuxTrigger(arg0) {
  const items = [setContent];
  const stateFromStores = initialize /* initialize */.useStateFromStores(items, () => {
    key = key.getKey();
    return key === callback(paths[3]).GUILD_THEME_NUX_ACTION_SHEET_KEY;
  });
  const callback = React.useCallback((arg0) => {
    const tmp = callback(paths[5])(paths[4], paths.paths);
    callback2(paths[6]).openLazy(tmp, callback(paths[3]).GUILD_THEME_NUX_ACTION_SHEET_KEY, arg0, "stack");
    return tmp;
  }, []);
  useGuildThemeNuxTrigger(arg0, { isNuxOpen: stateFromStores, openNux: callback });
};