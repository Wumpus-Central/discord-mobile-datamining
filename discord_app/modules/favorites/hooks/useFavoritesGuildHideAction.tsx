// === Module 16064: useFavoritesGuildHideAction ===

// Module 16064 (useFavoritesGuildHideAction)
import Constants from "Constants" /* 1085 */;
import router_utils from "router_utils" /* 1112 */;
import FavoritesUtils from "FavoritesUtils" /* 2077 */;
import _modDef3367 from "module_3367" /* 3367 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10035 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let hasAccess;
  let tmp4;
  let tmp6;
  let tmp9;
  let obj = hasAccess(576);
  const cResult = obj.c(11);
  let obj2 = hasAccess(10036);
  hasAccess = obj2.useFavoritesAccess().hasAccess;
  if (cResult[0] !== hasAccess) {
    const fn = function s() {
      if (hasAccess) {
        const obj = FavoritesActionCreators;
        const result = obj.setFavoritesGuildVisibility(false, "server_context_menu");
      }
      const obj2 = FavoritesUtils;
      if (obj2.isFavoritesGuildId(SelectedGuildStore.getGuildId())) {
        const obj3 = router_utils;
        obj3.transitionTo(Routes.ME);
      }
    };
    cResult[0] = hasAccess;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== hasAccess) {
    let ojM1xJ;
    const intl = tmp(1126).intl;
    const string = intl.string;
    if (hasAccess) {
      ojM1xJ = _modDef3367["8FO0y9"];
    } else {
      ojM1xJ = tmp(1126).t.ojM1xJ;
    }
    const stringResult = string(ojM1xJ);
    cResult[2] = hasAccess;
    cResult[3] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] !== hasAccess) {
    let stringResult1;
    if (hasAccess) {
      const intl2 = tmp(1126).intl;
      stringResult1 = intl2.string(_modDef3367.FaHxWl);
    }
    cResult[4] = hasAccess;
    cResult[5] = stringResult1;
    tmp9 = stringResult1;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] === tmp4) {
    if (cResult[7] === !hasAccess) {
      if (cResult[8] === tmp6) {
        let tmp12;
        if (cResult[9] === tmp9) {
          tmp12 = cResult[10];
        }
        return tmp12;
      }
    }
  }
  let obj3 = { isPreview: tmp5, label: tmp6, subLabel: tmp9, perform: tmp4 };
  cResult[6] = tmp4;
  cResult[7] = !hasAccess;
  cResult[8] = tmp6;
  cResult[9] = tmp9;
  cResult[10] = obj3;
  tmp12 = obj3;
}) : (() => {
  let callback;
  let hasAccess;
  let ojM1xJ;
  let string;
  let stringResult;
  let obj = hasAccess(10036);
  hasAccess = obj.useFavoritesAccess().hasAccess;
  const items = [hasAccess];
  let obj2 = { isPreview: !hasAccess, label: string(ojM1xJ), subLabel: stringResult, perform: callback };
  callback = react.useCallback(() => {
    if (hasAccess) {
      const obj = FavoritesActionCreators;
      const result = obj.setFavoritesGuildVisibility(false, "server_context_menu");
    }
    const obj2 = FavoritesUtils;
    if (obj2.isFavoritesGuildId(SelectedGuildStore.getGuildId())) {
      const obj3 = router_utils;
      obj3.transitionTo(Routes.ME);
    }
  }, items);
  const intl = hasAccess(1126).intl;
  string = intl.string;
  if (hasAccess) {
    ojM1xJ = _modDef3367["8FO0y9"];
  } else {
    ojM1xJ = tmp(1126).t.ojM1xJ;
  }
  stringResult = undefined;
  if (hasAccess) {
    const intl2 = tmp(1126).intl;
    stringResult = intl2.string(_modDef3367.FaHxWl);
  }
  return obj2;
});
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHideAction.tsx");

export default tmp2;