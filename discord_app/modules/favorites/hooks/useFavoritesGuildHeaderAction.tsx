// discord_app/modules/favorites/hooks/useFavoritesGuildHeaderAction.tsx
import react2 from "../../../../_runtime/00576_react.js";
import Constants from "../../../Constants.tsx";
import router_utils from "../../routing/router_utils.tsx";
import intl2 from "../../../intl/index.native.tsx";
import _modDef3367 from "../intl/FavoritesGuild.messages.js";
import FavoritesHooks from "../FavoritesHooks.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const Routes = Constants.Routes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp6;
      let obj = react2;
      const cResult = obj.c(6);
      const obj2 = FavoritesHooks;
      const hasAccess = obj2.useFavoritesAccess().hasAccess;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function s() {
          const obj = router_utils;
          obj.transitionTo(constants.ME);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== hasAccess) {
        let ojM1xJ;
        const intl = intl2.intl;
        const string = intl.string;
        if (hasAccess) {
          ojM1xJ = _modDef3367.G9fGlP;
        } else {
          ojM1xJ = intl2.t.ojM1xJ;
        }
        const stringResult = string(ojM1xJ);
        cResult[1] = hasAccess;
        cResult[2] = stringResult;
        tmp6 = stringResult;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === !hasAccess) {
        let tmp9;
        if (cResult[4] === tmp6) {
          tmp9 = cResult[5];
        }
        return tmp9;
      }
      const obj3 = { isPreview: !hasAccess, label: tmp6, exitPreview: first };
      cResult[3] = !hasAccess;
      cResult[4] = tmp6;
      cResult[5] = obj3;
      tmp9 = obj3;
    }
  : () => {
      let callback;
      let ojM1xJ;
      let string;
      let obj = FavoritesHooks;
      const hasAccess = obj.useFavoritesAccess().hasAccess;
      const obj2 = { isPreview: !hasAccess, label: string(ojM1xJ), exitPreview: callback };
      callback = react.useCallback(() => {
        const obj = router_utils;
        obj.transitionTo(constants.ME);
      }, []);
      const intl = intl2.intl;
      string = intl.string;
      if (hasAccess) {
        ojM1xJ = _modDef3367.G9fGlP;
      } else {
        ojM1xJ = intl2.t.ojM1xJ;
      }
      return obj2;
    };
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHeaderAction.tsx");

export default tmp2;
