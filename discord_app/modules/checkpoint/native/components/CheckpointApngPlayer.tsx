// === Module 14273: CheckpointApngPlayer ===

// Module 14273 (CheckpointApngPlayer)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import initialize from "initialize" /* 504 */;
import FastImageDefault from "FastImage" /* 6020 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import CheckpointStore from "CheckpointStore" /* 14253 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
let closure_7 = createStyles.createStyles({ container: { alignItems: "center", justifyContent: "center" } });
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointApngPlayer.tsx");

export default function CheckpointApngPlayer(style) {
  style = style.style;
  ({ animatedUri, staticUri } = style);
  const tmp = closure_7();
  items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [CheckpointStore];
  if (!stateFromStores) {
    if (!obj2.useStateFromStores(items1, () => compactAssets.compactAssets)) {
      let obj3 = { style: tmp.container, children: null };
      const obj4 = { source: null, style: null, resizeMode: "cover" };
      const obj5 = { uri: animatedUri };
      obj4.source = obj5;
      obj4.style = style;
      obj3.children = jsx(FastImageDefault, { source: null, style: null, resizeMode: "cover" });
    }
    return <tmp5 {...obj3} />;
  }
  const obj6 = { style: tmp.container, children: jsx(FastImageDefault, { source: { uri: staticUri }, style, resizeMode: "cover" }) };
  obj3 = obj6;
  obj2 = initialize;
  const obj7 = { source: { uri: staticUri }, style, resizeMode: "cover" };
};