// === Module 11765: AppLauncherApplicationViewScreen ===

// Module 11765 (AppLauncherApplicationViewScreen)
import KeyboardTypes from "KeyboardTypes" /* 1616 */;
import AppLauncherContext from "AppLauncherContext" /* 11007 */;
import noop from "module_19" /* 19 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 8827 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const AppLauncherNativeConstants = fn(1489);
({ AppLauncherRouteName: closure_7, SCREEN_BACKGROUND_COLOR } = AppLauncherNativeConstants);
const BuiltInSectionId = fn(5795).BuiltInSectionId;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_10 = createStyles.createStyles({ container: { backgroundColor: SCREEN_BACKGROUND_COLOR, flex: 1 } });
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((onCommandExecuted) => {
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
            if (cResult[9] === tmp6) {
              let tmp10 = cResult[10];
              let tmp11 = cResult[11];
            }
            const effect = chatInputRef.useEffect(tmp10, tmp11);
            class P {
              constructor() {
                current = chatInputRef.current;
                obj = { type: closure_0(closure_2[12]).KeyboardTypes.APP_LAUNCHER, context: null };
                obj1 = { initialRouteName: AppLauncherRouteName.APPLICATION_VIEW, application };
                obj.context = obj1;
                openCustomKeyboardResult = current.openCustomKeyboard(obj);
                return;
              }
            }
            const obj3 = { application, context, lockableScrollableContentOffsetY, installOnDemand, sectionName, onPressBack, onActivityItemSelected, entrypoint, onCommandExecuted, onAauth2Cancel: tmp9 };
            const tmp17 = jsx(expandBottomSheet(tmp2[13]), { application, context, lockableScrollableContentOffsetY, installOnDemand, sectionName, onPressBack, onActivityItemSelected, entrypoint, onCommandExecuted, onAauth2Cancel: tmp9 });
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
            cResult[22] = tmp17;
          }
        }
      }
      const fn = function v() {
        let tmp = closure_5;
        if (closure_5) {
          tmp = closure_4;
        }
        if (tmp) {
          bottomSheetExpandReasonRef.current = AppLauncherContext.AppLauncherBottomSheetExpandReason.APP_VIEW;
          if (expandBottomSheet != null) {
            expandBottomSheet();
          }
        }
      };
      class P {
        constructor() {
          current = chatInputRef.current;
          obj = { type: closure_0(closure_2[12]).KeyboardTypes.APP_LAUNCHER, context: null };
          obj1 = { initialRouteName: AppLauncherRouteName.APPLICATION_VIEW, application };
          obj.context = obj1;
          openCustomKeyboardResult = current.openCustomKeyboard(obj);
          return;
        }
      }
      tmp12[0] = tmp6;
      tmp12[1] = tmp7;
      tmp12[2] = expandBottomSheet;
      tmp12[3] = bottomSheetExpandReasonRef;
      cResult[6] = bottomSheetExpandReasonRef;
      cResult[7] = expandBottomSheet;
      cResult[8] = tmp7;
      cResult[9] = tmp6;
      cResult[10] = fn;
      cResult[11] = tmp12;
      tmp11 = tmp12;
      tmp10 = fn;
    }
    class P {
      constructor() {
        current = chatInputRef.current;
        obj = { type: closure_0(closure_2[12]).KeyboardTypes.APP_LAUNCHER, context: null };
        obj1 = { initialRouteName: AppLauncherRouteName.APPLICATION_VIEW, application };
        obj.context = obj1;
        openCustomKeyboardResult = current.openCustomKeyboard(obj);
        return;
      }
    }
    cResult[3] = application;
    cResult[4] = chatInputRef;
    cResult[5] = P;
    tmp9 = P;
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
}) : ((application) => {
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

export default ReactCompilerGating.isReactCompilerEnabled() ? ((navigation) => {
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
            class G {
              constructor() {
                tmp2 = null != applicationId;
                tmp = applicationId;
                if (tmp2) {
                  tmp3 = context;
                  str = "channel";
                  tmp2 = "channel" === context.type;
                }
                if (tmp2) {
                  tmp2 = installOnDemand;
                }
                if (tmp2) {
                  tmp4 = closure_6;
                  tmp5 = context;
                  result = closure_6.queryInstallOnDemandApp(tmp, context.channel.id);
                }
                return;
              }
            }
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
                                    if (cResult[23] === tmp15) {
                                      let tmp25 = cResult[24];
                                    }
                                    return tmp25;
                                  }
                                  class G {
                                    constructor() {
                                      tmp2 = null != applicationId;
                                      tmp = applicationId;
                                      if (tmp2) {
                                        tmp3 = context;
                                        str = "channel";
                                        tmp2 = "channel" === context.type;
                                      }
                                      if (tmp2) {
                                        tmp2 = installOnDemand;
                                      }
                                      if (tmp2) {
                                        tmp4 = closure_6;
                                        tmp5 = context;
                                        result = closure_6.queryInstallOnDemandApp(tmp, context.channel.id);
                                      }
                                      return;
                                    }
                                  }
                                  const obj3 = { style: tmp5.container, children: cResult[21] };
                                  const tmp27 = <keyboardCloseReasonRef style={tmp5.container}>{cResult[21]}</keyboardCloseReasonRef>;
                                  cResult[22] = tmp5.container;
                                  cResult[23] = cResult[21];
                                  cResult[24] = tmp27;
                                  tmp25 = tmp27;
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
              class G {
                constructor() {
                  tmp2 = null != applicationId;
                  tmp = applicationId;
                  if (tmp2) {
                    tmp3 = context;
                    str = "channel";
                    tmp2 = "channel" === context.type;
                  }
                  if (tmp2) {
                    tmp2 = installOnDemand;
                  }
                  if (tmp2) {
                    tmp4 = closure_6;
                    tmp5 = context;
                    result = closure_6.queryInstallOnDemandApp(tmp, context.channel.id);
                  }
                  return;
                }
              }
              tmp23[0] = context;
              tmp23[1] = FAKE_BUILT_IN_APP;
              tmp23[2] = sharedValue;
              tmp23[3] = initiallyExpanded;
              tmp23[4] = installOnDemand;
              tmp23[5] = sectionName;
              tmp23[6] = tmp11;
              tmp23[7] = onActivityItemSelected;
              tmp23[8] = entrypoint;
              tmp23[9] = expandBottomSheet;
              tmp23[10] = onCommandExecuted;
              let tmp20 = <closure_11 {...tmp23} />;
            } else {
              class G {
                constructor() {
                  tmp2 = null != applicationId;
                  tmp = applicationId;
                  if (tmp2) {
                    tmp3 = context;
                    str = "channel";
                    tmp2 = "channel" === context.type;
                  }
                  if (tmp2) {
                    tmp2 = installOnDemand;
                  }
                  if (tmp2) {
                    tmp4 = closure_6;
                    tmp5 = context;
                    result = closure_6.queryInstallOnDemandApp(tmp, context.channel.id);
                  }
                  return;
                }
              }
              const obj4 = { paddingTop: tmp(tmp2[16]).EXPANDED_HEADER_HEIGHT };
              tmp18[0] = obj4;
              tmp18[1] = <chatInputRef />;
              tmp20 = <keyboardCloseReasonRef {...tmp18} />;
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
        class G {
          constructor() {
            tmp2 = null != applicationId;
            tmp = applicationId;
            if (tmp2) {
              tmp3 = context;
              str = "channel";
              tmp2 = "channel" === context.type;
            }
            if (tmp2) {
              tmp2 = installOnDemand;
            }
            if (tmp2) {
              tmp4 = closure_6;
              tmp5 = context;
              result = closure_6.queryInstallOnDemandApp(tmp, context.channel.id);
            }
            return;
          }
        }
        const items = [id, context, installOnDemand];
        cResult[5] = id;
        cResult[6] = context;
        cResult[7] = installOnDemand;
        cResult[8] = G;
        cResult[9] = items;
      }
    }
  }
  const fn = function p() {
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
  };
  cResult[0] = chatInputRef;
  cResult[1] = keyboardCloseReasonRef;
  cResult[2] = navigation;
  cResult[3] = onPressBack;
  cResult[4] = fn;
  tmp11 = fn;
  const tmpResult2 = navigation(context[15]);
}) : ((route) => {
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
      onPressBack() {
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
    let tmp11Result = <closure_11 context={context} application={FAKE_BUILT_IN_APP} lockableScrollableContentOffsetY={sharedValue} initiallyExpanded={initiallyExpanded} installOnDemand={installOnDemand} sectionName={sectionName} onPressBack={function onPressBack() {
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