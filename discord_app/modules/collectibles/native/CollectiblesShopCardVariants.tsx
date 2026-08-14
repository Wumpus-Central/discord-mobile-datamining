// discord_app/modules/collectibles/native/CollectiblesShopCardVariants.tsx
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { CheckmarkSmallIcon } from "../../../design/components/Icon/native/redesign/generated/CheckmarkSmallIcon.tsx";
import { PlusSmallIcon } from "../../../design/components/Icon/native/redesign/generated/PlusSmallIcon.tsx";
import { useIsVariantColorLight } from "../hooks/useIsVariantColorLight.tsx";
import { getProductPurchaseState } from "../hooks/useProductPurchaseState.tsx";

let c4;
let c5;
const require = arg1;
function VariantOption(variant) {
  variant = variant.variant;
  const tmp = callback3(variant.isSelected);
  let obj = getProductPurchaseState;
  let isPurchased = obj.useProductPurchaseState(variant).isPurchased;
  obj = { style: items, children: null };
  items = [tmp.variantOption, { zIndex: variant.zIndex }];
  obj = { style: items1, children: null };
  items1 = [tmp.variantOptionInner, { backgroundColor: variant.variantValue }];
  if (isPurchased) {
    const obj1 = { variant: null };
    obj1[0] = variant;
    isPurchased = tmp2(VariantCheckmark, obj1);
  }
  obj[1] = isPurchased;
  obj[1] = closure_4(View, obj);
  return closure_4(View, obj);
}
function VariantCheckmark(variant) {
  const colors = Themes.colors;
  const tmp = useIsVariantColorLight(variant.variant);
  const tmp2 = closure_4;
  return tmp2(CheckmarkSmallIcon.CheckmarkSmallIcon, { color: useIsVariantColorLight(variant.variant) ? colors.BLACK : colors.WHITE, size: "xxs" });
}
function VariantOverflowOption(isSelected) {
  const tmp = callback3(isSelected.isSelected);
  let obj = { style: items, children: null };
  items = [tmp.variantOption, { zIndex: isSelected.zIndex }];
  obj = { style: items1, children: null };
  items1 = [, ];
  ({ variantOptionInner: arr2[0], variantOverflowInner: arr2[1] } = tmp);
  obj = { color: null, size: "xxs" };
  obj[0] = Themes.colors.WHITE;
  obj[1] = callback(PlusSmallIcon.PlusSmallIcon, obj);
  obj[1] = callback(View, obj);
  return callback(View, obj);
}
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { variantsContainer: null };
obj = { display: "flex", flexDirection: "row", alignItems: "center", paddingStart: require("Themes").space.PX_4 };
obj[0] = obj;
let closure_6 = createCacheKey.createStyles(obj);
let closure_7 = createCacheKey.createStyles((arg0) => {
  let obj = { variantOption: null, variantOptionInner: null, variantOverflowInner: null };
  obj = { marginStart: -Themes.space.PX_4, width: 14, height: 14, borderWidth: 1, borderColor: Themes.colors.BACKGROUND_BASE_LOW, borderRadius: Themes.radii.round, justifyContent: "center", alignItems: "center" };
  obj[0] = obj;
  obj = { width: "100%", height: "100%", justifyContent: "center", alignItems: "center", borderRadius: Themes.radii.round, borderWidth: null, borderColor: null };
  let num = 0;
  if (arg0) {
    num = 1;
  }
  obj[5] = num;
  obj[6] = Themes.colors.BUTTON_OUTLINE_PRIMARY_TEXT;
  obj[1] = obj;
  obj[2] = { backgroundColor: Themes.colors.ICON_MUTED };
  return obj;
});
const memoResult = require("noop").memo(function CardProductVariants(product) {
  product = product.product;
  let defaultVariantIndex;
  let obj = defaultVariantIndex(9409);
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
    const items = [substr.map((variant) => outer1_4(outer1_8, { variant, isSelected: arg1 === defaultVariantIndex, zIndex: 4 - Math.abs(defaultVariantIndex - arg1) }, variant.variantValue)), ];
    let tmp7Result = num3 !== length;
    if (tmp7Result) {
      obj = { isSelected: null, zIndex: null };
      obj[0] = defaultVariantIndex >= 3;
      let num5 = 0;
      if (defaultVariantIndex >= 3) {
        num5 = 4;
      }
      obj[1] = num5;
      tmp7Result = closure_4(VariantOverflowOption, obj);
      const tmp7 = closure_4;
      const tmp8 = VariantOverflowOption;
    }
    items[1] = tmp7Result;
    obj[1] = items;
    return closure_5(View, obj);
  } else {
    return null;
  }
  obj2 = defaultVariantIndex(7082);
});
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardVariants.tsx");

export default memoResult;