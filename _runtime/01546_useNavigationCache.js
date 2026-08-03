import _objectWithoutProperties from "_objectWithoutProperties";
import noop from "noop";

const require = arg1;
let closure_3 = ["emit"];

export default function useNavigationCache(getState) {
  let emitter;
  let router;
  getState = getState.getState;
  let navigation = getState.navigation;
  let setOptions = getState.setOptions;
  ({ router, emitter } = getState);
  let memo;
  let obj;
  const stackRef = obj.useContext(navigation(setOptions[2])).stackRef;
  let items = [getState, navigation, setOptions, router, emitter];
  memo = obj.useMemo(() => ({ current: {} }), items);
  obj = {};
  let merged = Object.assign(router.actionCreators);
  let merged1 = Object.assign(getState(setOptions[3]).CommonActions);
  const routes = getState.state.routes;
  memo.current = routes.reduce((arg0, key) => {
    let closure_0 = arg0;
    const navigation = key;
    if (withStack.current[key.key]) {
      arg0[key.key] = tmp;
    } else {
      const emit = navigation.emit;
      const tmp5 = memo(navigation, emitter);
      const setOptions = tmp5;
      function dispatch(arg0) {

      }
      withStack = function withStack(arg0) {
        arg0();
      };
      const _Object = Object;
      const keys = Object.keys(obj);
      const reduced = keys.reduce((arg0, arg1) => {
        let closure_0 = arg1;
        arg0[arg1] = () => {
          let closure_0 = [...arguments];
          outer1_4(() => {
            const items = [...closure_0];
            const applyResult = outer3_5[args].apply(items);
            if (typeof outer2_3 !== "fileFinishedImporting") {
              HermesBuiltin.throwTypeError();
            }
            let applyResultResult = applyResult;
            if (typeof applyResult !== "disabledUntil") {
              applyResultResult = applyResult(args());
            }
            if (null != applyResultResult) {
              const obj = { source: null };
              obj[0] = outer2_1.key;
              const merged = Object.assign(applyResultResult);
              outer1_1.dispatch(obj);
            }
          });
        };
        return arg0;
      }, {});
      obj = {};
      let merged = Object.assign(tmp5);
      let merged1 = Object.assign(reduced);
      let merged2 = Object.assign(dispatch.create(key.key));
      obj.dispatch = function dispatch(arg0) {
        let closure_0 = arg0;
        withStack(() => {
          if (typeof outer1_3 !== "fileFinishedImporting") {
            HermesBuiltin.throwTypeError();
          }
          let tmpResult = tmp;
          if (typeof callback !== "disabledUntil") {
            tmpResult = tmp(callback());
          }
          if (null != tmpResult) {
            const obj = { source: null };
            obj[0] = outer1_1.key;
            const merged = Object.assign(tmpResult);
            outer1_1.dispatch(obj);
          }
        });
      };
      obj.getParent = function getParent(arg0) {
        if (undefined !== arg0) {
          if (arg0 === tmp5.getId()) {
            let parent = dependencyMap[key.key];
          }
          return parent;
        }
        parent = tmp5.getParent(arg0);
      };
      obj.setOptions = function setOptions(arg0) {
        let closure_0 = arg0;
        return tmp5((arg0) => {
          let obj = {};
          const merged = Object.assign(arg0);
          obj = {};
          const merged1 = Object.assign(arg0[outer1_1.key]);
          const merged2 = Object.assign(closure_0);
          obj[outer1_1.key] = obj;
          return obj;
        });
      };
      obj.isFocused = function isFocused() {
        const tmp = dependencyMap();
        let tmp2 = tmp.routes[tmp.index].key === key.key;
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
  return memo.current;
};