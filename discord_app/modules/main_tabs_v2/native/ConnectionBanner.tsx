// === Module 16799: ConnectionBanner ===

// Module 16799 (ConnectionBanner)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import useToken from "useToken" /* 4524 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4559 */;
import Text_Text from "Text/Text" /* 4823 */;
import spring from "spring" /* 5270 */;
import LinearGradientDefault from "LinearGradient" /* 5283 */;
import _modDef5967 from "module_5967" /* 5967 */;
import ConnectionUnknownIcon from "ConnectionUnknownIcon" /* 16800 */;
import ConnectionFineIcon from "ConnectionFineIcon" /* 16802 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConnectivityIndicatorStateStore from "ConnectivityIndicatorStateStore" /* 14044 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
function ConnectionBannerIcon(state) {
  state = state.state;
  const tmp = closure_21();
  useToken;
  if (constants.WAITING_FOR_NETWORK === state) {
    const obj2 = { style: tmp.leadingSlot, children: null };
    const obj3 = { size: "small", color: tmp6, style: tmp.spinner };
    obj2.children = closure_1_12(hasOwnProperty, obj3);
    return closure_1_12(timestampProducer, obj2);
  } else if (constants.NO_CONNECTION === state) {
    const obj4 = { style: tmp.leadingSlot, children: null };
    const obj5 = { size: "xs", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
    obj4.children = closure_1_12(ConnectionUnknownIcon.ConnectionUnknownIcon, obj5);
    return closure_1_12(timestampProducer, obj4);
  } else if (constants.BACK_ONLINE === state) {
    const obj = { style: tmp.leadingSlot, children: null };
    const obj6 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
    obj.children = closure_1_12(ConnectionFineIcon.ConnectionFineIcon, obj6);
    return closure_1_12(timestampProducer, obj);
  }
}
function ConnectionBannerContent(state) {
  state = state.state;
  const obj = { style: closure_21().content, children: null };
  const items = [closure_1_12(ConnectionBannerIcon, { state }), ];
  let str = "text-muted";
  if (state === constants.BACK_ONLINE) {
    str = "text-feedback-positive";
  }
  const obj2 = { variant: "text-sm/medium", color: str, maxFontSizeMultiplier: 1.5, children: null };
  if (constants.WAITING_FOR_NETWORK === state) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.XKk1gp);
  } else if (constants.NO_CONNECTION === state) {
    const intl = util.intl;
    stringResult = intl.string(util.t.zPerw8);
  } else if (constants.BACK_ONLINE === state) {
    const intl3 = util.intl;
    stringResult = intl3.string(util.t.j8lYE2);
  }
  obj2.children = stringResult;
  items[1] = closure_1_12(Text_Text.Text, obj2);
  obj.children = items;
  return map1(timestampProducer, obj);
}
function BackOnlineGlow(opacity) {
  let token;
  const tmp = closure_21();
  token = token(4524).useToken(nativeDefault.colors.ICON_FEEDBACK_POSITIVE);
  let items = [token];
  const memo = noop.useMemo(() => {
    const obj = _modDef672(token);
    const items = [obj.alpha(0).css(), , , ];
    const alphaResult = obj.alpha(0);
    items[1] = obj.alpha(0.1).css();
    const alphaResult1 = obj.alpha(0.1);
    items[2] = obj.alpha(0.28).css();
    const alphaResult2 = obj.alpha(0.28);
    items[3] = obj.alpha(0.55).css();
    return items;
  }, items);
  const obj2 = { style: null, pointerEvents: "none", children: null };
  const items1 = [tmp.glow, { opacity: opacity.progress }];
  obj2.style = items1;
  const obj3 = { style: tmp.glow, maskElement: null, children: null };
  let obj = token(4524);
  obj3.maskElement = closure_12(LinearGradientDefault, { style: tmp.glowMaskGradient, colors, locations, start, end });
  obj3.children = closure_12(LinearGradientDefault, { style: tmp.glowMaskGradient, colors: memo, locations: locations2, start: start2, end: end2 });
  obj2.children = closure_12(_modDef5967, obj3);
  return closure_12(ReanimatedRexportDefault.View, obj2);
}
function ConnectionBannerInner() {
  let tmp = closure_21();
  const youBarBottomMargin = require("useYouBarMargins").useYouBarBottomMargin();
  let obj = require("useYouBarMargins");
  let items = [ConnectivityIndicatorStateStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => state.getState());
  _require = tmp7;
  importDefault = tmp8;
  let tmp9 = null;
  if (stateFromStores !== constants.HIDDEN) {
    tmp9 = stateFromStores;
  }
  let obj2 = require("initialize");
  sharedValue = require("ReanimatedRexport").useSharedValue(0);
  const tmp2Result = require("ReanimatedRexport");
  [tmp12, tmp13] = sharedValue1.useState(tmp9);
  _slicedToArray = tmp13;
  const tmp11 = _slicedToArray(sharedValue1.useState(tmp9), 2);
  sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
  if (tmp15) {
    tmp13(tmp9);
  }
  const items1 = [stateFromStores !== constants.HIDDEN, sharedValue1];
  const effect = obj4.useEffect(() => {
    let num = 0;
    if (shouldShowBanner) {
      num = 1;
    }
    const fn = function n(arg0) {
      if (!tmp) {
        closure_0(sharedValue[15]).runOnJS(setRenderState)(null);
        const obj = closure_0(sharedValue[15]);
      }
      tmp = true !== arg0 || shouldShowBanner;
    };
    let obj = spring;
    fn.__closure = { shouldShowBanner, runOnJS: ReanimatedRexport.runOnJS, setRenderState };
    fn.__workletHash = 3065113239920;
    fn.__initData = __initData;
    const result = sharedValue1.set(obj.withSpring(num, YOU_BAR_SPRING_CONFIG, "respect-motion-settings", fn));
    const obj2 = { shouldShowBanner, runOnJS: ReanimatedRexport.runOnJS, setRenderState };
  }, items1);
  const items2 = [stateFromStores === constants.BACK_ONLINE, sharedValue];
  const effect1 = obj4.useEffect(() => {
    let num = 0;
    if (closure_1) {
      num = 1;
    }
    const result = sharedValue.set(spring.withSpring(num, YOU_BAR_SPRING_CONFIG));
  }, items2);
  tmp15 = null != tmp9 && tmp12 !== tmp9;
  const tmp2Result3 = require("ReanimatedRexport");
  class A {
    constructor() {
      obj = { transform: null, opacity: null };
      obj1 = { translateY: (1 - closure_4.get()) * CONNECTION_BANNER_HEIGHT };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      obj.opacity = closure_4.get();
      return obj;
    }
  }
  A.__closure = { progress: sharedValue1, CONNECTION_BANNER_HEIGHT };
  A.__workletHash = 13973493587548;
  A.__initData = __initData;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(A);
  const obj5 = { pointerEvents: "none", style: null, children: null };
  const items3 = [tmp.container, { height: youBarBottomMargin + CONNECTION_BANNER_HEIGHT }, animatedStyle];
  obj5.style = items3;
  let tmp21 = null;
  if (tmp12 === constants.BACK_ONLINE) {
    const obj6 = { progress: sharedValue };
    tmp21 = closure_12(BackOnlineGlow, obj6);
  }
  const items4 = [tmp21, ];
  let tmp24 = null;
  if (null != tmp12) {
    const obj7 = { state: tmp12 };
    tmp24 = closure_12(ConnectionBannerContent, obj7);
  }
  items4[1] = tmp24;
  obj5.children = items4;
  return closure_13(require("ReanimatedRexport").View, obj5);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const constants = fn(14044).ConnectivityIndicatorState;
const YouBarConstants = fn(15425);
const CONNECTION_BANNER_HEIGHT = YouBarConstants.CONNECTION_BANNER_HEIGHT;
const YOU_BAR_SPRING_CONFIG = YouBarConstants.YOU_BAR_SPRING_CONFIG;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const colors = ["transparent", "black", "black", "transparent"];
const locations = [0, 0.25, 0.75, 1];
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const locations2 = [0, 0.4, 0.75, 1];
const start2 = { x: 0, y: 0 };
const end2 = { x: 0, y: 1 };
const createStyles = fn(4827);
let obj2 = { container: { position: "absolute", left: 0, right: 0, bottom: 0 }, glow: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }, glowMaskGradient: { flex: 1 }, content: null, leadingSlot: null, spinner: null };
const rect = { position: "absolute", top: 0, left: 0, right: 0, height: CONNECTION_BANNER_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12 };
obj2.content = rect;
obj2.leadingSlot = { width: 16, height: 16, alignItems: "center", justifyContent: "center" };
let obj3 = { transform: null };
let items = [{ scale: 0.8 }];
obj3.transform = items;
obj2.spinner = obj3;
let closure_21 = createStyles.createStyles(obj2);
let closure_25 = { code: "function ConnectionBannerTsx1(finished){const{shouldShowBanner,runOnJS,setRenderState}=this.__closure;if(finished===true&&!shouldShowBanner){runOnJS(setRenderState)(null);}}" };
const __initData = { code: "function ConnectionBannerTsx2(){const{progress,CONNECTION_BANNER_HEIGHT}=this.__closure;return{transform:[{translateY:(1-progress.get())*CONNECTION_BANNER_HEIGHT}],opacity:progress.get()};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/ConnectionBanner.tsx");

export default function ConnectionBanner() {
  const config = stateFromStores(14045).useConfig({ location: "ConnectionBanner" });
  const hidden = config.hidden;
  stateFromStores = undefined;
  let obj = stateFromStores(14045);
  const items = [ConnectivityIndicatorStateStore];
  stateFromStores = hidden(504).useStateFromStores(items, () => state.getState());
  dependencyMap = noop.useRef(null);
  const items1 = [stateFromStores, hidden];
  const effect = noop.useEffect(() => {
    const current = ref.current;
    ref.current = stateFromStores;
    if (null != current) {
      if (current === constants.HIDDEN) {
        if (stateFromStores !== constants.HIDDEN) {
          if (stateFromStores !== constants.BACK_ONLINE) {
            let str = "hidden";
            if (!hidden) {
              let str2 = "connecting";
              if (stateFromStores === constants.NO_CONNECTION) {
                str2 = "offline";
              }
              str = str2;
            }
            const obj2 = { connection_indicator_type: str };
            AnalyticsUtilsDefault.track(AnalyticEvents.CONNECTION_INDICATOR_SHOWN, obj2);
          }
        }
      }
    }
  }, items1);
  let tmp4 = null;
  if (null != config.timeoutMs) {
    tmp4 = null;
    if (!hidden) {
      tmp4 = closure_12(ConnectionBannerInner, {});
    }
  }
  return tmp4;
};