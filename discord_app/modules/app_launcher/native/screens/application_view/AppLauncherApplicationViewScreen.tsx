// discord_app/modules/app_launcher/native/screens/application_view/AppLauncherApplicationViewScreen.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import KeyboardTypes from "../../../../keyboard/native/KeyboardTypes.tsx";
import ApplicationCommandConstants from "../../../../application_commands/ApplicationCommandConstants.tsx";
import AppLauncherContext from "../../AppLauncherContext.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import ApplicationCommandIndexStore from "../../../../application_commands/ApplicationCommandIndexStore.tsx";
import AppLauncherNativeConstants from "../../AppLauncherNativeConstants.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let navigation;

let SCREEN_BACKGROUND_COLOR;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
({ AppLauncherRouteName: metroImportDefault, SCREEN_BACKGROUND_COLOR } = AppLauncherNativeConstants);
const BuiltInSectionId = ApplicationCommandConstants.BuiltInSectionId;
const jsx = Fragment.jsx;
let obj = { container: { backgroundColor: SCREEN_BACKGROUND_COLOR, flex: 1 } };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onCommandExecuted) => {
      let application;
      let bottomSheetExpandReasonRef;
      let context;
      let entrypoint;
      let expandBottomSheet;
      let initiallyExpanded;
      let installOnDemand;
      let lockableScrollableContentOffsetY;
      let onActivityItemSelected;
      let onPressBack;
      let sectionName;
      let obj = application(bottomSheetExpandReasonRef[8]);
      const cResult = obj.c(23);
      ({ context, application } = onCommandExecuted);
      ({
        lockableScrollableContentOffsetY,
        initiallyExpanded,
        installOnDemand,
        sectionName,
        onPressBack,
        onActivityItemSelected,
        entrypoint,
        expandBottomSheet,
      } = onCommandExecuted);
      onCommandExecuted = onCommandExecuted.onCommandExecuted;
      let obj2 = application(bottomSheetExpandReasonRef[9]);
      const requiredAppLauncherContext = obj2.useRequiredAppLauncherContext();
      bottomSheetExpandReasonRef = requiredAppLauncherContext.bottomSheetExpandReasonRef;
      const chatInputRef = requiredAppLauncherContext.chatInputRef;
      const tmp6 = expandBottomSheet(bottomSheetExpandReasonRef[10])();
      let closure_4 = tmp6;
      if (cResult[0] === application) {
        let tmp7;
        if (cResult[1] === initiallyExpanded) {
          tmp7 = cResult[2];
        }
        let closure_5 = tmp7;
        if (cResult[3] === application) {
          let tmp9;
          if (cResult[4] === chatInputRef) {
            tmp9 = cResult[5];
          }
          if (cResult[6] === bottomSheetExpandReasonRef) {
            if (cResult[7] === expandBottomSheet) {
              if (cResult[8] === tmp7) {
                let tmp10;
                let tmp11;
                if (cResult[9] === tmp6) {
                  tmp10 = cResult[10];
                  tmp11 = cResult[11];
                }
                const effect = chatInputRef.useEffect(tmp10, tmp11);
                class P {
                  constructor() {
                    let obj2;
                    const current = chatInputRef.current;
                    const obj = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: obj2 };
                    obj2 = { initialRouteName: metroImportDefault.APPLICATION_VIEW, application };
                    current.openCustomKeyboard(obj);
                  }
                }
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
                cResult[22] = jsx(expandBottomSheet(bottomSheetExpandReasonRef[13]), {
                  application,
                  context,
                  lockableScrollableContentOffsetY,
                  installOnDemand,
                  sectionName,
                  onPressBack,
                  onActivityItemSelected,
                  entrypoint,
                  onCommandExecuted,
                  onAauth2Cancel: tmp9,
                });
                const tmp17 = jsx(expandBottomSheet(bottomSheetExpandReasonRef[13]), {
                  application,
                  context,
                  lockableScrollableContentOffsetY,
                  installOnDemand,
                  sectionName,
                  onPressBack,
                  onActivityItemSelected,
                  entrypoint,
                  onCommandExecuted,
                  onAauth2Cancel: tmp9,
                });
              }
            }
          }
          const fn = function v() {
            const tmp = closure_5 && closure_4;
            if (tmp) {
              bottomSheetExpandReasonRef.current = AppLauncherContext.AppLauncherBottomSheetExpandReason.APP_VIEW;
              if (expandBottomSheet != null) {
                expandBottomSheet();
              }
            }
          };
          class P {
            constructor() {
              let obj2;
              const current = chatInputRef.current;
              const obj = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: obj2 };
              obj2 = { initialRouteName: metroImportDefault.APPLICATION_VIEW, application };
              current.openCustomKeyboard(obj);
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
            let obj2;
            const current = chatInputRef.current;
            const obj = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: obj2 };
            obj2 = { initialRouteName: metroImportDefault.APPLICATION_VIEW, application };
            current.openCustomKeyboard(obj);
          }
        }
        cResult[3] = application;
        cResult[4] = chatInputRef;
        cResult[5] = P;
        tmp9 = P;
      }
      let isActivityAppResult = initiallyExpanded;
      if (initiallyExpanded == null) {
        const tmpResult = application(bottomSheetExpandReasonRef[11]);
        isActivityAppResult = tmpResult.isActivityApp(application);
      }
      cResult[0] = application;
      cResult[1] = initiallyExpanded;
      cResult[2] = isActivityAppResult;
      tmp7 = isActivityAppResult;
    }
  : (application) => {
      let context;
      let entrypoint;
      let expandBottomSheet;
      let initiallyExpanded;
      let installOnDemand;
      let lockableScrollableContentOffsetY;
      let onActivityItemSelected;
      let onCommandExecuted;
      let onPressBack;
      let sectionName;
      application = application.application;
      ({ initiallyExpanded, expandBottomSheet } = application);
      let bottomSheetExpandReasonRef;
      initiallyExpanded = undefined;
      ({
        context,
        lockableScrollableContentOffsetY,
        installOnDemand,
        sectionName,
        onPressBack,
        onActivityItemSelected,
        entrypoint,
        onCommandExecuted,
      } = application);
      let tmp = application;
      let obj = application(bottomSheetExpandReasonRef[9]);
      const requiredAppLauncherContext = obj.useRequiredAppLauncherContext();
      bottomSheetExpandReasonRef = requiredAppLauncherContext.bottomSheetExpandReasonRef;
      const chatInputRef = requiredAppLauncherContext.chatInputRef;
      const tmp5 = expandBottomSheet(bottomSheetExpandReasonRef[10])();
      let closure_4 = tmp5;
      const tmp4 = expandBottomSheet;
      if (initiallyExpanded == null) {
        const tmpResult = tmp(bottomSheetExpandReasonRef[11]);
        initiallyExpanded = tmpResult.isActivityApp(application);
      }
      const items = [application, chatInputRef];
      const items1 = [tmp5, initiallyExpanded, expandBottomSheet, bottomSheetExpandReasonRef];
      const onAauth2Cancel = chatInputRef.useCallback(() => {
        let obj2;
        const current = chatInputRef.current;
        const obj = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: obj2 };
        obj2 = { initialRouteName: metroImportDefault.APPLICATION_VIEW, application };
        current.openCustomKeyboard(obj);
      }, items);
      const effect = chatInputRef.useEffect(() => {
        const tmp = initiallyExpanded && closure_4;
        if (tmp) {
          bottomSheetExpandReasonRef.current = AppLauncherContext.AppLauncherBottomSheetExpandReason.APP_VIEW;
          if (expandBottomSheet != null) {
            expandBottomSheet();
          }
        }
      }, items1);
      return jsx(tmp4(bottomSheetExpandReasonRef[13]), {
        application,
        context,
        lockableScrollableContentOffsetY,
        installOnDemand,
        sectionName,
        onPressBack,
        onActivityItemSelected,
        entrypoint,
        onCommandExecuted,
        onAauth2Cancel,
      });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (navigation) => {
      let FAKE_BUILT_IN_APP;
      let application;
      let applicationId;
      let context;
      let entrypoint;
      let expandBottomSheet;
      let initiallyExpanded;
      let installOnDemand;
      let keyboardCloseReasonRef;
      let onActivityItemSelected;
      let onCommandExecuted;
      let onPressBack;
      let sectionName;
      const tmp = navigation;
      let tmp2 = context;
      const obj = navigation(context[8]);
      const cResult = obj.c(25);
      navigation = navigation.navigation;
      const params = navigation.route.params;
      ({ application, onPressBack } = params);
      context = params.context;
      ({ initiallyExpanded, installOnDemand } = params);
      ({ sectionName, expandBottomSheet, onCommandExecuted, applicationId } = params);
      const obj2 = navigation(context[9]);
      const requiredAppLauncherContext = obj2.useRequiredAppLauncherContext();
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
      let tmp9 = null;
      const useGetOrFetchApplication = tmp(tmp2[14]).useGetOrFetchApplication;
      const tmpResult = tmp(tmp2[14]);
      if (id !== BuiltInSectionId.BUILT_IN) {
        tmp9 = id;
      }
      const getOrFetchApplication = useGetOrFetchApplication(tmp9);
      if (id === BuiltInSectionId.BUILT_IN) {
        FAKE_BUILT_IN_APP = tmp(tmp2[11]).FAKE_BUILT_IN_APP;
      } else {
        FAKE_BUILT_IN_APP = getOrFetchApplication;
        if (getOrFetchApplication == null) {
          FAKE_BUILT_IN_APP = application;
        }
      }
      const tmpResult2 = tmp(tmp2[15]);
      const sharedValue = tmpResult2.useSharedValue(0);
      if (cResult[0] === chatInputRef) {
        if (cResult[1] === keyboardCloseReasonRef) {
          if (cResult[2] === navigation) {
            let tmp12;
            if (cResult[3] === onPressBack) {
              tmp12 = cResult[4];
            }
            if (cResult[5] === id) {
              if (cResult[6] === context) {
                let tmp21;
                class G {
                  constructor() {
                    const tmp2 = null != id && "channel" === context.type && installOnDemand;
                    if (tmp2) {
                      const result = ApplicationCommandIndexStore.queryInstallOnDemandApp(id, context.channel.id);
                    }
                  }
                }
                if (cResult[10] === FAKE_BUILT_IN_APP) {
                  if (cResult[11] === context) {
                    if (cResult[12] === entrypoint) {
                      if (cResult[13] === expandBottomSheet) {
                        if (cResult[14] === tmp12) {
                          if (cResult[15] === initiallyExpanded) {
                            if (cResult[16] === installOnDemand) {
                              if (cResult[17] === sharedValue) {
                                if (cResult[18] === onActivityItemSelected) {
                                  if (cResult[19] === onCommandExecuted) {
                                    let tmp16;
                                    if (cResult[20] === sectionName) {
                                      tmp16 = cResult[21];
                                    }
                                    if (cResult[22] === tmp5.container) {
                                      let tmp25;
                                      if (cResult[23] === tmp16) {
                                        tmp25 = cResult[24];
                                      }
                                      return tmp25;
                                    }
                                    class G {
                                      constructor() {
                                        const tmp2 = null != id && "channel" === context.type && installOnDemand;
                                        if (tmp2) {
                                          const result = ApplicationCommandIndexStore.queryInstallOnDemandApp(
                                            id,
                                            context.channel.id,
                                          );
                                        }
                                      }
                                    }
                                    const tmp27 = (
                                      <keyboardCloseReasonRef style={tmp5.container}>{tmp16}</keyboardCloseReasonRef>
                                    );
                                    cResult[22] = tmp5.container;
                                    cResult[23] = tmp16;
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
                if (null != FAKE_BUILT_IN_APP) {
                  class G {
                    constructor() {
                      const tmp2 = null != id && "channel" === context.type && installOnDemand;
                      if (tmp2) {
                        const result = ApplicationCommandIndexStore.queryInstallOnDemandApp(id, context.channel.id);
                      }
                    }
                  }
                  tmp24[0] = context;
                  tmp24[1] = FAKE_BUILT_IN_APP;
                  tmp24[2] = sharedValue;
                  tmp24[3] = initiallyExpanded;
                  tmp24[4] = installOnDemand;
                  tmp24[5] = sectionName;
                  tmp24[6] = tmp12;
                  tmp24[7] = onActivityItemSelected;
                  tmp24[8] = entrypoint;
                  tmp24[9] = expandBottomSheet;
                  tmp24[10] = onCommandExecuted;
                  tmp21 = <closure_11 {...tmp24} />;
                } else {
                  class G {
                    constructor() {
                      const tmp2 = null != id && "channel" === context.type && installOnDemand;
                      if (tmp2) {
                        const result = ApplicationCommandIndexStore.queryInstallOnDemandApp(id, context.channel.id);
                      }
                    }
                  }
                  tmp19[0] = { paddingTop: tmp(tmp2[16]).EXPANDED_HEADER_HEIGHT };
                  tmp19[1] = <chatInputRef />;
                  tmp21 = <keyboardCloseReasonRef {...tmp19} />;
                  const obj4 = { paddingTop: tmp(tmp2[16]).EXPANDED_HEADER_HEIGHT };
                }
                cResult[10] = FAKE_BUILT_IN_APP;
                cResult[11] = context;
                cResult[12] = entrypoint;
                cResult[13] = expandBottomSheet;
                cResult[14] = tmp12;
                cResult[15] = initiallyExpanded;
                cResult[16] = installOnDemand;
                cResult[17] = sharedValue;
                cResult[18] = onActivityItemSelected;
                cResult[19] = onCommandExecuted;
                cResult[20] = sectionName;
                cResult[21] = tmp21;
                tmp16 = tmp21;
              }
            }
            class G {
              constructor() {
                const tmp2 = null != id && "channel" === context.type && installOnDemand;
                if (tmp2) {
                  const result = ApplicationCommandIndexStore.queryInstallOnDemandApp(id, context.channel.id);
                }
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
      tmp12 = fn;
    }
  : (route) => {
      let FAKE_BUILT_IN_APP;
      let application;
      let applicationId;
      let c4;
      let c5;
      let context;
      let entrypoint;
      let expandBottomSheet;
      let initiallyExpanded;
      let onActivityItemSelected;
      let onCommandExecuted;
      let ref;
      let require;
      let sectionName;
      let tmp12Result;
      const params = route.route.params;
      ({ application, onPressBack: require, context } = params);
      const installOnDemand = params.installOnDemand;
      navigation = route.navigation;
      c4 = undefined;
      c5 = undefined;
      let tmp2 = installOnDemand;
      ({ applicationId, initiallyExpanded, sectionName, expandBottomSheet, onCommandExecuted } = params);
      const obj = require("AppLauncherContext");
      const requiredAppLauncherContext = obj.useRequiredAppLauncherContext();
      ({ chatInputRef: c4, keyboardCloseReasonRef: c5 } = requiredAppLauncherContext);
      ({ entrypoint, onActivityItemSelected } = requiredAppLauncherContext);
      let id;
      const tmp4 = closure_10();
      if (application != null) {
        id = application.id;
      }
      if (id == null) {
        id = applicationId;
      }
      let tmp8 = null;
      const useGetOrFetchApplication = require("useGetOrFetchApplications").useGetOrFetchApplication;
      const tmpResult = require("useGetOrFetchApplications");
      if (id !== BuiltInSectionId.BUILT_IN) {
        tmp8 = id;
      }
      const getOrFetchApplication = useGetOrFetchApplication(tmp8);
      if (id === BuiltInSectionId.BUILT_IN) {
        FAKE_BUILT_IN_APP = require("AppLauncherUtils").FAKE_BUILT_IN_APP;
      } else {
        FAKE_BUILT_IN_APP = getOrFetchApplication;
        if (getOrFetchApplication == null) {
          FAKE_BUILT_IN_APP = application;
        }
      }
      const items = [id, context, installOnDemand];
      const tmpResult2 = require("ReanimatedRexport");
      const sharedValue = tmpResult2.useSharedValue(0);
      const effect = navigation.useEffect(() => {
        const tmp2 = null != id && "channel" === context.type && installOnDemand;
        if (tmp2) {
          const result = ApplicationCommandIndexStore.queryInstallOnDemandApp(id, context.channel.id);
        }
      }, items);
      if (null != FAKE_BUILT_IN_APP) {
        tmp12Result = (
          <closure_11
            context={context}
            application={FAKE_BUILT_IN_APP}
            lockableScrollableContentOffsetY={sharedValue}
            initiallyExpanded={initiallyExpanded}
            installOnDemand={installOnDemand}
            sectionName={sectionName}
            onPressBack={function onPressBack() {
              if (_require != null) {
                tmp();
              }
              if (navigation.canGoBack()) {
                navigation.pop();
              } else {
                c5.current = AppLauncherContext.AppLauncherKeyboardCloseReason.BACK;
                const current = ref.current;
                if (current != null) {
                  current.closeCustomKeyboard();
                }
              }
            }}
            onActivityItemSelected={onActivityItemSelected}
            entrypoint={entrypoint}
            expandBottomSheet={expandBottomSheet}
            onCommandExecuted={onCommandExecuted}
          />
        );
      } else {
        tmp12Result = <tmp13 style={{ paddingTop: require("Header").EXPANDED_HEADER_HEIGHT }}>{null}</tmp13>;
        const obj5 = { paddingTop: require("Header").EXPANDED_HEADER_HEIGHT };
      }
      return <c5 style={tmp4.container}>{tmp12Result}</c5>;
    };
let result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/application_view/AppLauncherApplicationViewScreen.tsx",
);

export default tmp4;
