// === Module 16696: SearchFetchPendingManager ===

// Module 16696 (SearchFetchPendingManager)
import useInitialValueDefault from "useInitialValue" /* 5598 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 12338 */;
import noop from "module_19" /* 19 */;

let closure_3 = function SearchFetchPendingManager() {
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
      obj2 = closure_0(closure_1[1]);
    }
  };
  obj.reset = function reset() {
    obj.pending = new Set();
  };
  return obj;
}.prototype;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchFetchPendingManager.tsx");

export const useSearchFetchPendingManager = function useSearchFetchPendingManager(searchContext) {
  importDefault = searchContext;
  const tmp = useInitialValueDefault(() => {
    if (typeof closure_3 === "function") {
      const obj = Object.create(closure_3.prototype);
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
          obj2 = closure_0(closure_1[1]);
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
  dependencyMap = tmp;
  const items = [searchContext, tmp];
  const effect = noop.useEffect(() => SearchPlatformUtilsDefault.subscribeTextInputValue(closure_0, (arg0, arg1) => {
    if (arg1 !== arg0) {
      navigation.reset();
    }
  }), items);
  return tmp;
};