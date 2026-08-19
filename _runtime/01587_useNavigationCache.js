// _runtime/01587_useNavigationCache.js
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import noop from "00019_noop.js";

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
      error = new Error("Actions cannot be dispatched from a placeholder screen.");
      throw error;
    };
    const keys = Object.keys(obj);
    const reduced = keys.reduce((acc, item, index) => {
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
        if (arg0 === store.getId()) {
          let parent = base;
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
  const navigations = routes.reduce((acc, item, index) => {
    closure_0 = acc;
    closure_1 = item;
    if (ref.current[item.key]) {
      acc[item.key] = tmp;
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
      const reduced = keys.reduce((acc, item, index) => {
        closure_0 = item;
        acc[item] = () => {
          closure_0 = [...arguments];
          withStack(() => {
            const items = [...closure_0];
            const applyResult = closure_2_4[args].apply(items);
            if (typeof dispatch !== "function") {
              HermesBuiltin.throwTypeError();
            }
            let applyResultResult = applyResult;
            if (typeof applyResult === "function") {
              applyResultResult = applyResult(args());
            }
            if (null != applyResultResult) {
              obj = { source: null };
              obj[0] = item.key;
              const merged = Object.assign(applyResultResult);
              closure_1_1.dispatch(obj);
            }
          });
        };
        return acc;
      }, {});
      obj = {};
      let merged2 = Object.assign(base);
      const merged3 = Object.assign(reduced);
      const merged4 = Object.assign(obj.create(item.key));
      obj.dispatch = function dispatch(arg0) {
        closure_0 = arg0;
        withStack(() => {
          if (typeof dispatch !== "function") {
            HermesBuiltin.throwTypeError();
          }
          let tmpResult = callback;
          if (typeof callback === "function") {
            tmpResult = callback(callback());
          }
          if (null != tmpResult) {
            obj = { source: null };
            obj[0] = item.key;
            const merged = Object.assign(tmpResult);
            item.dispatch(obj);
          }
        });
      };
      obj.getParent = function getParent(arg0) {
        if (undefined !== arg0) {
          if (arg0 === base.getId()) {
            let parent = acc[item.key];
          }
          return parent;
        }
        parent = base.getParent(arg0);
      };
      obj.setOptions = function setOptions(arg0) {
        closure_0 = arg0;
        dispatch((arg0) => {
          const merged = Object.assign(arg0);
          obj = {};
          const merged1 = Object.assign(arg0[item.key]);
          const merged2 = Object.assign(closure_0);
          obj[item.key] = obj;
          return obj;
        });
      };
      obj.isFocused = function isFocused() {
        const state = base.getState();
        let tmp2 = state.routes[state.index].key === item.key;
        if (tmp2) {
          let isFocusedResult = !item;
          if (item) {
            isFocusedResult = item.isFocused();
          }
          tmp2 = isFocusedResult;
        }
        return tmp2;
      };
      acc[item.key] = obj;
    }
    return acc;
  }, {});
  const insertionEffect = emitter.useInsertionEffect(() => {
    closure_6.current = navigations;
  });
  return { base, navigations };
};