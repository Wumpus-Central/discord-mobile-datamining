// === Module 15753: ConnectionBannerIcon ===

// Module 15753 (ConnectionBannerIcon)
import ThemesDefault from "Themes" /* 712 */;
import map from "map" /* 4101 */;
import _modDef4120 from "module_4120" /* 4120 */;
import Text from "Text" /* 4376 */;
import LinearGradientDefault from "LinearGradient" /* 4826 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 5416 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "updateState" /* 13153 */;
import { ConnectivityIndicatorState as closure_8 } from "updateState" /* 13153 */;
import CONNECTION_BANNER_HEIGHT from "CONNECTION_BANNER_HEIGHT" /* 14548 */;
import { AnalyticEvents } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

require = arg1;
function ConnectionBannerIcon(state) {
  state = state.state;
  const tmp = callback3();
  map;
  if (constants.WAITING_FOR_NETWORK === state) {
    let obj = { style: null, children: null };
    obj[0] = tmp.leadingSlot;
    obj = { size: "small", color: null, style: null };
    obj[1] = tmp6;
    obj[2] = tmp.spinner;
    obj[1] = callback2(closure_5, obj);
    return callback2(closure_6, obj);
  } else if (tmp7.NO_CONNECTION === state) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.leadingSlot;
    const obj2 = { size: "xs", color: null };
    obj2[1] = tmp5(712).colors.INTERACTIVE_ICON_DEFAULT;
    obj1[1] = callback2(tmp2(15754).ConnectionUnknownIcon, obj2);
    return callback2(closure_6, obj1);
  } else if (tmp7.BACK_ONLINE === state) {
    obj = { style: null, children: null };
    obj[0] = tmp.leadingSlot;
    const obj3 = { size: "xs", color: null };
    obj3[1] = tmp5(712).colors.ICON_FEEDBACK_POSITIVE;
    obj[1] = callback2(tmp2(15756).ConnectionFineIcon, obj3);
    return callback2(closure_6, obj);
  }
}
function ConnectionBannerContent(state) {
  state = state.state;
  let obj = { style: callback3().content, children: null };
  const items = [callback2(ConnectionBannerIcon, { state }), ];
  let str = "text-muted";
  if (state === constants.BACK_ONLINE) {
    str = "text-feedback-positive";
  }
  obj = { variant: "text-sm/medium", color: str, maxFontSizeMultiplier: 1.5, children: null };
  if (constants.WAITING_FOR_NETWORK === state) {
    const intl2 = tmp4(1236).intl;
    let stringResult = intl2.string(tmp4(1236).t.XKk1gp);
  } else if (tmp6.NO_CONNECTION === state) {
    const intl = tmp4(1236).intl;
    stringResult = intl.string(tmp4(1236).t.zPerw8);
  } else if (tmp6.BACK_ONLINE === state) {
    const intl3 = tmp4(1236).intl;
    stringResult = intl3.string(tmp4(1236).t.j8lYE2);
  }
  obj[3] = stringResult;
  items[1] = callback2(Text.Text, obj);
  obj[1] = items;
  return closure_13(closure_6, obj);
}
function BackOnlineGlow(opacity) {
  let token;
  const tmp = callback3();
  let obj = token(4101);
  token = obj.useToken(ThemesDefault.colors.ICON_FEEDBACK_POSITIVE);
  let items = [token];
  const memo = React.useMemo(() => {
    const obj = closure_1_1(closure_1_2[14])(token);
    const items = [obj.alpha(0).css(), , , ];
    const alphaResult = obj.alpha(0);
    items[1] = obj.alpha(0.1).css();
    const alphaResult1 = obj.alpha(0.1);
    items[2] = obj.alpha(0.28).css();
    const alphaResult2 = obj.alpha(0.28);
    items[3] = obj.alpha(0.55).css();
    return items;
  }, items);
  obj = { style: items1, pointerEvents: "none", children: null };
  items1 = [tmp.glow, { opacity: opacity.progress }];
  obj = { style: tmp.glow, maskElement: callback2(LinearGradientDefault, { style: tmp.glowMaskGradient, colors: closure_14, locations: closure_15, start: closure_16, end: closure_17 }), children: callback2(LinearGradientDefault, { style: tmp.glowMaskGradient, colors: memo, locations: closure_18, start: closure_19, end: closure_20 }) };
  obj[2] = callback2(_isNativeReflectConstructDefault, obj);
  return callback2(_modDef4120.View, obj);
}
function ConnectionBannerInner() {
  let obj = _require(sharedValue[20]);
  const youBarBottomMargin = obj.useYouBarBottomMargin();
  obj1 = _require(sharedValue[18]);
  let items = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items, () => state.getState());
  _require = tmp7;
  importDefault = tmp8;
  let tmp9 = null;
  if (stateFromStores !== constants.HIDDEN) {
    tmp9 = stateFromStores;
  }
  let tmp2Result = tmp2(tmp3[15]);
  sharedValue = tmp2Result.useSharedValue(0);
  const tmp = callback3();
  const tmp6 = constants;
  [tmp12, tmp13] = callback(sharedValue1.useState(tmp9), 2);
  callback = tmp13;
  tmp2Result = tmp2(tmp3[15]);
  sharedValue1 = tmp2Result.useSharedValue(0);
  if (tmp15) {
    tmp13(tmp9);
  }
  const items1 = [stateFromStores !== constants.HIDDEN, sharedValue1];
  const effect = obj4.useEffect(() => {
    let obj = callback(sharedValue[21]);
    let num = 0;
    if (callback) {
      num = 1;
    }
    const fn = function n(arg0) {
      if (!tmp) {
        closure_1_0(closure_1_2[15]).runOnJS(closure_3)(null);
        const obj = closure_1_0(closure_1_2[15]);
      }
    };
    obj = { shouldShowBanner: callback, runOnJS: callback(sharedValue[15]).runOnJS, setRenderState: closure_3 };
    fn.__closure = obj;
    fn.__workletHash = 3065113239920;
    fn.__initData = closure_1_25;
    const result = sharedValue1.set(obj.withSpring(num, closure_1_10, "respect-motion-settings", fn));
  }, items1);
  const items2 = [stateFromStores === constants.BACK_ONLINE, sharedValue];
  const effect1 = obj4.useEffect(() => {
    let num = 0;
    if (closure_1) {
      num = 1;
    }
    const result = sharedValue.set(callback(sharedValue[21]).withSpring(num, closure_1_10));
  }, items2);
  const tmp11 = callback(sharedValue1.useState(tmp9), 2);
  tmp15 = null != tmp9 && tmp12 !== tmp9;
  class A {
    constructor() {
      obj = { transform: null, opacity: null };
      obj = { translateY: (1 - closure_4.get()) * closure_1_9 };
      items = [];
      items[0] = obj;
      obj[0] = items;
      obj[1] = closure_4.get();
      return obj;
    }
  }
  obj = { progress: sharedValue1, CONNECTION_BANNER_HEIGHT };
  A.__closure = obj;
  A.__workletHash = 13973493587548;
  A.__initData = closure_26;
  const animatedStyle = _require(sharedValue[15]).useAnimatedStyle(A);
  obj = { pointerEvents: "none", style: items3, children: null };
  items3 = [tmp.container, { height: youBarBottomMargin + CONNECTION_BANNER_HEIGHT }, animatedStyle];
  let tmp21 = null;
  if (tmp12 === tmp6.BACK_ONLINE) {
    obj1 = { progress: null };
    obj1[0] = sharedValue;
    tmp21 = callback2(BackOnlineGlow, obj1);
  }
  const items4 = [tmp21, ];
  let tmp24 = null;
  if (null != tmp12) {
    const obj2 = { state: null };
    obj2[0] = tmp12;
    tmp24 = callback2(ConnectionBannerContent, obj2);
  }
  items4[1] = tmp24;
  obj[2] = items4;
  return closure_13(importDefault(sharedValue[15]).View, obj);
}
({ ActivityIndicator: c5, View: closure_6 } = get_ActivityIndicator);
CONNECTION_BANNER_HEIGHT = CONNECTION_BANNER_HEIGHT.CONNECTION_BANNER_HEIGHT;
const YOU_BAR_SPRING_CONFIG = CONNECTION_BANNER_HEIGHT.YOU_BAR_SPRING_CONFIG;
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = ["transparent", "black", "black", "transparent"];
let closure_15 = [0, 0.25, 0.75, 1];
let closure_16 = { x: 0, y: 0.5 };
let closure_17 = { x: 1, y: 0.5 };
let closure_18 = [0, 0.4, 0.75, 1];
let closure_19 = { x: 0, y: 0 };
let closure_20 = { x: 0, y: 1 };
createCacheKey = { container: { position: "absolute", left: 0, right: 0, bottom: 0 }, glow: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }, glowMaskGradient: { flex: 1 }, content: null, leadingSlot: null, spinner: null };
createCacheKey = { position: "absolute", top: 0, left: 0, right: 0, height: CONNECTION_BANNER_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_12 };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { width: 16, height: 16, alignItems: "center", justifyContent: "center" };
let items = [{ scale: 0.8 }];
createCacheKey[5] = { transform: items };
let closure_21 = createCacheKey.createStyles(createCacheKey);
let closure_25 = { code: "function ConnectionBannerTsx1(finished){const{shouldShowBanner,runOnJS,setRenderState}=this.__closure;if(finished===true&&!shouldShowBanner){runOnJS(setRenderState)(null);}}" };
let closure_26 = { code: "function ConnectionBannerTsx2(){const{progress,CONNECTION_BANNER_HEIGHT}=this.__closure;return{transform:[{translateY:(1-progress.get())*CONNECTION_BANNER_HEIGHT}],opacity:progress.get()};}" };
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/ConnectionBanner.tsx");

export default function ConnectionBanner() {
  const config = stateFromStores(13154).useConfig({ location: "ConnectionBanner" });
  const hidden = config.hidden;
  stateFromStores = undefined;
  dependencyMap = undefined;
  let obj = stateFromStores(13154);
  const items = [closure_7];
  stateFromStores = hidden(589).useStateFromStores(items, () => state.getState());
  dependencyMap = React.useRef(null);
  const items1 = [stateFromStores, hidden];
  const effect = React.useEffect(() => {
    const current = ref.current;
    ref.current = stateFromStores;
    if (null != current) {
      if (current === closure_1_8.HIDDEN) {
        if (tmp !== tmp7.HIDDEN) {
          if (tmp !== tmp7.BACK_ONLINE) {
            let str = "hidden";
            if (!hidden) {
              let str2 = "connecting";
              if (tmp === tmp7.NO_CONNECTION) {
                str2 = "offline";
              }
              str = str2;
            }
            let obj = stateFromStores(ref[19]);
            obj = { connection_indicator_type: null };
            obj[0] = str;
            obj.track(closure_1_11.CONNECTION_INDICATOR_SHOWN, obj);
          }
        }
      }
    }
  }, items1);
  let tmp4 = null;
  if (null != config.timeoutMs) {
    tmp4 = null;
    if (!hidden) {
      tmp4 = callback2(ConnectionBannerInner, {});
    }
  }
  return tmp4;
};