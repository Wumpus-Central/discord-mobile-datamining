// === Module 13006: ProductDetailsActionSheetVariants ===

// Module 13006 (ProductDetailsActionSheetVariants)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Pressables from "Pressables" /* 5916 */;
import CheckmarkSmallIcon2 from "CheckmarkSmallIcon" /* 6635 */;
import useProductPurchaseState from "useProductPurchaseState" /* 8529 */;
import useIsVariantColorLightDefault from "useIsVariantColorLight" /* 8561 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, headerRow: obj3, variantsContainer: obj4, text: { flexGrow: 1, flexShrink: 1, minWidth: 28 } };
obj2 = { flex: 1, display: "flex", flexDirection: "column", marginTop: nativeDefault.space.PX_16, marginHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj4 = { display: "flex", flexWrap: "wrap", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let closure_6 = createStyles(obj);
createStyles = createStyles_mod;
let closure_7 = createStyles.createStyles((arg0) => {
  let colors;
  let size1;
  size = { width: 28, height: 28, borderRadius: nativeDefault.radii.round, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: arg0 ? colors.BUTTON_OUTLINE_PRIMARY_TEXT : colors.BORDER_STRONG };
  colors = nativeDefault.colors;
  const obj = { variantOption: size, variantOptionInner: size1 };
  size1 = { width: "100%", height: "100%", justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let disabled;
  let isSelected;
  let name;
  let onSelect;
  let variant;
  const obj = react2;
  const cResult = obj.c(24);
  ({ variant, isSelected, disabled, onSelect } = arg0);
  const tmp4 = closure_7(isSelected);
  const obj2 = useProductPurchaseState;
  const isPurchased = obj2.useProductPurchaseState(variant).isPurchased;
  if (cResult[0] === isPurchased) {
    let tmp5;
    if (cResult[1] === variant.name) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === disabled) {
      let tmp6;
      let tmp7;
      if (cResult[4] === isSelected) {
        tmp6 = cResult[5];
      }
      if (cResult[6] !== variant.variantValue) {
        const obj3 = { backgroundColor: variant.variantValue };
        cResult[6] = variant.variantValue;
        cResult[7] = obj3;
        tmp7 = obj3;
      } else {
        tmp7 = cResult[7];
      }
      if (cResult[8] === tmp4.variantOptionInner) {
        let tmp8;
        if (cResult[9] === tmp7) {
          tmp8 = cResult[10];
        }
        if (cResult[11] === isPurchased) {
          let tmp9;
          if (cResult[12] === variant) {
            tmp9 = cResult[13];
          }
          if (cResult[14] === tmp8) {
            let tmp13;
            if (cResult[15] === tmp9) {
              tmp13 = cResult[16];
            }
            if (cResult[17] === disabled) {
              if (cResult[18] === onSelect) {
                if (cResult[19] === tmp4.variantOption) {
                  if (cResult[20] === tmp5) {
                    if (cResult[21] === tmp6) {
                      let tmp17;
                      if (cResult[22] === tmp13) {
                        tmp17 = cResult[23];
                      }
                      return tmp17;
                    }
                  }
                }
              }
            }
            const obj4 = { accessibilityRole: "button", accessibilityLabel: tmp5, accessibilityState: tmp6, disabled, onPress: onSelect, style: tmp4.variantOption, children: tmp13 };
            const tmp19 = React3(Pressables.PressableOpacity, obj4);
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
          const tmp16 = React3(View, obj5);
          cResult[14] = tmp8;
          cResult[15] = tmp9;
          cResult[16] = tmp16;
          tmp13 = tmp16;
        }
        let tmp10 = isPurchased;
        if (tmp10) {
          const obj6 = { variant };
          tmp10 = React3(closure_9, obj6);
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
  if (isPurchased) {
    const intl = intl2.intl;
    const obj8 = { variantLabel: variant.name };
    name = intl.formatToPlainString(intl2.t["SfQB4+"], obj8);
  } else {
    name = variant.name;
  }
  cResult[0] = isPurchased;
  cResult[1] = variant.name;
  cResult[2] = name;
  tmp5 = name;
}) : ((onSelect) => {
  let disabled;
  let isSelected;
  let items;
  let name;
  let obj4;
  let variant;
  ({ variant, isSelected, disabled } = onSelect);
  onSelect = onSelect.onSelect;
  const tmp = closure_7(isSelected);
  const obj = useProductPurchaseState;
  let isPurchased = obj.useProductPurchaseState(variant).isPurchased;
  const PressableOpacity = Pressables.PressableOpacity;
  if (isPurchased) {
    const intl = intl2.intl;
    const obj2 = { variantLabel: variant.name };
    name = intl.formatToPlainString(intl2.t["SfQB4+"], obj2);
  } else {
    name = variant.name;
  }
  const obj3 = { accessibilityRole: "button", accessibilityLabel: name, accessibilityState: { selected: isSelected, disabled }, disabled, onPress: onSelect, style: tmp.variantOption, children: React3(View, obj4) };
  obj4 = { style: items, children: isPurchased };
  items = [tmp.variantOptionInner, { backgroundColor: variant.variantValue }];
  if (isPurchased) {
    const obj5 = { variant };
    isPurchased = React3(closure_9, obj5);
  }
  return React3(PressableOpacity, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((variant) => {
  let tmp6;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp4 = useIsVariantColorLightDefault(variant.variant);
  const colors = nativeDefault.colors;
  const tmp5 = tmp4 ? colors.BLACK : colors.WHITE;
  if (cResult[0] !== tmp5) {
    const obj2 = { color: tmp5, size: "md" };
    const tmp8 = React3(CheckmarkSmallIcon2.CheckmarkSmallIcon, obj2);
    cResult[0] = tmp5;
    cResult[1] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6;
}) : ((variant) => {
  const tmp = useIsVariantColorLightDefault(variant.variant);
  const CheckmarkSmallIcon = CheckmarkSmallIcon2.CheckmarkSmallIcon;
  const colors = nativeDefault.colors;
  const obj = { color: tmp ? colors.BLACK : colors.WHITE, size: "md" };
  return React3(CheckmarkSmallIcon, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let disabled;
  let intl;
  let items;
  let items1;
  let onVariantSelect;
  let product;
  let selectedVariantIndex;
  let obj = selectedVariantIndex(576);
  const cResult = obj.c(24);
  ({ product, selectedVariantIndex } = arg0);
  ({ disabled, onVariantSelect } = arg0);
  dependencyMap = tmp4;
  const tmp5 = closure_6();
  const tmpResult = selectedVariantIndex(7077);
  if (tmpResult.getIsVariantProduct(product)) {
    let first;
    const _Symbol = Symbol;
    const container = tmp5.container;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: intl.string(selectedVariantIndex(1126).t.wbgaj6) };
      const Text = selectedVariantIndex(4892).Text;
      intl = selectedVariantIndex(1126).intl;
      const tmp10 = closure_4(Text, obj2);
      cResult[0] = tmp10;
      first = tmp10;
    } else {
      first = cResult[0];
    }
    if (cResult[1] === product.variants) {
      if (cResult[2] === selectedVariantIndex) {
        let tmp11;
        if (cResult[3] === tmp5.text) {
          tmp11 = cResult[4];
        }
        if (cResult[5] === tmp5.headerRow) {
          let tmp14;
          let tmp18;
          if (cResult[6] === tmp11) {
            tmp14 = cResult[7];
          }
          if (cResult[8] === (undefined !== disabled && disabled)) {
            if (cResult[9] === onVariantSelect) {
              if (cResult[10] === product.variants) {
                if (cResult[11] === selectedVariantIndex) {
                  tmp18 = cResult[12];
                }
                if (cResult[17] === tmp5.variantsContainer) {
                  let tmp21;
                  if (cResult[18] === tmp18) {
                    tmp21 = cResult[19];
                  }
                  if (cResult[20] === tmp5.container) {
                    if (cResult[21] === tmp14) {
                      let tmp24;
                      if (cResult[22] === tmp21) {
                        tmp24 = cResult[23];
                      }
                      return tmp24;
                    }
                  }
                  class O {
                    constructor(arg0, arg1) {
                      closure_0 = arg1;
                      obj = { variant: arg0, isSelected: closure_0 === arg1, disabled, onSelect() { /* body not rendered: F143266 */ } };
                      return closure_1_4(closure_1_8, obj, arg0.variantValue);
                    }
                  }
                  const obj3 = { style: container, children: items };
                  items = [tmp14, tmp21];
                  const tmp26 = closure_5(View, obj3);
                  cResult[20] = tmp5.container;
                  cResult[21] = tmp14;
                  cResult[22] = tmp21;
                  cResult[23] = tmp26;
                  tmp24 = tmp26;
                }
                class O {
                  constructor(arg0, arg1) {
                    closure_0 = arg1;
                    obj = { variant: arg0, isSelected: closure_0 === arg1, disabled, onSelect() { /* body not rendered: F143266 */ } };
                    return closure_1_4(closure_1_8, obj, arg0.variantValue);
                  }
                }
                const obj4 = { style: tmp17, children: tmp18 };
                const tmp23 = closure_4(View, obj4);
                cResult[17] = tmp5.variantsContainer;
                cResult[18] = tmp18;
                cResult[19] = tmp23;
                tmp21 = tmp23;
              }
            }
          }
          if (cResult[13] === (undefined !== disabled && disabled)) {
            if (cResult[14] === onVariantSelect) {
              let tmp19;
              if (cResult[15] === selectedVariantIndex) {
                tmp19 = cResult[16];
              }
              const variants = product.variants;
              const mapped = variants.map(tmp19);
              class O {
                constructor(arg0, arg1) {
                  closure_0 = arg1;
                  obj = { variant: arg0, isSelected: closure_0 === arg1, disabled, onSelect() { /* body not rendered: F143266 */ } };
                  return closure_1_4(closure_1_8, obj, arg0.variantValue);
                }
              }
              cResult[8] = undefined !== disabled && disabled;
              cResult[9] = onVariantSelect;
              cResult[10] = product.variants;
              cResult[11] = selectedVariantIndex;
              cResult[12] = mapped;
              tmp18 = mapped;
            }
          }
          class O {
            constructor(arg0, arg1) {
              closure_0 = arg1;
              obj = { variant: arg0, isSelected: closure_0 === arg1, disabled, onSelect() { /* body not rendered: F143266 */ } };
              return closure_1_4(closure_1_8, obj, arg0.variantValue);
            }
          }
          cResult[13] = undefined !== disabled && disabled;
          cResult[14] = onVariantSelect;
          cResult[15] = selectedVariantIndex;
          cResult[16] = O;
          tmp19 = O;
        }
        const obj5 = { style: tmp5.headerRow, children: items1 };
        items1 = [first, tmp11];
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
          obj = { variant: arg0, isSelected: closure_0 === arg1, disabled, onSelect() { /* body not rendered: F143266 */ } };
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
}) : ((disabled) => {
  let intl;
  let items;
  let items1;
  let product;
  let selectedVariantIndex;
  let variants;
  ({ product, selectedVariantIndex } = disabled);
  let flag = disabled.disabled;
  if (flag === undefined) {
    flag = false;
  }
  const onVariantSelect = disabled.onVariantSelect;
  const tmp = closure_6();
  let obj = selectedVariantIndex(onVariantSelect[12]);
  let tmp5Result = null;
  if (obj.getIsVariantProduct(product)) {
    const obj2 = { style: tmp.container, children: items1 };
    const obj3 = { style: tmp.headerRow, children: items };
    const obj4 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: intl.string(selectedVariantIndex(onVariantSelect[8]).t.wbgaj6) };
    const Text = selectedVariantIndex(tmp3[13]).Text;
    intl = selectedVariantIndex(tmp3[8]).intl;
    items = [closure_4(Text, obj4), ];
    let tmp7Result = product.variants.length > selectedVariantIndex;
    if (tmp7Result) {
      const obj5 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, style: tmp.text, children: product.variants[selectedVariantIndex].variantLabel };
      tmp7Result = closure_4(selectedVariantIndex(tmp3[13]).Text, obj5);
    }
    items[1] = tmp7Result;
    items1 = [closure_5(View, obj3), ];
    const obj6 = {
      style: tmp.variantsContainer,
      children: variants.map((variant, index) => {
          let closure_0 = index;
          const obj = {
            variant,
            isSelected: closure_0 === index,
            disabled: flag,
            onSelect() {
              return onVariantSelect(index);
            }
          };
          return closure_1_4(closure_1_8, obj, variant.variantValue);
        })
    };
    variants = product.variants;
    items1[1] = closure_4(View, obj6);
    tmp5Result = closure_5(View, obj2);
  }
  return tmp5Result;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetVariants.tsx");

export default tmp5;