// === Module 15765: getInitialAuthRouteStack ===

// Module 15765 (getInitialAuthRouteStack)
import ThemesDefault from "Themes" /* 709 */;
import KeyboardChatScrollView from "KeyboardChatScrollView" /* 1641 */;
import createStackNavigator from "createStackNavigator" /* 6018 */;
import useWideAuthViewDefault from "useWideAuthView" /* 7726 */;
import BackgroundImageDefault from "BackgroundImage" /* 7757 */;
import setRegistrationHandoff from "setRegistrationHandoff" /* 15766 */;
import useIsHCaptchaModalOpenTracking from "useIsHCaptchaModalOpenTracking" /* 15817 */;
import registerAsset from "registerAsset" /* 15818 */;
import usePortraitOrientationOnlyDefault from "usePortraitOrientationOnly" /* 15823 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "initialize" /* 12206 */;
import { AuthStates } from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;
import headerTitle from "headerTitle" /* 15767 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function getInitialAuthRouteStack() {
  obj = setRegistrationHandoff;
  if (!obj.hasRegistrationHandoff()) {
    obj = { name: null };
    obj[0] = AuthStates.WELCOME;
    const items = [obj];
    let items1 = items;
  } else {
    obj1 = canUseMultiAccountMobile;
    obj = { name: null };
    obj[0] = AuthStates.WELCOME;
    items1 = [obj, ];
    obj1 = { name: null };
    obj1[0] = AuthStates.LOGIN;
    items1[1] = obj1;
  }
  return items1;
}
function NavigatorWithCaptchaHook() {
  obj = useIsHCaptchaModalOpenTracking;
  const isHCaptchaModalOpenTracking = obj.useIsHCaptchaModalOpenTracking();
  const tmp6 = callback3();
  const first = callback(importAllResult.useState(getInitialAuthRouteStack), 1)[0];
  const tmp5 = useWideAuthViewDefault();
  [tmp8, require] = callback(importAllResult.useState(first[first.length - 1].name), 2);
  const effect = importAllResult.useEffect(() => {
    const result = callback(table[6]).clearRegistrationHandoff();
  }, []);
  const tmp10 = callback(importAllResult.useState(false), 2);
  importDefault = tmp11;
  obj1 = KeyboardChatScrollView;
  const keyboardState = obj1.useKeyboardState((height) => height.height);
  callback = importAllResult.useCallback((arg0) => {
    let name;
    if (arg0 != null) {
      if (arg0.routes[arg0.index] != null) {
        name = tmp3.name;
      }
    }
    if (name == null) {
      name = null;
    }
    closure_0(name);
    callback2(false);
  }, []);
  obj = { backgroundImageSource: null, backgroundImageCover: true };
  const tmp15 = closure_11;
  const tmp16 = closure_10;
  const tmp7 = callback(importAllResult.useState(first[first.length - 1].name), 2);
  obj[0] = registerAsset;
  const children = [callback2(BackgroundImageDefault, obj), ];
  if (tmp5) {
    obj = { value: null, children: null };
    obj[0] = tmp11;
    const items1 = [tmp6.wideOuterContainer, ];
    let tmp24 = null;
    if (tmp13) {
      obj1 = { paddingBottom: null };
      obj1[0] = keyboardState;
      tmp24 = obj1;
    }
    const obj2 = { style: null, children: null };
    items1[1] = tmp24;
    obj2[0] = items1;
    const items2 = [tmp6.wideCard, , ];
    let tmp25 = null;
    if (null != tmp8) {
      let num = obj[tmp8];
      if (num == null) {
        num = 520;
      }
      const obj3 = { height: null };
      obj3[0] = num;
      tmp25 = obj3;
    }
    items2[1] = tmp25;
    let obj4 = null;
    if (tmp13) {
      obj4 = { maxHeight: "100%", height: "100%", marginTop: 32, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 };
    }
    const obj5 = { style: null, children: null };
    items2[2] = obj4;
    obj5[0] = items2;
    const obj6 = { screens: null, containerStyle: null, viewStyle: null, headerStatusBarHeight: 0, cardOverlayEnabled: false, cardShadowEnabled: false, initialRouteStack: null, onWillFocus: null, onStateChange: null, headerStyle: null, headerLeftContainerStyle: null, disableHeaderAnimation: true };
    obj6[0] = closure_14;
    obj6[1] = tmp6.cardContainer;
    let transparent = null;
    if (tmp8 === AuthStates.WELCOME) {
      transparent = tmp6.transparent;
    }
    obj6[2] = transparent;
    obj6[6] = first;
    obj6[7] = closure_5.dismiss;
    obj6[8] = callback;
    obj6[9] = tmp10[0] ? tmp6.wideHeader : tmp6.wideHeaderFlat;
    let num2 = 20;
    if (tmpResult.isAndroid()) {
      num2 = tmp4(709).space.PX_12;
    }
    const obj7 = { paddingLeft: null, paddingTop: null, paddingBottom: null };
    obj7[0] = num2;
    obj7[1] = tmp4(709).space.PX_24;
    obj7[2] = tmp4(709).space.PX_16;
    obj6[10] = obj7;
    obj5[1] = tmp17(tmp(6016).Navigator, obj6);
    obj2[1] = tmp17(closure_6, obj5);
    obj[1] = tmp17(closure_6, obj2);
    let tmp17Result = tmp17(tmp(7755).WideAuthScrollContext.Provider, obj);
    tmpResult = tmp(1235);
  } else {
    const obj8 = { screens: null, viewStyle: null, containerStyle: null, headerBackTitle: null, initialRouteStack: null, onWillFocus: null, headerStyle: null };
    obj8[0] = headerTitle;
    ({ transparent: obj4[1], transparent: obj4[2] } = tmp6);
    const intl = tmp(1233).intl;
    obj8[3] = intl.string(tmp(1233).t["13/7kX"]);
    obj8[4] = first;
    obj8[5] = closure_5.dismiss;
    obj8[6] = { borderBottomWidth: 0 };
    tmp17Result = tmp17(tmp(6016).Navigator, obj8);
  }
  children[1] = tmp17Result;
  return tmp15(tmp16, { children });
}
let c4 = importAllResult;
({ Keyboard: c5, View: closure_6, StyleSheet } = get_ActivityIndicator);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = jsxProd);
headerTitle = headerTitle.getAllAuthScreens();
headerTitle = Object.entries(headerTitle);
let closure_14 = Object.fromEntries(headerTitle.map((arg0) => {
  [tmp, tmp2] = arg0;
  const items = [tmp, ];
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
    if (tmp !== tmp5.WELCOME) {
      obj = { headerLeft: null };
      obj[0] = function headerLeft(arg0) {
        function backImage() {
          return callback2(callback(table[8]).HeaderBackImage, {});
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
          headerLeftResult = closure_1_9(closure_1_0(closure_1_2[9]).BackButtonWithTracking, obj);
        }
        return headerLeftResult;
      };
      tmp6 = obj;
    }
  }
  const merged2 = Object.assign(tmp6);
  const items1 = [, , ];
  ({ REGISTER_IDENTITY: arr2[0], LOGIN: arr2[1], AGE_GATE_UNDERAGE: arr2[2] } = AuthStates);
  let tmp8 = null;
  if (set.has(tmp)) {
    obj1 = { cardStyleInterpolator: null };
    obj1[0] = createStackNavigator.CardStyleInterpolators.forFadeFromCenter;
    tmp8 = obj1;
  }
  const merged3 = Object.assign(tmp8);
  items[1] = obj;
  return items;
}));
let num = 540;
if (require("_crypto").hasWebAuthn) {
  num = 600;
}
let obj = {};
obj[AuthStates.LOGIN] = num;
obj[AuthStates.MFA] = 600;
obj = { transparent: { backgroundColor: "transparent" }, cardContainer: { flex: 1, position: "relative", backgroundColor: "transparent" }, wideOuterContainer: { flex: 1, justifyContent: "center" }, wideCard: null, wideHeaderFlat: null, wideHeader: null };
headerTitle = { backgroundColor: "transparent", borderRadius: ThemesDefault.radii.lg, maxWidth: 600, alignSelf: "center", width: "100%", maxHeight: "90%", overflow: "hidden", height: 520 };
obj[3] = headerTitle;
obj[4] = { borderBottomWidth: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey = { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj[5] = createCacheKey;
let closure_16 = createCacheKey.createStyles(obj);
const context = importAllResult.createContext(() => {

});
let obj2 = { borderBottomWidth: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
const memoResult = importAllResult.memo(function Auth() {
  const effect = importAllResult.useEffect(() => {
    callback2(15819).initialize();
    return () => callback(table[23]).terminate();
  }, []);
  const layoutEffect = importAllResult.useLayoutEffect(() => callback(7229).trackAppUIViewed(), []);
  usePortraitOrientationOnlyDefault();
  closure_0 = importAllResult.useRef(undefined);
  return callback2(context.Provider, { value: importAllResult.useCallback(() => callback(closure_1_2[9]).getTrackRegTransition(callback), [])(), children: callback2(NavigatorWithCaptchaHook, {}) });
});
let result = require("set").fileFinishedImporting("modules/auth/native/components/Auth.tsx");

export default memoResult;
export const TrackRegistrationContext = context;