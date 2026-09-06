// discord_app/modules/main_tabs_v2/native/ConnectionBanner.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef672 from "../../../../_runtime/metro/00672__.js";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import LinearGradientDefault from "../../../../_runtime/04987_LinearGradient.js";
import _modDef5664 from "../../../../_runtime/metro/05664__.js";
import ConnectionUnknownIcon from "../../../design/components/Icon/native/redesign/generated/ConnectionUnknownIcon.tsx";
import ConnectionFineIcon from "../../../design/components/Icon/native/redesign/generated/ConnectionFineIcon.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ConnectivityIndicatorStateStore from "../../connectivity/native/ConnectivityIndicatorStateStore.tsx";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
function ConnectionBannerIcon(state) {
  state = state.state;
  const tmp = closure_21();
  useToken;
  if (constants.WAITING_FOR_NETWORK === state) {
    let obj = { style: tmp.leadingSlot, children: null };
    obj = { size: "small", color: tmp6, style: tmp.spinner };
    obj.children = closure_1_12(hasOwnProperty, obj);
    return closure_1_12(timestampProducer, obj);
  } else if (constants.NO_CONNECTION === state) {
    const obj1 = { style: tmp.leadingSlot, children: null };
    const obj2 = { size: "xs", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
    obj1.children = closure_1_12(ConnectionUnknownIcon.ConnectionUnknownIcon, obj2);
    return closure_1_12(timestampProducer, obj1);
  } else if (constants.BACK_ONLINE === state) {
    obj = { style: tmp.leadingSlot, children: null };
    const obj3 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
    obj.children = closure_1_12(ConnectionFineIcon.ConnectionFineIcon, obj3);
    return closure_1_12(timestampProducer, obj);
  }
}
function ConnectionBannerContent(state) {
  state = state.state;
  let obj = { style: closure_21().content, children: null };
  const items = [closure_1_12(ConnectionBannerIcon, { state })];
  let str = "text-muted";
  if (state === constants.BACK_ONLINE) {
    str = "text-feedback-positive";
  }
  obj = { variant: "text-sm/medium", color: str, maxFontSizeMultiplier: 1.5, children: null };
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
  obj.children = stringResult;
  items[1] = closure_1_12(Text_Text.Text, obj);
  obj.children = items;
  return map1(timestampProducer, obj);
}
function BackOnlineGlow(opacity) {
  let token;
  const tmp = closure_21();
  let obj = token(4262);
  token = obj.useToken(nativeDefault.colors.ICON_FEEDBACK_POSITIVE);
  let items = [token];
  const memo = noop.useMemo(() => {
    const obj = _modDef672(token);
    const items = [obj.alpha(0).css(), , ,];
    const alphaResult = obj.alpha(0);
    items[1] = obj.alpha(0.1).css();
    const alphaResult1 = obj.alpha(0.1);
    items[2] = obj.alpha(0.28).css();
    const alphaResult2 = obj.alpha(0.28);
    items[3] = obj.alpha(0.55).css();
    return items;
  }, items);
  obj = { style: null, pointerEvents: "none", children: null };
  const items1 = [tmp.glow, { opacity: opacity.progress }];
  obj.style = items1;
  obj = {
    style: tmp.glow,
    maskElement: closure_12(LinearGradientDefault, { style: tmp.glowMaskGradient, colors, locations, start, end }),
    children: closure_12(LinearGradientDefault, {
      style: tmp.glowMaskGradient,
      colors: memo,
      locations: locations2,
      start: start2,
      end: end2,
    }),
  };
  obj.children = closure_12(_modDef5664, obj);
  return closure_12(ReanimatedRexportDefault.View, obj);
}
function ConnectionBannerInner() {
  let obj = require("useYouBarMargins");
  const youBarBottomMargin = obj.useYouBarBottomMargin();
  let obj1 = require("initialize");
  let items = [ConnectivityIndicatorStateStore];
  const stateFromStores = obj1.useStateFromStores(items, () => state.getState());
  _require = tmp7;
  importDefault = tmp8;
  let tmp9 = null;
  if (stateFromStores !== constants.HIDDEN) {
    tmp9 = stateFromStores;
  }
  let tmp2Result = tmp2(tmp3[15]);
  sharedValue = tmp2Result.useSharedValue(0);
  let tmp = closure_21();
  [tmp12, tmp13] = _slicedToArray(sharedValue1.useState(tmp9), 2);
  _slicedToArray = tmp13;
  tmp2Result = tmp2(tmp3[15]);
  sharedValue1 = tmp2Result.useSharedValue(0);
  if (tmp15) {
    tmp13(tmp9);
  }
  const items1 = [stateFromStores !== constants.HIDDEN, sharedValue1];
  const effect = obj4.useEffect(() => {
    let obj = spring;
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
    obj = { shouldShowBanner, runOnJS: ReanimatedRexport.runOnJS, setRenderState };
    fn.__closure = obj;
    fn.__workletHash = 3065113239920;
    fn.__initData = __initData;
    const result = sharedValue1.set(obj.withSpring(num, YOU_BAR_SPRING_CONFIG, "respect-motion-settings", fn));
  }, items1);
  const items2 = [stateFromStores === constants.BACK_ONLINE, sharedValue];
  const effect1 = obj4.useEffect(() => {
    let num = 0;
    if (closure_1) {
      num = 1;
    }
    const result = sharedValue.set(spring.withSpring(num, YOU_BAR_SPRING_CONFIG));
  }, items2);
  const tmp11 = _slicedToArray(sharedValue1.useState(tmp9), 2);
  tmp15 = null != tmp9 && tmp12 !== tmp9;
  class A {
    constructor() {
      obj = { transform: null, opacity: null };
      obj = { translateY: (1 - closure_4.get()) * CONNECTION_BANNER_HEIGHT };
      items = [];
      items[0] = obj;
      obj.transform = items;
      obj.opacity = closure_4.get();
      return obj;
    }
  }
  obj = { progress: sharedValue1, CONNECTION_BANNER_HEIGHT };
  A.__closure = obj;
  A.__workletHash = 13973493587548;
  A.__initData = __initData;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(A);
  obj = { pointerEvents: "none", style: null, children: null };
  const items3 = [tmp.container, { height: youBarBottomMargin + CONNECTION_BANNER_HEIGHT }, animatedStyle];
  obj.style = items3;
  let tmp21 = null;
  if (tmp12 === constants.BACK_ONLINE) {
    obj1 = { progress: sharedValue };
    tmp21 = closure_12(BackOnlineGlow, obj1);
  }
  const items4 = [tmp21];
  let tmp24 = null;
  if (null != tmp12) {
    const obj2 = { state: tmp12 };
    tmp24 = closure_12(ConnectionBannerContent, obj2);
  }
  items4[1] = tmp24;
  obj.children = items4;
  return closure_13(require("ReanimatedRexport").View, obj);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const constants = fn(13686).ConnectivityIndicatorState;
const YouBarConstants = fn(15098);
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
fn(4560);
let createStyles = {
  container: { position: "absolute", left: 0, right: 0, bottom: 0 },
  glow: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 },
  glowMaskGradient: { flex: 1 },
  content: null,
  leadingSlot: null,
  spinner: null,
};
const rect = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: CONNECTION_BANNER_HEIGHT,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
};
createStyles.content = rect;
createStyles.leadingSlot = { width: 16, height: 16, alignItems: "center", justifyContent: "center" };
createStyles = { transform: null };
let items = [{ scale: 0.8 }];
createStyles.transform = items;
createStyles.spinner = createStyles;
let closure_21 = createStyles.createStyles(createStyles);
let closure_25 = {
  code: "function ConnectionBannerTsx1(finished){const{shouldShowBanner,runOnJS,setRenderState}=this.__closure;if(finished===true&&!shouldShowBanner){runOnJS(setRenderState)(null);}}",
};
const __initData = {
  code: "function ConnectionBannerTsx2(){const{progress,CONNECTION_BANNER_HEIGHT}=this.__closure;return{transform:[{translateY:(1-progress.get())*CONNECTION_BANNER_HEIGHT}],opacity:progress.get()};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/ConnectionBanner.tsx");

export default function ConnectionBanner() {
  const config = stateFromStores(13687).useConfig({ location: "ConnectionBanner" });
  const hidden = config.hidden;
  stateFromStores = undefined;
  let obj = stateFromStores(13687);
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
            const obj = { connection_indicator_type: str };
            obj.track(AnalyticEvents.CONNECTION_INDICATOR_SHOWN, obj);
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
}
