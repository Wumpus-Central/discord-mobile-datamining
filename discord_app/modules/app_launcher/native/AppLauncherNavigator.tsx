// === Module 11949: AppLauncherNavigator ===

// Module 11949 (AppLauncherNavigator)
import nativeDefault from "native" /* 587 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5711 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7253 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7278 */;
import AppLauncherHomeScreenDefault from "AppLauncherHomeScreen" /* 11950 */;
import AppLauncherApplicationViewScreenDefault from "AppLauncherApplicationViewScreen" /* 12010 */;
import AppLauncherCommandViewScreenDefault from "AppLauncherCommandViewScreen" /* 12037 */;
import AppLauncherViewAllScreenDefault from "AppLauncherViewAllScreen" /* 12100 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["initialRouteName"];
let closure_4 = ["initialRouteName"];
const AppLauncherRouteName = fn(1504).AppLauncherRouteName;
const AnalyticEvents = fn(1087).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const NativeStackNavigator = fn(9743);
let closure_11 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(4971);
let obj = { navigator: { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, paddingTop: 16, overflow: "visible", flex: 1 } };
let closure_12 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, paddingTop: 16, overflow: "visible", flex: 1 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherNavigator.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherNavigator(arg0) {
  const cResult = entrypoint(576).c(69);
  ({ bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, context, chatInputRef, contentStyle, entrypoint } = arg0);
  ({ expandBottomSheet, keyboardCloseReasonRef, onActivityItemSelected, width, overrideParams } = arg0);
  const obj = entrypoint(576);
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.APP_LAUNCHER).analyticsLocations;
  const navigationContainerRef = entrypoint(1506).useNavigationContainerRef();
  const obj2 = entrypoint(1506);
  const trackNavigationBackPress = entrypoint(5975).useTrackNavigationBackPress(navigationContainerRef);
  const tmp8 = closure_12();
  const obj3 = entrypoint(5975);
  if (overrideParams == null) {
    overrideParams = obj4.useKeyboardContextForType(entrypoint(1631).KeyboardTypes.APP_LAUNCHER);
  }
  obj4 = entrypoint(5161);
  const accessibilityNativeStackOptions = entrypoint(7095).useAccessibilityNativeStackOptions();
  if (cResult[0] !== overrideParams) {
    const initialRouteName = overrideParams.initialRouteName;
    const tmp14 = _objectWithoutProperties(overrideParams, closure_3);
    cResult[0] = overrideParams;
    cResult[1] = initialRouteName;
    cResult[2] = tmp14;
    let tmp11 = tmp14;
    let tmp10 = initialRouteName;
  } else {
    tmp10 = cResult[1];
    tmp11 = cResult[2];
  }
  if (cResult[3] !== entrypoint) {
    const fn = function k() {
      AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_TOP_OF_FUNNEL, { location: "app_launcher", source: entrypoint });
    };
    const items = [entrypoint];
    cResult[3] = entrypoint;
    cResult[4] = fn;
    cResult[5] = items;
    let tmp16 = items;
    let tmp15 = fn;
  } else {
    tmp15 = cResult[4];
    tmp16 = cResult[5];
  }
  const layoutEffect = noop.useLayoutEffect(tmp15, tmp16);
  if (cResult[6] === contentStyle) {
    if (cResult[7] === tmp8.navigator) {
      let tmp18 = cResult[8];
    }
    if (cResult[9] === accessibilityNativeStackOptions) {
      if (cResult[10] === tmp18) {
        let tmp19 = cResult[11];
      }
      let initialSearchQuery;
      if (overrideParams.initialRouteName === AppLauncherRouteName.HOME) {
        initialSearchQuery = overrideParams.initialSearchQuery;
      }
      if (cResult[12] === context) {
        if (cResult[13] === initialSearchQuery) {
          let tmp25 = cResult[14];
        }
        if (cResult[15] === tmp10) {
          if (cResult[16] === tmp11) {
            let tmp29 = cResult[17];
          }
          if (cResult[18] === context) {
            if (cResult[19] === expandBottomSheet) {
              if (cResult[20] === tmp29) {
                let tmp30 = cResult[21];
              }
              if (cResult[22] === overrideParams.initialRouteName) {
                if (cResult[23] === tmp11) {
                  let tmp38 = cResult[24];
                }
                if (cResult[25] === expandBottomSheet) {
                  if (cResult[26] === tmp38) {
                    if (cResult[27] === context) {
                      let tmp39 = cResult[28];
                    }
                    if (cResult[29] === overrideParams.initialRouteName) {
                      if (cResult[30] === tmp11) {
                        let tmp46 = cResult[31];
                      }
                      if (cResult[32] === context) {
                        if (cResult[33] === tmp46) {
                          let tmp47 = cResult[34];
                        }
                        if (cResult[35] === tmp10) {
                          if (cResult[36] === tmp39) {
                            if (cResult[37] === tmp47) {
                              if (cResult[38] === tmp19) {
                                if (cResult[39] === tmp25) {
                                  if (cResult[40] === tmp30) {
                                    let tmp54 = cResult[41];
                                  }
                                  if (cResult[42] === analyticsLocations) {
                                    if (cResult[43] === tmp54) {
                                      let tmp58 = cResult[44];
                                    }
                                    if (cResult[45] === navigationContainerRef) {
                                      if (cResult[46] === tmp58) {
                                        let tmp61 = cResult[47];
                                      }
                                      if (cResult[48] !== overrideParams) {
                                        let tmp67 = "customId" in overrideParams;
                                        if (!tmp67) {
                                          tmp67 = "referrerId" in overrideParams;
                                        }
                                        let flag = false;
                                        referrerId = undefined;
                                        customId = undefined;
                                        if (tmp67) {
                                          ({ customId, referrerId } = overrideParams);
                                          flag = true;
                                        }
                                        cResult[48] = overrideParams;
                                        cResult[49] = customId;
                                        cResult[50] = referrerId;
                                        cResult[51] = flag;
                                        let tmp66 = flag;
                                        let tmp65 = referrerId;
                                        let tmp64 = customId;
                                      } else {
                                        tmp64 = cResult[49];
                                        tmp65 = cResult[50];
                                        tmp66 = cResult[51];
                                      }
                                      if (cResult[52] === tmp64) {
                                        if (cResult[53] === tmp65) {
                                          if (cResult[54] === tmp66) {
                                            let tmp68 = cResult[55];
                                          }
                                          if (cResult[56] === bottomSheetExpandReasonRef) {
                                            if (cResult[57] === bottomSheetIndex) {
                                              if (cResult[58] === bottomSheetPosition) {
                                                if (cResult[59] === chatInputRef) {
                                                  if (cResult[60] === entrypoint) {
                                                    if (cResult[61] === tmp68) {
                                                      if (cResult[62] === keyboardCloseReasonRef) {
                                                        if (cResult[63] === onActivityItemSelected) {
                                                          if (cResult[64] === width) {
                                                            let tmp70 = cResult[65];
                                                          }
                                                          if (cResult[66] === tmp70) {
                                                            if (cResult[67] === tmp61) {
                                                              let tmp71 = cResult[68];
                                                            }
                                                            return tmp71;
                                                          }
                                                          const obj5 = { value: tmp70, children: tmp61 };
                                                          const tmp73 = closure_9(entrypoint(11169).AppLauncherContext.Provider, obj5);
                                                          cResult[66] = tmp70;
                                                          cResult[67] = tmp61;
                                                          cResult[68] = tmp73;
                                                          tmp71 = tmp73;
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          const obj6 = { bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, chatInputRef, entrypoint, entrypointParams: tmp68, keyboardCloseReasonRef, onActivityItemSelected, width };
                                          cResult[56] = bottomSheetExpandReasonRef;
                                          cResult[57] = bottomSheetIndex;
                                          cResult[58] = bottomSheetPosition;
                                          cResult[59] = chatInputRef;
                                          cResult[60] = entrypoint;
                                          cResult[61] = tmp68;
                                          cResult[62] = keyboardCloseReasonRef;
                                          cResult[63] = onActivityItemSelected;
                                          cResult[64] = width;
                                          cResult[65] = obj6;
                                          tmp70 = obj6;
                                        }
                                      }
                                      let tmp69 = null;
                                      if (tmp66) {
                                        const obj7 = { customId: tmp64, referrerId: tmp65 };
                                        tmp69 = obj7;
                                      }
                                      cResult[52] = tmp64;
                                      cResult[53] = tmp65;
                                      cResult[54] = tmp66;
                                      cResult[55] = tmp69;
                                      tmp68 = tmp69;
                                    }
                                    const obj8 = { children: null };
                                    const obj9 = { ref: navigationContainerRef, children: tmp58 };
                                    obj8.children = closure_9(entrypoint(1506).NavigationContainer, obj9);
                                    const tmp63 = closure_9(entrypoint(1506).NavigationIndependentTree, obj8);
                                    cResult[45] = navigationContainerRef;
                                    cResult[46] = tmp58;
                                    cResult[47] = tmp63;
                                    tmp61 = tmp63;
                                  }
                                  const obj10 = { value: analyticsLocations, children: tmp54 };
                                  const tmp60 = closure_9(entrypoint(7253).AnalyticsLocationProvider, obj10);
                                  cResult[42] = analyticsLocations;
                                  cResult[43] = tmp54;
                                  cResult[44] = tmp60;
                                  tmp58 = tmp60;
                                }
                              }
                            }
                          }
                        }
                        const obj11 = { initialRouteName: tmp10, screenOptions: tmp19, children: null };
                        const items1 = [tmp25, tmp30, tmp39, tmp47];
                        obj11.children = items1;
                        const tmp57 = closure_10(closure_11.Navigator, obj11);
                        cResult[35] = tmp10;
                        cResult[36] = tmp39;
                        cResult[37] = tmp47;
                        cResult[38] = tmp19;
                        cResult[39] = tmp25;
                        cResult[40] = tmp30;
                        cResult[41] = tmp57;
                        tmp54 = tmp57;
                      }
                      const obj12 = { name: AppLauncherRouteName.APP_LIST_VIEW, component: AppLauncherViewAllScreenDefault, initialParams: null };
                      const obj13 = { context };
                      const merged = Object.assign(tmp46);
                      obj12.initialParams = obj13;
                      const tmp53 = closure_9(closure_11.Screen, obj12);
                      cResult[32] = context;
                      cResult[33] = tmp46;
                      cResult[34] = tmp53;
                      tmp47 = tmp53;
                    }
                    let obj14 = tmp11;
                    if (overrideParams.initialRouteName !== AppLauncherRouteName.APP_LIST_VIEW) {
                      obj14 = {};
                    }
                    cResult[29] = overrideParams.initialRouteName;
                    cResult[30] = tmp11;
                    cResult[31] = obj14;
                    tmp46 = obj14;
                  }
                }
                const obj15 = { name: AppLauncherRouteName.COMMAND_VIEW, component: AppLauncherCommandViewScreenDefault, initialParams: null };
                const obj16 = { context };
                const merged1 = Object.assign(tmp38);
                obj16.expandBottomSheet = expandBottomSheet;
                obj15.initialParams = obj16;
                const tmp45 = closure_9(closure_11.Screen, obj15);
                cResult[25] = expandBottomSheet;
                cResult[26] = tmp38;
                cResult[27] = context;
                cResult[28] = tmp45;
                tmp39 = tmp45;
              }
              let obj17 = tmp11;
              if (overrideParams.initialRouteName !== AppLauncherRouteName.COMMAND_VIEW) {
                obj17 = {};
              }
              cResult[22] = overrideParams.initialRouteName;
              cResult[23] = tmp11;
              cResult[24] = obj17;
              tmp38 = obj17;
            }
          }
          const obj18 = { name: AppLauncherRouteName.APPLICATION_VIEW, component: AppLauncherApplicationViewScreenDefault, initialParams: null };
          const obj19 = { context };
          const merged2 = Object.assign(tmp29);
          obj19.expandBottomSheet = expandBottomSheet;
          obj18.initialParams = obj19;
          const tmp36 = closure_9(closure_11.Screen, obj18);
          cResult[18] = context;
          cResult[19] = expandBottomSheet;
          cResult[20] = tmp29;
          cResult[21] = tmp36;
          tmp30 = tmp36;
        }
        let obj20 = tmp11;
        if (tmp10 !== AppLauncherRouteName.APPLICATION_VIEW) {
          obj20 = {};
        }
        cResult[15] = tmp10;
        cResult[16] = tmp11;
        cResult[17] = obj20;
        tmp29 = obj20;
      }
      const obj21 = { name: AppLauncherRouteName.HOME, component: AppLauncherHomeScreenDefault, initialParams: null };
      const obj22 = { context, initialSearchQuery };
      obj21.initialParams = obj22;
      const tmp28 = closure_9(closure_11.Screen, obj21);
      cResult[12] = context;
      cResult[13] = initialSearchQuery;
      cResult[14] = tmp28;
      tmp25 = tmp28;
    }
    const obj23 = { contentStyle: tmp18, headerShown: false, fullScreenGestureEnabled: true };
    const merged3 = Object.assign(accessibilityNativeStackOptions);
    cResult[9] = accessibilityNativeStackOptions;
    cResult[10] = tmp18;
    cResult[11] = obj23;
    tmp19 = obj23;
  }
  const items2 = [tmp8.navigator, contentStyle];
  cResult[6] = contentStyle;
  cResult[7] = tmp8.navigator;
  cResult[8] = items2;
  tmp18 = items2;
  const tmpResult = entrypoint(7095);
}) : (function AppLauncherNavigator(bottomSheetExpandReasonRef) {
  bottomSheetExpandReasonRef = bottomSheetExpandReasonRef.bottomSheetExpandReasonRef;
  const bottomSheetIndex = bottomSheetExpandReasonRef.bottomSheetIndex;
  const bottomSheetPosition = bottomSheetExpandReasonRef.bottomSheetPosition;
  ({ context, chatInputRef } = bottomSheetExpandReasonRef);
  const entrypoint = bottomSheetExpandReasonRef.entrypoint;
  ({ expandBottomSheet, keyboardCloseReasonRef } = bottomSheetExpandReasonRef);
  const onActivityItemSelected = bottomSheetExpandReasonRef.onActivityItemSelected;
  const width = bottomSheetExpandReasonRef.width;
  let overrideParams = bottomSheetExpandReasonRef.overrideParams;
  let customId;
  let referrerId;
  c10 = undefined;
  let memo;
  const tmp3 = bottomSheetIndex(bottomSheetPosition[10]);
  const navigationContainerRef = bottomSheetExpandReasonRef(bottomSheetPosition[12]).useNavigationContainerRef();
  let obj = bottomSheetExpandReasonRef(bottomSheetPosition[12]);
  const trackNavigationBackPress = bottomSheetExpandReasonRef(bottomSheetPosition[13]).useTrackNavigationBackPress(navigationContainerRef);
  const obj2 = bottomSheetExpandReasonRef(bottomSheetPosition[13]);
  const tmp7 = closure_12();
  if (overrideParams == null) {
    overrideParams = obj3.useKeyboardContextForType(bottomSheetExpandReasonRef(bottomSheetPosition[15]).KeyboardTypes.APP_LAUNCHER);
  }
  obj3 = bottomSheetExpandReasonRef(bottomSheetPosition[14]);
  const accessibilityNativeStackOptions = bottomSheetExpandReasonRef(bottomSheetPosition[16]).useAccessibilityNativeStackOptions();
  const initialRouteName = overrideParams.initialRouteName;
  let obj19 = keyboardCloseReasonRef(overrideParams, entrypoint);
  const items = [entrypoint];
  const layoutEffect = onActivityItemSelected.useLayoutEffect(() => {
    AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_TOP_OF_FUNNEL, { location: "app_launcher", source: entrypoint });
  }, items);
  const obj4 = { ref: navigationContainerRef, children: null };
  const obj5 = { value: tmp3(bottomSheetIndex(bottomSheetPosition[11]).APP_LAUNCHER).analyticsLocations, children: null };
  const obj7 = { initialRouteName, screenOptions: null, children: null };
  const obj8 = { contentStyle: null, headerShown: false, fullScreenGestureEnabled: true };
  const items1 = [tmp7.navigator, bottomSheetExpandReasonRef.contentStyle];
  obj8.contentStyle = items1;
  const merged = Object.assign(accessibilityNativeStackOptions);
  obj7.screenOptions = obj8;
  const obj9 = { name: width.HOME, component: bottomSheetIndex(bottomSheetPosition[18]), initialParams: null };
  const obj10 = { context, initialSearchQuery: null };
  let initialSearchQuery;
  if (overrideParams.initialRouteName === width.HOME) {
    initialSearchQuery = overrideParams.initialSearchQuery;
  }
  obj10.initialSearchQuery = initialSearchQuery;
  obj9.initialParams = obj10;
  const items2 = [referrerId(memo.Screen, obj9), , , ];
  const obj11 = { name: width.APPLICATION_VIEW, component: bottomSheetIndex(bottomSheetPosition[19]), initialParams: null };
  const obj12 = { context };
  let obj13 = obj19;
  if (initialRouteName !== width.APPLICATION_VIEW) {
    obj13 = {};
  }
  const merged1 = Object.assign(obj13);
  obj12.expandBottomSheet = expandBottomSheet;
  obj11.initialParams = obj12;
  items2[1] = referrerId(memo.Screen, obj11);
  const obj14 = { name: width.COMMAND_VIEW, component: bottomSheetIndex(bottomSheetPosition[20]), initialParams: null };
  let tmp17;
  if ("channel" === context.type) {
    tmp17 = context;
  }
  const obj15 = { context: tmp17 };
  let obj16 = obj19;
  if (overrideParams.initialRouteName !== width.COMMAND_VIEW) {
    obj16 = {};
  }
  const merged2 = Object.assign(obj16);
  obj15.expandBottomSheet = expandBottomSheet;
  obj14.initialParams = obj15;
  items2[2] = referrerId(memo.Screen, obj14);
  const obj17 = { name: width.APP_LIST_VIEW, component: bottomSheetIndex(bottomSheetPosition[21]), initialParams: null };
  if (overrideParams.initialRouteName !== width.APP_LIST_VIEW) {
    obj19 = {};
  }
  const obj20 = { children: null };
  const merged3 = Object.assign(obj19);
  obj17.initialParams = { context };
  items2[3] = referrerId(memo.Screen, obj17);
  obj7.children = items2;
  obj5.children = c10(memo.Navigator, obj7);
  obj4.children = referrerId(bottomSheetExpandReasonRef(bottomSheetPosition[10]).AnalyticsLocationProvider, obj5);
  obj20.children = referrerId(bottomSheetExpandReasonRef(bottomSheetPosition[12]).NavigationContainer, obj4);
  c10 = false;
  let tmp21 = "customId" in overrideParams;
  const children = tmp10(tmp4(tmp2[12]).NavigationIndependentTree, obj20);
  if (!tmp21) {
    tmp21 = "referrerId" in overrideParams;
  }
  let flag = false;
  let tmp22;
  let tmp23;
  if (tmp21) {
    c10 = true;
    customId = overrideParams.customId;
    referrerId = overrideParams.referrerId;
    flag = true;
    tmp22 = referrerId;
    tmp23 = customId;
  }
  const items3 = [flag, tmp23, tmp22];
  memo = obj6.useMemo(() => {
    let tmp = null;
    if (c10) {
      const obj = { customId, referrerId };
      tmp = obj;
    }
    return tmp;
  }, items3);
  const items4 = [bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, chatInputRef, entrypoint, memo, keyboardCloseReasonRef, onActivityItemSelected, width];
  value = obj6.useMemo(() => ({ bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, chatInputRef, entrypoint, entrypointParams: memo, keyboardCloseReasonRef, onActivityItemSelected, width }), items4);
  return referrerId(bottomSheetExpandReasonRef(bottomSheetPosition[22]).AppLauncherContext.Provider, { value, children });
}));