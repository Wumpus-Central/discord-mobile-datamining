// === Module 19609: VoicePanelDockButtonRim ===

// Module 19609 (VoicePanelDockButtonRim)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import useToken from "useToken" /* 5724 */;
import inlineStyles from "inlineStyles" /* 8101 */;
import VoicePanelDockRimLight from "VoicePanelDockRimLight" /* 14235 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;
const inlineStylesDefault = inlineStyles;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
let closure_9 = noop.memo(function ButtonRimGradient(arg0) {
  ({ width, height, strength } = arg0);
  ({ cx, cy } = arg0);
  const token = useToken.useToken(nativeDefault.colors.ICON_VOICE_SPEAKING);
  const token1 = useToken.useToken(nativeDefault.modules.button.BORDER_RADIUS);
  const size = { width, height, children: null };
  const obj3 = { children: null };
  const obj4 = { id: "dockButtonRim", cx: `${100 * cx}%`, cy: `${100 * cy}%`, rx: "110.00000000000001%", ry: "70%", children: null };
  items = [metroImportDefault(inlineStyles.Stop, { offset: 0, stopColor: token, stopOpacity: strength }), metroImportDefault(inlineStyles.Stop, { offset: 0.45, stopColor: token, stopOpacity: 0.4 * strength }), metroImportDefault(inlineStyles.Stop, { offset: 1, stopColor: token, stopOpacity: 0 })];
  obj4.children = items;
  obj3.children = React5(inlineStyles.RadialGradient, obj4);
  const items1 = [metroImportDefault(inlineStyles.Defs, obj3), ];
  const size1 = { x: 0.5, y: 0.5, width: width - 1, height: height - 1, rx: token1 - 0.5, ry: token1 - 0.5, fill: "none", stroke: "url(#dockButtonRim)", strokeWidth: 1 };
  items1[1] = metroImportDefault(inlineStyles.Rect, size1);
  size.children = items1;
  return React5(inlineStylesDefault, size);
});
let closure_10 = { code: "(function VoicePanelDockButtonRimTsx1(){let[voicePanelDockRimOpacity]=this.__closure;return{opacity:voicePanelDockRimOpacity.get()*0.5};})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockButtonRim.tsx");

export default noop.memo(function VoicePanelDockButtonRim(measureGlowOffset) {
  measureGlowOffset = measureGlowOffset.measureGlowOffset;
  first = undefined;
  closure_3 = undefined;
  ({ style, children } = measureGlowOffset);
  const ref = noop.useRef(null);
  [first, closure_3] = noop.useState(null);
  items = [measureGlowOffset];
  const callback = noop.useCallback(() => {
    const current = ref.current;
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
  const callback1 = noop.useCallback(() => callback(), items1);
  const effect = noop.useEffect(callback, items2);
  const items3 = [first];
  const memo = noop.useMemo(() => {
    if (null == first) {
      return null;
    } else {
      const result = 0.35 * first.dx;
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.max(Math.hypot(result, first.dy), 1);
      const obj = { cx: 0.5 + result / bound * 0.5 * 1.15, cy: 0.5 + first.dy / bound * 0.5 * 1.15, strength: 1 - 0.8 * first.offCenter * first.offCenter };
      return obj;
    }
  }, items3);
  const items4 = [closure_10, VoicePanelDockRimLight.voicePanelDockRimOpacity];
  c0 = undefined;
  [tmp10, tmp11] = items4;
  class VoicePanelDockButtonRimTsx1 {
    constructor() {
      obj = { opacity: 0.5 * closure_0.get() };
      return obj;
    }
  }
  const items5 = [tmp11];
  VoicePanelDockButtonRimTsx1.__closure = items5;
  VoicePanelDockButtonRimTsx1.__workletHash = 5567599437478;
  VoicePanelDockButtonRimTsx1.__initData = tmp10;
  const obj2 = { ref, style, onLayout: callback1, children: null };
  const items6 = [children, ];
  let tmp15 = null != first;
  const animatedStyle = _mod1652.useAnimatedStyle(VoicePanelDockButtonRimTsx1);
  if (tmp15) {
    tmp15 = null != memo;
  }
  if (tmp15) {
    const obj3 = { style: null, pointerEvents: "none", children: null };
    const items7 = [hasOwnProperty.absoluteFill, animatedStyle];
    obj3.style = items7;
    const obj4 = { style: hasOwnProperty.absoluteFill, children: null };
    const size = { width: null, height: null, cx: null, cy: null, strength: null };
    ({ width: obj5.width, height: obj5.height } = first);
    ({ cx: obj5.cx, cy: obj5.cy, strength: obj5.strength } = memo);
    obj4.children = metroImportDefault(closure_9, size);
    obj3.children = metroImportDefault(VoicePanelDockRimLight.VoicePanelDockRimLevel, obj4);
    tmp15 = metroImportDefault(_modDef1652.View, obj3);
  }
  items6[1] = tmp15;
  obj2.children = items6;
  return React5(timestampProducer, obj2);
});