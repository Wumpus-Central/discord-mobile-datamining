// === Module 1590: useNavigationState ===

// Module 1590 (useNavigationState)
import useEffectDefault from "useEffect" /* 1520 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c4 = importAllResult;
const context = importAllResult.createContext(undefined);

export const useNavigationState = function useNavigationState(fn) {
  const _require = fn;
  if (typeof fn !== "function") {
    const _Error2 = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("A selector function must be provided (got " + typeof fn + ").");
    throw error;
  } else {
    let obj = importAllResult;
    const store = importAllResult.useContext(closure_6);
    if (null == store) {
      const _Error = Error;
      const error1 = new Error("Couldn't get the navigation state. Is your component inside a navigator?");
      throw error1;
    } else {
      const getState = store.getState;
      const subscribe = store.subscribe;
      callback = callback(obj.useReducer((arg0) => arg0 + 1, 0), 2)[1];
      const tmp14 = fn(getState());
      obj = { select: null, selected: null };
      obj[0] = fn;
      obj[1] = tmp14;
      closure_5 = obj.useRef(obj);
      const clientLayoutEffect = _require(subscribe[3]).useClientLayoutEffect(() => {
        closure_5.current = { select: closure_0, selected: closure_4 };
      });
      const items = [getState, subscribe];
      const effect = obj.useEffect(() => {
        let current = ref.current;
        ({ selected, select } = current);
        if (!Object.is(selected, select(getState()))) {
          callback();
        }
        return subscribe(function checkForUpdates() {
          const current = ref.current;
          ({ selected, select } = current);
          if (!Object.is(selected, select(callback()))) {
            callback2();
          }
        });
      }, items);
      return tmp14;
    }
  }
};
export const NavigationStateListenerProvider = function NavigationStateListenerProvider(getState) {
  getState = getState.getState;
  importDefault = undefined;
  dependencyMap = undefined;
  ({ state, children } = getState);
  importDefault = importAllResult.useRef([]);
  const tmp = useEffectDefault((arg0) => {
    closure_0 = arg0;
    let current = ref.current;
    current.push(arg0);
    return () => {
      const current = closure_1_1.current;
      closure_1_1.current = current.filter((arg0) => arg0 !== closure_0);
    };
  });
  dependencyMap = tmp;
  let obj = getState(1576);
  const items = [state];
  const clientLayoutEffect = obj.useClientLayoutEffect(() => {
    const current = ref.current;
    const item = current.forEach((arg0) => arg0());
  }, items);
  const items1 = [getState, tmp];
  obj = { value: importAllResult.useMemo(() => ({ getState, subscribe: closure_2 }), items1), children };
  return <redux.Provider value={importAllResult.useMemo(() => ({ getState, subscribe: closure_2 }), items1)}>{children}</redux.Provider>;
};