// discord_app/modules/favorites/hooks/useFavoritesGuildResetAction.tsx
import c from "../../../../_runtime/00576_c.js";
import router_utils from "../../routing/router_utils.tsx";
import util from "../../../intl/index.native.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import FavoritesUtils from "../FavoritesUtils.tsx";
import _modDef3442 from "../intl/FavoritesGuild.messages.js";
import FavoritesActionCreators from "../FavoritesActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";

require = fn;
const Routes = fn(1085).Routes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildResetAction.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useFavoritesGuildResetAction() {
      const cResult = c.c(5);
      const DeveloperMode = UserSettings.DeveloperMode;
      let hasAccess = DeveloperMode.useSetting();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function s() {
          if (obj.isFavoritesGuildId(guildId.getGuildId())) {
            router_utils.transitionTo(constants.ME);
            const tmpResult = router_utils;
          }
          obj = FavoritesUtils;
          FavoritesActionCreators.resetFavoritesGuild();
          const tmpResult2 = FavoritesActionCreators;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (hasAccess) {
        hasAccess = obj2.useFavoritesAccess().hasAccess;
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(_modDef3442.YkET6R);
        const intl2 = util.intl;
        const stringResult1 = intl2.string(_modDef3442.ZzcwNk);
        cResult[1] = stringResult;
        cResult[2] = stringResult1;
        let tmp6 = stringResult1;
        let tmp5 = stringResult;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      if (cResult[3] !== hasAccess) {
        const obj3 = { isAvailable: hasAccess, label: tmp5, subLabel: tmp6, perform: first };
        cResult[3] = hasAccess;
        cResult[4] = obj3;
        let tmp10 = obj3;
      } else {
        tmp10 = cResult[4];
      }
      return tmp10;
    }
  : function useFavoritesGuildResetAction() {
      const DeveloperMode = UserSettings.DeveloperMode;
      let hasAccess = DeveloperMode.useSetting();
      const callback = noop.useCallback(() => {
        if (obj.isFavoritesGuildId(guildId.getGuildId())) {
          router_utils.transitionTo(constants.ME);
          const tmpResult = router_utils;
        }
        obj = FavoritesUtils;
        FavoritesActionCreators.resetFavoritesGuild();
        const tmpResult2 = FavoritesActionCreators;
      }, []);
      if (hasAccess) {
        hasAccess = obj.useFavoritesAccess().hasAccess;
      }
      const obj2 = { isAvailable: hasAccess, label: null, subLabel: null, perform: null };
      const intl = util.intl;
      obj2.label = intl.string(_modDef3442.YkET6R);
      const intl2 = util.intl;
      obj2.subLabel = intl2.string(_modDef3442.ZzcwNk);
      obj2.perform = callback;
      return obj2;
    };
