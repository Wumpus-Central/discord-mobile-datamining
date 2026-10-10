// === Module 7740: useSelectedTeen ===

// Module 7740 (useSelectedTeen)
import useStateFromStores from "useStateFromStores" /* 573 */;
import c from "c" /* 576 */;
import UserStore from "UserStore" /* 1390 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7258 */;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSelectedTeen() {
  const cResult = stateFromStores(576).c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterStore];
    const fn = function s() {
      return selectedTeenId.getSelectedTeenId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = stateFromStores(576);
  stateFromStores = stateFromStores(573).useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    cResult[2] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== stateFromStores) {
    const fn2 = function u() {
      let user;
      if (null !== stateFromStores) {
        user = UserStore.getUser(tmp);
      }
      return user;
    };
    cResult[3] = stateFromStores;
    cResult[4] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
  }
  const tmpResult = stateFromStores(573);
  return stateFromStores(573).useStateFromStores(tmp8, tmp10);
}) : (function useSelectedTeen() {
  const items = [FamilyCenterStore];
  _require = require("useStateFromStores").useStateFromStores(items, () => selectedTeenId.getSelectedTeenId());
  const obj = require("useStateFromStores");
  const items1 = [UserStore];
  return require("useStateFromStores").useStateFromStores(items1, () => {
    let user;
    if (null !== closure_0) {
      user = UserStore.getUser(tmp);
    }
    return user;
  });
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useSelectedTeen.tsx");

export const useSelectedTeen = tmp2;
export const useSelectedTeenId = ReactCompilerGating.isReactCompilerEnabled() ? (function useSelectedTeenId() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterStore];
    const fn = function o() {
      return selectedTeenId.getSelectedTeenId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return useStateFromStores.useStateFromStores(tmp4, tmp5);
}) : (function useSelectedTeenId() {
  const items = [FamilyCenterStore];
  return useStateFromStores.useStateFromStores(items, () => selectedTeenId.getSelectedTeenId());
});