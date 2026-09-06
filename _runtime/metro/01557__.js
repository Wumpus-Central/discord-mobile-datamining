// === Module 1557: ? ===

// Module 1557
import deepFreeze from "deepFreeze" /* 1504 */;
import _modDef1505 from "module_1505" /* 1505 */;
import context12 from "context1" /* 1525 */;
import _mod1547 from "module_1547" /* 1547 */;
import NavigationHelpersContext from "NavigationHelpersContext" /* 1549 */;
import NavigationMetaContext from "NavigationMetaContext" /* 1552 */;
import transformPreventedRoutes from "transformPreventedRoutes" /* 1554 */;
import NavigationStateListenerProvider from "NavigationStateListenerProvider" /* 1575 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["children", "layout", "screenOptions", "screenLayout", "screenListeners", "UNSTABLE_router"];
const jsx = fn(21).jsx;
const PrivateValueStore = fn(1487).PrivateValueStore;
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
  const items = [];
  c1 = undefined;
  c2 = undefined;
  const Children = noop.Children;
  return Children.toArray(arg0).reduce((arr, type) => {
    let obj = closure_2_6;
    if (closure_2_6.isValidElement(type)) {
      if (type.type === closure_2_0(closure_2_2[5]).Screen) {
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
                items[HermesBuiltin.arraySpread(closure_1_0, 0)] = type.props.navigationKey;
                obj.keys = items;
                obj.options = closure_1_1;
                obj.layout = closure_1_2;
                obj.props = type.props;
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
            items1[HermesBuiltin.arraySpread(closure_1_0, 0)] = type.props.navigationKey;
            items4 = items1;
          } else {
            items4 = closure_1_0;
          }
          if (type.type !== tmp2(tmp3[6]).Group) {
            items3 = closure_1_1;
          } else if (null != closure_1_1) {
            let items2 = [];
            items2[HermesBuiltin.arraySpread(tmp13, 0)] = type.props.screenOptions;
            items3 = items2;
          } else {
            items3 = [type.props.screenOptions];
          }
          if (typeof type.props.screenLayout === "function") {
            screenLayout = type.props.screenLayout;
          } else {
            screenLayout = closure_1_2;
          }
          if (typeof tmp9 === "function") {
            if (items4 === undefined) {
              items4 = [];
            }
            let Children = obj.Children;
            let items5 = [];
            HermesBuiltin.arraySpread(Children.toArray(type.props.children).reduce((arr, type) => {
              let obj = closure_2_6;
              if (closure_2_6.isValidElement(type)) {
                if (type.type === closure_2_0(closure_2_2[5]).Screen) {
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
                          items[HermesBuiltin.arraySpread(closure_1_0, 0)] = type.props.navigationKey;
                          obj.keys = items;
                          obj.options = closure_1_1;
                          obj.layout = closure_1_2;
                          obj.props = type.props;
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
                      items1[HermesBuiltin.arraySpread(closure_1_0, 0)] = type.props.navigationKey;
                      items4 = items1;
                    } else {
                      items4 = closure_1_0;
                    }
                    if (type.type !== tmp2(tmp3[6]).Group) {
                      items3 = closure_1_1;
                    } else if (null != closure_1_1) {
                      let items2 = [];
                      items2[HermesBuiltin.arraySpread(tmp13, 0)] = type.props.screenOptions;
                      items3 = items2;
                    } else {
                      items3 = [type.props.screenOptions];
                    }
                    if (typeof type.props.screenLayout === "function") {
                      screenLayout = type.props.screenLayout;
                    } else {
                      screenLayout = closure_1_2;
                    }
                    if (typeof tmp9 === "function") {
                      if (items4 === undefined) {
                        items4 = [];
                      }
                      let Children = obj.Children;
                      let items5 = [];
                      HermesBuiltin.arraySpread(Children.toArray(type.props.children).reduce((arr, type) => {
                        let obj = closure_2_6;
                        if (closure_2_6.isValidElement(type)) {
                          if (type.type === closure_2_0(closure_2_2[5]).Screen) {
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
                                    items[HermesBuiltin.arraySpread(closure_1_0, 0)] = type.props.navigationKey;
                                    obj.keys = items;
                                    obj.options = closure_1_1;
                                    obj.layout = closure_1_2;
                                    obj.props = type.props;
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
                                items1[HermesBuiltin.arraySpread(closure_1_0, 0)] = type.props.navigationKey;
                                items4 = items1;
                              } else {
                                items4 = closure_1_0;
                              }
                              if (type.type !== tmp2(tmp3[6]).Group) {
                                items3 = closure_1_1;
                              } else if (null != closure_1_1) {
                                let items2 = [];
                                items2[HermesBuiltin.arraySpread(tmp13, 0)] = type.props.screenOptions;
                                items3 = items2;
                              } else {
                                items3 = [type.props.screenOptions];
                              }
                              if (typeof type.props.screenLayout === "function") {
                                screenLayout = type.props.screenLayout;
                              } else {
                                screenLayout = closure_1_2;
                              }
                              if (typeof tmp9 === "function") {
                                if (items4 === undefined) {
                                  items4 = [];
                                }
                                let Children = obj.Children;
                                let items5 = [];
                                HermesBuiltin.arraySpread(Children.toArray(type.props.children).reduce((arr, type) => {
                                  let obj = closure_2_6;
                                  if (closure_2_6.isValidElement(type)) {
                                    if (type.type === closure_2_0(closure_2_2[5]).Screen) {
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
                                              items[HermesBuiltin.arraySpread(closure_1_0, 0)] = type.props.navigationKey;
                                              obj.keys = items;
                                              obj.options = closure_1_1;
                                              obj.layout = closure_1_2;
                                              obj.props = type.props;
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
                                          items1[HermesBuiltin.arraySpread(closure_1_0, 0)] = type.props.navigationKey;
                                          items4 = items1;
                                        } else {
                                          items4 = closure_1_0;
                                        }
                                        if (type.type !== tmp2(tmp3[6]).Group) {
                                          items3 = closure_1_1;
                                        } else if (null != closure_1_1) {
                                          let items2 = [];
                                          items2[HermesBuiltin.arraySpread(tmp13, 0)] = type.props.screenOptions;
                                          items3 = items2;
                                        } else {
                                          items3 = [type.props.screenOptions];
                                        }
                                        if (typeof type.props.screenLayout === "function") {
                                          screenLayout = type.props.screenLayout;
                                        } else {
                                          screenLayout = closure_1_2;
                                        }
                                        if (typeof tmp9 === "function") {
                                          if (items4 === undefined) {
                                            items4 = [];
                                          }
                                          let Children = obj.Children;
                                          let items5 = [];
                                          HermesBuiltin.arraySpread(Children.toArray(type.props.children).reduce(() => { ... }, []), 0);
                                          HermesBuiltin.apply(items5, arr);
                                          return arr;
                                        } else {
                                          throw new TypeError("Trying to call a non-function");
                                        }
                                        tmp9 = closure_2_9;
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
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                              tmp9 = closure_2_9;
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
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                    tmp9 = closure_2_9;
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
          } else {
            throw new TypeError("Trying to call a non-function");
          }
          tmp9 = closure_2_9;
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
function getStateFromParams(params, type) {
  if (params != null) {
    const state = params.state;
  }
  if (typeof isNavigationState === "function") {
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
      if (params != null) {
        screen = params.screen;
      }
      if (typeof screen === "string") {
        let initial;
        if (params != null) {
          initial = params.initial;
        }
        if (false !== initial) {
          let obj = { routes: null };
          obj = { name: null, params: null, path: null };
          ({ screen: obj2.name, params: obj2.params, path: obj2.path } = params);
          const items = [obj];
          obj.routes = items;
          return obj;
        }
      }
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}

export const useNavigationBuilder = function useNavigationBuilder(StackRouter, UNSTABLE_routeNamesChangeBehavior) {
  _require = StackRouter;
  importDefault = UNSTABLE_routeNamesChangeBehavior;
  let obj = require("module_1558");
  dependencyMap = obj.useRegisterNavigator();
  const context = noop.useContext(require("module_1524").NavigationRouteContext);
  const context1 = noop.useContext(require("ConsumedParamsContext").ConsumedParamsContext);
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
  ({ layout: noop, screenListeners: jsx, UNSTABLE_router: isNavigationState } = UNSTABLE_routeNamesChangeBehavior);
  ({ children, screenOptions, screenLayout } = UNSTABLE_routeNamesChangeBehavior);
  getRouteConfigsFromChildren = hasItem(UNSTABLE_routeNamesChangeBehavior, context);
  const arr = getRouteConfigsFromChildren(children);
  const lazyValue = require("module_1506").useLazyValue(() => {
    if (null != initialRouteName.initialRouteName) {
      if (arr.every((props) => props.props.name !== initialRouteName.initialRouteName)) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Couldn't find a screen named '" + tmp.initialRouteName + "' to use as 'initialRouteName'.");
        throw error;
      }
    }
    const tmp3 = StackRouter(initialRouteName);
    if (null != isNavigationState) {
      const tmp4 = isNavigationState(tmp3);
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
    let obj1 = {};
    const obj2 = {};
    const iter = arr[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp17 = nextResult;
      let name = nextResult.props.name;
      let tmp18 = name;
      if (name in obj) {
        let _Error2 = Error;
        let _HermesInternal = HermesInternal;
        let str2 = "')";
        let str3 = "A navigator cannot contain multiple 'Screen' components with the same name (found duplicate screen named '";
        let tmp23 = new.target;
        let tmp24 = new.target;
        let error = new Error("A navigator cannot contain multiple 'Screen' components with the same name (found duplicate screen named '" + tmp18 + "')");
        throw error;
      } else {
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
    let obj9 = noop;
    let items = [lazyValue.type];
    const callback = noop.useCallback((type) => {
      let tmp = undefined === type.type;
      if (!tmp) {
        tmp = type.type === lazyValue.type;
      }
      return tmp;
    }, items);
    let items1 = [callback];
    const callback1 = noop.useCallback((stale) => {
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
    const callback2 = noop.useCallback((routes) => {
      routes = routes.routes;
      return routes.every((name) => !mapped.includes(name.name));
    }, items2);
    const context2 = noop.useContext(require("get getKey").NavigationStateContext);
    let state = context2.state;
    ({ getState: closure_21, setState: closure_22, setKey: closure_23, getKey: closure_24, getIsInitial: closure_25 } = context2);
    const context3 = noop.useContext(require("NavigationBuilderContext").NavigationBuilderContext);
    const getIsStateEmitted = context3.getIsStateEmitted;
    noop.useRef(false);
    noop.useRef(undefined);
    const tmp35 = _modDef1505((current) => {
      if (ref.current) {
        closure_28.current = current;
      } else {
        closure_1_22(current);
      }
    });
    closure_29 = tmp35;
    let items3 = [state, lazyValue, callback];
    const tmp37 = context1(noop.useMemo(() => {
      if (ref.current) {
        if (ref2.current) {
          if (callback(tmp.current)) {
            const items = [undefined, , , ];
            if (callback1(tmp.current)) {
              current = tmp.current;
            } else {
              obj = { routeNames: mapped, routeParamList: obj1, routeGetIdList: obj2 };
              current = lazyValue.getRehydratedState(tmp.current, obj);
            }
            items[1] = current;
            items[2] = false;
            items[3] = undefined;
            return items;
          }
        }
      }
      const reduced = mapped.reduce((acc, item) => {
        const initialParams = closure_1_13[item].props.initialParams;
        state = undefined;
        if (context != null) {
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
            if (screen === item) {
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
        acc[item] = tmp5;
        return acc;
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
              obj = { routeNames: tmp3, routeParamList: reduced, routeGetIdList: obj2 };
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
        tmp18 = getStateFromParams(tmp15, lazyValue.type);
      }
      if (tmp18 == null) {
        tmp18 = tmp5;
      }
      if (null == tmp18) {
        obj = { routeNames: tmp3, routeParamList: reduced, routeGetIdList: obj2 };
        let initialState = lazyValue.getInitialState(obj);
      } else {
        obj1 = { routeNames: tmp3, routeParamList: reduced, routeGetIdList: obj2 };
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
    const ref = noop.useRef(obj);
    const insertionEffect = noop.useInsertionEffect(() => {
      ref.current = obj;
    });
    let current = ref.current;
    const _Object2 = Object;
    let keys = Object.keys(obj);
    let found = keys.filter((item) => {
      let tmp3 = null != tmp && null != tmp2;
      if (tmp3) {
        obj = _mod1547;
        tmp3 = !obj.isArrayEqual(tmp, tmp2);
      }
      return tmp3;
    });
    [tmp43, tmp44] = context1(noop.useState(tmp38), 2);
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
                const CommonActions = tmp30(1488).CommonActions;
                resetResult = CommonActions.reset(tmp61);
              }
            }
            let stateForAction = null;
            if (tmp62) {
              const obj4 = { routeNames: mapped, routeParamList: obj1, routeGetIdList: obj2 };
              stateForAction = lazyValue.getStateForAction(rehydratedState, tmp62, obj4);
            }
            if (null !== stateForAction) {
              const obj5 = { routeNames: mapped, routeParamList: obj1, routeGetIdList: obj2 };
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
                tmp67 = null == tmp66 || tmp34(1559)(tmp66, tmp43);
              }
            }
            const action = { type: "NAVIGATE", payload: null };
            const obj6 = { name: context.params.screen, params: context.params.params, path: context.params.path, merge: context.params.merge, pop: context.params.pop };
            action.payload = obj6;
            tmp62 = action;
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
      let tmp30Result = tmp30(1560);
      const scheduleUpdate = tmp30Result.useScheduleUpdate(() => {
        if (closure_38) {
          closure_29(stateForRouteNamesChange);
          if (c36) {
            tmp44(undefined);
          }
        }
      });
      rehydratedState = tmp58;
      const effect1 = obj9.useEffect(() => {
        closure_28.current = rehydratedState;
      });
      obj9.useRef(null);
      const effect2 = obj9.useEffect(() => {
        closure_27.current = false;
        closure_1_23(closure_2);
        let tmp2 = closure_1_25();
        if (tmp2) {
          tmp2 = !getIsStateEmitted();
        }
        if (!tmp2) {
          tmp2 = ref3.current === rehydratedState;
        }
        if (!tmp2) {
          closure_29(rehydratedState);
          ref3.current = rehydratedState;
        }
        return () => {
          let tmp = undefined !== closure_1_21();
          if (tmp) {
            tmp = closure_1_24() === closure_1_2;
          }
          if (tmp) {
            closure_1_22(undefined);
            ref.current = true;
          }
          ref3.current = null;
        };
      }, []);
      const tmp75 = tmp34(1505)(() => {
        let tmp = closure_1_21();
        if (!callback1(tmp)) {
          tmp = closure_30;
        }
        return deepFreeze.deepFreeze(tmp);
      });
      tmp30Result = tmp30(1511);
      const eventEmitter = tmp30Result.useEventEmitter((target) => {
        const items = [];
        const routes = rehydratedState.routes;
        if (target.target) {
          let found = routes.find((key) => key.key === target.target);
          let route = found;
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
          route = routes[tmp.index];
          const push = items.push;
          let _Object = Object;
          let keys = Object.keys(obj);
          const items1 = [];
          HermesBuiltin.arraySpread(keys.filter((item) => {
            let name;
            if (route != null) {
              name = route.name;
            }
            return name === item;
          }), 0);
          HermesBuiltin.apply(items1, items);
        }
        if (null != tmp2) {
          if (null != closure_7) {
            const navigation = descriptors[tmp2.key].navigation;
            const items2 = [];
            const concat = items2.concat;
            const items3 = [tmp25];
            HermesBuiltin.arraySpread(items.map((item) => dependencyMap[item].props.listeners), 1);
            const items4 = [];
            HermesBuiltin.arraySpread(items3.map((fn) => {
              let tmp = fn;
              if (typeof fn === "function") {
                obj = { route, navigation };
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
                  if (closure_0 != null) {
                    tmp2 = tmp[item];
                  }
                  return tmp2;
                });
              }
              return mapped;
            }), 0);
            const found1 = HermesBuiltin.apply(items4, items2).filter((item, index, arr) => {
              let tmp = item;
              if (item) {
                tmp = arr.lastIndexOf(item) === index;
              }
              return tmp;
            });
            const item = found1.forEach((fn) => {
              let tmp;
              if (fn != null) {
                tmp = fn(closure_0);
              }
              return tmp;
            });
            const applyResult1 = HermesBuiltin.apply(items4, items2);
          }
        }
      }, context3.onEmitEvent);
      const obj7 = { state: tmp58, emitter: eventEmitter };
      const focusEvents = tmp30(1562).useFocusEvents(obj7);
      const items5 = [eventEmitter, tmp58];
      const effect3 = obj9.useEffect(() => {
        obj = { type: "state", data: null };
        obj = { state: rehydratedState };
        obj.data = obj;
        eventEmitter.emit(obj);
      }, items5);
      const tmp30Result1 = tmp30(1562);
      const childListeners = tmp30(1507).useChildListeners();
      ({ listeners, addListener } = childListeners);
      const tmp30Result2 = tmp30(1507);
      const keyedChildListeners = tmp30(1508).useKeyedChildListeners();
      ({ keyedListeners, addKeyedListener } = keyedChildListeners);
      const tmp30Result3 = tmp30(1508);
      const obj8 = { router: lazyValue, getState: tmp75, setState: tmp35, key: null, actionListeners: null, beforeRemoveListeners: null, routerConfigOptions: null, emitter: null };
      let key;
      if (context != null) {
        key = context.key;
      }
      obj8.key = key;
      obj8.actionListeners = listeners.action;
      obj8.beforeRemoveListeners = keyedListeners.beforeRemove;
      obj9 = { routeNames: mapped, routeParamList: obj1, routeGetIdList: obj2 };
      obj8.routerConfigOptions = obj9;
      obj8.emitter = eventEmitter;
      const onAction = tmp30(1563).useOnAction(obj8);
      const tmp30Result4 = tmp30(1563);
      const obj10 = { router: lazyValue, key: null, getState: null, setState: null };
      let key1;
      if (context != null) {
        key1 = context.key;
      }
      obj10.key = key1;
      obj10.getState = tmp75;
      obj10.setState = tmp35;
      const onRouteFocus = tmp30(1565).useOnRouteFocus(obj10);
      closure_41 = obj9.useContext(tmp30(1516).UnhandledActionContext);
      const tmp30Result5 = tmp30(1565);
      const tmp85 = tmp34(1505)((type) => {
        if ("lastUnhandled" === UNSTABLE_routeNamesChangeBehavior.UNSTABLE_routeNamesChangeBehavior) {
          if ("NAVIGATE" === type.type) {
            if (null != type.payload) {
              if ("name" in type.payload) {
                if (typeof type.payload.name === "string") {
                  if (!mapped.includes(type.payload.name)) {
                    obj = { name: type.payload.name, params: null, path: null };
                    let params;
                    if ("params" in type.payload) {
                      if (typeof type.payload.params === "object") {
                        if (null !== type.payload.params) {
                          params = type.payload.params;
                        }
                      }
                    }
                    obj.params = params;
                    let path;
                    if ("path" in type.payload) {
                      if (typeof type.payload.path === "string") {
                        path = type.payload.path;
                      }
                    }
                    obj = { routes: null, path };
                    const items = [obj];
                    obj.routes = items;
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
      const obj11 = { id: UNSTABLE_routeNamesChangeBehavior.id, onAction, onUnhandledAction: tmp85, getState: tmp75, state: tmp58, emitter: eventEmitter, router: lazyValue };
      const navigationHelpers = tmp30(1566).useNavigationHelpers(obj11);
      const tmp30Result6 = tmp30(1566);
      const obj12 = { navigation: navigationHelpers, focusedListeners: listeners.focus };
      const focusedListenersChildrenAdapter = tmp30(1567).useFocusedListenersChildrenAdapter(obj12);
      const tmp30Result7 = tmp30(1567);
      const obj13 = { getState: tmp75, getStateListeners: keyedListeners.getState };
      const onGetState = tmp30(1568).useOnGetState(obj13);
      const tmp30Result8 = tmp30(1568);
      const obj14 = { state: tmp58, screens: obj, navigation: navigationHelpers, screenOptions, screenLayout, onAction, getState: tmp75, setState: tmp35, onRouteFocus, addListener, addKeyedListener, router: lazyValue, emitter: eventEmitter };
      let descriptors = tmp30(1569).useDescriptors(obj14);
      descriptors = descriptors.descriptors;
      const tmp30Result9 = tmp30(1569);
      const obj15 = { state: tmp58, navigation: navigationHelpers, descriptors };
      const currentRender = tmp30(1573).useCurrentRender(obj15);
      const tmp30Result10 = tmp30(1573);
      const obj16 = {
        state: tmp58,
        navigation: navigationHelpers,
        describe: descriptors.describe,
        descriptors,
        NavigationContent: tmp30(1574).useComponent((children) => {
              let tmpResult = children;
              if (null != noop) {
                obj = { state: rehydratedState, descriptors, navigation: navigationHelpers, children };
                tmpResult = tmp(obj);
              }
              obj = { value: "Array", children: 0 };
              obj = { value: navigationHelpers, children: null };
              obj1 = { state: rehydratedState, getState: navigationHelpers.getState, children: jsx(context12.FocusedRouteKeyContext.Provider, { value: rehydratedState.routes[rehydratedState.index].key, children: jsx(transformPreventedRoutes.PreventRemoveProvider, { children: tmpResult }) }) };
              obj.children = jsx(NavigationStateListenerProvider.NavigationStateListenerProvider, { state: rehydratedState, getState: navigationHelpers.getState, children: jsx(context12.FocusedRouteKeyContext.Provider, { value: rehydratedState.routes[rehydratedState.index].key, children: jsx(transformPreventedRoutes.PreventRemoveProvider, { children: tmpResult }) }) });
              obj.children = jsx(NavigationHelpersContext.NavigationHelpersContext.Provider, { value: navigationHelpers, children: null });
              return jsx(NavigationMetaContext.NavigationMetaContext.Provider, { value: navigationHelpers, children: null });
            })
      };
      return obj16;
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
        const obj17 = { routeNames: mapped, routeParamList: obj1, routeGetIdList: obj2 };
        const rehydratedState1 = lazyValue.getRehydratedState(tmp43, obj17);
        stateForRouteNamesChange = rehydratedState1;
        rehydratedState = rehydratedState1;
      }
    }
    const tmp42 = context1(noop.useState(tmp38), 2);
    tmp45 = "lastUnhandled" === UNSTABLE_routeNamesChangeBehavior.UNSTABLE_routeNamesChangeBehavior && tmp38 && tmp43 !== tmp38;
    const tmp30Result12 = require("module_1547");
    rehydratedState = tmp39;
    if (!tmp51) {
      const obj18 = { routeNames: mapped, routeParamList: obj1, routeGetIdList: obj2, routeKeyChanges: found };
      stateForRouteNamesChange = lazyValue.getStateForRouteNamesChange(tmp39, obj18);
      rehydratedState = stateForRouteNamesChange;
    }
    tmp51 = require("module_1547").isArrayEqual(tmp39.routeNames, mapped) && 0 === found.length;
  } else {
    let _Error = Error;
    const error1 = new Error("Couldn't find any screens for the navigator. Have you defined any screens as its children?");
    throw error1;
  }
};