// discord_app/modules/collectibles/native/ProductDetailsActionSheetVariants.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import CheckmarkSmallIcon from "../../../design/components/Icon/native/redesign/generated/CheckmarkSmallIcon.tsx";
import useProductPurchaseState from "../hooks/useProductPurchaseState.tsx";
import useIsVariantColorLightDefault from "../hooks/useIsVariantColorLight.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function VariantOption(onPress) {
  ({ variant, isSelected, disabled } = onPress);
  const tmp = closure_7(isSelected);
  let isPurchased = useProductPurchaseState.useProductPurchaseState(variant).isPurchased;
  if (isPurchased) {
    const intl = util.intl;
    const obj2 = { variantLabel: variant.name };
    let name = intl.formatToPlainString(util.t["SfQB4+"], obj2);
  } else {
    name = variant.name;
  }
  const obj3 = {
    accessibilityRole: "button",
    accessibilityLabel: name,
    accessibilityState: { selected: isSelected, disabled },
    disabled,
    onPress: onPress.onSelect,
    style: tmp.variantOption,
    children: null,
  };
  const obj4 = { style: null, children: null };
  const items = [tmp.variantOptionInner, { backgroundColor: variant.variantValue }];
  obj4.style = items;
  if (isPurchased) {
    const obj5 = { variant };
    isPurchased = React4(VariantCheckmark, obj5);
  }
  obj4.children = isPurchased;
  obj3.children = React4(View, obj4);
  return React4(Pressables.PressableOpacity, obj3);
}
function VariantCheckmark(variant) {
  const colors = nativeDefault.colors;
  const tmp = useIsVariantColorLightDefault(variant.variant);
  return React4(CheckmarkSmallIcon.CheckmarkSmallIcon, {
    color: useIsVariantColorLightDefault(variant.variant) ? colors.BLACK : colors.WHITE,
    size: "md",
  });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let createStyles = fn(4836);
let obj2 = {
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    marginTop: nativeDefault.space.PX_16,
    marginHorizontal: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_8,
  },
  headerRow: null,
  variantsContainer: null,
  text: null,
};
let obj3 = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  marginTop: nativeDefault.space.PX_16,
  marginHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_8,
};
obj2.headerRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.variantsContainer = {
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
};
obj2.text = { flexGrow: 1, flexShrink: 1, minWidth: 28 };
let closure_6 = createStyles.createStyles(obj2);
createStyles = fn(4836);
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
    borderRadius: nativeDefault.radii.round,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
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
  let tmp5Result = null;
  if (obj.getIsVariantProduct(product)) {
    const obj2 = { style: tmp.container, children: null };
    const obj3 = { style: tmp.headerRow, children: null };
    const obj4 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: null };
    const intl = selectedVariantIndex(tmp3[7]).intl;
    obj4.children = intl.string(selectedVariantIndex(tmp3[7]).t.wbgaj6);
    const items = [closure_4(selectedVariantIndex(tmp3[11]).Text, obj4)];
    let tmp7Result = product.variants.length > selectedVariantIndex;
    if (tmp7Result) {
      const obj5 = {
        variant: "text-md/medium",
        color: "text-default",
        lineClamp: 1,
        style: tmp.text,
        children: product.variants[selectedVariantIndex].variantLabel,
      };
      tmp7Result = closure_4(selectedVariantIndex(tmp3[11]).Text, obj5);
    }
    items[1] = tmp7Result;
    obj3.children = items;
    const items1 = [closure_5(View, obj3)];
    const obj6 = { style: tmp.variantsContainer, children: null };
    const variants = product.variants;
    obj6.children = variants.map((variant, index) => {
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
    items1[1] = closure_4(View, obj6);
    obj2.children = items1;
    tmp5Result = closure_5(View, obj2);
  }
  return tmp5Result;
}
