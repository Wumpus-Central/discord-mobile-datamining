// === Module 12976: ConjureHomeBackdrop ===

// Module 12976 (ConjureHomeBackdrop)
import nativeDefault from "native" /* 575 */;
import useTheme from "useTheme" /* 5253 */;
import LinearGradientDefault from "LinearGradient" /* 5587 */;
import useToken from "useToken" /* 5596 */;
import inlineStyles from "inlineStyles" /* 8031 */;
import noop from "module_19" /* 19 */;

const inlineStylesDefault = inlineStyles;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const colors = ["rgb(42, 45, 83)", "rgb(83, 39, 75)"];
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
let size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/home/native/ConjureHomeBackdrop.tsx");

export default noop.memo(function ConjureHomeBackdrop() {
  const theme = useTheme.useTheme();
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  let tmp6 = null;
  if (obj3.isThemeDark(theme)) {
    const obj4 = { style: React3.absoluteFill, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    const obj5 = { style: React3.absoluteFill, colors, start, end };
    const items = [hasOwnProperty(LinearGradientDefault, obj5), ];
    const size = { style: React3.absoluteFill, width: "100%", height: "100%", children: null };
    const obj6 = { children: null };
    const obj7 = { id: "conjureHomeBackdropFalloff", cx: "0.5", cy: "1", rx: "1", ry: "1.04", fx: "0.5", fy: "1", children: null };
    const obj8 = { offset: "0.39", stopColor: token, stopOpacity: 1 };
    const items1 = [hasOwnProperty(inlineStyles.Stop, obj8), ];
    const obj9 = { offset: "1", stopColor: token, stopOpacity: 0 };
    items1[1] = hasOwnProperty(inlineStyles.Stop, obj9);
    obj7.children = items1;
    obj6.children = timestampProducer(inlineStyles.RadialGradient, obj7);
    const items2 = [hasOwnProperty(inlineStyles.Defs, obj6), hasOwnProperty(inlineStyles.Rect, { width: "100%", height: "100%", fill: "url(#conjureHomeBackdropFalloff)" })];
    size.children = items2;
    items[1] = timestampProducer(inlineStylesDefault, size);
    obj4.children = items;
    tmp6 = timestampProducer(React4, obj4);
    const tmp4Result = inlineStylesDefault;
  }
  return tmp6;
});