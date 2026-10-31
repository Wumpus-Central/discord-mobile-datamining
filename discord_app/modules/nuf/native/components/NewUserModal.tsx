// discord_app/modules/nuf/native/components/NewUserModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import NewUserUtils from "../NewUserUtils.tsx";
import InterestPickerPicksContextDefault from "../../../waterwheels/interest/InterestPickerPicksContext.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const NativeModules = fn(17).NativeModules;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const NativeStackNavigator = fn(9856);
const Navigator = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(5014);
let obj3 = {
  header: {
    borderBottomWidth: 0,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    shadowColor: "transparent",
  },
};
let closure_8 = createStyles.createStyles(obj3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/components/NewUserModal.tsx");

export default function NewUserModal(arg0) {
  ({ initialRouteName, initialOnboardingStepIndex } = arg0);
  noop = undefined;
  _require = closure_8();
  importDefault = noop.useRef({
    onboardingStepIndex: initialOnboardingStepIndex,
    lastShownStepIndex: initialOnboardingStepIndex,
  });
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
          closure_0(ref[10]).continueToNextStep(onboardingStepIndex, tmp.current);
          const obj2 = closure_0(ref[10]);
        }
      }
      closure_1(ref[11]).popWithKey(closure_0(ref[12]).NEW_USER_MODAL_KEY);
      const obj = closure_1(ref[11]);
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
        headerBackVisible: false,
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
    children: null,
  };
  let obj2 = require("useNavigatorBackPressHandler");
  if (initialRouteName == null) {
    initialRouteName = "choose-avatar";
  }
  const obj4 = { children: null };
  obj3.initialRouteName = initialRouteName;
  const items = [
    closure_5(Navigator.Screen, {
      name: "enable-notification",
      getComponent() {
        return closure_0(18031).RedesignNotificationScreen;
      },
      initialParams: { onComplete },
    }),
    closure_5(Navigator.Screen, {
      name: "choose-avatar",
      getComponent() {
        return closure_0(19561).default;
      },
      options() {
        return {
          headerRight(arg0) {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.onPress = function onPress() {
              closure_0 = closure_1_4;
              const lazyResult = React.lazy(() => closure_0(paths[7])(paths[6], paths.paths));
              closure_2_0(5960).openAlert(
                "skip-avatar-upload",
                closure_2_5(lazyResult, {
                  onConfirm() {
                    return closure_0(true);
                  },
                }),
              );
            };
            return closure_2_5(closure_1(14253), obj);
          },
        };
      },
      initialParams: { onComplete },
    }),
    closure_5(Navigator.Screen, {
      name: "contact-sync",
      options: { headerShown: false },
      getComponent() {
        return closure_0(14241).ContactSyncOnboardingModal;
      },
      initialParams: { onComplete },
    }),
    closure_5(Navigator.Screen, {
      name: "interest-picker",
      options: { headerShown: false },
      getComponent() {
        return closure_0(19562).default;
      },
      initialParams: { onComplete },
    }),
    closure_5(Navigator.Screen, {
      name: "discoverability",
      options: { headerShown: false },
      getComponent() {
        return closure_0(19568).default;
      },
      initialParams: { onComplete },
    }),
    closure_5(Navigator.Screen, {
      name: "connect-guardian",
      getComponent() {
        return closure_0(19574).default;
      },
      initialParams: { onComplete },
    }),
  ];
  obj3.children = items;
  obj4.children = closure_6(Navigator.Navigator, obj3);
  return closure_5(InterestPickerPicksContextDefault, obj4);
}
