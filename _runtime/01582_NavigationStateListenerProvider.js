// === Module 1582: NavigationStateListenerProvider ===

// Module 1582 (NavigationStateListenerProvider)
import Fragment from "Fragment" /* 21 */;
import useLatestCallbackDefault from "useLatestCallback" /* 1512 */;
import react2 from "react" /* 1568 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;
const redux = react.createContext(undefined);

export const useNavigationState = function useNavigationState(select) {
  let closure_0 = select;
  if (typeof select !== "function") {
    const _Error2 = Error;
    const _HermesInternal = HermesInternal;
    const self3 = this;
    const self4 = this;
    const error = new Error("A selector function must be provided (got " + typeof select + ").");
    throw error;
  } else {
    const store = react.useContext(redux);
    if (null == store) {
      let tmp = globalThis;
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error1 = new Error("Couldn't get the navigation state. Is your component inside a navigator?");
      throw error1;
    } else {
      const getState = store.getState;
      const subscribe = store.subscribe;
      let closure_3 = _slicedToArray(react.useReducer((arg0) => arg0 + 1, 0), 2)[1];
      const tmp10 = select(getState());
      let closure_4 = tmp10;
      const obj2 = { select, selected: tmp10 };
      let closure_5 = react.useRef(obj2);
      const obj3 = react2;
      const clientLayoutEffect = obj3.useClientLayoutEffect(() => {
        const obj = { select, selected };
        ref.current = obj;
      });
      const items = [getState, subscribe];
      const effect = react.useEffect(() => {
        let current = ref.current;
        ({ selected, select } = current);
        const tmp = subscribe(function checkForUpdates() {
          const current = ref.current;
          ({ selected, select } = current);
          if (!Object.is(selected, select(getState()))) {
            closure_1_3();
          }
        });
        if (!Object.is(selected, select(getState()))) {
          closure_3();
        }
        return tmp;
      }, items);
      return tmp10;
    }
  }
};
export const NavigationStateListenerProvider = function NavigationStateListenerProvider(getState) {
  let children;
  let state;
  getState = getState.getState;
  ({ state, children } = getState);
  let closure_1 = react.useRef([]);
  const tmp = useLatestCallbackDefault((arg0) => {
    let closure_0 = arg0;
    let current = ref.current;
    current.push(arg0);
    return () => {
      const current = ref.current;
      ref.current = current.filter((item) => item !== closure_1_0);
    };
  });
  let closure_2 = tmp;
  const items = [state];
  const obj = react2;
  const clientLayoutEffect = obj.useClientLayoutEffect(() => {
    const current = ref.current;
    const item = current.forEach((fn) => fn());
  }, items);
  const items1 = [getState, tmp];
  return <redux.Provider value={react.useMemo(() => {
    const store = { getState, subscribe };
    return store;
  }, items1)}>{children}</redux.Provider>;
};