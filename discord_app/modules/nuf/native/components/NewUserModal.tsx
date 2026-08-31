// === Module 16991: NewUserModal ===

// Module 16991 (NewUserModal)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { NativeModules } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createNativeStackNavigator from "createNativeStackNavigator" /* 7790 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createNativeStackNavigator.createNativeStackNavigator();
createNativeStackNavigator = { header: null };
createNativeStackNavigator = { borderBottomWidth: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
createNativeStackNavigator[0] = createNativeStackNavigator;
let closure_9 = createCacheKey.createStyles(createNativeStackNavigator);
const result = require("set").fileFinishedImporting("modules/nuf/native/components/NewUserModal.tsx");

export default function NewUserModal(arg0) {
  ({ initialRouteName, initialOnboardingStepIndex } = arg0);
  let _require;
  let first;
  dependencyMap = undefined;
  let first1;
  let React;
  closure_5 = undefined;
  let callback;
  callback = undefined;
  _require = callback2();
  const tmp = first1(React.useState(initialOnboardingStepIndex), 2);
  first = tmp[0];
  dependencyMap = tmp[1];
  const tmp3 = first1(React.useState(initialOnboardingStepIndex), 2);
  first1 = tmp3[0];
  React = tmp3[1];
  closure_5 = React.useRef(null);
  let obj = _require(5976);
  callback = obj.useAccessibilityNativeStackOptions();
  const items = [first1, first];
  callback = React.useCallback((flag) => {
    if (flag == null) {
      flag = false;
    }
    const nextOnboardingStep = lib(16989).getNextOnboardingStep(flag, first1, first);
    nextOnboardingStep.then((onboardingStepIndex) => {
      onboardingStepIndex = onboardingStepIndex.onboardingStepIndex;
      ({ lastShownStepIndex, continueNavigation } = onboardingStepIndex);
      callback(onboardingStepIndex);
      callback2(lastShownStepIndex);
      if (continueNavigation) {
        if (null != ref.current) {
          closure_1_0(closure_1_2[11]).continueToNextStep(onboardingStepIndex, tmp3.current);
          const obj2 = closure_1_0(closure_1_2[11]);
        }
      }
      closure_1_1(closure_1_2[12]).popWithKey(closure_1_0(closure_1_2[13]).NEW_USER_MODAL_KEY);
    });
  }, items);
  obj1 = _require(5469);
  obj1.useNavigatorBackPressHandler(() => {
    MinimizeApp = MinimizeApp.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  });
  obj = {
    screenOptions(navigation) {
      closure_5.current = navigation.navigation;
      const obj = {
        headerStyle: lib.header,
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
      obj[6] = str;
      const merged = Object.assign(closure_6);
      return obj;
    },
    initialRouteName: null,
    children: null
  };
  if (initialRouteName == null) {
    initialRouteName = "choose-avatar";
  }
  obj[1] = initialRouteName;
  obj = {
    name: "enable-notification",
    getComponent() {
      return lib(15555).RedesignNotificationScreen;
    },
    initialParams: { onComplete: callback }
  };
  const items1 = [callback(Navigator.Screen, obj), , , , ];
  obj1 = {
    name: "choose-avatar",
    getComponent() {
      return lib(16993).default;
    },
    options() {
      return {
        headerRight(arg0) {
          let obj = {};
          const merged = Object.assign(arg0);
          obj.onPress = function onPress() {
            closure_0 = closure_7;
            let obj = closure_1_0(closure_1_2[9]);
            obj = {
              onConfirm() {
                return callback(true);
              }
            };
            obj.openAlert("skip-avatar-upload", closure_1_6(closure_1_4.lazy(() => callback(paths[8])(paths[7], paths.paths)), obj));
          };
          return closure_1_6(closure_1_1(closure_1_2[18]), obj);
        }
      };
    },
    initialParams: { onComplete: callback }
  };
  items1[1] = callback(Navigator.Screen, obj1);
  items1[2] = callback(Navigator.Screen, {
    name: "contact-sync",
    options: { headerShown: false },
    getComponent() {
      return lib(12190).ContactSyncOnboardingModal;
    },
    initialParams: { onComplete: callback }
  });
  items1[3] = callback(Navigator.Screen, {
    name: "discoverability",
    options: { headerShown: false },
    getComponent() {
      return lib(16994).default;
    },
    initialParams: { onComplete: callback }
  });
  items1[4] = callback(Navigator.Screen, {
    name: "connect-guardian",
    getComponent() {
      return lib(16996).default;
    },
    initialParams: { onComplete: callback }
  });
  obj[2] = items1;
  return callback(Navigator.Navigator, obj);
};