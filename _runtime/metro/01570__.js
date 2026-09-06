// === Module 1570: ? ===

// Module 1570
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = arg1;
let closure_2 = ["emit"];

export const useNavigationCache = function useNavigationCache(getState) {
  getState = getState.getState;
  const navigation = getState.navigation;
  const setOptions = getState.setOptions;
  const router = getState.router;
  const emitter = getState.emitter;
  const stackRef = emitter.useContext(getState(navigation[2]).NavigationBuilderContext).stackRef;
  let items = [navigation, router.actionCreators];
  const base = emitter.useMemo(() => {
    const tmp = router(dispatch, setOptions);
    closure_0 = tmp;
    let obj = {};
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
    obj = {};
    const merged2 = Object.assign(tmp);
    const merged3 = Object.assign(reduced);
    obj.addListener = function addListener() {
      return () => {

      };
    };
    obj.removeListener = function removeListener() {

    };
    obj.dispatch = dispatch;
    obj.getParent = function getParent(arg0) {
      if (undefined !== arg0) {
        if (arg0 === closure_0.getId()) {
          let parent = base;
        }
        return parent;
      }
      parent = closure_0.getParent(arg0);
    };
    obj.setOptions = function setOptions() {
      const error = new Error("Options cannot be set from a placeholder screen.");
      throw error;
    };
    obj.isFocused = function isFocused() {
      return false;
    };
    return obj;
  }, items);
  const items1 = [base, getState, navigation, setOptions, emitter];
  emitter.useMemo(() => ({ current: {} }), items1);
  const routes = getState.state.routes;
  const navigations = routes.reduce((acc, key) => {
    if (ref.current[key.key]) {
      acc[key.key] = tmp;
    } else {
      function dispatch(arg0) {

      }
      function withStack(fn) {
        fn();
      }
      let obj = {};
      let merged = Object.assign(withStack.actionCreators);
      let merged1 = Object.assign(getState(navigation[3]).CommonActions);
      const _Object = Object;
      const keys = Object.keys(obj);
      const reduced = keys.reduce((acc, item) => {
        closure_0 = item;
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
                obj = { source: closure_1.key };
                const merged = Object.assign(applyResultResult);
                closure_1_1.dispatch(obj);
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          });
        };
        return acc;
      }, {});
      obj = {};
      let merged2 = Object.assign(base);
      const merged3 = Object.assign(reduced);
      const merged4 = Object.assign(obj.create(key.key));
      obj.dispatch = function dispatch(arg0) {
        closure_0 = arg0;
        withStack(() => {
          if (typeof dispatch === "function") {
            let tmpResult = closure_0;
            if (typeof closure_0 === "function") {
              tmpResult = closure_0(closure_0());
            }
            if (null != tmpResult) {
              obj = { source: key.key };
              const merged = Object.assign(tmpResult);
              key.dispatch(obj);
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        });
      };
      obj.getParent = function getParent(arg0) {
        if (undefined !== arg0) {
          if (arg0 === base.getId()) {
            let parent = acc[key.key];
          }
          return parent;
        }
        parent = base.getParent(arg0);
      };
      obj.setOptions = function setOptions(arg0) {
        closure_0 = arg0;
        dispatch((arg0) => {
          obj = {};
          const merged = Object.assign(arg0);
          obj = {};
          const merged1 = Object.assign(arg0[closure_1.key]);
          const merged2 = Object.assign(closure_0);
          obj[closure_1.key] = obj;
          return obj;
        });
      };
      obj.isFocused = function isFocused() {
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
      };
      acc[key.key] = obj;
    }
    return acc;
  }, {});
  const insertionEffect = emitter.useInsertionEffect(() => {
    closure_6.current = navigations;
  });
  return { base, navigations };
};