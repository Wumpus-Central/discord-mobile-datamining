// discord_app/modules/auth/native/components/Auth.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import utils_PlatformUtils from "../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import KeyboardChatScrollView from "../../../../../_runtime/01641_KeyboardChatScrollView.js";
import BackgroundImageDefault from "atoms/BackgroundImage.tsx";
import useWideAuthViewDefault from "../useWideAuthView.tsx";
import WideAuthScrollContext from "WideAuthScrollContext.tsx";
import Navigator from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import StackNavigator from "../../../../../_runtime/07237_StackNavigator.js";
import RegistrationHandoff from "../RegistrationHandoff.tsx";
import useShouldShowChooseAccountDefault from "../../../multi_account/useShouldShowChooseAccount.tsx";
import RegistrationUtils from "../RegistrationUtils.tsx";
import useIsHCaptchaModalOpenTracking from "utils/useIsHCaptchaModalOpenTracking.tsx";
import _mod18405 from "../../../../../_runtime/metro/18405__.js";
import AuthManagerDefault from "../AuthManager.tsx";
import useOrientationLockDefault from "../useOrientationLock.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import MultiAccountStore from "../../../multi_account/MultiAccountStore.tsx";

require = fn;
function getInitialAuthRouteStack() {
  if (!obj.hasRegistrationHandoff()) {
    const obj3 = { name: AuthStates.WELCOME };
    items = [obj3];
    let items1 = items;
  } else {
    const obj4 = { name: AuthStates.WELCOME };
    items1 = [obj4];
    const obj5 = { name: AuthStates.LOGIN };
    items1[1] = obj5;
  }
  return items1;
}
function NavigatorWithCaptchaHook() {
  obj = useIsHCaptchaModalOpenTracking;
  const isHCaptchaModalOpenTracking = obj.useIsHCaptchaModalOpenTracking();
  const tmp5 = useWideAuthViewDefault();
  const tmp6 = closure_16();
  const first = _slicedToArray(noop.useState(getInitialAuthRouteStack), 1)[0];
  const tmp7 = useShouldShowChooseAccountDefault();
  [tmp9, require] = noop.useState(first[first.length - 1].name);
  const effect = noop.useEffect(() => {
    const result = RegistrationHandoff.clearRegistrationHandoff();
  }, []);
  const tmp11 = _slicedToArray(noop.useState(false), 2);
  importDefault = tmp12;
  const tmp8 = _slicedToArray(noop.useState(first[first.length - 1].name), 2);
  const keyboardState = KeyboardChatScrollView.useKeyboardState((height) => height.height);
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
  const obj3 = { backgroundImageSource: null, backgroundImageCover: true };
  obj3.backgroundImageSource = _mod18405;
  const children = [closure_9(BackgroundImageDefault, obj3), ,];
  let tmp18Result = null;
  if (tmp5) {
    tmp18Result = null;
    if (tmp9 === AuthStates.WELCOME) {
      tmp18Result = null;
      if (tmp7) {
        tmp18Result = closure_9(tmp4(7011), {});
      }
    }
  }
  children[1] = tmp18Result;
  if (tmp5) {
    const obj5 = { value: tmp12, children: null };
    const items1 = [tmp6.wideOuterContainer];
    let tmp26 = null;
    if (tmp14) {
      const obj6 = { paddingBottom: keyboardState };
      tmp26 = obj6;
    }
    const obj7 = { style: null, children: null };
    items1[1] = tmp26;
    obj7.style = items1;
    const items2 = [tmp6.wideCard, ,];
    let tmp27 = null;
    if (null != tmp9) {
      let num = obj[tmp9];
      if (num == null) {
        num = 520;
      }
      const obj8 = { height: num };
      tmp27 = obj8;
    }
    items2[1] = tmp27;
    let obj9 = null;
    if (tmp14) {
      obj9 = {
        maxHeight: "100%",
        height: "100%",
        marginTop: 32,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      };
    }
    const obj10 = { style: null, children: null };
    items2[2] = obj9;
    obj10.style = items2;
    const obj11 = {
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
    if (tmp9 === AuthStates.WELCOME) {
      transparent = tmp6.transparent;
    }
    obj11.viewStyle = transparent;
    obj11.initialRouteStack = first;
    obj11.onWillFocus = closure_5.dismiss;
    obj11.onStateChange = callback;
    obj11.headerStyle = tmp11[0] ? tmp6.wideHeader : tmp6.wideHeaderFlat;
    let num2 = 20;
    if (tmpResult.isAndroid()) {
      num2 = tmp4(575).space.PX_12;
    }
    const obj12 = { paddingLeft: num2, paddingTop: tmp4(575).space.PX_24, paddingBottom: tmp4(575).space.PX_16 };
    obj11.headerLeftContainerStyle = obj12;
    obj10.children = closure_9(Navigator.Navigator, obj11);
    obj7.children = closure_9(closure_6, obj10);
    obj5.children = closure_9(closure_6, obj7);
    let tmp18Result2 = closure_9(WideAuthScrollContext.WideAuthScrollContext.Provider, obj5);
    tmpResult = utils_PlatformUtils;
  } else {
    const obj13 = {
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
    obj13.headerBackTitle = intl.string(util.t["13/7kX"]);
    obj13.initialRouteStack = first;
    obj13.onWillFocus = closure_5.dismiss;
    obj13.headerStyle = { borderBottomWidth: 0 };
    tmp18Result2 = closure_9(Navigator.Navigator, obj13);
  }
  children[2] = tmp18Result2;
  return closure_11(closure_10, { children });
}
get_ActivityIndicator = fn(17);
({ Keyboard: hasOwnProperty, View: closure_6, StyleSheet } = get_ActivityIndicator);
const AuthStates = fn(1072).AuthStates;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = jsxProd);
let RegistrationStepsUtils = fn(18351);
RegistrationStepsUtils = RegistrationStepsUtils.getAllAuthScreens();
RegistrationStepsUtils = Object.entries(RegistrationStepsUtils);
const screens = Object.fromEntries(
  RegistrationStepsUtils.map((item) => {
    [tmp, tmp2] = item;
    items = [tmp];
    obj = {};
    let merged = Object.assign(tmp2);
    obj.headerMode = "screen";
    let obj2 = null;
    if (tmp2.fullscreen) {
      obj2 = { fullscreen: false, headerTransparent: false };
    }
    let merged1 = Object.assign(obj2);
    let tmp6 = null;
    if (tmp !== AuthStates.MFA) {
      tmp6 = null;
      if (tmp !== AuthStates.WELCOME) {
        let obj3 = {
          headerLeft(arg0) {
            function backImage() {
              return closure_1_9(headerLeft(closure_1_2[8]).HeaderBackImage, {});
            }
            if (null != headerLeft.headerLeft) {
              const obj2 = {};
              const merged = Object.assign(arg0);
              obj2.backImage = backImage;
              let headerLeftResult = headerLeft.headerLeft(obj2);
            } else {
              const obj3 = {};
              const merged1 = Object.assign(arg0);
              obj3.backImage = backImage;
              headerLeftResult = React6(RegistrationUtils.BackButtonWithTracking, obj3);
            }
            return headerLeftResult;
          },
        };
        tmp6 = obj3;
      }
    }
    const merged2 = Object.assign(tmp6);
    const items1 = [, ,];
    ({ REGISTER_IDENTITY: arr2[0], LOGIN: arr2[1], AGE_GATE_UNDERAGE: arr2[2] } = AuthStates);
    let tmp8 = null;
    if (set.has(tmp)) {
      const obj4 = { cardStyleInterpolator: StackNavigator.CardStyleInterpolators.forFadeFromCenter };
      tmp8 = obj4;
    }
    const merged3 = Object.assign(tmp8);
    items[1] = obj;
    return items;
  }),
);
let num = 540;
if (fn(7192).hasWebAuthn) {
  num = 600;
}
let obj = {};
obj[AuthStates.LOGIN] = num;
obj[AuthStates.MFA] = 600;
const createStyles = fn(5142);
let obj3 = {
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
obj3.wideCard = size;
obj3.wideHeaderFlat = { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj5 = { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj3.wideHeader = {
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
let closure_16 = createStyles.createStyles(obj3);
const context = noop.createContext(() => {});
let obj6 = {
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
size = fn(2);
let result = size.fileFinishedImporting("modules/auth/native/components/Auth.tsx");

export default noop.memo(function Auth() {
  const effect = noop.useEffect(() => {
    AuthManagerDefault.initialize();
    return () => closure_1_1(dependencyMap[25]).terminate();
  }, []);
  const layoutEffect = noop.useLayoutEffect(() => closure_0(7733).trackAppUIViewed(), []);
  useOrientationLockDefault();
  closure_0 = noop.useRef(undefined);
  return closure_9(context.Provider, {
    value: noop.useMemo(() => RegistrationUtils.getTrackRegTransition(closure_0), []),
    children: closure_9(NavigatorWithCaptchaHook, {}),
  });
});
export const TrackRegistrationContext = context;
