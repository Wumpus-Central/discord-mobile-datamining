// === Module 16882: SearchFetchPendingManager ===

// Module 16882 (SearchFetchPendingManager)
import useInitialValueDefault from "useInitialValue" /* 5984 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 11966 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, set;

function SearchFetchPendingManager() {
  const obj = Object.create(new.target.prototype);
  obj.pending = new Set();
  obj.add = function add(arg0) {
    const pending = obj.pending;
    pending.add(arg0);
  };
  obj.remove = function remove(arg0) {
    const pending = obj.pending;
    pending.delete(arg0);
  };
  obj.has = function has(arg0) {
    const pending = obj.pending;
    return pending.has(arg0);
  };
  obj.flush = function flush(searchContext, tab) {
    if (obj.has(tab)) {
      const obj2 = closure_1(dependencyMap[1]);
      if (obj2.fetchNextMessages(searchContext, tab)) {
        obj.remove(tab);
      }
    }
  };
  obj.reset = function reset() {
    obj.pending = new Set();
    new Set();
  };
  new Set();
  return obj;
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let closure_1;
  let first;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      if (typeof closure_4 === "function") {
        const obj = Object.create(closure_4.prototype);
        const _Set = Set;
        const self = this;
        const self2 = this;
        obj.pending = new Set();
        obj.add = function add(arg0) {
          const pending = obj.pending;
          pending.add(arg0);
        };
        obj.remove = function remove(arg0) {
          const pending = obj.pending;
          pending.delete(arg0);
        };
        obj.has = function has(arg0) {
          const pending = obj.pending;
          return pending.has(arg0);
        };
        obj.flush = function flush(searchContext, tab) {
          if (obj.has(tab)) {
            const obj2 = closure_1(dependencyMap[1]);
            if (obj2.fetchNextMessages(searchContext, tab)) {
              obj.remove(tab);
            }
          }
        };
        obj.reset = function reset() {
          obj.pending = new Set();
          new Set();
        };
        set = new Set();
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp4 = useInitialValueDefault(first);
  importDefault = tmp4;
  if (cResult[1] === tmp4) {
    let tmp5;
    let tmp6;
    if (cResult[2] === arg0) {
      tmp5 = cResult[3];
      tmp6 = cResult[4];
    }
    const effect = react.useEffect(tmp5, tmp6);
    return tmp4;
  }
  const fn2 = function h() {
    const obj = SearchPlatformUtilsDefault;
    return obj.subscribeTextInputValue(closure_0, (arg0, arg1) => {
      if (arg1 !== arg0) {
        navigation.reset();
      }
    });
  };
  const items = [arg0, tmp4];
  cResult[1] = tmp4;
  cResult[2] = arg0;
  cResult[3] = fn2;
  cResult[4] = items;
  tmp6 = items;
  tmp5 = fn2;
}) : ((arg0) => {
  let closure_1;
  let closure_0 = arg0;
  const tmp = useInitialValueDefault(function() {
    if (typeof closure_4 === "function") {
      const obj = Object.create(closure_4.prototype);
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
      obj.pending = set;
      obj.add = function add(arg0) {
        const pending = obj.pending;
        pending.add(arg0);
      };
      obj.remove = function remove(arg0) {
        const pending = obj.pending;
        pending.delete(arg0);
      };
      obj.has = function has(arg0) {
        const pending = obj.pending;
        return pending.has(arg0);
      };
      obj.flush = function flush(searchContext, tab) {
        if (obj.has(tab)) {
          const obj2 = closure_1(dependencyMap[1]);
          if (obj2.fetchNextMessages(searchContext, tab)) {
            obj.remove(tab);
          }
        }
      };
      obj.reset = function reset() {
        obj.pending = new Set();
        new Set();
      };
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
  importDefault = tmp;
  const items = [arg0, tmp];
  const effect = react.useEffect(() => {
    const obj = SearchPlatformUtilsDefault;
    return obj.subscribeTextInputValue(closure_0, (arg0, arg1) => {
      if (arg1 !== arg0) {
        navigation.reset();
      }
    });
  }, items);
  return tmp;
});
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchFetchPendingManager.tsx");

export const useSearchFetchPendingManager = tmp2;