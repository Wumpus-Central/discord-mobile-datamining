// === Module 8294: useUserIsTeen ===

// Module 8294 (useUserIsTeen)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/hooks/useUserIsTeen.tsx");

export const useUserIsTeen = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
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
  return false === initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [UserStore];
  return false === initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
});