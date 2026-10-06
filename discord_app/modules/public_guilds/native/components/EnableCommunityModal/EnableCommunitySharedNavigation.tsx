// discord_app/modules/public_guilds/native/components/EnableCommunityModal/EnableCommunitySharedNavigation.tsx
import DispatcherDefault from "../../../../../Dispatcher.tsx";
import Constants from "../../../../../Constants.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import GuildSettingsStore from "../../../../guild_settings/GuildSettingsStore.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let arr, arr1, navigation, num, onSuccess, tmp3, tmp4Result;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
let GuildFeatures = Constants.GuildFeatures;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({
  container: { flex: 1, height: "100%" },
  modal: { height: "100%", flex: 1, justifyContent: "space-between" },
  button: { flexGrow: 0, paddingLeft: 16, paddingTop: 16, paddingRight: 16 },
});
const EnableCommunityModalSteps = { STEP_1: "STEP_1", STEP_2: "STEP_2", STEP_3: "STEP_3" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onSuccess) => {
      let buttonText;
      let children;
      let closure_7;
      let currentStep;
      let disableNextStep;
      let headerRef;
      let isScreenReaderEnabled;
      let tmp10;
      let tmp5;
      let tmp6;
      const tmp = onSuccess;
      const tmp2 = headerRef;
      let obj = onSuccess(headerRef[7]);
      const cResult = obj.c(37);
      onSuccess = onSuccess.onSuccess;
      ({ disableNextStep, children, buttonText, currentStep } = onSuccess);
      headerRef = onSuccess.headerRef;
      const tmp4 = closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [isScreenReaderEnabled];
        class E {
          constructor() {
            return closure_6.getProps();
          }
        }
        cResult[0] = items;
        cResult[1] = E;
        tmp5 = items;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = tmp(tmp2[8]);
      const guild = tmpResult.useStateFromStoresObject(tmp5, E).guild;
      let features1;
      const tmp8 = cResult[2];
      if (guild != null) {
        features1 = guild.features;
      }
      if (tmp8 !== features1) {
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(GuildFeatures.COMMUNITY);
        }
        class E {
          constructor() {
            return closure_6.getProps();
          }
        }
        cResult[2] = undefined;
        cResult[3] = hasItem;
        tmp10 = hasItem;
      } else {
        tmp10 = cResult[3];
      }
      let closure_4 = tmp10;
      const tmpResult3 = tmp(tmp2[9]);
      navigation = tmpResult3.useNavigation();
      const tmpResult4 = tmp(tmp2[10]);
      isScreenReaderEnabled = tmpResult4.useIsScreenReaderEnabled();
      GuildFeatures = tmp16;
      if (cResult[4] === headerRef) {
        if ((cResult[5] === null) != guild) {
          let tmp17;
          let tmp18;
          if (cResult[6] === isScreenReaderEnabled) {
            tmp17 = cResult[7];
            tmp18 = cResult[8];
          }
          const effect = guild.useEffect(tmp17, tmp18);
          const obj5 = guild;
          class E {
            constructor() {
              return closure_6.getProps();
            }
          }
          const effect1 = obj5.useEffect(tmp20, tmp21);
          if (null == guild) {
            const _Symbol = Symbol;
            if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
              closure_8(tmp(tmp2[14]).SceneLoadingIndicator, {});
              class E {
                constructor() {
                  return closure_6.getProps();
                }
              }
            }
            class E {
              constructor() {
                return closure_6.getProps();
              }
            }
          } else {
            if (cResult[13] === currentStep) {
              if (cResult[14] === guild) {
                if (cResult[15] === navigation) {
                  let tmp23;
                  let tmp28;
                  if (cResult[16] === onSuccess) {
                    tmp23 = cResult[17];
                  }
                  class L {
                    constructor() {
                      if (null != guild) {
                        tmp3 = closure_11;
                        if (closure_11.STEP_1 === currentStep) {
                          tmp8 = closure_5;
                          arr = closure_5.push(tmp3.STEP_2);
                        } else if (tmp3.STEP_2 === tmp2) {
                          tmp6 = closure_5;
                          arr1 = closure_5.push(tmp3.STEP_3);
                        } else if (onSuccess != null) {
                          tmp4Result = tmp4(tmp);
                        }
                      }
                      return;
                    }
                  }
                  class E {
                    constructor() {
                      return closure_6.getProps();
                    }
                  }
                  if (cResult[19] !== children) {
                    class L {
                      constructor() {
                        if (null != guild) {
                          tmp3 = closure_11;
                          if (closure_11.STEP_1 === currentStep) {
                            tmp8 = closure_5;
                            arr = closure_5.push(tmp3.STEP_2);
                          } else if (tmp3.STEP_2 === tmp2) {
                            tmp6 = closure_5;
                            arr1 = closure_5.push(tmp3.STEP_3);
                          } else if (onSuccess != null) {
                            tmp4Result = tmp4(tmp);
                          }
                        }
                        return;
                      }
                    }
                    let obj2 = { style: null, children };
                    class E {
                      constructor() {
                        return closure_6.getProps();
                      }
                    }
                    cResult[19] = children;
                    cResult[20] = closure_8(closure_4, obj2);
                    const tmp27 = closure_8(closure_4, obj2);
                  }
                  if (cResult[21] !== buttonText) {
                    class L {
                      constructor() {
                        if (null != guild) {
                          tmp3 = closure_11;
                          if (closure_11.STEP_1 === currentStep) {
                            tmp8 = closure_5;
                            arr = closure_5.push(tmp3.STEP_2);
                          } else if (tmp3.STEP_2 === tmp2) {
                            tmp6 = closure_5;
                            arr1 = closure_5.push(tmp3.STEP_3);
                          } else if (onSuccess != null) {
                            tmp4Result = tmp4(tmp);
                          }
                        }
                        return;
                      }
                    }
                    class E {
                      constructor() {
                        return closure_6.getProps();
                      }
                    }
                    cResult[22] = buttonText;
                    tmp28 = buttonText;
                  } else {
                    tmp28 = cResult[22];
                  }
                  if (cResult[23] === disableNextStep) {
                    if (cResult[24] === tmp23) {
                      let tmp30;
                      if (cResult[25] === tmp28) {
                        tmp30 = cResult[26];
                      }
                      class L {
                        constructor() {
                          if (null != guild) {
                            tmp3 = closure_11;
                            if (closure_11.STEP_1 === currentStep) {
                              tmp8 = closure_5;
                              arr = closure_5.push(tmp3.STEP_2);
                            } else if (tmp3.STEP_2 === tmp2) {
                              tmp6 = closure_5;
                              arr1 = closure_5.push(tmp3.STEP_3);
                            } else if (onSuccess != null) {
                              tmp4Result = tmp4(tmp);
                            }
                          }
                          return;
                        }
                      }
                      class E {
                        constructor() {
                          return closure_6.getProps();
                        }
                      }
                      const obj3 = { style: tmp4.button, children: tmp30 };
                      cResult[27] = tmp4.button;
                      cResult[28] = tmp30;
                      cResult[29] = closure_8(closure_4, obj3);
                      const tmp35 = closure_8(closure_4, obj3);
                    }
                  }
                  const obj4 = {
                    variant: "primary",
                    grow: true,
                    text: tmp28,
                    onPress: tmp23,
                    disabled: disableNextStep,
                  };
                  const tmp32 = closure_8(tmp(tmp2[16]).Button, obj4);
                  cResult[23] = disableNextStep;
                  cResult[24] = tmp23;
                  cResult[25] = tmp28;
                  cResult[26] = tmp32;
                  tmp30 = tmp32;
                }
              }
            }
            class L {
              constructor() {
                if (null != guild) {
                  tmp3 = closure_11;
                  if (closure_11.STEP_1 === currentStep) {
                    tmp8 = closure_5;
                    arr = closure_5.push(tmp3.STEP_2);
                  } else if (tmp3.STEP_2 === tmp2) {
                    tmp6 = closure_5;
                    arr1 = closure_5.push(tmp3.STEP_3);
                  } else if (onSuccess != null) {
                    tmp4Result = tmp4(tmp);
                  }
                }
                return;
              }
            }
            class E {
              constructor() {
                return closure_6.getProps();
              }
            }
            cResult[14] = guild;
            cResult[15] = navigation;
            cResult[16] = onSuccess;
            cResult[17] = L;
            tmp23 = L;
          }
        }
      }
      class C {
        constructor() {
          tmp = closure_6;
          if (tmp) {
            tmp2 = closure_7;
            if (tmp2) {
              tmp3 = headerRef;
              tmp4 = null;
              if (null != headerRef) {
                tmp5 = globalThis;
                _setTimeout = setTimeout;
                num = 100;
                closure_0 = setTimeout(() => {
                  /* body not rendered: F149458 */
                }, 100);
                return () => {
                  /* body not rendered: F149459 */
                };
              }
            }
          }
          return;
        }
      }
      const items1 = [isScreenReaderEnabled, null != guild, headerRef];
      cResult[4] = headerRef;
      cResult[5] = null != guild;
      cResult[6] = isScreenReaderEnabled;
      cResult[7] = C;
      cResult[8] = items1;
      tmp18 = items1;
      tmp17 = C;
    }
  : (arg0) => {
      let Button;
      let SafeAreaPaddingView;
      let buttonText;
      let children;
      let closure_7;
      let disableNextStep;
      let headerRef;
      let items3;
      let obj3;
      let obj6;
      let tmp12Result;
      ({ onSuccess: require, buttonText, currentStep: importDefault, headerRef } = arg0);
      let closure_5;
      let isScreenReaderEnabled;
      GuildFeatures = undefined;
      ({ disableNextStep, children } = arg0);
      const tmp = closure_10();
      let obj = require("get initialized");
      const items = [isScreenReaderEnabled];
      const guild = obj.useStateFromStoresObject(items, () => isScreenReaderEnabled.getProps()).guild;
      let hasItem;
      if (guild != null) {
        const features = guild.features;
        hasItem = features.has(GuildFeatures.COMMUNITY);
      }
      const tmp2Result = require("useNavigation");
      closure_5 = tmp2Result.useNavigation();
      const tmp2Result2 = require("useIsScreenReaderEnabled");
      isScreenReaderEnabled = tmp2Result2.useIsScreenReaderEnabled();
      GuildFeatures = tmp7;
      const items1 = [isScreenReaderEnabled, null != guild, headerRef];
      const effect = guild.useEffect(() => {
        let closure_0;
        let ref;
        if (isScreenReaderEnabled) {
          if (closure_7) {
            if (null != headerRef) {
              const _setTimeout = setTimeout;
              const timeout = setTimeout(() => {
                const obj = require("react-native");
                const obj2 = { ref };
                return obj.setAccessibilityFocus(obj2);
              }, 100);
              return () => clearTimeout(closure_0);
            }
          }
        }
      }, items1);
      const items2 = [hasItem];
      const effect1 = guild.useEffect(() => {
        if (hasItem) {
          let obj = DispatcherDefault;
          obj.wait(() => {
            const obj = closure_1_1(headerRef[13]);
            return obj.close();
          });
        }
      }, items2);
      if (null == guild) {
        tmp12Result = closure_8(require("SceneLoadingIndicator").SceneLoadingIndicator, {});
      } else {
        let obj2 = { style: tmp.container, children: closure_9(SafeAreaPaddingView, obj3) };
        obj3 = { bottom: true, style: tmp.modal, children: items3 };
        const obj4 = { style: { flexGrow: 1 }, children };
        SafeAreaPaddingView = require("common/SafeAreaView").SafeAreaPaddingView;
        items3 = [closure_8(hasItem, obj4)];
        const obj5 = { style: tmp.button, children: closure_8(Button, obj6) };
        Button = require("components/Button/Button").Button;
        const tmp13 = closure_5;
        const tmp15 = hasItem;
        if (buttonText == null) {
          const intl = require("intl").intl;
          buttonText = intl.string(require("intl").t.PDTjLN);
        }
        obj6 = {
          variant: "primary",
          grow: true,
          text: buttonText,
          onPress() {
            if (null != guild) {
              if (obj.STEP_1 === importDefault) {
                closure_5.push(obj.STEP_2);
              } else if (obj.STEP_2 === tmp2) {
                closure_5.push(obj.STEP_3);
              } else if (require != null) {
                tmp4(tmp);
              }
            }
          },
          disabled: disableNextStep,
        };
        items3[1] = closure_8(tmp15, obj5);
        tmp12Result = closure_8(tmp13, obj2);
      }
      return tmp12Result;
    };
const result = size.fileFinishedImporting(
  "modules/public_guilds/native/components/EnableCommunityModal/EnableCommunitySharedNavigation.tsx",
);

export { EnableCommunityModalSteps };
export const EnableCommunityModalScreen = tmp4;
