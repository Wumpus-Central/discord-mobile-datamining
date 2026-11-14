// discord_app/modules/checkpoint/native/components/CheckpointApngPlayer.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import CheckpointStore from "../../CheckpointStore.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
  const obj6 = {
    style: tmp.container,
    children: jsx(FastImageDefault, { source: { uri: staticUri }, style, resizeMode: "cover" }),
  };
  obj3 = obj6;
  obj2 = initialize;
  const obj7 = { source: { uri: staticUri }, style, resizeMode: "cover" };
}
