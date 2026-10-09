// === Module 8221: useGameProfileObscured ===

// Module 8221 (useGameProfileObscured)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import utils from "utils" /* 6049 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const ReactCompilerGating = fn(558);
function isGameProfileObscured(game, nsfwAllowed) {
  let result = null != game;
  if (result) {
    result = false === nsfwAllowed;
  }
  if (result) {
    result = utils.isAgeRestrictedContentClassification(game.contentClassification);
  }
  return result;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileObscured.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useGameProfileObscured(contentClassification) {
  const cResult = c.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      currentUser = currentUser.getCurrentUser();
      let nsfwAllowed;
      if (currentUser != null) {
        nsfwAllowed = currentUser.nsfwAllowed;
      }
      return nsfwAllowed;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === contentClassification) {
    if (cResult[3] === stateFromStores) {
      let tmp8 = cResult[4];
    }
    return tmp8;
  }
  let result = null != contentClassification;
  if (result) {
    result = false === stateFromStores;
  }
  if (result) {
    result = utils.isAgeRestrictedContentClassification(contentClassification.contentClassification);
    const tmpResult2 = utils;
  }
  cResult[2] = contentClassification;
  cResult[3] = stateFromStores;
  cResult[4] = result;
  tmp8 = result;
  const tmpResult = initialize;
}) : (function useGameProfileObscured(contentClassification) {
  initialize;
  [][0] = UserStore;
  let result = null != contentClassification;
  if (result) {
    result = false === tmp4;
  }
  if (result) {
    result = utils.isAgeRestrictedContentClassification(contentClassification.contentClassification);
    const tmpResult = utils;
  }
  return result;
});
export { isGameProfileObscured };