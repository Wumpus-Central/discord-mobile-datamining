// === Module 1577: ? ===

// Module 1577
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;

let navigation;

let closure_2 = ["emit"];

export const useNavigationCache = function useNavigationCache(getState) {
  getState = getState.getState;
  navigation = getState.navigation;
  const setOptions = getState.setOptions;
  const router = getState.router;
  const emitter = getState.emitter;
  let state = getState.state;
  const stackRef = emitter.useContext(getState(navigation[2]).NavigationBuilderContext).stackRef;
  let items = [navigation, router.actionCreators];
  const base = emitter.useMemo(() => {
    let dispatch;
    const tmp = router(dispatch, setOptions);
    let closure_0 = tmp;
    const obj = {};
    const merged = Object.assign(router.actionCreators);
    const merged1 = Object.assign(getState(navigation[3]).CommonActions);
    dispatch = function dispatch() {
      const error = new Error("Actions cannot be dispatched from a placeholder screen.");
      throw error;
    };
    const keys = Object.keys(obj);
    const reduced = keys.reduce((acc, item) => {
      acc[item] = dispatch;
      return acc;
    }, {});
    const obj2 = {
      addListener() {
        return () => {

        };
      },
      removeListener() {

      },
      dispatch,
      getParent(arg0) {
        if (undefined !== arg0) {
          let parent;
          if (arg0 === closure_0.getId()) {
            parent = base;
          }
          return parent;
        }
        parent = closure_0.getParent(arg0);
      },
      setOptions() {
        const error = new Error("Options cannot be set from a placeholder screen.");
        throw error;
      },
      isFocused() {
        return false;
      }
    };
    const merged2 = Object.assign(tmp);
    const merged3 = Object.assign(reduced);
    return obj2;
  }, items);
  const items1 = [base, getState, navigation, setOptions, emitter];
  const ref = emitter.useMemo(() => ({ current: {} }), items1);
  const routes = state.routes;
  const navigations = routes.reduce((acc, key) => {
    if (ref.current[key.key]) {
      acc[key.key] = ref.current[key.key];
    } else {
      function dispatch(arg0) {

      }
      function withStack(fn) {
        fn();
      }
      let obj = {};
      let tmp2 = withStack;
      let merged = Object.assign(withStack.actionCreators);
      let merged1 = Object.assign(getState(navigation[3]).CommonActions);
      const _Object = Object;
      const keys = Object.keys(obj);
      const reduced = keys.reduce((acc, item) => {
        let closure_0 = item;
        acc[item] = () => {
          const args = [...arguments];
          withStack(() => {
            const items = [...closure_0];
            const applyResult = obj[args].apply(items);
            if (typeof dispatch === "function") {
              let applyResultResult = applyResult;
              if (typeof applyResult === "function") {
                applyResultResult = applyResult(args());
              }
              if (null != applyResultResult) {
                obj = { source: key.key };
                dispatch = closure_1_1.dispatch;
                const merged = Object.assign(applyResultResult);
                dispatch(obj);
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          });
        };
        return acc;
      }, {});
      let obj2 = {
        dispatch(arg0) {
            let closure_0 = arg0;
            withStack(() => {
              if (typeof dispatch === "function") {
                let tmpResult = closure_0;
                if (typeof closure_0 === "function") {
                  tmpResult = closure_0(closure_0());
                }
                if (null != tmpResult) {
                  dispatch = closure_1_1.dispatch;
                  obj = { source: closure_1.key };
                  const merged = Object.assign(tmpResult);
                  dispatch(obj);
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            });
          },
        getParent(arg0) {
            if (undefined !== arg0) {
              let parent;
              if (arg0 === base.getId()) {
                parent = acc[key.key];
              }
              return parent;
            }
            parent = base.getParent(arg0);
          },
        setOptions(arg0) {
            let closure_0 = arg0;
            dispatch((arg0) => {
              obj = {};
              const merged = Object.assign(arg0);
              key = closure_1.key;
              const obj2 = {};
              const merged1 = Object.assign(arg0[closure_1.key]);
              const merged2 = Object.assign(closure_0);
              obj[key] = obj2;
              return obj;
            });
          },
        isFocused() {
            const state = base.getState();
            let tmp2 = state.routes[state.index].key === key.key;
            if (tmp2) {
              let isFocusedResult = !navigation;
              if (navigation) {
                isFocusedResult = navigation.isFocused();
              }
              tmp2 = isFocusedResult;
            }
            return tmp2;
          }
      };
      key = key.key;
      let merged2 = Object.assign(base);
      const merged3 = Object.assign(reduced);
      const merged4 = Object.assign(obj.create(key.key));
      acc[key] = obj2;
    }
    return acc;
  }, {});
  const insertionEffect = emitter.useInsertionEffect(() => {
    ref.current = navigations;
  });
  return { base, navigations };
};