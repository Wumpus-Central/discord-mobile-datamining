// === Module 17587: NewUserModal ===

// Module 17587 (NewUserModal)
import nativeDefault from "native" /* 587 */;
import NewUserUtils from "NewUserUtils" /* 17586 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let NativeModules = fn(17).NativeModules;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const NativeStackNavigator = fn(7556);
let closure_7 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(4890);
let obj3 = { header: { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" } };
let closure_8 = createStyles.createStyles(obj3);
const ReactCompilerGating = fn(558);
let obj4 = { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/components/NewUserModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(15);
  ({ initialRouteName, initialOnboardingStepIndex } = arg0);
  const tmp4 = closure_8();
  _require = tmp4;
  if (cResult[0] !== initialOnboardingStepIndex) {
    let obj2 = { onboardingStepIndex: initialOnboardingStepIndex, lastShownStepIndex: initialOnboardingStepIndex };
    cResult[0] = initialOnboardingStepIndex;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  accessibilityNativeStackOptions.useRef(tmp5);
  dependencyMap = accessibilityNativeStackOptions.useRef(null);
  let obj = require("c");
  accessibilityNativeStackOptions = require("Navigator").useAccessibilityNativeStackOptions();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function f(flag) {
      ({ lastShownStepIndex, onboardingStepIndex } = ref.current);
      if (flag == null) {
        flag = false;
      }
      const nextOnboardingStep = NewUserUtils.getNextOnboardingStep(flag, lastShownStepIndex, onboardingStepIndex);
      nextOnboardingStep.then((lastShownStepIndex) => {
        const onboardingStepIndex = lastShownStepIndex.onboardingStepIndex;
        closure_1_1.current = { onboardingStepIndex, lastShownStepIndex: lastShownStepIndex.lastShownStepIndex };
        if (lastShownStepIndex.continueNavigation) {
          if (null != ref.current) {
            closure_0(ref[12]).continueToNextStep(onboardingStepIndex, tmp.current);
            const obj2 = closure_0(ref[12]);
          }
        }
        closure_1(ref[13]).popWithKey(closure_0(ref[14]).NEW_USER_MODAL_KEY);
        const obj = closure_1(ref[13]);
      });
    };
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  NativeModules = tmp7;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        MinimizeApp = closure_4.MinimizeApp;
        minimizeAppResult = MinimizeApp.minimizeApp();
        return true;
      }
    }
    cResult[3] = N;
  } else {
    class N {
      constructor() {
        MinimizeApp = closure_4.MinimizeApp;
        minimizeAppResult = MinimizeApp.minimizeApp();
        return true;
      }
    }
  }
  const tmpResult = require("Navigator");
  require("useNavigatorBackPressHandler").useNavigatorBackPressHandler(N);
  if (cResult[4] === accessibilityNativeStackOptions) {
    class N {
      constructor() {
        MinimizeApp = closure_4.MinimizeApp;
        minimizeAppResult = MinimizeApp.minimizeApp();
        return true;
      }
    }
    if (initialRouteName == null) {
      class N {
        constructor() {
          MinimizeApp = closure_4.MinimizeApp;
          minimizeAppResult = MinimizeApp.minimizeApp();
          return true;
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor() {
          MinimizeApp = closure_4.MinimizeApp;
          minimizeAppResult = MinimizeApp.minimizeApp();
          return true;
        }
      }
      const obj3 = {
        name: "enable-notification",
        getComponent() {
              return closure_0(15921).RedesignNotificationScreen;
            },
        initialParams: null
      };
      const obj4 = { onComplete: tmp7 };
      obj3.initialParams = obj4;
      const tmp13 = closure_5(closure_7.Screen, obj3);
      cResult[7] = tmp13;
      const tmp11 = tmp13;
    } else {
      class N {
        constructor() {
          MinimizeApp = closure_4.MinimizeApp;
          minimizeAppResult = MinimizeApp.minimizeApp();
          return true;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor() {
          MinimizeApp = closure_4.MinimizeApp;
          minimizeAppResult = MinimizeApp.minimizeApp();
          return true;
        }
      }
      const obj5 = {
        name: "choose-avatar",
        getComponent() {
              return closure_0(17589).default;
            },
        options() {
              return {
                headerRight(arg0) {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj.onPress = function onPress() {
                    closure_0 = closure_1_4;
                    const lazyResult = React.lazy(() => closure_0(paths[7])(paths[6], paths.paths));
                    closure_2_0(5709).openAlert("skip-avatar-upload", closure_2_5(lazyResult, {
                      onConfirm() {
                        return closure_0(true);
                      }
                    }));
                  };
                  return closure_2_5(closure_1(12345), obj);
                }
              };
            },
        initialParams: null
      };
      const obj6 = { onComplete: tmp7 };
      obj5.initialParams = obj6;
      const tmp16 = closure_5(closure_7.Screen, obj5);
      cResult[8] = tmp16;
      const tmp14 = tmp16;
    } else {
      class N {
        constructor() {
          MinimizeApp = closure_4.MinimizeApp;
          minimizeAppResult = MinimizeApp.minimizeApp();
          return true;
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor() {
          MinimizeApp = closure_4.MinimizeApp;
          minimizeAppResult = MinimizeApp.minimizeApp();
          return true;
        }
      }
      const obj7 = {
        name: "contact-sync",
        options: { headerShown: false },
        getComponent() {
              return closure_0(12334).ContactSyncOnboardingModal;
            },
        initialParams: null
      };
      const obj8 = { onComplete: tmp7 };
      obj7.initialParams = obj8;
      const tmp19 = closure_5(closure_7.Screen, obj7);
      cResult[9] = tmp19;
      const tmp17 = tmp19;
    } else {
      class N {
        constructor() {
          MinimizeApp = closure_4.MinimizeApp;
          minimizeAppResult = MinimizeApp.minimizeApp();
          return true;
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor() {
          MinimizeApp = closure_4.MinimizeApp;
          minimizeAppResult = MinimizeApp.minimizeApp();
          return true;
        }
      }
      const obj9 = {
        name: "discoverability",
        options: { headerShown: false },
        getComponent() {
              return closure_0(17590).default;
            },
        initialParams: null
      };
      const obj10 = { onComplete: tmp7 };
      obj9.initialParams = obj10;
      const tmp22 = closure_5(closure_7.Screen, obj9);
      cResult[10] = tmp22;
      const tmp20 = tmp22;
    } else {
      class N {
        constructor() {
          MinimizeApp = closure_4.MinimizeApp;
          minimizeAppResult = MinimizeApp.minimizeApp();
          return true;
        }
      }
    }
    const _Symbol5 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor() {
          MinimizeApp = closure_4.MinimizeApp;
          minimizeAppResult = MinimizeApp.minimizeApp();
          return true;
        }
      }
      const obj11 = {
        name: "connect-guardian",
        getComponent() {
              return closure_0(17592).default;
            },
        initialParams: null
      };
      const obj12 = { onComplete: tmp7 };
      obj11.initialParams = obj12;
      const tmp25 = closure_5(closure_7.Screen, obj11);
      cResult[11] = tmp25;
      const tmp23 = tmp25;
    } else {
      class N {
        constructor() {
          MinimizeApp = closure_4.MinimizeApp;
          minimizeAppResult = MinimizeApp.minimizeApp();
          return true;
        }
      }
    }
    if (cResult[12] === tmp10) {
      class N {
        constructor() {
          MinimizeApp = closure_4.MinimizeApp;
          minimizeAppResult = MinimizeApp.minimizeApp();
          return true;
        }
      }
      return tmp26;
    }
    const obj13 = { screenOptions: tmp10, initialRouteName, children: null };
    const items = [tmp11, tmp14, tmp17, tmp20, tmp23];
    obj13.children = items;
    const tmp29 = closure_6(closure_7.Navigator, obj13);
    cResult[12] = tmp10;
    cResult[13] = initialRouteName;
    cResult[14] = tmp29;
    tmp26 = tmp29;
  }
  const fn2 = function y(navigation) {
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
      presentation: null,
      animation: "slide_from_right",
      headerBackVisible: false
    };
    let str = "card";
    if (obj2.isAndroid()) {
      str = "transparentModal";
    }
    obj.presentation = str;
    const merged = Object.assign(accessibilityNativeStackOptions);
    return obj;
  };
  cResult[4] = accessibilityNativeStackOptions;
  cResult[5] = tmp4.header;
  cResult[6] = fn2;
  const tmpResult2 = require("useNavigatorBackPressHandler");
}) : ((arg0) => {
  ({ initialRouteName, initialOnboardingStepIndex } = arg0);
  noop = undefined;
  _require = closure_8();
  noop.useRef({ onboardingStepIndex: initialOnboardingStepIndex, lastShownStepIndex: initialOnboardingStepIndex });
  dependencyMap = noop.useRef(null);
  noop = require("Navigator").useAccessibilityNativeStackOptions();
  const onComplete = noop.useCallback((flag) => {
    ({ lastShownStepIndex, onboardingStepIndex } = ref.current);
    if (flag == null) {
      flag = false;
    }
    const nextOnboardingStep = NewUserUtils.getNextOnboardingStep(flag, lastShownStepIndex, onboardingStepIndex);
    nextOnboardingStep.then((lastShownStepIndex) => {
      const onboardingStepIndex = lastShownStepIndex.onboardingStepIndex;
      closure_1_1.current = { onboardingStepIndex, lastShownStepIndex: lastShownStepIndex.lastShownStepIndex };
      if (lastShownStepIndex.continueNavigation) {
        if (null != ref.current) {
          closure_0(ref[12]).continueToNextStep(onboardingStepIndex, tmp.current);
          const obj2 = closure_0(ref[12]);
        }
      }
      closure_1(ref[13]).popWithKey(closure_0(ref[14]).NEW_USER_MODAL_KEY);
      const obj = closure_1(ref[13]);
    });
  }, []);
  let obj = require("Navigator");
  require("useNavigatorBackPressHandler").useNavigatorBackPressHandler(() => {
    const MinimizeApp = callback.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  });
  const obj3 = {
    screenOptions(navigation) {
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
        presentation: null,
        animation: "slide_from_right",
        headerBackVisible: false
      };
      let str = "card";
      if (obj2.isAndroid()) {
        str = "transparentModal";
      }
      obj.presentation = str;
      const merged = Object.assign(closure_3);
      return obj;
    },
    initialRouteName: null,
    children: null
  };
  if (initialRouteName == null) {
    initialRouteName = "choose-avatar";
  }
  obj3.initialRouteName = initialRouteName;
  const items = [
    closure_5(closure_7.Screen, {
      name: "enable-notification",
      getComponent() {
        return closure_0(15921).RedesignNotificationScreen;
      },
      initialParams: { onComplete }
    }),
    closure_5(closure_7.Screen, {
      name: "choose-avatar",
      getComponent() {
        return closure_0(17589).default;
      },
      options() {
        return {
          headerRight(arg0) {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.onPress = function onPress() {
              closure_0 = closure_1_4;
              const lazyResult = React.lazy(() => closure_0(paths[7])(paths[6], paths.paths));
              closure_2_0(5709).openAlert("skip-avatar-upload", closure_2_5(lazyResult, {
                onConfirm() {
                  return closure_0(true);
                }
              }));
            };
            return closure_2_5(closure_1(12345), obj);
          }
        };
      },
      initialParams: { onComplete }
    }),
    closure_5(closure_7.Screen, {
      name: "contact-sync",
      options: { headerShown: false },
      getComponent() {
        return closure_0(12334).ContactSyncOnboardingModal;
      },
      initialParams: { onComplete }
    }),
    closure_5(closure_7.Screen, {
      name: "discoverability",
      options: { headerShown: false },
      getComponent() {
        return closure_0(17590).default;
      },
      initialParams: { onComplete }
    }),
    closure_5(closure_7.Screen, {
      name: "connect-guardian",
      getComponent() {
        return closure_0(17592).default;
      },
      initialParams: { onComplete }
    })
  ];
  obj3.children = items;
  return closure_6(closure_7.Navigator, obj3);
});