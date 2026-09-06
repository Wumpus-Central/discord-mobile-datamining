// _runtime/metro/01499__.js
import CommonActions2 from "../01488_CommonActions.js";
import NOT_INITIALIZED_ERROR from "../01509_NOT_INITIALIZED_ERROR.js";
import findFocusedRoute from "../01510_findFocusedRoute.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import noop from "00019__.js";

require = fn;
let closure_3 = ["key", "routeNames"];
const jsx = fn(21).jsx;
function getPartialState(arg0) {

}

export const BaseNavigationContainer = noop.forwardRef(function BaseNavigationContainer(onReady, ref) {
  ({ initialState: require, onStateChange } = onReady);
  onReady = onReady.onReady;
  ({ onUnhandledAction, navigationInChildEnabled } = onReady);
  if (navigationInChildEnabled === undefined) {
    navigationInChildEnabled = false;
  }
  let state;
  let getState;
  let setState;
  let scheduleUpdate;
  let flushUpdates;
  let getKey;
  let callback1;
  c12 = undefined;
  addListener = undefined;
  c14 = undefined;
  addKeyedListener = undefined;
  let dispatch;
  let canGoBack;
  let resetRoot;
  let getRootState;
  let getCurrentRoute;
  let isReady;
  let eventEmitter;
  let addOptionsGetter;
  let getCurrentOptions;
  let memo;
  let onDispatchAction;
  let onEmitEvent;
  let onOptionsChange;
  let stackRef;
  let getIsStateEmitted;
  let callback2;
  let obj = setState;
  ({ theme, children } = onReady);
  const context = setState.useContext(require("get getKey").NavigationStateContext);
  let obj1 = require("01501__.js");
  if (!context.isDefault) {
    if (!obj1.useNavigationIndependentTree()) {
      const _Error = Error;
      let error = new Error("Looks like you have nested a 'NavigationContainer' inside another. Normally you need only one container at the root of the app, so this was probably an error. If this was intentional, wrap the container in 'NavigationIndependentTree' explicitly. Note that this will make the child navigators disconnected from the parent and you won't be able to navigate between them.");
      throw error;
    }
  }
  let tmpResult = tmp(tmp2[5]);
  const syncState = tmpResult.useSyncState(() => {
    if (typeof tmp === "function") {
      let tmp3;
      if (undefined !== tmp2) {
        ({ key, routeNames } = tmp2);
        let obj = {};
        let merged = Object.assign(_objectWithoutProperties(tmp2, closure_3));
        obj.stale = true;
        let routes = tmp2.routes;
        obj.routes = routes.map((state) => {
          let tmp = state;
          if (undefined !== state.state) {
            let obj = {};
            const merged = Object.assign(state);
            state = state.state;
            if (typeof flushUpdates === "function") {
              let tmp2;
              if (undefined !== state) {
                ({ key, routeNames } = state);
                obj = {};
                const merged1 = Object.assign(getState(state, closure_1_3));
                obj.stale = true;
                const routes = state.routes;
                obj.routes = routes.map((state) => {
                  let tmp = state;
                  if (undefined !== state.state) {
                    let obj = {};
                    const merged = Object.assign(state);
                    state = state.state;
                    if (typeof flushUpdates === "function") {
                      let tmp2;
                      if (undefined !== state) {
                        ({ key, routeNames } = state);
                        obj = {};
                        const merged1 = Object.assign(getState(state, closure_1_3));
                        obj.stale = true;
                        const routes = state.routes;
                        obj.routes = routes.map((state) => {
                          let tmp = state;
                          if (undefined !== state.state) {
                            let obj = {};
                            const merged = Object.assign(state);
                            state = state.state;
                            if (typeof flushUpdates === "function") {
                              let tmp2;
                              if (undefined !== state) {
                                ({ key, routeNames } = state);
                                obj = {};
                                const merged1 = Object.assign(getState(state, closure_1_3));
                                obj.stale = true;
                                const routes = state.routes;
                                obj.routes = routes.map(() => { ... });
                                tmp2 = obj;
                              }
                              obj.state = tmp2;
                              tmp = obj;
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          }
                          return tmp;
                        });
                        tmp2 = obj;
                      }
                      obj.state = tmp2;
                      tmp = obj;
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  }
                  return tmp;
                });
                tmp2 = obj;
              }
              obj.state = tmp2;
              tmp = obj;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          return tmp;
        });
        tmp3 = obj;
      }
      return tmp3;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
    tmp = getPartialState;
  });
  state = syncState.state;
  getState = syncState.getState;
  setState = syncState.setState;
  scheduleUpdate = syncState.scheduleUpdate;
  flushUpdates = syncState.flushUpdates;
  tmpResult = tmp(tmp2[6]);
  const lazyValue = tmpResult.useLazyValue(() => {
    const weakMap = new WeakMap();
    return weakMap;
  });
  obj.useRef(true);
  obj.useRef(undefined);
  getKey = obj.useCallback(() => ref2.current, []);
  callback1 = obj.useCallback((current) => {
    closure_9.current = current;
  }, []);
  const childListeners = require("01507__.js").useChildListeners();
  ({ listeners: c12, addListener } = childListeners);
  const tmpResult1 = require("01507__.js");
  const keyedChildListeners = require("01508__.js").useKeyedChildListeners();
  ({ keyedListeners: c14, addKeyedListener } = keyedChildListeners);
  const tmp15 = onStateChange(onReady[9])((arg0) => {
    closure_0 = arg0;
    if (null == _undefined.focus[0]) {
      const _console = console;
      console.error(NOT_INITIALIZED_ERROR.NOT_INITIALIZED_ERROR);
    } else {
      const focus = tmp.focus;
      focus[0]((dispatch) => dispatch.dispatch(closure_0));
    }
  });
  dispatch = tmp15;
  const tmp16 = onStateChange(onReady[9])(() => {
    if (null == _undefined.focus[0]) {
      return false;
    } else {
      const focus = tmp.focus;
      const tmp2 = focus[0]((canGoBack) => canGoBack.canGoBack());
      return tmp2.handled && tmp2.result;
    }
  });
  canGoBack = tmp16;
  const tmp17 = onStateChange(onReady[9])((key) => {
    closure_0 = key;
    key = undefined;
    if (key != null) {
      key = key.key;
    }
    if (key == null) {
      getState = _undefined2.getState;
      const root = getState.root;
      let key1;
      if (root != null) {
        key1 = root().key;
      }
      key = key1;
    }
    if (null == key) {
      const _console = console;
      console.error(NOT_INITIALIZED_ERROR.NOT_INITIALIZED_ERROR);
    } else {
      const focus = _undefined.focus;
      focus[0]((dispatch) => {
        const obj = {};
        const CommonActions = require("CommonActions").CommonActions;
        const merged = Object.assign(CommonActions.reset(closure_0));
        obj.target = key;
        return dispatch.dispatch(obj);
      });
    }
  });
  resetRoot = tmp17;
  const tmp18 = onStateChange(onReady[9])(() => {
    getState = _undefined2.getState;
    const root = getState.root;
    let rootResult;
    if (root != null) {
      rootResult = root();
    }
    return rootResult;
  });
  getRootState = tmp18;
  const tmp19 = onStateChange(onReady[9])(() => {
    const tmp = getRootState();
    if (null != tmp) {
      return findFocusedRoute.findFocusedRoute(tmp);
    }
  });
  getCurrentRoute = tmp19;
  const tmp20 = onStateChange(onReady[9])(() => null != _undefined.focus[0]);
  isReady = tmp20;
  const tmpResult2 = require("01508__.js");
  eventEmitter = require("01511__.js").useEventEmitter();
  const tmpResult3 = require("01511__.js");
  const optionsGetters = require("01512__.js").useOptionsGetters({});
  addOptionsGetter = optionsGetters.addOptionsGetter;
  getCurrentOptions = optionsGetters.getCurrentOptions;
  let items = [tmp16, tmp15, eventEmitter, getCurrentOptions, tmp19, tmp18, getState, tmp20, tmp17];
  memo = obj.useMemo(() => {
    const obj = {};
    const keys = Object.keys(CommonActions2.CommonActions);
    const merged = Object.assign(keys.reduce((acc, item) => {
      closure_0 = item;
      acc[item] = () => {
        const items = [...arguments];
        const CommonActions = require("CommonActions").CommonActions;
        const items1 = [...items];
        return dispatch(CommonActions[closure_0].apply(items1));
      };
      return acc;
    }, {}));
    const merged1 = Object.assign(eventEmitter.create("root"));
    obj.dispatch = dispatch;
    obj.resetRoot = resetRoot;
    obj.isFocused = function isFocused() {
      return true;
    };
    obj.canGoBack = canGoBack;
    obj.getParent = function getParent() {

    };
    obj.getState = getState;
    obj.getRootState = getRootState;
    obj.getCurrentRoute = getCurrentRoute;
    obj.getCurrentOptions = getCurrentOptions;
    obj.isReady = isReady;
    obj.setOptions = function setOptions() {
      const error = new Error("Cannot call setOptions outside a screen");
      throw error;
    };
    return obj;
  }, items);
  let items1 = [memo];
  const imperativeHandle = obj.useImperativeHandle(ref, () => memo, items1);
  const tmp25 = onStateChange(onReady[9])((action, noop) => {
    let obj = { type: "__unsafe_action__", data: null };
    obj = { action, noop, stack: stackRef.current };
    obj.data = obj;
    eventEmitter.emit(obj);
  });
  onDispatchAction = tmp25;
  const tmp26 = onStateChange(onReady[9])((data) => {
    eventEmitter.emit({ type: "__unsafe_event__", data });
  });
  onEmitEvent = tmp26;
  obj.useRef(undefined);
  const tmp27 = onStateChange(onReady[9])((current) => {
    if (ref3.current !== current) {
      ref3.current = current;
      let obj = { type: "options", data: null };
      obj = { options: current };
      obj.data = obj;
      eventEmitter.emit(obj);
    }
  });
  onOptionsChange = tmp27;
  stackRef = obj.useRef(undefined);
  obj.useRef(undefined);
  const tmp28 = onStateChange(onReady[9])(() => {
    const current = ref.current;
    let tmp = !current;
    if (!current) {
      tmp = ref4.current === getState();
    }
    return tmp;
  });
  getIsStateEmitted = tmp28;
  const items2 = [addListener, addKeyedListener, tmp25, tmp26, tmp27, tmp28, scheduleUpdate, flushUpdates];
  const memo1 = obj.useMemo(() => ({ addListener, addKeyedListener, onDispatchAction, onEmitEvent, onOptionsChange, getIsStateEmitted, scheduleUpdate, flushUpdates, stackRef }), items2);
  obj.useRef(true);
  callback2 = obj.useCallback(() => ref5.current, []);
  const items3 = [state, getState, setState, getKey, callback1, callback2, addOptionsGetter];
  const memo2 = obj.useMemo(() => ({ state, getState, setState, getKey, setKey: callback1, getIsInitial: callback2, addOptionsGetter }), items3);
  obj.useRef(onReady);
  obj.useRef(onStateChange);
  const effect = obj.useEffect(() => {
    closure_33.current = false;
    closure_36.current = onStateChange;
    closure_35.current = onReady;
  });
  obj.useRef(false);
  const items4 = [state, tmp20, eventEmitter];
  const effect1 = obj.useEffect(() => {
    const current = ref8.current;
    let tmp2 = !current;
    if (!current) {
      tmp2 = isReady();
    }
    if (tmp2) {
      ref8.current = true;
      const current2 = ref6.current;
      if (current2 != null) {
        current2();
      }
      eventEmitter.emit({ type: "ready" });
    }
  }, items4);
  const items5 = [tmp18, eventEmitter, state];
  const effect2 = obj.useEffect(() => {
    closure_31.current = state;
    eventEmitter.emit({ type: "state", data: { state } });
    const current = ref.current;
    let current2 = !current;
    if (!current) {
      current2 = ref7.current;
    }
    if (current2) {
      ref7.current(tmp);
    }
    ref.current = false;
  }, items5);
  const tmpResult4 = require("01512__.js");
  obj = { value: memo, children: null };
  obj = { value: memo1, children: null };
  obj1 = { value: memo2, children: null };
  const obj2 = { value: lazyValue, children: null };
  if (onUnhandledAction == null) {
    onUnhandledAction = tmp35;
  }
  const obj3 = { value: false, children: null };
  const obj4 = { value: onUnhandledAction, children: null };
  const obj5 = { value: navigationInChildEnabled, children: null };
  tmp35 = onStateChange(onReady[9])((arg0) => {

  });
  obj5.children = scheduleUpdate(require("01518__.js").EnsureSingleNavigator, { children: scheduleUpdate(require("ThemeProvider").ThemeProvider, { value: theme, children }) });
  obj4.children = scheduleUpdate(require("DeprecatedNavigationInChildContext").DeprecatedNavigationInChildContext.Provider, obj5);
  obj2.children = scheduleUpdate(require("UnhandledActionContext").UnhandledActionContext.Provider, obj4);
  obj1.children = scheduleUpdate(require("ConsumedParamsContext").ConsumedParamsContext.Provider, obj2);
  obj.children = scheduleUpdate(require("get getKey").NavigationStateContext.Provider, obj1);
  obj.children = scheduleUpdate(require("NavigationBuilderContext").NavigationBuilderContext.Provider, obj);
  obj3.children = scheduleUpdate(require("NavigationContainerRefContext").NavigationContainerRefContext.Provider, obj);
  return scheduleUpdate(require("NavigationIndependentTreeContext").NavigationIndependentTreeContext.Provider, obj3);
});