// discord_app/modules/auth/native/components/Auth.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import utils_PlatformUtils from "../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import KeyboardChatScrollView from "../../../../../_runtime/01625_KeyboardChatScrollView.js";
import useWideAuthViewDefault from "../useWideAuthView.tsx";
import WideAuthScrollContext from "WideAuthScrollContext.tsx";
import BackgroundImageDefault from "atoms/BackgroundImage.tsx";
import Navigator from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import StackNavigator from "../../../../../_runtime/07002_StackNavigator.js";
import RegistrationHandoff from "../RegistrationHandoff.tsx";
import RegistrationUtils from "../RegistrationUtils.tsx";
import useIsHCaptchaModalOpenTracking from "utils/useIsHCaptchaModalOpenTracking.tsx";
import _mod15996 from "../../../../../_runtime/metro/15996__.js";
import AuthManagerDefault from "../AuthManager.tsx";
import useOrientationLockDefault from "../useOrientationLock.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import MultiAccountStore from "../../../multi_account/MultiAccountStore.tsx";

require = fn;
function getInitialAuthRouteStack() {
  obj = RegistrationHandoff;
  if (!obj.hasRegistrationHandoff()) {
    obj = { name: AuthStates.WELCOME };
    const items = [obj];
    let items1 = items;
  } else {
    obj = { name: AuthStates.WELCOME };
    items1 = [obj];
    const obj1 = { name: AuthStates.LOGIN };
    items1[1] = obj1;
  }
  return items1;
}
function NavigatorWithCaptchaHook() {
  obj = useIsHCaptchaModalOpenTracking;
  const isHCaptchaModalOpenTracking = obj.useIsHCaptchaModalOpenTracking();
  const tmp6 = closure_16();
  const first = _slicedToArray(noop.useState(getInitialAuthRouteStack), 1)[0];
  const tmp5 = useWideAuthViewDefault();
  [tmp8, require] = _slicedToArray(noop.useState(first[first.length - 1].name), 2);
  const effect = noop.useEffect(() => {
    const result = RegistrationHandoff.clearRegistrationHandoff();
  }, []);
  const tmp10 = _slicedToArray(noop.useState(false), 2);
  importDefault = tmp11;
  let obj1 = KeyboardChatScrollView;
  const keyboardState = obj1.useKeyboardState((height) => height.height);
  const callback = noop.useCallback((arg0) => {
    let name;
    if (arg0 != null) {
      if (arg0.routes[arg0.index] != null) {
        name = tmp3.name;
      }
    }
    if (name == null) {
      name = null;
    }
    require(name);
    closure_1(false);
  }, []);
  obj = { backgroundImageSource: null, backgroundImageCover: true };
  const tmp7 = _slicedToArray(noop.useState(first[first.length - 1].name), 2);
  obj.backgroundImageSource = _mod15996;
  const children = [closure_9(BackgroundImageDefault, obj)];
  if (tmp5) {
    obj = { value: tmp11, children: null };
    const items1 = [tmp6.wideOuterContainer];
    let tmp24 = null;
    if (tmp13) {
      obj1 = { paddingBottom: keyboardState };
      tmp24 = obj1;
    }
    const obj2 = { style: null, children: null };
    items1[1] = tmp24;
    obj2.style = items1;
    const items2 = [tmp6.wideCard, ,];
    let tmp25 = null;
    if (null != tmp8) {
      let num = obj[tmp8];
      if (num == null) {
        num = 520;
      }
      const obj3 = { height: num };
      tmp25 = obj3;
    }
    items2[1] = tmp25;
    let obj4 = null;
    if (tmp13) {
      obj4 = {
        maxHeight: "100%",
        height: "100%",
        marginTop: 32,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      };
    }
    const obj5 = { style: null, children: null };
    items2[2] = obj4;
    obj5.style = items2;
    const obj6 = {
      screens,
      containerStyle: tmp6.cardContainer,
      viewStyle: null,
      headerStatusBarHeight: 0,
      cardOverlayEnabled: false,
      cardShadowEnabled: false,
      initialRouteStack: null,
      onWillFocus: null,
      onStateChange: null,
      headerStyle: null,
      headerLeftContainerStyle: null,
      disableHeaderAnimation: true,
    };
    let transparent = null;
    if (tmp8 === AuthStates.WELCOME) {
      transparent = tmp6.transparent;
    }
    obj6.viewStyle = transparent;
    obj6.initialRouteStack = first;
    obj6.onWillFocus = closure_5.dismiss;
    obj6.onStateChange = callback;
    obj6.headerStyle = tmp10[0] ? tmp6.wideHeader : tmp6.wideHeaderFlat;
    let num2 = 20;
    if (tmpResult.isAndroid()) {
      num2 = tmp4(576).space.PX_12;
    }
    const obj7 = { paddingLeft: num2, paddingTop: tmp4(576).space.PX_24, paddingBottom: tmp4(576).space.PX_16 };
    obj6.headerLeftContainerStyle = obj7;
    obj5.children = closure_9(Navigator.Navigator, obj6);
    obj2.children = closure_9(closure_6, obj5);
    obj.children = closure_9(closure_6, obj2);
    let tmp17Result = closure_9(WideAuthScrollContext.WideAuthScrollContext.Provider, obj);
    tmpResult = utils_PlatformUtils;
  } else {
    const obj8 = {
      screens: RegistrationStepsUtils,
      viewStyle: null,
      containerStyle: null,
      headerBackTitle: null,
      initialRouteStack: null,
      onWillFocus: null,
      headerStyle: null,
    };
    ({ transparent: obj4.viewStyle, transparent: obj4.containerStyle } = tmp6);
    const intl = util.intl;
    obj8.headerBackTitle = intl.string(util.t["13/7kX"]);
    obj8.initialRouteStack = first;
    obj8.onWillFocus = closure_5.dismiss;
    obj8.headerStyle = { borderBottomWidth: 0 };
    tmp17Result = closure_9(Navigator.Navigator, obj8);
  }
  children[1] = tmp17Result;
  return closure_11(closure_10, { children });
}
get_ActivityIndicator = fn(17);
({ Keyboard: hasOwnProperty, View: metroRequire, StyleSheet } = get_ActivityIndicator);
const AuthStates = fn(1074).AuthStates;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
let RegistrationStepsUtils = fn(15945);
RegistrationStepsUtils = RegistrationStepsUtils.getAllAuthScreens();
RegistrationStepsUtils = Object.entries(RegistrationStepsUtils);
const screens = Object.fromEntries(
  RegistrationStepsUtils.map((item) => {
    [tmp, tmp2] = item;
    const items = [tmp];
    obj = {};
    let merged = Object.assign(tmp2);
    obj.headerMode = "screen";
    obj = null;
    if (tmp2.fullscreen) {
      obj = { fullscreen: false, headerTransparent: false };
    }
    let merged1 = Object.assign(obj);
    let tmp6 = null;
    if (tmp !== AuthStates.MFA) {
      tmp6 = null;
      if (tmp !== AuthStates.WELCOME) {
        obj = {
          headerLeft(arg0) {
            function backImage() {
              return closure_1_9(headerLeft(closure_1_2[8]).HeaderBackImage, {});
            }
            obj = headerLeft;
            if (null != headerLeft.headerLeft) {
              obj = {};
              const merged = Object.assign(arg0);
              obj.backImage = backImage;
              let headerLeftResult = obj.headerLeft(obj);
            } else {
              obj = {};
              const merged1 = Object.assign(arg0);
              obj.backImage = backImage;
              headerLeftResult = React7(RegistrationUtils.BackButtonWithTracking, obj);
            }
            return headerLeftResult;
          },
        };
        tmp6 = obj;
      }
    }
    const merged2 = Object.assign(tmp6);
    const items1 = [, ,];
    ({ REGISTER_IDENTITY: arr2[0], LOGIN: arr2[1], AGE_GATE_UNDERAGE: arr2[2] } = AuthStates);
    let tmp8 = null;
    if (set.has(tmp)) {
      const obj1 = { cardStyleInterpolator: StackNavigator.CardStyleInterpolators.forFadeFromCenter };
      tmp8 = obj1;
    }
    const merged3 = Object.assign(tmp8);
    items[1] = obj;
    return items;
  }),
);
let num = 540;
if (fn(6951).hasWebAuthn) {
  num = 600;
}
let obj = {};
obj[AuthStates.LOGIN] = num;
obj[AuthStates.MFA] = 600;
const createStyles = fn(4560);
obj = {
  transparent: { backgroundColor: "transparent" },
  cardContainer: { flex: 1, position: "relative", backgroundColor: "transparent" },
  wideOuterContainer: { flex: 1, justifyContent: "center" },
  wideCard: null,
  wideHeaderFlat: null,
  wideHeader: null,
};
let size = {
  backgroundColor: "transparent",
  borderRadius: nativeDefault.radii.lg,
  maxWidth: 600,
  alignSelf: "center",
  width: "100%",
  maxHeight: "90%",
  overflow: "hidden",
  height: 520,
};
obj.wideCard = size;
RegistrationStepsUtils = { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.wideHeaderFlat = RegistrationStepsUtils;
obj.wideHeader = {
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
let closure_16 = createStyles.createStyles(obj);
const context = noop.createContext(() => {});
let obj2 = {
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
size = fn(2);
let result = size.fileFinishedImporting("modules/auth/native/components/Auth.tsx");

export default noop.memo(function Auth() {
  const effect = noop.useEffect(() => {
    AuthManagerDefault.initialize();
    return () => closure_1_1(dependencyMap[23]).terminate();
  }, []);
  const layoutEffect = noop.useLayoutEffect(() => closure_0(7475).trackAppUIViewed(), []);
  useOrientationLockDefault();
  closure_0 = noop.useRef(undefined);
  return closure_9(context.Provider, {
    value: noop.useCallback(() => RegistrationUtils.getTrackRegTransition(closure_0), [])(),
    children: closure_9(NavigatorWithCaptchaHook, {}),
  });
});
export const TrackRegistrationContext = context;
