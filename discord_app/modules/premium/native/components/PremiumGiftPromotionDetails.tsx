// discord_app/modules/premium/native/components/PremiumGiftPromotionDetails.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";

let error;
let metroImportAll;
const require = arg1;
function AnimatedImage(arg0) {
  let imageUrl;
  let shouldAnimate;
  let style;
  ({ imageUrl, style, shouldAnimate } = arg0);
  if (shouldAnimate === undefined) {
    shouldAnimate = true;
  }
  let stateFromStores;
  let aPNGPlayerControls;
  let first;
  let React;
  let obj = shouldAnimate(aPNGPlayerControls[7]);
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
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
}
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let closure_9 = createCacheKey.createStyles(() => {
  let obj = { container: null, image: null, textContainer: null };
  obj = { flexDirection: "row", alignItems: "center", gap: Themes.space.PX_12 };
  obj[0] = obj;
  obj = { width: Themes.space.PX_40, height: Themes.space.PX_40, borderRadius: Themes.radii.xs };
  obj[1] = obj;
  obj[2] = { flex: 1 };
  return obj;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/native/components/PremiumGiftPromotionDetails.tsx");

export default function PremiumGiftPromotionDetails(imageUrl) {
  let shouldAnimate;
  let subtitle;
  let title;
  imageUrl = imageUrl.imageUrl;
  ({ title, subtitle, shouldAnimate } = imageUrl);
  const tmp = callback2();
  let obj = { style: tmp.container, children: null };
  let tmp4 = null != imageUrl;
  if (tmp4) {
    obj = { style: null, imageUrl: null, shouldAnimate: null };
    obj[0] = tmp.image;
    obj[1] = imageUrl;
    obj[2] = shouldAnimate;
    tmp4 = callback(AnimatedImage, obj);
  }
  const items = [tmp4, ];
  obj = { style: tmp.textContainer, children: null };
  const items1 = [callback(Text.Text, { variant: "text-md/bold", color: "text-default", children: title }), callback(Text.Text, { variant: "text-sm/medium", color: "text-default", children: subtitle })];
  obj[1] = items1;
  items[1] = closure_8(View, obj);
  obj[1] = items;
  return closure_8(View, obj);
};