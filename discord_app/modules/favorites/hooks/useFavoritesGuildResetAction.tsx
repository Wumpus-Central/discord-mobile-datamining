// discord_app/modules/favorites/hooks/useFavoritesGuildResetAction.tsx
import UserSettings from "../../user_settings/UserSettings.tsx";
import _modDef3225 from "../intl/FavoritesGuild.messages.js";
import FavoritesHooks from "../FavoritesHooks.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";

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
}
