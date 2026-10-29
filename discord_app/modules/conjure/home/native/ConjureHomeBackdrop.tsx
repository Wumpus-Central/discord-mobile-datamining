// === Module 12792: ConjureHomeBackdrop ===

// Module 12792 (ConjureHomeBackdrop)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import design_shared from "design/shared" /* 5013 */;
import useTheme from "useTheme" /* 5242 */;
import useToken from "useToken" /* 5289 */;
import inlineStyles from "inlineStyles" /* 8017 */;
import noop from "module_19" /* 19 */;

const LinearGradientDefault = tmp5(5295);
const inlineStylesDefault = tmp5(8017);
require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const colors = ["rgb(42, 45, 83)", "rgb(83, 39, 75)"];
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/home/native/ConjureHomeBackdrop.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureHomeBackdrop() {
  let tmp2 = dependencyMap;
  const cResult = c.c(6);
  const theme = useTheme.useTheme();
  let tmp5 = importDefault;
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  if (!obj4.isThemeDark(theme)) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { style: React3.absoluteFill, colors, start, end };
      const tmp14 = hasOwnProperty(LinearGradientDefault, obj5);
      cResult[0] = tmp14;
      let first = tmp14;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== token) {
      const obj6 = { children: null };
      const obj7 = { id: "conjureHomeBackdropFalloff", cx: "0.5", cy: "1", rx: "1", ry: "1.04", fx: "0.5", fy: "1", children: null };
      const obj8 = { offset: "0.39", stopColor: token, stopOpacity: 1 };
      const items = [hasOwnProperty(inlineStyles.Stop, obj8), ];
      const obj9 = { offset: "1", stopColor: token, stopOpacity: 0 };
      items[1] = hasOwnProperty(inlineStyles.Stop, obj9);
      obj7.children = items;
      obj6.children = timestampProducer(inlineStyles.RadialGradient, obj7);
      const tmp18 = hasOwnProperty(inlineStyles.Defs, obj6);
      cResult[1] = token;
      cResult[2] = tmp18;
      let tmp15 = tmp18;
    } else {
      tmp15 = cResult[2];
    }
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp21 = hasOwnProperty(inlineStyles.Rect, { width: "100%", height: "100%", fill: "url(#conjureHomeBackdropFalloff)" });
      cResult[3] = tmp21;
      let tmp19 = tmp21;
    } else {
      tmp19 = cResult[3];
    }
    if (cResult[4] !== tmp15) {
      const obj10 = { style: React3.absoluteFill, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
      const items1 = [first, ];
      tmp5 = inlineStylesDefault;
      const size = { style: React3.absoluteFill, width: "100%", height: "100%", children: null };
      const items2 = [tmp15, tmp19];
      size.children = items2;
      tmp2 = timestampProducer(tmp5, size);
      items1[1] = tmp2;
      obj10.children = items1;
      const tmp26 = timestampProducer(React4, obj10);
      cResult[4] = tmp15;
      cResult[5] = tmp26;
    }
  }
  obj4 = design_shared;
}) : (function ConjureHomeBackdrop() {
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
}));