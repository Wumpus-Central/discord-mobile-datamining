// _runtime/01570_useNavigationCache.js
import closure_3 from "metro/00109__objectWithoutProperties.js";
import closure_4 from "00019_noop.js";

const require = arg1;
let closure_2 = ["emit"];

export const useNavigationCache = function useNavigationCache(getState) {
  getState = getState.getState;
  const navigation = getState.navigation;
  const setOptions = getState.setOptions;
  const router = getState.router;
  const emitter = getState.emitter;
  let base;
  closure_6 = undefined;
  let navigations;
  const stackRef = emitter.useContext(getState(navigation[2]).NavigationBuilderContext).stackRef;
  let items = [navigation, router.actionCreators];
  base = emitter.useMemo(() => {
    const tmp = router(dispatch, setOptions);
    closure_0 = tmp;
    let obj = {};
    const merged = Object.assign(router.actionCreators);
    const merged1 = Object.assign(getState(navigation[3]).CommonActions);
    dispatch = function dispatch() {
      error = new Error("Actions cannot be dispatched from a placeholder screen.");
      throw error;
    };
    const keys = Object.keys(obj);
    const reduced = keys.reduce((arg0, arg1) => {
      arg0[arg1] = dispatch;
      return arg0;
    }, {});
    obj = {};
    const merged2 = Object.assign(tmp);
    const merged3 = Object.assign(reduced);
    obj.addListener = function addListener() {
      return () => {};
    };
    obj.removeListener = function removeListener() {};
    obj.dispatch = dispatch;
    obj.getParent = function getParent(arg0) {
      if (undefined !== arg0) {
        if (arg0 === store.getId()) {
          let parent = closure_1_5;
        }
        return parent;
      }
      parent = store.getParent(arg0);
    };
    obj.setOptions = function setOptions() {
      error = new Error("Options cannot be set from a placeholder screen.");
      throw error;
    };
    obj.isFocused = function isFocused() {
      return false;
    };
    return obj;
  }, items);
  const items1 = [base, getState, navigation, setOptions, emitter];
  closure_6 = emitter.useMemo(() => ({ current: {} }), items1);
  const routes = getState.state.routes;
  navigations = routes.reduce((arg0, key) => {
    closure_0 = arg0;
    closure_1 = key;
    if (ref.current[key.key]) {
      arg0[key.key] = tmp;
    } else {
      function dispatch(arg0) {}
      function withStack(arg0) {
        arg0();
      }
      let obj = {};
      let merged = Object.assign(withStack.actionCreators);
      let merged1 = Object.assign(getState(navigation[3]).CommonActions);
      const _Object = Object;
      const keys = Object.keys(obj);
      const reduced = keys.reduce((arg0, arg1) => {
        closure_0 = arg1;
        arg0[arg1] = () => {
          closure_0 = [...arguments];
          closure_1_3(() => {
            const items = [...closure_0];
            const applyResult = closure_2_4[args].apply(items);
            if (typeof closure_2_2 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            let applyResultResult = applyResult;
            if (typeof applyResult === "function") {
              applyResultResult = applyResult(args());
            }
            if (null != applyResultResult) {
              obj = { source: null };
              obj[0] = closure_2_1.key;
              const merged = Object.assign(applyResultResult);
              closure_1_1.dispatch(obj);
            }
          });
        };
        return arg0;
      }, {});
      obj = {};
      let merged2 = Object.assign(base);
      const merged3 = Object.assign(reduced);
      const merged4 = Object.assign(obj.create(key.key));
      obj.dispatch = function dispatch(arg0) {
        closure_0 = arg0;
        withStack(() => {
          if (typeof closure_1_2 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          let tmpResult = tmp;
          if (typeof callback === "function") {
            tmpResult = tmp(callback());
          }
          if (null != tmpResult) {
            obj = { source: null };
            obj[0] = closure_1_1.key;
            const merged = Object.assign(tmpResult);
            closure_1_1.dispatch(obj);
          }
        });
      };
      obj.getParent = function getParent(arg0) {
        if (undefined !== arg0) {
          if (arg0 === closure_1_5.getId()) {
            let parent = table[key.key];
          }
          return parent;
        }
        parent = closure_1_5.getParent(arg0);
      };
      obj.setOptions = function setOptions(arg0) {
        closure_0 = arg0;
        dispatch((arg0) => {
          obj = {};
          const merged = Object.assign(arg0);
          obj = {};
          const merged1 = Object.assign(arg0[closure_1_1.key]);
          const merged2 = Object.assign(closure_0);
          obj[closure_1_1.key] = obj;
          return obj;
        });
      };
      obj.isFocused = function isFocused() {
        const state = closure_1_5.getState();
        let tmp2 = state.routes[state.index].key === key.key;
        if (tmp2) {
          let isFocusedResult = !key;
          if (key) {
            isFocusedResult = obj.isFocused();
          }
          tmp2 = isFocusedResult;
          obj = key;
        }
        return tmp2;
      };
      arg0[key.key] = obj;
    }
    return arg0;
  }, {});
  const insertionEffect = emitter.useInsertionEffect(() => {
    closure_6.current = navigations;
  });
  return { base, navigations };
};
