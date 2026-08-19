// discord_app/modules/collectibles/native/ProductDetailsActionSheetVariants.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import PressableBase from "../../../design/void/Pressables/native/Pressables.tsx";
import CheckmarkSmallIcon from "../../../design/components/Icon/native/redesign/generated/CheckmarkSmallIcon.tsx";
import getProductPurchaseState from "../hooks/useProductPurchaseState.tsx";
import useIsVariantColorLightDefault from "../hooks/useIsVariantColorLight.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = fn;
function VariantOption(onPress) {
  ({ variant, isSelected } = onPress);
  const tmp = callback3(isSelected);
  let obj = getProductPurchaseState;
  let isPurchased = obj.useProductPurchaseState(variant).isPurchased;
  if (isPurchased) {
    const intl = getSystemLocale.intl;
    obj = { variantLabel: null };
    obj[0] = variant.name;
    let name = intl.formatToPlainString(getSystemLocale.t["SfQB4+"], obj);
  } else {
    name = variant.name;
  }
  obj = { accessibilityRole: "button", accessibilityLabel: name, accessibilityState: { selected: isSelected }, onPress: onPress.onSelect, style: tmp.variantOption, children: null };
  obj1 = { style: items, children: null };
  items = [tmp.variantOptionInner, { backgroundColor: variant.variantValue }];
  if (isPurchased) {
    const obj2 = { variant: null };
    obj2[0] = variant;
    isPurchased = callback(VariantCheckmark, obj2);
  }
  obj1[1] = isPurchased;
  obj[5] = callback(View, obj1);
  return callback(PressableBase.PressableOpacity, obj);
}
function VariantCheckmark(variant) {
  const colors = ThemesDefault.colors;
  const tmp = useIsVariantColorLightDefault(variant.variant);
  return callback(CheckmarkSmallIcon.CheckmarkSmallIcon, { color: useIsVariantColorLightDefault(variant.variant) ? colors.BLACK : colors.WHITE, size: "md" });
}
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let createCacheKey = { flex: 1, display: "flex", flexDirection: "column", marginTop: ThemesDefault.space.PX_16, marginHorizontal: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_12 };
createCacheKey[2] = { display: "flex", flexWrap: "wrap", flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_12 };
createCacheKey[3] = { flexGrow: 1, flexShrink: 1, minWidth: 28 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let closure_7 = createCacheKey.createStyles((arg0) => {
  let obj = { width: 28, height: 28, borderRadius: ThemesDefault.radii.round, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: null };
  const colors = ThemesDefault.colors;
  obj = { variantOption: obj, variantOptionInner: null };
  obj[6] = arg0 ? colors.BUTTON_OUTLINE_PRIMARY_TEXT : colors.BORDER_STRONG;
  obj = { width: "100%", height: "100%", justifyContent: "center", alignItems: "center", borderRadius: ThemesDefault.radii.round, borderWidth: 1, borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
  obj[1] = obj;
  return obj;
});
const result = require("obj132").fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetVariants.tsx");

export default function ProductDetailsActionSheetVariants(onVariantSelect) {
  ({ product, selectedVariantIndex } = onVariantSelect);
  onVariantSelect = onVariantSelect.onVariantSelect;
  const tmp = callback2();
  let obj = selectedVariantIndex(5312);
  let tmp5Result = null;
  if (obj.getIsVariantProduct(product)) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { style: null, children: null };
    obj[0] = tmp.headerRow;
    obj1 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: null };
    const intl = selectedVariantIndex(1236).intl;
    obj1[2] = intl.string(selectedVariantIndex(1236).t.wbgaj6);
    const items = [callback(selectedVariantIndex(4734).Text, obj1), ];
    let tmp7Result = product.variants.length > selectedVariantIndex;
    if (tmp7Result) {
      const obj2 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, style: null, children: null };
      obj2[3] = tmp.text;
      obj2[4] = product.variants[selectedVariantIndex].variantLabel;
      tmp7Result = callback(selectedVariantIndex(4734).Text, obj2);
    }
    items[1] = tmp7Result;
    obj[1] = items;
    const items1 = [callback2(View, obj), ];
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.variantsContainer;
    const variants = product.variants;
    obj3[1] = variants.map((item, index) => {
      closure_0 = index;
      return closure_1_4(VariantOption, {
        variant: item,
        isSelected: closure_0 === index,
        onSelect() {
          return onVariantSelect(closure_0);
        }
      }, item.variantValue);
    });
    items1[1] = callback(View, obj3);
    obj[1] = items1;
    tmp5Result = callback2(View, obj);
  }
  return tmp5Result;
};