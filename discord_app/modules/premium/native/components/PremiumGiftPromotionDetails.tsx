// discord_app/modules/premium/native/components/PremiumGiftPromotionDetails.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_PlatformUtils from "../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import CollectiblesItemType from "../../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import SKUPreview from "../../../skus/native/SKUPreview.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
function PremiumGiftPromotionDetailsBase(arg0) {
  ({ titleVariant, titleColor, subtitleVariant, subtitleColor } = arg0);
  ({ style, graphic, title, subtitle } = arg0);
  const tmp = closure_10();
  let obj = { style: null, children: null };
  const items = [tmp.container, style];
  obj.style = items;
  const items1 = [graphic];
  obj = { style: tmp.textContainer, children: null };
  if (titleVariant == null) {
    titleVariant = "text-md/semibold";
  }
  obj = { variant: titleVariant, color: null, children: null };
  if (titleColor == null) {
    titleColor = "text-default";
  }
  obj.color = titleColor;
  obj.children = title;
  const items2 = [React5(Text_Text.Text, obj)];
  if (subtitleVariant == null) {
    subtitleVariant = "text-sm/medium";
  }
  const obj1 = { variant: subtitleVariant, color: null, children: null };
  if (subtitleColor == null) {
    subtitleColor = "text-subtle";
  }
  obj1.color = subtitleColor;
  obj1.children = subtitle;
  items2[1] = React5(Text_Text.Text, obj1);
  obj.children = items2;
  items1[1] = React6(View, obj);
  obj.children = items1;
  return React6(View, obj);
}
function AnimatedImage(arg0) {
  ({ imageUrl, style, shouldAnimate } = arg0);
  if (shouldAnimate === undefined) {
    shouldAnimate = true;
  }
  let aPNGPlayerControls;
  let first;
  noop = undefined;
  let obj = shouldAnimate(aPNGPlayerControls[8]);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let num = null;
  const ref = noop.useRef(null);
  aPNGPlayerControls = shouldAnimate(aPNGPlayerControls[9]).useAPNGPlayerControls(ref);
  const tmp6 = first(noop.useState(false), 2);
  first = tmp6[0];
  noop = tmp6[1];
  const items1 = [shouldAnimate, aPNGPlayerControls, stateFromStores];
  const effect = noop.useEffect(() => {
    let isAndroidResult = utils_PlatformUtils.isAndroid();
    if (isAndroidResult) {
      isAndroidResult = !stateFromStores;
    }
    if (isAndroidResult) {
      if (shouldAnimate) {
        aPNGPlayerControls.seek(0);
        closure_4(true);
      } else {
        closure_4(false);
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
      obj = { ref, url: imageUrl, autoplay: false, style };
      let tmp13 = closure_7(tmp(tmp2[9]).APNGPlayer, obj);
    }
    return tmp13;
  }
  obj = { style, resizeMode: "contain", source: { uri: imageUrl } };
  tmp13 = closure_7(tmp9(tmp2[12]), obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const PX_40 = nativeDefault.space.PX_40;
let createStyles = fn(4560);
let closure_10 = createStyles.createStyles(() => {
  let obj = { container: null, image: null, textContainer: null };
  obj = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
  obj.container = obj;
  const size = { width: PX_40, height: PX_40, borderRadius: nativeDefault.radii.xs };
  obj.image = size;
  obj.textContainer = { flex: 1 };
  return obj;
});
fn(4560);
createStyles = { preview: null };
let size = {
  width: PX_40,
  height: PX_40,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  border: null,
  overflow: "hidden",
};
createStyles = { borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 };
size.border = createStyles;
createStyles.preview = size;
let closure_13 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/components/PremiumGiftPromotionDetails.tsx");

export default function PremiumGiftPromotionDetails(imageUrl) {
  imageUrl = imageUrl.imageUrl;
  const merged = Object.assign(imageUrl, Object.assign({ imageUrl: 0, shouldAnimate: 0 }));
  let tmp3Result = null != imageUrl;
  if (tmp3Result) {
    let obj = { style: tmp2.image, imageUrl, shouldAnimate: imageUrl.shouldAnimate };
    tmp3Result = tmp3(AnimatedImage, obj);
  }
  obj = { graphic: tmp3Result };
  const merged1 = Object.assign(merged);
  return React5(PremiumGiftPromotionDetailsBase, obj);
}
export const PremiumGiftPromotionCollectibleRewardDetails = function PremiumGiftPromotionCollectibleRewardDetails(
  product,
) {
  product = product.product;
  require = product;
  const merged = Object.assign(product, Object.assign({ product: 0 }));
  const items = [product];
  const memo = noop.useMemo(() => {
    if (null != product) {
      if (0 !== tmp.items.length) {
        if (tmp.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
          let obj = { type: "bundle", items: null, previewAssets: null };
          ({ items: obj2.items, previewAssets: obj2.previewAssets } = tmp);
        } else {
          obj = { type: "single", item: tmp.items[0] };
        }
        return obj;
      }
    }
  }, items);
  if (null == memo) {
    let obj = { graphic: tmp6 };
    const merged1 = Object.assign(merged);
    return tmp4(tmp5, obj);
  } else {
    obj = { style: tmp2.preview, children: null };
    obj = { collectiblesItemData: memo, size: null };
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
    obj.size = rounded;
    obj = tmp4(SKUPreview.CollectiblesPreview, obj);
    obj.children = obj;
    tmp4(View, obj);
    tmp8 = require;
  }
};
