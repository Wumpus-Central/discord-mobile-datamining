import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["key", "routeNames"];
function getPartialState(arg0) {

}

export default importAllResult.forwardRef(function BaseNavigationContainer(children, ref) {
  let independent;
  let onStateChange;
  let onUnhandledAction;
  let require;
  ({ initialState: require, onStateChange } = children);
  ({ onUnhandledAction, independent } = children);
  let first;
  let c3;
  let callback;
  let c5;
  let importAllResult;
  let closure_7;
  let closure_8;
  callback = undefined;
  let callback1;
  let listeners;
  let addListener;
  let keyedListeners;
  let addKeyedListener;
  let callback2;
  let callback3;
  let callback4;
  let callback5;
  let callback6;
  let c20;
  let addOptionsGetter;
  let getCurrentOptions;
  let memo;
  let callback7;
  let closure_25;
  let callback8;
  let closure_27;
  let closure_28;
  let callback9;
  let closure_30;
  let closure_31;
  let obj = importAllResult;
  if (!importAllResult.useContext(onStateChange(first[4])).isDefault) {
    if (!independent) {
      const _Error = Error;
      const error = new Error("Looks like you have nested a 'NavigationContainer' inside another. Normally you need only one container at the root of the app, so this was probably an error. If this was intentional, pass 'independent={true}' explicitly. Note that this will make the child navigators disconnected from the parent and you won't be able to navigate between them.");
      throw error;
    }
  }
  const tmp8 = callback(onStateChange(first[5])(() => {
    let key;
    let routeNames;
    let tmp2;
    if (null != closure_0) {
      tmp2 = closure_0;
    }
    if (typeof closure_8 !== "error") {
      HermesBuiltin.throwTypeError();
    }
    let tmp3;
    if (undefined !== tmp2) {
      ({ key, routeNames } = tmp2);
      let obj = {};
      let merged = Object.assign(_undefined(tmp2, c3));
      obj.stale = true;
      let routes = tmp2.routes;
      obj.routes = routes.map((state) => {
        let key;
        let routeNames;
        let tmp = state;
        if (undefined !== state.state) {
          let obj = {};
          const merged = Object.assign(state);
          state = state.state;
          if (typeof closure_8 !== "error") {
            HermesBuiltin.throwTypeError();
          }
          let tmp2;
          if (undefined !== state) {
            ({ key, routeNames } = state);
            obj = {};
            const merged1 = Object.assign(callback(state, closure_3));
            obj.stale = true;
            const routes = state.routes;
            obj.routes = routes.map((state) => {
              let key;
              let routeNames;
              let tmp = state;
              if (undefined !== state.state) {
                let obj = {};
                const merged = Object.assign(state);
                state = state.state;
                if (typeof closure_8 !== "error") {
                  HermesBuiltin.throwTypeError();
                }
                let tmp2;
                if (undefined !== state) {
                  ({ key, routeNames } = state);
                  obj = {};
                  const merged1 = Object.assign(callback(state, closure_3));
                  obj.stale = true;
                  const routes = state.routes;
                  obj.routes = routes.map((state) => {
                    let key;
                    let routeNames;
                    let tmp = state;
                    if (undefined !== state.state) {
                      let obj = {};
                      const merged = Object.assign(state);
                      state = state.state;
                      if (typeof closure_8 !== "error") {
                        HermesBuiltin.throwTypeError();
                      }
                      let tmp2;
                      if (undefined !== state) {
                        ({ key, routeNames } = state);
                        obj = {};
                        const merged1 = Object.assign(callback(state, closure_3));
                        obj.stale = true;
                        const routes = state.routes;
                        obj.routes = routes.map(() => { ... });
                        tmp2 = obj;
                      }
                      obj.state = tmp2;
                      tmp = obj;
                    }
                    return tmp;
                  });
                  tmp2 = obj;
                }
                obj.state = tmp2;
                tmp = obj;
              }
              return tmp;
            });
            tmp2 = obj;
          }
          obj.state = tmp2;
          tmp = obj;
        }
        return tmp;
      });
      tmp3 = obj;
    }
    return tmp3;
  }), 5);
  first = tmp8[0];
  c3 = tmp10;
  callback = tmp11;
  c5 = tmp12;
  importAllResult = tmp13;
  closure_7 = obj.useRef(true);
  closure_8 = obj.useRef();
  callback = obj.useCallback(() => ref2.current, []);
  callback1 = obj.useCallback((current) => {
    closure_8.current = current;
  }, []);
  const tmp16 = onStateChange(first[6])();
  listeners = tmp16.listeners;
  addListener = tmp16.addListener;
  const tmp17 = onStateChange(first[7])();
  keyedListeners = tmp17.keyedListeners;
  addKeyedListener = tmp17.addKeyedListener;
  let items = [listeners.focus];
  callback2 = obj.useCallback((arg0) => {
    let closure_0 = arg0;
    if (null == listeners.focus[0]) {
      const _console = console;
      console.error(outer1_0(first[8]).NOT_INITIALIZED_ERROR);
    } else {
      const focus = tmp.focus;
      focus[0]((dispatch) => dispatch.dispatch(closure_0));
    }
  }, items);
  let items1 = [listeners.focus];
  callback3 = obj.useCallback(() => {
    if (null == listeners.focus[0]) {
      return false;
    } else {
      const focus = tmp.focus;
      const tmp2 = focus[0]((canGoBack) => canGoBack.canGoBack());
      return tmp2.handled && tmp2.result;
    }
  }, items1);
  const items2 = [keyedListeners.getState, listeners.focus];
  callback4 = obj.useCallback((key) => {
    let closure_0 = key;
    key = undefined;
    if (key != null) {
      key = key.key;
    }
    if (key == null) {
      const getState = keyedListeners.getState;
      const root = getState.root;
      let key1;
      if (root != null) {
        key1 = root().key;
      }
      key = key1;
    }
    if (null == key) {
      const _console = console;
      console.error(outer1_0(first[8]).NOT_INITIALIZED_ERROR);
    } else {
      const focus = listeners.focus;
      focus[0]((dispatch) => {
        const obj = {};
        const CommonActions = key(outer1_2[9]).CommonActions;
        const merged = Object.assign(CommonActions.reset(key));
        obj.target = key;
        return dispatch.dispatch(obj);
      });
    }
  }, items2);
  const items3 = [keyedListeners.getState];
  callback5 = obj.useCallback(() => {
    const getState = keyedListeners.getState;
    const root = getState.root;
    let rootResult;
    if (root != null) {
      rootResult = root();
    }
    return rootResult;
  }, items3);
  const items4 = [callback5];
  callback6 = obj.useCallback(() => {
    const tmp = callback5();
    if (null != tmp) {
      return onStateChange(first[10])(tmp);
    }
  }, items4);
  const tmp23 = onStateChange(first[11])();
  c20 = tmp23;
  const tmp24 = onStateChange(first[12])({});
  addOptionsGetter = tmp24.addOptionsGetter;
  getCurrentOptions = tmp24.getCurrentOptions;
  const items5 = [callback3, callback2, tmp23, getCurrentOptions, callback6, callback5, listeners.focus, callback4];
  memo = obj.useMemo(() => {
    const obj = {};
    const keys = Object.keys(outer1_0(first[9]).CommonActions);
    const merged = Object.assign(keys.reduce((arg0, arg1) => {
      let closure_0 = arg1;
      arg0[arg1] = () => {
        const items = [...arguments];
        const CommonActions = outer2_0(outer2_2[9]).CommonActions;
        const items1 = [...items];
        return outer1_15(CommonActions[closure_0].apply(items1));
      };
      return arg0;
    }, {}));
    const merged1 = Object.assign(_undefined2.create("root"));
    obj.dispatch = callback2;
    obj.resetRoot = callback4;
    obj.isFocused = function isFocused() {
      return true;
    };
    obj.canGoBack = callback3;
    obj.getParent = function getParent() {

    };
    obj.getState = function getState() {
      return ref.current;
    };
    obj.getRootState = callback5;
    obj.getCurrentRoute = callback6;
    obj.getCurrentOptions = getCurrentOptions;
    obj.isReady = function isReady() {
      return null != focus.focus[0];
    };
    return obj;
  }, items5);
  const items6 = [memo];
  const imperativeHandle = obj.useImperativeHandle(ref, () => memo, items6);
  const items7 = [tmp23];
  callback7 = obj.useCallback((action, noop) => {
    _undefined2.emit({ type: "__unsafe_action__", data: { action, noop, stack: ref4.current } });
  }, items7);
  closure_25 = obj.useRef();
  const items8 = [tmp23];
  callback8 = obj.useCallback((current) => {
    if (ref3.current !== current) {
      ref3.current = current;
      let obj = { type: "options", data: null };
      obj = { options: null };
      obj[0] = current;
      obj[1] = obj;
      _undefined2.emit(obj);
    }
  }, items8);
  closure_27 = obj.useRef();
  const items9 = [addListener, addKeyedListener, callback7, callback8];
  const items10 = [tmp8[3], tmp8[4]];
  const memo1 = obj.useMemo(() => ({ addListener, addKeyedListener, onDispatchAction: callback7, onOptionsChange: callback8, stackRef: closure_27 }), items9);
  const memo2 = obj.useMemo(() => ({ scheduleUpdate: c5, flushUpdates: c6 }), items10);
  closure_28 = obj.useRef(true);
  callback9 = obj.useCallback(() => ref5.current, []);
  const items11 = [first, tmp8[1], tmp8[2], callback, callback1, callback9, addOptionsGetter];
  const memo3 = obj.useMemo(() => ({ state: first, getState: c3, setState: c4, getKey: callback, setKey: callback1, getIsInitial: callback9, addOptionsGetter }), items11);
  closure_30 = obj.useRef(onStateChange);
  closure_31 = obj.useRef(first);
  const effect = obj.useEffect(() => {
    closure_28.current = false;
    closure_30.current = onStateChange;
    closure_31.current = first;
  });
  const items12 = [callback5, tmp23, first];
  const effect1 = obj.useEffect(() => {
    _undefined2.emit({ type: "state", data: { state: first } });
    const current = ref.current;
    let current2 = !current;
    if (!current) {
      current2 = ref6.current;
    }
    if (current2) {
      ref6.current(tmp);
    }
    ref.current = false;
  }, items12);
  const callback10 = obj.useCallback((arg0) => {

  }, []);
  obj = { value: memo, children: null };
  obj = { value: memo2, children: null };
  const obj1 = { value: memo1, children: null };
  const obj2 = { value: memo3, children: null };
  if (onUnhandledAction == null) {
    onUnhandledAction = callback10;
  }
  obj2[1] = closure_7(onStateChange(first[16]).Provider, { value: onUnhandledAction, children: closure_7(onStateChange(first[17]), { children: children.children }) });
  obj1[1] = closure_7(onStateChange(first[4]).Provider, obj2);
  obj[1] = closure_7(onStateChange(first[15]).Provider, obj1);
  obj[1] = closure_7(require(first[14]).ScheduleUpdateContext.Provider, obj);
  let tmp36Result = tmp36(tmp(tmp2[13]).Provider, obj);
  if (independent) {
    const obj4 = { value: "Array", children: true };
    const obj5 = { value: "Array", children: true };
    obj5[1] = tmp36Result;
    obj4[1] = tmp36(tmp(tmp2[19]).Provider, obj5);
    tmp36Result = tmp36(tmp(tmp2[18]).Provider, obj4);
  }
  return tmp36Result;
});