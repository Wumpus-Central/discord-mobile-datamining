// === Module 13237: ConjureNumberBadge ===

// Module 13237 (ConjureNumberBadge)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import LinearGradientDefault from "LinearGradient" /* 5715 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let items = [nativeDefault.unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1, nativeDefault.unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_2, nativeDefault.unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_3];
const start = { x: 0, y: 0 };
const end = { x: 1, y: 1 };
const createStyles = fn(5140);
let obj2 = { root: { borderRadius: nativeDefault.space.PX_8, overflow: "hidden" }, badge: { backgroundColor: "transparent" }, number: null };
const obj3 = { borderRadius: nativeDefault.space.PX_8, overflow: "hidden" };
obj2.number = { textShadowColor: nativeDefault.unsafe_rawColors.OPACITY_BLACK_40, textShadowOffset: { width: 0, height: 1 }, textShadowRadius: 2 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureNumberBadge.tsx");

export default function ConjureNumberBadge(value) {
  value = value.value;
  const tmp = closure_10();
  let tmp2 = null;
  if (value > 0) {
    const obj = { style: tmp.root, children: null };
    const obj2 = { colors: items, start, end, style: absoluteFill.absoluteFill };
    items = [hasOwnProperty(LinearGradientDefault, obj2), ];
    const obj5 = { value, style: null, textStyle: null };
    ({ badge: obj3.style, number: obj3.textStyle } = tmp);
    items[1] = hasOwnProperty(native.Badge, obj5);
    obj.children = items;
    tmp2 = timestampProducer(React4, obj);
  }
  return tmp2;
};