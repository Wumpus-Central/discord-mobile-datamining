// discord_app/modules/collectibles/native/ProductDetailsActionSheetVariants.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import CheckmarkSmallIcon from "../../../design/components/Icon/native/redesign/generated/CheckmarkSmallIcon.tsx";
import useProductPurchaseState from "../hooks/useProductPurchaseState.tsx";
import useIsVariantColorLightDefault from "../hooks/useIsVariantColorLight.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let createStyles = fn(4896);
let obj2 = { container: { flex: 1, display: "flex", flexDirection: "column", marginTop: nativeDefault.space.PX_16, marginHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 }, headerRow: null, variantsContainer: null, text: null };
let obj3 = { flex: 1, display: "flex", flexDirection: "column", marginTop: nativeDefault.space.PX_16, marginHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj2.headerRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.variantsContainer = { display: "flex", flexWrap: "wrap", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.text = { flexGrow: 1, flexShrink: 1, minWidth: 28 };
let closure_6 = createStyles.createStyles(obj2);
createStyles = fn(4896);
let closure_7 = createStyles.createStyles((arg0) => {
  const size = { width: 28, height: 28, borderRadius: nativeDefault.radii.round, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: null };
  const colors = nativeDefault.colors;
  const obj = { variantOption: size, variantOptionInner: null };
  size.borderColor = arg0 ? colors.BUTTON_OUTLINE_PRIMARY_TEXT : colors.BORDER_STRONG;
  const size1 = { width: "100%", height: "100%", justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.variantOptionInner = size1;
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(24);
  ({ variant, isSelected, disabled, onSelect } = arg0);
  const tmp4 = closure_7(isSelected);
  const isPurchased = useProductPurchaseState.useProductPurchaseState(variant).isPurchased;
  if (cResult[0] === isPurchased) {
    if (cResult[1] === variant.name) {
      if (cResult[3] === disabled) {
        if (cResult[4] === isSelected) {
          let tmp6 = cResult[5];
        }
        if (cResult[6] !== variant.variantValue) {
          const obj3 = { backgroundColor: variant.variantValue };
          cResult[6] = variant.variantValue;
          cResult[7] = obj3;
          let tmp7 = obj3;
        } else {
          tmp7 = cResult[7];
        }
        if (cResult[8] === tmp4.variantOptionInner) {
          if (cResult[9] === tmp7) {
            let tmp8 = cResult[10];
          }
          if (cResult[11] === isPurchased) {
            if (cResult[12] === variant) {
              let tmp9 = cResult[13];
            }
            if (cResult[14] === tmp8) {
              if (cResult[15] === tmp9) {
                let tmp13 = cResult[16];
              }
              if (cResult[17] === disabled) {
                if (cResult[18] === onSelect) {
                  if (cResult[19] === tmp4.variantOption) {
                    if (cResult[20] === tmp5) {
                      if (cResult[21] === tmp6) {
                        if (cResult[22] === tmp13) {
                          let tmp17 = cResult[23];
                        }
                        return tmp17;
                      }
                    }
                  }
                }
              }
              const obj4 = { accessibilityRole: "button", accessibilityLabel: tmp5, accessibilityState: tmp6, disabled, onPress: onSelect, style: tmp4.variantOption, children: tmp13 };
              const tmp19 = React4(Pressables.PressableOpacity, obj4);
              cResult[17] = disabled;
              cResult[18] = onSelect;
              cResult[19] = tmp4.variantOption;
              cResult[20] = tmp5;
              cResult[21] = tmp6;
              cResult[22] = tmp13;
              cResult[23] = tmp19;
              tmp17 = tmp19;
            }
            const obj5 = { style: tmp8, children: tmp9 };
            const tmp16 = React4(View, obj5);
            cResult[14] = tmp8;
            cResult[15] = tmp9;
            cResult[16] = tmp16;
            tmp13 = tmp16;
          }
          let tmp10 = isPurchased;
          if (isPurchased) {
            const obj6 = { variant };
            tmp10 = React4(closure_9, obj6);
          }
          cResult[11] = isPurchased;
          cResult[12] = variant;
          cResult[13] = tmp10;
          tmp9 = tmp10;
        }
        const items = [tmp4.variantOptionInner, tmp7];
        cResult[8] = tmp4.variantOptionInner;
        cResult[9] = tmp7;
        cResult[10] = items;
        tmp8 = items;
      }
      const obj7 = { selected: isSelected, disabled };
      cResult[3] = disabled;
      cResult[4] = isSelected;
      cResult[5] = obj7;
      tmp6 = obj7;
    }
  }
  if (isPurchased) {
    const intl = util.intl;
    const obj8 = { variantLabel: variant.name };
    let name = intl.formatToPlainString(util.t["SfQB4+"], obj8);
  } else {
    name = variant.name;
  }
  cResult[0] = isPurchased;
  cResult[1] = variant.name;
  cResult[2] = name;
}) : ((onPress) => {
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
  const obj3 = { accessibilityRole: "button", accessibilityLabel: name, accessibilityState: { selected: isSelected, disabled }, disabled, onPress: onPress.onSelect, style: tmp.variantOption, children: null };
  const obj4 = { style: null, children: null };
  const items = [tmp.variantOptionInner, { backgroundColor: variant.variantValue }];
  obj4.style = items;
  if (isPurchased) {
    const obj5 = { variant };
    isPurchased = React4(closure_9, obj5);
  }
  obj4.children = isPurchased;
  obj3.children = React4(View, obj4);
  return React4(Pressables.PressableOpacity, obj3);
});
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((variant) => {
  const cResult = c.c(2);
  const colors = nativeDefault.colors;
  const tmp5 = useIsVariantColorLightDefault(variant.variant) ? colors.BLACK : colors.WHITE;
  if (cResult[0] !== tmp5) {
    const obj2 = { color: tmp5, size: "md" };
    const tmp8 = React4(CheckmarkSmallIcon.CheckmarkSmallIcon, obj2);
    cResult[0] = tmp5;
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6;
}) : ((variant) => {
  const colors = nativeDefault.colors;
  const tmp = useIsVariantColorLightDefault(variant.variant);
  return React4(CheckmarkSmallIcon.CheckmarkSmallIcon, { color: useIsVariantColorLightDefault(variant.variant) ? colors.BLACK : colors.WHITE, size: "md" });
});
ReactCompilerGating = fn(558);
let obj5 = { display: "flex", flexWrap: "wrap", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetVariants.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = selectedVariantIndex(576).c(24);
  ({ product, selectedVariantIndex } = arg0);
  ({ disabled, onVariantSelect } = arg0);
  dependencyMap = tmp4;
  const tmp5 = closure_6();
  const obj = selectedVariantIndex(576);
  if (tmpResult.getIsVariantProduct(product)) {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: null };
      const intl = selectedVariantIndex(1126).intl;
      obj2.children = intl.string(selectedVariantIndex(1126).t.wbgaj6);
      const tmp10 = closure_4(selectedVariantIndex(4892).Text, obj2);
      cResult[0] = tmp10;
      let first = tmp10;
    } else {
      first = cResult[0];
    }
    if (cResult[1] === product.variants) {
      if (cResult[2] === selectedVariantIndex) {
        if (cResult[3] === tmp5.text) {
          let tmp11 = cResult[4];
        }
        if (cResult[5] === tmp5.headerRow) {
          if (cResult[6] === tmp11) {
            let tmp14 = cResult[7];
          }
          if (cResult[8] === tmp4) {
            if (cResult[9] === onVariantSelect) {
              if (cResult[10] === product.variants) {
                if (cResult[11] === selectedVariantIndex) {
                  if (cResult[17] === tmp5.variantsContainer) {
                    if (cResult[18] === tmp18) {
                      let tmp22 = cResult[19];
                    }
                    if (cResult[20] === tmp5.container) {
                      if (cResult[21] === tmp14) {
                        if (cResult[22] === tmp22) {
                          let tmp25 = cResult[23];
                        }
                        return tmp25;
                      }
                    }
                    class O {
                      constructor(arg0, arg1) {
                        closure_0 = arg1;
                        obj = { variant: arg0, isSelected: closure_0 === arg1, disabled, onSelect() { ... } };
                        return closure_1_4(closure_1_8, obj, arg0.variantValue);
                      }
                    }
                    const obj3 = { style: tmp5.container, children: null };
                    const items = [tmp14, tmp22];
                    obj3.children = items;
                    const tmp27 = closure_5(View, obj3);
                    cResult[20] = tmp5.container;
                    cResult[21] = tmp14;
                    cResult[22] = tmp22;
                    cResult[23] = tmp27;
                    tmp25 = tmp27;
                  }
                  class O {
                    constructor(arg0, arg1) {
                      closure_0 = arg1;
                      obj = { variant: arg0, isSelected: closure_0 === arg1, disabled, onSelect() { ... } };
                      return closure_1_4(closure_1_8, obj, arg0.variantValue);
                    }
                  }
                  const obj4 = { style: tmp17, children: cResult[12] };
                  const tmp24 = closure_4(View, obj4);
                  cResult[17] = tmp5.variantsContainer;
                  cResult[18] = cResult[12];
                  cResult[19] = tmp24;
                  tmp22 = tmp24;
                }
              }
            }
          }
          if (cResult[13] === tmp4) {
            if (cResult[14] === onVariantSelect) {
              if (cResult[15] === selectedVariantIndex) {
                let tmp19 = cResult[16];
              }
              const variants = product.variants;
              const mapped = variants.map(tmp19);
              class O {
                constructor(arg0, arg1) {
                  closure_0 = arg1;
                  obj = { variant: arg0, isSelected: closure_0 === arg1, disabled, onSelect() { ... } };
                  return closure_1_4(closure_1_8, obj, arg0.variantValue);
                }
              }
              cResult[8] = tmp4;
              cResult[9] = onVariantSelect;
              product = product.variants;
              cResult[10] = product;
              cResult[11] = selectedVariantIndex;
              cResult[12] = mapped;
            }
          }
          class O {
            constructor(arg0, arg1) {
              closure_0 = arg1;
              obj = { variant: arg0, isSelected: closure_0 === arg1, disabled, onSelect() { ... } };
              return closure_1_4(closure_1_8, obj, arg0.variantValue);
            }
          }
          cResult[13] = tmp4;
          cResult[14] = onVariantSelect;
          cResult[15] = selectedVariantIndex;
          cResult[16] = O;
          tmp19 = O;
        }
        const obj5 = { style: tmp5.headerRow, children: null };
        const items1 = [first, tmp11];
        obj5.children = items1;
        const tmp16 = closure_5(View, obj5);
        cResult[5] = tmp5.headerRow;
        cResult[6] = tmp11;
        cResult[7] = tmp16;
        tmp14 = tmp16;
      }
    }
    let tmp12 = product.variants.length > selectedVariantIndex;
    if (tmp12) {
      const obj6 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, style: tmp5.text, children: null };
      class O {
        constructor(arg0, arg1) {
          closure_0 = arg1;
          obj = { variant: arg0, isSelected: closure_0 === arg1, disabled, onSelect() { ... } };
          return closure_1_4(closure_1_8, obj, arg0.variantValue);
        }
      }
      tmp12 = closure_4(selectedVariantIndex(4892).Text, obj6);
    }
    cResult[1] = product.variants;
    cResult[2] = selectedVariantIndex;
    cResult[3] = tmp5.text;
    cResult[4] = tmp12;
    tmp11 = tmp12;
  } else {
    return null;
  }
  tmpResult = selectedVariantIndex(7077);
}) : ((disabled) => {
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
    const intl = selectedVariantIndex(tmp3[8]).intl;
    obj4.children = intl.string(selectedVariantIndex(tmp3[8]).t.wbgaj6);
    const items = [closure_4(selectedVariantIndex(tmp3[13]).Text, obj4), ];
    let tmp7Result = product.variants.length > selectedVariantIndex;
    if (tmp7Result) {
      const obj5 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, style: tmp.text, children: product.variants[selectedVariantIndex].variantLabel };
      tmp7Result = closure_4(selectedVariantIndex(tmp3[13]).Text, obj5);
    }
    items[1] = tmp7Result;
    obj3.children = items;
    const items1 = [closure_5(View, obj3), ];
    const obj6 = { style: tmp.variantsContainer, children: null };
    const variants = product.variants;
    obj6.children = variants.map((variant, index) => {
      closure_0 = index;
      return closure_1_4(closure_1_8, {
        variant,
        isSelected: closure_0 === index,
        disabled: flag,
        onSelect() {
          return onVariantSelect(closure_0);
        }
      }, variant.variantValue);
    });
    items1[1] = closure_4(View, obj6);
    obj2.children = items1;
    tmp5Result = closure_5(View, obj2);
  }
  return tmp5Result;
});