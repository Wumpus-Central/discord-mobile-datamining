// discord_app/modules/nuf/native/components/NewUserModal.tsx
import _slicedToArray from "_slicedToArray";
import headerTitle from "headerTitle";
import { NativeModules } from "RedesignAddAvatarModal";
import jsxProd from "ConnectGuardianModal";
import createNativeStackNavigator from "createNativeStackNavigator";
import createCacheKey from "createCacheKey";
import { NavigationStack } from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import { useNavigatorBackPressHandler } from "../../../../design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
createNativeStackNavigator = { header: null };
createNativeStackNavigator = { borderBottomWidth: 0, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
createNativeStackNavigator[0] = createNativeStackNavigator;
createNativeStackNavigator = createCacheKey.createStyles(createNativeStackNavigator);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/nuf/native/components/NewUserModal.tsx");

export default function NewUserModal(arg0) {
  let initialOnboardingStepIndex;
  let initialRouteName;
  ({ initialRouteName, initialOnboardingStepIndex } = arg0);
  let _require;
  let first;
  let dependencyMap;
  let first1;
  let React;
  let closure_5;
  let callback;
  callback = undefined;
  _require = createNativeStackNavigator();
  const tmp = first1(React.useState(initialOnboardingStepIndex), 2);
  first = tmp[0];
  dependencyMap = tmp[1];
  const tmp3 = first1(React.useState(initialOnboardingStepIndex), 2);
  first1 = tmp3[0];
  React = tmp3[1];
  closure_5 = React.useRef(null);
  let obj = _NavigationStack;
  callback = obj.useAccessibilityNativeStackOptions();
  const items = [first1, first];
  callback = React.useCallback((flag) => {
    if (flag == null) {
      flag = false;
    }
    const nextOnboardingStep = lib(16438).getNextOnboardingStep(flag, first1, first);
    nextOnboardingStep.then((onboardingStepIndex) => {
      let continueNavigation;
      let lastShownStepIndex;
      onboardingStepIndex = onboardingStepIndex.onboardingStepIndex;
      ({ lastShownStepIndex, continueNavigation } = onboardingStepIndex);
      callback(onboardingStepIndex);
      callback2(lastShownStepIndex);
      if (continueNavigation) {
        if (null != ref.current) {
          outer1_0(outer1_2[11]).continueToNextStep(onboardingStepIndex, tmp3.current);
          const obj2 = outer1_0(outer1_2[11]);
        }
      }
      outer1_1(outer1_2[12]).popWithKey(outer1_0(outer1_2[13]).NEW_USER_MODAL_KEY);
    });
  }, items);
  let obj1 = _useNavigatorBackPressHandler;
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
      return lib(15064).RedesignNotificationScreen;
    },
    initialParams: { onComplete: callback }
  };
  const items1 = [callback(createNativeStackNavigator.Screen, obj), , , , ];
  obj1 = {
    name: "choose-avatar",
    getComponent() {
      return lib(16442).default;
    },
    options() {
      return {
        headerRight(arg0) {
          let obj = {};
          const merged = Object.assign(arg0);
          obj.onPress = function onPress() {
            let closure_0 = closure_7;
            let obj = outer1_0(outer1_2[9]);
            obj = {
              onConfirm() {
                return callback(true);
              }
            };
            obj.openAlert("skip-avatar-upload", outer1_6(outer1_4.lazy(() => callback(paths[8])(paths[7], paths.paths)), obj));
          };
          return outer1_6(outer1_1(outer1_2[18]), obj);
        }
      };
    },
    initialParams: { onComplete: callback }
  };
  items1[1] = callback(createNativeStackNavigator.Screen, obj1);
  items1[2] = callback(createNativeStackNavigator.Screen, {
    name: "contact-sync",
    options: { headerShown: false },
    getComponent() {
      return lib(11973).ContactSyncOnboardingModal;
    },
    initialParams: { onComplete: callback }
  });
  items1[3] = callback(createNativeStackNavigator.Screen, {
    name: "discoverability",
    options: { headerShown: false },
    getComponent() {
      return lib(16443).default;
    },
    initialParams: { onComplete: callback }
  });
  items1[4] = callback(createNativeStackNavigator.Screen, {
    name: "connect-guardian",
    getComponent() {
      return lib(16445).default;
    },
    initialParams: { onComplete: callback }
  });
  obj[2] = items1;
  return callback(createNativeStackNavigator.Navigator, obj);
};