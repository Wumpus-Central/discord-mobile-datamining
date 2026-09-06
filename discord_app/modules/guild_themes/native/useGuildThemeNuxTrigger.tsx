// discord_app/modules/guild_themes/native/useGuildThemeNuxTrigger.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import guild_themes_useGuildThemeNuxTriggerDefault from "../useGuildThemeNuxTrigger.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ActionSheetStore from "../../action_sheet/native/ActionSheetStore.tsx";

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
    require("ActionSheetActionCreators").openLazy(
      tmp,
      require("GuildThemeNuxActionSheet").GUILD_THEME_NUX_ACTION_SHEET_KEY,
      arg0,
      "stack",
    );
    return tmp;
  }, []);
  guild_themes_useGuildThemeNuxTriggerDefault(arg0, { isNuxOpen: stateFromStores, openNux: callback });
}
