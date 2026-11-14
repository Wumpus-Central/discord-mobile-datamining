// === Module 18857: useFavoritesGuildResetAction ===

// Module 18857 (useFavoritesGuildResetAction)
import router_utils from "router_utils" /* 1099 */;
import util from "util" /* 1113 */;
import _modDef3679 from "module_3679" /* 3679 */;
import UserSettings from "UserSettings" /* 5131 */;
import FavoritesUtils from "FavoritesUtils" /* 5180 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10944 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5349 */;

require = fn;
const Routes = fn(1072).Routes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildResetAction.tsx");

export default function useFavoritesGuildResetAction() {
  const DeveloperMode = UserSettings.DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj = { isAvailable: setting, label: null, subLabel: null, perform: null };
  const callback = noop.useCallback(() => {
    if (obj.isFavoritesGuildId(guildId.getGuildId())) {
      router_utils.transitionTo(constants.ME);
      const tmpResult = router_utils;
    }
    obj = FavoritesUtils;
    FavoritesActionCreators.resetFavoritesGuild();
    const tmpResult2 = FavoritesActionCreators;
  }, []);
  const intl = util.intl;
  obj.label = intl.string(_modDef3679.YkET6R);
  const intl2 = util.intl;
  obj.subLabel = intl2.string(_modDef3679.ZzcwNk);
  obj.perform = callback;
  return obj;
};