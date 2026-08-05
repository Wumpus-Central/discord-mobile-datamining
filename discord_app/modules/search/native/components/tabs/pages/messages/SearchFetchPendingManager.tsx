import { useInitialValue } from "../../../../../../../hooks/useInitialValue.tsx";
// discord_app/modules/search/native/components/tabs/pages/messages/SearchFetchPendingManager.tsx
import noop from "noop";

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
      obj2 = obj(outer1_1[1]);
    }
  };
  obj.reset = function reset() {
    obj.pending = new Set();
  };
  return obj;
}.prototype;
const result = require("useInitialValue").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchFetchPendingManager.tsx");

export const useSearchFetchPendingManager = function useSearchFetchPendingManager(searchContext) {
  const importDefault = searchContext;
  const tmp = useInitialValue(() => {
    if (typeof closure_3 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(closure_3.prototype);
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
        obj2 = obj(outer1_1[1]);
      }
    };
    obj.reset = function reset() {
      obj.pending = new Set();
    };
    return obj;
  });
  const dependencyMap = tmp;
  const items = [searchContext, tmp];
  const effect = React.useEffect(() => searchContext(tmp[1]).subscribeTextInputValue(searchContext, (arg0, arg1) => {
    if (arg1 !== arg0) {
      navigation.reset();
    }
  }), items);
  return tmp;
};