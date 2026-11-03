// === Module 13784: CheckpointApngPlayer ===

// Module 13784 (CheckpointApngPlayer)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1357 */;
import FastImageDefault from "FastImage" /* 5837 */;
import APNGPlayer from "APNGPlayer" /* 9632 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
let closure_6 = createStyles.createStyles({ container: { alignItems: "center", justifyContent: "center" } });
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointApngPlayer.tsx");

export default function CheckpointApngPlayer(staticUri) {
  ({ animatedUri, style } = staticUri);
  const tmp = closure_6();
  items = [AccessibilityStore];
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
};