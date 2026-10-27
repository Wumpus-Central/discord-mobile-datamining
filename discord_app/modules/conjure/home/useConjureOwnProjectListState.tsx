// === Module 14183: useConjureOwnProjectListState ===

// Module 14183 (useConjureOwnProjectListState)
import useConjureHomeOwnProjectsDefault from "useConjureHomeOwnProjects" /* 14172 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6774 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/home/useConjureOwnProjectListState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureOwnProjectListState(str, arg1) {
  _require = arg1;
  const cResult = require("c").c(15);
  const arr = useConjureHomeOwnProjectsDefault(arg1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg1) {
    const fn = function s() {
      if (null != closure_0) {
        let guildProjectsFetchState = ConjureProjectStore.getGuildProjectsFetchState(tmp);
      } else {
        guildProjectsFetchState = ConjureProjectStore.getOwnedProjectsFetchState();
      }
      return guildProjectsFetchState;
    };
    const items1 = [arg1];
    cResult[1] = arg1;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] !== str) {
    const trimmed = str.trim();
    const toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
    cResult[4] = str;
    cResult[5] = toLocaleLowerCaseResult;
    let tmp9 = toLocaleLowerCaseResult;
  } else {
    tmp9 = cResult[5];
  }
  importDefault = tmp9;
  if (cResult[6] === tmp9) {
    if (cResult[7] === arr) {
      let arr4 = cResult[8];
    }
    if (arr4.length > 0) {
      if (cResult[9] !== arr4) {
        const obj2 = { kind: "projects", projects: arr4 };
        cResult[9] = arr4;
        cResult[10] = obj2;
      }
    } else if (arr.length > 0) {
      const _Symbol4 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { kind: "no_match" };
        cResult[11] = obj3;
      }
    } else if ("error" === stateFromStores) {
      const _Symbol3 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { kind: "error" };
        cResult[12] = obj4;
      }
    } else if ("success" !== stateFromStores) {
      const _Symbol2 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { kind: "loading" };
        cResult[13] = obj5;
      }
    } else {
      const _Symbol = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { kind: "empty" };
        cResult[14] = obj6;
        let tmp12 = obj6;
      } else {
        tmp12 = cResult[14];
      }
      return tmp12;
    }
  }
  let found = arr;
  if ("" !== tmp9) {
    found = arr.filter((name) => {
      name = name.name;
      return name.toLocaleLowerCase().includes(closure_1);
    });
  }
  cResult[6] = tmp9;
  cResult[7] = arr;
  cResult[8] = found;
  arr4 = found;
  const tmpResult = require("initialize");
}) : (function useConjureOwnProjectListState(str, arg1) {
  _require = arg1;
  arr = arr(14172)(arg1);
  const items = [ConjureProjectStore];
  const items1 = [arg1];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    if (null != closure_0) {
      let guildProjectsFetchState = ConjureProjectStore.getGuildProjectsFetchState(tmp);
    } else {
      guildProjectsFetchState = ConjureProjectStore.getOwnedProjectsFetchState();
    }
    return guildProjectsFetchState;
  }, items1);
  const trimmed = str.trim();
  const toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
  dependencyMap = toLocaleLowerCaseResult;
  const items2 = [arr, toLocaleLowerCaseResult];
  const memo = noop.useMemo(() => {
    if ("" === toLocaleLowerCaseResult) {
      let found = arr;
    } else {
      found = arr.filter((name) => {
        name = name.name;
        return name.toLocaleLowerCase().includes(closure_1_2);
      });
    }
    return found;
  }, items2);
  if (memo.length > 0) {
    const obj2 = { kind: "projects", projects: memo };
    let obj3 = obj2;
  } else if (arr.length > 0) {
    obj3 = { kind: "no_match" };
  } else if ("error" === stateFromStores) {
    obj3 = { kind: "error" };
  } else {
    obj3 = "success" !== stateFromStores ? { kind: "loading" } : { kind: "empty" };
  }
  return obj3;
});