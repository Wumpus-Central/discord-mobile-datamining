// === Module 17410: SearchFetchPendingManager ===

// Module 17410 (SearchFetchPendingManager)
import useInitialValueDefault from "useInitialValue" /* 6169 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 12034 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let closure_4 = function SearchFetchPendingManager() {
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
      if (obj2.fetchNextMessages(searchContext, tab)) {
        obj.remove(tab);
      }
      obj2 = closure_1(dependencyMap[1]);
    }
  };
  obj.reset = function reset() {
    obj.pending = new Set();
  };
  return obj;
}.prototype;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchFetchPendingManager.tsx");

export const useSearchFetchPendingManager = ReactCompilerGating.isReactCompilerEnabled() ? (function useSearchFetchPendingManager(arg0) {
  _require = arg0;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      if (typeof closure_4 === "function") {
        const obj = Object.create(closure_4.prototype);
        const _Set = Set;
        const set = new Set();
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
            if (obj2.fetchNextMessages(searchContext, tab)) {
              obj.remove(tab);
            }
            obj2 = closure_1(dependencyMap[1]);
          }
        };
        obj.reset = function reset() {
          obj.pending = new Set();
        };
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp4 = useInitialValueDefault(first);
  importDefault = tmp4;
  if (cResult[1] === tmp4) {
    if (cResult[2] === arg0) {
      let tmp5 = cResult[3];
      let tmp6 = cResult[4];
    }
    const effect = noop.useEffect(tmp5, tmp6);
    return tmp4;
  }
  const fn2 = function h() {
    return SearchPlatformUtilsDefault.subscribeTextInputValue(closure_0, (arg0, arg1) => {
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
  let obj = require("c");
}) : (function useSearchFetchPendingManager(arg0) {
  closure_0 = arg0;
  const tmp = useInitialValueDefault(() => {
    if (typeof closure_4 === "function") {
      const obj = Object.create(closure_4.prototype);
      const _Set = Set;
      const set = new Set();
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
          if (obj2.fetchNextMessages(searchContext, tab)) {
            obj.remove(tab);
          }
          obj2 = closure_1(dependencyMap[1]);
        }
      };
      obj.reset = function reset() {
        obj.pending = new Set();
      };
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
  importDefault = tmp;
  const items = [arg0, tmp];
  const effect = noop.useEffect(() => SearchPlatformUtilsDefault.subscribeTextInputValue(closure_0, (arg0, arg1) => {
    if (arg1 !== arg0) {
      navigation.reset();
    }
  }), items);
  return tmp;
});