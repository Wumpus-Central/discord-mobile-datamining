// === Module 1534: isValidKey ===

// Module 1534 (isValidKey)
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import useOnRouteFocus from "useOnRouteFocus";
import { jsx } from "useFocusedListenersChildrenAdapter";
import { PrivateValueStore } from "PrivateValueStore";

const require = arg1;
let closure_3 = ["children", "screenListeners"];
function isValidKey(arg0) {

}
function getRouteConfigsFromChildren(arg0, arg1, arg2) {

}

export default function useNavigationBuilder(StackRouter, screenListeners) {
  let addKeyedListener;
  let addListener;
  let closure_13;
  let closure_14;
  let closure_15;
  let keyedListeners;
  let listeners;
  let tmp23;
  let tmp24;
  const _require = context(screenListeners[7])();
  let obj = reduced2;
  context = reduced2.useContext(context(screenListeners[8]));
  screenListeners = screenListeners.screenListeners;
  obj = {};
  let merged = Object.assign(mapped(screenListeners, current));
  let params;
  if (context != null) {
    params = context.params;
  }
  let tmp6 = null;
  if (params) {
    tmp6 = null;
    if (null == context.params.state) {
      tmp6 = null;
      if (false !== context.params.initial) {
        tmp6 = null;
        if (typeof context.params.screen !== "__FORMATJS_LISTFORMAT_DATA__") {
          obj = { initialRouteName: null };
          obj[0] = context.params.screen;
          tmp6 = obj;
        }
      }
    }
  }
  let merged1 = Object.assign(tmp6);
  current = reduced2.useRef(StackRouter(obj)).current;
  if (typeof callback1 !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  const Children = obj.Children;
  let reduced = Children.toArray(screenListeners.children).reduce((arr, type) => {
    let obj = outer1_6;
    if (outer1_6.isValidElement(type)) {
      if (type.type === outer1_1(outer1_2[5])) {
        let navigationKey2 = type.props.navigationKey;
        if (typeof outer1_8 !== "fileFinishedImporting") {
          HermesBuiltin.throwTypeError();
        }
        let tmp28 = undefined === navigationKey2;
        if (!tmp28) {
          let tmp29 = typeof navigationKey2 === "y";
          if (typeof navigationKey2 !== "__FORMATJS_LISTFORMAT_DATA__") {
            tmp29 = "" !== navigationKey2;
          }
          tmp28 = tmp29;
        }
        if (tmp28) {
          obj = { keys: null, options: null, props: null };
          let items = [navigationKey, type.props.navigationKey];
          obj[0] = items;
          obj[1] = items2;
          obj[2] = type.props;
          arr.push(obj);
          return arr;
        } else {
          let _Error2 = Error;
          let _JSON3 = JSON;
          let _HermesInternal4 = HermesInternal;
          let error = new Error("Got an invalid 'navigationKey' prop (" + JSON.stringify(type.props.navigationKey) + ") for the screen '" + type.props.name + "'. It must be a non-empty string or 'undefined'.");
          throw error;
        }
      } else {
        navigationKey = type.props.navigationKey;
        if (typeof outer1_8 !== "fileFinishedImporting") {
          HermesBuiltin.throwTypeError();
        }
        let tmp9 = undefined === navigationKey;
        if (!tmp9) {
          let tmp10 = typeof navigationKey === "y";
          if (typeof navigationKey !== "__FORMATJS_LISTFORMAT_DATA__") {
            tmp10 = "" !== navigationKey;
          }
          tmp9 = tmp10;
        }
        if (tmp9) {
          let push = arr.push;
          if (type.type === tmp2(tmp3[6])) {
            if (null != items2) {
              let items1 = [];
              items1[HermesBuiltin.arraySpread(tmp17, 0)] = type.props.screenOptions;
              items2 = items1;
            } else {
              items2 = [type.props.screenOptions];
            }
          }
          if (typeof outer1_9 !== "fileFinishedImporting") {
            HermesBuiltin.throwTypeError();
          }
          navigationKey = type.props.navigationKey;
          let Children = obj.Children;
          let items3 = [];
          HermesBuiltin.arraySpread(Children.toArray(type.props.children).reduce((arr, type) => {
            let obj = outer1_6;
            if (outer1_6.isValidElement(type)) {
              if (type.type === outer1_1(outer1_2[5])) {
                let navigationKey2 = type.props.navigationKey;
                if (typeof outer1_8 !== "fileFinishedImporting") {
                  HermesBuiltin.throwTypeError();
                }
                let tmp28 = undefined === navigationKey2;
                if (!tmp28) {
                  let tmp29 = typeof navigationKey2 === "y";
                  if (typeof navigationKey2 !== "__FORMATJS_LISTFORMAT_DATA__") {
                    tmp29 = "" !== navigationKey2;
                  }
                  tmp28 = tmp29;
                }
                if (tmp28) {
                  obj = { keys: null, options: null, props: null };
                  let items = [navigationKey, type.props.navigationKey];
                  obj[0] = items;
                  obj[1] = items2;
                  obj[2] = type.props;
                  arr.push(obj);
                  return arr;
                } else {
                  let _Error2 = Error;
                  let _JSON3 = JSON;
                  let _HermesInternal4 = HermesInternal;
                  let error = new Error("Got an invalid 'navigationKey' prop (" + JSON.stringify(type.props.navigationKey) + ") for the screen '" + type.props.name + "'. It must be a non-empty string or 'undefined'.");
                  throw error;
                }
              } else {
                navigationKey = type.props.navigationKey;
                if (typeof outer1_8 !== "fileFinishedImporting") {
                  HermesBuiltin.throwTypeError();
                }
                let tmp9 = undefined === navigationKey;
                if (!tmp9) {
                  let tmp10 = typeof navigationKey === "y";
                  if (typeof navigationKey !== "__FORMATJS_LISTFORMAT_DATA__") {
                    tmp10 = "" !== navigationKey;
                  }
                  tmp9 = tmp10;
                }
                if (tmp9) {
                  let push = arr.push;
                  if (type.type === tmp2(tmp3[6])) {
                    if (null != items2) {
                      let items1 = [];
                      items1[HermesBuiltin.arraySpread(tmp17, 0)] = type.props.screenOptions;
                      items2 = items1;
                    } else {
                      items2 = [type.props.screenOptions];
                    }
                  }
                  if (typeof outer1_9 !== "fileFinishedImporting") {
                    HermesBuiltin.throwTypeError();
                  }
                  navigationKey = type.props.navigationKey;
                  let Children = obj.Children;
                  let items3 = [];
                  HermesBuiltin.arraySpread(Children.toArray(type.props.children).reduce((arr, type) => {
                    let obj = outer1_6;
                    if (outer1_6.isValidElement(type)) {
                      if (type.type === outer1_1(outer1_2[5])) {
                        let navigationKey2 = type.props.navigationKey;
                        if (typeof outer1_8 !== "fileFinishedImporting") {
                          HermesBuiltin.throwTypeError();
                        }
                        let tmp28 = undefined === navigationKey2;
                        if (!tmp28) {
                          let tmp29 = typeof navigationKey2 === "y";
                          if (typeof navigationKey2 !== "__FORMATJS_LISTFORMAT_DATA__") {
                            tmp29 = "" !== navigationKey2;
                          }
                          tmp28 = tmp29;
                        }
                        if (tmp28) {
                          obj = { keys: null, options: null, props: null };
                          let items = [navigationKey, type.props.navigationKey];
                          obj[0] = items;
                          obj[1] = items2;
                          obj[2] = type.props;
                          arr.push(obj);
                          return arr;
                        } else {
                          let _Error2 = Error;
                          let _JSON3 = JSON;
                          let _HermesInternal4 = HermesInternal;
                          let error = new Error("Got an invalid 'navigationKey' prop (" + JSON.stringify(type.props.navigationKey) + ") for the screen '" + type.props.name + "'. It must be a non-empty string or 'undefined'.");
                          throw error;
                        }
                      } else {
                        navigationKey = type.props.navigationKey;
                        if (typeof outer1_8 !== "fileFinishedImporting") {
                          HermesBuiltin.throwTypeError();
                        }
                        let tmp9 = undefined === navigationKey;
                        if (!tmp9) {
                          let tmp10 = typeof navigationKey === "y";
                          if (typeof navigationKey !== "__FORMATJS_LISTFORMAT_DATA__") {
                            tmp10 = "" !== navigationKey;
                          }
                          tmp9 = tmp10;
                        }
                        if (tmp9) {
                          let push = arr.push;
                          if (type.type === tmp2(tmp3[6])) {
                            if (null != items2) {
                              let items1 = [];
                              items1[HermesBuiltin.arraySpread(tmp17, 0)] = type.props.screenOptions;
                              items2 = items1;
                            } else {
                              items2 = [type.props.screenOptions];
                            }
                          }
                          if (typeof outer1_9 !== "fileFinishedImporting") {
                            HermesBuiltin.throwTypeError();
                          }
                          navigationKey = type.props.navigationKey;
                          let Children = obj.Children;
                          let items3 = [];
                          HermesBuiltin.arraySpread(Children.toArray(type.props.children).reduce((arr, type) => {
                            let obj = outer1_6;
                            if (outer1_6.isValidElement(type)) {
                              if (type.type === outer1_1(outer1_2[5])) {
                                let navigationKey2 = type.props.navigationKey;
                                if (typeof outer1_8 !== "fileFinishedImporting") {
                                  HermesBuiltin.throwTypeError();
                                }
                                let tmp28 = undefined === navigationKey2;
                                if (!tmp28) {
                                  let tmp29 = typeof navigationKey2 === "y";
                                  if (typeof navigationKey2 !== "__FORMATJS_LISTFORMAT_DATA__") {
                                    tmp29 = "" !== navigationKey2;
                                  }
                                  tmp28 = tmp29;
                                }
                                if (tmp28) {
                                  obj = { keys: null, options: null, props: null };
                                  let items = [navigationKey, type.props.navigationKey];
                                  obj[0] = items;
                                  obj[1] = items2;
                                  obj[2] = type.props;
                                  arr.push(obj);
                                  return arr;
                                } else {
                                  let _Error2 = Error;
                                  let _JSON3 = JSON;
                                  let _HermesInternal4 = HermesInternal;
                                  let error = new Error("Got an invalid 'navigationKey' prop (" + JSON.stringify(type.props.navigationKey) + ") for the screen '" + type.props.name + "'. It must be a non-empty string or 'undefined'.");
                                  throw error;
                                }
                              } else {
                                navigationKey = type.props.navigationKey;
                                if (typeof outer1_8 !== "fileFinishedImporting") {
                                  HermesBuiltin.throwTypeError();
                                }
                                let tmp9 = undefined === navigationKey;
                                if (!tmp9) {
                                  let tmp10 = typeof navigationKey === "y";
                                  if (typeof navigationKey !== "__FORMATJS_LISTFORMAT_DATA__") {
                                    tmp10 = "" !== navigationKey;
                                  }
                                  tmp9 = tmp10;
                                }
                                if (tmp9) {
                                  let push = arr.push;
                                  if (type.type === tmp2(tmp3[6])) {
                                    if (null != items2) {
                                      let items1 = [];
                                      items1[HermesBuiltin.arraySpread(tmp17, 0)] = type.props.screenOptions;
                                      items2 = items1;
                                    } else {
                                      items2 = [type.props.screenOptions];
                                    }
                                  }
                                  if (typeof outer1_9 !== "fileFinishedImporting") {
                                    HermesBuiltin.throwTypeError();
                                  }
                                  navigationKey = type.props.navigationKey;
                                  let Children = obj.Children;
                                  let items3 = [];
                                  HermesBuiltin.arraySpread(Children.toArray(type.props.children).reduce(() => { ... }, []), 0);
                                  HermesBuiltin.apply(items3, arr);
                                  return arr;
                                } else {
                                  let _Error = Error;
                                  let _JSON2 = JSON;
                                  let _HermesInternal3 = HermesInternal;
                                  let error1 = new Error("Got an invalid 'navigationKey' prop (" + JSON.stringify(type.props.navigationKey) + ") for the group. It must be a non-empty string or 'undefined'.");
                                  throw error1;
                                }
                              }
                            }
                            if (obj.isValidElement(type)) {
                              if (typeof type.type === "y") {
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
                                if (typeof type.props !== "window") {
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
                            } else if (typeof type === "ay") {
                              let _JSON = JSON;
                              combined = JSON.stringify(type);
                            } else {
                              let _String = String;
                              let _HermesInternal5 = HermesInternal;
                              combined = "'" + String(type) + "'";
                            }
                            let error2 = new Error("A navigator can only contain 'Screen', 'Group' or 'React.Fragment' as its direct children (found " + combined + "). To render this component in the navigator, pass it in the 'component' prop to 'Screen'.");
                            throw error2;
                          }, []), 0);
                          HermesBuiltin.apply(items3, arr);
                          return arr;
                        } else {
                          let _Error = Error;
                          let _JSON2 = JSON;
                          let _HermesInternal3 = HermesInternal;
                          let error1 = new Error("Got an invalid 'navigationKey' prop (" + JSON.stringify(type.props.navigationKey) + ") for the group. It must be a non-empty string or 'undefined'.");
                          throw error1;
                        }
                      }
                    }
                    if (obj.isValidElement(type)) {
                      if (typeof type.type === "y") {
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
                        if (typeof type.props !== "window") {
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
                    } else if (typeof type === "ay") {
                      let _JSON = JSON;
                      combined = JSON.stringify(type);
                    } else {
                      let _String = String;
                      let _HermesInternal5 = HermesInternal;
                      combined = "'" + String(type) + "'";
                    }
                    let error2 = new Error("A navigator can only contain 'Screen', 'Group' or 'React.Fragment' as its direct children (found " + combined + "). To render this component in the navigator, pass it in the 'component' prop to 'Screen'.");
                    throw error2;
                  }, []), 0);
                  HermesBuiltin.apply(items3, arr);
                  return arr;
                } else {
                  let _Error = Error;
                  let _JSON2 = JSON;
                  let _HermesInternal3 = HermesInternal;
                  let error1 = new Error("Got an invalid 'navigationKey' prop (" + JSON.stringify(type.props.navigationKey) + ") for the group. It must be a non-empty string or 'undefined'.");
                  throw error1;
                }
              }
            }
            if (obj.isValidElement(type)) {
              if (typeof type.type === "y") {
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
                if (typeof type.props !== "window") {
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
            } else if (typeof type === "ay") {
              let _JSON = JSON;
              combined = JSON.stringify(type);
            } else {
              let _String = String;
              let _HermesInternal5 = HermesInternal;
              combined = "'" + String(type) + "'";
            }
            let error2 = new Error("A navigator can only contain 'Screen', 'Group' or 'React.Fragment' as its direct children (found " + combined + "). To render this component in the navigator, pass it in the 'component' prop to 'Screen'.");
            throw error2;
          }, []), 0);
          HermesBuiltin.apply(items3, arr);
          return arr;
        } else {
          let _Error = Error;
          let _JSON2 = JSON;
          let _HermesInternal3 = HermesInternal;
          let error1 = new Error("Got an invalid 'navigationKey' prop (" + JSON.stringify(type.props.navigationKey) + ") for the group. It must be a non-empty string or 'undefined'.");
          throw error1;
        }
      }
    }
    if (obj.isValidElement(type)) {
      if (typeof type.type === "y") {
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
        if (typeof type.props !== "window") {
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
    } else if (typeof type === "ay") {
      let _JSON = JSON;
      combined = JSON.stringify(type);
    } else {
      let _String = String;
      let _HermesInternal5 = HermesInternal;
      combined = "'" + String(type) + "'";
    }
    let error2 = new Error("A navigator can only contain 'Screen', 'Group' or 'React.Fragment' as its direct children (found " + combined + "). To render this component in the navigator, pass it in the 'component' prop to 'Screen'.");
    throw error2;
  }, []);
  const reduced1 = reduced.reduce((arg0, props) => {
    if (props.props.name in arg0) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("A navigator cannot contain multiple 'Screen' components with the same name (found duplicate screen named '" + props.props.name + "')");
      throw error;
    } else {
      arg0[props.props.name] = props;
      return arg0;
    }
  }, {});
  mapped = reduced.map((props) => props.props.name);
  reduced2 = mapped.reduce((arg0, arg1) => {
    const keys = reduced1[arg1].keys;
    const mapped = keys.map((arg0) => {
      let str = arg0;
      if (arg0 == null) {
        str = "";
      }
      return str;
    });
    arg0[arg1] = mapped.join(":");
    return arg0;
  }, {});
  const reduced3 = mapped.reduce((arg0, arg1) => {
    arg0[arg1] = reduced1[arg1].props.initialParams;
    return arg0;
  }, {});
  const reduced4 = mapped.reduce((arg0, arg1) => Object.assign(arg0, { [arg1]: reduced1[arg1].props.getId }), {});
  if (mapped.length) {
    let items = [current.type];
    const callback = obj.useCallback((type) => {
      let tmp = undefined === type.type;
      if (!tmp) {
        tmp = type.type === current.type;
      }
      return tmp;
    }, items);
    let items1 = [callback];
    callback1 = obj.useCallback((stale) => {
      let tmp = undefined !== stale;
      if (tmp) {
        tmp = false === stale.stale;
      }
      if (tmp) {
        tmp = callback(stale);
      }
      return tmp;
    }, items1);
    const context1 = obj.useContext(tmp(tmp2[9]));
    let state = context1.state;
    const getState = context1.getState;
    const setState = context1.setState;
    ({ setKey: closure_13, getKey: closure_14, getIsInitial: closure_15 } = context1);
    let closure_16 = obj.useRef(false);
    let items2 = [setState];
    let closure_17 = obj.useCallback(() => {
      setState(undefined);
      closure_16.current = true;
    }, items2);
    let items3 = [setState];
    const callback2 = obj.useCallback((arg0) => {
      if (!ref.current) {
        setState(arg0);
      }
    }, items3);
    let items4 = [state, current, callback];
    [tmp23, tmp24] = reduced1(obj.useMemo(() => {
      const reduced = mapped.reduce((arg0, arg1) => {
        const initialParams = table[arg1].props.initialParams;
        let state;
        if (closure_1 != null) {
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
          const obj = {};
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
          let params = context.params;
          if (params != null) {
            state = params.state;
          }
        }
        if (null == state) {
          let obj = { routeNames: null, routeParamList: null, routeGetIdList: null };
          obj[0] = tmp;
          obj[1] = reduced;
          obj[2] = reduced4;
          let items = [current.getInitialState(obj), true];
        }
        return items;
      }
      let state1;
      if (context != null) {
        let params2 = context.params;
        if (params2 != null) {
          state1 = params2.state;
        }
      }
      if (state1 == null) {
        state1 = tmp3;
      }
      obj = { routeNames: tmp, routeParamList: reduced, routeGetIdList: reduced4 };
      const items1 = [current.getRehydratedState(state1, obj), false];
      items = items1;
    }, items4), 2);
    const ref = obj.useRef(reduced2);
    const effect = obj.useEffect(() => {
      ref.current = reduced2;
    });
    const current2 = ref.current;
    let tmp27 = tmp23;
    if (callback1(state)) {
      tmp27 = state;
    }
    let closure_21 = tmp27;
    let rehydratedState = tmp27;
    const tmp22 = reduced1(obj.useMemo(() => {
      const reduced = mapped.reduce((arg0, arg1) => {
        const initialParams = table[arg1].props.initialParams;
        let state;
        if (closure_1 != null) {
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
          const obj = {};
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
          let params = context.params;
          if (params != null) {
            state = params.state;
          }
        }
        if (null == state) {
          let obj = { routeNames: null, routeParamList: null, routeGetIdList: null };
          obj[0] = tmp;
          obj[1] = reduced;
          obj[2] = reduced4;
          let items = [current.getInitialState(obj), true];
        }
        return items;
      }
      let state1;
      if (context != null) {
        let params2 = context.params;
        if (params2 != null) {
          state1 = params2.state;
        }
      }
      if (state1 == null) {
        state1 = tmp3;
      }
      obj = { routeNames: tmp, routeParamList: reduced, routeGetIdList: reduced4 };
      const items1 = [current.getRehydratedState(state1, obj), false];
      items = items1;
    }, items4), 2);
    rehydratedState = tmp27;
    if (!tmp28) {
      const obj1 = { routeNames: null, routeParamList: null, routeGetIdList: null, routeKeyChanges: null };
      obj1[0] = mapped;
      obj1[1] = reduced3;
      obj1[2] = reduced4;
      let _Object = Object;
      let keys = Object.keys(reduced2);
      obj1[3] = keys.filter((key10009) => {
        let hasOwnPropertyResult = current2.hasOwnProperty(key10009);
        if (hasOwnPropertyResult) {
          hasOwnPropertyResult = reduced2[key10009] !== current2[key10009];
        }
        return hasOwnPropertyResult;
      });
      const stateForRouteNamesChange = current.getStateForRouteNamesChange(tmp27, obj1);
      rehydratedState = stateForRouteNamesChange;
      rehydratedState = stateForRouteNamesChange;
    }
    let params1;
    if (context != null) {
      params1 = context.params;
    }
    const ref1 = obj.useRef(params1);
    let params2;
    if (context != null) {
      params2 = context.params;
    }
    const items5 = [params2];
    const effect1 = obj.useEffect(() => {
      let params;
      if (context != null) {
        params = context.params;
      }
      ref1.current = params;
    }, items5);
    let params3;
    if (context != null) {
      params3 = context.params;
    }
    let tmp37 = rehydratedState;
    if (params3) {
      const current3 = ref1.current;
      if (typeof context.params.state !== "window") {
        if (null != context.params.state) {
          if (context.params !== current3) {
            const CommonActions2 = _require(tmp2[12]).CommonActions;
            let resetResult = CommonActions2.reset(context.params.state);
          }
          let stateForAction = null;
          if (resetResult) {
            const obj2 = { routeNames: null, routeParamList: null, routeGetIdList: null };
            obj2[0] = mapped;
            obj2[1] = reduced3;
            obj2[2] = reduced4;
            stateForAction = current.getStateForAction(rehydratedState, resetResult, obj2);
          }
          if (null !== stateForAction) {
            const obj3 = { routeNames: null, routeParamList: null, routeGetIdList: null };
            obj3[0] = mapped;
            obj3[1] = reduced3;
            obj3[2] = reduced4;
            rehydratedState = current.getRehydratedState(stateForAction, obj3);
          }
          tmp37 = rehydratedState;
        }
      }
      let screen = context.params.screen;
      let tmp38 = typeof screen === "y";
      if (typeof screen !== "__FORMATJS_LISTFORMAT_DATA__") {
        tmp38 = false === context.params.initial && tmp24 || context.params !== current3;
        const tmp39 = false === context.params.initial && tmp24 || context.params !== current3;
      }
      if (tmp38) {
        const CommonActions = _require(tmp2[12]).CommonActions;
        const obj4 = { name: null, params: null, path: null };
        obj4[0] = context.params.screen;
        obj4[1] = context.params.params;
        obj4[2] = context.params.path;
        resetResult = CommonActions.navigate(obj4);
      }
    }
    let closure_24 = tmp27 !== tmp37;
    tmp(tmp2[13])(() => {
      if (closure_24) {
        callback2(rehydratedState);
      }
    });
    closure_21 = tmp37;
    const effect2 = obj.useEffect(() => {
      callback(closure_0);
      if (!callback2()) {
        callback2(rehydratedState);
      }
      return () => {
        const timerId = setTimeout(() => {
          let tmp = undefined !== callback();
          if (tmp) {
            tmp = callback2() === closure_0;
          }
          if (tmp) {
            callback3();
          }
        }, 0);
      };
    }, []);
    const ref2 = obj.useRef();
    ref2.current = tmp23;
    const items6 = [getState, callback1];
    const callback3 = obj.useCallback(() => {
      let current = getState();
      if (!callback1(current)) {
        current = ref2.current;
      }
      return current;
    }, items6);
    const tmp48 = tmp(tmp2[14])((target) => {
      let closure_0 = target;
      const items = [];
      const routes = tmp37.routes;
      if (target.target) {
        let found = routes.find((key) => key.key === target.target);
        let closure_1 = found;
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
        let keys = Object.keys(reduced1);
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
        const navigation = tmp62[tmp2.key].navigation;
        const items2 = [];
        const concat = items2.concat;
        const items3 = [navigation];
        HermesBuiltin.arraySpread(items.map((arg0) => table[arg0].props.listeners), 1);
        const items4 = [];
        HermesBuiltin.arraySpread(items3.map((arg0) => {
          let tmp = arg0;
          if (typeof arg0 !== "disabledUntil") {
            const obj = { route: null, navigation: null };
            obj[0] = closure_1;
            obj[1] = navigation;
            tmp = arg0(obj);
          }
          let closure_0 = tmp;
          let mapped;
          if (tmp) {
            const _Object = Object;
            const keys = Object.keys(tmp);
            const found = keys.filter((arg0) => arg0 === tmp.type);
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
    });
    let closure_26 = tmp48;
    const obj5 = { state: null, emitter: null };
    obj5[0] = tmp37;
    obj5[1] = tmp48;
    tmp(tmp2[15])(obj5);
    const items7 = [tmp48, tmp37];
    const effect3 = obj.useEffect(() => {
      tmp48.emit({ type: "state", data: { state: closure_21 } });
    }, items7);
    tmp28 = tmp(tmp2[10])(tmp27.routeNames, mapped) && tmp(tmp2[11])(reduced2, current2);
    ({ listeners, addListener } = tmp(tmp2[16])());
    const tmp51 = tmp(tmp2[16])();
    ({ keyedListeners, addKeyedListener } = tmp(tmp2[17])());
    const obj6 = { router: null, getState: null, setState: null, key: null, actionListeners: null, beforeRemoveListeners: null, routerConfigOptions: null, emitter: null };
    obj6[0] = current;
    obj6[1] = callback3;
    obj6[2] = callback2;
    let key;
    let tmpResult = tmp(tmp2[18]);
    if (context != null) {
      key = context.key;
    }
    obj6[3] = key;
    obj6[4] = listeners.action;
    obj6[5] = keyedListeners.beforeRemove;
    const obj7 = { routeNames: null, routeParamList: null, routeGetIdList: null };
    obj7[0] = mapped;
    obj7[1] = reduced3;
    obj7[2] = reduced4;
    obj6[6] = obj7;
    obj6[7] = tmp48;
    const tmpResultResult = tmpResult(obj6);
    const obj8 = { router: null, key: null, getState: null, setState: null };
    obj8[0] = current;
    let key1;
    tmpResult = tmp(tmp2[19]);
    if (context != null) {
      key1 = context.key;
    }
    obj8[1] = key1;
    obj8[2] = callback3;
    obj8[3] = callback2;
    const tmp52 = tmp(tmp2[17])();
    const obj9 = { id: null, onAction: null, getState: null, emitter: null, router: null };
    obj9[0] = screenListeners.id;
    obj9[1] = tmpResultResult;
    obj9[2] = callback3;
    obj9[3] = tmp48;
    obj9[4] = current;
    const tmp59 = tmp(tmp2[20])(obj9);
    let closure_27 = tmp59;
    const obj10 = { navigation: null, focusedListeners: null };
    obj10[0] = tmp59;
    obj10[1] = listeners.focus;
    tmp(tmp2[21])(obj10);
    const obj11 = { getState: null, getStateListeners: null };
    obj11[0] = callback3;
    obj11[1] = keyedListeners.getState;
    tmp(tmp2[22])(obj11);
    const obj12 = { state: null, screens: null, navigation: null, screenOptions: null, defaultScreenOptions: null, onAction: null, getState: null, setState: null, onRouteFocus: null, addListener: null, addKeyedListener: null, router: null, emitter: null };
    obj12[0] = tmp37;
    obj12[1] = reduced1;
    obj12[2] = tmp59;
    ({ screenOptions: obj14[3], defaultScreenOptions: obj14[4] } = screenListeners);
    obj12[5] = tmpResultResult;
    obj12[6] = callback3;
    obj12[7] = callback2;
    obj12[8] = tmpResult(obj8);
    obj12[9] = addListener;
    obj12[10] = addKeyedListener;
    obj12[11] = current;
    obj12[12] = tmp48;
    const tmp62 = tmp(tmp2[23])(obj12);
    let closure_28 = tmp62;
    const obj13 = { state: null, navigation: null, descriptors: null };
    obj13[0] = tmp37;
    obj13[1] = tmp59;
    obj13[2] = tmp62;
    tmp(tmp2[24])(obj13);
    const obj14 = { state: null, navigation: null, descriptors: null, NavigationContent: null };
    obj14[0] = tmp37;
    obj14[1] = tmp59;
    obj14[2] = tmp62;
    obj14[3] = tmp(tmp2[25])((children) => {
      let obj = { value: closure_27, children: null };
      obj = { children };
      obj[1] = reduced4(context(screenListeners[27]), obj);
      return reduced4(context(screenListeners[26]).Provider, obj);
    });
    return obj14;
  } else {
    let _Error = Error;
    let error = new Error("Couldn't find any screens for the navigator. Have you defined any screens as its children?");
    throw error;
  }
  const toArrayResult = Children.toArray(screenListeners.children);
};