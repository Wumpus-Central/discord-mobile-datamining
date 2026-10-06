// === Module 9406: usePlayingGameActivities ===

// Module 9406 (usePlayingGameActivities)
import isPlayingGameActivityDefault from "isPlayingGameActivity" /* 9407 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import PresenceStore from "PresenceStore" /* 4936 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5445 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let closure_7 = [];
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  let closure_0;
  let closure_1;
  let closure_2;
  let first;
  _require = arg0;
  importDefault = arg1;
  let tmp2 = dependencyMap;
  const obj = require("react");
  const cResult = obj.c(7);
  const tmp4 = undefined === arg2 || arg2;
  dependencyMap = tmp4;
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelfPresenceStore, PresenceStore, AuthenticationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === tmp4) {
    if (cResult[2] === arg1) {
      let tmp9;
      let tmp10;
      if (cResult[3] === arg0) {
        tmp9 = cResult[4];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp9);
      if (cResult[5] !== stateFromStores) {
        const found = stateFromStores.filter(isPlayingGameActivityDefault);
        cResult[5] = stateFromStores;
        cResult[6] = found;
        tmp10 = found;
      } else {
        tmp10 = cResult[6];
      }
      return tmp10;
    }
  }
  const fn = function f() {
    let tmp2;
    if (closure_2) {
      let activities;
      if (AuthenticationStore.getId() === closure_0) {
        activities = SelfPresenceStore.getActivities();
      } else {
        activities = PresenceStore.getActivities(tmp4, closure_1);
      }
      tmp2 = activities;
    } else {
      tmp2 = closure_7;
    }
    return tmp2;
  };
  cResult[1] = tmp4;
  cResult[2] = arg1;
  cResult[3] = arg0;
  cResult[4] = fn;
  tmp9 = fn;
}) : ((arg0, arg1) => {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  const items = [SelfPresenceStore, PresenceStore, AuthenticationStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2;
    if (flag) {
      let activities;
      if (AuthenticationStore.getId() === closure_0) {
        activities = SelfPresenceStore.getActivities();
      } else {
        activities = PresenceStore.getActivities(tmp4, closure_1);
      }
      tmp2 = activities;
    } else {
      tmp2 = closure_7;
    }
    return tmp2;
  });
  const items1 = [stateFromStores];
  return stateFromStores.useMemo(() => stateFromStores.filter(isPlayingGameActivityDefault), items1);
});
const result = size.fileFinishedImporting("modules/activities/hooks/usePlayingGameActivities.tsx");

export default tmp2;