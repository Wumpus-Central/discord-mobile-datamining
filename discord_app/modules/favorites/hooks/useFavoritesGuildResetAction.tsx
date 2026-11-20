// === Module 17533: useFavoritesGuildResetAction ===

// Module 17533 (useFavoritesGuildResetAction)
import router_utils from "router_utils" /* 1098 */;
import util from "util" /* 1112 */;
import _modDef3703 from "module_3703" /* 3703 */;
import UserSettings from "UserSettings" /* 4619 */;
import FavoritesUtils from "FavoritesUtils" /* 4668 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 11099 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4827 */;

require = fn;
const Routes = fn(1071).Routes;
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
  obj.label = intl.string(_modDef3703.YkET6R);
  const intl2 = util.intl;
  obj.subLabel = intl2.string(_modDef3703.ZzcwNk);
  obj.perform = callback;
  return obj;
};