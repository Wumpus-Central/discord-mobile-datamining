// === Module 11754: AppLauncherNavigator ===

// Module 11754 (AppLauncherNavigator)
import nativeDefault from "native" /* 587 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5107 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6851 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6878 */;
import AppLauncherHomeScreenDefault from "AppLauncherHomeScreen" /* 11755 */;
import AppLauncherApplicationViewScreenDefault from "AppLauncherApplicationViewScreen" /* 11813 */;
import AppLauncherCommandViewScreenDefault from "AppLauncherCommandViewScreen" /* 11839 */;
import AppLauncherViewAllScreenDefault from "AppLauncherViewAllScreen" /* 11901 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["initialRouteName"];
let closure_4 = ["initialRouteName"];
const AppLauncherRouteName = fn(1502).AppLauncherRouteName;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const NativeStackNavigator = fn(9344);
let closure_11 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(5092);
let obj = { navigator: { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, paddingTop: 16, overflow: "visible", flex: 1 } };
let closure_12 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, paddingTop: 16, overflow: "visible", flex: 1 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherNavigator.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherNavigator(arg0) {
  const cResult = entrypoint(576).c(64);
  ({ bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, context, chatInputRef, contentStyle, entrypoint } = arg0);
  ({ expandBottomSheet, keyboardCloseReasonRef, onActivityItemSelected, width, overrideParams: referrerId } = arg0);
  const obj = entrypoint(576);
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.APP_LAUNCHER).analyticsLocations;
  const navigationContainerRef = entrypoint(1504).useNavigationContainerRef();
  const obj2 = entrypoint(1504);
  const trackNavigationBackPress = entrypoint(5375).useTrackNavigationBackPress(navigationContainerRef);
  const tmp8 = closure_12();
  const obj3 = entrypoint(5375);
  if (referrerId == null) {
    referrerId = obj4.useKeyboardContextForType(entrypoint(1629).KeyboardTypes.APP_LAUNCHER);
  }
  obj4 = entrypoint(4987);
  const accessibilityNativeStackOptions = entrypoint(6687).useAccessibilityNativeStackOptions();
  if (cResult[0] !== referrerId) {
    const initialRouteName = referrerId.initialRouteName;
    const tmp14 = _objectWithoutProperties(referrerId, closure_3);
    cResult[0] = referrerId;
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
      if (referrerId.initialRouteName === AppLauncherRouteName.HOME) {
        initialSearchQuery = referrerId.initialSearchQuery;
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
              if (cResult[22] === referrerId.initialRouteName) {
                if (cResult[23] === tmp11) {
                  let tmp38 = cResult[24];
                }
                if (cResult[25] === expandBottomSheet) {
                  if (cResult[26] === tmp38) {
                    if (cResult[27] === context) {
                      let tmp39 = cResult[28];
                    }
                    if (cResult[29] === referrerId.initialRouteName) {
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
                                      let tmp64 = "customId" in referrerId;
                                      if (!tmp64) {
                                        tmp64 = "referrerId" in referrerId;
                                      }
                                      if (!tmp64) {
                                        if (cResult[51] === bottomSheetExpandReasonRef) {
                                          if (cResult[52] === bottomSheetIndex) {
                                            if (cResult[53] === bottomSheetPosition) {
                                              if (cResult[54] === chatInputRef) {
                                                if (cResult[55] === entrypoint) {
                                                  if (cResult[56] === null) {
                                                    if (cResult[57] === keyboardCloseReasonRef) {
                                                      if (cResult[58] === onActivityItemSelected) {
                                                        if (cResult[59] === width) {
                                                          let tmp68 = cResult[60];
                                                        }
                                                        if (cResult[61] === tmp61) {
                                                          if (cResult[62] === tmp68) {
                                                            let tmp69 = cResult[63];
                                                          }
                                                          return tmp69;
                                                        }
                                                        const obj5 = { value: tmp68, children: tmp61 };
                                                        const tmp71 = closure_9(entrypoint(10621).AppLauncherContext.Provider, obj5);
                                                        cResult[61] = tmp61;
                                                        cResult[62] = tmp68;
                                                        cResult[63] = tmp71;
                                                        tmp69 = tmp71;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                        const obj6 = { bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, chatInputRef, entrypoint, entrypointParams: null, keyboardCloseReasonRef, onActivityItemSelected, width };
                                        cResult[51] = bottomSheetExpandReasonRef;
                                        cResult[52] = bottomSheetIndex;
                                        cResult[53] = bottomSheetPosition;
                                        cResult[54] = chatInputRef;
                                        cResult[55] = entrypoint;
                                        cResult[56] = null;
                                        cResult[57] = keyboardCloseReasonRef;
                                        cResult[58] = onActivityItemSelected;
                                        cResult[59] = width;
                                        cResult[60] = obj6;
                                        tmp68 = obj6;
                                      } else {
                                        if (cResult[48] === referrerId.customId) {
                                        }
                                        const obj7 = { customId: null, referrerId: null };
                                        ({ customId: obj22.customId, referrerId: obj22.referrerId } = referrerId);
                                        ({ customId: tmp3[48], referrerId } = referrerId);
                                        cResult[49] = referrerId;
                                        cResult[50] = obj7;
                                      }
                                    }
                                    const obj8 = { children: null };
                                    const obj9 = { ref: navigationContainerRef, children: tmp58 };
                                    obj8.children = closure_9(entrypoint(1504).NavigationContainer, obj9);
                                    const tmp63 = closure_9(entrypoint(1504).NavigationIndependentTree, obj8);
                                    cResult[45] = navigationContainerRef;
                                    cResult[46] = tmp58;
                                    cResult[47] = tmp63;
                                    tmp61 = tmp63;
                                  }
                                  const obj10 = { value: analyticsLocations, children: tmp54 };
                                  const tmp60 = closure_9(entrypoint(6851).AnalyticsLocationProvider, obj10);
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
                    if (referrerId.initialRouteName !== AppLauncherRouteName.APP_LIST_VIEW) {
                      obj14 = {};
                    }
                    cResult[29] = referrerId.initialRouteName;
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
              if (referrerId.initialRouteName !== AppLauncherRouteName.COMMAND_VIEW) {
                obj17 = {};
              }
              cResult[22] = referrerId.initialRouteName;
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
      const obj23 = { context, initialSearchQuery };
      obj21.initialParams = obj23;
      const tmp28 = closure_9(closure_11.Screen, obj21);
      cResult[12] = context;
      cResult[13] = initialSearchQuery;
      cResult[14] = tmp28;
      tmp25 = tmp28;
    }
    const obj24 = { contentStyle: tmp18, headerShown: false, fullScreenGestureEnabled: true };
    const merged3 = Object.assign(accessibilityNativeStackOptions);
    cResult[9] = accessibilityNativeStackOptions;
    cResult[10] = tmp18;
    cResult[11] = obj24;
    tmp19 = obj24;
  }
  const items2 = [tmp8.navigator, contentStyle];
  cResult[6] = contentStyle;
  cResult[7] = tmp8.navigator;
  cResult[8] = items2;
  tmp18 = items2;
  const tmpResult = entrypoint(6687);
}) : (function AppLauncherNavigator(arg0) {
  ({ context, entrypoint } = arg0);
  ({ expandBottomSheet, overrideParams } = arg0);
  ({ bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, chatInputRef, contentStyle, keyboardCloseReasonRef, onActivityItemSelected, width } = arg0);
  const tmp3 = useAnalyticsLocationsDefault;
  const navigationContainerRef = entrypoint(1504).useNavigationContainerRef();
  const obj = entrypoint(1504);
  const trackNavigationBackPress = entrypoint(5375).useTrackNavigationBackPress(navigationContainerRef);
  const obj2 = entrypoint(5375);
  const tmp7 = closure_12();
  if (overrideParams == null) {
    overrideParams = obj3.useKeyboardContextForType(entrypoint(1629).KeyboardTypes.APP_LAUNCHER);
  }
  obj3 = entrypoint(4987);
  const accessibilityNativeStackOptions = entrypoint(6687).useAccessibilityNativeStackOptions();
  const initialRouteName = overrideParams.initialRouteName;
  let obj18 = _objectWithoutProperties(overrideParams, closure_4);
  const items = [entrypoint];
  const layoutEffect = noop.useLayoutEffect(() => {
    AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_TOP_OF_FUNNEL, { location: "app_launcher", source: entrypoint });
  }, items);
  const obj4 = { ref: navigationContainerRef, children: null };
  const obj5 = { value: tmp3(AnalyticsLocationDefault.APP_LAUNCHER).analyticsLocations, children: null };
  const obj6 = { initialRouteName, screenOptions: null, children: null };
  const obj7 = { contentStyle: null, headerShown: false, fullScreenGestureEnabled: true };
  const items1 = [tmp7.navigator, contentStyle];
  obj7.contentStyle = items1;
  const merged = Object.assign(accessibilityNativeStackOptions);
  obj6.screenOptions = obj7;
  const obj8 = { name: AppLauncherRouteName.HOME, component: AppLauncherHomeScreenDefault, initialParams: null };
  const obj9 = { context, initialSearchQuery: null };
  let initialSearchQuery;
  if (overrideParams.initialRouteName === AppLauncherRouteName.HOME) {
    initialSearchQuery = overrideParams.initialSearchQuery;
  }
  obj9.initialSearchQuery = initialSearchQuery;
  obj8.initialParams = obj9;
  const items2 = [closure_9(closure_11.Screen, obj8), , , ];
  const obj10 = { name: AppLauncherRouteName.APPLICATION_VIEW, component: AppLauncherApplicationViewScreenDefault, initialParams: null };
  const obj11 = { context };
  let obj12 = obj18;
  if (initialRouteName !== AppLauncherRouteName.APPLICATION_VIEW) {
    obj12 = {};
  }
  const merged1 = Object.assign(obj12);
  obj11.expandBottomSheet = expandBottomSheet;
  obj10.initialParams = obj11;
  items2[1] = closure_9(closure_11.Screen, obj10);
  const obj13 = { name: AppLauncherRouteName.COMMAND_VIEW, component: AppLauncherCommandViewScreenDefault, initialParams: null };
  let tmp17;
  if ("channel" === context.type) {
    tmp17 = context;
  }
  const obj14 = { context: tmp17 };
  let obj15 = obj18;
  if (overrideParams.initialRouteName !== AppLauncherRouteName.COMMAND_VIEW) {
    obj15 = {};
  }
  const merged2 = Object.assign(obj15);
  obj14.expandBottomSheet = expandBottomSheet;
  obj13.initialParams = obj14;
  items2[2] = closure_9(closure_11.Screen, obj13);
  const obj16 = { name: AppLauncherRouteName.APP_LIST_VIEW, component: AppLauncherViewAllScreenDefault, initialParams: null };
  if (overrideParams.initialRouteName !== AppLauncherRouteName.APP_LIST_VIEW) {
    obj18 = {};
  }
  const obj19 = { children: null };
  const merged3 = Object.assign(obj18);
  obj16.initialParams = { context };
  items2[3] = closure_9(closure_11.Screen, obj16);
  obj6.children = items2;
  obj5.children = closure_10(closure_11.Navigator, obj6);
  obj4.children = closure_9(entrypoint(6851).AnalyticsLocationProvider, obj5);
  obj19.children = closure_9(entrypoint(1504).NavigationContainer, obj4);
  let tmp21 = "customId" in overrideParams;
  const obj17 = { context };
  const tmp4Result = entrypoint(6687);
  if (!tmp21) {
    tmp21 = "referrerId" in overrideParams;
  }
  let tmp22 = null;
  if (tmp21) {
    ({ customId: obj21.customId, referrerId: obj21.referrerId } = overrideParams);
    tmp22 = { customId: null, referrerId: null };
    const obj20 = { customId: null, referrerId: null };
  }
  const tmp10Result = closure_9(entrypoint(1504).NavigationIndependentTree, obj19);
  return closure_9(entrypoint(10621).AppLauncherContext.Provider, { value: { bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, chatInputRef, entrypoint, entrypointParams: tmp22, keyboardCloseReasonRef, onActivityItemSelected, width }, children: closure_9(entrypoint(1504).NavigationIndependentTree, obj19) });
}));