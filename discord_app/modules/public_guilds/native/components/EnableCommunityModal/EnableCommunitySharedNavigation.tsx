// === Module 17883: EnableCommunitySharedNavigation ===

// Module 17883 (EnableCommunitySharedNavigation)
import DispatcherDefault from "Dispatcher" /* 584 */;
import noop from "module_19" /* 19 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9283 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
let GuildFeatures = fn(1085).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4896);
let closure_10 = createStyles.createStyles({ container: { flex: 1, height: "100%" }, modal: { height: "100%", flex: 1, justifyContent: "space-between" }, button: { flexGrow: 0, paddingLeft: 16, paddingTop: 16, paddingRight: 16 } });
let obj2 = { STEP_1: "STEP_1", STEP_2: "STEP_2", STEP_3: "STEP_3" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/EnableCommunitySharedNavigation.tsx");

export const EnableCommunityModalSteps = obj2;
export const EnableCommunityModalScreen = ReactCompilerGating.isReactCompilerEnabled() ? ((onSuccess) => {
  const cResult = onSuccess(headerRef[7]).c(37);
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
  let obj = onSuccess(headerRef[7]);
  guild = onSuccess(headerRef[8]).useStateFromStoresObject(tmp5, E).guild;
  let features1;
  if (guild != null) {
    features1 = guild.features;
  }
  if (cResult[2] !== features1) {
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
    let tmp9 = hasItem;
  } else {
    tmp9 = cResult[3];
  }
  closure_4 = tmp9;
  const tmpResult = onSuccess(headerRef[8]);
  const navigation = onSuccess(headerRef[9]).useNavigation();
  const tmpResult3 = onSuccess(headerRef[9]);
  isScreenReaderEnabled = onSuccess(headerRef[10]).useIsScreenReaderEnabled();
  GuildFeatures = tmp15;
  if (cResult[4] === headerRef) {
    if (cResult[5] === tmp15) {
      if (cResult[6] === isScreenReaderEnabled) {
        let tmp16 = cResult[7];
        let tmp17 = cResult[8];
      }
      const effect = guild.useEffect(tmp16, tmp17);
      class E {
        constructor() {
          return closure_6.getProps();
        }
      }
      const effect1 = guild.useEffect(tmp19, tmp20);
      if (null == guild) {
        const _Symbol = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class E {
            constructor() {
              return closure_6.getProps();
            }
          }
          const tmp37 = closure_8(tmp(tmp2[14]).SceneLoadingIndicator, {});
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
              if (cResult[16] === onSuccess) {
                let tmp22 = cResult[17];
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
                obj2 = { style: null, children: null };
                class E {
                  constructor() {
                    return closure_6.getProps();
                  }
                }
                obj2.children = children;
                const tmp26 = closure_8(closure_4, obj2);
                cResult[19] = children;
                cResult[20] = tmp26;
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
                let tmp27 = buttonText;
              } else {
                tmp27 = cResult[22];
              }
              if (cResult[23] === disableNextStep) {
                if (cResult[24] === tmp22) {
                  if (cResult[25] === tmp27) {
                    let tmp29 = cResult[26];
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
                  const obj3 = { style: tmp4.button, children: tmp29 };
                  const tmp34 = closure_8(closure_4, obj3);
                  cResult[27] = tmp4.button;
                  cResult[28] = tmp29;
                  cResult[29] = tmp34;
                }
              }
              const obj4 = { variant: "primary", grow: true, text: tmp27, onPress: tmp22, disabled: disableNextStep };
              const tmp31 = closure_8(tmp(tmp2[16]).Button, obj4);
              cResult[23] = disableNextStep;
              cResult[24] = tmp22;
              cResult[25] = tmp27;
              cResult[26] = tmp31;
              tmp29 = tmp31;
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
        tmp22 = L;
      }
    }
  }
  class C {
    constructor() {
      if (closure_6) {
        tmp = closure_7;
        if (closure_7) {
          tmp2 = headerRef;
          tmp3 = null;
          if (null != headerRef) {
            tmp4 = globalThis;
            _setTimeout = setTimeout;
            num = 100;
            closure_0 = setTimeout(() => { ... }, 100);
            return () => { ... };
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
  tmp17 = items1;
  tmp16 = C;
  const tmpResult4 = onSuccess(headerRef[10]);
}) : ((arg0) => {
  ({ onSuccess: require, buttonText, currentStep: importDefault, headerRef } = arg0);
  closure_5 = undefined;
  let isScreenReaderEnabled;
  GuildFeatures = undefined;
  ({ disableNextStep, children } = arg0);
  const tmp = closure_10();
  const items = [isScreenReaderEnabled];
  guild = require("initialize").useStateFromStoresObject(items, () => isScreenReaderEnabled.getProps()).guild;
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.COMMUNITY);
  }
  let obj = require("initialize");
  closure_5 = require("useNavigation").useNavigation();
  const tmp2Result = require("useNavigation");
  isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  GuildFeatures = tmp7;
  const items1 = [isScreenReaderEnabled, null != guild, headerRef];
  const effect = guild.useEffect(() => {
    if (isScreenReaderEnabled) {
      if (closure_7) {
        if (null != headerRef) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => require("setAccessibilityFocus").setAccessibilityFocus({ ref }), 100);
          return () => clearTimeout(closure_0);
        }
      }
    }
  }, items1);
  const items2 = [hasItem];
  const effect1 = guild.useEffect(() => {
    if (hasItem) {
      DispatcherDefault.wait(() => closure_1_1(headerRef[13]).close());
    }
  }, items2);
  if (null == guild) {
    let tmp12Result = closure_8(require("SceneLoadingIndicator").SceneLoadingIndicator, {});
  } else {
    obj2 = { style: tmp.container, children: null };
    const obj3 = { bottom: true, style: tmp.modal, children: null };
    const obj4 = { style: { flexGrow: 1 }, children };
    const items3 = [closure_8(hasItem, obj4), ];
    const obj5 = { style: tmp.button, children: null };
    if (buttonText == null) {
      const intl = require("util").intl;
      buttonText = intl.string(require("util").t.PDTjLN);
    }
    const obj6 = {
      variant: "primary",
      grow: true,
      text: buttonText,
      onPress() {
          if (null != guild) {
            if (obj2.STEP_1 === importDefault) {
              closure_5.push(obj2.STEP_2);
            } else if (obj2.STEP_2 === tmp2) {
              closure_5.push(obj2.STEP_3);
            } else if (require != null) {
              tmp4(tmp);
            }
          }
        },
      disabled: disableNextStep
    };
    obj5.children = closure_8(require("components/Button/Button").Button, obj6);
    items3[1] = closure_8(hasItem, obj5);
    obj3.children = items3;
    obj2.children = closure_9(require("common/SafeAreaView").SafeAreaPaddingView, obj3);
    tmp12Result = closure_8(closure_5, obj2);
  }
  return tmp12Result;
});