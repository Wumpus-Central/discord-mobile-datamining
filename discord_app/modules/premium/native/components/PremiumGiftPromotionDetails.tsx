// discord_app/modules/premium/native/components/PremiumGiftPromotionDetails.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import CollectiblesPreview from "../../../skus/native/SKUPreview.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../a11y/AccessibilityStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function PremiumGiftPromotionDetailsBase(arg0) {
  ({ titleVariant, titleColor, subtitleVariant, subtitleColor } = arg0);
  ({ style, graphic, title, subtitle } = arg0);
  const tmp = callback2();
  let obj = { style: items, children: null };
  items = [tmp.container, style];
  const items1 = [graphic];
  obj = { style: tmp.textContainer, children: null };
  if (titleVariant == null) {
    titleVariant = "text-md/semibold";
  }
  obj = { variant: titleVariant, color: null, children: null };
  if (titleColor == null) {
    titleColor = "text-default";
  }
  obj[1] = titleColor;
  obj[2] = title;
  const items2 = [closure_7(Text.Text, obj)];
  if (subtitleVariant == null) {
    subtitleVariant = "text-sm/medium";
  }
  obj1 = { variant: subtitleVariant, color: null, children: null };
  if (subtitleColor == null) {
    subtitleColor = "text-subtle";
  }
  obj1[1] = subtitleColor;
  obj1[2] = subtitle;
  items2[1] = closure_7(Text.Text, obj1);
  obj[1] = items2;
  items1[1] = closure_8(View, obj);
  obj[1] = items1;
  return closure_8(View, obj);
}
function AnimatedImage(arg0) {
  ({ imageUrl, style, shouldAnimate } = arg0);
  if (shouldAnimate === undefined) {
    shouldAnimate = true;
  }
  let stateFromStores;
  let aPNGPlayerControls;
  let first;
  let React;
  let obj = shouldAnimate(aPNGPlayerControls[8]);
  const items = [closure_6];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let num = null;
  const ref = React.useRef(null);
  aPNGPlayerControls = shouldAnimate(aPNGPlayerControls[9]).useAPNGPlayerControls(ref);
  const tmp6 = first(React.useState(false), 2);
  first = tmp6[0];
  React = tmp6[1];
  const items1 = [shouldAnimate, aPNGPlayerControls, stateFromStores];
  const effect = React.useEffect(() => {
    let isAndroidResult = shouldAnimate(aPNGPlayerControls[10]).isAndroid();
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
  const obj2 = shouldAnimate(aPNGPlayerControls[9]);
  const tmp9 = stateFromStores;
  if (first) {
    num = 100;
  }
  stateFromStores(aPNGPlayerControls[11])(() => {
    if (first) {
      aPNGPlayerControls.play();
    }
  }, num);
  const tmp10 = stateFromStores(aPNGPlayerControls[11]);
  if (tmpResult.isAndroid()) {
    if (!stateFromStores) {
      obj = { ref: null, url: null, autoplay: false, style: null };
      obj[0] = ref;
      obj[1] = imageUrl;
      obj[3] = style;
      let tmp13 = callback(tmp(tmp2[9]).APNGPlayer, obj);
    }
    return tmp13;
  }
  tmp13 = callback(tmp9(tmp2[12]), { style, resizeMode: "contain", source: { uri: imageUrl } });
}
({ jsx: error, jsxs: closure_8 } = jsxProd);
const PX_40 = ThemesDefault.space.PX_40;
let closure_10 = createCacheKey.createStyles(() => {
  let obj = { container: null, image: null, textContainer: null };
  obj = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_12 };
  obj[0] = obj;
  obj = { width: PX_40, height: PX_40, borderRadius: ThemesDefault.radii.xs };
  obj[1] = obj;
  obj[2] = { flex: 1 };
  return obj;
});
createCacheKey = { preview: null };
createCacheKey = {
  width: PX_40,
  height: PX_40,
  borderRadius: ThemesDefault.radii.xs,
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE,
  border: null,
  overflow: "hidden",
};
createCacheKey = { borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 };
createCacheKey[4] = createCacheKey;
createCacheKey[0] = createCacheKey;
let closure_13 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting(
  "modules/premium/native/components/PremiumGiftPromotionDetails.tsx",
);

export default function PremiumGiftPromotionDetails(imageUrl) {
  imageUrl = imageUrl.imageUrl;
  const merged = Object.assign(imageUrl, Object.create(null));
  let tmp3Result = null != imageUrl;
  if (tmp3Result) {
    let obj = { style: null, imageUrl: null, shouldAnimate: null };
    obj[0] = tmp2.image;
    obj[1] = imageUrl;
    obj[2] = imageUrl.shouldAnimate;
    tmp3Result = tmp3(AnimatedImage, obj);
  }
  obj = { graphic: tmp3Result };
  const merged1 = Object.assign(merged);
  return closure_7(PremiumGiftPromotionDetailsBase, obj);
}
export const PremiumGiftPromotionCollectibleRewardDetails = function PremiumGiftPromotionCollectibleRewardDetails(
  product,
) {
  product = product.product;
  require = product;
  const merged = Object.assign(product, Object.create(null));
  const items = [product];
  const memo = React.useMemo(() => {
    if (null != closure_0) {
      if (0 !== tmp.items.length) {
        if (tmp.type === product(closure_1_2[13]).CollectiblesItemType.BUNDLE) {
          let obj = { type: "bundle", items: null, previewAssets: null };
          ({ items: obj2[1], previewAssets: obj2[2] } = tmp);
        } else {
          obj = { type: "single", item: null };
          obj[1] = tmp.items[0];
        }
        return obj;
      }
    }
  }, items);
  if (null == memo) {
    let obj = { graphic: null };
    obj[0] = tmp6;
    const merged1 = Object.assign(merged);
    return tmp4(tmp5, obj);
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp2.preview;
    obj = { collectiblesItemData: null, size: null };
    obj[0] = memo;
    if ("bundle" === memo.type) {
      const _Math2 = Math;
      let rounded = Math.floor(1.2 * tmp10);
    } else {
      rounded = tmp10;
      if (memo.item.type === tmp8(1889).CollectiblesItemType.AVATAR_DECORATION) {
        const _Math = Math;
        rounded = Math.floor(1.5 * tmp10);
      }
    }
    obj[1] = rounded;
    obj = tmp4(CollectiblesPreview.CollectiblesPreview, obj);
    obj[1] = obj;
    tmp4(View, obj);
    const tmp7 = View;
    tmp8 = require;
  }
};
