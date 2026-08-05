// discord_app/modules/collectibles/native/ProductDetailsActionSheetVariants.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { CheckmarkSmallIcon } from "../../../design/components/Icon/native/redesign/generated/CheckmarkSmallIcon.tsx";
import { PressableBase } from "../../../design/void/Pressables/native/Pressables.tsx";
import { useIsVariantColorLight } from "../hooks/useIsVariantColorLight.tsx";
import { getProductPurchaseState } from "../hooks/useProductPurchaseState.tsx";

let c4;
let c5;
const require = arg1;
function VariantOption(onPress) {
  let isSelected;
  let variant;
  ({ variant, isSelected } = onPress);
  const tmp = callback2(isSelected);
  let obj = getProductPurchaseState;
  let isPurchased = obj.useProductPurchaseState(variant).isPurchased;
  if (isPurchased) {
    const intl = tmp2(1236).intl;
    obj = { variantLabel: null };
    obj[0] = variant.name;
    let name = intl.formatToPlainString(tmp2(1236).t["SfQB4+"], obj);
  } else {
    name = variant.name;
  }
  obj = { accessibilityRole: "button", accessibilityLabel: name, accessibilityState: { selected: isSelected }, onPress: onPress.onSelect, style: tmp.variantOption, children: null };
  const obj1 = { style: items, children: null };
  items = [tmp.variantOptionInner, { backgroundColor: variant.variantValue }];
  if (isPurchased) {
    const obj2 = { variant: null };
    obj2[0] = variant;
    isPurchased = tmp4(VariantCheckmark, obj2);
  }
  obj1[1] = isPurchased;
  obj[5] = closure_4(View, obj1);
  return closure_4(PressableBase.PressableOpacity, obj);
}
function VariantCheckmark(variant) {
  const colors = Themes.colors;
  const tmp = useIsVariantColorLight(variant.variant);
  const tmp2 = closure_4;
  return tmp2(CheckmarkSmallIcon.CheckmarkSmallIcon, { color: useIsVariantColorLight(variant.variant) ? colors.BLACK : colors.WHITE, size: "md" });
}
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, headerRow: null, variantsContainer: null, text: null };
createCacheKey = { flex: 1, display: "flex", flexDirection: "column", marginTop: require("Themes").space.PX_16, marginHorizontal: require("Themes").space.PX_16, gap: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_12 };
let obj1 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_12 };
createCacheKey[2] = { display: "flex", flexWrap: "wrap", flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_12 };
createCacheKey[3] = { flexGrow: 1, flexShrink: 1, minWidth: 28 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_7 = createCacheKey.createStyles((arg0) => {
  let obj = { width: 28, height: 28, borderRadius: Themes.radii.round, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: null };
  const colors = Themes.colors;
  obj = { variantOption: obj, variantOptionInner: null };
  obj[6] = arg0 ? colors.BUTTON_OUTLINE_PRIMARY_TEXT : colors.BORDER_STRONG;
  obj = { width: "100%", height: "100%", justifyContent: "center", alignItems: "center", borderRadius: tmp(712).radii.round, borderWidth: 1, borderColor: tmp(712).colors.BACKGROUND_BASE_LOW };
  obj[1] = obj;
  return obj;
});
let obj2 = { display: "flex", flexWrap: "wrap", flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_12 };
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetVariants.tsx");

export default function ProductDetailsActionSheetVariants(onVariantSelect) {
  let product;
  let selectedVariantIndex;
  ({ product, selectedVariantIndex } = onVariantSelect);
  onVariantSelect = onVariantSelect.onVariantSelect;
  const tmp = createCacheKey();
  let obj = selectedVariantIndex(6921);
  let tmp5Result = null;
  if (obj.getIsVariantProduct(product)) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { style: null, children: null };
    obj[0] = tmp.headerRow;
    const obj1 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp2(1236).intl;
    obj1[2] = intl.string(tmp2(1236).t.wbgaj6);
    const items = [callback(tmp2(4281).Text, obj1), ];
    let tmp7Result = product.variants.length > selectedVariantIndex;
    if (tmp7Result) {
      const obj2 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, style: null, children: null };
      obj2[3] = tmp.text;
      obj2[4] = product.variants[selectedVariantIndex].variantLabel;
      tmp7Result = tmp7(tmp2(4281).Text, obj2);
    }
    items[1] = tmp7Result;
    obj[1] = items;
    const items1 = [closure_5(View, obj), ];
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.variantsContainer;
    const variants = product.variants;
    obj3[1] = variants.map((variant) => {
      let closure_0 = arg1;
      return outer1_4(outer1_8, {
        variant,
        isSelected: closure_0 === arg1,
        onSelect() {
          return outer1_1(closure_0);
        }
      }, variant.variantValue);
    });
    items1[1] = callback(View, obj3);
    obj[1] = items1;
    tmp5Result = tmp5(tmp6, obj);
  }
  return tmp5Result;
};