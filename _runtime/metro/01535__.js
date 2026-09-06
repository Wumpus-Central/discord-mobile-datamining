// _runtime/metro/01535__.js
import _mod1536 from "01536__.js";
import _slicedToArray from "00032__.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import noop from "00019__.js";

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
      let obj = _mod1536;
      tmp3 = tmp2;
      if (obj.isRecordEqual(value, tmp2)) {
        tmp3 = value;
      }
    }
    if (tmp3[SymbolResult] !== state) {
      const _Object = Object;
      obj = { enumerable: false, configurable: true, value: state };
      Object.defineProperty(tmp3, tmp6, obj);
    }
    const result = set.set(key.key, tmp3);
    return set;
  }, new Map());
  const insertionEffect = noop.useInsertionEffect(() => {
    closure_0.current = reduced;
  });
  return Array.from(reduced.values());
};
