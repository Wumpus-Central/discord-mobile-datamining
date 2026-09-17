// discord_app/modules/checkpoint/native/components/CheckpointApngPlayer.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import APNGPlayer from "../../../image/native/APNGPlayer.android.tsx";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
}
