// === Module 17587: NewUserModal ===

// Module 17587 (NewUserModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import NewUserUtils from "NewUserUtils" /* 17586 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 7556 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, dependencyMap;

let hasOwnProperty;
let metroRequire;
let obj2;
const f131163 = () => closure_1_0(paths[7])(paths[6], paths.paths);
let react = react_mod;
let NativeModules = react_native.NativeModules;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = NativeStackView.createNativeStackNavigator();
let obj = { header: obj2 };
obj2 = { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
let closure_8 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityNativeStackOptions;
  let closure_2;
  let initialOnboardingStepIndex;
  let initialRouteName;
  let items;
  let obj10;
  let obj12;
  let obj4;
  let obj6;
  let obj8;
  let tmp26;
  let tmp5;
  let tmp7;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(15);
  ({ initialRouteName, initialOnboardingStepIndex } = arg0);
  const tmp4 = closure_8();
  _require = tmp4;
  if (cResult[0] !== initialOnboardingStepIndex) {
    let obj2 = { onboardingStepIndex: initialOnboardingStepIndex, lastShownStepIndex: initialOnboardingStepIndex };
    cResult[0] = initialOnboardingStepIndex;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const ref = accessibilityNativeStackOptions.useRef(tmp5);
  dependencyMap = accessibilityNativeStackOptions.useRef(null);
  const tmpResult = tmp(6496);
  accessibilityNativeStackOptions = tmpResult.useAccessibilityNativeStackOptions();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function f(flag) {
      let lastShownStepIndex;
      let onboardingStepIndex;
      ({ lastShownStepIndex, onboardingStepIndex } = ref.current);
      const tmp = NewUserUtils;
      const getNextOnboardingStep = tmp.getNextOnboardingStep;
      const nextOnboardingStep = getNextOnboardingStep(flag, lastShownStepIndex, onboardingStepIndex);
      nextOnboardingStep.then((lastShownStepIndex) => {
        const onboardingStepIndex = lastShownStepIndex.onboardingStepIndex;
        closure_1_1.current = { onboardingStepIndex, lastShownStepIndex: lastShownStepIndex.lastShownStepIndex };
        if (lastShownStepIndex.continueNavigation) {
          if (null != ref.current) {
            const obj2 = closure_0(ref[12]);
            obj2.continueToNextStep(onboardingStepIndex, tmp.current);
          }
        }
        const obj = closure_1(ref[13]);
        obj.popWithKey(closure_0(ref[14]).NEW_USER_MODAL_KEY);
      });
    };
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  NativeModules = tmp7;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        MinimizeApp = MinimizeApp.MinimizeApp;
        MinimizeApp.minimizeApp();
        return true;
      }
    }
    cResult[3] = N;
  } else {
    class N {
      constructor() {
        MinimizeApp = MinimizeApp.MinimizeApp;
        MinimizeApp.minimizeApp();
        return true;
      }
    }
  }
  const tmpResult2 = tmp(6016);
  tmpResult2.useNavigatorBackPressHandler(N);
  if (cResult[4] === accessibilityNativeStackOptions) {
    let tmp11;
    let tmp14;
    let tmp17;
    let tmp20;
    let tmp23;
    class N {
      constructor() {
        MinimizeApp = MinimizeApp.MinimizeApp;
        MinimizeApp.minimizeApp();
        return true;
      }
    }
    if (initialRouteName == null) {
      class N {
        constructor() {
          MinimizeApp = MinimizeApp.MinimizeApp;
          MinimizeApp.minimizeApp();
          return true;
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor() {
          MinimizeApp = MinimizeApp.MinimizeApp;
          MinimizeApp.minimizeApp();
          return true;
        }
      }
      const obj3 = {
        name: "enable-notification",
        getComponent() {
              return closure_0(closure_2[17]).RedesignNotificationScreen;
            },
        initialParams: obj4
      };
      obj4 = { onComplete: tmp7 };
      const tmp13 = closure_5(closure_7.Screen, obj3);
      cResult[7] = tmp13;
      tmp11 = tmp13;
    } else {
      class N {
        constructor() {
          MinimizeApp = MinimizeApp.MinimizeApp;
          MinimizeApp.minimizeApp();
          return true;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor() {
          MinimizeApp = MinimizeApp.MinimizeApp;
          MinimizeApp.minimizeApp();
          return true;
        }
      }
      const obj5 = {
        name: "choose-avatar",
        getComponent() {
              return closure_0(closure_2[18]).default;
            },
        options() {
              let obj = {
                headerRight(arg0) {
                  let obj = {
                    onPress() {
                      closure_0 = closure_1_4;
                      const lazyResult = React.lazy(f131163);
                      const obj = closure_2_0(closure_2_2[8]);
                      const obj2 = {
                        onConfirm() {
                          return closure_0(true);
                        }
                      };
                      obj.openAlert("skip-avatar-upload", closure_2_5(lazyResult, obj2));
                    }
                  };
                  const tmp = ref(closure_2[19]);
                  const merged = Object.assign(arg0);
                  return closure_2_5(tmp, obj);
                }
              };
              return obj;
            },
        initialParams: obj6
      };
      obj6 = { onComplete: tmp7 };
      const tmp16 = closure_5(closure_7.Screen, obj5);
      cResult[8] = tmp16;
      tmp14 = tmp16;
    } else {
      class N {
        constructor() {
          MinimizeApp = MinimizeApp.MinimizeApp;
          MinimizeApp.minimizeApp();
          return true;
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor() {
          MinimizeApp = MinimizeApp.MinimizeApp;
          MinimizeApp.minimizeApp();
          return true;
        }
      }
      const obj7 = {
        name: "contact-sync",
        options: { headerShown: false },
        getComponent() {
              return closure_0(closure_2[20]).ContactSyncOnboardingModal;
            },
        initialParams: obj8
      };
      obj8 = { onComplete: tmp7 };
      const tmp19 = closure_5(closure_7.Screen, obj7);
      cResult[9] = tmp19;
      tmp17 = tmp19;
    } else {
      class N {
        constructor() {
          MinimizeApp = MinimizeApp.MinimizeApp;
          MinimizeApp.minimizeApp();
          return true;
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor() {
          MinimizeApp = MinimizeApp.MinimizeApp;
          MinimizeApp.minimizeApp();
          return true;
        }
      }
      const obj9 = {
        name: "discoverability",
        options: { headerShown: false },
        getComponent() {
              return closure_0(closure_2[21]).default;
            },
        initialParams: obj10
      };
      obj10 = { onComplete: tmp7 };
      const tmp22 = closure_5(closure_7.Screen, obj9);
      cResult[10] = tmp22;
      tmp20 = tmp22;
    } else {
      class N {
        constructor() {
          MinimizeApp = MinimizeApp.MinimizeApp;
          MinimizeApp.minimizeApp();
          return true;
        }
      }
    }
    const _Symbol5 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor() {
          MinimizeApp = MinimizeApp.MinimizeApp;
          MinimizeApp.minimizeApp();
          return true;
        }
      }
      const obj11 = {
        name: "connect-guardian",
        getComponent() {
              return closure_0(closure_2[22]).default;
            },
        initialParams: obj12
      };
      obj12 = { onComplete: tmp7 };
      const tmp25 = closure_5(closure_7.Screen, obj11);
      cResult[11] = tmp25;
      tmp23 = tmp25;
    } else {
      class N {
        constructor() {
          MinimizeApp = MinimizeApp.MinimizeApp;
          MinimizeApp.minimizeApp();
          return true;
        }
      }
    }
    if (cResult[12] === tmp10) {
      class N {
        constructor() {
          MinimizeApp = MinimizeApp.MinimizeApp;
          MinimizeApp.minimizeApp();
          return true;
        }
      }
      return tmp26;
    }
    const obj13 = { screenOptions: tmp10, initialRouteName, children: items };
    items = [tmp11, tmp14, tmp17, tmp20, tmp23];
    const tmp29 = closure_6(closure_7.Navigator, obj13);
    cResult[12] = tmp10;
    cResult[13] = initialRouteName;
    cResult[14] = tmp29;
    tmp26 = tmp29;
  }
  const fn2 = function y(navigation) {
    let str;
    closure_2.current = navigation.navigation;
    const obj = {
      headerStyle: closure_0.header,
      headerShadowVisible: false,
      title: "",
      headerLeft() {
        return null;
      },
      headerRight() {
        return null;
      },
      fullScreenGestureEnabled: false,
      presentation: str,
      animation: "slide_from_right",
      headerBackVisible: false
    };
    str = "card";
    const obj2 = PlatformUtils;
    if (obj2.isAndroid()) {
      str = "transparentModal";
    }
    const merged = Object.assign(accessibilityNativeStackOptions);
    return obj;
  };
  cResult[4] = accessibilityNativeStackOptions;
  cResult[5] = tmp4.header;
  cResult[6] = fn2;
}) : ((arg0) => {
  let closure_2;
  let closure_3;
  let initialOnboardingStepIndex;
  let initialRouteName;
  let items;
  ({ initialRouteName, initialOnboardingStepIndex } = arg0);
  react = undefined;
  _require = closure_8();
  const ref = react.useRef({ onboardingStepIndex: initialOnboardingStepIndex, lastShownStepIndex: initialOnboardingStepIndex });
  dependencyMap = react.useRef(null);
  let obj = require("Navigator");
  react = obj.useAccessibilityNativeStackOptions();
  const onComplete = react.useCallback((flag) => {
    let lastShownStepIndex;
    let onboardingStepIndex;
    ({ lastShownStepIndex, onboardingStepIndex } = ref.current);
    const tmp = NewUserUtils;
    const getNextOnboardingStep = tmp.getNextOnboardingStep;
    const nextOnboardingStep = getNextOnboardingStep(flag, lastShownStepIndex, onboardingStepIndex);
    nextOnboardingStep.then((lastShownStepIndex) => {
      const onboardingStepIndex = lastShownStepIndex.onboardingStepIndex;
      closure_1_1.current = { onboardingStepIndex, lastShownStepIndex: lastShownStepIndex.lastShownStepIndex };
      if (lastShownStepIndex.continueNavigation) {
        if (null != ref.current) {
          const obj2 = closure_0(ref[12]);
          obj2.continueToNextStep(onboardingStepIndex, tmp.current);
        }
      }
      const obj = closure_1(ref[13]);
      obj.popWithKey(closure_0(ref[14]).NEW_USER_MODAL_KEY);
    });
  }, []);
  let obj2 = require("useNavigatorBackPressHandler");
  obj2.useNavigatorBackPressHandler(() => {
    const MinimizeApp = callback.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  });
  const Navigator = closure_7.Navigator;
  const obj3 = {
    screenOptions(navigation) {
      let str;
      closure_2.current = navigation.navigation;
      const obj = {
        headerStyle: closure_0.header,
        headerShadowVisible: false,
        title: "",
        headerLeft() {
          return null;
        },
        headerRight() {
          return null;
        },
        fullScreenGestureEnabled: false,
        presentation: str,
        animation: "slide_from_right",
        headerBackVisible: false
      };
      str = "card";
      const obj2 = PlatformUtils;
      if (obj2.isAndroid()) {
        str = "transparentModal";
      }
      const merged = Object.assign(closure_3);
      return obj;
    },
    initialRouteName,
    children: items
  };
  if (initialRouteName == null) {
    initialRouteName = "choose-avatar";
  }
  items = [, , , , ];
  const obj4 = {
    name: "enable-notification",
    getComponent() {
      return closure_0(closure_2[17]).RedesignNotificationScreen;
    },
    initialParams: { onComplete }
  };
  items[0] = closure_5(closure_7.Screen, obj4);
  const obj5 = {
    name: "choose-avatar",
    getComponent() {
      return closure_0(closure_2[18]).default;
    },
    options() {
      let obj = {
        headerRight(arg0) {
          let obj = {
            onPress() {
              let paths;
              closure_0 = closure_1_4;
              const lazyResult = React.lazy(f131163);
              const obj = closure_2_0(closure_2_2[8]);
              const obj2 = {
                onConfirm() {
                  return closure_0(true);
                }
              };
              obj.openAlert("skip-avatar-upload", closure_2_5(lazyResult, obj2));
            }
          };
          const tmp = ref(closure_2[19]);
          const merged = Object.assign(arg0);
          return closure_2_5(tmp, obj);
        }
      };
      return obj;
    },
    initialParams: { onComplete }
  };
  items[1] = closure_5(closure_7.Screen, obj5);
  const obj6 = {
    name: "contact-sync",
    options: { headerShown: false },
    getComponent() {
      return closure_0(closure_2[20]).ContactSyncOnboardingModal;
    },
    initialParams: { onComplete }
  };
  items[2] = closure_5(closure_7.Screen, obj6);
  const obj7 = {
    name: "discoverability",
    options: { headerShown: false },
    getComponent() {
      return closure_0(closure_2[21]).default;
    },
    initialParams: { onComplete }
  };
  items[3] = closure_5(closure_7.Screen, obj7);
  const obj8 = {
    name: "connect-guardian",
    getComponent() {
      return closure_0(closure_2[22]).default;
    },
    initialParams: { onComplete }
  };
  items[4] = closure_5(closure_7.Screen, obj8);
  return closure_6(Navigator, obj3);
});
const result = size.fileFinishedImporting("modules/nuf/native/components/NewUserModal.tsx");

export default tmp3;