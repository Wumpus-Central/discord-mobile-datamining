// _runtime/metro/01573__.js
import _createClass from "01494__createClass.js";
import react from "../00019_react.js";

let getStateForAction;

const PrivateValueStore = _createClass.PrivateValueStore;

export const useNavigationHelpers = function useNavigationHelpers(id) {
  id = id.id;
  const onAction = id.onAction;
  const onUnhandledAction = id.onUnhandledAction;
  const getState = id.getState;
  const emitter = id.emitter;
  const router = id.router;
  let state = id.state;
  const context = onUnhandledAction.useContext(id(onAction[2]).NavigationContext);
  const ref = onUnhandledAction.useRef(null);
  let obj = { state, base: getState() };
  ref.current = obj;
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
      let closure_0 = item;
      acc[item] = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        const applyResult = obj[item].apply(items);
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
    let obj2 = {
      dispatch(fn) {
        let tmp = fn;
        if (typeof fn === "function") {
          tmp = fn(getState());
        }
        if (!obj2(tmp)) {
          if (onUnhandledAction != null) {
            onUnhandledAction(tmp);
          }
        }
      },
      emit: emitter.emit,
      isFocused: context ? context.isFocused : () => true,
      canGoBack() {
        const tmp = getState();
        getStateForAction = getStateForAction.getStateForAction;
        const CommonActions = id(onAction[3]).CommonActions;
        obj = { routeNames: tmp.routeNames, routeParamList: {}, routeGetIdList: {} };
        let flag = null !== getStateForAction(tmp, CommonActions.goBack(), obj);
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
      },
      getId() {
        return obj;
      },
      getParent(arg0) {
        if (undefined !== arg0) {
          let tmp2 = obj2;
          if (tmp2) {
            obj2 = obj;
            tmp2 = obj;
            if (arg0 !== obj2.getId()) {
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
      },
      getState() {
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
      },
    };
    const merged2 = Object.assign(context);
    const merged3 = Object.assign(reduced);
    return obj2;
  }, items);
};
