// === Module 16277: createChatPanelNativeStackNavigator ===

// Module 16277 (createChatPanelNativeStackNavigator)
import Link from "Link" /* 1504 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4937 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["id", "initialRouteName", "UNSTABLE_routeNamesChangeBehavior", "children", "layout", "screenListeners", "screenOptions", "screenLayout", "UNSTABLE_router"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChatPanelNativeStackNavigator(arg0) {
  let tmp = navigation;
  let tmp2 = state2;
  const cResult = navigation(state2[4]).c(38);
  if (cResult[0] !== arg0) {
    ({ id, initialRouteName, UNSTABLE_routeNamesChangeBehavior, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router } = arg0);
    const tmp16 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = UNSTABLE_routeNamesChangeBehavior;
    cResult[2] = UNSTABLE_router;
    cResult[3] = children;
    cResult[4] = id;
    cResult[5] = initialRouteName;
    cResult[6] = layout;
    cResult[7] = tmp16;
    cResult[8] = screenLayout;
    cResult[9] = screenListeners;
    cResult[10] = screenOptions;
    let tmp13 = screenOptions;
    let tmp12 = screenListeners;
    let tmp11 = screenLayout;
    let tmp10 = tmp16;
    let tmp9 = layout;
    let tmp8 = initialRouteName;
    let tmp7 = id;
    let tmp6 = children;
    let tmp5 = UNSTABLE_router;
    let tmp4 = UNSTABLE_routeNamesChangeBehavior;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
    tmp11 = cResult[8];
    tmp12 = cResult[9];
    tmp13 = cResult[10];
  }
  if (cResult[11] === tmp4) {
    if (cResult[12] === tmp5) {
      if (cResult[13] === tmp6) {
        if (cResult[14] === tmp7) {
          if (cResult[15] === tmp8) {
            if (cResult[16] === tmp9) {
              if (cResult[17] === tmp11) {
                if (cResult[18] === tmp12) {
                  if (cResult[19] === tmp13) {
                    let tmp17 = cResult[20];
                  }
                  const navigationBuilder = tmp(tmp2[5]).useNavigationBuilder(tmp(tmp2[5]).StackRouter, tmp17);
                  ({ state, describe, descriptors, navigation } = navigationBuilder);
                  const NavigationContent = navigationBuilder.NavigationContent;
                  if (cResult[21] === descriptors) {
                    if (cResult[22] === state) {
                      state2 = tmp20.state;
                      const accessibilityPatchedDescriptors = tmp(tmp2[7]).useAccessibilityPatchedDescriptors(tmp20.filteredDescriptors);
                      if (cResult[24] === navigation) {
                        if (cResult[25] === state2.index) {
                          if (cResult[26] === state2.key) {
                            let tmp42 = cResult[27];
                            let tmp43 = cResult[28];
                          }
                          const effect = noop.useEffect(tmp42, tmp43);
                          if (cResult[29] === accessibilityPatchedDescriptors) {
                            if (cResult[30] === describe) {
                              if (cResult[31] === navigation) {
                                if (cResult[32] === tmp10) {
                                  if (cResult[33] === state2) {
                                    let tmp46 = cResult[34];
                                  }
                                  if (cResult[35] === NavigationContent) {
                                    if (cResult[36] === tmp46) {
                                      let tmp51 = cResult[37];
                                    }
                                    return tmp51;
                                  }
                                  const obj2 = { children: tmp46 };
                                  const tmp53 = <NavigationContent>{tmp46}</NavigationContent>;
                                  cResult[35] = NavigationContent;
                                  class O {
                                    constructor() {
                                      tmp = navigation;
                                      addListenerResult = undefined;
                                      if (navigation != null) {
                                        addListener = tmp.addListener;
                                        if (addListener != null) {
                                          str = "tabPress";
                                          addListenerResult = addListener("tabPress", () => { ... });
                                        }
                                      }
                                      return addListenerResult;
                                    }
                                  }
                                  cResult[37] = tmp53;
                                  tmp51 = tmp53;
                                }
                              }
                            }
                          }
                          const obj3 = {};
                          class O {
                            constructor() {
                              tmp = navigation;
                              addListenerResult = undefined;
                              if (navigation != null) {
                                addListener = tmp.addListener;
                                if (addListener != null) {
                                  str = "tabPress";
                                  addListenerResult = addListener("tabPress", () => { ... });
                                }
                              }
                              return addListenerResult;
                            }
                          }
                          obj3.state = state2;
                          obj3.navigation = navigation;
                          obj3.descriptors = accessibilityPatchedDescriptors;
                          obj3.describe = describe;
                          const tmp50 = jsx(tmp(tmp2[8]).NativeStackView, {});
                          cResult[29] = accessibilityPatchedDescriptors;
                          cResult[30] = describe;
                          cResult[31] = navigation;
                          cResult[32] = tmp10;
                          cResult[33] = state2;
                          cResult[34] = tmp50;
                          tmp46 = tmp50;
                        }
                      }
                      class O {
                        constructor() {
                          tmp = navigation;
                          addListenerResult = undefined;
                          if (navigation != null) {
                            addListener = tmp.addListener;
                            if (addListener != null) {
                              str = "tabPress";
                              addListenerResult = addListener("tabPress", () => { ... });
                            }
                          }
                          return addListenerResult;
                        }
                      }
                      const items = [navigation, , ];
                      ({ index: arr4[1], key: arr4[2] } = state2);
                      cResult[24] = navigation;
                      cResult[25] = state2.index;
                      cResult[26] = state2.key;
                      cResult[27] = O;
                      cResult[28] = items;
                      tmp43 = items;
                      tmp42 = O;
                      const tmpResult2 = tmp(tmp2[7]);
                    }
                  }
                  const obj4 = {};
                  let merged = Object.assign(state);
                  const items1 = [];
                  let num12 = 0;
                  HermesBuiltin.arraySpread(state.routes, 0);
                  obj4.routes = items1;
                  const items2 = [];
                  const items3 = [];
                  const obj6 = {};
                  let num15 = 0;
                  let num16 = 0;
                  if (0 < obj4.routes.length) {
                    do {
                      let tmp29 = obj4.routes[num15];
                      let tmp31 = state2;
                      let obj5 = navigation(state2[6]);
                      if (null != obj5.coerceChannelRoute(tmp29)) {
                        let arr = items2.push(tmp29);
                        let sum = num16;
                        if (num15 <= obj4.index) {
                          sum = num16 + 1;
                        }
                      } else {
                        let arr2 = items3.push(tmp29);
                        sum = num16;
                        if (tmp29.key in descriptors) {
                          obj6[tmp29.key] = descriptors[tmp29.key];
                          sum = num16;
                        }
                      }
                      num15 = num15 + 1;
                      num16 = sum;
                      class O {
                        constructor() {
                          tmp = navigation;
                          addListenerResult = undefined;
                          if (navigation != null) {
                            addListener = tmp.addListener;
                            if (addListener != null) {
                              str = "tabPress";
                              addListenerResult = addListener("tabPress", () => { ... });
                            }
                          }
                          return addListenerResult;
                        }
                      }
                      tmp2 = tmp31;
                      tmp = navigation;
                    } while (num15 < obj4.routes.length);
                  }
                  const _Math = Math;
                  obj4.index = Math.max(num12, obj4.index - 0);
                  obj4.routes = items3;
                  if (num12 === obj4.routes.length) {
                    obj4.index = num12;
                  } else if (obj4.index >= obj4.routes.length) {
                    obj4.index = obj4.routes.length - 1;
                  }
                  const obj7 = { state: obj4, filteredDescriptors: obj6 };
                  cResult[21] = descriptors;
                  cResult[22] = state;
                  num12 = 23;
                  cResult[23] = obj7;
                  const tmpResult = tmp(tmp2[5]);
                }
              }
            }
          }
        }
      }
    }
  }
  tmp18[0] = tmp7;
  tmp18[1] = tmp8;
  tmp18[2] = tmp4;
  tmp18[3] = tmp6;
  tmp18[4] = tmp9;
  tmp18[5] = tmp12;
  tmp18[6] = tmp13;
  tmp18[7] = tmp11;
  tmp18[8] = tmp5;
  cResult[11] = tmp4;
  cResult[12] = tmp5;
  cResult[13] = tmp6;
  cResult[14] = tmp7;
  cResult[15] = tmp8;
  cResult[16] = tmp9;
  cResult[17] = tmp11;
  cResult[18] = tmp12;
  cResult[19] = tmp13;
  cResult[20] = tmp18;
  tmp17 = tmp18;
  let obj = navigation(state2[4]);
}) : (function ChatPanelNativeStackNavigator(arg0) {
  ({ id, initialRouteName, UNSTABLE_routeNamesChangeBehavior, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router } = arg0);
  let merged = Object.assign(arg0, Object.assign({ id: 0, initialRouteName: 0, UNSTABLE_routeNamesChangeBehavior: 0, children: 0, layout: 0, screenListeners: 0, screenOptions: 0, screenLayout: 0, UNSTABLE_router: 0 }));
  state = undefined;
  let descriptors;
  const navigationBuilder = state(descriptors[5]).useNavigationBuilder(state(descriptors[5]).StackRouter, { id, initialRouteName, UNSTABLE_routeNamesChangeBehavior, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router });
  state = navigationBuilder.state;
  descriptors = navigationBuilder.descriptors;
  const navigation = navigationBuilder.navigation;
  let items = [state, descriptors];
  ({ describe, NavigationContent } = navigationBuilder);
  const memo = noop.useMemo(() => {
    state = {};
    const merged = Object.assign(state);
    const items = [...state.routes];
    state.routes = items;
    const items1 = [];
    const items2 = [];
    const obj = {};
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    if (0 < state.routes.length) {
      do {
        let tmp2 = state.routes[num];
        let obj3 = NavigationRouteUtils;
        if (null != obj3.coerceChannelRoute(tmp2)) {
          let arr = items1.push(tmp2);
          let sum = num2;
          if (num <= state.index) {
            sum = num2 + 1;
          }
        } else {
          let arr2 = items2.push(tmp2);
          sum = num2;
          if (tmp2.key in descriptors) {
            obj[tmp2.key] = tmp8[tmp2.key];
            sum = num2;
          }
        }
        num = num + 1;
        num2 = sum;
        num3 = sum;
      } while (num < state.routes.length);
    }
    state.index = Math.max(0, state.index - num3);
    state.routes = items2;
    if (0 === state.routes.length) {
      state.index = 0;
    } else if (state.index >= state.routes.length) {
      state.index = state.routes.length - 1;
    }
    return { state, filteredDescriptors: obj };
  }, items);
  const state2 = memo.state;
  let obj = state(descriptors[5]);
  let items1 = [navigation, , ];
  ({ index: arr2[1], key: arr2[2] } = state2);
  const accessibilityPatchedDescriptors = state(descriptors[7]).useAccessibilityPatchedDescriptors(memo.filteredDescriptors);
  const effect = noop.useEffect(() => {
    let addListenerResult;
    if (navigation != null) {
      const addListener = navigation.addListener;
      if (addListener != null) {
        addListenerResult = addListener("tabPress", (arg0) => {
          const defaultPrevented = arg0;
          closure_1 = focused.isFocused();
          const animationFrame = requestAnimationFrame(() => {
            let tmp2 = index.index > 0;
            if (tmp2) {
              tmp2 = closure_1;
            }
            if (tmp2) {
              tmp2 = !defaultPrevented.defaultPrevented;
            }
            if (tmp2) {
              const obj = {};
              const StackActions = state(descriptors[5]).StackActions;
              const merged = Object.assign(StackActions.popToTop());
              obj.target = index.key;
              navigation.dispatch(obj);
            }
          });
        });
      }
    }
    return addListenerResult;
  }, items1);
  let obj3 = { children: null };
  const obj4 = {};
  const merged1 = Object.assign(merged);
  obj4.state = state2;
  obj4.navigation = navigation;
  obj4.descriptors = accessibilityPatchedDescriptors;
  obj4.describe = describe;
  obj3.children = jsx(state(descriptors[8]).NativeStackView, {});
  return <NavigationContent>{null}</NavigationContent>;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/createChatPanelNativeStackNavigator.tsx");

export default function createChatPanelNativeStackNavigator(arg0) {
  return Link.createNavigatorFactory(closure_6)(arg0);
};