// discord_app/modules/main_tabs_v2/native/ConnectionBanner.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef671 from "../../../../_runtime/metro/00671__.js";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import _modDef1652 from "../../../../_runtime/metro/01652__.js";
import _mod1705 from "../../../../_runtime/metro/01705__.js";
import LinearGradientDefault from "../../../../_runtime/05830_LinearGradient.js";
import useToken from "../../../design/tokens/native/useToken.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import spring_spring from "../../../design/animation/reanimated/spring/spring.tsx";
import _modDef7467 from "../../../../_runtime/metro/07467__.js";
import ConnectionUnknownIcon from "../../../design/components/Icon/native/redesign/generated/ConnectionUnknownIcon.tsx";
import ConnectionFineIcon from "../../../design/components/Icon/native/redesign/generated/ConnectionFineIcon.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ConnectivityIndicatorStateStore from "../../connectivity/native/ConnectivityIndicatorStateStore.tsx";

require = fn;
function ConnectionBannerIcon(state) {
  state = state.state;
  const tmp = closure_21();
  useToken;
  if (constants.WAITING_FOR_NETWORK === state) {
    const obj2 = { style: tmp.leadingSlot, children: null };
    const obj3 = { size: "small", color: tmp6, style: tmp.spinner };
    obj2.children = application_id(hasOwnProperty, obj3);
    return application_id(timestampProducer, obj2);
  } else if (constants.NO_CONNECTION === state) {
    const obj4 = { style: tmp.leadingSlot, children: null };
    const obj5 = { size: "xs", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
    obj4.children = application_id(ConnectionUnknownIcon.ConnectionUnknownIcon, obj5);
    return application_id(timestampProducer, obj4);
  } else if (constants.BACK_ONLINE === state) {
    const obj = { style: tmp.leadingSlot, children: null };
    const obj6 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
    obj.children = application_id(ConnectionFineIcon.ConnectionFineIcon, obj6);
    return application_id(timestampProducer, obj);
  }
}
function ConnectionBannerContent(state) {
  state = state.state;
  const obj = { style: closure_21().content, children: null };
  items = [application_id(ConnectionBannerIcon, { state })];
  let str = "text-muted";
  if (state === constants.BACK_ONLINE) {
    str = "text-feedback-positive";
  }
  const obj2 = { variant: "body-sm/medium", color: str, maxFontSizeMultiplier: 1.5, children: null };
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
  items[1] = application_id(Text_Text.Text, obj2);
  obj.children = items;
  return closure_1_13(timestampProducer, obj);
}
function BackOnlineGlow(opacity) {
  let token;
  const tmp = closure_21();
  token = token(5839).useToken(nativeDefault.colors.ICON_FEEDBACK_POSITIVE);
  items = [token];
  const memo = noop.useMemo(() => {
    const obj = _modDef671(token);
    items = [obj.alpha(0).css(), , ,];
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
  let obj = token(5839);
  obj3.maskElement = closure_12(LinearGradientDefault, { style: tmp.glowMaskGradient, colors, locations, start, end });
  obj3.children = closure_12(LinearGradientDefault, {
    style: tmp.glowMaskGradient,
    colors: memo,
    locations: locations2,
    start: start2,
    end: end2,
  });
  obj2.children = closure_12(_modDef7467, obj3);
  return closure_12(_modDef1652.View, obj2);
}
function ConnectionBannerInner() {
  let tmp = closure_21();
  const youBarBottomMargin = require("useYouBarMargins").useYouBarBottomMargin();
  let obj = require("useYouBarMargins");
  items = [ConnectivityIndicatorStateStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => state.getState());
  _require = tmp7;
  importDefault = tmp8;
  let tmp9 = null;
  if (stateFromStores !== constants.HIDDEN) {
    tmp9 = stateFromStores;
  }
  const obj2 = require("initialize");
  sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  const tmp2Result = require("../../../../_runtime/metro/01652__.js");
  [tmp12, tmp13] = sharedValue1.useState(tmp9);
  _slicedToArray = tmp13;
  const tmp11 = _slicedToArray(sharedValue1.useState(tmp9), 2);
  sharedValue1 = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  if (tmp15) {
    tmp13(tmp9);
  }
  let items1 = [stateFromStores !== constants.HIDDEN, sharedValue1];
  const effect = obj4.useEffect(() => {
    let num = 0;
    if (c0) {
      num = 1;
    }
    items = [closure_25, c0, _mod1705.scheduleOnRN, closure_3];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp6, tmp7, tmp8, tmp9] = items;
    class ConnectionBannerTsx1 {
      constructor(arg0) {
        tmp = true !== arg0 || closure_0;
        if (!tmp) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          tmp4 = null;
          tmp5 = closure_1(closure_2, null);
        }
        return;
      }
    }
    const items1 = [tmp7, tmp8, tmp9];
    ConnectionBannerTsx1.__closure = items1;
    ConnectionBannerTsx1.__workletHash = 16931767235940;
    ConnectionBannerTsx1.__initData = tmp6;
    const result = sharedValue1.set(
      spring_spring.withSpring(num, YOU_BAR_SPRING_CONFIG, "respect-motion-settings", ConnectionBannerTsx1),
    );
  }, items1);
  const items2 = [stateFromStores === constants.BACK_ONLINE, sharedValue];
  const effect1 = obj4.useEffect(() => {
    let num = 0;
    if (c1) {
      num = 1;
    }
    const result = sharedValue.set(spring_spring.withSpring(num, YOU_BAR_SPRING_CONFIG));
  }, items2);
  tmp15 = null != tmp9 && tmp12 !== tmp9;
  const tmp2Result3 = require("../../../../_runtime/metro/01652__.js");
  const items3 = [closure_26, sharedValue1, CONNECTION_BANNER_HEIGHT];
  _require = undefined;
  importDefault = undefined;
  [tmp20, tmp21, tmp22] = items3;
  class ConnectionBannerTsx2 {
    constructor() {
      obj = { transform: null, opacity: null };
      obj1 = { translateY: (1 - closure_0.get()) * closure_1 };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      obj.opacity = closure_0.get();
      return obj;
    }
  }
  const items4 = [tmp21, tmp22];
  ConnectionBannerTsx2.__closure = items4;
  ConnectionBannerTsx2.__workletHash = 11372304326917;
  ConnectionBannerTsx2.__initData = tmp20;
  const animatedStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(ConnectionBannerTsx2);
  const obj3 = { pointerEvents: "none", style: null, children: null };
  const items5 = [tmp.container, { height: youBarBottomMargin + CONNECTION_BANNER_HEIGHT }, animatedStyle];
  obj3.style = items5;
  let tmp25 = null;
  if (tmp12 === constants.BACK_ONLINE) {
    const obj5 = { progress: sharedValue };
    tmp25 = closure_12(BackOnlineGlow, obj5);
  }
  const items6 = [tmp25];
  let tmp28 = null;
  if (null != tmp12) {
    const obj6 = { state: tmp12 };
    tmp28 = closure_12(ConnectionBannerContent, obj6);
  }
  items6[1] = tmp28;
  obj3.children = items6;
  return closure_13(require("../../../../_runtime/metro/01652__.js").View, obj3);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const constants = fn(16074).ConnectivityIndicatorState;
const YouBarConstants = fn(17588);
const CONNECTION_BANNER_HEIGHT = YouBarConstants.CONNECTION_BANNER_HEIGHT;
const YOU_BAR_SPRING_CONFIG = YouBarConstants.YOU_BAR_SPRING_CONFIG;
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const colors = ["transparent", "black", "black", "transparent"];
const locations = [0, 0.25, 0.75, 1];
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const locations2 = [0, 0.4, 0.75, 1];
const start2 = { x: 0, y: 0 };
const end2 = { x: 0, y: 1 };
const createStyles = fn(5243);
let obj2 = {
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
obj2.content = rect;
obj2.leadingSlot = { width: 16, height: 16, alignItems: "center", justifyContent: "center" };
let obj3 = { transform: null };
let items = [{ scale: 0.8 }];
obj3.transform = items;
obj2.spinner = obj3;
let closure_21 = createStyles.createStyles(obj2);
let closure_25 = {
  code: "(function ConnectionBannerTsx1(finished){let[shouldShowBanner,scheduleOnRN,setRenderState]=this.__closure;if(finished===true&&!shouldShowBanner){scheduleOnRN(setRenderState,null);}})",
};
let closure_26 = {
  code: "(function ConnectionBannerTsx2(){let[progress,CONNECTION_BANNER_HEIGHT]=this.__closure;return{transform:[{translateY:(1-progress.get())*CONNECTION_BANNER_HEIGHT}],opacity:progress.get()};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/ConnectionBanner.tsx");

export default function ConnectionBanner() {
  const config = stateFromStores(16075).useConfig({ location: "ConnectionBanner" });
  const hidden = config.hidden;
  stateFromStores = undefined;
  let obj = stateFromStores(16075);
  items = [ConnectivityIndicatorStateStore];
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
}
