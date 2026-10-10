// === Module 13429: ProductDetailsActionSheetVariants ===

// Module 13429 (ProductDetailsActionSheetVariants)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Pressables from "Pressables" /* 6184 */;
import CheckmarkSmallIcon from "CheckmarkSmallIcon" /* 6822 */;
import useProductPurchaseState from "useProductPurchaseState" /* 9044 */;
import useIsVariantColorLightDefault from "useIsVariantColorLight" /* 9080 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let createStyles = fn(5092);
let obj2 = { container: { flex: 1, display: "flex", flexDirection: "column", marginTop: nativeDefault.space.PX_16, marginHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 }, headerRow: null, variantsContainer: null, text: null };
let obj3 = { flex: 1, display: "flex", flexDirection: "column", marginTop: nativeDefault.space.PX_16, marginHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj2.headerRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.variantsContainer = { display: "flex", flexWrap: "wrap", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.text = { flexGrow: 1, flexShrink: 1, minWidth: 28 };
let closure_6 = createStyles.createStyles(obj2);
createStyles = fn(5092);
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
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function VariantOption(arg0) {
  const cResult = c.c(21);
  ({ variant, isSelected, disabled, onSelect } = arg0);
  const tmp4 = closure_7(isSelected);
  const isPurchased = useProductPurchaseState.useProductPurchaseState(variant).isPurchased;
  if (cResult[0] === isPurchased) {
    if (cResult[1] === variant.name) {
      if (cResult[3] !== variant.variantValue) {
        const obj3 = { backgroundColor: variant.variantValue };
        cResult[3] = variant.variantValue;
        cResult[4] = obj3;
        let tmp6 = obj3;
      } else {
        tmp6 = cResult[4];
      }
      if (cResult[5] === tmp4.variantOptionInner) {
        if (cResult[6] === tmp6) {
          let tmp7 = cResult[7];
        }
        if (cResult[8] === isPurchased) {
          if (cResult[9] === variant) {
            let tmp8 = cResult[10];
          }
          if (cResult[11] === tmp7) {
            if (cResult[12] === tmp8) {
              let tmp12 = cResult[13];
            }
            if (cResult[14] === disabled) {
              if (cResult[15] === isSelected) {
                if (cResult[16] === onSelect) {
                  if (cResult[17] === tmp4.variantOption) {
                    if (cResult[18] === tmp5) {
                      if (cResult[19] === tmp12) {
                        let tmp16 = cResult[20];
                      }
                      return tmp16;
                    }
                  }
                }
              }
            }
            const obj4 = { role: "radio", "aria-checked": isSelected, accessibilityLabel: tmp5, disabled, onPress: onSelect, style: tmp4.variantOption, children: tmp12 };
            const tmp18 = React4(Pressables.PressableOpacity, obj4);
            cResult[14] = disabled;
            cResult[15] = isSelected;
            cResult[16] = onSelect;
            cResult[17] = tmp4.variantOption;
            cResult[18] = tmp5;
            cResult[19] = tmp12;
            cResult[20] = tmp18;
            tmp16 = tmp18;
          }
          const obj5 = { style: tmp7, children: tmp8 };
          const tmp15 = React4(View, obj5);
          cResult[11] = tmp7;
          cResult[12] = tmp8;
          cResult[13] = tmp15;
          tmp12 = tmp15;
        }
        let tmp9 = isPurchased;
        if (isPurchased) {
          const obj6 = { variant };
          tmp9 = React4(closure_9, obj6);
        }
        cResult[8] = isPurchased;
        cResult[9] = variant;
        cResult[10] = tmp9;
        tmp8 = tmp9;
      }
      const items = [tmp4.variantOptionInner, tmp6];
      cResult[5] = tmp4.variantOptionInner;
      cResult[6] = tmp6;
      cResult[7] = items;
      tmp7 = items;
    }
  }
  if (isPurchased) {
    const intl = util.intl;
    const obj7 = { variantLabel: variant.name };
    let name = intl.formatToPlainString(util.t["SfQB4+"], obj7);
  } else {
    name = variant.name;
  }
  cResult[0] = isPurchased;
  cResult[1] = variant.name;
  cResult[2] = name;
}) : (function VariantOption(arg0) {
  ({ variant, isSelected } = arg0);
  ({ disabled, onSelect } = arg0);
  const tmp = closure_7(isSelected);
  let isPurchased = useProductPurchaseState.useProductPurchaseState(variant).isPurchased;
  const obj2 = { role: "radio", "aria-checked": isSelected, accessibilityLabel: null, disabled: null, onPress: null, style: null, children: null };
  if (isPurchased) {
    const intl = util.intl;
    const obj3 = { variantLabel: variant.name };
    let name = intl.formatToPlainString(util.t["SfQB4+"], obj3);
  } else {
    name = variant.name;
  }
  obj2.accessibilityLabel = name;
  obj2.disabled = disabled;
  obj2.onPress = onSelect;
  obj2.style = tmp.variantOption;
  const obj4 = { style: null, children: null };
  const items = [tmp.variantOptionInner, { backgroundColor: variant.variantValue }];
  obj4.style = items;
  if (isPurchased) {
    const obj5 = { variant };
    isPurchased = React4(closure_9, obj5);
  }
  obj4.children = isPurchased;
  obj2.children = React4(View, obj4);
  return React4(Pressables.PressableOpacity, obj2);
});
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function VariantCheckmark(variant) {
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
}) : (function VariantCheckmark(variant) {
  const colors = nativeDefault.colors;
  const tmp = useIsVariantColorLightDefault(variant.variant);
  return React4(CheckmarkSmallIcon.CheckmarkSmallIcon, { color: useIsVariantColorLightDefault(variant.variant) ? colors.BLACK : colors.WHITE, size: "md" });
});
ReactCompilerGating = fn(558);
let obj5 = { display: "flex", flexWrap: "wrap", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetVariants.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ProductDetailsActionSheetVariants(arg0) {
  const cResult = selectedVariantIndex(576).c(25);
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
      const tmp10 = closure_4(selectedVariantIndex(5088).Text, obj2);
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
          const _Symbol2 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = selectedVariantIndex(1126).intl;
            const stringResult = intl2.string(selectedVariantIndex(1126).t.lLFi5U);
            cResult[8] = stringResult;
            let tmp18 = stringResult;
          } else {
            tmp18 = cResult[8];
          }
          if (cResult[9] === tmp4) {
            if (cResult[10] === onVariantSelect) {
              if (cResult[11] === product.variants) {
                if (cResult[12] === selectedVariantIndex) {
                  if (cResult[18] === tmp5.variantsContainer) {
                    if (cResult[19] === tmp20) {
                      let tmp24 = cResult[20];
                    }
                    if (cResult[21] === tmp5.container) {
                      if (cResult[22] === tmp14) {
                        if (cResult[23] === tmp24) {
                          let tmp28 = cResult[24];
                        }
                        return tmp28;
                      }
                    }
                    const obj3 = { style: tmp5.container, children: null };
                    const items = [, ];
                    class V {
                      constructor(arg0, arg1) {
                        closure_0 = arg1;
                        obj = { variant: arg0, isSelected: closure_0 === arg1, disabled, onSelect() { ... } };
                        return closure_1_4(closure_1_8, obj, arg0.variantValue);
                      }
                    }
                    items[1] = tmp24;
                    obj3.children = items;
                    const tmp31 = closure_5(View, obj3);
                    cResult[21] = tmp5.container;
                    cResult[22] = tmp14;
                    cResult[23] = tmp24;
                    cResult[24] = tmp31;
                    tmp28 = tmp31;
                  }
                  const obj4 = { style: tmp5.variantsContainer, role: "radiogroup", "aria-label": tmp18, children: null };
                  class V {
                    constructor(arg0, arg1) {
                      closure_0 = arg1;
                      obj = { variant: arg0, isSelected: closure_0 === arg1, disabled, onSelect() { ... } };
                      return closure_1_4(closure_1_8, obj, arg0.variantValue);
                    }
                  }
                  const tmp27 = closure_4(View, obj4);
                  cResult[18] = tmp5.variantsContainer;
                  cResult[19] = cResult[13];
                  cResult[20] = tmp27;
                  tmp24 = tmp27;
                }
              }
            }
          }
          if (cResult[14] === tmp4) {
            if (cResult[15] === onVariantSelect) {
              if (cResult[16] === selectedVariantIndex) {
                let tmp21 = cResult[17];
              }
              const variants = product.variants;
              const mapped = variants.map(tmp21);
              cResult[9] = tmp4;
              cResult[10] = onVariantSelect;
              class V {
                constructor(arg0, arg1) {
                  closure_0 = arg1;
                  obj = { variant: arg0, isSelected: closure_0 === arg1, disabled, onSelect() { ... } };
                  return closure_1_4(closure_1_8, obj, arg0.variantValue);
                }
              }
              cResult[11] = product;
              cResult[12] = selectedVariantIndex;
              cResult[13] = mapped;
            }
          }
          class V {
            constructor(arg0, arg1) {
              closure_0 = arg1;
              obj = { variant: arg0, isSelected: closure_0 === arg1, disabled, onSelect() { ... } };
              return closure_1_4(closure_1_8, obj, arg0.variantValue);
            }
          }
          cResult[14] = tmp4;
          cResult[15] = onVariantSelect;
          cResult[16] = selectedVariantIndex;
          cResult[17] = V;
          tmp21 = V;
        }
        const obj5 = { style: tmp5.headerRow, children: null };
        const items1 = [, tmp11];
        obj5.children = items1;
        const tmp17 = closure_5(View, obj5);
        cResult[5] = tmp5.headerRow;
        cResult[6] = tmp11;
        cResult[7] = tmp17;
        tmp14 = tmp17;
      }
    }
    if (tmp12) {
      const obj6 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, style: tmp5.text, children: product.variants[selectedVariantIndex].variantLabel };
      tmp12 = closure_4(selectedVariantIndex(5088).Text, obj6);
    }
    cResult[1] = product.variants;
    cResult[2] = selectedVariantIndex;
    cResult[3] = tmp5.text;
    cResult[4] = tmp12;
    tmp11 = tmp12;
  } else {
    return null;
  }
  tmpResult = selectedVariantIndex(7274);
}) : (function ProductDetailsActionSheetVariants(disabled) {
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
    const obj6 = { style: tmp.variantsContainer, role: "radiogroup", "aria-label": null, children: null };
    const intl2 = selectedVariantIndex(tmp3[8]).intl;
    obj6["aria-label"] = intl2.string(selectedVariantIndex(tmp3[8]).t.lLFi5U);
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