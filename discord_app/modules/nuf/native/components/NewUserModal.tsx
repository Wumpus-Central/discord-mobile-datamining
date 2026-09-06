// === Module 17449: NewUserModal ===

// Module 17449 (NewUserModal)
import nativeDefault from "native" /* 576 */;
import NewUserUtils from "NewUserUtils" /* 17447 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const NativeModules = fn(17).NativeModules;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let NativeStackNavigator = fn(7913);
const Navigator = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(4560);
NativeStackNavigator = { header: null };
NativeStackNavigator = { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
NativeStackNavigator.header = NativeStackNavigator;
let closure_9 = createStyles.createStyles(NativeStackNavigator);
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
  let obj = require("Navigator");
  closure_6 = obj.useAccessibilityNativeStackOptions();
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
          closure_0(17447).continueToNextStep(onboardingStepIndex, tmp3.current);
          const obj2 = closure_0(17447);
        }
      }
      first(4763).popWithKey(closure_0(17448).NEW_USER_MODAL_KEY);
      const obj = first(4763);
    });
  }, items);
  let obj1 = require("useNavigatorBackPressHandler");
  obj1.useNavigatorBackPressHandler(() => {
    MinimizeApp = MinimizeApp.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  });
  obj = {
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
        headerBackVisible: false
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
    children: null
  };
  if (initialRouteName == null) {
    initialRouteName = "choose-avatar";
  }
  obj.initialRouteName = initialRouteName;
  obj = {
    name: "enable-notification",
    getComponent() {
      return closure_0(15999).RedesignNotificationScreen;
    },
    initialParams: { onComplete }
  };
  const items1 = [closure_6(Navigator.Screen, obj), , , , ];
  obj1 = {
    name: "choose-avatar",
    getComponent() {
      return closure_0(17451).default;
    },
    options() {
      return {
        headerRight(arg0) {
          let obj = {};
          const merged = Object.assign(arg0);
          obj.onPress = function onPress() {
            closure_0 = closure_1_7;
            closure_2_0(4906);
            const obj = {
              onConfirm() {
                return closure_0(true);
              }
            };
            obj.openAlert("skip-avatar-upload", closure_2_6(React.lazy(() => closure_0(paths[8])(paths[7], paths.paths)), obj));
          };
          return closure_6(first(12696), obj);
        }
      };
    },
    initialParams: { onComplete }
  };
  items1[1] = closure_6(Navigator.Screen, obj1);
  items1[2] = closure_6(Navigator.Screen, {
    name: "contact-sync",
    options: { headerShown: false },
    getComponent() {
      return closure_0(12685).ContactSyncOnboardingModal;
    },
    initialParams: { onComplete }
  });
  items1[3] = closure_6(Navigator.Screen, {
    name: "discoverability",
    options: { headerShown: false },
    getComponent() {
      return closure_0(17452).default;
    },
    initialParams: { onComplete }
  });
  items1[4] = closure_6(Navigator.Screen, {
    name: "connect-guardian",
    getComponent() {
      return closure_0(17454).default;
    },
    initialParams: { onComplete }
  });
  obj.children = items1;
  return onComplete(Navigator.Navigator, obj);
};