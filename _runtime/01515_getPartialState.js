// _runtime/01515_getPartialState.js
import closure_4 from "metro/00109__objectWithoutProperties.js";
import importAllResult from "00019_noop.js";
import { jsx } from "react/00021_jsxProd.js";

const require = arg1;
let closure_3 = ["key", "routeNames"];
let c5 = importAllResult;
function getPartialState(arg0) {

}

export const BaseNavigationContainer = importAllResult.forwardRef(function BaseNavigationContainer(onReady, ref) {
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
  closure_8 = undefined;
  closure_9 = undefined;
  let callback;
  let callback1;
  c12 = undefined;
  addListener = undefined;
  c14 = undefined;
  addKeyedListener = undefined;
  closure_16 = undefined;
  closure_17 = undefined;
  closure_18 = undefined;
  closure_19 = undefined;
  closure_20 = undefined;
  closure_21 = undefined;
  let eventEmitter;
  let addOptionsGetter;
  let getCurrentOptions;
  let memo;
  closure_26 = undefined;
  closure_27 = undefined;
  closure_28 = undefined;
  closure_29 = undefined;
  closure_30 = undefined;
  closure_31 = undefined;
  closure_32 = undefined;
  closure_33 = undefined;
  let callback2;
  closure_35 = undefined;
  closure_36 = undefined;
  closure_37 = undefined;
  let obj = setState;
  ({ theme, children } = onReady);
  const context = setState.useContext(require(onReady[3]).NavigationStateContext);
  obj1 = require(onReady[4]);
  if (!context.isDefault) {
    if (!obj1.useNavigationIndependentTree()) {
      const _Error = Error;
      error = new Error("Looks like you have nested a 'NavigationContainer' inside another. Normally you need only one container at the root of the app, so this was probably an error. If this was intentional, wrap the container in 'NavigationIndependentTree' explicitly. Note that this will make the child navigators disconnected from the parent and you won't be able to navigate between them.");
      throw error;
    }
  }
  let tmpResult = tmp(tmp2[5]);
  const syncState = tmpResult.useSyncState(() => {
    let tmp2;
    if (null != closure_0) {
      tmp2 = closure_0;
    }
    if (typeof flushUpdates !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let tmp3;
    if (undefined !== tmp2) {
      ({ key, routeNames } = tmp2);
      let obj = {};
      let merged = Object.assign(getState(tmp2, state));
      obj.stale = true;
      let routes = tmp2.routes;
      obj.routes = routes.map((state) => {
        let tmp = state;
        if (undefined !== state.state) {
          let obj = {};
          const merged = Object.assign(state);
          state = state.state;
          if (typeof closure_7 !== "function") {
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
              let tmp = state;
              if (undefined !== state.state) {
                let obj = {};
                const merged = Object.assign(state);
                state = state.state;
                if (typeof closure_7 !== "function") {
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
                    let tmp = state;
                    if (undefined !== state.state) {
                      let obj = {};
                      const merged = Object.assign(state);
                      state = state.state;
                      if (typeof closure_7 !== "function") {
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
  closure_8 = obj.useRef(true);
  closure_9 = obj.useRef(undefined);
  callback = obj.useCallback(() => ref2.current, []);
  callback1 = obj.useCallback((current) => {
    closure_9.current = current;
  }, []);
  const childListeners = require(onReady[7]).useChildListeners();
  ({ listeners: c12, addListener } = childListeners);
  const tmpResult1 = require(onReady[7]);
  const keyedChildListeners = require(onReady[8]).useKeyedChildListeners();
  ({ keyedListeners: c14, addKeyedListener } = keyedChildListeners);
  const tmp15 = onStateChange(onReady[9])((arg0) => {
    closure_0 = arg0;
    if (null == _undefined.focus[0]) {
      const _console = console;
      console.error(closure_1_0(onReady[10]).NOT_INITIALIZED_ERROR);
    } else {
      const focus = tmp.focus;
      focus[0]((dispatch) => dispatch.dispatch(closure_0));
    }
  });
  closure_16 = tmp15;
  const tmp16 = onStateChange(onReady[9])(() => {
    if (null == _undefined.focus[0]) {
      return false;
    } else {
      const focus = tmp.focus;
      const tmp2 = focus[0]((canGoBack) => canGoBack.canGoBack());
      return tmp2.handled && tmp2.result;
    }
  });
  closure_17 = tmp16;
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
      console.error(closure_1_0(onReady[10]).NOT_INITIALIZED_ERROR);
    } else {
      const focus = _undefined.focus;
      focus[0]((dispatch) => {
        const obj = {};
        const CommonActions = key(closure_1_2[11]).CommonActions;
        const merged = Object.assign(CommonActions.reset(key));
        obj.target = key;
        return dispatch.dispatch(obj);
      });
    }
  });
  closure_18 = tmp17;
  const tmp18 = onStateChange(onReady[9])(() => {
    getState = _undefined2.getState;
    const root = getState.root;
    let rootResult;
    if (root != null) {
      rootResult = root();
    }
    return rootResult;
  });
  closure_19 = tmp18;
  const tmp19 = onStateChange(onReady[9])(() => {
    const tmp = callback();
    if (null != tmp) {
      return closure_1_0(onReady[12]).findFocusedRoute(tmp);
    }
  });
  closure_20 = tmp19;
  const tmp20 = onStateChange(onReady[9])(() => null != _undefined.focus[0]);
  closure_21 = tmp20;
  const tmpResult2 = require(onReady[8]);
  eventEmitter = require(onReady[13]).useEventEmitter();
  const tmpResult3 = require(onReady[13]);
  const optionsGetters = require(onReady[14]).useOptionsGetters({});
  addOptionsGetter = optionsGetters.addOptionsGetter;
  getCurrentOptions = optionsGetters.getCurrentOptions;
  let items = [tmp16, tmp15, eventEmitter, getCurrentOptions, tmp19, tmp18, getState, tmp20, tmp17];
  memo = obj.useMemo(() => {
    const obj = {};
    const keys = Object.keys(closure_1_0(onReady[11]).CommonActions);
    const merged = Object.assign(keys.reduce((arg0, arg1) => {
      closure_0 = arg1;
      arg0[arg1] = () => {
        const items = [...arguments];
        const CommonActions = closure_2_0(closure_2_2[11]).CommonActions;
        const items1 = [...items];
        return closure_1_16(CommonActions[closure_0].apply(items1));
      };
      return arg0;
    }, {}));
    const merged1 = Object.assign(eventEmitter.create("root"));
    obj.dispatch = closure_16;
    obj.resetRoot = closure_18;
    obj.isFocused = function isFocused() {
      return true;
    };
    obj.canGoBack = closure_17;
    obj.getParent = function getParent() {

    };
    obj.getState = getState;
    obj.getRootState = closure_19;
    obj.getCurrentRoute = closure_20;
    obj.getCurrentOptions = getCurrentOptions;
    obj.isReady = closure_21;
    obj.setOptions = function setOptions() {
      error = new Error("Cannot call setOptions outside a screen");
      throw error;
    };
    return obj;
  }, items);
  let items1 = [memo];
  const imperativeHandle = obj.useImperativeHandle(ref, () => memo, items1);
  const tmp25 = onStateChange(onReady[9])((action, noop) => {
    eventEmitter.emit({ type: "__unsafe_action__", data: { action, noop, stack: ref4.current } });
  });
  closure_26 = tmp25;
  const tmp26 = onStateChange(onReady[9])((data) => {
    eventEmitter.emit({ type: "__unsafe_event__", data });
  });
  closure_27 = tmp26;
  closure_28 = obj.useRef(undefined);
  const tmp27 = onStateChange(onReady[9])((current) => {
    if (ref3.current !== current) {
      ref3.current = current;
      let obj = { type: "options", data: null };
      obj = { options: null };
      obj[0] = current;
      obj[1] = obj;
      eventEmitter.emit(obj);
    }
  });
  closure_29 = tmp27;
  closure_30 = obj.useRef(undefined);
  closure_31 = obj.useRef(undefined);
  const tmp28 = onStateChange(onReady[9])(() => {
    const current = ref.current;
    let tmp = !current;
    if (!current) {
      tmp = ref5.current === getState();
    }
    return tmp;
  });
  closure_32 = tmp28;
  const items2 = [addListener, addKeyedListener, tmp25, tmp26, tmp27, tmp28, scheduleUpdate, flushUpdates];
  const memo1 = obj.useMemo(() => ({ addListener, addKeyedListener, onDispatchAction: closure_26, onEmitEvent: closure_27, onOptionsChange: closure_29, getIsStateEmitted: closure_32, scheduleUpdate, flushUpdates, stackRef: closure_30 }), items2);
  closure_33 = obj.useRef(true);
  callback2 = obj.useCallback(() => ref6.current, []);
  const items3 = [state, getState, setState, callback, callback1, callback2, addOptionsGetter];
  const memo2 = obj.useMemo(() => ({ state, getState, setState, getKey: callback, setKey: callback1, getIsInitial: callback2, addOptionsGetter }), items3);
  closure_35 = obj.useRef(onReady);
  closure_36 = obj.useRef(onStateChange);
  const effect = obj.useEffect(() => {
    closure_33.current = false;
    closure_36.current = onStateChange;
    closure_35.current = onReady;
  });
  closure_37 = obj.useRef(false);
  const items4 = [state, tmp20, eventEmitter];
  const effect1 = obj.useEffect(() => {
    const current = ref9.current;
    let tmp2 = !current;
    if (!current) {
      tmp2 = callback2();
    }
    if (tmp2) {
      ref9.current = true;
      const current2 = ref7.current;
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
      current2 = ref8.current;
    }
    if (current2) {
      ref8.current(tmp);
    }
    ref.current = false;
  }, items5);
  const tmpResult4 = require(onReady[14]);
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
  obj5[1] = scheduleUpdate(require(onReady[21]).EnsureSingleNavigator, { children: scheduleUpdate(require(onReady[22]).ThemeProvider, { value: theme, children }) });
  obj4[1] = scheduleUpdate(require(onReady[20]).DeprecatedNavigationInChildContext.Provider, obj5);
  obj2[1] = scheduleUpdate(require(onReady[19]).UnhandledActionContext.Provider, obj4);
  obj1[1] = scheduleUpdate(require(onReady[18]).ConsumedParamsContext.Provider, obj2);
  obj[1] = scheduleUpdate(require(onReady[3]).NavigationStateContext.Provider, obj1);
  obj[1] = scheduleUpdate(require(onReady[17]).NavigationBuilderContext.Provider, obj);
  obj3[1] = scheduleUpdate(require(onReady[16]).NavigationContainerRefContext.Provider, obj);
  return scheduleUpdate(require(onReady[15]).NavigationIndependentTreeContext.Provider, obj3);
});