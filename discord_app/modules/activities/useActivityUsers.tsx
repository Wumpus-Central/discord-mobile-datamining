// === Module 17751: useActivityUsers ===

// Module 17751 (useActivityUsers)
import UserStore from "UserStore" /* 1390 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2063 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useActivityUsers.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useActivityUsers(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [EmbeddedActivitiesStore, UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === arg1) {
      let tmp7 = cResult[3];
      let tmp8 = cResult[4];
    }
    return tmp(573).useStateFromStoresArray(first, tmp7, tmp8);
  }
  const fn = function a() {
    if (null == closure_1) {
      return [];
    } else {
      const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(tmp);
      const found = embeddedActivitiesForChannel.find((applicationId) => applicationId.applicationId === closure_1_0);
      if (null == found) {
        let items = [];
      } else {
        const _Array = Array;
        const mapped = Array.from(found.userIds).map((item) => user.getUser(item));
        items = mapped.filter((item) => null != item);
        const arr = Array.from(found.userIds);
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
  const obj = require("c");
  tmp = _require;
}) : (function useActivityUsers(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  let items = [EmbeddedActivitiesStore, UserStore];
  const items1 = [arg1, arg0];
  return require("useStateFromStores").useStateFromStoresArray(items, () => {
    if (null == closure_1) {
      return [];
    } else {
      const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(tmp);
      const found = embeddedActivitiesForChannel.find((applicationId) => applicationId.applicationId === closure_1_0);
      if (null == found) {
        let items = [];
      } else {
        const _Array = Array;
        const mapped = Array.from(found.userIds).map((item) => user.getUser(item));
        items = mapped.filter((item) => null != item);
        const arr = Array.from(found.userIds);
      }
      return items;
    }
  }, items1);
});