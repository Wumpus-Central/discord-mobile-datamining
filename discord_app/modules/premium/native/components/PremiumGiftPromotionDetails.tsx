// === Module 11686: PremiumGiftPromotionDetails ===

// Module 11686 (PremiumGiftPromotionDetails)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import CollectiblesItemType from "CollectiblesItemType" /* 2114 */;
import Text_Text from "Text/Text" /* 5929 */;
import FastImageDefault from "FastImage" /* 6020 */;
import SKUPreview from "SKUPreview" /* 9462 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;

require = fn;
function PremiumGiftPromotionDetailsBase(arg0) {
  ({ titleVariant, titleColor, subtitleVariant, subtitleColor } = arg0);
  ({ style, graphic, topContent, title, subtitle } = arg0);
  const tmp = closure_9();
  const obj = { style: null, children: null };
  items = [tmp.container, style];
  obj.style = items;
  const items1 = [graphic, ];
  const obj2 = { style: tmp.textContainer, children: null };
  const items2 = [topContent, , ];
  if (titleVariant == null) {
    titleVariant = "body-md/semibold";
  }
  const obj3 = { variant: titleVariant, color: null, children: null };
  if (titleColor == null) {
    titleColor = "text-default";
  }
  obj3.color = titleColor;
  obj3.children = title;
  items2[1] = timestampProducer(Text_Text.Text, obj3);
  if (subtitleVariant == null) {
    subtitleVariant = "body-sm/medium";
  }
  const obj4 = { variant: subtitleVariant, color: null, children: null };
  if (subtitleColor == null) {
    subtitleColor = "text-subtle";
  }
  obj4.color = subtitleColor;
  obj4.children = subtitle;
  items2[2] = timestampProducer(Text_Text.Text, obj4);
  obj2.children = items2;
  items1[1] = metroImportDefault(View, obj2);
  obj.children = items1;
  return metroImportDefault(View, obj);
}
function AnimatedImage(shouldAnimate) {
  let flag = shouldAnimate.shouldAnimate;
  ({ imageUrl, style } = shouldAnimate);
  if (flag === undefined) {
    flag = true;
  }
  items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = { style, resizeMode: "contain", source: { uri: imageUrl }, enableAnimation: null };
  if (flag) {
    flag = !stateFromStores;
  }
  obj2.enableAnimation = flag;
  return timestampProducer(FastImageDefault, obj2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const PX_40 = nativeDefault.space.PX_40;
let createStyles = fn(5306);
let closure_9 = createStyles.createStyles(() => {
  const obj = { container: { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_12 }, image: null, textContainer: null };
  const size = { width: 64, height: 64, borderRadius: nativeDefault.radii.xs };
  obj.image = size;
  obj.textContainer = { flex: 1, alignSelf: "center" };
  return obj;
});
createStyles = fn(5306);
let obj3 = { preview: null };
let size = { width: PX_40, height: PX_40, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, border: { borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 }, overflow: "hidden" };
obj3.preview = size;
let closure_12 = createStyles.createStyles(obj3);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/components/PremiumGiftPromotionDetails.tsx");

export default function PremiumGiftPromotionDetails(imageUrl) {
  imageUrl = imageUrl.imageUrl;
  const merged = Object.assign(imageUrl, Object.assign({ imageUrl: 0, shouldAnimate: 0 }));
  let tmp3Result = null != imageUrl;
  if (tmp3Result) {
    const obj = { style: tmp2.image, imageUrl, shouldAnimate: imageUrl.shouldAnimate };
    tmp3Result = timestampProducer(AnimatedImage, obj);
  }
  const merged1 = Object.assign(merged);
  return timestampProducer(PremiumGiftPromotionDetailsBase, { graphic: tmp3Result });
};
export function PremiumGiftPromotionCollectibleRewardDetails(product) {
  product = product.product;
  require = product;
  const merged = Object.assign(product, Object.assign({ product: 0 }));
  items = [product];
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
    return closure_6(tmp5, obj2);
  } else {
    let obj = { style: tmp2.preview, children: null };
    let obj3 = { collectiblesItemData: memo, size: null };
    if ("bundle" === memo.type) {
      const _Math2 = Math;
      let rounded = Math.floor(1.2 * PX_40);
    } else {
      rounded = PX_40;
      if (memo.item.type === tmp8(2114).CollectiblesItemType.AVATAR_DECORATION) {
        const _Math = Math;
        rounded = Math.floor(1.5 * PX_40);
      }
    }
    obj3.size = rounded;
    obj3 = closure_6(SKUPreview.CollectiblesPreview, obj3);
    obj.children = obj3;
    closure_6(View, obj);
    tmp8 = require;
  }
  tmp2 = closure_12();
}