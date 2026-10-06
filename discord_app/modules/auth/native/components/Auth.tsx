// === Module 15903: Auth ===

// Module 15903 (Auth)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1370 */;
import KeyboardChatScrollView from "KeyboardChatScrollView" /* 1632 */;
import useWideAuthViewDefault from "useWideAuthView" /* 6439 */;
import MFAUtils from "MFAUtils" /* 6446 */;
import react3 from "react" /* 6468 */;
import BackgroundImageDefault from "BackgroundImage" /* 6470 */;
import Navigator3 from "Navigator" /* 6503 */;
import _mod6505 from "module_6505" /* 6505 */;
import RegistrationHandoff from "RegistrationHandoff" /* 15904 */;
import RegistrationUtils from "RegistrationUtils" /* 15914 */;
import useIsHCaptchaModalOpenTracking from "useIsHCaptchaModalOpenTracking" /* 15956 */;
import AssetRegistry from "AssetRegistry" /* 15957 */;
import AuthManagerDefault from "AuthManager" /* 15958 */;
import useOrientationLockDefault from "useOrientationLock" /* 15962 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import MultiAccountStore from "MultiAccountStore" /* 12071 */;
import Fragment from "Fragment" /* 21 */;
import RegistrationStepsUtils_mod from "RegistrationStepsUtils" /* 15905 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, set;

let StyleSheet;
let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj3;
let obj4;
let size;
let unpackModuleId;
function getInitialAuthRouteStack() {
  let items1;
  obj = RegistrationHandoff;
  if (!obj.hasRegistrationHandoff()) {
    const items = [{ name: AuthStates.WELCOME }];
    items1 = items;
    const obj3 = { name: AuthStates.WELCOME };
  } else {
    items1 = [{ name: AuthStates.WELCOME }, ];
    const obj4 = { name: AuthStates.WELCOME };
    const obj5 = { name: AuthStates.LOGIN };
    items1[1] = obj5;
  }
  return items1;
}
({ Keyboard: hasOwnProperty, View: metroRequire, StyleSheet } = react_native);
const AuthStates = Constants.AuthStates;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let RegistrationStepsUtils = RegistrationStepsUtils_mod;
RegistrationStepsUtils = RegistrationStepsUtils.getAllAuthScreens();
RegistrationStepsUtils = Object.entries(RegistrationStepsUtils);
const screens = fromEntries(RegistrationStepsUtils.map((item) => {
  let tmp;
  let tmp2;
  const headerLeft2 = function headerLeft(arg0) {
    let headerLeftResult;
    function backImage() {
      return closure_1_9(headerLeft(closure_1_2[8]).HeaderBackImage, {});
    }
    const tmp = headerLeft;
    if (null != headerLeft.headerLeft) {
      headerLeft = tmp.headerLeft;
      const obj2 = { backImage };
      const merged = Object.assign(arg0);
      headerLeftResult = headerLeft(obj2);
    } else {
      obj = { backImage };
      const BackButtonWithTracking = RegistrationUtils.BackButtonWithTracking;
      const merged1 = Object.assign(arg0);
      headerLeftResult = React4(BackButtonWithTracking, obj);
    }
    return headerLeftResult;
  };
  [tmp, tmp2] = item;
  const items = [tmp, ];
  obj = { headerMode: "screen" };
  let merged = Object.assign(tmp2);
  let obj2 = null;
  if (tmp2.fullscreen) {
    obj2 = { fullscreen: false, headerTransparent: false };
  }
  let merged1 = Object.assign(obj2);
  let tmp6 = null;
  if (tmp !== AuthStates.MFA) {
    tmp6 = null;
    if (tmp !== AuthStates.WELCOME) {
      tmp6 = { headerLeft: headerLeft2 };
      const obj3 = { headerLeft: headerLeft2 };
    }
  }
  const merged2 = Object.assign(tmp6);
  const items1 = [, , ];
  ({ REGISTER_IDENTITY: arr2[0], LOGIN: arr2[1], AGE_GATE_UNDERAGE: arr2[2] } = AuthStates);
  let tmp8 = null;
  set = new Set(items1);
  if (set.has(tmp)) {
    tmp8 = { cardStyleInterpolator: _mod6505.CardStyleInterpolators.forFadeFromCenter };
    const obj4 = { cardStyleInterpolator: _mod6505.CardStyleInterpolators.forFadeFromCenter };
  }
  const merged3 = Object.assign(tmp8);
  items[1] = obj;
  return items;
}));
const LOGIN = AuthStates.LOGIN;
let num = 540;
if (MFAUtils.hasWebAuthn) {
  num = 600;
}
let obj = {};
obj[LOGIN] = num;
obj[AuthStates.MFA] = 600;
let createStyles = createStyles_mod;
let obj2 = { transparent: { backgroundColor: "transparent" }, cardContainer: { flex: 1, position: "relative", backgroundColor: "transparent" }, wideOuterContainer: { flex: 1, justifyContent: "center" }, wideCard: size, wideHeaderFlat: obj3, wideHeader: obj4 };
size = { backgroundColor: "transparent", borderRadius: nativeDefault.radii.lg, maxWidth: 600, alignSelf: "center", width: "100%", maxHeight: "90%", overflow: "hidden", height: 520 };
createStyles = createStyles.createStyles;
obj3 = { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj4 = { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_16 = createStyles(obj2);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let Navigator2;
  let closure_1;
  let obj7;
  let obj8;
  let obj9;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp22;
  let tmp27Result;
  obj = react2;
  const cResult = obj.c(18);
  const obj2 = useIsHCaptchaModalOpenTracking;
  const isHCaptchaModalOpenTracking = obj2.useIsHCaptchaModalOpenTracking();
  const tmp6 = useWideAuthViewDefault();
  const tmp7 = closure_16();
  const first = _slicedToArray(react.useState(getInitialAuthRouteStack), 1)[0];
  [tmp10, require] = react.useState(first[first.length - 1].name);
  _slicedToArray(react.useState(first[first.length - 1].name), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      obj = RegistrationHandoff;
      const result = obj.clearRegistrationHandoff();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp11 = fn;
    tmp12 = items;
  } else {
    [tmp11, tmp12] = cResult;
  }
  const effect = react.useEffect(tmp11, tmp12);
  [tmp15, tmp16] = react.useState(false);
  importDefault = tmp16;
  _slicedToArray(react.useState(false), 2);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor(height) {
        return height.height;
      }
    }
    cResult[2] = O;
  } else {
    class O {
      constructor(height) {
        return height.height;
      }
    }
  }
  const tmpResult = KeyboardChatScrollView;
  const keyboardState = tmpResult.useKeyboardState(O);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor(height) {
        return height.height;
      }
    }
    cResult[3] = tmp21;
  } else {
    class O {
      constructor(height) {
        return height.height;
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor(height) {
        return height.height;
      }
    }
    const obj4 = { backgroundImageSource: AssetRegistry, backgroundImageCover: true };
    const tmp5Result = BackgroundImageDefault;
    const tmp24 = closure_9(tmp5Result, obj4);
    cResult[4] = tmp24;
    tmp22 = tmp24;
  } else {
    class O {
      constructor(height) {
        return height.height;
      }
    }
  }
  if (cResult[5] === keyboardState > 200) {
    class O {
      constructor(height) {
        return height.height;
      }
    }
  }
  const items1 = [tmp22, ];
  if (tmp6) {
    class O {
      constructor(height) {
        return height.height;
      }
    }
    tmp32[0] = tmp16;
    const items2 = [tmp7.wideOuterContainer, ];
    let tmp35 = null;
    const Provider = react3.WideAuthScrollContext.Provider;
    if (keyboardState > 200) {
      class O {
        constructor(height) {
          return height.height;
        }
      }
      tmp36[0] = keyboardState;
      tmp35 = tmp36;
    }
    items2[1] = tmp35;
    const items3 = [tmp7.wideCard, , ];
    let tmp37 = null;
    const obj5 = { style: items2, children: closure_9(closure_6, obj7) };
    if (null != tmp10) {
      class O {
        constructor(height) {
          return height.height;
        }
      }
      if (obj[tmp10] == null) {
        class O {
          constructor(height) {
            return height.height;
          }
        }
      }
      tmp37 = { height: obj[tmp10] };
      const obj6 = { height: obj[tmp10] };
    }
    items3[1] = tmp37;
    if (keyboardState > 200) {
      class O {
        constructor(height) {
          return height.height;
        }
      }
    }
    items3[2] = null;
    obj7 = { style: items3, children: closure_9(Navigator2, obj8) };
    obj8 = { screens, containerStyle: tmp7.cardContainer, viewStyle: null, headerStatusBarHeight: 0, cardOverlayEnabled: false, cardShadowEnabled: false, initialRouteStack: first, onWillFocus: closure_5.dismiss, onStateChange: tmp21, headerStyle: tmp15 ? tmp7.wideHeader : tmp7.wideHeaderFlat, headerLeftContainerStyle: obj9, disableHeaderAnimation: true };
    Navigator2 = Navigator3.Navigator;
    if (tmp10 === AuthStates.WELCOME) {
      class O {
        constructor(height) {
          return height.height;
        }
      }
    }
    const tmpResult2 = utils_PlatformUtils;
    if (tmpResult2.isAndroid()) {
      class O {
        constructor(height) {
          return height.height;
        }
      }
    }
    obj9 = { paddingLeft: 20, paddingTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 };
    tmp32[1] = closure_9(closure_6, obj5);
    tmp27Result = closure_9(Provider, tmp32);
  } else {
    class O {
      constructor(height) {
        return height.height;
      }
    }
    tmp28[0] = RegistrationStepsUtils;
    ({ transparent: tmp28[1], transparent: tmp28[2] } = tmp7);
    const Navigator = Navigator3.Navigator;
    const intl = intl2.intl;
    tmp28[3] = intl.string(intl2.t["13/7kX"]);
    tmp28[4] = first;
    tmp28[5] = closure_5.dismiss;
    tmp28[6] = { borderBottomWidth: 0 };
    tmp27Result = closure_9(Navigator, tmp28);
  }
  items1[1] = tmp27Result;
  cResult[5] = keyboardState > 200;
  cResult[6] = tmp10;
  cResult[7] = first;
  cResult[8] = tmp15;
  cResult[9] = tmp6;
  cResult[10] = keyboardState;
  cResult[11] = tmp7.cardContainer;
  cResult[12] = tmp7.transparent;
  cResult[13] = tmp7.wideCard;
  cResult[14] = tmp7.wideHeader;
  cResult[15] = tmp7.wideHeaderFlat;
  cResult[16] = tmp7.wideOuterContainer;
  cResult[17] = closure_11(closure_10, { children: items1 });
  closure_11(closure_10, { children: items1 });
}) : (() => {
  let Navigator2;
  let closure_1;
  let intl;
  let obj10;
  let obj11;
  let obj12;
  let obj7;
  let tmp18Result;
  let tmp8;
  let transparent;
  obj = useIsHCaptchaModalOpenTracking;
  const isHCaptchaModalOpenTracking = obj.useIsHCaptchaModalOpenTracking();
  const tmp5 = useWideAuthViewDefault();
  const tmp6 = closure_16();
  const first = _slicedToArray(react.useState(getInitialAuthRouteStack), 1)[0];
  [tmp8, require] = react.useState(first[first.length - 1].name);
  _slicedToArray(react.useState(first[first.length - 1].name), 2);
  const effect = react.useEffect(() => {
    obj = RegistrationHandoff;
    const result = obj.clearRegistrationHandoff();
  }, []);
  const tmp10 = _slicedToArray(react.useState(false), 2);
  importDefault = tmp12;
  const first1 = tmp10[0];
  const obj2 = KeyboardChatScrollView;
  const keyboardState = obj2.useKeyboardState((height) => height.height);
  const callback = react.useCallback((arg0) => {
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
  const obj3 = { backgroundImageSource: AssetRegistry, backgroundImageCover: true };
  const tmp19 = BackgroundImageDefault;
  const children = [closure_9(tmp19, obj3), ];
  if (tmp5) {
    const items1 = [tmp6.wideOuterContainer, ];
    let tmp25 = null;
    const obj5 = { value: tmp10[1], children: closure_9(closure_6, obj7) };
    const Provider = react3.WideAuthScrollContext.Provider;
    if (keyboardState > 200) {
      tmp25 = { paddingBottom: keyboardState };
      const obj6 = { paddingBottom: keyboardState };
    }
    items1[1] = tmp25;
    const items2 = [tmp6.wideCard, , ];
    let tmp26 = null;
    obj7 = { style: items1, children: closure_9(closure_6, obj10) };
    if (null != tmp8) {
      let num = obj[tmp8];
      if (num == null) {
        num = 520;
      }
      tmp26 = { height: num };
      const obj8 = { height: num };
    }
    items2[1] = tmp26;
    let obj9 = null;
    if (keyboardState > 200) {
      obj9 = { maxHeight: "100%", height: "100%", marginTop: 32, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 };
    }
    items2[2] = obj9;
    obj10 = { style: items2, children: closure_9(Navigator2, obj11) };
    obj11 = { screens, containerStyle: tmp6.cardContainer, viewStyle: transparent, headerStatusBarHeight: 0, cardOverlayEnabled: false, cardShadowEnabled: false, initialRouteStack: first, onWillFocus: closure_5.dismiss, onStateChange: callback, headerStyle: first1 ? tmp6.wideHeader : tmp6.wideHeaderFlat, headerLeftContainerStyle: obj12, disableHeaderAnimation: true };
    transparent = null;
    Navigator2 = Navigator3.Navigator;
    if (tmp8 === AuthStates.WELCOME) {
      transparent = tmp6.transparent;
    }
    let num2 = 20;
    const tmpResult = utils_PlatformUtils;
    if (tmpResult.isAndroid()) {
      num2 = tmp4(587).space.PX_12;
    }
    obj12 = { paddingLeft: num2, paddingTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 };
    tmp18Result = closure_9(Provider, obj5);
  } else {
    ({ transparent: obj4.viewStyle, transparent: obj4.containerStyle } = tmp6);
    const obj13 = { screens: RegistrationStepsUtils, viewStyle: null, containerStyle: null, headerBackTitle: intl.string(intl2.t["13/7kX"]), initialRouteStack: first, onWillFocus: closure_5.dismiss, headerStyle: { borderBottomWidth: 0 } };
    const Navigator = Navigator3.Navigator;
    intl = intl2.intl;
    tmp18Result = closure_9(Navigator, obj13);
  }
  children[1] = tmp18Result;
  return closure_11(closure_10, { children });
});
const context = react.createContext(() => {

});
const memoResult = react.memo(function Auth() {
  const effect = react.useEffect(() => {
    obj = AuthManagerDefault;
    obj.initialize();
    return () => {
      obj = closure_1_1(closure_1_2[25]);
      return obj.terminate();
    };
  }, []);
  const layoutEffect = react.useLayoutEffect(() => {
    obj = closure_0(dependencyMap[26]);
    return obj.trackAppUIViewed();
  }, []);
  useOrientationLockDefault();
  let closure_0 = react.useRef(undefined);
  obj = {
    value: react.useCallback(() => {
      obj = RegistrationUtils;
      return obj.getTrackRegTransition(closure_0);
    }, [])(),
    children: closure_9(closure_17, {})
  };
  return closure_9(context.Provider, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/auth/native/components/Auth.tsx");

export default memoResult;
export const TrackRegistrationContext = context;