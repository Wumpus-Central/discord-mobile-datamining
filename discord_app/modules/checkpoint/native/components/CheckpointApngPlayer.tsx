// === Module 12977: CheckpointApngPlayer ===

// Module 12977 (CheckpointApngPlayer)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1385 */;
import FastImageDefault from "FastImage" /* 5669 */;
import APNGPlayer from "APNGPlayer" /* 9401 */;
import AccessibilityStore from "AccessibilityStore" /* 4972 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
let closure_6 = createStyles.createStyles({ container: { alignItems: "center", justifyContent: "center" } });
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointApngPlayer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointApngPlayer(arg0) {
  const cResult = c.c(16);
  ({ animatedUri, staticUri, style } = arg0);
  let container = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function u() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (tmpResult.useStateFromStores(tmp4, tmp5)) {
    if (cResult[2] !== staticUri) {
      const obj2 = { uri: staticUri };
      cResult[2] = staticUri;
      cResult[3] = obj2;
      let tmp16 = obj2;
    } else {
      tmp16 = cResult[3];
    }
    if (cResult[4] === style) {
      if (cResult[5] === tmp16) {
        let tmp17 = cResult[6];
      }
      if (cResult[7] === container.container) {
      }
      const obj3 = { style: container.container, children: tmp17 };
      const tmp24 = <View style={container.container}>{tmp17}</View>;
      container = container.container;
      cResult[7] = container;
      cResult[8] = tmp17;
      cResult[9] = tmp24;
    }
    const obj4 = { source: tmp16, style, resizeMode: "cover" };
    const tmp20 = jsx(FastImageDefault, { source: tmp16, style, resizeMode: "cover" });
    cResult[4] = style;
    cResult[5] = tmp16;
    cResult[6] = tmp20;
    tmp17 = tmp20;
  } else {
    if (cResult[10] === animatedUri) {
      if (cResult[11] === style) {
        if (cResult[13] === container.container) {
          if (cResult[14] === tmp7) {
            let tmp12 = cResult[15];
          }
          return tmp12;
        }
        const obj5 = { style: container.container, children: cResult[12] };
        const tmp15 = <View style={container.container}>{cResult[12]}</View>;
        cResult[13] = container.container;
        cResult[14] = cResult[12];
        cResult[15] = tmp15;
        tmp12 = tmp15;
      }
    }
    if (tmpResult2.isIOS()) {
      const obj6 = { source: null, style: null, resizeMode: "cover" };
      const obj7 = { uri: animatedUri };
      obj6.source = obj7;
      obj6.style = style;
      let tmp8Result = jsx(FastImageDefault, { source: null, style: null, resizeMode: "cover" });
    } else {
      const obj8 = { url: animatedUri, autoplay: true, style };
      tmp8Result = jsx(APNGPlayer.APNGPlayer, { url: animatedUri, autoplay: true, style });
    }
    cResult[10] = animatedUri;
    cResult[11] = style;
    cResult[12] = tmp8Result;
    tmpResult2 = utils_PlatformUtils;
  }
  tmpResult = initialize;
}) : (function CheckpointApngPlayer(staticUri) {
  ({ animatedUri, style } = staticUri);
  const tmp = closure_6();
  const items = [AccessibilityStore];
  const obj2 = { style: tmp.container, children: null };
  if (obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion)) {
    const obj3 = { source: null, style: null, resizeMode: "cover" };
    const obj4 = { uri: staticUri.staticUri };
    obj3.source = obj4;
    obj3.style = style;
    obj2.children = jsx(FastImageDefault, { source: null, style: null, resizeMode: "cover" });
    let tmp8 = obj2;
  } else {
    if (tmp2Result.isIOS()) {
      const obj5 = { source: null, style: null, resizeMode: "cover" };
      const obj6 = { uri: animatedUri };
      obj5.source = obj6;
      obj5.style = style;
      let tmp4Result = jsx(FastImageDefault, { source: null, style: null, resizeMode: "cover" });
    } else {
      const obj7 = { url: animatedUri, autoplay: true, style };
      tmp4Result = jsx(APNGPlayer.APNGPlayer, { url: animatedUri, autoplay: true, style });
    }
    obj2.children = tmp4Result;
    tmp8 = obj2;
    tmp2Result = utils_PlatformUtils;
  }
  return <View {...tmp8} />;
});