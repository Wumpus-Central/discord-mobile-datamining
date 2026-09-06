// discord_app/modules/collectibles/native/ProductDetailsActionSheetVariants.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import CheckmarkSmallIcon from "../../../design/components/Icon/native/redesign/generated/CheckmarkSmallIcon.tsx";
import useProductPurchaseState from "../hooks/useProductPurchaseState.tsx";
import useIsVariantColorLightDefault from "../hooks/useIsVariantColorLight.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function VariantOption(onPress) {
  ({ variant, isSelected, disabled } = onPress);
  const tmp = closure_7(isSelected);
  let obj = useProductPurchaseState;
  let isPurchased = obj.useProductPurchaseState(variant).isPurchased;
  if (isPurchased) {
    const intl = tmp2(1114).intl;
    obj = { variantLabel: variant.name };
    let name = intl.formatToPlainString(tmp2(1114).t["SfQB4+"], obj);
  } else {
    name = variant.name;
  }
  obj = {
    accessibilityRole: "button",
    accessibilityLabel: name,
    accessibilityState: { selected: isSelected, disabled },
    disabled,
    onPress: onPress.onSelect,
    style: tmp.variantOption,
    children: null,
  };
  const obj1 = { style: null, children: null };
  const items = [tmp.variantOptionInner, { backgroundColor: variant.variantValue }];
  obj1.style = items;
  if (isPurchased) {
    const obj2 = { variant };
    isPurchased = tmp4(VariantCheckmark, obj2);
  }
  obj1.children = isPurchased;
  obj.children = React4(View, obj1);
  return React4(Pressables.PressableOpacity, obj);
}
function VariantCheckmark(variant) {
  const colors = nativeDefault.colors;
  const tmp = useIsVariantColorLightDefault(variant.variant);
  const tmp2 = React4;
  return tmp2(CheckmarkSmallIcon.CheckmarkSmallIcon, {
    color: useIsVariantColorLightDefault(variant.variant) ? colors.BLACK : colors.WHITE,
    size: "md",
  });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: null, headerRow: null, variantsContainer: null, text: null };
createStyles = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  marginTop: nativeDefault.space.PX_16,
  marginHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_8,
};
createStyles.container = createStyles;
createStyles.headerRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let obj1 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
createStyles.variantsContainer = {
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
};
createStyles.text = { flexGrow: 1, flexShrink: 1, minWidth: 28 };
let closure_6 = createStyles.createStyles(createStyles);
createStyles = fn(4560);
let closure_7 = createStyles.createStyles((arg0) => {
  const size = {
    width: 28,
    height: 28,
    borderRadius: nativeDefault.radii.round,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: null,
  };
  const colors = nativeDefault.colors;
  const obj = { variantOption: size, variantOptionInner: null };
  size.borderColor = arg0 ? colors.BUTTON_OUTLINE_PRIMARY_TEXT : colors.BORDER_STRONG;
  const size1 = {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: tmp(576).radii.round,
    borderWidth: 1,
    borderColor: tmp(576).colors.BACKGROUND_BASE_LOW,
  };
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
    const intl = tmp2(tmp3[7]).intl;
    obj1.children = intl.string(tmp2(tmp3[7]).t.wbgaj6);
    const items = [closure_4(tmp2(tmp3[11]).Text, obj1)];
    let tmp7Result = product.variants.length > selectedVariantIndex;
    if (tmp7Result) {
      const obj2 = {
        variant: "text-md/medium",
        color: "text-default",
        lineClamp: 1,
        style: tmp.text,
        children: product.variants[selectedVariantIndex].variantLabel,
      };
      tmp7Result = tmp7(tmp2(tmp3[11]).Text, obj2);
    }
    items[1] = tmp7Result;
    obj.children = items;
    const items1 = [closure_5(View, obj)];
    const obj3 = { style: tmp.variantsContainer, children: null };
    const variants = product.variants;
    obj3.children = variants.map((variant, index) => {
      closure_0 = index;
      return closure_1_4(
        VariantOption,
        {
          variant,
          isSelected: closure_0 === index,
          disabled: flag,
          onSelect() {
            return onVariantSelect(closure_0);
          },
        },
        variant.variantValue,
      );
    });
    items1[1] = closure_4(View, obj3);
    obj.children = items1;
    tmp5Result = tmp5(tmp6, obj);
  }
  return tmp5Result;
}
