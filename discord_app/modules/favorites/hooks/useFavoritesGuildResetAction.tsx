// === Module 16139: useFavoritesGuildResetAction ===

// Module 16139 (useFavoritesGuildResetAction)
import UserSettings from "UserSettings" /* 1935 */;
import _modDef3225 from "module_3225" /* 3225 */;
import FavoritesHooks from "FavoritesHooks" /* 10224 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;

require = fn;
const Routes = fn(1074).Routes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildResetAction.tsx");

export default function useFavoritesGuildResetAction() {
  const DeveloperMode = UserSettings.DeveloperMode;
  let hasAccess = DeveloperMode.useSetting();
  let obj = FavoritesHooks;
  const callback = noop.useCallback(() => {
    if (obj.isFavoritesGuildId(guildId.getGuildId())) {
      let tmpResult = tmp(tmp2[6]);
      tmpResult.transitionTo(constants.ME);
    }
    tmpResult = tmp(tmp2[7]);
    tmpResult.resetFavoritesGuild();
  }, []);
  if (hasAccess) {
    hasAccess = obj.useFavoritesAccess().hasAccess;
  }
  obj = { isAvailable: hasAccess, label: null, subLabel: null, perform: null };
  const intl = tmp(1114).intl;
  obj.label = intl.string(_modDef3225.YkET6R);
  const intl2 = tmp(1114).intl;
  obj.subLabel = intl2.string(_modDef3225.ZzcwNk);
  obj.perform = callback;
  return obj;
};