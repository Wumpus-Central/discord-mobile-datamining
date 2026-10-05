// === Module 8297: useSelectedTeen ===

// Module 8297 (useSelectedTeen)
import useStateFromStores from "useStateFromStores" /* 573 */;
import react from "react" /* 576 */;
import UserStore from "UserStore" /* 1377 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7048 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let selectedTeenId;
  let stateFromStores;
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp8;
  const tmp = stateFromStores;
  const obj = stateFromStores(576);
  const cResult = obj.c(5);
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
  const tmpResult = tmp(573);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    cResult[2] = items1;
    tmp8 = items1;
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
    tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
  }
  const tmpResult2 = tmp(573);
  return tmpResult2.useStateFromStores(tmp8, tmp10);
}) : (() => {
  let closure_0;
  let selectedTeenId;
  const items = [FamilyCenterStore];
  const obj = require("useStateFromStores");
  _require = obj.useStateFromStores(items, () => selectedTeenId.getSelectedTeenId());
  const items1 = [UserStore];
  const obj2 = require("useStateFromStores");
  return obj2.useStateFromStores(items1, () => {
    let user;
    if (null !== closure_0) {
      user = UserStore.getUser(tmp);
    }
    return user;
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let selectedTeenId;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterStore];
    const fn = function n() {
      return selectedTeenId.getSelectedTeenId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = useStateFromStores;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  let selectedTeenId;
  const items = [FamilyCenterStore];
  const obj = useStateFromStores;
  return obj.useStateFromStores(items, () => selectedTeenId.getSelectedTeenId());
});
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useSelectedTeen.tsx");

export const useSelectedTeen = tmp2;
export const useSelectedTeenId = tmp3;