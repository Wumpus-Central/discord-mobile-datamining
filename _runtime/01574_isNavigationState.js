// _runtime/01574_isNavigationState.js
import useEffectDefault from "01522_useEffect.js";
import closure_4 from "metro/00032__slicedToArray.js";
import closure_5 from "metro/00109__objectWithoutProperties.js";
import closure_6 from "00019_noop.js";
import { jsx } from "react/00021_jsxProd.js";
import { PrivateValueStore } from "01504_PrivateValueStore.js";
import { useLazyValue } from "01523_useLazyValue.js";
import { NavigationBuilderContext } from "01530_NavigationBuilderContext.js";
import { ConsumedParamsContext } from "01532_ConsumedParamsContext.js";
import { context } from "01541_context.js";
import { isArrayEqual } from "01564_isArrayEqual.js";
import { useRegisterNavigator } from "01575_useRegisterNavigator.js";

const require = arg1;
let closure_3 = ["children", "layout", "screenOptions", "screenLayout", "screenListeners", "UNSTABLE_router"];
function isNavigationState(state) {
  let isArray = null != state && typeof state === "object";
  if (isArray) {
    isArray = "routes" in state;
  }
  if (isArray) {
    const _Array = Array;
    isArray = Array.isArray(state.routes);
  }
  return isArray;
}
function getRouteConfigsFromChildren(arg0) {
  let items;
  items = [];
  c1 = undefined;
  c2 = undefined;
  const Children = React.Children;
  return Children.toArray(arg0).reduce((arr, type) => {
    let obj = closure_1_6;
    if (closure_1_6.isValidElement(type)) {
      if (type.type === closure_1_0(closure_1_2[5]).Screen) {
        if (typeof type.props === "object") {
          if (null !== type.props) {
            if (typeof type.props.name === "string") {
              if ("" !== type.props.name) {
                if (undefined !== type.props.navigationKey) {
                  let _Error2 = Error;
                  let _JSON3 = JSON;
                  let _HermesInternal4 = HermesInternal;
                  let error = new Error("Got an invalid 'navigationKey' prop (" + JSON.stringify(type.props.navigationKey) + ") for the screen '" + type.props.name + "'. It must be a non-empty string or 'undefined'.");
                  throw error;
                }
                obj = { keys: null, options: null, layout: null, props: null };
                let items = [];
                items[HermesBuiltin.arraySpread(items4, 0)] = type.props.navigationKey;
                obj[0] = items;
                obj[1] = items3;
                obj[2] = screenLayout;
                obj[3] = type.props;
                arr.push(obj);
                return arr;
              }
            }
            let _Error3 = Error;
            let _JSON4 = JSON;
            let _HermesInternal5 = HermesInternal;
            let error1 = new Error("Got an invalid name (" + JSON.stringify(type.props.name) + ") for the screen. It must be a non-empty string.");
            throw error1;
          }
        }
        let _Error4 = Error;
        let error2 = new Error("Got an invalid element for screen.");
        throw error2;
      } else {
        let tmp4 = type.type === obj.Fragment;
        if (!tmp4) {
          tmp4 = type.type === tmp2(tmp3[6]).Group;
        }
        if (tmp4) {
          let navigationKey = type.props.navigationKey;
          if (undefined !== navigationKey) {
            let _Error = Error;
            let _JSON2 = JSON;
            let _HermesInternal3 = HermesInternal;
            let error3 = new Error("Got an invalid 'navigationKey' prop (" + JSON.stringify(type.props.navigationKey) + ") for the group. It must be a non-empty string or 'undefined'.");
            throw error3;
          }
          let push = arr.push;
          if (null != type.props.navigationKey) {
            let items1 = [];
            items1[HermesBuiltin.arraySpread(items4, 0)] = type.props.navigationKey;
            items4 = items1;
          }
          if (type.type === tmp2(tmp3[6]).Group) {
            if (null != items3) {
              let items2 = [];
              items2[HermesBuiltin.arraySpread(tmp13, 0)] = type.props.screenOptions;
              items3 = items2;
            } else {
              items3 = [type.props.screenOptions];
            }
          }
          if (typeof type.props.screenLayout === "function") {
            screenLayout = type.props.screenLayout;
          }
          if (typeof closure_1_9 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          if (items4 === undefined) {
            items4 = [];
          }
          let Children = obj.Children;
          let items5 = [];
          HermesBuiltin.arraySpread(Children.toArray(type.props.children).reduce((arr, type) => {
            let obj = closure_1_6;
            if (closure_1_6.isValidElement(type)) {
              if (type.type === closure_1_0(closure_1_2[5]).Screen) {
                if (typeof type.props === "object") {
                  if (null !== type.props) {
                    if (typeof type.props.name === "string") {
                      if ("" !== type.props.name) {
                        if (undefined !== type.props.navigationKey) {
                          let _Error2 = Error;
                          let _JSON3 = JSON;
                          let _HermesInternal4 = HermesInternal;
                          let error = new Error("Got an invalid 'navigationKey' prop (" + JSON.stringify(type.props.navigationKey) + ") for the screen '" + type.props.name + "'. It must be a non-empty string or 'undefined'.");
                          throw error;
                        }
                        obj = { keys: null, options: null, layout: null, props: null };
                        let items = [];
                        items[HermesBuiltin.arraySpread(items4, 0)] = type.props.navigationKey;
                        obj[0] = items;
                        obj[1] = items3;
                        obj[2] = screenLayout;
                        obj[3] = type.props;
                        arr.push(obj);
                        return arr;
                      }
                    }
                    let _Error3 = Error;
                    let _JSON4 = JSON;
                    let _HermesInternal5 = HermesInternal;
                    let error1 = new Error("Got an invalid name (" + JSON.stringify(type.props.name) + ") for the screen. It must be a non-empty string.");
                    throw error1;
                  }
                }
                let _Error4 = Error;
                let error2 = new Error("Got an invalid element for screen.");
                throw error2;
              } else {
                let tmp4 = type.type === obj.Fragment;
                if (!tmp4) {
                  tmp4 = type.type === tmp2(tmp3[6]).Group;
                }
                if (tmp4) {
                  let navigationKey = type.props.navigationKey;
                  if (undefined !== navigationKey) {
                    let _Error = Error;
                    let _JSON2 = JSON;
                    let _HermesInternal3 = HermesInternal;
                    let error3 = new Error("Got an invalid 'navigationKey' prop (" + JSON.stringify(type.props.navigationKey) + ") for the group. It must be a non-empty string or 'undefined'.");
                    throw error3;
                  }
                  let push = arr.push;
                  if (null != type.props.navigationKey) {
                    let items1 = [];
                    items1[HermesBuiltin.arraySpread(items4, 0)] = type.props.navigationKey;
                    items4 = items1;
                  }
                  if (type.type === tmp2(tmp3[6]).Group) {
                    if (null != items3) {
                      let items2 = [];
                      items2[HermesBuiltin.arraySpread(tmp13, 0)] = type.props.screenOptions;
                      items3 = items2;
                    } else {
                      items3 = [type.props.screenOptions];
                    }
                  }
                  if (typeof type.props.screenLayout === "function") {
                    screenLayout = type.props.screenLayout;
                  }
                  if (typeof closure_1_9 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  if (items4 === undefined) {
                    items4 = [];
                  }
                  let Children = obj.Children;
                  let items5 = [];
                  HermesBuiltin.arraySpread(Children.toArray(type.props.children).reduce((arr, type) => {
                    let obj = closure_1_6;
                    if (closure_1_6.isValidElement(type)) {
                      if (type.type === closure_1_0(closure_1_2[5]).Screen) {
                        if (typeof type.props === "object") {
                          if (null !== type.props) {
                            if (typeof type.props.name === "string") {
                              if ("" !== type.props.name) {
                                if (undefined !== type.props.navigationKey) {
                                  let _Error2 = Error;
                                  let _JSON3 = JSON;
                                  let _HermesInternal4 = HermesInternal;
                                  let error = new Error("Got an invalid 'navigationKey' prop (" + JSON.stringify(type.props.navigationKey) + ") for the screen '" + type.props.name + "'. It must be a non-empty string or 'undefined'.");
                                  throw error;
                                }
                                obj = { keys: null, options: null, layout: null, props: null };
                                let items = [];
                                items[HermesBuiltin.arraySpread(items4, 0)] = type.props.navigationKey;
                                obj[0] = items;
                                obj[1] = items3;
                                obj[2] = screenLayout;
                                obj[3] = type.props;
                                arr.push(obj);
                                return arr;
                              }
                            }
                            let _Error3 = Error;
                            let _JSON4 = JSON;
                            let _HermesInternal5 = HermesInternal;
                            let error1 = new Error("Got an invalid name (" + JSON.stringify(type.props.name) + ") for the screen. It must be a non-empty string.");
                            throw error1;
                          }
                        }
                        let _Error4 = Error;
                        let error2 = new Error("Got an invalid element for screen.");
                        throw error2;
                      } else {
                        let tmp4 = type.type === obj.Fragment;
                        if (!tmp4) {
                          tmp4 = type.type === tmp2(tmp3[6]).Group;
                        }
                        if (tmp4) {
                          let navigationKey = type.props.navigationKey;
                          if (undefined !== navigationKey) {
                            let _Error = Error;
                            let _JSON2 = JSON;
                            let _HermesInternal3 = HermesInternal;
                            let error3 = new Error("Got an invalid 'navigationKey' prop (" + JSON.stringify(type.props.navigationKey) + ") for the group. It must be a non-empty string or 'undefined'.");
                            throw error3;
                          }
                          let push = arr.push;
                          if (null != type.props.navigationKey) {
                            let items1 = [];
                            items1[HermesBuiltin.arraySpread(items4, 0)] = type.props.navigationKey;
                            items4 = items1;
                          }
                          if (type.type === tmp2(tmp3[6]).Group) {
                            if (null != items3) {
                              let items2 = [];
                              items2[HermesBuiltin.arraySpread(tmp13, 0)] = type.props.screenOptions;
                              items3 = items2;
                            } else {
                              items3 = [type.props.screenOptions];
                            }
                          }
                          if (typeof type.props.screenLayout === "function") {
                            screenLayout = type.props.screenLayout;
                          }
                          if (typeof closure_1_9 !== "function") {
                            HermesBuiltin.throwTypeError();
                          }
                          if (items4 === undefined) {
                            items4 = [];
                          }
                          let Children = obj.Children;
                          let items5 = [];
                          HermesBuiltin.arraySpread(Children.toArray(type.props.children).reduce((arr, type) => {
                            let obj = closure_1_6;
                            if (closure_1_6.isValidElement(type)) {
                              if (type.type === closure_1_0(closure_1_2[5]).Screen) {
                                if (typeof type.props === "object") {
                                  if (null !== type.props) {
                                    if (typeof type.props.name === "string") {
                                      if ("" !== type.props.name) {
                                        if (undefined !== type.props.navigationKey) {
                                          let _Error2 = Error;
                                          let _JSON3 = JSON;
                                          let _HermesInternal4 = HermesInternal;
                                          let error = new Error("Got an invalid 'navigationKey' prop (" + JSON.stringify(type.props.navigationKey) + ") for the screen '" + type.props.name + "'. It must be a non-empty string or 'undefined'.");
                                          throw error;
                                        }
                                        obj = { keys: null, options: null, layout: null, props: null };
                                        let items = [];
                                        items[HermesBuiltin.arraySpread(items4, 0)] = type.props.navigationKey;
                                        obj[0] = items;
                                        obj[1] = items3;
                                        obj[2] = screenLayout;
                                        obj[3] = type.props;
                                        arr.push(obj);
                                        return arr;
                                      }
                                    }
                                    let _Error3 = Error;
                                    let _JSON4 = JSON;
                                    let _HermesInternal5 = HermesInternal;
                                    let error1 = new Error("Got an invalid name (" + JSON.stringify(type.props.name) + ") for the screen. It must be a non-empty string.");
                                    throw error1;
                                  }
                                }
                                let _Error4 = Error;
                                let error2 = new Error("Got an invalid element for screen.");
                                throw error2;
                              } else {
                                let tmp4 = type.type === obj.Fragment;
                                if (!tmp4) {
                                  tmp4 = type.type === tmp2(tmp3[6]).Group;
                                }
                                if (tmp4) {
                                  let navigationKey = type.props.navigationKey;
                                  if (undefined !== navigationKey) {
                                    let _Error = Error;
                                    let _JSON2 = JSON;
                                    let _HermesInternal3 = HermesInternal;
                                    let error3 = new Error("Got an invalid 'navigationKey' prop (" + JSON.stringify(type.props.navigationKey) + ") for the group. It must be a non-empty string or 'undefined'.");
                                    throw error3;
                                  }
                                  let push = arr.push;
                                  if (null != type.props.navigationKey) {
                                    let items1 = [];
                                    items1[HermesBuiltin.arraySpread(items4, 0)] = type.props.navigationKey;
                                    items4 = items1;
                                  }
                                  if (type.type === tmp2(tmp3[6]).Group) {
                                    if (null != items3) {
                                      let items2 = [];
                                      items2[HermesBuiltin.arraySpread(tmp13, 0)] = type.props.screenOptions;
                                      items3 = items2;
                                    } else {
                                      items3 = [type.props.screenOptions];
                                    }
                                  }
                                  if (typeof type.props.screenLayout === "function") {
                                    screenLayout = type.props.screenLayout;
                                  }
                                  if (typeof closure_1_9 !== "function") {
                                    HermesBuiltin.throwTypeError();
                                  }
                                  if (items4 === undefined) {
                                    items4 = [];
                                  }
                                  let Children = obj.Children;
                                  let items5 = [];
                                  HermesBuiltin.arraySpread(Children.toArray(type.props.children).reduce(() => { ... }, []), 0);
                                  HermesBuiltin.apply(items5, arr);
                                  return arr;
                                }
                              }
                            }
                            if (obj.isValidElement(type)) {
                              if (typeof type.type === "string") {
                                let name = type.type;
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
                                    let props = type.props;
                                    name = undefined;
                                    if (props != null) {
                                      name = props.name;
                                    }
                                    str2 = "";
                                    if (name) {
                                      let _HermesInternal = HermesInternal;
                                      str2 = " for the screen '" + type.props.name + "'";
                                    }
                                  }
                                }
                              }
                              let _HermesInternal2 = HermesInternal;
                              let combined = "'" + name + "'" + str2;
                            } else if (typeof type === "object") {
                              let _JSON = JSON;
                              combined = JSON.stringify(type);
                            } else {
                              let _String = String;
                              let _HermesInternal6 = HermesInternal;
                              combined = "'" + String(type) + "'";
                            }
                            let error4 = new Error("A navigator can only contain 'Screen', 'Group' or 'React.Fragment' as its direct children (found " + combined + "). To render this component in the navigator, pass it in the 'component' prop to 'Screen'.");
                            throw error4;
                          }, []), 0);
                          HermesBuiltin.apply(items5, arr);
                          return arr;
                        }
                      }
                    }
                    if (obj.isValidElement(type)) {
                      if (typeof type.type === "string") {
                        let name = type.type;
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
                            let props = type.props;
                            name = undefined;
                            if (props != null) {
                              name = props.name;
                            }
                            str2 = "";
                            if (name) {
                              let _HermesInternal = HermesInternal;
                              str2 = " for the screen '" + type.props.name + "'";
                            }
                          }
                        }
                      }
                      let _HermesInternal2 = HermesInternal;
                      let combined = "'" + name + "'" + str2;
                    } else if (typeof type === "object") {
                      let _JSON = JSON;
                      combined = JSON.stringify(type);
                    } else {
                      let _String = String;
                      let _HermesInternal6 = HermesInternal;
                      combined = "'" + String(type) + "'";
                    }
                    let error4 = new Error("A navigator can only contain 'Screen', 'Group' or 'React.Fragment' as its direct children (found " + combined + "). To render this component in the navigator, pass it in the 'component' prop to 'Screen'.");
                    throw error4;
                  }, []), 0);
                  HermesBuiltin.apply(items5, arr);
                  return arr;
                }
              }
            }
            if (obj.isValidElement(type)) {
              if (typeof type.type === "string") {
                let name = type.type;
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
                    let props = type.props;
                    name = undefined;
                    if (props != null) {
                      name = props.name;
                    }
                    str2 = "";
                    if (name) {
                      let _HermesInternal = HermesInternal;
                      str2 = " for the screen '" + type.props.name + "'";
                    }
                  }
                }
              }
              let _HermesInternal2 = HermesInternal;
              let combined = "'" + name + "'" + str2;
            } else if (typeof type === "object") {
              let _JSON = JSON;
              combined = JSON.stringify(type);
            } else {
              let _String = String;
              let _HermesInternal6 = HermesInternal;
              combined = "'" + String(type) + "'";
            }
            let error4 = new Error("A navigator can only contain 'Screen', 'Group' or 'React.Fragment' as its direct children (found " + combined + "). To render this component in the navigator, pass it in the 'component' prop to 'Screen'.");
            throw error4;
          }, []), 0);
          HermesBuiltin.apply(items5, arr);
          return arr;
        }
      }
    }
    if (obj.isValidElement(type)) {
      if (typeof type.type === "string") {
        let name = type.type;
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
            let props = type.props;
            name = undefined;
            if (props != null) {
              name = props.name;
            }
            str2 = "";
            if (name) {
              let _HermesInternal = HermesInternal;
              str2 = " for the screen '" + type.props.name + "'";
            }
          }
        }
      }
      let _HermesInternal2 = HermesInternal;
      let combined = "'" + name + "'" + str2;
    } else if (typeof type === "object") {
      let _JSON = JSON;
      combined = JSON.stringify(type);
    } else {
      let _String = String;
      let _HermesInternal6 = HermesInternal;
      combined = "'" + String(type) + "'";
    }
    let error4 = new Error("A navigator can only contain 'Screen', 'Group' or 'React.Fragment' as its direct children (found " + combined + "). To render this component in the navigator, pass it in the 'component' prop to 'Screen'.");
    throw error4;
  }, []);
}
function getStateFromParams(state) {
  state = undefined;
  if (state != null) {
    state = state.state;
  }
  if (typeof isNavigationState !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let isArray = null != state && typeof state === "object";
  if (isArray) {
    isArray = "routes" in state;
  }
  if (isArray) {
    const _Array = Array;
    isArray = Array.isArray(state.routes);
  }
  if (isArray) {
    return state;
  } else {
    let screen;
    if (state != null) {
      screen = state.screen;
    }
    if (typeof screen === "string") {
      let initial;
      if (state != null) {
        initial = state.initial;
      }
      if (false !== initial) {
        let obj = { routes: null };
        obj = { name: null, params: null, path: null };
        ({ screen: obj2[0], params: obj2[1], path: obj2[2] } = state);
        const items = [obj];
        obj[0] = items;
        return obj;
      }
    }
  }
}

export const useNavigationBuilder = function useNavigationBuilder(StackRouter, UNSTABLE_routeNamesChangeBehavior) {
  const _require = StackRouter;
  importDefault = UNSTABLE_routeNamesChangeBehavior;
  let obj = _useRegisterNavigator;
  dependencyMap = obj.useRegisterNavigator();
  const context = React.useContext(_context.NavigationRouteContext);
  const context1 = React.useContext(_ConsumedParamsContext.ConsumedParamsContext);
  let params;
  if (context != null) {
    params = context.params;
  }
  let tmp5 = typeof params === "object";
  if (typeof params === "object") {
    tmp5 = null != context.params;
  }
  if (tmp5) {
    let hasItem;
    if (context1 != null) {
      hasItem = context1.has(context.params);
    }
    tmp5 = hasItem;
  }
  hasItem = tmp5;
  ({ layout: closure_6, screenListeners: jsx, UNSTABLE_router: isNavigationState } = UNSTABLE_routeNamesChangeBehavior);
  ({ children, screenOptions, screenLayout } = UNSTABLE_routeNamesChangeBehavior);
  getRouteConfigsFromChildren = hasItem(UNSTABLE_routeNamesChangeBehavior, context);
  const arr = getRouteConfigsFromChildren(children);
  const lazyValue = _useLazyValue.useLazyValue(() => {
    if (null != initialRouteName.initialRouteName) {
      if (arr.every((props) => props.props.name !== initialRouteName.initialRouteName)) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        error = new Error("Couldn't find a screen named '" + tmp.initialRouteName + "' to use as 'initialRouteName'.");
        throw error;
      }
    }
    const tmp3 = StackRouter(initialRouteName);
    if (null != callback) {
      const tmp4 = callback(tmp3);
      obj = {};
      const merged = Object.assign(tmp3);
      const merged1 = Object.assign(tmp4);
      return obj;
    } else {
      return tmp3;
    }
  });
  let mapped = arr.map((props) => props.props.name);
  if (mapped.length) {
    obj = {};
    obj = {};
    obj1 = {};
    const obj2 = {};
    const iter = arr[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp17 = nextResult;
      let name = nextResult.props.name;
      let tmp18 = name;
      if (name in obj) {
        let _Error2 = Error;
        let tmp22 = name;
        let _HermesInternal = HermesInternal;
        let str2 = "')";
        let str3 = "A navigator cannot contain multiple 'Screen' components with the same name (found duplicate screen named '";
        let tmp23 = new.target;
        let tmp24 = new.target;
        error = new Error("A navigator cannot contain multiple 'Screen' components with the same name (found duplicate screen named '" + tmp18 + "')");
        let tmp26 = error;
        throw error;
      } else {
        let tmp19 = name;
        let tmp20 = nextResult;
        obj[tmp18] = tmp17;
        obj[tmp18] = tmp17.keys;
        obj1[tmp18] = tmp17.props.initialParams;
        let _Object = Object;
        let obj3 = {};
        obj3[tmp18] = tmp17.props.getId;
        let merged = Object.assign(obj2, obj3);
        continue;
      }
    }
    let obj9 = React;
    let items = [lazyValue.type];
    const callback = React.useCallback((type) => {
      let tmp = undefined === type.type;
      if (!tmp) {
        tmp = type.type === lazyValue.type;
      }
      return tmp;
    }, items);
    let items1 = [callback];
    const callback1 = React.useCallback((stale) => {
      let tmp = undefined !== stale;
      if (tmp) {
        tmp = false === stale.stale;
      }
      if (tmp) {
        tmp = callback(stale);
      }
      return tmp;
    }, items1);
    let items2 = [mapped];
    const callback2 = React.useCallback((routes) => {
      routes = routes.routes;
      return routes.every((name) => !closure_12.includes(name.name));
    }, items2);
    const context2 = React.useContext(_require("01517_get_getKey.js") /* get getKey */.NavigationStateContext);
    let state = context2.state;
    ({ getState: closure_21, setState: closure_22, setKey: closure_23, getKey: closure_24, getIsInitial: closure_25 } = context2);
    const context3 = React.useContext(_NavigationBuilderContext.NavigationBuilderContext);
    const getIsStateEmitted = context3.getIsStateEmitted;
    closure_27 = React.useRef(false);
    closure_28 = React.useRef(undefined);
    const tmp35 = useEffectDefault((current) => {
      if (ref.current) {
        closure_28.current = current;
      } else {
        callback3(current);
      }
    });
    closure_29 = tmp35;
    let items3 = [state, lazyValue, callback];
    const tmp37 = context1(React.useMemo(() => {
      if (ref.current) {
        if (ref2.current) {
          if (callback(tmp.current)) {
            const items = [undefined, , , ];
            if (callback1(tmp.current)) {
              current = tmp.current;
            } else {
              obj = { routeNames: null, routeParamList: null, routeGetIdList: null };
              obj[0] = mapped;
              obj[1] = obj1;
              obj[2] = obj2;
              current = lazyValue.getRehydratedState(tmp.current, obj);
            }
            items[1] = current;
            items[2] = false;
            items[3] = undefined;
            return items;
          }
        }
      }
      const reduced = mapped.reduce((arg0, arg1) => {
        const initialParams = table[arg1].props.initialParams;
        state = undefined;
        if (closure_3 != null) {
          const params = tmp.params;
          if (params != null) {
            state = params.state;
          }
        }
        if (null == state) {
          let initial;
          if (tmp != null) {
            const params3 = tmp.params;
            if (params3 != null) {
              initial = params3.initial;
            }
          }
          if (false !== initial) {
            let screen;
            if (tmp != null) {
              const params4 = tmp.params;
              if (params4 != null) {
                screen = params4.screen;
              }
            }
            if (screen === arg1) {
              const params2 = tmp.params.params;
            }
          }
        }
        if (undefined !== initialParams) {
          obj = {};
          const merged = Object.assign(initialParams);
          const merged1 = Object.assign(params2);
          const tmp5 = obj;
        }
        arg0[arg1] = tmp5;
        return arg0;
      }, {});
      if (undefined === state) {
        state = undefined;
        if (context != null) {
          let params = tmp7.params;
          if (params != null) {
            state = params.state;
          }
        }
        if (null == state) {
          let screen;
          if (tmp7 != null) {
            let params2 = tmp7.params;
            if (params2 != null) {
              screen = params2.screen;
            }
          }
          if (typeof screen !== "string") {
            if (!hasItem) {
              const items1 = [undefined, , , ];
              obj = { routeNames: null, routeParamList: null, routeGetIdList: null };
              obj[0] = tmp3;
              obj[1] = reduced;
              obj[2] = obj2;
              items1[1] = lazyValue.getInitialState(obj);
              items1[2] = true;
              items1[3] = undefined;
              return items1;
            }
          } else {
            let initial;
            if (tmp7 != null) {
              let params3 = tmp7.params;
              if (params3 != null) {
                initial = params3.initial;
              }
            }
          }
        }
      }
      let tmp15;
      if (!hasItem) {
        params = undefined;
        if (context != null) {
          params = context.params;
        }
        tmp15 = params;
      }
      let tmp18;
      if (tmp15) {
        tmp18 = arr(tmp15, lazyValue.type);
      }
      if (tmp18 == null) {
        tmp18 = tmp5;
      }
      if (null == tmp18) {
        obj = { routeNames: null, routeParamList: null, routeGetIdList: null };
        obj[0] = tmp3;
        obj[1] = reduced;
        obj[2] = obj2;
        let initialState = lazyValue.getInitialState(obj);
      } else {
        obj1 = { routeNames: null, routeParamList: null, routeGetIdList: null };
        obj1[0] = tmp3;
        obj1[1] = reduced;
        obj1[2] = obj2;
        initialState = lazyValue.getRehydratedState(tmp18, obj1);
      }
      if (null != tmp18) {
        if (callback(tmp18)) {
          if ("lastUnhandled" === UNSTABLE_routeNamesChangeBehavior.UNSTABLE_routeNamesChangeBehavior) {
            if (callback2(tmp18)) {
              const items2 = [tmp18, initialState, true, tmp15];
              let items3 = items2;
            }
            return items3;
          }
        }
      }
      items3 = [undefined, initialState, false, ];
      let tmp29;
      if (!callback1(state)) {
        tmp29 = tmp15;
      }
      items3[3] = tmp29;
    }, items3), 4);
    [tmp38, tmp39] = tmp37;
    closure_30 = tmp39;
    const ref = React.useRef(obj);
    const insertionEffect = React.useInsertionEffect(() => {
      ref.current = obj;
    });
    let current = ref.current;
    const _Object2 = Object;
    let keys = Object.keys(obj);
    let found = keys.filter((arg0) => {
      let tmp3 = null != tmp && null != tmp2;
      if (tmp3) {
        obj = StackRouter(1564);
        tmp3 = !obj.isArrayEqual(tmp, tmp2);
      }
      return tmp3;
    });
    [tmp43, tmp44] = context1(React.useState(tmp38), 2);
    closure_33 = tmp44;
    if (tmp45) {
      tmp44(tmp38);
    }
    let rehydratedState = tmp39;
    let stateForRouteNamesChange = tmp39;
    c36 = false;
    if (null != tmp43) {
      if (!callback(tmp43)) {
        tmp44(undefined);
        rehydratedState = tmp39;
      }
      let params1;
      if (context != null) {
        params1 = context.params;
      }
      c37 = tmp55;
      let params2;
      if (context != null) {
        params2 = context.params;
      }
      let tmp57 = tmp55;
      let tmp58 = rehydratedState;
      if (params2) {
        tmp57 = tmp55;
        tmp58 = rehydratedState;
        if (!tmp55) {
          if (isNavigationState(context.params.state)) {
            if (!tmp5) {
              c37 = true;
              const tmp61 = arr(context.params, lazyValue.type);
              let flag4 = true;
              if (null != tmp61) {
                if ("lastUnhandled" === UNSTABLE_routeNamesChangeBehavior.UNSTABLE_routeNamesChangeBehavior) {
                  if (callback2(tmp61)) {
                    if (tmp61 !== tmp43) {
                      tmp44(tmp61);
                    }
                  }
                  let tmp62 = resetResult;
                  flag4 = true;
                }
                const CommonActions = tmp30(1505).CommonActions;
                resetResult = CommonActions.reset(tmp61);
              }
            }
            let stateForAction = null;
            if (tmp62) {
              const obj4 = { routeNames: null, routeParamList: null, routeGetIdList: null };
              obj4[0] = mapped;
              obj4[1] = obj1;
              obj4[2] = obj2;
              stateForAction = lazyValue.getStateForAction(rehydratedState, tmp62, obj4);
            }
            if (null !== stateForAction) {
              const obj5 = { routeNames: null, routeParamList: null, routeGetIdList: null };
              obj5[0] = mapped;
              obj5[1] = obj1;
              obj5[2] = obj2;
              rehydratedState = lazyValue.getRehydratedState(stateForAction, obj5);
            }
            stateForRouteNamesChange = rehydratedState;
            tmp58 = rehydratedState;
            tmp57 = flag4;
          }
          flag4 = tmp55;
          if (typeof context.params.screen === "string") {
            if (false !== context.params.initial) {
              flag4 = tmp55;
            }
            c37 = true;
            if ("lastUnhandled" === UNSTABLE_routeNamesChangeBehavior.UNSTABLE_routeNamesChangeBehavior) {
              if (!mapped.includes(context.params.screen)) {
                const tmp66 = arr(context.params, lazyValue.type);
                flag4 = true;
                if (!tmp67) {
                  tmp44(tmp66);
                  flag4 = true;
                }
                tmp67 = null == tmp66 || tmp34(1576)(tmp66, tmp43);
              }
            }
            const obj6 = { type: "NAVIGATE", payload: null };
            const obj7 = { name: null, params: null, path: null, merge: null, pop: null };
            obj7[0] = context.params.screen;
            obj7[1] = context.params.params;
            obj7[2] = context.params.path;
            obj7[3] = context.params.merge;
            obj7[4] = context.params.pop;
            obj6[1] = obj7;
            tmp62 = obj6;
            flag4 = true;
          }
        }
      }
      let items4 = [context1, tmp57, ];
      let params3;
      if (context != null) {
        params3 = context.params;
      }
      items4[2] = params3;
      const effect = obj9.useEffect(() => {
        let tmp = context1;
        if (context1) {
          tmp = c37;
        }
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
      closure_38 = tmp39 !== tmp58;
      let tmp30Result = tmp30(1577);
      const scheduleUpdate = tmp30Result.useScheduleUpdate(() => {
        if (closure_38) {
          callback6(stateForRouteNamesChange);
          if (c36) {
            tmp44(undefined);
          }
        }
      });
      rehydratedState = tmp58;
      const effect1 = obj9.useEffect(() => {
        closure_28.current = rehydratedState;
      });
      closure_39 = obj9.useRef(null);
      const effect2 = obj9.useEffect(() => {
        closure_27.current = false;
        callback4(closure_2);
        let tmp2 = callback5();
        if (tmp2) {
          tmp2 = !getIsStateEmitted();
        }
        if (!tmp2) {
          tmp2 = ref3.current === rehydratedState;
        }
        if (!tmp2) {
          callback6(rehydratedState);
          ref3.current = rehydratedState;
        }
        return () => {
          let tmp = undefined !== callback();
          if (tmp) {
            tmp = callback3() === closure_2;
          }
          if (tmp) {
            callback2(undefined);
            closure_27.current = true;
          }
          closure_39.current = null;
        };
      }, []);
      const tmp75 = tmp34(1522)(() => {
        let tmp = callback2();
        if (!callback1(tmp)) {
          tmp = closure_30;
        }
        return StackRouter(1521).deepFreeze(tmp);
      });
      tmp30Result = tmp30(1528);
      const eventEmitter = tmp30Result.useEventEmitter((target) => {
        closure_0 = target;
        const items = [];
        const routes = rehydratedState.routes;
        if (target.target) {
          let found = routes.find((key) => key.key === target.target);
          closure_1 = found;
          let name;
          if (found != null) {
            name = found.name;
          }
          let tmp2 = found;
          if (name) {
            items.push(found.name);
            tmp2 = found;
          }
        } else {
          closure_1 = routes[tmp.index];
          const push = items.push;
          let _Object = Object;
          let keys = Object.keys(obj);
          const items1 = [];
          HermesBuiltin.arraySpread(keys.filter((arg0) => {
            let name;
            if (name != null) {
              name = name.name;
            }
            return name === arg0;
          }), 0);
          HermesBuiltin.apply(items1, items);
        }
        if (null != tmp2) {
          if (null != closure_7) {
            const navigation = descriptors[tmp2.key].navigation;
            const items2 = [];
            const concat = items2.concat;
            const items3 = [tmp25];
            HermesBuiltin.arraySpread(items.map((arg0) => dependencyMap[arg0].props.listeners), 1);
            const items4 = [];
            HermesBuiltin.arraySpread(items3.map((fn) => {
              let tmp = fn;
              if (typeof fn === "function") {
                obj = { route: null, navigation: null };
                obj[0] = closure_1;
                obj[1] = navigation;
                tmp = fn(obj);
              }
              closure_0 = tmp;
              mapped = undefined;
              if (tmp) {
                const _Object = Object;
                const keys = Object.keys(tmp);
                const found = keys.filter((arg0) => arg0 === type.type);
                mapped = found.map((arg0) => {
                  let tmp2;
                  if (closure_0 != null) {
                    tmp2 = tmp[arg0];
                  }
                  return tmp2;
                });
              }
              return mapped;
            }), 0);
            const found1 = HermesBuiltin.apply(items4, items2).filter((arg0, arg1, arr) => {
              let tmp = arg0;
              if (arg0) {
                tmp = arr.lastIndexOf(arg0) === arg1;
              }
              return tmp;
            });
            const item = found1.forEach((arg0) => {
              let tmp;
              if (arg0 != null) {
                tmp = arg0(closure_0);
              }
              return tmp;
            });
            const applyResult1 = HermesBuiltin.apply(items4, items2);
          }
        }
      }, context3.onEmitEvent);
      const obj8 = { state: null, emitter: null };
      obj8[0] = tmp58;
      obj8[1] = eventEmitter;
      const focusEvents = tmp30(1579).useFocusEvents(obj8);
      const items5 = [eventEmitter, tmp58];
      const effect3 = obj9.useEffect(() => {
        eventEmitter.emit({ type: "state", data: { state: rehydratedState } });
      }, items5);
      const tmp30Result1 = tmp30(1579);
      const childListeners = tmp30(1524).useChildListeners();
      ({ listeners, addListener } = childListeners);
      const tmp30Result2 = tmp30(1524);
      const keyedChildListeners = tmp30(1525).useKeyedChildListeners();
      ({ keyedListeners, addKeyedListener } = keyedChildListeners);
      const tmp30Result3 = tmp30(1525);
      obj9 = { router: null, getState: null, setState: null, key: null, actionListeners: null, beforeRemoveListeners: null, routerConfigOptions: null, emitter: null };
      obj9[0] = lazyValue;
      obj9[1] = tmp75;
      obj9[2] = tmp35;
      let key;
      if (context != null) {
        key = context.key;
      }
      obj9[3] = key;
      obj9[4] = listeners.action;
      obj9[5] = keyedListeners.beforeRemove;
      const obj10 = { routeNames: null, routeParamList: null, routeGetIdList: null };
      obj10[0] = mapped;
      obj10[1] = obj1;
      obj10[2] = obj2;
      obj9[6] = obj10;
      obj9[7] = eventEmitter;
      const onAction = tmp30(1580).useOnAction(obj9);
      const tmp30Result4 = tmp30(1580);
      const obj11 = { router: null, key: null, getState: null, setState: null };
      obj11[0] = lazyValue;
      let key1;
      if (context != null) {
        key1 = context.key;
      }
      obj11[1] = key1;
      obj11[2] = tmp75;
      obj11[3] = tmp35;
      const onRouteFocus = tmp30(1582).useOnRouteFocus(obj11);
      closure_41 = obj9.useContext(tmp30(1533).UnhandledActionContext);
      const tmp30Result5 = tmp30(1582);
      const tmp85 = tmp34(1522)((type) => {
        if ("lastUnhandled" === UNSTABLE_routeNamesChangeBehavior.UNSTABLE_routeNamesChangeBehavior) {
          if ("NAVIGATE" === type.type) {
            if (null != type.payload) {
              if ("name" in type.payload) {
                if (typeof type.payload.name === "string") {
                  if (!mapped.includes(type.payload.name)) {
                    obj = { name: null, params: null, path: null };
                    obj[0] = type.payload.name;
                    let params;
                    if ("params" in type.payload) {
                      if (typeof type.payload.params === "object") {
                        if (null !== type.payload.params) {
                          params = type.payload.params;
                        }
                      }
                    }
                    obj[1] = params;
                    let path;
                    if ("path" in type.payload) {
                      if (typeof type.payload.path === "string") {
                        path = type.payload.path;
                      }
                    }
                    obj = { routes: null };
                    obj[2] = path;
                    const items = [obj];
                    obj[0] = items;
                    tmp44(obj);
                  }
                }
              }
            }
          }
        }
        if (closure_41 != null) {
          tmp5(type);
        }
      });
      const obj12 = { id: null, onAction: null, onUnhandledAction: null, getState: null, state: null, emitter: null, router: null };
      obj12[0] = UNSTABLE_routeNamesChangeBehavior.id;
      obj12[1] = onAction;
      obj12[2] = tmp85;
      obj12[3] = tmp75;
      obj12[4] = tmp58;
      obj12[5] = eventEmitter;
      obj12[6] = lazyValue;
      const navigationHelpers = tmp30(1583).useNavigationHelpers(obj12);
      const tmp30Result6 = tmp30(1583);
      const obj13 = { navigation: null, focusedListeners: null };
      obj13[0] = navigationHelpers;
      obj13[1] = listeners.focus;
      const focusedListenersChildrenAdapter = tmp30(1584).useFocusedListenersChildrenAdapter(obj13);
      const tmp30Result7 = tmp30(1584);
      const obj14 = { getState: null, getStateListeners: null };
      obj14[0] = tmp75;
      obj14[1] = keyedListeners.getState;
      const onGetState = tmp30(1585).useOnGetState(obj14);
      const tmp30Result8 = tmp30(1585);
      const obj15 = { state: null, screens: null, navigation: null, screenOptions: null, screenLayout: null, onAction: null, getState: null, setState: null, onRouteFocus: null, addListener: null, addKeyedListener: null, router: null, emitter: null };
      obj15[0] = tmp58;
      obj15[1] = obj;
      obj15[2] = navigationHelpers;
      obj15[3] = screenOptions;
      obj15[4] = screenLayout;
      obj15[5] = onAction;
      obj15[6] = tmp75;
      obj15[7] = tmp35;
      obj15[8] = onRouteFocus;
      obj15[9] = addListener;
      obj15[10] = addKeyedListener;
      obj15[11] = lazyValue;
      obj15[12] = eventEmitter;
      let descriptors = tmp30(1586).useDescriptors(obj15);
      descriptors = descriptors.descriptors;
      const tmp30Result9 = tmp30(1586);
      const obj16 = { state: null, navigation: null, descriptors: null };
      obj16[0] = tmp58;
      obj16[1] = navigationHelpers;
      obj16[2] = descriptors;
      const currentRender = tmp30(1590).useCurrentRender(obj16);
      const tmp30Result10 = tmp30(1590);
      const obj17 = { state: null, navigation: null, describe: null, descriptors: null, NavigationContent: null };
      obj17[0] = tmp58;
      obj17[1] = navigationHelpers;
      obj17[2] = descriptors.describe;
      obj17[3] = descriptors;
      obj17[4] = tmp30(1591).useComponent((arg0) => {
        let tmpResult = arg0;
        if (null != closure_6) {
          obj = { state: null, descriptors: null, navigation: null, children: null };
          obj[0] = rehydratedState;
          obj[1] = descriptors;
          obj[2] = navigationHelpers;
          obj[3] = arg0;
          tmpResult = tmp(obj);
        }
        obj = { value: "Array", children: 0 };
        obj = { value: navigationHelpers, children: null };
        obj1 = { state: rehydratedState, getState: navigationHelpers.getState, children: closure_1_7(StackRouter(1542).FocusedRouteKeyContext.Provider, { value: rehydratedState.routes[rehydratedState.index].key, children: closure_1_7(StackRouter(1571).PreventRemoveProvider, { children: tmpResult }) }) };
        obj[1] = closure_1_7(StackRouter(1592).NavigationStateListenerProvider, obj1);
        obj[1] = closure_1_7(StackRouter(1566).NavigationHelpersContext.Provider, obj);
        return closure_1_7(StackRouter(1569).NavigationMetaContext.Provider, obj);
      });
      return obj17;
    }
    let everyResult;
    if (tmp43 != null) {
      let routes = tmp43.routes;
      everyResult = routes.every((name) => mapped.includes(name.name));
    }
    if (everyResult) {
      let everyResult1;
      if (tmp39 != null) {
        const routes2 = tmp39.routes;
        everyResult1 = routes2.every((name) => !mapped.includes(name.name));
      }
      if (everyResult1) {
        c36 = true;
        const obj18 = { routeNames: null, routeParamList: null, routeGetIdList: null };
        obj18[0] = mapped;
        obj18[1] = obj1;
        obj18[2] = obj2;
        const rehydratedState1 = lazyValue.getRehydratedState(tmp43, obj18);
        stateForRouteNamesChange = rehydratedState1;
        rehydratedState = rehydratedState1;
      }
    }
    const tmp42 = context1(React.useState(tmp38), 2);
    tmp45 = "lastUnhandled" === UNSTABLE_routeNamesChangeBehavior.UNSTABLE_routeNamesChangeBehavior && tmp38 && tmp43 !== tmp38;
    const tmp30Result12 = _isArrayEqual;
    rehydratedState = tmp39;
    if (!tmp51) {
      const obj19 = { routeNames: null, routeParamList: null, routeGetIdList: null, routeKeyChanges: null };
      obj19[0] = mapped;
      obj19[1] = obj1;
      obj19[2] = obj2;
      obj19[3] = found;
      stateForRouteNamesChange = lazyValue.getStateForRouteNamesChange(tmp39, obj19);
      rehydratedState = stateForRouteNamesChange;
    }
    tmp51 = _isArrayEqual.isArrayEqual(tmp39.routeNames, mapped) && 0 === found.length;
  } else {
    let _Error = Error;
    const error1 = new Error("Couldn't find any screens for the navigator. Have you defined any screens as its children?");
    throw error1;
  }
};