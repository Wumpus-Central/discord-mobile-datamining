// discord_app/modules/nuf/native/components/NewUserModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import NewUserUtils from "../NewUserUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const NativeModules = fn(17).NativeModules;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const NativeStackNavigator = fn(8017);
const Navigator = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(4636);
let obj3 = {
  header: {
    borderBottomWidth: 0,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    shadowColor: "transparent",
  },
};
let closure_9 = createStyles.createStyles(obj3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/components/NewUserModal.tsx");

export default function NewUserModal(arg0) {
  ({ initialRouteName, initialOnboardingStepIndex } = arg0);
  let first1;
  noop = undefined;
  _require = closure_9();
  const tmp = first1(noop.useState(initialOnboardingStepIndex), 2);
  const first = tmp[0];
  dependencyMap = tmp[1];
  const tmp3 = first1(noop.useState(initialOnboardingStepIndex), 2);
  first1 = tmp3[0];
  noop = tmp3[1];
  let MinimizeApp = noop.useRef(null);
  closure_6 = require("Navigator").useAccessibilityNativeStackOptions();
  const items = [first1, first];
  const onComplete = noop.useCallback((flag) => {
    if (flag == null) {
      flag = false;
    }
    const nextOnboardingStep = NewUserUtils.getNextOnboardingStep(flag, first1, first);
    nextOnboardingStep.then((onboardingStepIndex) => {
      onboardingStepIndex = onboardingStepIndex.onboardingStepIndex;
      ({ lastShownStepIndex, continueNavigation } = onboardingStepIndex);
      dependencyMap(onboardingStepIndex);
      closure_1_4(lastShownStepIndex);
      if (continueNavigation) {
        if (null != ref.current) {
          closure_0(17562).continueToNextStep(onboardingStepIndex, tmp3.current);
          const obj2 = closure_0(17562);
        }
      }
      first(4839).popWithKey(closure_0(17563).NEW_USER_MODAL_KEY);
      const obj = first(4839);
    });
  }, items);
  let obj = require("Navigator");
  require("useNavigatorBackPressHandler").useNavigatorBackPressHandler(() => {
    MinimizeApp = MinimizeApp.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  });
  const obj3 = {
    screenOptions(navigation) {
      closure_5.current = navigation.navigation;
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
      const merged = Object.assign(closure_6);
      return obj;
    },
    initialRouteName: null,
    children: null,
  };
  if (initialRouteName == null) {
    initialRouteName = "choose-avatar";
  }
  obj3.initialRouteName = initialRouteName;
  const items1 = [
    closure_6(Navigator.Screen, {
      name: "enable-notification",
      getComponent() {
        return closure_0(16096).RedesignNotificationScreen;
      },
      initialParams: { onComplete },
    }),
    closure_6(Navigator.Screen, {
      name: "choose-avatar",
      getComponent() {
        return closure_0(17566).default;
      },
      options() {
        return {
          headerRight(arg0) {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.onPress = function onPress() {
              closure_0 = closure_1_7;
              const lazyResult = React.lazy(() => closure_0(paths[8])(paths[7], paths.paths));
              closure_2_0(4982).openAlert(
                "skip-avatar-upload",
                closure_2_6(lazyResult, {
                  onConfirm() {
                    return closure_0(true);
                  },
                }),
              );
            };
            return closure_6(first(12826), obj);
          },
        };
      },
      initialParams: { onComplete },
    }),
    closure_6(Navigator.Screen, {
      name: "contact-sync",
      options: { headerShown: false },
      getComponent() {
        return closure_0(12815).ContactSyncOnboardingModal;
      },
      initialParams: { onComplete },
    }),
    closure_6(Navigator.Screen, {
      name: "discoverability",
      options: { headerShown: false },
      getComponent() {
        return closure_0(17567).default;
      },
      initialParams: { onComplete },
    }),
    closure_6(Navigator.Screen, {
      name: "connect-guardian",
      getComponent() {
        return closure_0(17569).default;
      },
      initialParams: { onComplete },
    }),
  ];
  obj3.children = items1;
  return onComplete(Navigator.Navigator, obj3);
}
