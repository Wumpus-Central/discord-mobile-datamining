// === Module 1542: ? ===

// Module 1542
import _mod1543 from "module_1543" /* 1543 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;

let map;

let closure_2 = ["state"];
const SymbolResult = Symbol("CHILD_STATE");
const hasOwnProperty = SymbolResult;

export const CHILD_STATE = SymbolResult;
export const useRouteCache = function useRouteCache(routes) {
  const ref = react.useMemo(() => {
    const obj = { current: new Map() };
    new Map();
    return obj;
  }, []);
  const reduce = routes.reduce;
  map = new Map();
  const reduced = reduce((set, key) => {
    const current = ref.current;
    const value = current.get(key.key);
    const state = key.state;
    const tmp2 = _objectWithoutProperties(key, closure_2);
    let tmp3 = tmp2;
    if (value) {
      tmp3 = tmp2;
      const obj = _mod1543;
      if (obj.isRecordEqual(value, tmp2)) {
        tmp3 = value;
      }
    }
    if (tmp3[hasOwnProperty] !== state) {
      const _Object = Object;
      const obj2 = { enumerable: false, configurable: true, value: state };
      Object.defineProperty(tmp3, tmp6, obj2);
    }
    const result = set.set(key.key, tmp3);
    return set;
  }, map);
  const insertionEffect = react.useInsertionEffect(() => {
    ref.current = reduced;
  });
  return Array.from(reduced.values());
};