// _runtime/01552_CHILD_STATE.js
import _slicedToArrayDefault from "metro/00032__slicedToArray.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import noop from "00019_noop.js";

const require = arg1;
let closure_2 = ["state"];
_slicedToArrayDefault;
const SymbolResult = Symbol("CHILD_STATE");
let c5 = SymbolResult;

export const CHILD_STATE = SymbolResult;
export const useRouteCache = function useRouteCache(routes) {
  closure_0 = React.useMemo(() => {
    const obj = { current: new Map() };
    return obj;
  }, []);
  const reduced = routes.reduce((acc, item, index) => {
    const current = ref.current;
    const value = current.get(item.key);
    const state = item.state;
    const tmp2 = closure_1_3(item, closure_1_2);
    let tmp3 = tmp2;
    if (value) {
      let obj = ref(reduced[3]);
      tmp3 = tmp2;
      if (obj.isRecordEqual(value, tmp2)) {
        tmp3 = value;
      }
    }
    if (tmp3[closure_1_5] !== state) {
      const _Object = Object;
      obj = { enumerable: false, configurable: true, value: null };
      obj[2] = state;
      Object.defineProperty(tmp3, tmp6, obj);
    }
    const result = acc.set(item.key, tmp3);
    return acc;
  }, new Map());
  const insertionEffect = React.useInsertionEffect(() => {
    closure_0.current = reduced;
  });
  return Array.from(reduced.values());
};