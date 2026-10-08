// === Module 15161: BountiesBannerBackground ===

// Module 15161 (BountiesBannerBackground)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import LinearGradientDefault from "LinearGradient" /* 5387 */;
import common_Video from "common/Video" /* 8401 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const locations = [0, 0.6];
const colors = ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesBannerBackground.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function BountiesBannerBackground(arg0) {
  const cResult = c.c(12);
  ({ children, style, uri } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function c() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== uri) {
    const obj2 = { uri };
    cResult[2] = uri;
    cResult[3] = obj2;
    let tmp8 = obj2;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === tmp8) {
    if (cResult[5] === stateFromStores) {
      let tmp9 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { colors, locations, style: React3.absoluteFillObject };
      const tmp17 = timestampProducer(LinearGradientDefault, obj3);
      cResult[7] = tmp17;
      let tmp11 = tmp17;
    } else {
      tmp11 = cResult[7];
    }
    if (cResult[8] === children) {
      if (cResult[9] === style) {
        if (cResult[10] === tmp9) {
          let tmp18 = cResult[11];
        }
        return tmp18;
      }
    }
    const obj4 = { style, children: null };
    const items1 = [tmp9, tmp11, children];
    obj4.children = items1;
    const tmp21 = React5(React4, obj4);
    cResult[8] = children;
    cResult[9] = style;
    cResult[10] = tmp9;
    cResult[11] = tmp21;
    tmp18 = tmp21;
  }
  const tmp10 = timestampProducer(common_Video.VideoComponent, { source: tmp8, style: React3.absoluteFillObject, resizeMode: "cover", muted: true, disableFocus: true, paused: stateFromStores, importantForAccessibility: "no-hide-descendants" });
  cResult[4] = tmp8;
  cResult[5] = stateFromStores;
  cResult[6] = tmp10;
  tmp9 = tmp10;
  const obj5 = { source: tmp8, style: React3.absoluteFillObject, resizeMode: "cover", muted: true, disableFocus: true, paused: stateFromStores, importantForAccessibility: "no-hide-descendants" };
  const tmpResult = initialize;
}) : (function BountiesBannerBackground(arg0) {
  ({ children, style, uri } = arg0);
  const items = [AccessibilityStore];
  const obj2 = { style, children: null };
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [timestampProducer(common_Video.VideoComponent, { source: { uri }, style: React3.absoluteFillObject, resizeMode: "cover", muted: true, disableFocus: true, paused: stateFromStores, importantForAccessibility: "no-hide-descendants" }), timestampProducer(LinearGradientDefault, { colors, locations, style: React3.absoluteFillObject }), children];
  obj2.children = items1;
  return React5(React4, obj2);
}));