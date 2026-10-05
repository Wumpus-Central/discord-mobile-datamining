// === Module 15863: createChatPanelNativeStackNavigator ===

// Module 15863 (createChatPanelNativeStackNavigator)
import Fragment from "Fragment" /* 21 */;
import Link from "Link" /* 1491 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4736 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation, str, tmp;

let closure_2 = ["id", "initialRouteName", "UNSTABLE_routeNamesChangeBehavior", "children", "layout", "screenListeners", "screenOptions", "screenLayout", "UNSTABLE_router"];
const jsx = Fragment.jsx;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let UNSTABLE_routeNamesChangeBehavior;
  let UNSTABLE_router;
  let children;
  let describe;
  let descriptors;
  let id;
  let initialRouteName;
  let items3;
  let layout;
  let num17;
  let obj4;
  let screenLayout;
  let screenListeners;
  let screenOptions;
  let state;
  let state2;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let tmp2 = navigation;
  let tmp3 = state2;
  let obj = navigation(state2[4]);
  const cResult = obj.c(38);
  if (cResult[0] !== arg0) {
    ({ id, initialRouteName, UNSTABLE_routeNamesChangeBehavior, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router } = arg0);
    const tmp17 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = UNSTABLE_routeNamesChangeBehavior;
    cResult[2] = UNSTABLE_router;
    cResult[3] = children;
    cResult[4] = id;
    cResult[5] = initialRouteName;
    cResult[6] = layout;
    cResult[7] = tmp17;
    cResult[8] = screenLayout;
    cResult[9] = screenListeners;
    cResult[10] = screenOptions;
    tmp14 = screenOptions;
    tmp13 = screenListeners;
    tmp12 = screenLayout;
    tmp11 = tmp17;
    tmp10 = layout;
    tmp9 = initialRouteName;
    tmp8 = id;
    tmp7 = children;
    tmp6 = UNSTABLE_router;
    tmp5 = UNSTABLE_routeNamesChangeBehavior;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
    tmp7 = cResult[3];
    tmp8 = cResult[4];
    tmp9 = cResult[5];
    tmp10 = cResult[6];
    tmp11 = cResult[7];
    tmp12 = cResult[8];
    tmp13 = cResult[9];
    tmp14 = cResult[10];
  }
  if (cResult[11] === tmp5) {
    if (cResult[12] === tmp6) {
      if (cResult[13] === tmp7) {
        if (cResult[14] === tmp8) {
          if (cResult[15] === tmp9) {
            if (cResult[16] === tmp10) {
              if (cResult[17] === tmp12) {
                if (cResult[18] === tmp13) {
                  let tmp18;
                  if (cResult[19] === tmp14) {
                    tmp18 = cResult[20];
                  }
                  const tmp2Result = tmp2(tmp3[5]);
                  const navigationBuilder = tmp2Result.useNavigationBuilder(tmp2(tmp3[5]).StackRouter, tmp18);
                  ({ state, describe, descriptors, navigation } = navigationBuilder);
                  const NavigationContent = navigationBuilder.NavigationContent;
                  if (cResult[21] === descriptors) {
                    let tmp20;
                    let tmp21;
                    let tmp22;
                    if (cResult[22] === state) {
                      tmp20 = cResult[23];
                      tmp21 = tmp3;
                      tmp22 = tmp2;
                    }
                    state2 = tmp20.state;
                    const filteredDescriptors = tmp20.filteredDescriptors;
                    const tmp22Result = tmp22(tmp21[7]);
                    const accessibilityPatchedDescriptors = tmp22Result.useAccessibilityPatchedDescriptors(filteredDescriptors);
                    if (cResult[24] === navigation) {
                      if (cResult[25] === state2.index) {
                        let tmp39;
                        let tmp40;
                        if (cResult[26] === state2.key) {
                          tmp39 = cResult[27];
                          tmp40 = cResult[28];
                        }
                        const effect = react.useEffect(tmp39, tmp40);
                        if (cResult[29] === accessibilityPatchedDescriptors) {
                          if (cResult[30] === describe) {
                            if (cResult[31] === navigation) {
                              if (cResult[32] === tmp11) {
                                let tmp43;
                                if (cResult[33] === state2) {
                                  tmp43 = cResult[34];
                                }
                                if (cResult[35] === NavigationContent) {
                                  let tmp48;
                                  if (cResult[36] === tmp43) {
                                    tmp48 = cResult[37];
                                  }
                                  return tmp48;
                                }
                                const tmp50 = <NavigationContent>{tmp43}</NavigationContent>;
                                class O {
                                  constructor() {
                                    tmp = navigation;
                                    addListenerResult = undefined;
                                    if (navigation != null) {
                                      addListener = tmp.addListener;
                                      if (addListener != null) {
                                        str = "tabPress";
                                        addListenerResult = addListener("tabPress", () => { /* body not rendered: F145139 */ });
                                      }
                                    }
                                    return addListenerResult;
                                  }
                                }
                                cResult[36] = tmp43;
                                cResult[37] = tmp50;
                                tmp48 = tmp50;
                              }
                            }
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
                                addListenerResult = addListener("tabPress", () => { /* body not rendered: F145139 */ });
                              }
                            }
                            return addListenerResult;
                          }
                        }
                        const NativeStackView = tmp22(tmp21[8]).NativeStackView;
                        let merged = Object.assign(tmp11);
                        const tmp47 = <NativeStackView state={state2} navigation={navigation} descriptors={accessibilityPatchedDescriptors} describe={describe} />;
                        cResult[29] = accessibilityPatchedDescriptors;
                        cResult[30] = describe;
                        cResult[31] = navigation;
                        cResult[32] = tmp11;
                        cResult[33] = state2;
                        cResult[34] = tmp47;
                        tmp43 = tmp47;
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
                            addListenerResult = addListener("tabPress", () => { /* body not rendered: F145139 */ });
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
                    tmp40 = items;
                    tmp39 = O;
                  }
                  obj4 = { routes: items3, index: Math.max(0, obj4.index - num17) };
                  const merged1 = Object.assign(state);
                  const items1 = [];
                  HermesBuiltin.arraySpread(items1, state.routes, 0);
                  const items2 = [];
                  items3 = [];
                  const obj5 = {};
                  let num16 = 0;
                  num17 = 0;
                  while (0 < obj4.routes.length) {
                    let sum;
                    let tmp29 = obj4.routes[num15];
                    let tmp31 = state2;
                    let obj6 = navigation(state2[6]);
                    if (null != obj6.coerceChannelRoute(tmp29)) {
                      let arr = items2.push(tmp29);
                      sum = num16;
                      if (num15 <= obj4.index) {
                        sum = num16 + 1;
                      }
                    } else {
                      let arr2 = items3.push(tmp29);
                      sum = num16;
                      if (tmp29.key in descriptors) {
                        obj5[tmp29.key] = descriptors[tmp29.key];
                        sum = num16;
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
                            addListenerResult = addListener("tabPress", () => { /* body not rendered: F145139 */ });
                          }
                        }
                        return addListenerResult;
                      }
                    }
                    num16 = sum;
                    num17 = sum;
                    tmp3 = tmp31;
                    tmp2 = navigation;
                  }
                  const _Math = Math;
                  if (0 === obj4.routes.length) {
                    obj4.index = 0;
                  } else if (obj4.index >= obj4.routes.length) {
                    obj4.index = obj4.routes.length - 1;
                  }
                  const obj7 = { state: obj4, filteredDescriptors: obj5 };
                  cResult[21] = descriptors;
                  cResult[22] = state;
                  cResult[23] = obj7;
                  tmp20 = obj7;
                  tmp21 = tmp3;
                  tmp22 = tmp2;
                }
              }
            }
          }
        }
      }
    }
  }
  const obj8 = { id: tmp8, initialRouteName: tmp9, UNSTABLE_routeNamesChangeBehavior: tmp5, children: tmp7, layout: tmp10, screenListeners: tmp13, screenOptions: tmp14, screenLayout: tmp12, UNSTABLE_router: tmp6 };
  cResult[11] = tmp5;
  cResult[12] = tmp6;
  cResult[13] = tmp7;
  cResult[14] = tmp8;
  cResult[15] = tmp9;
  cResult[16] = tmp10;
  cResult[17] = tmp12;
  cResult[18] = tmp13;
  cResult[19] = tmp14;
  cResult[20] = obj8;
  tmp18 = obj8;
}) : ((arg0) => {
  let NavigationContent;
  let UNSTABLE_routeNamesChangeBehavior;
  let UNSTABLE_router;
  let children;
  let describe;
  let id;
  let initialRouteName;
  let layout;
  let screenLayout;
  let screenListeners;
  let screenOptions;
  ({ id, initialRouteName, UNSTABLE_routeNamesChangeBehavior, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router } = arg0);
  let merged = Object.assign(arg0, Object.assign({ id: 0, initialRouteName: 0, UNSTABLE_routeNamesChangeBehavior: 0, children: 0, layout: 0, screenListeners: 0, screenOptions: 0, screenLayout: 0, UNSTABLE_router: 0 }));
  let state;
  let descriptors;
  let obj = state(descriptors[5]);
  const navigationBuilder = obj.useNavigationBuilder(state(descriptors[5]).StackRouter, { id, initialRouteName, UNSTABLE_routeNamesChangeBehavior, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router });
  state = navigationBuilder.state;
  descriptors = navigationBuilder.descriptors;
  navigation = navigationBuilder.navigation;
  let items = [state, descriptors];
  ({ describe, NavigationContent } = navigationBuilder);
  const memo = react.useMemo(() => {
    let items2;
    let num3;
    state = { routes: items2, index: Math.max(0, state.index - num3) };
    const merged = Object.assign(state);
    const items = [...state.routes];
    const items1 = [];
    items2 = [];
    const obj = {};
    let num = 0;
    let num2 = 0;
    num3 = 0;
    if (0 < state.routes.length) {
      do {
        let sum;
        let tmp2 = state.routes[num];
        let obj3 = NavigationRouteUtils;
        if (null != obj3.coerceChannelRoute(tmp2)) {
          let arr = items1.push(tmp2);
          sum = num2;
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
    if (0 === state.routes.length) {
      state.index = 0;
    } else if (state.index >= state.routes.length) {
      state.index = state.routes.length - 1;
    }
    return { state, filteredDescriptors: obj };
  }, items);
  const state2 = memo.state;
  const filteredDescriptors = memo.filteredDescriptors;
  let items1 = [navigation, , ];
  ({ index: arr2[1], key: arr2[2] } = state2);
  const obj2 = state(descriptors[7]);
  const accessibilityPatchedDescriptors = obj2.useAccessibilityPatchedDescriptors(filteredDescriptors);
  const effect = react.useEffect(() => {
    let focused;
    let index;
    let addListenerResult;
    if (navigation != null) {
      const addListener = navigation.addListener;
      if (addListener != null) {
        addListenerResult = addListener("tabPress", (arg0) => {
          const defaultPrevented = arg0;
          let closure_1 = focused.isFocused();
          const animationFrame = requestAnimationFrame(() => {
            const tmp2 = index.index > 0 && closure_1 && !defaultPrevented.defaultPrevented;
            if (tmp2) {
              const dispatch = focused.dispatch;
              const obj = { target: index.key };
              const StackActions = state(descriptors[5]).StackActions;
              const merged = Object.assign(StackActions.popToTop());
              dispatch(obj);
            }
          });
        });
      }
    }
    return addListenerResult;
  }, items1);
  const NativeStackView = state(descriptors[8]).NativeStackView;
  const merged1 = Object.assign(merged);
  return <NavigationContent>{null}</NavigationContent>;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/createChatPanelNativeStackNavigator.tsx");

export default function createChatPanelNativeStackNavigator(arg0) {
  const obj = Link;
  return obj.createNavigatorFactory(closure_6)(arg0);
};