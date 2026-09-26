// _runtime/metro/01568__.js
import noop from "00019__.js";

const require = fn;
const PrivateValueStore = fn(1489).PrivateValueStore;

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
    const merged = Object.assign(router.actionCreators);
    const merged1 = Object.assign(id(onAction[3]).CommonActions);
    const keys = Object.keys({});
    const reduced = keys.reduce((acc, item) => {
      closure_0 = item;
      acc[item] = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        const applyResult = obj[closure_0].apply(items);
        let applyResultResult = applyResult;
        if (typeof applyResult === "function") {
          applyResultResult = applyResult(closure_1_3());
        }
        if (!obj2(applyResultResult)) {
          if (closure_1_2 != null) {
            closure_1_2(applyResultResult);
          }
        }
      };
      return acc;
    }, {});
    let obj2 = {};
    const merged2 = Object.assign(context);
    const merged3 = Object.assign(reduced);
    obj2.dispatch = function dispatch(fn) {
      let tmp = fn;
      if (typeof fn === "function") {
        tmp = fn(getState());
      }
      if (!obj2(tmp)) {
        if (onUnhandledAction != null) {
          onUnhandledAction(tmp);
        }
      }
    };
    obj2.emit = emitter.emit;
    obj2.isFocused = context ? context.isFocused : () => true;
    obj2.canGoBack = function canGoBack() {
      const tmp = getState();
      const CommonActions = id(onAction[3]).CommonActions;
      let flag =
        null !==
        stateForAction.getStateForAction(tmp, CommonActions.goBack(), {
          routeNames: tmp.routeNames,
          routeParamList: {},
          routeGetIdList: {},
        });
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
    obj2.getId = function getId() {
      return obj;
    };
    obj2.getParent = function getParent(arg0) {
      if (undefined !== arg0) {
        let tmp2 = obj2;
        if (obj2) {
          obj2 = obj;
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
    obj2.getState = function getState() {
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
    return obj2;
  }, items);
};
