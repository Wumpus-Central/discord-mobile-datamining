// === Module 8278: useCurrentUser ===

// Module 8278 (useCurrentUser)
import _modDef38 from "module_38" /* 38 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCurrentUser() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  _modDef38(null != stateFromStores, "user has to be signed in before accessing shop");
  return stateFromStores;
}) : (function useCurrentUser() {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  _modDef38(null != stateFromStores, "user has to be signed in before accessing shop");
  return stateFromStores;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useCurrentUser.tsx");

export const useCurrentUser = tmp2;
export const useCurrentUserIfAvailable = ReactCompilerGating.isReactCompilerEnabled() ? (function useCurrentUserIfAvailable() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useCurrentUserIfAvailable() {
  const items = [UserStore];
  return initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
});