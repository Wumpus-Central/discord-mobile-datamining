// === Module 16076: useFavoritesGuildHeaderAction ===

// Module 16076 (useFavoritesGuildHeaderAction)
import c from "c" /* 576 */;
import router_utils from "router_utils" /* 1112 */;
import util from "util" /* 1126 */;
import _modDef3367 from "module_3367" /* 3367 */;
import FavoritesHooks from "FavoritesHooks" /* 10036 */;
import noop from "module_19" /* 19 */;

require = fn;
const Routes = fn(1085).Routes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHeaderAction.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp2 = dependencyMap;
  const cResult = c.c(6);
  const hasAccess = FavoritesHooks.useFavoritesAccess().hasAccess;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      router_utils.transitionTo(constants.ME);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== hasAccess) {
    const intl = util.intl;
    if (hasAccess) {
      tmp2 = _modDef3367;
      let ojM1xJ = tmp2.G9fGlP;
    } else {
      ojM1xJ = util.t.ojM1xJ;
    }
    const stringResult = intl.string(ojM1xJ);
    cResult[1] = hasAccess;
    cResult[2] = stringResult;
  } else {
    if (cResult[3] === tmp5) {
      if (cResult[4] === tmp6) {
        let tmp10 = cResult[5];
      }
      return tmp10;
    }
    const obj3 = { isPreview: tmp5, label: cResult[2], exitPreview: first };
    cResult[3] = tmp5;
    cResult[4] = cResult[2];
    cResult[5] = obj3;
    tmp10 = obj3;
  }
}) : (() => {
  const hasAccess = FavoritesHooks.useFavoritesAccess().hasAccess;
  const obj2 = { isPreview: !hasAccess, label: null, exitPreview: null };
  const callback = noop.useCallback(() => {
    router_utils.transitionTo(constants.ME);
  }, []);
  const intl = util.intl;
  if (hasAccess) {
    let ojM1xJ = _modDef3367.G9fGlP;
  } else {
    ojM1xJ = util.t.ojM1xJ;
  }
  obj2.label = intl.string(ojM1xJ);
  obj2.exitPreview = callback;
  return obj2;
});