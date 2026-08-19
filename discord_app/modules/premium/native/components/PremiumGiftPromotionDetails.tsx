// discord_app/modules/premium/native/components/PremiumGiftPromotionDetails.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import maybeApplyNoTextColorForLightCustomTheme from "../../../a11y/AccessibilityStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = fn;
function AnimatedImage(arg0) {
  ({ imageUrl, style, shouldAnimate } = arg0);
  if (shouldAnimate === undefined) {
    shouldAnimate = true;
  }
  let aPNGPlayerControls;
  let first;
  let React;
  let obj = shouldAnimate(aPNGPlayerControls[7]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let num = null;
  const ref = React.useRef(null);
  aPNGPlayerControls = shouldAnimate(aPNGPlayerControls[8]).useAPNGPlayerControls(ref);
  const tmp6 = first(React.useState(false), 2);
  first = tmp6[0];
  React = tmp6[1];
  const items1 = [shouldAnimate, aPNGPlayerControls, stateFromStores];
  const effect = React.useEffect(() => {
    let isAndroidResult = shouldAnimate(aPNGPlayerControls[9]).isAndroid();
    if (isAndroidResult) {
      isAndroidResult = !stateFromStores;
    }
    if (isAndroidResult) {
      if (shouldAnimate) {
        aPNGPlayerControls.seek(0);
        callback(true);
      } else {
        callback(false);
        aPNGPlayerControls.stop();
      }
    }
    const obj = shouldAnimate(aPNGPlayerControls[9]);
  }, items1);
  const obj2 = shouldAnimate(aPNGPlayerControls[8]);
  const tmp9 = stateFromStores;
  if (first) {
    num = 100;
  }
  stateFromStores(aPNGPlayerControls[10])(() => {
    if (first) {
      aPNGPlayerControls.play();
    }
  }, num);
  const tmp10 = stateFromStores(aPNGPlayerControls[10]);
  if (tmpResult.isAndroid()) {
    if (!stateFromStores) {
      obj = { ref: null, url: null, autoplay: false, style: null };
      obj[0] = ref;
      obj[1] = imageUrl;
      obj[3] = style;
      let tmp13 = callback(tmp(tmp2[8]).APNGPlayer, obj);
    }
    return tmp13;
  }
  tmp13 = callback(tmp9(tmp2[11]), { style, resizeMode: "contain", source: { uri: imageUrl } });
  tmpResult = shouldAnimate(aPNGPlayerControls[9]);
}
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles(() => {
  let obj = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_12 };
  obj[0] = obj;
  obj = { width: ThemesDefault.space.PX_40, height: ThemesDefault.space.PX_40, borderRadius: ThemesDefault.radii.xs };
  obj[1] = obj;
  obj[2] = { flex: 1 };
  return obj;
});
const result = require("obj132").fileFinishedImporting("modules/premium/native/components/PremiumGiftPromotionDetails.tsx");

export default function PremiumGiftPromotionDetails(imageUrl) {
  imageUrl = imageUrl.imageUrl;
  ({ style, title, subtitle, shouldAnimate } = imageUrl);
  const tmp = callback2();
  let obj = { style: items, children: null };
  items = [tmp.container, style];
  let tmp4 = null != imageUrl;
  if (tmp4) {
    obj = { style: null, imageUrl: null, shouldAnimate: null };
    obj[0] = tmp.image;
    obj[1] = imageUrl;
    obj[2] = shouldAnimate;
    tmp4 = callback(AnimatedImage, obj);
  }
  const items1 = [tmp4, ];
  obj = { style: tmp.textContainer, children: null };
  const items2 = [callback(Text.Text, { variant: "text-md/bold", color: "text-default", children: title }), callback(Text.Text, { variant: "text-sm/medium", color: "text-default", children: subtitle })];
  obj[1] = items2;
  items1[1] = callback(View, obj);
  obj[1] = items1;
  return callback(View, obj);
};