// _runtime/01551_CHILD_STATE.js
import _slicedToArrayDefault from "metro/00032__slicedToArray.js";
import closure_3 from "metro/00109__objectWithoutProperties.js";
import closure_4 from "00019_noop.js";

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
  const reduced = routes.reduce((set, key) => {
    const current = ref.current;
    const value = current.get(key.key);
    const state = key.state;
    const tmp2 = closure_1_3(key, closure_1_2);
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
    const result = set.set(key.key, tmp3);
    return set;
  }, new Map());
  const insertionEffect = React.useInsertionEffect(() => {
    closure_0.current = reduced;
  });
  return Array.from(reduced.values());
};
