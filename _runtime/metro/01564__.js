// === Module 1564: ? ===

// Module 1564
import Fragment from "Fragment" /* 21 */;
import _createClass from "_createClass" /* 1494 */;
import deepFreeze2 from "deepFreeze" /* 1511 */;
import useLatestCallbackDefault from "useLatestCallback" /* 1512 */;
import _mod1532 from "module_1532" /* 1532 */;
import Screen from "Screen" /* 1537 */;
import Group from "Group" /* 1538 */;
import _mod1554 from "module_1554" /* 1554 */;
import react2 from "react" /* 1556 */;
import react3 from "react" /* 1559 */;
import equalDefault from "equal" /* 1566 */;
import NavigationStateListenerProvider2 from "NavigationStateListenerProvider" /* 1582 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault, navigation;

let closure_3 = ["children", "layout", "screenOptions", "screenLayout", "screenListeners", "UNSTABLE_router"];
const jsx = Fragment.jsx;
const PrivateValueStore = _createClass.PrivateValueStore;
function isNavigationState(state) {
  let isArray = null != state && typeof state === "object" && "routes" in state;
  if (isArray) {
    const _Array = Array;
    isArray = Array.isArray(state.routes);
  }
  return isArray;
}
function getRouteConfigsFromChildren(children) {
  let layout;
  let options;
  const f84402 = function(arr, type) {
    let combined;
    if (react.isValidElement(type)) {
      if (type.type === Screen.Screen) {
        if (typeof type.props === "object") {
          if (null !== type.props) {
            if (typeof type.props.name === "string") {
              if ("" !== type.props.name) {
                if (undefined !== type.props.navigationKey) {
                  const _Error3 = Error;
                  const _JSON3 = JSON;
                  const _HermesInternal4 = HermesInternal;
                  const self3 = this;
                  const self4 = this;
                  const error = new Error("Got an invalid 'navigationKey' prop (" + JSON.stringify(type.props.navigationKey) + ") for the screen '" + type.props.name + "'. It must be a non-empty string or 'undefined'.");
                  throw error;
                }
                const obj2 = { keys: items, options, layout, props: type.props };
                items = [];
                items[HermesBuiltin.arraySpread(items, items, 0)] = type.props.navigationKey;
                arr = arr.push(obj2);
                return arr;
              }
            }
            const _Error4 = Error;
            const _JSON4 = JSON;
            const _HermesInternal5 = HermesInternal;
            const self5 = this;
            const self6 = this;
            const error1 = new Error("Got an invalid name (" + JSON.stringify(type.props.name) + ") for the screen. It must be a non-empty string.");
            throw error1;
          }
        }
        const _Error5 = Error;
        const self7 = this;
        const self8 = this;
        const error2 = new Error("Got an invalid element for screen.");
        throw error2;
      } else {
        const tmp5 = type.type === react.Fragment || type.type === Group.Group;
        if (tmp5) {
          let items4;
          const navigationKey = type.props.navigationKey;
          if (undefined !== navigationKey) {
            const _Error2 = Error;
            const _JSON2 = JSON;
            const _HermesInternal3 = HermesInternal;
            const self = this;
            const self2 = this;
            const error3 = new Error("Got an invalid 'navigationKey' prop (" + JSON.stringify(type.props.navigationKey) + ") for the group. It must be a non-empty string or 'undefined'.");
            throw error3;
          }
          const push = arr.push;
          const children = type.props.children;
          if (null != type.props.navigationKey) {
            const items1 = [];
            items1[HermesBuiltin.arraySpread(items1, items, 0)] = type.props.navigationKey;
            items4 = items1;
          } else {
            items4 = items;
          }
          if (type.type !== Group.Group) {
            let items3 = options;
          } else if (null != options) {
            const items2 = [];
            items2[HermesBuiltin.arraySpread(items2, options, 0)] = type.props.screenOptions;
            items3 = items2;
          } else {
            items3 = [type.props.screenOptions];
          }
          if (typeof type.props.screenLayout === "function") {
            let screenLayout = type.props.screenLayout;
          } else {
            screenLayout = layout;
          }
          if (typeof getRouteConfigsFromChildren === "function") {
            if (items4 === undefined) {
              items4 = [];
            }
            const Children = react.Children;
            const items5 = [];
            const toArrayResult = Children.toArray(children);
            HermesBuiltin.arraySpread(items5, toArrayResult.reduce(f84402, []), 0);
            HermesBuiltin.apply(push, items5, arr);
            return arr;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
    }
    const _Error = Error;
    if (react.isValidElement(type)) {
      let name;
      if (typeof type.type === "string") {
        name = type.type;
      } else {
        type = type.type;
        if (type != null) {
          name = type.name;
        }
      }
      let str2 = "";
      if (null != type.props) {
        str2 = "";
        if (typeof type.props === "object") {
          str2 = "";
          if ("name" in type.props) {
            const props = type.props;
            let name1;
            if (props != null) {
              name1 = props.name;
            }
            str2 = "";
            if (name1) {
              const _HermesInternal = HermesInternal;
              str2 = " for the screen '" + type.props.name + "'";
            }
          }
        }
      }
      const _HermesInternal2 = HermesInternal;
      combined = "'" + name + "'" + str2;
    } else if (typeof type === "object") {
      const _JSON = JSON;
      combined = JSON.stringify(type);
    } else {
      const _String = String;
      const _HermesInternal6 = HermesInternal;
      combined = "'" + String(type) + "'";
    }
    const _Error1 = new _Error("A navigator can only contain 'Screen', 'Group' or 'React.Fragment' as its direct children (found " + combined + "). To render this component in the navigator, pass it in the 'component' prop to 'Screen'.");
    throw _Error1;
  };
  let items = [];
  let c1;
  let c2;
  let Children = react.Children;
  let toArrayResult = Children.toArray(children);
  return toArrayResult.reduce(f84402, []);
}
function getStateFromParams(params1, type) {
  let items;
  let state;
  if (params1 != null) {
    state = params1.state;
  }
  if (typeof isNavigationState === "function") {
    let isArray = null != state && typeof state === "object" && "routes" in state;
    if (isArray) {
      const _Array = Array;
      isArray = Array.isArray(state.routes);
    }
    if (isArray) {
      return state;
    } else {
      let screen;
      if (params1 != null) {
        screen = params1.screen;
      }
      if (typeof screen === "string") {
        let initial;
        if (params1 != null) {
          initial = params1.initial;
        }
        if (false !== initial) {
          const obj = { routes: items };
          const obj3 = { name: null, params: null, path: null };
          ({ screen: obj2.name, params: obj2.params, path: obj2.path } = params1);
          items = [obj3];
          return obj;
        }
      }
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}

export const useNavigationBuilder = function useNavigationBuilder(StackRouter, UNSTABLE_routeNamesChangeBehavior) {
  let addKeyedListener;
  let addListener;
  let children;
  let closure_2;
  let closure_21;
  let closure_22;
  let closure_23;
  let closure_24;
  let closure_25;
  let closure_33;
  let hasItem;
  let initialRouteName;
  let key;
  let key1;
  let keyedListeners;
  let listeners;
  let obj13;
  let obj9;
  let resetResult;
  let screenLayout;
  let screenOptions;
  let tmp26Result25;
  let tmp34;
  let tmp35;
  let tmp41;
  let tmp42;
  _require = StackRouter;
  importDefault = UNSTABLE_routeNamesChangeBehavior;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("module_1565");
  dependencyMap = obj.useRegisterNavigator();
  const context = react.useContext(require("module_1531").NavigationRouteContext);
  const context1 = react.useContext(require("react").ConsumedParamsContext);
  let params;
  if (context != null) {
    params = context.params;
  }
  let tmp5 = typeof params === "object";
  if (typeof params === "object") {
    tmp5 = null != context.params;
  }
  if (tmp5) {
    hasItem = undefined;
    if (context1 != null) {
      hasItem = context1.has(context.params);
    }
    tmp5 = hasItem;
  }
  hasItem = tmp5;
  ({ layout: react, screenListeners: jsx, UNSTABLE_router: isNavigationState } = UNSTABLE_routeNamesChangeBehavior);
  ({ children, screenOptions, screenLayout } = UNSTABLE_routeNamesChangeBehavior);
  getRouteConfigsFromChildren = hasItem(UNSTABLE_routeNamesChangeBehavior, context);
  let arr = getRouteConfigsFromChildren(children);
  const tmpResult = tmp(1513);
  const lazyValue = tmpResult.useLazyValue(function() {
    if (null != initialRouteName.initialRouteName) {
      if (arr.every((props) => props.props.name !== initialRouteName.initialRouteName)) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const error = new Error("Couldn't find a screen named '" + initialRouteName.initialRouteName + "' to use as 'initialRouteName'.");
        throw error;
      }
    }
    const tmp3 = StackRouter(initialRouteName);
    if (null != isNavigationState) {
      const obj = {};
      const tmp4 = isNavigationState(tmp3);
      const merged = Object.assign(tmp3);
      const merged1 = Object.assign(tmp4);
      return obj;
    } else {
      return tmp3;
    }
  });
  let mapped = arr.map((props) => props.props.name);
  if (mapped.length) {
    let obj2 = {};
    let obj3 = {};
    let obj4 = {};
    const obj5 = {};
    const iter = arr[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp15 = nextResult;
      let name = nextResult.props.name;
      let tmp16 = name;
      if (name in obj2) {
        let _Error2 = Error;
        let _HermesInternal = HermesInternal;
        let str2 = "')";
        let str3 = "A navigator cannot contain multiple 'Screen' components with the same name (found duplicate screen named '";
        let self3 = this;
        let self4 = this;
        let error = new Error("A navigator cannot contain multiple 'Screen' components with the same name (found duplicate screen named '" + tmp16 + "')");
        throw error;
      } else {
        let tmp18 = nextResult;
        obj2[tmp16] = tmp15;
        obj3[tmp16] = tmp15.keys;
        obj4[tmp16] = tmp15.props.initialParams;
        let _Object = Object;
        let obj6 = {};
        obj6[tmp16] = tmp15.props.getId;
        let merged = Object.assign(obj5, obj6);
        continue;
      }
    }
    let items = [lazyValue.type];
    const callback = react.useCallback((type) => undefined === type.type || type.type === lazyValue.type, items);
    let items1 = [callback];
    const callback1 = react.useCallback((stale) => {
      const tmp = undefined !== stale && false === stale.stale && callback(stale);
      return tmp;
    }, items1);
    let items2 = [mapped];
    const callback2 = react.useCallback((routes) => {
      routes = routes.routes;
      return routes.every((name) => !mapped.includes(name.name));
    }, items2);
    const tmp26 = _require;
    const context2 = react.useContext(require("react").NavigationStateContext);
    let state = context2.state;
    ({ getState: closure_21, setState: closure_22, setKey: closure_23, getKey: closure_24, getIsInitial: closure_25 } = context2);
    const context3 = react.useContext(require("react").NavigationBuilderContext);
    const getIsStateEmitted = context3.getIsStateEmitted;
    const flag = false;
    const onEmitEvent = context3.onEmitEvent;
    react.useRef(false);
    const ref2 = react.useRef(undefined);
    const tmp31 = useLatestCallbackDefault((current) => {
      if (ref.current) {
        ref2.current = current;
      } else {
        closure_22(current);
      }
    });
    let closure_29 = tmp31;
    let items3 = [state, lazyValue, callback];
    const tmp33 = context1(react.useMemo(() => {
      let initialState;
      let items3;
      if (ref.current) {
        if (ref2.current) {
          if (callback(ref2.current)) {
            const items = [undefined, , , ];
            if (callback1(ref2.current)) {
              current = ref2.current;
            } else {
              obj2 = { routeNames: mapped, routeParamList: obj4, routeGetIdList: obj5 };
              current = lazyValue.getRehydratedState(ref2.current, obj2);
            }
            items[1] = current;
            items[2] = false;
            items[3] = undefined;
            return items;
          }
        }
      }
      const reduced = mapped.reduce((acc, item) => {
        let params2;
        let tmp5;
        const initialParams = obj2[item].props.initialParams;
        state = undefined;
        if (context != null) {
          const params = context.params;
          if (params != null) {
            state = params.state;
          }
        }
        if (null == state) {
          let initial;
          if (context != null) {
            const params3 = context.params;
            if (params3 != null) {
              initial = params3.initial;
            }
          }
          if (false !== initial) {
            let screen;
            if (context != null) {
              const params4 = context.params;
              if (params4 != null) {
                screen = params4.screen;
              }
            }
            if (screen === item) {
              params2 = context.params.params;
            }
          }
        }
        if (undefined !== initialParams) {
          const obj = {};
          const merged = Object.assign(initialParams);
          const merged1 = Object.assign(params2);
          tmp5 = obj;
        }
        acc[item] = tmp5;
        return acc;
      }, {});
      let tmp5 = state;
      if (undefined === state) {
        state = undefined;
        if (context != null) {
          let params = context.params;
          if (params != null) {
            state = params.state;
          }
        }
        if (null == state) {
          let screen;
          if (context != null) {
            let params2 = context.params;
            if (params2 != null) {
              screen = params2.screen;
            }
          }
          if (typeof screen !== "string") {
            if (!hasItem) {
              const items1 = [undefined, , , ];
              let obj = { routeNames: mapped, routeParamList: reduced, routeGetIdList: obj5 };
              items1[1] = lazyValue.getInitialState(obj);
              items1[2] = true;
              items1[3] = undefined;
              return items1;
            }
          } else {
            let initial;
            if (context != null) {
              let params3 = context.params;
              if (params3 != null) {
                initial = params3.initial;
              }
            }
          }
        }
      }
      let tmp15;
      if (!hasItem) {
        let params1;
        if (context != null) {
          params1 = context.params;
        }
        tmp15 = params1;
      }
      let tmp18;
      if (tmp15) {
        tmp18 = getStateFromParams(tmp15, lazyValue.type);
      }
      if (tmp18 == null) {
        tmp18 = tmp5;
      }
      if (null == tmp18) {
        obj3 = { routeNames: mapped, routeParamList: reduced, routeGetIdList: obj5 };
        initialState = lazyValue.getInitialState(obj3);
      } else {
        obj4 = { routeNames: mapped, routeParamList: reduced, routeGetIdList: obj5 };
        initialState = lazyValue.getRehydratedState(tmp18, obj4);
      }
      if (null != tmp18) {
        if (callback(tmp18)) {
          if ("lastUnhandled" === UNSTABLE_routeNamesChangeBehavior.UNSTABLE_routeNamesChangeBehavior) {
            if (callback2(tmp18)) {
              const items2 = [tmp18, initialState, true, tmp15];
              items3 = items2;
            }
            return items3;
          }
        }
      }
      items3 = [undefined, initialState, false, ];
      let tmp29;
      if (!callback1(tmp5)) {
        tmp29 = tmp15;
      }
      items3[3] = tmp29;
    }, items3), 4);
    [tmp34, tmp35] = tmp33;
    let closure_30 = tmp35;
    const tmp37 = tmp33[3];
    const ref = react.useRef(obj3);
    const insertionEffect = react.useInsertionEffect(() => {
      ref.current = obj3;
    });
    let current = ref.current;
    const _Object2 = Object;
    let keys = Object.keys(obj3);
    let found = keys.filter((item) => {
      let tmp3 = null != tmp && null != tmp2;
      if (tmp3) {
        const obj = _mod1554;
        tmp3 = !obj.isArrayEqual(tmp, tmp2);
      }
      return tmp3;
    });
    [tmp41, tmp42] = context1(react.useState(tmp34), 2);
    context1(react.useState(tmp34), 2);
    const tmp43 = "lastUnhandled" === UNSTABLE_routeNamesChangeBehavior.UNSTABLE_routeNamesChangeBehavior && tmp34 && tmp41 !== tmp34;
    if (tmp43) {
      tmp42(tmp34);
    }
    let rehydratedState = tmp35;
    let stateForRouteNamesChange = tmp35;
    let c36 = false;
    if (null != tmp41) {
      if (!callback(tmp41)) {
        tmp42(undefined);
        rehydratedState = tmp35;
      }
      let params1;
      if (context != null) {
        params1 = context.params;
      }
      let c37 = tmp53;
      let params2;
      if (context != null) {
        params2 = context.params;
      }
      let tmp55 = tmp53;
      let tmp56 = rehydratedState;
      if (params2) {
        tmp55 = tmp53;
        tmp56 = rehydratedState;
        if (params1 !== tmp37) {
          let flag4;
          let tmp60;
          if (isNavigationState(context.params.state)) {
            if (!tmp5) {
              c37 = true;
              const tmp59 = arr(context.params, lazyValue.type);
              flag4 = true;
              if (null != tmp59) {
                if ("lastUnhandled" === UNSTABLE_routeNamesChangeBehavior.UNSTABLE_routeNamesChangeBehavior) {
                  if (callback2(tmp59)) {
                    if (tmp59 !== tmp41) {
                      tmp42(tmp59);
                    }
                  }
                  tmp60 = resetResult;
                  flag4 = true;
                }
                const CommonActions = tmp26(1495).CommonActions;
                resetResult = CommonActions.reset(tmp59);
              }
            }
            let stateForAction = null;
            if (tmp60) {
              const obj7 = { routeNames: mapped, routeParamList: obj4, routeGetIdList: obj5 };
              stateForAction = lazyValue.getStateForAction(rehydratedState, tmp60, obj7);
            }
            if (null !== stateForAction) {
              const obj8 = { routeNames: mapped, routeParamList: obj4, routeGetIdList: obj5 };
              rehydratedState = lazyValue.getRehydratedState(stateForAction, obj8);
            }
            stateForRouteNamesChange = rehydratedState;
            tmp56 = rehydratedState;
            tmp55 = flag4;
          }
          flag4 = tmp53;
          if (typeof context.params.screen === "string") {
            if (false !== context.params.initial) {
              flag4 = tmp53;
            }
            c37 = true;
            if ("lastUnhandled" === UNSTABLE_routeNamesChangeBehavior.UNSTABLE_routeNamesChangeBehavior) {
              if (!mapped.includes(context.params.screen)) {
                const tmp64 = arr(context.params, lazyValue.type);
                flag4 = true;
                const tmp65 = null == tmp64 || equalDefault(tmp64, tmp41);
                if (!tmp65) {
                  tmp42(tmp64);
                  flag4 = true;
                }
              }
            }
            const action = { type: "NAVIGATE", payload: obj9 };
            tmp60 = action;
            flag4 = true;
            obj9 = { name: context.params.screen, params: context.params.params, path: context.params.path, merge: context.params.merge, pop: context.params.pop };
          }
        }
      }
      let items4 = [context1, tmp55, ];
      let params3;
      const useEffect = react.useEffect;
      if (context != null) {
        params3 = context.params;
      }
      items4[2] = params3;
      const effect = useEffect(() => {
        let tmp = context1 && c37;
        if (tmp) {
          let params;
          if (context != null) {
            params = context.params;
          }
          tmp = typeof params === "object";
        }
        if (tmp) {
          tmp = null != context.params;
        }
        if (tmp) {
          const result = context1.set(context.params, true);
        }
      }, items4);
      let closure_38 = tmp35 !== tmp56;
      const tmp26Result = tmp26(1567);
      const scheduleUpdate = tmp26Result.useScheduleUpdate(() => {
        if (closure_38) {
          closure_29(stateForRouteNamesChange);
          if (c36) {
            tmp42(undefined);
          }
        }
      });
      rehydratedState = tmp56;
      const effect1 = react.useEffect(() => {
        ref2.current = rehydratedState;
      });
      const ref3 = react.useRef(null);
      const effect2 = react.useEffect(() => {
        ref.current = false;
        let tmp = closure_23(closure_2);
        const tmp2 = closure_25() && !getIsStateEmitted() || ref3.current === rehydratedState;
        if (!tmp2) {
          closure_29(rehydratedState);
          ref3.current = rehydratedState;
        }
        return () => {
          const tmp = undefined !== closure_1_21() && closure_1_24() === closure_1_2;
          if (tmp) {
            closure_1_22(undefined);
            ref.current = true;
          }
          ref3.current = null;
        };
      }, []);
      const tmp73 = useLatestCallbackDefault(() => {
        let tmp = closure_21();
        const deepFreeze = deepFreeze2.deepFreeze;
        deepFreeze2;
        if (!callback1(tmp)) {
          tmp = closure_30;
        }
        return deepFreeze(tmp);
      });
      const tmp26Result14 = tmp26(1518);
      const eventEmitter = tmp26Result14.useEventEmitter((target) => {
        let tmp2;
        let tmp3;
        const items = [];
        const routes = rehydratedState.routes;
        if (target.target) {
          let found = routes.find((key) => key.key === target.target);
          let route = found;
          let name;
          if (found != null) {
            name = found.name;
          }
          tmp3 = found;
          if (name) {
            arr = items.push(found.name);
            tmp3 = found;
          }
        } else {
          route = routes[tmp2.index];
          const push = items.push;
          let _Object = Object;
          let keys = Object.keys(obj2);
          const items1 = [];
          HermesBuiltin.arraySpread(items1, keys.filter((item) => {
            let name;
            if (route != null) {
              name = route.name;
            }
            return name === item;
          }), 0);
          HermesBuiltin.apply(push, items1, items);
        }
        if (null != tmp3) {
          if (null != closure_7) {
            navigation = descriptors[tmp3.key].navigation;
            const items2 = [];
            const concat = items2.concat;
            const items3 = [tmp26];
            HermesBuiltin.arraySpread(items3, items.map((item) => obj2[item].props.listeners), 1);
            const items4 = [];
            HermesBuiltin.arraySpread(items4, items3.map((fn) => {
              let tmp = fn;
              if (typeof fn === "function") {
                const obj = { route, navigation };
                tmp = fn(obj);
              }
              const type = tmp;
              mapped = undefined;
              if (tmp) {
                const _Object = Object;
                const keys = Object.keys(tmp);
                const found = keys.filter((item) => item === type.type);
                mapped = found.map((item) => {
                  let tmp2;
                  if (type != null) {
                    tmp2 = tmp[item];
                  }
                  return tmp2;
                });
              }
              return mapped;
            }), 0);
            const applyResult1 = HermesBuiltin.apply(concat, items4, items2);
            const found1 = applyResult1.filter((item, index, arr) => {
              const tmp = item && arr.lastIndexOf(item) === index;
              return tmp;
            });
            const item = found1.forEach((fn) => {
              let tmp;
              if (fn != null) {
                tmp = fn(target);
              }
              return tmp;
            });
          }
        }
      }, onEmitEvent);
      const obj11 = { state: tmp56, emitter: eventEmitter };
      const tmp26Result15 = tmp26(1569);
      const focusEvents = tmp26Result15.useFocusEvents(obj11);
      const items5 = [eventEmitter, tmp56];
      const effect3 = react.useEffect(() => {
        const obj = { type: "state", data: obj2 };
        obj2 = { state: rehydratedState };
        eventEmitter.emit(obj);
      }, items5);
      const tmp26Result16 = tmp26(1514);
      const childListeners = tmp26Result16.useChildListeners();
      ({ listeners, addListener } = childListeners);
      const tmp26Result17 = tmp26(1515);
      const keyedChildListeners = tmp26Result17.useKeyedChildListeners();
      ({ keyedListeners, addKeyedListener } = keyedChildListeners);
      const obj12 = { router: lazyValue, getState: tmp73, setState: tmp31, key, actionListeners: listeners.action, beforeRemoveListeners: keyedListeners.beforeRemove, routerConfigOptions: obj13, emitter: eventEmitter };
      key = undefined;
      const useOnAction = tmp26(1570).useOnAction;
      tmp26(1570);
      if (context != null) {
        key = context.key;
      }
      obj13 = { routeNames: mapped, routeParamList: obj4, routeGetIdList: obj5 };
      const onAction = useOnAction(obj12);
      const obj14 = { router: lazyValue, key: key1, getState: tmp73, setState: tmp31 };
      key1 = undefined;
      const useOnRouteFocus = tmp26(1572).useOnRouteFocus;
      tmp26(1572);
      if (context != null) {
        key1 = context.key;
      }
      const onRouteFocus = useOnRouteFocus(obj14);
      let closure_41 = react.useContext(tmp26(1523).UnhandledActionContext);
      const obj15 = {
        id: UNSTABLE_routeNamesChangeBehavior.id,
        onAction,
        onUnhandledAction: useLatestCallbackDefault((type) => {
              let items;
              let params;
              let path;
              if ("lastUnhandled" === UNSTABLE_routeNamesChangeBehavior.UNSTABLE_routeNamesChangeBehavior) {
                if ("NAVIGATE" === type.type) {
                  if (null != type.payload) {
                    if ("name" in type.payload) {
                      if (typeof type.payload.name === "string") {
                        if (!mapped.includes(type.payload.name)) {
                          const obj = { name: type.payload.name, params, path };
                          params = undefined;
                          if ("params" in type.payload) {
                            if (typeof type.payload.params === "object") {
                              if (null !== type.payload.params) {
                                params = type.payload.params;
                              }
                            }
                          }
                          path = undefined;
                          if ("path" in type.payload) {
                            if (typeof type.payload.path === "string") {
                              path = type.payload.path;
                            }
                          }
                          obj2 = { routes: items };
                          items = [obj];
                          tmp42(obj2);
                        }
                      }
                    }
                  }
                }
              }
              if (closure_41 != null) {
                tmp5(type);
              }
            }),
        getState: tmp73,
        state: tmp56,
        emitter: eventEmitter,
        router: lazyValue
      };
      const tmp26Result20 = tmp26(1573);
      const navigationHelpers = tmp26Result20.useNavigationHelpers(obj15);
      const obj16 = { navigation: navigationHelpers, focusedListeners: listeners.focus };
      const tmp26Result21 = tmp26(1574);
      const focusedListenersChildrenAdapter = tmp26Result21.useFocusedListenersChildrenAdapter(obj16);
      const obj17 = { getState: tmp73, getStateListeners: keyedListeners.getState };
      const tmp26Result22 = tmp26(1575);
      const onGetState = tmp26Result22.useOnGetState(obj17);
      const obj18 = { state: tmp56, screens: obj2, navigation: navigationHelpers, screenOptions, screenLayout, onAction, getState: tmp73, setState: tmp31, onRouteFocus, addListener, addKeyedListener, router: lazyValue, emitter: eventEmitter };
      const tmp26Result23 = tmp26(1576);
      const descriptors1 = tmp26Result23.useDescriptors(obj18);
      const descriptors = descriptors1.descriptors;
      const describe = descriptors1.describe;
      const obj19 = { state: tmp56, navigation: navigationHelpers, descriptors };
      const tmp26Result24 = tmp26(1580);
      const currentRender = tmp26Result24.useCurrentRender(obj19);
      const obj20 = {
        state: tmp56,
        navigation: navigationHelpers,
        describe,
        descriptors,
        NavigationContent: tmp26Result25.useComponent((children) => {
              if (null != react) {
                const obj = { state: rehydratedState, descriptors, navigation: navigationHelpers, children };
                tmp(obj);
              }
              const Provider = react3.NavigationMetaContext.Provider;
              const Provider2 = react2.NavigationHelpersContext.Provider;
              const NavigationStateListenerProvider = NavigationStateListenerProvider2.NavigationStateListenerProvider;
              const Provider3 = _mod1532.FocusedRouteKeyContext.Provider;
              return <Provider value="Array">{0}</Provider>;
            })
      };
      tmp26Result25 = tmp26(1581);
      return obj20;
    }
    let everyResult;
    if (tmp41 != null) {
      let routes = tmp41.routes;
      everyResult = routes.every((name) => mapped.includes(name.name));
    }
    if (everyResult) {
      let everyResult1;
      if (tmp35 != null) {
        const routes2 = tmp35.routes;
        everyResult1 = routes2.every((name) => !mapped.includes(name.name));
      }
      if (everyResult1) {
        c36 = true;
        const obj21 = { routeNames: mapped, routeParamList: obj4, routeGetIdList: obj5 };
        const rehydratedState1 = lazyValue.getRehydratedState(tmp41, obj21);
        stateForRouteNamesChange = rehydratedState1;
        rehydratedState = rehydratedState1;
      }
    }
    rehydratedState = tmp35;
    const tmp26Result26 = tmp26(1554);
    const tmp49 = tmp26Result26.isArrayEqual(tmp35.routeNames, mapped) && 0 === found.length;
    if (!tmp49) {
      const obj22 = { routeNames: mapped, routeParamList: obj4, routeGetIdList: obj5, routeKeyChanges: found };
      stateForRouteNamesChange = lazyValue.getStateForRouteNamesChange(tmp35, obj22);
      rehydratedState = stateForRouteNamesChange;
    }
  } else {
    let _Error = Error;
    let self = this;
    let self2 = this;
    const error1 = new Error("Couldn't find any screens for the navigator. Have you defined any screens as its children?");
    throw error1;
  }
};