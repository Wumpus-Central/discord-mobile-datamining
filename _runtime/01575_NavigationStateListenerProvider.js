// _runtime/01575_NavigationStateListenerProvider.js
import _modDef1505 from "metro/01505__.js";
import _mod1561 from "metro/01561__.js";
import _slicedToArray from "metro/00032__.js";
import noop from "metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const redux = noop.createContext(undefined);

export const useNavigationState = function useNavigationState(select) {
  if (typeof select !== "function") {
    const _Error2 = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("A selector function must be provided (got " + typeof select + ").");
    throw error;
  } else {
    const store = noop.useContext(closure_6);
    if (null == store) {
      const _Error = Error;
      const error1 = new Error("Couldn't get the navigation state. Is your component inside a navigator?");
      throw error1;
    } else {
      const getState = store.getState;
      const subscribe = store.subscribe;
      closure_3 = _slicedToArray(
        noop.useReducer((arg0) => arg0 + 1, 0),
        2,
      )[1];
      const tmp14 = select(getState());
      const selected = tmp14;
      const obj2 = { select, selected: tmp14 };
      noop.useRef(obj2);
      const clientLayoutEffect = _mod1561.useClientLayoutEffect(() => {
        closure_5.current = { select, selected };
      });
      const items = [getState, subscribe];
      const effect = noop.useEffect(() => {
        let current = ref.current;
        ({ selected, select } = current);
        if (!Object.is(selected, select(getState()))) {
          closure_3();
        }
        return subscribe(function checkForUpdates() {
          const current = ref.current;
          ({ selected, select } = current);
          if (!Object.is(selected, select(getState()))) {
            closure_1_3();
          }
        });
      }, items);
      return tmp14;
    }
  }
};
export const NavigationStateListenerProvider = function NavigationStateListenerProvider(getState) {
  getState = getState.getState;
  ({ state, children } = getState);
  noop.useRef([]);
  const tmp = _modDef1505((arg0) => {
    closure_0 = arg0;
    let current = ref.current;
    current.push(arg0);
    return () => {
      const current = ref.current;
      ref.current = current.filter((item) => item !== closure_1_0);
    };
  });
  const subscribe = tmp;
  const items = [state];
  const clientLayoutEffect = _mod1561.useClientLayoutEffect(() => {
    const current = ref.current;
    const item = current.forEach((fn) => fn());
  }, items);
  const items1 = [getState, tmp];
  return (
    <redux.Provider
      value={noop.useMemo(() => {
        const store = { getState, subscribe };
        return store;
      }, items1)}
    >
      {children}
    </redux.Provider>
  );
};
