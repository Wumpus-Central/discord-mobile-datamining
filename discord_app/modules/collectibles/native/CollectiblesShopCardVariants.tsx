// === Module 9260: VariantOption ===

// Module 9260 (VariantOption)
import ThemesDefault from "Themes" /* 712 */;
import CheckmarkSmallIcon from "CheckmarkSmallIcon" /* 6933 */;
import getProductPurchaseState from "getProductPurchaseState" /* 9243 */;
import useIsVariantColorLightDefault from "useIsVariantColorLight" /* 9261 */;
import PlusSmallIcon from "PlusSmallIcon" /* 9262 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importAllResult from "noop" /* 19 */;

require = fn;
function VariantOption(variant) {
  variant = variant.variant;
  const tmp = callback3(variant.isSelected);
  let obj = getProductPurchaseState;
  let isPurchased = obj.useProductPurchaseState(variant).isPurchased;
  const items = [tmp.variantOption, { zIndex: variant.zIndex }];
  obj = { style: items1, children: null };
  items1 = [tmp.variantOptionInner, { backgroundColor: variant.variantValue }];
  if (isPurchased) {
    obj1 = { variant: null };
    obj1[0] = variant;
    isPurchased = callback(VariantCheckmark, obj1);
  }
  obj[1] = isPurchased;
  obj[1] = callback(View, obj);
  return callback(View, obj);
}
function VariantCheckmark(variant) {
  const colors = ThemesDefault.colors;
  const tmp = useIsVariantColorLightDefault(variant.variant);
  return callback(CheckmarkSmallIcon.CheckmarkSmallIcon, { color: useIsVariantColorLightDefault(variant.variant) ? colors.BLACK : colors.WHITE, size: "xxs" });
}
function VariantOverflowOption(isSelected) {
  const tmp = callback3(isSelected.isSelected);
  const items = [tmp.variantOption, { zIndex: isSelected.zIndex }];
  const items1 = [, ];
  ({ variantOptionInner: arr2[0], variantOverflowInner: arr2[1] } = tmp);
  const obj = { color: ThemesDefault.colors.WHITE, size: "xxs" };
  obj[1] = callback(PlusSmallIcon.PlusSmallIcon, obj);
  obj[1] = callback(View, obj);
  return callback(View, obj);
}
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { display: "flex", flexDirection: "row", alignItems: "center", paddingStart: ThemesDefault.space.PX_4 };
obj[0] = obj;
let closure_6 = createCacheKey.createStyles(obj);
let closure_7 = createCacheKey.createStyles((arg0) => {
  let obj = { marginStart: -ThemesDefault.space.PX_4, width: 14, height: 14, borderWidth: 1, borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderRadius: ThemesDefault.radii.round, justifyContent: "center", alignItems: "center" };
  obj[0] = obj;
  obj = { width: "100%", height: "100%", justifyContent: "center", alignItems: "center", borderRadius: ThemesDefault.radii.round, borderWidth: null, borderColor: null };
  let num = 0;
  if (arg0) {
    num = 1;
  }
  obj[5] = num;
  obj[6] = ThemesDefault.colors.BUTTON_OUTLINE_PRIMARY_TEXT;
  obj[1] = obj;
  obj[2] = { backgroundColor: ThemesDefault.colors.ICON_MUTED };
  return obj;
});
const memoResult = importAllResult.memo(function CardProductVariants(product) {
  product = product.product;
  let defaultVariantIndex;
  let obj = defaultVariantIndex(9173);
  defaultVariantIndex = obj.useDefaultVariantIndex(product);
  const tmp = callback2();
  if (obj2.getIsVariantProduct(product)) {
    let num3 = 3;
    if (product.variants.length <= 4) {
      num3 = length;
    }
    obj = { style: null, children: null };
    obj[0] = tmp.variantsContainer;
    const variants = product.variants;
    const substr = variants.slice(0, num3);
    const items = [substr.map((item, index) => closure_1_4(VariantOption, { variant: item, isSelected: index === defaultVariantIndex, zIndex: 4 - Math.abs(defaultVariantIndex - index) }, item.variantValue)), ];
    let tmp7Result = num3 !== length;
    if (tmp7Result) {
      obj = { isSelected: null, zIndex: null };
      obj[0] = defaultVariantIndex >= 3;
      let num5 = 0;
      if (defaultVariantIndex >= 3) {
        num5 = 4;
      }
      obj[1] = num5;
      tmp7Result = callback(VariantOverflowOption, obj);
    }
    items[1] = tmp7Result;
    obj[1] = items;
    return callback2(View, obj);
  } else {
    return null;
  }
  obj2 = defaultVariantIndex(5312);
});
const result = require("obj132").fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardVariants.tsx");

export default memoResult;