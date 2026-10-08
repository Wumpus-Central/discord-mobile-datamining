// discord_app/modules/favorites/hooks/useFavoritesGuildHideAction.tsx
import router_utils from "../../routing/router_utils.tsx";
import FavoritesUtils from "../FavoritesUtils.tsx";
import _modDef3439 from "../intl/FavoritesGuild.messages.js";
import FavoritesActionCreators from "../FavoritesActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";

require = fn;
const Routes = fn(1085).Routes;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHideAction.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useFavoritesGuildHideAction() {
      const cResult = hasAccess(576).c(11);
      let obj = hasAccess(576);
      hasAccess = hasAccess(10294).useFavoritesAccess().hasAccess;
      if (cResult[0] !== hasAccess) {
        const fn = function s() {
          if (hasAccess) {
            const result = FavoritesActionCreators.setFavoritesGuildVisibility(false, "server_context_menu");
          }
          if (obj2.isFavoritesGuildId(SelectedGuildStore.getGuildId())) {
            router_utils.transitionTo(Routes.ME);
          }
          obj2 = FavoritesUtils;
        };
        cResult[0] = hasAccess;
        cResult[1] = fn;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== hasAccess) {
        const intl = tmp(1126).intl;
        if (hasAccess) {
          let ojM1xJ = _modDef3439["8FO0y9"];
        } else {
          ojM1xJ = tmp(1126).t.ojM1xJ;
        }
        const stringResult = intl.string(ojM1xJ);
        cResult[2] = hasAccess;
        cResult[3] = stringResult;
      } else {
        if (cResult[4] !== hasAccess) {
          let stringResult1;
          if (hasAccess) {
            const intl2 = tmp(1126).intl;
            stringResult1 = intl2.string(_modDef3439.FaHxWl);
          }
          cResult[4] = hasAccess;
          cResult[5] = stringResult1;
          let tmp10 = stringResult1;
        } else {
          tmp10 = cResult[5];
        }
        if (cResult[6] === tmp4) {
          if (cResult[7] === tmp5) {
            if (cResult[8] === tmp6) {
              if (cResult[9] === tmp10) {
                let tmp13 = cResult[10];
              }
              return tmp13;
            }
          }
        }
        let obj3 = { isPreview: tmp5, label: cResult[3], subLabel: tmp10, perform: tmp4 };
        cResult[6] = tmp4;
        cResult[7] = tmp5;
        cResult[8] = cResult[3];
        cResult[9] = tmp10;
        cResult[10] = obj3;
        tmp13 = obj3;
      }
      let obj2 = hasAccess(10294);
    }
  : function useFavoritesGuildHideAction() {
      hasAccess = hasAccess(10294).useFavoritesAccess().hasAccess;
      const items = [hasAccess];
      let obj2 = { isPreview: !hasAccess, label: null, subLabel: null, perform: null };
      const callback = noop.useCallback(() => {
        if (hasAccess) {
          const result = FavoritesActionCreators.setFavoritesGuildVisibility(false, "server_context_menu");
        }
        if (obj2.isFavoritesGuildId(SelectedGuildStore.getGuildId())) {
          router_utils.transitionTo(Routes.ME);
        }
        obj2 = FavoritesUtils;
      }, items);
      const intl = hasAccess(1126).intl;
      if (hasAccess) {
        let ojM1xJ = _modDef3439["8FO0y9"];
      } else {
        ojM1xJ = tmp(1126).t.ojM1xJ;
      }
      obj2.label = intl.string(ojM1xJ);
      let stringResult;
      if (hasAccess) {
        const intl2 = tmp(1126).intl;
        stringResult = intl2.string(_modDef3439.FaHxWl);
      }
      obj2.subLabel = stringResult;
      obj2.perform = callback;
      return obj2;
    };
