// === Module 14163: CheckpointApngPlayer ===

// Module 14163 (CheckpointApngPlayer)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import initialize from "initialize" /* 504 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1357 */;
import FastImageDefault from "FastImage" /* 5957 */;
import APNGPlayer from "APNGPlayer" /* 9431 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import CheckpointStore from "CheckpointStore" /* 14146 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
let closure_7 = createStyles.createStyles({ container: { alignItems: "center", justifyContent: "center" } });
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointApngPlayer.tsx");

export default function CheckpointApngPlayer(uri) {
  ({ animatedUri, style } = uri);
  const tmp = closure_7();
  items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [CheckpointStore];
  if (!stateFromStores) {
    if (!obj2.useStateFromStores(items1, () => compactAssets.compactAssets)) {
      let obj3 = { style: tmp.container, children: null };
      if (tmp2Result.isIOS()) {
        const obj4 = { source: null, style: null, resizeMode: "cover" };
        const obj5 = { uri: animatedUri };
        obj4.source = obj5;
        obj4.style = style;
        let tmp5Result = jsx(FastImageDefault, { source: null, style: null, resizeMode: "cover" });
      } else {
        const obj6 = { url: animatedUri, autoplay: true, style };
        tmp5Result = jsx(APNGPlayer.APNGPlayer, { url: animatedUri, autoplay: true, style });
      }
      obj3.children = tmp5Result;
      tmp2Result = utils_PlatformUtils;
    }
    return <tmp6 {...obj3} />;
  }
  const obj7 = { style: tmp.container, children: jsx(FastImageDefault, { source: { uri: uri.staticUri }, style, resizeMode: "cover" }) };
  obj3 = obj7;
  obj2 = initialize;
  const obj8 = { source: { uri: uri.staticUri }, style, resizeMode: "cover" };
};