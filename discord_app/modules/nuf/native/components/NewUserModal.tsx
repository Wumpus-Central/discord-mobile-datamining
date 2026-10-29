// === Module 19438: NewUserModal ===

// Module 19438 (NewUserModal)
import nativeDefault from "native" /* 587 */;
import NewUserUtils from "NewUserUtils" /* 19436 */;
import InterestPickerPicksContextDefault from "InterestPickerPicksContext" /* 19442 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const NativeModules = fn(17).NativeModules;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const NativeStackNavigator = fn(9809);
let closure_7 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(5005);
let obj3 = { header: { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" } };
let closure_8 = createStyles.createStyles(obj3);
const ReactCompilerGating = fn(558);
let obj4 = { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/components/NewUserModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function NewUserModal(arg0) {
  const cResult = require("c").c(16);
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
  importDefault = accessibilityNativeStackOptions.useRef(tmp5);
  dependencyMap = accessibilityNativeStackOptions.useRef(null);
  let obj = require("c");
  accessibilityNativeStackOptions = require("Navigator").useAccessibilityNativeStackOptions();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function v(flag) {
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
  let MinimizeApp = tmp7;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function x() {
      MinimizeApp = MinimizeApp.MinimizeApp;
      MinimizeApp.minimizeApp();
      return true;
    };
    cResult[3] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
  }
  const tmpResult = require("Navigator");
  require("useNavigatorBackPressHandler").useNavigatorBackPressHandler(tmp8);
  if (cResult[4] === accessibilityNativeStackOptions) {
    if (cResult[5] === tmp4.header) {
      let tmp10 = cResult[6];
    }
    if (initialRouteName == null) {
      initialRouteName = "choose-avatar";
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = {
        name: "enable-notification",
        getComponent() {
              return closure_0(17929).RedesignNotificationScreen;
            },
        initialParams: null
      };
      const obj4 = { onComplete: tmp7 };
      obj3.initialParams = obj4;
      const tmp14 = closure_5(closure_7.Screen, obj3);
      cResult[7] = tmp14;
      let tmp11 = tmp14;
    } else {
      tmp11 = cResult[7];
    }
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = {
        name: "choose-avatar",
        getComponent() {
              return closure_0(19440).default;
            },
        options() {
              return {
                headerRight(arg0) {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj.onPress = function onPress() {
                    closure_0 = closure_1_4;
                    const lazyResult = React.lazy(() => closure_0(paths[7])(paths[6], paths.paths));
                    closure_2_0(5948).openAlert("skip-avatar-upload", closure_2_5(lazyResult, {
                      onConfirm() {
                        return closure_0(true);
                      }
                    }));
                  };
                  return closure_2_5(closure_1(14067), obj);
                }
              };
            },
        initialParams: null
      };
      const obj6 = { onComplete: tmp7 };
      obj5.initialParams = obj6;
      const tmp18 = closure_5(closure_7.Screen, obj5);
      cResult[8] = tmp18;
      let tmp15 = tmp18;
    } else {
      tmp15 = cResult[8];
    }
    const _Symbol3 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const obj7 = {
        name: "contact-sync",
        options: { headerShown: false },
        getComponent() {
              return closure_0(14055).ContactSyncOnboardingModal;
            },
        initialParams: null
      };
      const obj8 = { onComplete: tmp7 };
      obj7.initialParams = obj8;
      const tmp22 = closure_5(closure_7.Screen, obj7);
      cResult[9] = tmp22;
      let tmp19 = tmp22;
    } else {
      tmp19 = cResult[9];
    }
    const _Symbol4 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj9 = {
        name: "interest-picker",
        options: { headerShown: false },
        getComponent() {
              return closure_0(19441).default;
            },
        initialParams: null
      };
      const obj10 = { onComplete: tmp7 };
      obj9.initialParams = obj10;
      const tmp26 = closure_5(closure_7.Screen, obj9);
      cResult[10] = tmp26;
      let tmp23 = tmp26;
    } else {
      tmp23 = cResult[10];
    }
    const _Symbol5 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const obj11 = {
        name: "discoverability",
        options: { headerShown: false },
        getComponent() {
              return closure_0(19448).default;
            },
        initialParams: null
      };
      const obj12 = { onComplete: tmp7 };
      obj11.initialParams = obj12;
      const tmp30 = closure_5(closure_7.Screen, obj11);
      cResult[11] = tmp30;
      let tmp27 = tmp30;
    } else {
      tmp27 = cResult[11];
    }
    const _Symbol6 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const obj13 = {
        name: "connect-guardian",
        getComponent() {
              return closure_0(19454).default;
            },
        initialParams: null
      };
      const obj14 = { onComplete: tmp7 };
      obj13.initialParams = obj14;
      const tmp34 = closure_5(closure_7.Screen, obj13);
      cResult[12] = tmp34;
      let tmp31 = tmp34;
    } else {
      tmp31 = cResult[12];
    }
    if (cResult[13] === tmp10) {
      if (cResult[14] === initialRouteName) {
        let tmp35 = cResult[15];
      }
      return tmp35;
    }
    const obj15 = { children: null };
    const obj16 = { screenOptions: tmp10, initialRouteName, children: null };
    const items = [tmp11, tmp15, tmp19, tmp23, tmp27, tmp31];
    obj16.children = items;
    obj15.children = closure_6(closure_7.Navigator, obj16);
    const tmp41 = closure_5(InterestPickerPicksContextDefault, obj15);
    cResult[13] = tmp10;
    cResult[14] = initialRouteName;
    cResult[15] = tmp41;
    tmp35 = tmp41;
  }
  const fn3 = function y(navigation) {
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
  cResult[6] = fn3;
  tmp10 = fn3;
  const tmpResult2 = require("useNavigatorBackPressHandler");
}) : (function NewUserModal(arg0) {
  ({ initialRouteName, initialOnboardingStepIndex } = arg0);
  noop = undefined;
  _require = closure_8();
  importDefault = noop.useRef({ onboardingStepIndex: initialOnboardingStepIndex, lastShownStepIndex: initialOnboardingStepIndex });
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
  let obj2 = require("useNavigatorBackPressHandler");
  if (initialRouteName == null) {
    initialRouteName = "choose-avatar";
  }
  const obj4 = { children: null };
  obj3.initialRouteName = initialRouteName;
  const items = [
    closure_5(closure_7.Screen, {
      name: "enable-notification",
      getComponent() {
        return closure_0(17929).RedesignNotificationScreen;
      },
      initialParams: { onComplete }
    }),
    closure_5(closure_7.Screen, {
      name: "choose-avatar",
      getComponent() {
        return closure_0(19440).default;
      },
      options() {
        return {
          headerRight(arg0) {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.onPress = function onPress() {
              closure_0 = closure_1_4;
              const lazyResult = React.lazy(() => closure_0(paths[7])(paths[6], paths.paths));
              closure_2_0(5948).openAlert("skip-avatar-upload", closure_2_5(lazyResult, {
                onConfirm() {
                  return closure_0(true);
                }
              }));
            };
            return closure_2_5(closure_1(14067), obj);
          }
        };
      },
      initialParams: { onComplete }
    }),
    closure_5(closure_7.Screen, {
      name: "contact-sync",
      options: { headerShown: false },
      getComponent() {
        return closure_0(14055).ContactSyncOnboardingModal;
      },
      initialParams: { onComplete }
    }),
    closure_5(closure_7.Screen, {
      name: "interest-picker",
      options: { headerShown: false },
      getComponent() {
        return closure_0(19441).default;
      },
      initialParams: { onComplete }
    }),
    closure_5(closure_7.Screen, {
      name: "discoverability",
      options: { headerShown: false },
      getComponent() {
        return closure_0(19448).default;
      },
      initialParams: { onComplete }
    }),
    closure_5(closure_7.Screen, {
      name: "connect-guardian",
      getComponent() {
        return closure_0(19454).default;
      },
      initialParams: { onComplete }
    })
  ];
  obj3.children = items;
  obj4.children = closure_6(closure_7.Navigator, obj3);
  return closure_5(InterestPickerPicksContextDefault, obj4);
});