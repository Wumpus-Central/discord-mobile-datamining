// === Module 15989: CheckpointApngPlayer ===

// Module 15989 (CheckpointApngPlayer)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import initialize from "initialize" /* 504 */;
import FastImageDefault from "FastImage" /* 5804 */;
import APNGPlayer from "APNGPlayer" /* 9089 */;
import AccessibilityStore from "AccessibilityStore" /* 4748 */;
import createStyles from "createStyles" /* 4756 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
let closure_6 = createStyles.createStyles({ container: { alignItems: "center", justifyContent: "center" } });
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointApngPlayer.tsx");

export default function CheckpointApngPlayer(arg0) {
  ({ uri, style } = arg0);
  const tmp = closure_6();
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = { style: tmp.container, children: null };
  if (obj3.isIOS()) {
    const obj4 = { source: null, style: null, resizeMode: "cover", enableAnimation: null };
    const obj5 = { uri };
    obj4.source = obj5;
    obj4.style = style;
    obj4.enableAnimation = !stateFromStores;
    let tmp5Result = jsx(FastImageDefault, { source: null, style: null, resizeMode: "cover", enableAnimation: null });
  } else {
    const obj6 = { url: uri, autoplay: !stateFromStores, style };
    tmp5Result = jsx(APNGPlayer.APNGPlayer, { url: uri, autoplay: !stateFromStores, style });
  }
  obj2.children = tmp5Result;
  return <View style={tmp.container}>{null}</View>;
};