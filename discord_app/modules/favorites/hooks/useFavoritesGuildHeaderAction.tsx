// discord_app/modules/favorites/hooks/useFavoritesGuildHeaderAction.tsx
import router_utils from "../../routing/router_utils.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3360 from "../intl/FavoritesGuild.messages.js";
import FavoritesHooks from "../FavoritesHooks.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const Routes = fn(1074).Routes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHeaderAction.tsx");

export default function useFavoritesGuildHeaderAction() {
  const hasAccess = FavoritesHooks.useFavoritesAccess().hasAccess;
  const obj2 = { isPreview: !hasAccess, label: null, exitPreview: null };
  const callback = noop.useCallback(() => {
    router_utils.transitionTo(constants.ME);
  }, []);
  const intl = util.intl;
  if (hasAccess) {
    let ojM1xJ = _modDef3360.G9fGlP;
  } else {
    ojM1xJ = util.t.ojM1xJ;
  }
  obj2.label = intl.string(ojM1xJ);
  obj2.exitPreview = callback;
  return obj2;
}
