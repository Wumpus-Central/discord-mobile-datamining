// discord_app/modules/checkpoint/native/components/CheckpointApngPlayer.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import utils_PlatformUtils from "../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import APNGPlayer from "../../../image/native/APNGPlayer.android.tsx";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import CheckpointStore from "../../CheckpointStore.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
  const obj7 = {
    style: tmp.container,
    children: jsx(FastImageDefault, { source: { uri: uri.staticUri }, style, resizeMode: "cover" }),
  };
  obj3 = obj7;
  obj2 = initialize;
  const obj8 = { source: { uri: uri.staticUri }, style, resizeMode: "cover" };
}
