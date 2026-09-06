// === Module 1566: ? ===

// Module 1566
import noop from "module_19" /* 19 */;

const require = fn;
const PrivateValueStore = fn(1487).PrivateValueStore;

export const useNavigationHelpers = function useNavigationHelpers(id) {
  id = id.id;
  const onAction = id.onAction;
  const onUnhandledAction = id.onUnhandledAction;
  const getState = id.getState;
  const emitter = id.emitter;
  const router = id.router;
  const context = onUnhandledAction.useContext(id(onAction[2]).NavigationContext);
  const ref = onUnhandledAction.useRef(null);
  ref.current = { state: id.state, base: getState() };
  const insertionEffect = onUnhandledAction.useInsertionEffect(() => {
    ref.current = null;
  });
  let items = [router, context, emitter.emit, getState, onAction, onUnhandledAction, id, ref];
  return onUnhandledAction.useMemo(() => {
    let obj = {};
    const merged = Object.assign(router.actionCreators);
    const merged1 = Object.assign(id(onAction[3]).CommonActions);
    const keys = Object.keys(obj);
    const reduced = keys.reduce((acc, item) => {
      closure_0 = item;
      acc[item] = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        const applyResult = obj[closure_0].apply(items);
        let applyResultResult = applyResult;
        if (typeof applyResult === "function") {
          applyResultResult = applyResult(closure_1_3());
        }
        if (!closure_1_1(applyResultResult)) {
          if (closure_1_2 != null) {
            closure_1_2(applyResultResult);
          }
        }
      };
      return acc;
    }, {});
    obj = {};
    const merged2 = Object.assign(context);
    const merged3 = Object.assign(reduced);
    obj.dispatch = function dispatch(fn) {
      let tmp = fn;
      if (typeof fn === "function") {
        tmp = fn(getState());
      }
      if (!obj(tmp)) {
        if (onUnhandledAction != null) {
          onUnhandledAction(tmp);
        }
      }
    };
    obj.emit = emitter.emit;
    obj.isFocused = context ? context.isFocused : (() => true);
    obj.canGoBack = function canGoBack() {
      const tmp = getState();
      const CommonActions = id(onAction[3]).CommonActions;
      let flag = null !== stateForAction.getStateForAction(tmp, CommonActions.goBack(), { routeNames: tmp.routeNames, routeParamList: {}, routeGetIdList: {} });
      if (!flag) {
        let canGoBackResult;
        if (context != null) {
          canGoBackResult = context.canGoBack();
        }
        flag = canGoBackResult;
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
        return context;
      }
    };
    obj.getState = function getState() {
      const tmp = getState();
      const current = ref.current;
      let state = tmp;
      if (null != current) {
        state = tmp;
        if (current.base === tmp) {
          state = current.state;
        }
      }
      return state;
    };
    return obj;
  }, items);
};