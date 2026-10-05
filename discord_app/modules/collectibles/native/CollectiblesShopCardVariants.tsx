// discord_app/modules/collectibles/native/CollectiblesShopCardVariants.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import CheckmarkSmallIcon2 from "../../../design/components/Icon/native/redesign/generated/CheckmarkSmallIcon.tsx";
import useProductPurchaseState from "../hooks/useProductPurchaseState.tsx";
import useIsVariantColorLightDefault from "../hooks/useIsVariantColorLight.tsx";
import PlusSmallIcon2 from "../../../design/components/Icon/native/redesign/generated/PlusSmallIcon.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let product;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { variantsContainer: obj2 };
obj2 = { display: "flex", flexDirection: "row", alignItems: "center", paddingStart: nativeDefault.space.PX_4 };
let closure_6 = createStyles.createStyles(obj);
createStyles = createStyles_mod;
let closure_7 = createStyles.createStyles((arg0) => {
  let num;
  let size1;
  const obj = {
    variantOption: size,
    variantOptionInner: size1,
    variantOverflowInner: { backgroundColor: nativeDefault.colors.ICON_MUTED },
  };
  size = {
    marginStart: -nativeDefault.space.PX_4,
    width: 14,
    height: 14,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    borderRadius: nativeDefault.radii.round,
    justifyContent: "center",
    alignItems: "center",
  };
  size1 = {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: nativeDefault.radii.round,
    borderWidth: num,
    borderColor: nativeDefault.colors.BUTTON_OUTLINE_PRIMARY_TEXT,
  };
  num = 0;
  if (arg0) {
    num = 1;
  }
  ({ backgroundColor: nativeDefault.colors.ICON_MUTED });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isSelected) => {
      let tmp3;
      let variant;
      let zIndex;
      const obj = react2;
      const cResult = obj.c(19);
      ({ variant, zIndex } = isSelected);
      const tmp2 = closure_7(isSelected.isSelected);
      const obj2 = useProductPurchaseState;
      const isPurchased = obj2.useProductPurchaseState(variant).isPurchased;
      if (cResult[0] !== zIndex) {
        const obj3 = { zIndex };
        cResult[0] = zIndex;
        cResult[1] = obj3;
        tmp3 = obj3;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === tmp2.variantOption) {
        let tmp4;
        let tmp5;
        if (cResult[3] === tmp3) {
          tmp4 = cResult[4];
        }
        if (cResult[5] !== variant.variantValue) {
          const obj4 = { backgroundColor: variant.variantValue };
          cResult[5] = variant.variantValue;
          cResult[6] = obj4;
          tmp5 = obj4;
        } else {
          tmp5 = cResult[6];
        }
        if (cResult[7] === tmp2.variantOptionInner) {
          let tmp6;
          if (cResult[8] === tmp5) {
            tmp6 = cResult[9];
          }
          if (cResult[10] === isPurchased) {
            let tmp7;
            if (cResult[11] === variant) {
              tmp7 = cResult[12];
            }
            if (cResult[13] === tmp6) {
              let tmp11;
              if (cResult[14] === tmp7) {
                tmp11 = cResult[15];
              }
              if (cResult[16] === tmp4) {
                let tmp15;
                if (cResult[17] === tmp11) {
                  tmp15 = cResult[18];
                }
                return tmp15;
              }
              const obj5 = { style: tmp4, children: tmp11 };
              const tmp18 = React3(View, obj5);
              cResult[16] = tmp4;
              cResult[17] = tmp11;
              cResult[18] = tmp18;
              tmp15 = tmp18;
            }
            const obj6 = { style: tmp6, children: tmp7 };
            const tmp14 = React3(View, obj6);
            cResult[13] = tmp6;
            cResult[14] = tmp7;
            cResult[15] = tmp14;
            tmp11 = tmp14;
          }
          let tmp8 = isPurchased;
          if (tmp8) {
            const obj7 = { variant };
            tmp8 = React3(closure_9, obj7);
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
  : (variant) => {
      let items;
      let items1;
      let obj3;
      variant = variant.variant;
      const zIndex = variant.zIndex;
      const tmp = closure_7(variant.isSelected);
      const obj = useProductPurchaseState;
      let isPurchased = obj.useProductPurchaseState(variant).isPurchased;
      const obj2 = { style: items, children: React3(View, obj3) };
      items = [tmp.variantOption, { zIndex }];
      obj3 = { style: items1, children: isPurchased };
      items1 = [tmp.variantOptionInner, { backgroundColor: variant.variantValue }];
      if (isPurchased) {
        const obj4 = { variant };
        isPurchased = React3(closure_9, obj4);
      }
      return React3(View, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (variant) => {
      let tmp6;
      const obj = react2;
      const cResult = obj.c(2);
      const tmp4 = useIsVariantColorLightDefault(variant.variant);
      const colors = nativeDefault.colors;
      const tmp5 = tmp4 ? colors.BLACK : colors.WHITE;
      if (cResult[0] !== tmp5) {
        const obj2 = { color: tmp5, size: "xxs" };
        const tmp8 = React3(CheckmarkSmallIcon2.CheckmarkSmallIcon, obj2);
        cResult[0] = tmp5;
        cResult[1] = tmp8;
        tmp6 = tmp8;
      } else {
        tmp6 = cResult[1];
      }
      return tmp6;
    }
  : (variant) => {
      const tmp = useIsVariantColorLightDefault(variant.variant);
      const CheckmarkSmallIcon = CheckmarkSmallIcon2.CheckmarkSmallIcon;
      const colors = nativeDefault.colors;
      const obj = { color: tmp ? colors.BLACK : colors.WHITE, size: "xxs" };
      return React3(CheckmarkSmallIcon, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (zIndex) => {
      let tmp5;
      const obj = react2;
      const cResult = obj.c(14);
      zIndex = zIndex.zIndex;
      const tmp4 = closure_7(zIndex.isSelected);
      if (cResult[0] !== zIndex) {
        const obj2 = { zIndex };
        cResult[0] = zIndex;
        cResult[1] = obj2;
        tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.variantOption) {
        let tmp6;
        if (cResult[3] === tmp5) {
          tmp6 = cResult[4];
        }
        if (cResult[5] === tmp4.variantOptionInner) {
          let tmp7;
          let tmp9;
          let tmp13;
          if (cResult[6] === tmp4.variantOverflowInner) {
            tmp7 = cResult[7];
          }
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { color: nativeDefault.colors.WHITE, size: "xxs" };
            const PlusSmallIcon = PlusSmallIcon2.PlusSmallIcon;
            const tmp12 = React3(PlusSmallIcon, obj3);
            cResult[8] = tmp12;
            tmp9 = tmp12;
          } else {
            tmp9 = cResult[8];
          }
          if (cResult[9] !== tmp7) {
            const obj4 = { style: tmp7, children: tmp9 };
            const tmp16 = React3(View, obj4);
            cResult[9] = tmp7;
            cResult[10] = tmp16;
            tmp13 = tmp16;
          } else {
            tmp13 = cResult[10];
          }
          if (cResult[11] === tmp6) {
            let tmp17;
            if (cResult[12] === tmp13) {
              tmp17 = cResult[13];
            }
            return tmp17;
          }
          const obj5 = { style: tmp6, children: tmp13 };
          const tmp20 = React3(View, obj5);
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
  : (zIndex) => {
      let PlusSmallIcon;
      let items;
      let items1;
      let obj2;
      let obj3;
      zIndex = zIndex.zIndex;
      const tmp = closure_7(zIndex.isSelected);
      const obj = { style: items, children: React3(View, obj2) };
      items = [tmp.variantOption, { zIndex }];
      obj2 = { style: items1, children: React3(PlusSmallIcon, obj3) };
      items1 = [,];
      ({ variantOptionInner: arr2[0], variantOverflowInner: arr2[1] } = tmp);
      obj3 = { color: nativeDefault.colors.WHITE, size: "xxs" };
      PlusSmallIcon = PlusSmallIcon2.PlusSmallIcon;
      return React3(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (product) => {
        let defaultVariantIndex;
        let items;
        let num8;
        let obj = defaultVariantIndex(576);
        const cResult = obj.c(14);
        product = product.product;
        const tmp2 = closure_6();
        const obj2 = defaultVariantIndex(8419);
        defaultVariantIndex = obj2.useDefaultVariantIndex(product);
        const obj3 = defaultVariantIndex(7064);
        if (obj3.getIsVariantProduct(product)) {
          let tmp7;
          let num3 = 3;
          if (product.variants.length <= 4) {
            num3 = length;
          }
          if (cResult[0] === num3) {
            if (cResult[1] === product.variants) {
              let tmp6;
              if (cResult[2] === defaultVariantIndex) {
                tmp6 = cResult[3];
              }
              if (cResult[6] === num3) {
                if (cResult[7] === defaultVariantIndex) {
                  let tmp9;
                  if (cResult[8] === product.variants.length) {
                    tmp9 = cResult[9];
                  }
                  if (cResult[10] === tmp2.variantsContainer) {
                    if (cResult[11] === tmp6) {
                      let tmp13;
                      if (cResult[12] === tmp9) {
                        tmp13 = cResult[13];
                      }
                      return tmp13;
                    }
                  }
                  const obj4 = { style: tmp5, children: items };
                  items = [tmp6, tmp9];
                  const tmp16 = closure_5(View, obj4);
                  cResult[10] = tmp2.variantsContainer;
                  cResult[11] = tmp6;
                  cResult[12] = tmp9;
                  cResult[13] = tmp16;
                  tmp13 = tmp16;
                }
              }
              let tmp11Result = num3 !== length;
              if (tmp11Result) {
                const obj5 = { isSelected: defaultVariantIndex >= 3, zIndex: num8 };
                num8 = 0;
                if (defaultVariantIndex >= 3) {
                  num8 = 4;
                }
                tmp11Result = closure_4(closure_10, obj5);
              }
              cResult[6] = num3;
              cResult[7] = defaultVariantIndex;
              cResult[8] = product.variants.length;
              cResult[9] = tmp11Result;
              tmp9 = tmp11Result;
            }
          }
          if (cResult[4] !== defaultVariantIndex) {
            const fn = function x(variant, arg1) {
              const obj = {
                variant,
                isSelected: arg1 === defaultVariantIndex,
                zIndex: 4 - Math.abs(defaultVariantIndex - arg1),
              };
              return React3(closure_8, obj, variant.variantValue);
            };
            cResult[4] = defaultVariantIndex;
            cResult[5] = fn;
            tmp7 = fn;
          } else {
            tmp7 = cResult[5];
          }
          const variants = product.variants;
          const substr = variants.slice(0, num3);
          const mapped = substr.map(tmp7);
          cResult[0] = num3;
          cResult[1] = product.variants;
          cResult[2] = defaultVariantIndex;
          cResult[3] = mapped;
          tmp6 = mapped;
        } else {
          return null;
        }
      }
    : (product) => {
        let items;
        let num5;
        product = product.product;
        let defaultVariantIndex;
        const tmp = closure_6();
        let obj = defaultVariantIndex(8419);
        defaultVariantIndex = obj.useDefaultVariantIndex(product);
        const obj2 = defaultVariantIndex(7064);
        if (obj2.getIsVariantProduct(product)) {
          let num3 = 3;
          if (product.variants.length <= 4) {
            num3 = length;
          }
          const variants = product.variants;
          const obj3 = { style: tmp.variantsContainer, children: items };
          const substr = variants.slice(0, num3);
          items = [
            substr.map((variant, index) => {
              const obj = {
                variant,
                isSelected: index === defaultVariantIndex,
                zIndex: 4 - Math.abs(defaultVariantIndex - index),
              };
              return React3(closure_8, obj, variant.variantValue);
            }),
          ];
          let tmp7Result = num3 !== length;
          if (tmp7Result) {
            const obj4 = { isSelected: defaultVariantIndex >= 3, zIndex: num5 };
            num5 = 0;
            if (defaultVariantIndex >= 3) {
              num5 = 4;
            }
            tmp7Result = closure_4(closure_10, obj4);
          }
          items[1] = tmp7Result;
          return closure_5(View, obj3);
        } else {
          return null;
        }
      },
);
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardVariants.tsx");

export default memoResult;
