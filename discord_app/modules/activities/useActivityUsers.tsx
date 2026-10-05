// === Module 17289: useActivityUsers ===

// Module 17289 (useActivityUsers)
import UserStore from "UserStore" /* 1377 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let first;
  _require = arg0;
  dependencyMap = arg1;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [EmbeddedActivitiesStore, UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp7;
    let tmp8;
    if (cResult[2] === arg1) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    const tmpResult = tmp(573);
    return tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
  }
  const fn = function s() {
    let user;
    if (null == closure_1) {
      return [];
    } else {
      let items;
      const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(tmp);
      const found = embeddedActivitiesForChannel.find((applicationId) => applicationId.applicationId === closure_1_0);
      if (null == found) {
        items = [];
      } else {
        const _Array = Array;
        const arr = Array.from(found.userIds);
        const mapped = arr.map((item) => user.getUser(item));
        items = mapped.filter((item) => null != item);
      }
      return items;
    }
  };
  const items1 = [arg1, arg0];
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
}) : ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  let items = [EmbeddedActivitiesStore, UserStore];
  const items1 = [arg1, arg0];
  const obj = require("useStateFromStores");
  return obj.useStateFromStoresArray(items, () => {
    let user;
    if (null == closure_1) {
      return [];
    } else {
      let items;
      const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(tmp);
      const found = embeddedActivitiesForChannel.find((applicationId) => applicationId.applicationId === closure_1_0);
      if (null == found) {
        items = [];
      } else {
        const _Array = Array;
        const arr = Array.from(found.userIds);
        const mapped = arr.map((item) => user.getUser(item));
        items = mapped.filter((item) => null != item);
      }
      return items;
    }
  }, items1);
});
const result = size.fileFinishedImporting("modules/activities/useActivityUsers.tsx");

export default tmp2;