// discord_app/modules/guild_themes/native/useGuildThemeNuxTrigger.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import useGuildThemeNuxTriggerDefault from "../useGuildThemeNuxTrigger.tsx";
import react from "../../../../_runtime/00019_react.js";
import ActionSheetStore from "../../action_sheet/native/ActionSheetStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let key;

const result = size.fileFinishedImporting("modules/guild_themes/native/useGuildThemeNuxTrigger.tsx");

export default function useGuildThemeNuxTrigger(arg0) {
  let paths;
  let obj = get_initialized;
  const items = [ActionSheetStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    key = key.getKey();
    return key === require("GuildThemeNuxActionSheet").GUILD_THEME_NUX_ACTION_SHEET_KEY;
  });
  const callback = react.useCallback((arg0) => {
    const tmp = require("asyncRequire")(paths[4], paths.paths);
    const obj = require("ActionSheetActionCreators");
    obj.openLazy(tmp, require("GuildThemeNuxActionSheet").GUILD_THEME_NUX_ACTION_SHEET_KEY, arg0, "stack");
    return tmp;
  }, []);
  useGuildThemeNuxTriggerDefault(arg0, { isNuxOpen: stateFromStores, openNux: callback });
}
