import noop from "noop";
import { PrivateValueStore } from "PrivateValueStore";

const require = arg1;

export default function useNavigationHelpers(id) {
  id = id.id;
  const onAction = id.onAction;
  const getState = id.getState;
  const emitter = id.emitter;
  const router = id.router;
  let context;
  let context1;
  context = emitter.useContext(onAction(getState[2]));
  context1 = emitter.useContext(onAction(getState[3]));
  let items = [id, emitter.emit, getState, onAction, context, context1, router];
  return emitter.useMemo(() => {
    let obj = {};
    const merged = Object.assign(router.actionCreators);
    const merged1 = Object.assign(id(getState[4]).CommonActions);
    const keys = Object.keys(obj);
    const reduced = keys.reduce((arg0, arg1) => {
      let closure_0 = arg1;
      arg0[arg1] = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        const applyResult = table[table].apply(items);
        let applyResultResult = applyResult;
        if (typeof applyResult === "function") {
          applyResultResult = applyResult(outer1_2());
        }
        if (!outer1_1(applyResultResult)) {
          if (outer1_5 != null) {
            outer1_5(applyResultResult);
          }
        }
      };
      return arg0;
    }, {});
    obj = {};
    const merged2 = Object.assign(context1);
    const merged3 = Object.assign(reduced);
    obj.dispatch = function dispatch(fn) {
      let tmp = fn;
      if (typeof fn === "function") {
        tmp = fn(callback());
      }
      if (!obj(tmp)) {
        if (callback2 != null) {
          callback2(tmp);
        }
      }
    };
    obj.emit = emitter.emit;
    obj.isFocused = context1 ? context1.isFocused : (() => true);
    obj.canGoBack = function canGoBack() {
      const tmp = callback();
      const CommonActions = obj(outer1_2[4]).CommonActions;
      obj = { routeNames: tmp.routeNames, routeParamList: {}, routeGetIdList: {} };
      let flag = null !== stateForAction.getStateForAction(tmp, CommonActions.goBack(), obj);
      if (!flag) {
        let canGoBackResult;
        if (closure_6 != null) {
          canGoBackResult = obj2.canGoBack();
        }
        flag = canGoBackResult;
        obj2 = closure_6;
      }
      if (!flag) {
        flag = false;
      }
      return flag;
    };
    obj.getId = function getId() {
      return obj;
    };
    obj.getParent = function getParent(arg0) {
      if (undefined !== arg0) {
        let tmp2 = obj;
        if (obj) {
          let obj2 = obj;
          tmp2 = obj;
          if (arg0 !== obj.getId()) {
            const parent = obj2.getParent();
            tmp2 = parent;
            while (parent) {
              obj2 = parent;
              tmp2 = parent;
              if (arg0 === parent.getId()) {
                break;
              }
            }
          }
        }
        return tmp2;
      } else {
        return outer1_6;
      }
    };
    obj.getState = getState;
    return obj;
  }, items);
};