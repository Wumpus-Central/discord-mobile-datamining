// === Module 12832: useShouldShowMutualInfo ===

// Module 12832 (useShouldShowMutualInfo)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import useIsUserProfileObfuscatedDefault from "useIsUserProfileObfuscated" /* 12833 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useShouldShowMutualInfo.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
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
  id = undefined;
  const tmpResult = initialize;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp8 = useIsUserProfileObfuscatedDefault(id);
  return id !== id.id && !useIsUserProfileObfuscatedDefault(id);
}) : ((id) => {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp2 = useIsUserProfileObfuscatedDefault(id);
  return id !== id.id && !useIsUserProfileObfuscatedDefault(id);
});