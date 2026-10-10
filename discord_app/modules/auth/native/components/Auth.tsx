// discord_app/modules/auth/native/components/Auth.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useWideAuthViewDefault from "../useWideAuthView.tsx";
import BackgroundImageDefault from "atoms/BackgroundImage.tsx";
import StackNavigator from "../../../../../_runtime/06689_StackNavigator.js";
import RegistrationHandoff from "../RegistrationHandoff.tsx";
import RegistrationUtils from "../RegistrationUtils.tsx";
import useIsHCaptchaModalOpenTracking from "utils/useIsHCaptchaModalOpenTracking.tsx";
import AuthManagerDefault from "../AuthManager.tsx";
import useOrientationLockDefault from "../useOrientationLock.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import MultiAccountStore from "../../../multi_account/MultiAccountStore.tsx";

const util = PX_24(1126);
const utils_PlatformUtils = PX_24(1383);
const KeyboardChatScrollView = PX_24(1645);
const WideAuthScrollContext = PX_24(6654);
const Navigator = PX_24(6687);
const _mod16400 = PX_24(16400);
require = fn;
function getInitialAuthRouteStack() {
  if (!obj.hasRegistrationHandoff()) {
    const obj3 = { name: AuthStates.WELCOME };
    const items = [obj3];
    let items1 = items;
  } else {
    const obj4 = { name: AuthStates.WELCOME };
    items1 = [obj4];
    const obj5 = { name: AuthStates.LOGIN };
    items1[1] = obj5;
  }
  return items1;
}
get_ActivityIndicator = fn(17);
({ Keyboard: hasOwnProperty, View: metroRequire, StyleSheet } = get_ActivityIndicator);
const AuthStates = fn(1085).AuthStates;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
let RegistrationStepsUtils = fn(16347);
RegistrationStepsUtils = RegistrationStepsUtils.getAllAuthScreens();
RegistrationStepsUtils = Object.entries(RegistrationStepsUtils);
const screens = Object.fromEntries(
  RegistrationStepsUtils.map((item) => {
    [tmp, tmp2] = item;
    const items = [tmp];
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
              headerLeftResult = options(RegistrationUtils.BackButtonWithTracking, obj3);
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
if (fn(6632).hasWebAuthn) {
  num = 600;
}
let obj = {};
obj[AuthStates.LOGIN] = num;
obj[AuthStates.MFA] = 600;
const createStyles = fn(5092);
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
const ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? function NavigatorWithCaptchaHook() {
      let PX_24 = require;
      let PX_16 = dependencyMap;
      obj = c;
      const cResult = obj.c(18);
      const isHCaptchaModalOpenTracking = useIsHCaptchaModalOpenTracking.useIsHCaptchaModalOpenTracking();
      const tmp4 = useWideAuthViewDefault();
      let wideOuterContainer = closure_16();
      const first = _slicedToArray(noop.useState(getInitialAuthRouteStack), 1)[0];
      [tmp7, require] = noop.useState(first[first.length - 1].name);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function c() {
          const result = RegistrationHandoff.clearRegistrationHandoff();
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp8 = fn;
        tmp9 = items;
      } else {
        [tmp8, tmp9] = cResult;
      }
      const effect = noop.useEffect(tmp8, tmp9);
      const tmp6 = _slicedToArray(noop.useState(first[first.length - 1].name), 2);
      [tmp12, tmp13] = noop.useState(false);
      importDefault = tmp22Result;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function _(height) {
          return height.height;
        };
        cResult[2] = fn2;
        let tmp14 = fn2;
      } else {
        tmp14 = cResult[2];
      }
      const tmp5Result = _slicedToArray(noop.useState(false), 2);
      wideHeaderFlat = KeyboardChatScrollView.useKeyboardState(tmp14);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function x(arg0) {
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
          tmp22Result(false);
        };
        cResult[3] = fn3;
        let obj13 = fn3;
      } else {
        obj13 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { backgroundImageSource: _mod16400, backgroundImageCover: true };
        const tmp19 = closure_9(tmp3(6656), obj4);
        cResult[4] = tmp19;
        let tmp16 = tmp19;
        const tmp3Result = tmp3(6656);
      } else {
        tmp16 = cResult[4];
      }
      if (cResult[5] === wideHeaderFlat > 200) {
        if (cResult[6] === tmp7) {
          if (cResult[7] === first) {
            if (cResult[8] === tmp12) {
              if (cResult[9] === tmp4) {
                if (cResult[10] === wideHeaderFlat) {
                  if (cResult[11] === wideOuterContainer.cardContainer) {
                    if (cResult[12] === wideOuterContainer.transparent) {
                      if (cResult[13] === wideOuterContainer.wideCard) {
                        if (cResult[14] === wideOuterContainer.wideHeader) {
                          if (cResult[15] === wideOuterContainer.wideHeaderFlat) {
                            if (cResult[16] === wideOuterContainer.wideOuterContainer) {
                              return cResult[17];
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      const items1 = [tmp16];
      if (tmp4) {
        const obj5 = { value: tmp22Result, children: null };
        const items2 = [wideOuterContainer.wideOuterContainer];
        let tmp28 = null;
        if (tmp15) {
          const obj6 = { paddingBottom: wideHeaderFlat };
          tmp28 = obj6;
        }
        const obj8 = { style: null, children: null };
        items2[1] = tmp28;
        obj8.style = items2;
        const items3 = [wideOuterContainer.wideCard, ,];
        let tmp29 = null;
        if (null != tmp7) {
          let num4 = obj[tmp7];
          if (num4 == null) {
            num4 = 520;
          }
          const obj9 = { height: num4 };
          tmp29 = obj9;
        }
        items3[1] = tmp29;
        let obj10 = null;
        if (tmp15) {
          obj10 = {
            maxHeight: "100%",
            height: "100%",
            marginTop: 32,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          };
        }
        const obj11 = { style: null, children: null };
        items3[2] = obj10;
        obj11.style = items3;
        const obj12 = {
          screens,
          containerStyle: wideOuterContainer.cardContainer,
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
        if (tmp7 === AuthStates.WELCOME) {
          transparent = wideOuterContainer.transparent;
        }
        obj12.viewStyle = transparent;
        obj12.initialRouteStack = first;
        obj12.onWillFocus = closure_5.dismiss;
        obj12.onStateChange = obj13;
        obj12.headerStyle = tmp12 ? wideOuterContainer.wideHeader : wideOuterContainer.wideHeaderFlat;
        let num5 = 20;
        if (PX_24Result1.isAndroid()) {
          num5 = tmp3(587).space.PX_12;
        }
        obj13 = { paddingLeft: num5, paddingTop: null, paddingBottom: null };
        PX_24 = tmp3(587).space.PX_24;
        obj13.paddingTop = PX_24;
        PX_16 = tmp3(587).space.PX_16;
        obj13.paddingBottom = PX_16;
        obj12.headerLeftContainerStyle = obj13;
        obj11.children = closure_9(Navigator.Navigator, obj12);
        obj8.children = closure_9(closure_6, obj11);
        tmp22Result = closure_9(closure_6, obj8);
        obj5.children = tmp22Result;
        let tmp22Result2 = closure_9(WideAuthScrollContext.WideAuthScrollContext.Provider, obj5);
        PX_24Result1 = utils_PlatformUtils;
      } else {
        const obj14 = {
          screens: RegistrationStepsUtils,
          viewStyle: null,
          containerStyle: null,
          headerBackTitle: null,
          initialRouteStack: null,
          onWillFocus: null,
          headerStyle: null,
        };
        ({ transparent: obj7.viewStyle, transparent: obj7.containerStyle } = wideOuterContainer);
        const intl = util.intl;
        obj14.headerBackTitle = intl.string(util.t["13/7kX"]);
        obj14.initialRouteStack = first;
        obj14.onWillFocus = closure_5.dismiss;
        obj14.headerStyle = { borderBottomWidth: 0 };
        tmp22Result2 = closure_9(Navigator.Navigator, obj14);
      }
      items1[1] = tmp22Result2;
      const PX_24Result = KeyboardChatScrollView;
      cResult[5] = wideHeaderFlat > 200;
      cResult[6] = tmp7;
      cResult[7] = first;
      cResult[8] = tmp12;
      cResult[9] = tmp4;
      cResult[10] = wideHeaderFlat;
      cResult[11] = wideOuterContainer.cardContainer;
      cResult[12] = wideOuterContainer.transparent;
      cResult[13] = wideOuterContainer.wideCard;
      ({ wideHeader: tmp[14], wideHeaderFlat } = wideOuterContainer);
      cResult[15] = wideHeaderFlat;
      wideOuterContainer = wideOuterContainer.wideOuterContainer;
      cResult[16] = wideOuterContainer;
      cResult[17] = closure_11(closure_10, { children: items1 });
      const tmp20Result = closure_11(closure_10, { children: items1 });
    }
  : function NavigatorWithCaptchaHook() {
      obj = useIsHCaptchaModalOpenTracking;
      const isHCaptchaModalOpenTracking = obj.useIsHCaptchaModalOpenTracking();
      const tmp6 = closure_16();
      const first = _slicedToArray(noop.useState(getInitialAuthRouteStack), 1)[0];
      const tmp5 = useWideAuthViewDefault();
      [tmp8, require] = noop.useState(first[first.length - 1].name);
      const effect = noop.useEffect(() => {
        const result = RegistrationHandoff.clearRegistrationHandoff();
      }, []);
      const tmp10 = _slicedToArray(noop.useState(false), 2);
      importDefault = tmp11;
      const tmp7 = _slicedToArray(noop.useState(first[first.length - 1].name), 2);
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
      obj3.backgroundImageSource = _mod16400;
      const children = [closure_9(BackgroundImageDefault, obj3)];
      if (tmp5) {
        const obj5 = { value: tmp11, children: null };
        const items1 = [tmp6.wideOuterContainer];
        let tmp24 = null;
        if (tmp13) {
          const obj6 = { paddingBottom: keyboardState };
          tmp24 = obj6;
        }
        const obj7 = { style: null, children: null };
        items1[1] = tmp24;
        obj7.style = items1;
        const items2 = [tmp6.wideCard, ,];
        let tmp25 = null;
        if (null != tmp8) {
          let num = obj[tmp8];
          if (num == null) {
            num = 520;
          }
          const obj8 = { height: num };
          tmp25 = obj8;
        }
        items2[1] = tmp25;
        let obj9 = null;
        if (tmp13) {
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
        if (tmp8 === AuthStates.WELCOME) {
          transparent = tmp6.transparent;
        }
        obj11.viewStyle = transparent;
        obj11.initialRouteStack = first;
        obj11.onWillFocus = closure_5.dismiss;
        obj11.onStateChange = callback;
        obj11.headerStyle = tmp10[0] ? tmp6.wideHeader : tmp6.wideHeaderFlat;
        let num2 = 20;
        if (tmpResult.isAndroid()) {
          num2 = tmp4(587).space.PX_12;
        }
        const obj12 = { paddingLeft: num2, paddingTop: tmp4(587).space.PX_24, paddingBottom: tmp4(587).space.PX_16 };
        obj11.headerLeftContainerStyle = obj12;
        obj10.children = closure_9(Navigator.Navigator, obj11);
        obj7.children = closure_9(closure_6, obj10);
        obj5.children = closure_9(closure_6, obj7);
        let tmp17Result = closure_9(WideAuthScrollContext.WideAuthScrollContext.Provider, obj5);
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
        tmp17Result = closure_9(Navigator.Navigator, obj13);
      }
      children[1] = tmp17Result;
      return closure_11(closure_10, { children });
    };
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
  const layoutEffect = noop.useLayoutEffect(() => closure_0(7196).trackAppUIViewed(), []);
  useOrientationLockDefault();
  closure_0 = noop.useRef(undefined);
  return closure_9(context.Provider, {
    value: noop.useCallback(() => RegistrationUtils.getTrackRegTransition(closure_0), [])(),
    children: closure_9(closure_17, {}),
  });
});
export const TrackRegistrationContext = context;
