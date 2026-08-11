// _runtime/01551_CHILD_STATE.js
import "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import noop from "noop";

const require = arg1;
let closure_2 = ["state"];
const SymbolResult = Symbol("CHILD_STATE");
let c5 = SymbolResult;

export const CHILD_STATE = SymbolResult;
export const useRouteCache = function useRouteCache(routes) {
  let closure_0 = React.useMemo(() => {
    const obj = { current: null };
    obj[0] = new Map();
    return obj;
  }, []);
  const reduced = routes.reduce((set, key) => {
    const current = ref.current;
    const value = current.get(key.key);
    const state = key.state;
    const tmp2 = outer1_3(key, outer1_2);
    let tmp3 = tmp2;
    if (value) {
      let obj = ref(reduced[3]);
      tmp3 = tmp2;
      if (obj.isRecordEqual(value, tmp2)) {
        tmp3 = value;
      }
    }
    if (tmp3[outer1_5] !== state) {
      const _Object = Object;
      obj = { enumerable: false, configurable: true, value: null };
      obj[2] = state;
      Object.defineProperty(tmp3, tmp6, obj);
    }
    const result = set.set(key.key, tmp3);
    return set;
  }, new Map());
  const insertionEffect = React.useInsertionEffect(() => {
    closure_0.current = reduced;
  });
  return Array.from(reduced.values());
};