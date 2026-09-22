// === Module 11021: PremiumGiftPromotionDetails ===

// Module 11021 (PremiumGiftPromotionDetails)
import nativeDefault from "native" /* 576 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1973 */;
import Text_Text from "Text/Text" /* 4753 */;
import SKUPreview from "SKUPreview" /* 9057 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4749 */;

require = fn;
function PremiumGiftPromotionDetailsBase(arg0) {
  ({ titleVariant, titleColor, subtitleVariant, subtitleColor } = arg0);
  ({ style, graphic, topContent, title, subtitle } = arg0);
  const tmp = closure_10();
  const obj = { style: null, children: null };
  const items = [tmp.container, style];
  obj.style = items;
  const items1 = [graphic, ];
  const obj2 = { style: tmp.textContainer, children: null };
  const items2 = [topContent, , ];
  if (titleVariant == null) {
    titleVariant = "text-md/semibold";
  }
  const obj3 = { variant: titleVariant, color: null, children: null };
  if (titleColor == null) {
    titleColor = "text-default";
  }
  obj3.color = titleColor;
  obj3.children = title;
  items2[1] = React5(Text_Text.Text, obj3);
  if (subtitleVariant == null) {
    subtitleVariant = "text-sm/medium";
  }
  const obj4 = { variant: subtitleVariant, color: null, children: null };
  if (subtitleColor == null) {
    subtitleColor = "text-subtle";
  }
  obj4.color = subtitleColor;
  obj4.children = subtitle;
  items2[2] = React5(Text_Text.Text, obj4);
  obj2.children = items2;
  items1[1] = React6(View, obj2);
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
  const items = [AccessibilityStore];
  const stateFromStores = shouldAnimate(aPNGPlayerControls[8]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let num = null;
  const ref = noop.useRef(null);
  let obj = shouldAnimate(aPNGPlayerControls[8]);
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
      const obj3 = { ref, url: imageUrl, autoplay: false, style };
      let tmp13 = closure_7(tmp(tmp2[9]).APNGPlayer, obj3);
    }
    return tmp13;
  }
  tmp13 = closure_7(tmp9(tmp2[12]), { style, resizeMode: "contain", source: { uri: imageUrl } });
  const obj4 = { style, resizeMode: "contain", source: { uri: imageUrl } };
  tmpResult = shouldAnimate(aPNGPlayerControls[10]);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const PX_40 = nativeDefault.space.PX_40;
let createStyles = fn(4757);
let closure_10 = createStyles.createStyles(() => {
  const obj = { container: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 }, image: null, textContainer: null };
  const size = { width: PX_40, height: PX_40, borderRadius: nativeDefault.radii.xs };
  obj.image = size;
  obj.textContainer = { flex: 1 };
  return obj;
});
createStyles = fn(4757);
let obj3 = { preview: null };
let size = { width: PX_40, height: PX_40, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, border: { borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 }, overflow: "hidden" };
obj3.preview = size;
let closure_13 = createStyles.createStyles(obj3);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/components/PremiumGiftPromotionDetails.tsx");

export default function PremiumGiftPromotionDetails(imageUrl) {
  imageUrl = imageUrl.imageUrl;
  const merged = Object.assign(imageUrl, Object.assign({ imageUrl: 0, shouldAnimate: 0 }));
  let tmp3Result = null != imageUrl;
  if (tmp3Result) {
    const obj = { style: tmp2.image, imageUrl, shouldAnimate: imageUrl.shouldAnimate };
    tmp3Result = React5(AnimatedImage, obj);
  }
  const merged1 = Object.assign(merged);
  return React5(PremiumGiftPromotionDetailsBase, { graphic: tmp3Result });
};
export const PremiumGiftPromotionCollectibleRewardDetails = function PremiumGiftPromotionCollectibleRewardDetails(product) {
  product = product.product;
  require = product;
  const merged = Object.assign(product, Object.assign({ product: 0 }));
  const items = [product];
  const memo = noop.useMemo(() => {
    if (null != product) {
      if (0 !== product.items.length) {
        if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
          ({ items: obj2.items, previewAssets: obj2.previewAssets } = product);
          let obj = { type: "bundle", items: null, previewAssets: null };
          const obj3 = { type: "bundle", items: null, previewAssets: null };
        } else {
          obj = { type: "single", item: product.items[0] };
        }
        return obj;
      }
    }
  }, items);
  if (null == memo) {
    const obj2 = { graphic: tmp6 };
    const merged1 = Object.assign(merged);
    return closure_7(tmp5, obj2);
  } else {
    let obj = { style: tmp2.preview, children: null };
    let obj3 = { collectiblesItemData: memo, size: null };
    if ("bundle" === memo.type) {
      const _Math2 = Math;
      let rounded = Math.floor(1.2 * PX_40);
    } else {
      rounded = PX_40;
      if (memo.item.type === tmp8(1973).CollectiblesItemType.AVATAR_DECORATION) {
        const _Math = Math;
        rounded = Math.floor(1.5 * PX_40);
      }
    }
    obj3.size = rounded;
    obj3 = closure_7(SKUPreview.CollectiblesPreview, obj3);
    obj.children = obj3;
    closure_7(View, obj);
    tmp8 = require;
  }
  tmp2 = closure_13();
};