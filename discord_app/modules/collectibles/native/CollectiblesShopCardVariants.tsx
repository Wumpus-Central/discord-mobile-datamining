// discord_app/modules/collectibles/native/CollectiblesShopCardVariants.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import CheckmarkSmallIcon from "../../../design/components/Icon/native/redesign/generated/CheckmarkSmallIcon.tsx";
import useProductPurchaseState from "../hooks/useProductPurchaseState.tsx";
import useIsVariantColorLightDefault from "../hooks/useIsVariantColorLight.tsx";
import PlusSmallIcon from "../../../design/components/Icon/native/redesign/generated/PlusSmallIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let createStyles = fn(5090);
let obj = {
  variantsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingStart: nativeDefault.space.PX_4,
  },
};
let closure_6 = createStyles.createStyles(obj);
createStyles = fn(5090);
let closure_7 = createStyles.createStyles((arg0) => {
  const obj = { variantOption: null, variantOptionInner: null, variantOverflowInner: null };
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
  obj.variantOverflowInner = { backgroundColor: nativeDefault.colors.ICON_MUTED };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function VariantOption(isSelected) {
      const cResult = c.c(19);
      ({ variant, zIndex } = isSelected);
      const tmp2 = closure_7(isSelected.isSelected);
      const isPurchased = useProductPurchaseState.useProductPurchaseState(variant).isPurchased;
      if (cResult[0] !== zIndex) {
        const obj3 = { zIndex };
        cResult[0] = zIndex;
        cResult[1] = obj3;
        let tmp3 = obj3;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === tmp2.variantOption) {
        if (cResult[3] === tmp3) {
          let tmp4 = cResult[4];
        }
        if (cResult[5] !== variant.variantValue) {
          const obj4 = { backgroundColor: variant.variantValue };
          cResult[5] = variant.variantValue;
          cResult[6] = obj4;
          let tmp5 = obj4;
        } else {
          tmp5 = cResult[6];
        }
        if (cResult[7] === tmp2.variantOptionInner) {
          if (cResult[8] === tmp5) {
            let tmp6 = cResult[9];
          }
          if (cResult[10] === isPurchased) {
            if (cResult[11] === variant) {
              let tmp7 = cResult[12];
            }
            if (cResult[13] === tmp6) {
              if (cResult[14] === tmp7) {
                let tmp11 = cResult[15];
              }
              if (cResult[16] === tmp4) {
                if (cResult[17] === tmp11) {
                  let tmp15 = cResult[18];
                }
                return tmp15;
              }
              const obj5 = { style: tmp4, children: tmp11 };
              const tmp18 = React4(View, obj5);
              cResult[16] = tmp4;
              cResult[17] = tmp11;
              cResult[18] = tmp18;
              tmp15 = tmp18;
            }
            const obj6 = { style: tmp6, children: tmp7 };
            const tmp14 = React4(View, obj6);
            cResult[13] = tmp6;
            cResult[14] = tmp7;
            cResult[15] = tmp14;
            tmp11 = tmp14;
          }
          let tmp8 = isPurchased;
          if (isPurchased) {
            const obj7 = { variant };
            tmp8 = React4(closure_9, obj7);
          }
          cResult[10] = isPurchased;
          cResult[11] = variant;
          cResult[12] = tmp8;
          tmp7 = tmp8;
        }
        const items = [tmp2.variantOptionInner, tmp5];
        cResult[7] = tmp2.variantOptionInner;
        cResult[8] = tmp5;
        cResult[9] = items;
        tmp6 = items;
      }
      const items1 = [tmp2.variantOption, tmp3];
      cResult[2] = tmp2.variantOption;
      cResult[3] = tmp3;
      cResult[4] = items1;
      tmp4 = items1;
    }
  : function VariantOption(variant) {
      variant = variant.variant;
      const tmp = closure_7(variant.isSelected);
      let isPurchased = useProductPurchaseState.useProductPurchaseState(variant).isPurchased;
      const obj2 = { style: null, children: null };
      const items = [tmp.variantOption, { zIndex: variant.zIndex }];
      obj2.style = items;
      const obj3 = { style: null, children: null };
      const items1 = [tmp.variantOptionInner, { backgroundColor: variant.variantValue }];
      obj3.style = items1;
      if (isPurchased) {
        const obj4 = { variant };
        isPurchased = React4(closure_9, obj4);
      }
      obj3.children = isPurchased;
      obj2.children = React4(View, obj3);
      return React4(View, obj2);
    };
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function VariantCheckmark(variant) {
      const cResult = c.c(2);
      const colors = nativeDefault.colors;
      const tmp5 = useIsVariantColorLightDefault(variant.variant) ? colors.BLACK : colors.WHITE;
      if (cResult[0] !== tmp5) {
        const obj2 = { color: tmp5, size: "xxs" };
        const tmp8 = React4(CheckmarkSmallIcon.CheckmarkSmallIcon, obj2);
        cResult[0] = tmp5;
        cResult[1] = tmp8;
        let tmp6 = tmp8;
      } else {
        tmp6 = cResult[1];
      }
      return tmp6;
    }
  : function VariantCheckmark(variant) {
      const colors = nativeDefault.colors;
      const tmp = useIsVariantColorLightDefault(variant.variant);
      return React4(CheckmarkSmallIcon.CheckmarkSmallIcon, {
        color: useIsVariantColorLightDefault(variant.variant) ? colors.BLACK : colors.WHITE,
        size: "xxs",
      });
    };
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function VariantOverflowOption(zIndex) {
      const cResult = c.c(14);
      zIndex = zIndex.zIndex;
      const tmp4 = closure_7(zIndex.isSelected);
      if (cResult[0] !== zIndex) {
        const obj2 = { zIndex };
        cResult[0] = zIndex;
        cResult[1] = obj2;
        let tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.variantOption) {
        if (cResult[3] === tmp5) {
          let tmp6 = cResult[4];
        }
        if (cResult[5] === tmp4.variantOptionInner) {
          if (cResult[6] === tmp4.variantOverflowInner) {
            let tmp7 = cResult[7];
          }
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { color: nativeDefault.colors.WHITE, size: "xxs" };
            const tmp12 = React4(PlusSmallIcon.PlusSmallIcon, obj3);
            cResult[8] = tmp12;
            let tmp9 = tmp12;
          } else {
            tmp9 = cResult[8];
          }
          if (cResult[9] !== tmp7) {
            const obj4 = { style: tmp7, children: tmp9 };
            const tmp16 = React4(View, obj4);
            cResult[9] = tmp7;
            cResult[10] = tmp16;
            let tmp13 = tmp16;
          } else {
            tmp13 = cResult[10];
          }
          if (cResult[11] === tmp6) {
            if (cResult[12] === tmp13) {
              let tmp17 = cResult[13];
            }
            return tmp17;
          }
          const obj5 = { style: tmp6, children: tmp13 };
          const tmp20 = React4(View, obj5);
          cResult[11] = tmp6;
          cResult[12] = tmp13;
          cResult[13] = tmp20;
          tmp17 = tmp20;
        }
        const items = [,];
        ({ variantOptionInner: arr2[0], variantOverflowInner: arr2[1] } = tmp4);
        cResult[5] = tmp4.variantOptionInner;
        cResult[6] = tmp4.variantOverflowInner;
        cResult[7] = items;
        tmp7 = items;
      }
      const items1 = [tmp4.variantOption, tmp5];
      cResult[2] = tmp4.variantOption;
      cResult[3] = tmp5;
      cResult[4] = items1;
      tmp6 = items1;
    }
  : function VariantOverflowOption(isSelected) {
      const tmp = closure_7(isSelected.isSelected);
      const obj = { style: null, children: null };
      const items = [tmp.variantOption, { zIndex: isSelected.zIndex }];
      obj.style = items;
      const obj2 = {
        style: null,
        children: React4(PlusSmallIcon.PlusSmallIcon, { color: nativeDefault.colors.WHITE, size: "xxs" }),
      };
      const items1 = [,];
      ({ variantOptionInner: arr2[0], variantOverflowInner: arr2[1] } = tmp);
      obj2.style = items1;
      obj.children = React4(View, obj2);
      return React4(View, obj);
    };
ReactCompilerGating = fn(558);
let obj3 = { display: "flex", flexDirection: "row", alignItems: "center", paddingStart: nativeDefault.space.PX_4 };
let size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardVariants.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function CardProductVariants(product) {
        const cResult = defaultVariantIndex(576).c(14);
        let variants = product.product;
        const tmp2 = closure_6();
        const obj = defaultVariantIndex(576);
        defaultVariantIndex = defaultVariantIndex(8938).useDefaultVariantIndex(variants);
        const obj2 = defaultVariantIndex(8938);
        if (obj3.getIsVariantProduct(variants)) {
          let num3 = 3;
          if (variants.variants.length <= 4) {
            num3 = length;
          }
          if (cResult[0] === num3) {
            if (cResult[1] === variants.variants) {
              if (cResult[2] === defaultVariantIndex) {
                if (cResult[6] === num3) {
                  if (cResult[7] === defaultVariantIndex) {
                    if (cResult[8] === length) {
                      let tmp10 = cResult[9];
                    }
                    if (cResult[10] === tmp2.variantsContainer) {
                      if (cResult[11] === tmp6) {
                        if (cResult[12] === tmp10) {
                          let tmp14 = cResult[13];
                        }
                        return tmp14;
                      }
                    }
                    const obj4 = { style: tmp5, children: null };
                    const items = [tmp6, tmp10];
                    obj4.children = items;
                    const tmp17 = closure_5(View, obj4);
                    cResult[10] = tmp2.variantsContainer;
                    cResult[11] = tmp6;
                    cResult[12] = tmp10;
                    cResult[13] = tmp17;
                    tmp14 = tmp17;
                  }
                }
                let tmp12Result = num3 !== length;
                if (tmp12Result) {
                  const obj5 = { isSelected: defaultVariantIndex >= 3, zIndex: null };
                  let num8 = 0;
                  if (defaultVariantIndex >= 3) {
                    num8 = 4;
                  }
                  obj5.zIndex = num8;
                  tmp12Result = closure_4(closure_10, obj5);
                }
                cResult[6] = num3;
                cResult[7] = defaultVariantIndex;
                cResult[8] = length;
                cResult[9] = tmp12Result;
                tmp10 = tmp12Result;
              }
            }
          }
          if (cResult[4] !== defaultVariantIndex) {
            const fn = function f(variant, arg1) {
              return React4(
                closure_8,
                { variant, isSelected: arg1 === defaultVariantIndex, zIndex: 4 - Math.abs(defaultVariantIndex - arg1) },
                variant.variantValue,
              );
            };
            cResult[4] = defaultVariantIndex;
            cResult[5] = fn;
            let tmp7 = fn;
          } else {
            tmp7 = cResult[5];
          }
          const variants1 = variants.variants;
          const substr = variants1.slice(0, num3);
          const mapped = substr.map(tmp7);
          cResult[0] = num3;
          variants = variants.variants;
          cResult[1] = variants;
          cResult[2] = defaultVariantIndex;
          cResult[3] = mapped;
        } else {
          return null;
        }
        obj3 = defaultVariantIndex(7263);
      }
    : function CardProductVariants(product) {
        product = product.product;
        let defaultVariantIndex;
        const tmp = closure_6();
        defaultVariantIndex = defaultVariantIndex(8938).useDefaultVariantIndex(product);
        const obj = defaultVariantIndex(8938);
        if (obj2.getIsVariantProduct(product)) {
          let num3 = 3;
          if (product.variants.length <= 4) {
            num3 = length;
          }
          const obj3 = { style: tmp.variantsContainer, children: null };
          const variants = product.variants;
          const substr = variants.slice(0, num3);
          const items = [
            substr.map((variant, index) =>
              React4(
                closure_8,
                {
                  variant,
                  isSelected: index === defaultVariantIndex,
                  zIndex: 4 - Math.abs(defaultVariantIndex - index),
                },
                variant.variantValue,
              ),
            ),
          ];
          let tmp7Result = num3 !== length;
          if (tmp7Result) {
            const obj4 = { isSelected: defaultVariantIndex >= 3, zIndex: null };
            let num5 = 0;
            if (defaultVariantIndex >= 3) {
              num5 = 4;
            }
            obj4.zIndex = num5;
            tmp7Result = closure_4(closure_10, obj4);
          }
          items[1] = tmp7Result;
          obj3.children = items;
          return closure_5(View, obj3);
        } else {
          return null;
        }
        obj2 = defaultVariantIndex(7263);
      },
);
