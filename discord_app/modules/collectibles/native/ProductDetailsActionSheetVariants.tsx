// === Module 13150: ProductDetailsActionSheetVariants ===

// Module 13150 (ProductDetailsActionSheetVariants)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Pressables from "Pressables" /* 5123 */;
import CheckmarkSmallIcon from "CheckmarkSmallIcon" /* 7133 */;
import useProductPurchaseState from "useProductPurchaseState" /* 8842 */;
import useIsVariantColorLightDefault from "useIsVariantColorLight" /* 8866 */;
import noop from "module_19" /* 19 */;

require = fn;
function VariantOption(onPress) {
  ({ variant, isSelected, disabled } = onPress);
  const tmp = closure_7(isSelected);
  let obj = useProductPurchaseState;
  let isPurchased = obj.useProductPurchaseState(variant).isPurchased;
  if (isPurchased) {
    const intl = util.intl;
    obj = { variantLabel: variant.name };
    let name = intl.formatToPlainString(util.t["SfQB4+"], obj);
  } else {
    name = variant.name;
  }
  obj = { accessibilityRole: "button", accessibilityLabel: name, accessibilityState: { selected: isSelected, disabled }, disabled, onPress: onPress.onSelect, style: tmp.variantOption, children: null };
  const obj1 = { style: null, children: null };
  const items = [tmp.variantOptionInner, { backgroundColor: variant.variantValue }];
  obj1.style = items;
  if (isPurchased) {
    const obj2 = { variant };
    isPurchased = React4(VariantCheckmark, obj2);
  }
  obj1.children = isPurchased;
  obj.children = React4(View, obj1);
  return React4(Pressables.PressableOpacity, obj);
}
function VariantCheckmark(variant) {
  const colors = nativeDefault.colors;
  const tmp = useIsVariantColorLightDefault(variant.variant);
  return React4(CheckmarkSmallIcon.CheckmarkSmallIcon, { color: useIsVariantColorLightDefault(variant.variant) ? colors.BLACK : colors.WHITE, size: "md" });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: null, headerRow: null, variantsContainer: null, text: null };
createStyles = { flex: 1, display: "flex", flexDirection: "column", marginTop: nativeDefault.space.PX_16, marginHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
createStyles.container = createStyles;
createStyles.headerRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let obj1 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
createStyles.variantsContainer = { display: "flex", flexWrap: "wrap", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
createStyles.text = { flexGrow: 1, flexShrink: 1, minWidth: 28 };
let closure_6 = createStyles.createStyles(createStyles);
createStyles = fn(4560);
let closure_7 = createStyles.createStyles((arg0) => {
  const size = { width: 28, height: 28, borderRadius: nativeDefault.radii.round, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: null };
  const colors = nativeDefault.colors;
  const obj = { variantOption: size, variantOptionInner: null };
  size.borderColor = arg0 ? colors.BUTTON_OUTLINE_PRIMARY_TEXT : colors.BORDER_STRONG;
  const size1 = { width: "100%", height: "100%", justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.variantOptionInner = size1;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetVariants.tsx");

export default function ProductDetailsActionSheetVariants(disabled) {
  ({ product, selectedVariantIndex } = disabled);
  let flag = disabled.disabled;
  if (flag === undefined) {
    flag = false;
  }
  const onVariantSelect = disabled.onVariantSelect;
  const tmp = closure_6();
  let obj = selectedVariantIndex(onVariantSelect[10]);
  let tmp5Result = null;
  if (obj.getIsVariantProduct(product)) {
    obj = { style: tmp.container, children: null };
    obj = { style: tmp.headerRow, children: null };
    const obj1 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: null };
    const intl = selectedVariantIndex(tmp3[7]).intl;
    obj1.children = intl.string(selectedVariantIndex(tmp3[7]).t.wbgaj6);
    const items = [closure_4(selectedVariantIndex(tmp3[11]).Text, obj1), ];
    let tmp7Result = product.variants.length > selectedVariantIndex;
    if (tmp7Result) {
      const obj2 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, style: tmp.text, children: product.variants[selectedVariantIndex].variantLabel };
      tmp7Result = closure_4(selectedVariantIndex(tmp3[11]).Text, obj2);
    }
    items[1] = tmp7Result;
    obj.children = items;
    const items1 = [closure_5(View, obj), ];
    const obj3 = { style: tmp.variantsContainer, children: null };
    const variants = product.variants;
    obj3.children = variants.map((variant, index) => {
      closure_0 = index;
      return closure_1_4(VariantOption, {
        variant,
        isSelected: closure_0 === index,
        disabled: flag,
        onSelect() {
          return onVariantSelect(closure_0);
        }
      }, variant.variantValue);
    });
    items1[1] = closure_4(View, obj3);
    obj.children = items1;
    tmp5Result = closure_5(View, obj);
  }
  return tmp5Result;
};