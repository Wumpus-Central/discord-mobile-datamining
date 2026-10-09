// === Module 11769: AppLauncherApplicationViewScreen ===

// Module 11769 (AppLauncherApplicationViewScreen)
import KeyboardTypes from "KeyboardTypes" /* 1629 */;
import AppLauncherContext from "AppLauncherContext" /* 10587 */;
import noop from "module_19" /* 19 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 9220 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const AppLauncherNativeConstants = fn(1502);
({ AppLauncherRouteName: closure_7, SCREEN_BACKGROUND_COLOR } = AppLauncherNativeConstants);
const BuiltInSectionId = fn(5400).BuiltInSectionId;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_10 = createStyles.createStyles({ container: { backgroundColor: SCREEN_BACKGROUND_COLOR, flex: 1 } });
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherApplicationViewScreenInner(onCommandExecuted) {
  const cResult = application(bottomSheetExpandReasonRef[8]).c(23);
  ({ context, application } = onCommandExecuted);
  ({ lockableScrollableContentOffsetY, initiallyExpanded, installOnDemand, sectionName, onPressBack, onActivityItemSelected, entrypoint, expandBottomSheet } = onCommandExecuted);
  onCommandExecuted = onCommandExecuted.onCommandExecuted;
  let obj = application(bottomSheetExpandReasonRef[8]);
  const requiredAppLauncherContext = application(bottomSheetExpandReasonRef[9]).useRequiredAppLauncherContext();
  bottomSheetExpandReasonRef = requiredAppLauncherContext.bottomSheetExpandReasonRef;
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
  const tmp6 = expandBottomSheet(bottomSheetExpandReasonRef[10])();
  closure_4 = tmp6;
  if (cResult[0] === application) {
    if (cResult[1] === initiallyExpanded) {
      let tmp7 = cResult[2];
    }
    closure_5 = tmp7;
    if (cResult[3] === application) {
      if (cResult[4] === chatInputRef) {
        let tmp9 = cResult[5];
      }
      if (cResult[6] === bottomSheetExpandReasonRef) {
        if (cResult[7] === expandBottomSheet) {
          if (cResult[8] === tmp7) {
            class N {
              constructor() {
                tmp = closure_5;
                if (closure_5) {
                  tmp = closure_4;
                }
                if (tmp) {
                  tmp2 = closure_2;
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  closure_2.current = closure_0(closure_2[9]).AppLauncherBottomSheetExpandReason.APP_VIEW;
                  tmp5 = null;
                  if (expandBottomSheet != null) {
                    tmp6 = expandBottomSheet();
                  }
                }
                return;
              }
            }
            if (cResult[12] === application) {
              if (cResult[13] === context) {
                if (cResult[14] === entrypoint) {
                  if (cResult[15] === installOnDemand) {
                    if (cResult[16] === lockableScrollableContentOffsetY) {
                      if (cResult[17] === tmp9) {
                        if (cResult[18] === onActivityItemSelected) {
                          if (cResult[19] === onCommandExecuted) {
                            if (cResult[20] === onPressBack) {
                              if (cResult[21] === sectionName) {
                                let tmp13 = cResult[22];
                              }
                              return tmp13;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            const obj3 = { application, context, lockableScrollableContentOffsetY, installOnDemand, sectionName, onPressBack, onActivityItemSelected, entrypoint, onCommandExecuted, onAauth2Cancel: tmp9 };
            const tmp15 = jsx(expandBottomSheet(tmp2[13]), { application, context, lockableScrollableContentOffsetY, installOnDemand, sectionName, onPressBack, onActivityItemSelected, entrypoint, onCommandExecuted, onAauth2Cancel: tmp9 });
            cResult[12] = application;
            cResult[13] = context;
            cResult[14] = entrypoint;
            cResult[15] = installOnDemand;
            cResult[16] = lockableScrollableContentOffsetY;
            cResult[17] = tmp9;
            cResult[18] = onActivityItemSelected;
            cResult[19] = onCommandExecuted;
            cResult[20] = onPressBack;
            cResult[21] = sectionName;
            cResult[22] = tmp15;
            tmp13 = tmp15;
          }
        }
      }
      class N {
        constructor() {
          tmp = closure_5;
          if (closure_5) {
            tmp = closure_4;
          }
          if (tmp) {
            tmp2 = closure_2;
            tmp3 = closure_0;
            tmp4 = closure_2;
            closure_2.current = closure_0(closure_2[9]).AppLauncherBottomSheetExpandReason.APP_VIEW;
            tmp5 = null;
            if (expandBottomSheet != null) {
              tmp6 = expandBottomSheet();
            }
          }
          return;
        }
      }
      const items = [tmp6, tmp7, expandBottomSheet, bottomSheetExpandReasonRef];
      cResult[6] = bottomSheetExpandReasonRef;
      cResult[7] = expandBottomSheet;
      cResult[8] = tmp7;
      cResult[9] = tmp6;
      cResult[10] = N;
      cResult[11] = items;
    }
    const fn = function _() {
      const current = chatInputRef.current;
      const obj = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: { initialRouteName: constants.APPLICATION_VIEW, application } };
      current.openCustomKeyboard(obj);
    };
    cResult[3] = application;
    cResult[4] = chatInputRef;
    cResult[5] = fn;
    tmp9 = fn;
  }
  let isActivityAppResult = initiallyExpanded;
  if (initiallyExpanded == null) {
    isActivityAppResult = application(tmp2[11]).isActivityApp(application);
    const tmpResult = application(tmp2[11]);
  }
  cResult[0] = application;
  cResult[1] = initiallyExpanded;
  cResult[2] = isActivityAppResult;
  tmp7 = isActivityAppResult;
  const obj2 = application(bottomSheetExpandReasonRef[9]);
}) : (function AppLauncherApplicationViewScreenInner(application) {
  application = application.application;
  ({ initiallyExpanded, expandBottomSheet } = application);
  let bottomSheetExpandReasonRef;
  initiallyExpanded = undefined;
  ({ context, lockableScrollableContentOffsetY, installOnDemand, sectionName, onPressBack, onActivityItemSelected, entrypoint, onCommandExecuted } = application);
  const requiredAppLauncherContext = application(bottomSheetExpandReasonRef[9]).useRequiredAppLauncherContext();
  bottomSheetExpandReasonRef = requiredAppLauncherContext.bottomSheetExpandReasonRef;
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
  const tmp5 = expandBottomSheet(bottomSheetExpandReasonRef[10])();
  closure_4 = tmp5;
  if (initiallyExpanded == null) {
    initiallyExpanded = application(tmp2[11]).isActivityApp(application);
    const tmpResult = application(tmp2[11]);
  }
  const items = [application, chatInputRef];
  const items1 = [tmp5, initiallyExpanded, expandBottomSheet, bottomSheetExpandReasonRef];
  const onAauth2Cancel = chatInputRef.useCallback(() => {
    const current = chatInputRef.current;
    const obj = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: { initialRouteName: constants.APPLICATION_VIEW, application } };
    current.openCustomKeyboard(obj);
  }, items);
  const effect = chatInputRef.useEffect(() => {
    let tmp = initiallyExpanded;
    if (initiallyExpanded) {
      tmp = closure_4;
    }
    if (tmp) {
      bottomSheetExpandReasonRef.current = AppLauncherContext.AppLauncherBottomSheetExpandReason.APP_VIEW;
      if (expandBottomSheet != null) {
        expandBottomSheet();
      }
    }
  }, items1);
  return jsx(expandBottomSheet(bottomSheetExpandReasonRef[13]), { application, context, lockableScrollableContentOffsetY, installOnDemand, sectionName, onPressBack, onActivityItemSelected, entrypoint, onCommandExecuted, onAauth2Cancel });
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/AppLauncherApplicationViewScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherApplicationViewScreen(navigation) {
  const cResult = navigation(context[8]).c(25);
  navigation = navigation.navigation;
  const params = navigation.route.params;
  ({ application, onPressBack } = params);
  context = params.context;
  ({ initiallyExpanded, installOnDemand } = params);
  ({ sectionName, expandBottomSheet, onCommandExecuted, applicationId } = params);
  const obj = navigation(context[8]);
  const requiredAppLauncherContext = navigation(context[9]).useRequiredAppLauncherContext();
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
  ({ entrypoint, onActivityItemSelected, keyboardCloseReasonRef } = requiredAppLauncherContext);
  const tmp5 = closure_10();
  let id;
  if (application != null) {
    id = application.id;
  }
  if (id == null) {
    id = applicationId;
  }
  const obj2 = navigation(context[9]);
  let tmp8 = null;
  if (id !== BuiltInSectionId.BUILT_IN) {
    tmp8 = id;
  }
  const getOrFetchApplication = navigation(context[14]).useGetOrFetchApplication(tmp8);
  if (id === BuiltInSectionId.BUILT_IN) {
    let FAKE_BUILT_IN_APP = tmp(tmp2[11]).FAKE_BUILT_IN_APP;
  } else {
    FAKE_BUILT_IN_APP = getOrFetchApplication;
    if (getOrFetchApplication == null) {
      FAKE_BUILT_IN_APP = application;
    }
  }
  const tmpResult = navigation(context[14]);
  const sharedValue = navigation(context[15]).useSharedValue(0);
  if (cResult[0] === chatInputRef) {
    if (cResult[1] === keyboardCloseReasonRef) {
      if (cResult[2] === navigation) {
        if (cResult[3] === onPressBack) {
          let tmp11 = cResult[4];
        }
        if (cResult[5] === id) {
          if (cResult[6] === context) {
            if (cResult[7] === installOnDemand) {
              let tmp12 = cResult[8];
              let tmp13 = cResult[9];
            }
            const effect = installOnDemand.useEffect(tmp12, tmp13);
            if (cResult[10] === FAKE_BUILT_IN_APP) {
              if (cResult[11] === context) {
                if (cResult[12] === entrypoint) {
                  if (cResult[13] === expandBottomSheet) {
                    if (cResult[14] === tmp11) {
                      if (cResult[15] === initiallyExpanded) {
                        if (cResult[16] === installOnDemand) {
                          if (cResult[17] === sharedValue) {
                            if (cResult[18] === onActivityItemSelected) {
                              if (cResult[19] === onCommandExecuted) {
                                if (cResult[20] === sectionName) {
                                  if (cResult[22] === tmp5.container) {
                                    if (cResult[23] === tmp16) {
                                      let tmp24 = cResult[24];
                                    }
                                    return tmp24;
                                  }
                                  const obj3 = { style: tmp5.container, children: cResult[21] };
                                  const tmp27 = <keyboardCloseReasonRef style={tmp5.container}>{cResult[21]}</keyboardCloseReasonRef>;
                                  cResult[22] = tmp5.container;
                                  cResult[23] = cResult[21];
                                  cResult[24] = tmp27;
                                  tmp24 = tmp27;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            if (null != FAKE_BUILT_IN_APP) {
              const obj4 = { context, application: FAKE_BUILT_IN_APP, lockableScrollableContentOffsetY: sharedValue, initiallyExpanded, installOnDemand, sectionName, onPressBack: tmp11, onActivityItemSelected, entrypoint, expandBottomSheet, onCommandExecuted };
              let tmp20 = <closure_11 context={context} application={FAKE_BUILT_IN_APP} lockableScrollableContentOffsetY={sharedValue} initiallyExpanded={initiallyExpanded} installOnDemand={installOnDemand} sectionName={sectionName} onPressBack={tmp11} onActivityItemSelected={onActivityItemSelected} entrypoint={entrypoint} expandBottomSheet={expandBottomSheet} onCommandExecuted={onCommandExecuted} />;
            } else {
              const obj5 = { style: null, children: null };
              const obj6 = { paddingTop: tmp(tmp2[16]).EXPANDED_HEADER_HEIGHT };
              obj5.style = obj6;
              obj5.children = <chatInputRef />;
              tmp20 = <keyboardCloseReasonRef style={null}>{null}</keyboardCloseReasonRef>;
            }
            cResult[10] = FAKE_BUILT_IN_APP;
            cResult[11] = context;
            cResult[12] = entrypoint;
            cResult[13] = expandBottomSheet;
            cResult[14] = tmp11;
            cResult[15] = initiallyExpanded;
            cResult[16] = installOnDemand;
            cResult[17] = sharedValue;
            cResult[18] = onActivityItemSelected;
            cResult[19] = onCommandExecuted;
            cResult[20] = sectionName;
            cResult[21] = tmp20;
          }
        }
        const fn = function w() {
          let tmp2 = null != id;
          if (tmp2) {
            tmp2 = "channel" === context.type;
          }
          if (tmp2) {
            tmp2 = installOnDemand;
          }
          if (tmp2) {
            const result = ApplicationCommandIndexStore.queryInstallOnDemandApp(id, context.channel.id);
          }
        };
        const items = [id, context, installOnDemand];
        cResult[5] = id;
        cResult[6] = context;
        cResult[7] = installOnDemand;
        cResult[8] = fn;
        cResult[9] = items;
        tmp13 = items;
        tmp12 = fn;
      }
    }
  }
  function handlePressBack() {
    if (onPressBack != null) {
      tmp();
    }
    if (navigation.canGoBack()) {
      navigation.pop();
    } else {
      keyboardCloseReasonRef.current = AppLauncherContext.AppLauncherKeyboardCloseReason.BACK;
      const current = chatInputRef.current;
      if (current != null) {
        current.closeCustomKeyboard();
      }
    }
  }
  cResult[0] = chatInputRef;
  cResult[1] = keyboardCloseReasonRef;
  cResult[2] = navigation;
  cResult[3] = onPressBack;
  cResult[4] = handlePressBack;
  tmp11 = handlePressBack;
  const tmpResult2 = navigation(context[15]);
}) : (function AppLauncherApplicationViewScreen(route) {
  const params = route.route.params;
  ({ application, onPressBack: require, context } = params);
  const installOnDemand = params.installOnDemand;
  const navigation = route.navigation;
  c4 = undefined;
  c5 = undefined;
  ({ applicationId, initiallyExpanded, sectionName, expandBottomSheet, onCommandExecuted } = params);
  const requiredAppLauncherContext = require("AppLauncherContext").useRequiredAppLauncherContext();
  ({ chatInputRef: c4, keyboardCloseReasonRef: c5 } = requiredAppLauncherContext);
  ({ entrypoint, onActivityItemSelected } = requiredAppLauncherContext);
  let id;
  const obj = require("AppLauncherContext");
  if (application != null) {
    id = application.id;
  }
  if (id == null) {
    id = applicationId;
  }
  const tmp4 = closure_10();
  let tmp7 = null;
  if (id !== BuiltInSectionId.BUILT_IN) {
    tmp7 = id;
  }
  const getOrFetchApplication = require("useGetOrFetchApplications").useGetOrFetchApplication(tmp7);
  if (id === BuiltInSectionId.BUILT_IN) {
    let FAKE_BUILT_IN_APP = require("AppLauncherUtils").FAKE_BUILT_IN_APP;
  } else {
    FAKE_BUILT_IN_APP = getOrFetchApplication;
    if (getOrFetchApplication == null) {
      FAKE_BUILT_IN_APP = application;
    }
  }
  const tmpResult = require("useGetOrFetchApplications");
  const items = [id, context, installOnDemand];
  const sharedValue = require("ReanimatedRexport").useSharedValue(0);
  const effect = navigation.useEffect(() => {
    let tmp2 = null != id;
    if (tmp2) {
      tmp2 = "channel" === context.type;
    }
    if (tmp2) {
      tmp2 = installOnDemand;
    }
    if (tmp2) {
      const result = ApplicationCommandIndexStore.queryInstallOnDemandApp(id, context.channel.id);
    }
  }, items);
  const obj2 = { style: tmp4.container, children: null };
  if (null != FAKE_BUILT_IN_APP) {
    const obj3 = {
      context,
      application: FAKE_BUILT_IN_APP,
      lockableScrollableContentOffsetY: sharedValue,
      initiallyExpanded,
      installOnDemand,
      sectionName,
      onPressBack: function handlePressBack() {
          if (_require != null) {
            tmp();
          }
          if (navigation.canGoBack()) {
            navigation.pop();
          } else {
            c5.current = AppLauncherContext.AppLauncherKeyboardCloseReason.BACK;
            const current = _undefined.current;
            if (current != null) {
              current.closeCustomKeyboard();
            }
          }
        },
      onActivityItemSelected,
      entrypoint,
      expandBottomSheet,
      onCommandExecuted
    };
    let tmp11Result = <closure_11 context={context} application={FAKE_BUILT_IN_APP} lockableScrollableContentOffsetY={sharedValue} initiallyExpanded={initiallyExpanded} installOnDemand={installOnDemand} sectionName={sectionName} onPressBack={function handlePressBack() {
      if (_require != null) {
        tmp();
      }
      if (navigation.canGoBack()) {
        navigation.pop();
      } else {
        c5.current = AppLauncherContext.AppLauncherKeyboardCloseReason.BACK;
        const current = _undefined.current;
        if (current != null) {
          current.closeCustomKeyboard();
        }
      }
    }} onActivityItemSelected={onActivityItemSelected} entrypoint={entrypoint} expandBottomSheet={expandBottomSheet} onCommandExecuted={onCommandExecuted} />;
  } else {
    const obj4 = { style: null, children: null };
    const obj5 = { paddingTop: require("application_view/Header").EXPANDED_HEADER_HEIGHT };
    obj4.style = obj5;
    obj4.children = <c4 />;
    tmp11Result = <tmp12 style={null}>{null}</tmp12>;
  }
  obj2.children = tmp11Result;
  return <c5 style={tmp4.container}>{null}</c5>;
});