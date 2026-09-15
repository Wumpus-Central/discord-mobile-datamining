// === Module 1536: ? ===

// Module 1536
import _mod1537 from "module_1537" /* 1537 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = arg1;
let closure_2 = ["state"];
const SymbolResult = Symbol("CHILD_STATE");
const hasOwnProperty = SymbolResult;

export const CHILD_STATE = SymbolResult;
export const useRouteCache = function useRouteCache(routes) {
  noop.useMemo(() => {
    const obj = { current: new Map() };
    return obj;
  }, []);
  const reduced = routes.reduce((set, key) => {
    const current = ref.current;
    value = current.get(key.key);
    const state = key.state;
    const tmp2 = _objectWithoutProperties(key, closure_2);
    let tmp3 = tmp2;
    if (value) {
      tmp3 = tmp2;
      if (obj.isRecordEqual(value, tmp2)) {
        tmp3 = value;
      }
      obj = _mod1537;
    }
    if (tmp3[SymbolResult] !== state) {
      const _Object = Object;
      const obj2 = { enumerable: false, configurable: true, value: state };
      Object.defineProperty(tmp3, tmp6, obj2);
    }
    const result = set.set(key.key, tmp3);
    return set;
  }, new Map());
  const insertionEffect = noop.useInsertionEffect(() => {
    closure_0.current = reduced;
  });
  return Array.from(reduced.values());
};