// discord_app/modules/voice_panel/native/dock/VoicePanelDockButtonRim.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import inlineStyles from "../../../../../_runtime/08263_inlineStyles.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const inlineStylesDefault = inlineStyles;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const DOCK_FADE_TIMING = fn(12009).DOCK_FADE_TIMING;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = noop.memo(function ButtonRimGradient(arg0) {
  ({ width, height, strength } = arg0);
  ({ cx, cy } = arg0);
  const token = useToken.useToken(nativeDefault.colors.ICON_VOICE_SPEAKING);
  const token1 = useToken.useToken(nativeDefault.modules.button.BORDER_RADIUS);
  const size = { width, height, children: null };
  const obj3 = { children: null };
  const obj4 = {
    id: "dockButtonRim",
    cx: `${100 * cx}%`,
    cy: `${100 * cy}%`,
    rx: "110.00000000000001%",
    ry: "70%",
    children: null,
  };
  items = [
    React5(inlineStyles.Stop, { offset: 0, stopColor: token, stopOpacity: strength }),
    React5(inlineStyles.Stop, { offset: 0.45, stopColor: token, stopOpacity: 0.4 * strength }),
    React5(inlineStyles.Stop, { offset: 1, stopColor: token, stopOpacity: 0 }),
  ];
  obj4.children = items;
  obj3.children = React6(inlineStyles.RadialGradient, obj4);
  const items1 = [React5(inlineStyles.Defs, obj3)];
  const size1 = {
    x: 0.5,
    y: 0.5,
    width: width - 1,
    height: height - 1,
    rx: token1 - 0.5,
    ry: token1 - 0.5,
    fill: "none",
    stroke: "url(#dockButtonRim)",
    strokeWidth: 1,
  };
  items1[1] = React5(inlineStyles.Rect, size1);
  size.children = items1;
  return React6(inlineStylesDefault, size);
});
let closure_11 = {
  code: "(function VoicePanelDockButtonRimTsx1(){let[voicePanelDockRimOpacity,pressOpacity]=this.__closure;return{opacity:voicePanelDockRimOpacity.get()*pressOpacity.get()};})",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockButtonRim.tsx");

export default noop.memo(function VoicePanelDockButtonRim(measureGlowOffset) {
  measureGlowOffset = measureGlowOffset.measureGlowOffset;
  _require = measureGlowOffset;
  let flag = measureGlowOffset.hideWhilePressed;
  if (flag === undefined) {
    flag = false;
  }
  first = undefined;
  _slicedToArray = undefined;
  let callback;
  ({ style, children } = measureGlowOffset);
  const ref = callback.useRef(null);
  [first, _slicedToArray] = callback.useState(null);
  items = [measureGlowOffset];
  callback = callback.useCallback(() => {
    const current = _undefined2.current;
    let tmp = null != current;
    if (tmp) {
      tmp = null != _undefined;
    }
    if (tmp) {
      _undefined(current, (width) => {
        if (tmp) {
          closure_1_3((width) => {
            width = undefined;
            if (width != null) {
              width = width.width;
            }
            let tmp3 = width;
            if (width === width.width) {
              tmp3 = tmp2;
              if (width.height === tmp2.height) {
                tmp3 = tmp2;
                if (width.dx === tmp2.dx) {
                  tmp3 = tmp2;
                  if (width.dy === tmp2.dy) {
                    tmp3 = width;
                  }
                }
              }
            }
            return tmp3;
          });
        }
        tmp = width.width > 0 && width.height > 0;
      });
    }
  }, items);
  const items1 = [callback];
  const items2 = [callback];
  const callback1 = callback.useCallback(() => callback(), items1);
  const effect = callback.useEffect(callback, items2);
  const items3 = [first];
  const memo = callback.useMemo(() => {
    if (null == first) {
      return null;
    } else {
      const result = 0.35 * first.dx;
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.max(Math.hypot(result, first.dy), 1);
      const obj = {
        cx: 0.5 + (result / bound) * 0.5 * 1.15,
        cy: 0.5 + (first.dy / bound) * 0.5 * 1.15,
        strength: 1 - 0.8 * first.offCenter * first.offCenter,
      };
      return obj;
    }
  }, items3);
  const sharedValue = require("../../../../../_runtime/metro/01655__.js").useSharedValue(1);
  const items4 = [sharedValue];
  const items5 = [sharedValue];
  const callback2 = callback.useCallback(() => {
    const result = sharedValue.set(timing_timing.withTiming(0, DOCK_FADE_TIMING));
  }, items4);
  const callback3 = callback.useCallback(() => {
    const result = sharedValue.set(timing_timing.withTiming(1, DOCK_FADE_TIMING));
  }, items5);
  let obj = require("../../../../../_runtime/metro/01655__.js");
  const tmp8 = _require;
  const items6 = [closure_11, require("VoicePanelDockRimLight").voicePanelDockRimOpacity, sharedValue];
  _require = undefined;
  importDefault = undefined;
  [tmp13, tmp14, tmp15] = items6;
  class VoicePanelDockButtonRimTsx1 {
    constructor() {
      obj = { opacity: null };
      value = closure_0.get();
      obj.opacity = value * closure_1.get();
      return obj;
    }
  }
  const items7 = [tmp14, tmp15];
  VoicePanelDockButtonRimTsx1.__closure = items7;
  VoicePanelDockButtonRimTsx1.__workletHash = 7321079765112;
  VoicePanelDockButtonRimTsx1.__initData = tmp13;
  const obj3 = {
    ref,
    style,
    onLayout: callback1,
    onTouchStart: null,
    onTouchEnd: null,
    onTouchCancel: null,
    children: null,
  };
  let tmp19;
  const animatedStyle = require("../../../../../_runtime/metro/01655__.js").useAnimatedStyle(
    VoicePanelDockButtonRimTsx1,
  );
  if (flag) {
    tmp19 = callback2;
  }
  obj3.onTouchStart = tmp19;
  let tmp20;
  if (flag) {
    tmp20 = callback3;
  }
  obj3.onTouchEnd = tmp20;
  let tmp21;
  if (flag) {
    tmp21 = callback3;
  }
  obj3.onTouchCancel = tmp21;
  const items8 = [children];
  let tmp22 = null != first && null != memo;
  if (tmp22) {
    const obj4 = { style: null, pointerEvents: "none", children: null };
    const items9 = [sharedValue.absoluteFill, animatedStyle];
    obj4.style = items9;
    const obj5 = { style: sharedValue.absoluteFill, children: null };
    const size = { width: null, height: null, cx: null, cy: null, strength: null };
    ({ width: obj6.width, height: obj6.height } = first);
    ({ cx: obj6.cx, cy: obj6.cy, strength: obj6.strength } = memo);
    obj5.children = closure_8(closure_10, size);
    obj4.children = closure_8(tmp8(tmp9[10]).VoicePanelDockRimLevel, obj5);
    tmp22 = closure_8(require("../../../../../_runtime/metro/01655__.js").View, obj4);
  }
  items8[1] = tmp22;
  obj3.children = items8;
  return closure_9(closure_6, obj3);
});
