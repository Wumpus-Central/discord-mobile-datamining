// discord_app/modules/collectibles/native/CollectiblesShopCardVariants.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import CheckmarkSmallIcon from "../../../design/components/Icon/native/redesign/generated/CheckmarkSmallIcon.tsx";
import useProductPurchaseState from "../hooks/useProductPurchaseState.tsx";
import useIsVariantColorLightDefault from "../hooks/useIsVariantColorLight.tsx";
import PlusSmallIcon from "../../../design/components/Icon/native/redesign/generated/PlusSmallIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function VariantOption(variant) {
  variant = variant.variant;
  const tmp = closure_7(variant.isSelected);
  let obj = useProductPurchaseState;
  let isPurchased = obj.useProductPurchaseState(variant).isPurchased;
  obj = { style: null, children: null };
  const items = [tmp.variantOption, { zIndex: variant.zIndex }];
  obj.style = items;
  obj = { style: null, children: null };
  const items1 = [tmp.variantOptionInner, { backgroundColor: variant.variantValue }];
  obj.style = items1;
  if (isPurchased) {
    const obj1 = { variant };
    isPurchased = React4(VariantCheckmark, obj1);
  }
  obj.children = isPurchased;
  obj.children = React4(View, obj);
  return React4(View, obj);
}
function VariantCheckmark(variant) {
  const colors = nativeDefault.colors;
  const tmp = useIsVariantColorLightDefault(variant.variant);
  return React4(CheckmarkSmallIcon.CheckmarkSmallIcon, {
    color: useIsVariantColorLightDefault(variant.variant) ? colors.BLACK : colors.WHITE,
    size: "xxs",
  });
}
function VariantOverflowOption(isSelected) {
  const tmp = closure_7(isSelected.isSelected);
  let obj = { style: null, children: null };
  const items = [tmp.variantOption, { zIndex: isSelected.zIndex }];
  obj.style = items;
  obj = { style: null, children: null };
  const items1 = [,];
  ({ variantOptionInner: arr2[0], variantOverflowInner: arr2[1] } = tmp);
  obj.style = items1;
  obj = { color: nativeDefault.colors.WHITE, size: "xxs" };
  obj.children = React4(PlusSmallIcon.PlusSmallIcon, obj);
  obj.children = React4(View, obj);
  return React4(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let createStyles = fn(4560);
let obj = { variantsContainer: null };
obj = { display: "flex", flexDirection: "row", alignItems: "center", paddingStart: nativeDefault.space.PX_4 };
obj.variantsContainer = obj;
let closure_6 = createStyles.createStyles(obj);
createStyles = fn(4560);
let closure_7 = createStyles.createStyles((arg0) => {
  let obj = { variantOption: null, variantOptionInner: null, variantOverflowInner: null };
  const size = {
    marginStart: -nativeDefault.space.PX_4,
    width: 14,
    height: 14,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    borderRadius: nativeDefault.radii.round,
    justifyContent: "center",
    alignItems: "center",
  };
  obj.variantOption = size;
  const size1 = {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: nativeDefault.radii.round,
    borderWidth: null,
    borderColor: null,
  };
  let num = 0;
  if (arg0) {
    num = 1;
  }
  size1.borderWidth = num;
  size1.borderColor = nativeDefault.colors.BUTTON_OUTLINE_PRIMARY_TEXT;
  obj.variantOptionInner = size1;
  obj = { backgroundColor: nativeDefault.colors.ICON_MUTED };
  obj.variantOverflowInner = obj;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardVariants.tsx");

export default noop.memo(function CardProductVariants(product) {
  product = product.product;
  let defaultVariantIndex;
  let obj = defaultVariantIndex(8765);
  defaultVariantIndex = obj.useDefaultVariantIndex(product);
  const tmp = closure_6();
  if (obj2.getIsVariantProduct(product)) {
    let num3 = 3;
    if (product.variants.length <= 4) {
      num3 = length;
    }
    obj = { style: tmp.variantsContainer, children: null };
    const variants = product.variants;
    const substr = variants.slice(0, num3);
    const items = [
      substr.map((variant, index) =>
        React4(
          VariantOption,
          { variant, isSelected: index === defaultVariantIndex, zIndex: 4 - Math.abs(defaultVariantIndex - index) },
          variant.variantValue,
        ),
      ),
    ];
    let tmp7Result = num3 !== length;
    if (tmp7Result) {
      obj = { isSelected: defaultVariantIndex >= 3, zIndex: null };
      let num5 = 0;
      if (defaultVariantIndex >= 3) {
        num5 = 4;
      }
      obj.zIndex = num5;
      tmp7Result = closure_4(VariantOverflowOption, obj);
    }
    items[1] = tmp7Result;
    obj.children = items;
    return closure_5(View, obj);
  } else {
    return null;
  }
  obj2 = defaultVariantIndex(7553);
});
