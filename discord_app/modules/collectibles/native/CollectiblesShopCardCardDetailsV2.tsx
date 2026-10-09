// discord_app/modules/collectibles/native/CollectiblesShopCardCardDetailsV2.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../_runtime/05388_LinearGradient.js";
import CollectiblesProductUtils from "../utils/CollectiblesProductUtils.tsx";
import CollectiblesUtils from "../CollectiblesUtils.tsx";
import useCurrentUser from "../hooks/useCurrentUser.tsx";
import useDefaultVariantIndex from "../hooks/useDefaultVariantIndex.tsx";
import NitroWheelIcon from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import OrbsIcon from "../../../design/components/Icon/native/redesign/generated/OrbsIcon.tsx";
import collectibles_CollectiblesUtils from "CollectiblesUtils.tsx";
import _mod9041 from "../../virtual_currency/hooks/index.tsx";
import CollectiblesShopPricePlaceholder from "CollectiblesShopPricePlaceholder.tsx";
import TagIcon from "../../../design/components/Icon/native/redesign/generated/TagIcon.tsx";
import getProductName from "../utils/getProductName.tsx";
import CollectiblesShopCardVariantsDefault from "CollectiblesShopCardVariants.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import IAPStore from "../../../stores/native/IAPStore.android.tsx";

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ CurrencyCodes: metroRequire, VerticalGradient: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5091);
let obj = {
  regularMetadataContainer: null,
  assetName: null,
  priceVariantsContainer: null,
  priceDescription: null,
  text: null,
  discountPercentage: null,
  wheelIcon: null,
  androidTextPadding: null,
};
let size = {
  position: "absolute",
  height: "45%",
  width: "100%",
  padding: 10,
  flex: 1,
  bottom: 0,
  overflow: "hidden",
  borderBottomLeftRadius: nativeDefault.radii.sm,
  borderBottomRightRadius: nativeDefault.radii.sm,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
};
obj.regularMetadataContainer = size;
obj.assetName = { marginBottom: 4 };
obj.priceVariantsContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  gap: nativeDefault.space.PX_4,
};
obj.priceDescription = { display: "flex", flexDirection: "row", alignItems: "center", flex: 1 };
obj.text = { flexShrink: 1 };
obj.discountPercentage = { paddingLeft: 3 };
obj.wheelIcon = { marginTop: 0, marginRight: 3 };
obj.androidTextPadding = { paddingBottom: 2 };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
const memoResult = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = c.c(95);
        ({
          product,
          hasShopDiscount,
          discountSource,
          styles,
          collectibleProductState,
          isFetchingGoogleSkus,
          preferVCPrice,
          isDisabled,
        } = arg0);
        const defaultVariantIndex = useDefaultVariantIndex.useDefaultVariantIndex(product);
        if (cResult[0] === hasShopDiscount) {
          if (cResult[1] === product) {
            if (cResult[2] === defaultVariantIndex) {
              let tmp5 = cResult[3];
              let tmp6 = cResult[4];
            }
            if (cResult[5] === hasShopDiscount) {
              if (cResult[6] === tmp5) {
                let tmp9 = cResult[7];
              }
              if (cResult[8] === hasShopDiscount) {
                if (cResult[9] === tmp5) {
                  let tmp11 = cResult[10];
                }
                const discountPercentage = tmp11.discountPercentage;
                if (cResult[11] === hasShopDiscount) {
                  if (cResult[12] === tmp5) {
                    let tmp13 = cResult[13];
                  }
                  const discountPercentage2 = tmp13.discountPercentage;
                  const balance = _mod9041.useFetchVirtualCurrencyBalance().balance;
                  let tmp17 = null;
                  if (null != tmp9) {
                    tmp17 = null;
                    if (null != balance) {
                      tmp17 = tmp9.amount <= balance;
                    }
                  }
                  if (isFetchingGoogleSkus) {
                    if (null == tmp6) {
                      const _Symbol6 = Symbol;
                      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                        const tmp114 = closure_1_8(
                          CollectiblesShopPricePlaceholder.CollectiblesShopPricePlaceholder,
                          {},
                        );
                        cResult[14] = tmp114;
                        let tmp112 = tmp114;
                      } else {
                        tmp112 = cResult[14];
                      }
                      return tmp112;
                    }
                  }
                  if ("partiallyOwnedBundle" === collectibleProductState) {
                    const _Symbol5 = Symbol;
                    ({ priceDescription: priceDescription5, text: text5 } = styles);
                    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl6 = util.intl;
                      const stringResult = intl6.string(util.t.BEjTij);
                      cResult[15] = stringResult;
                      let tmp102 = stringResult;
                    } else {
                      tmp102 = cResult[15];
                    }
                    if (cResult[16] !== styles.text) {
                      const obj3 = {
                        variant: "text-xs/semibold",
                        color: "mobile-text-heading-primary",
                        lineClamp: 1,
                        style: text5,
                        children: tmp102,
                      };
                      const tmp106 = closure_1_8(Text_Text.Text, obj3);
                      cResult[16] = styles.text;
                      cResult[17] = tmp106;
                      let tmp104 = tmp106;
                    } else {
                      tmp104 = cResult[17];
                    }
                    if (cResult[18] === styles.priceDescription) {
                      if (cResult[19] === tmp104) {
                        let tmp107 = cResult[20];
                      }
                      return tmp107;
                    }
                    const obj4 = { style: priceDescription5, children: tmp104 };
                    const tmp110 = closure_1_8(View, obj4);
                    cResult[18] = styles.priceDescription;
                    cResult[19] = tmp104;
                    cResult[20] = tmp110;
                    tmp107 = tmp110;
                  } else if ("purchased" === collectibleProductState) {
                    const _Symbol4 = Symbol;
                    ({ priceDescription: priceDescription4, text: text4 } = styles);
                    if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl5 = util.intl;
                      const stringResult1 = intl5.string(util.t["6cfuDj"]);
                      cResult[21] = stringResult1;
                      let tmp92 = stringResult1;
                    } else {
                      tmp92 = cResult[21];
                    }
                    if (cResult[22] !== styles.text) {
                      const obj5 = {
                        variant: "text-xs/semibold",
                        color: "mobile-text-heading-primary",
                        lineClamp: 1,
                        style: text4,
                        children: tmp92,
                      };
                      const tmp96 = closure_1_8(Text_Text.Text, obj5);
                      cResult[22] = styles.text;
                      cResult[23] = tmp96;
                      let tmp94 = tmp96;
                    } else {
                      tmp94 = cResult[23];
                    }
                    if (cResult[24] === styles.priceDescription) {
                      if (cResult[25] === tmp94) {
                        let tmp97 = cResult[26];
                      }
                      return tmp97;
                    }
                    const obj6 = { style: priceDescription4, children: tmp94 };
                    const tmp100 = closure_1_8(View, obj6);
                    cResult[24] = styles.priceDescription;
                    cResult[25] = tmp94;
                    cResult[26] = tmp100;
                    tmp97 = tmp100;
                  } else if ("nitroUpsell" === collectibleProductState) {
                    const _Symbol3 = Symbol;
                    ({ priceDescription: priceDescription3, text: text3 } = styles);
                    if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl4 = util.intl;
                      const stringResult2 = intl4.string(util.t.sEAnVH);
                      cResult[27] = stringResult2;
                      let tmp82 = stringResult2;
                    } else {
                      tmp82 = cResult[27];
                    }
                    if (cResult[28] !== styles.text) {
                      const obj7 = {
                        variant: "text-xs/semibold",
                        color: "mobile-text-heading-primary",
                        lineClamp: 1,
                        style: text3,
                        children: tmp82,
                      };
                      const tmp86 = closure_1_8(Text_Text.Text, obj7);
                      cResult[28] = styles.text;
                      cResult[29] = tmp86;
                      let tmp84 = tmp86;
                    } else {
                      tmp84 = cResult[29];
                    }
                    if (cResult[30] === styles.priceDescription) {
                      if (cResult[31] === tmp84) {
                        let tmp87 = cResult[32];
                      }
                      return tmp87;
                    }
                    const obj8 = { style: priceDescription3, children: tmp84 };
                    const tmp90 = closure_1_8(View, obj8);
                    cResult[30] = styles.priceDescription;
                    cResult[31] = tmp84;
                    cResult[32] = tmp90;
                    tmp87 = tmp90;
                  } else if ("nitroClaim" === collectibleProductState) {
                    const _Symbol2 = Symbol;
                    ({ priceDescription: priceDescription2, text: text2 } = styles);
                    if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl3 = util.intl;
                      const stringResult3 = intl3.string(util.t.rt69oo);
                      cResult[33] = stringResult3;
                      let tmp72 = stringResult3;
                    } else {
                      tmp72 = cResult[33];
                    }
                    if (cResult[34] !== styles.text) {
                      const obj9 = {
                        variant: "text-xs/semibold",
                        color: "mobile-text-heading-primary",
                        lineClamp: 1,
                        style: text2,
                        children: tmp72,
                      };
                      const tmp76 = closure_1_8(Text_Text.Text, obj9);
                      cResult[34] = styles.text;
                      cResult[35] = tmp76;
                      let tmp74 = tmp76;
                    } else {
                      tmp74 = cResult[35];
                    }
                    if (cResult[36] === styles.priceDescription) {
                      if (cResult[37] === tmp74) {
                        let tmp77 = cResult[38];
                      }
                      return tmp77;
                    }
                    const obj10 = { style: priceDescription2, children: tmp74 };
                    const tmp80 = closure_1_8(View, obj10);
                    cResult[36] = styles.priceDescription;
                    cResult[37] = tmp74;
                    cResult[38] = tmp80;
                    tmp77 = tmp80;
                  } else if (isDisabled) {
                    const _Symbol = Symbol;
                    ({ priceDescription, text } = styles);
                    if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl2 = util.intl;
                      const stringResult4 = intl2.string(util.t.wu4gyV);
                      cResult[39] = stringResult4;
                      let tmp62 = stringResult4;
                    } else {
                      tmp62 = cResult[39];
                    }
                    if (cResult[40] !== styles.text) {
                      const obj11 = {
                        variant: "text-xs/semibold",
                        color: "mobile-text-heading-primary",
                        lineClamp: 1,
                        style: text,
                        children: tmp62,
                      };
                      const tmp66 = closure_1_8(Text_Text.Text, obj11);
                      cResult[40] = styles.text;
                      cResult[41] = tmp66;
                      let tmp64 = tmp66;
                    } else {
                      tmp64 = cResult[41];
                    }
                    if (cResult[42] === styles.priceDescription) {
                      if (cResult[43] === tmp64) {
                        let tmp67 = cResult[44];
                      }
                      return tmp67;
                    }
                    const obj12 = { style: priceDescription, children: tmp64 };
                    const tmp70 = closure_1_8(View, obj12);
                    cResult[42] = styles.priceDescription;
                    cResult[43] = tmp64;
                    cResult[44] = tmp70;
                    tmp67 = tmp70;
                  } else {
                    if (null != tmp9) {
                      if (null != balance) {
                        let num32 = 1;
                        if (false === tmp17) {
                          num32 = 0.5;
                        }
                        if (cResult[45] !== num32) {
                          const obj13 = { opacity: num32 };
                          cResult[45] = num32;
                          cResult[46] = obj13;
                          let tmp39 = obj13;
                        } else {
                          tmp39 = cResult[46];
                        }
                        if (cResult[47] === styles.priceDescription) {
                          if (cResult[48] === tmp39) {
                            let tmp40 = cResult[49];
                          }
                          if (cResult[50] !== styles.wheelIcon) {
                            const obj14 = {
                              size: "xxs",
                              color: "mobile-text-heading-primary",
                              style: styles.wheelIcon,
                            };
                            const tmp43 = closure_1_8(OrbsIcon.OrbsIcon, obj14);
                            cResult[50] = styles.wheelIcon;
                            cResult[51] = tmp43;
                            let tmp41 = tmp43;
                          } else {
                            tmp41 = cResult[51];
                          }
                          if (cResult[52] !== tmp9.amount) {
                            const intl = util.intl;
                            const obj15 = { orbAmount: tmp9.amount };
                            const formatToPlainStringResult = intl.formatToPlainString(util.t.W4DfeF, obj15);
                            cResult[52] = tmp9.amount;
                            cResult[53] = formatToPlainStringResult;
                            let tmp44 = formatToPlainStringResult;
                          } else {
                            tmp44 = cResult[53];
                          }
                          if (cResult[54] !== styles.androidTextPadding) {
                            const tmp47 = PlatformUtils.isAndroid() && styles.androidTextPadding;
                            cResult[54] = styles.androidTextPadding;
                            cResult[55] = tmp47;
                            let tmp46 = tmp47;
                            const tmpResult10 = PlatformUtils;
                          } else {
                            tmp46 = cResult[55];
                          }
                          if (cResult[56] === styles.text) {
                            if (cResult[57] === tmp46) {
                              let tmp48 = cResult[58];
                            }
                            if (cResult[59] === tmp44) {
                              if (cResult[60] === tmp48) {
                                if (cResult[61] === tmp9.amount) {
                                  let tmp49 = cResult[62];
                                }
                                if (cResult[63] === styles.androidTextPadding) {
                                  if (cResult[64] === styles.discountPercentage) {
                                    if (cResult[65] === styles.text) {
                                      if (cResult[66] === discountPercentage2) {
                                        let tmp52 = cResult[67];
                                      }
                                      if (cResult[68] === tmp49) {
                                        if (cResult[69] === tmp52) {
                                          if (cResult[70] === tmp40) {
                                            if (cResult[71] === tmp41) {
                                              let tmp57 = cResult[72];
                                            }
                                            return tmp57;
                                          }
                                        }
                                      }
                                      const obj16 = { style: tmp40, children: null };
                                      const items = [tmp41, tmp49, tmp52];
                                      obj16.children = items;
                                      const tmp60 = options(View, obj16);
                                      cResult[68] = tmp49;
                                      cResult[69] = tmp52;
                                      cResult[70] = tmp40;
                                      cResult[71] = tmp41;
                                      cResult[72] = tmp60;
                                      tmp57 = tmp60;
                                    }
                                  }
                                }
                                let tmp54Result =
                                  discountPercentage2 >= CollectiblesUtils.DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
                                if (tmp54Result) {
                                  const items1 = [, ,];
                                  ({ discountPercentage: arr6[0], text: arr6[1] } = styles);
                                  let androidTextPadding;
                                  if (tmpResult11.isAndroid()) {
                                    androidTextPadding = styles.androidTextPadding;
                                  }
                                  const obj17 = {
                                    style: null,
                                    color: "text-feedback-positive",
                                    variant: "text-xs/semibold",
                                    lineClamp: 1,
                                    children: null,
                                  };
                                  items1[2] = androidTextPadding;
                                  obj17.style = items1;
                                  const _HermesInternal2 = HermesInternal;
                                  obj17.children = "-" + discountPercentage2 + "%";
                                  tmp54Result = closure_1_8(Text_Text.Text, obj17);
                                  tmpResult11 = PlatformUtils;
                                }
                                cResult[63] = styles.androidTextPadding;
                                cResult[64] = styles.discountPercentage;
                                cResult[65] = styles.text;
                                cResult[66] = discountPercentage2;
                                cResult[67] = tmp54Result;
                                tmp52 = tmp54Result;
                              }
                            }
                            const obj18 = {
                              variant: "text-xs/semibold",
                              color: "mobile-text-heading-primary",
                              lineClamp: 1,
                              accessibilityLabel: tmp44,
                              style: tmp48,
                              children: tmp9.amount,
                            };
                            const tmp51 = closure_1_8(Text_Text.Text, obj18);
                            cResult[59] = tmp44;
                            cResult[60] = tmp48;
                            cResult[61] = tmp9.amount;
                            cResult[62] = tmp51;
                            tmp49 = tmp51;
                          }
                          const items2 = [styles.text, tmp46];
                          cResult[56] = styles.text;
                          cResult[57] = tmp46;
                          cResult[58] = items2;
                          tmp48 = items2;
                        }
                        const items3 = [styles.priceDescription, tmp39];
                        cResult[47] = styles.priceDescription;
                        cResult[48] = tmp39;
                        cResult[49] = items3;
                        tmp40 = items3;
                      }
                    }
                    if (cResult[73] === discountSource) {
                      if (cResult[74] === hasShopDiscount) {
                        if (cResult[75] === styles.wheelIcon) {
                          let tmp18 = cResult[76];
                        }
                        if (cResult[77] !== styles.androidTextPadding) {
                          const tmp25 = PlatformUtils.isAndroid() && styles.androidTextPadding;
                          cResult[77] = styles.androidTextPadding;
                          cResult[78] = tmp25;
                          let tmp24 = tmp25;
                          const tmpResult12 = PlatformUtils;
                        } else {
                          tmp24 = cResult[78];
                        }
                        if (cResult[79] === styles.text) {
                          if (cResult[80] === tmp24) {
                            let tmp26 = cResult[81];
                          }
                          if (cResult[82] === tmp6) {
                            if (cResult[83] === tmp26) {
                              let tmp27 = cResult[84];
                            }
                            if (cResult[85] === discountPercentage) {
                              if (cResult[86] === styles.androidTextPadding) {
                                if (cResult[87] === styles.discountPercentage) {
                                  if (cResult[88] === styles.text) {
                                    let tmp30 = cResult[89];
                                  }
                                  if (cResult[90] === styles.priceDescription) {
                                    if (cResult[91] === tmp30) {
                                      if (cResult[92] === tmp18) {
                                        if (cResult[93] === tmp27) {
                                          let tmp35 = cResult[94];
                                        }
                                        return tmp35;
                                      }
                                    }
                                  }
                                  const obj19 = { style: styles.priceDescription, children: null };
                                  const items4 = [tmp18, tmp27, tmp30];
                                  obj19.children = items4;
                                  const tmp38 = options(View, obj19);
                                  cResult[90] = styles.priceDescription;
                                  cResult[91] = tmp30;
                                  cResult[92] = tmp18;
                                  cResult[93] = tmp27;
                                  cResult[94] = tmp38;
                                  tmp35 = tmp38;
                                }
                              }
                            }
                            let tmp32Result =
                              discountPercentage >= CollectiblesUtils.DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
                            if (tmp32Result) {
                              const items5 = [, ,];
                              ({ discountPercentage: arr2[0], text: arr2[1] } = styles);
                              let androidTextPadding1;
                              if (tmpResult13.isAndroid()) {
                                androidTextPadding1 = styles.androidTextPadding;
                              }
                              const obj20 = {
                                style: null,
                                color: "text-feedback-positive",
                                variant: "text-xs/semibold",
                                lineClamp: 1,
                                children: null,
                              };
                              items5[2] = androidTextPadding1;
                              obj20.style = items5;
                              const _HermesInternal = HermesInternal;
                              obj20.children = "-" + discountPercentage + "%";
                              tmp32Result = closure_1_8(Text_Text.Text, obj20);
                              tmpResult13 = PlatformUtils;
                            }
                            cResult[85] = discountPercentage;
                            cResult[86] = styles.androidTextPadding;
                            cResult[87] = styles.discountPercentage;
                            cResult[88] = styles.text;
                            cResult[89] = tmp32Result;
                            tmp30 = tmp32Result;
                          }
                          const obj21 = {
                            variant: "text-xs/semibold",
                            color: "mobile-text-heading-primary",
                            lineClamp: 1,
                            style: tmp26,
                            children: tmp6,
                          };
                          const tmp29 = closure_1_8(Text_Text.Text, obj21);
                          cResult[82] = tmp6;
                          cResult[83] = tmp26;
                          cResult[84] = tmp29;
                          tmp27 = tmp29;
                        }
                        const items6 = [styles.text, tmp24];
                        cResult[79] = styles.text;
                        cResult[80] = tmp24;
                        cResult[81] = items6;
                        tmp26 = items6;
                      }
                    }
                    if (!hasShopDiscount) {
                      cResult[73] = discountSource;
                      cResult[74] = hasShopDiscount;
                      cResult[75] = styles.wheelIcon;
                      cResult[76] = hasShopDiscount;
                      tmp18 = hasShopDiscount;
                    } else if (discountSource === CollectiblesUtils.ShopDiscountSource.THIRDPARTY) {
                      const obj22 = { size: "xs", color: "mobile-text-heading-primary", style: styles.wheelIcon };
                      let tmp21 = closure_1_8(TagIcon.TagIcon, obj22);
                    } else {
                      const obj23 = { size: "xs", color: "mobile-text-heading-primary", style: styles.wheelIcon };
                      tmp21 = closure_1_8(NitroWheelIcon.NitroWheelIcon, obj23);
                    }
                  }
                  const tmpResult = _mod9041;
                }
                const productDiscount = CollectiblesUtils.getProductDiscount(
                  tmp5,
                  hasShopDiscount,
                  constants.DISCORD_ORB,
                );
                cResult[11] = hasShopDiscount;
                cResult[12] = tmp5;
                cResult[13] = productDiscount;
                tmp13 = productDiscount;
                const tmpResult14 = CollectiblesUtils;
              }
              const productDiscount1 = CollectiblesUtils.getProductDiscount(tmp5, hasShopDiscount);
              cResult[8] = hasShopDiscount;
              cResult[9] = tmp5;
              cResult[10] = productDiscount1;
              tmp11 = productDiscount1;
              const tmpResult15 = CollectiblesUtils;
            }
            const obj24 = { product: tmp5, hasShopDiscount };
            const productOrbPrice = CollectiblesProductUtils.getProductOrbPrice(obj24);
            cResult[5] = hasShopDiscount;
            cResult[6] = tmp5;
            cResult[7] = productOrbPrice;
            tmp9 = productOrbPrice;
            const tmpResult16 = CollectiblesProductUtils;
          }
        }
        const selectedProduct = CollectiblesProductUtils.getSelectedProduct(product, defaultVariantIndex);
        const tmpResult17 = CollectiblesProductUtils;
        const formattedPriceForCollectiblesProduct =
          collectibles_CollectiblesUtils.getFormattedPriceForCollectiblesProduct(
            selectedProduct,
            hasShopDiscount,
            true,
          );
        cResult[0] = hasShopDiscount;
        cResult[1] = product;
        cResult[2] = defaultVariantIndex;
        cResult[3] = selectedProduct;
        cResult[4] = formattedPriceForCollectiblesProduct;
        tmp6 = formattedPriceForCollectiblesProduct;
        tmp5 = selectedProduct;
        const tmpResult18 = collectibles_CollectiblesUtils;
      }
    : (arg0) => {
        ({ product, hasShopDiscount } = arg0);
        ({ styles, collectibleProductState } = arg0);
        let memo;
        let balance;
        ({ discountSource, isFetchingGoogleSkus, preferVCPrice, isDisabled } = arg0);
        const defaultVariantIndex = hasShopDiscount(memo[9]).useDefaultVariantIndex(product);
        const obj = hasShopDiscount(memo[9]);
        const selectedProduct = hasShopDiscount(memo[10]).getSelectedProduct(product, defaultVariantIndex);
        const obj2 = hasShopDiscount(memo[10]);
        const formattedPriceForCollectiblesProduct = hasShopDiscount(memo[11]).getFormattedPriceForCollectiblesProduct(
          selectedProduct,
          hasShopDiscount,
          true,
        );
        const items = [selectedProduct, hasShopDiscount];
        memo = balance.useMemo(
          () => CollectiblesProductUtils.getProductOrbPrice({ product: selectedProduct, hasShopDiscount }),
          items,
        );
        const items1 = [selectedProduct, hasShopDiscount];
        const memo1 = balance.useMemo(
          () => CollectiblesUtils.getProductDiscount(selectedProduct, hasShopDiscount).discountPercentage,
          items1,
        );
        const items2 = [selectedProduct, hasShopDiscount];
        const memo2 = balance.useMemo(
          () =>
            CollectiblesUtils.getProductDiscount(selectedProduct, hasShopDiscount, constants.DISCORD_ORB)
              .discountPercentage,
          items2,
        );
        const obj3 = hasShopDiscount(memo[11]);
        balance = hasShopDiscount(memo[13]).useFetchVirtualCurrencyBalance().balance;
        const items3 = [balance, memo];
        const memo3 = balance.useMemo(() => {
          let tmp2 = null;
          if (null != memo) {
            tmp2 = null;
            if (null != balance) {
              tmp2 = tmp.amount <= tmp3;
            }
          }
          return tmp2;
        }, items3);
        if (isFetchingGoogleSkus) {
          if (null == formattedPriceForCollectiblesProduct) {
            return closure_8(hasShopDiscount(tmp2[14]).CollectiblesShopPricePlaceholder, {});
          }
        }
        if ("partiallyOwnedBundle" === collectibleProductState) {
          const obj5 = { style: styles.priceDescription, children: null };
          const obj6 = {
            variant: "text-xs/semibold",
            color: "mobile-text-heading-primary",
            lineClamp: 1,
            style: styles.text,
            children: null,
          };
          const intl6 = hasShopDiscount(tmp2[15]).intl;
          obj6.children = intl6.string(hasShopDiscount(tmp2[15]).t.BEjTij);
          obj5.children = closure_8(hasShopDiscount(tmp2[16]).Text, obj6);
          return closure_8(View, obj5);
        } else if ("purchased" === collectibleProductState) {
          const obj7 = { style: styles.priceDescription, children: null };
          const obj8 = {
            variant: "text-xs/semibold",
            color: "mobile-text-heading-primary",
            lineClamp: 1,
            style: styles.text,
            children: null,
          };
          const intl5 = hasShopDiscount(tmp2[15]).intl;
          obj8.children = intl5.string(hasShopDiscount(tmp2[15]).t["6cfuDj"]);
          obj7.children = closure_8(hasShopDiscount(tmp2[16]).Text, obj8);
          return closure_8(View, obj7);
        } else if ("nitroUpsell" === collectibleProductState) {
          const obj9 = { style: styles.priceDescription, children: null };
          const obj10 = {
            variant: "text-xs/semibold",
            color: "mobile-text-heading-primary",
            lineClamp: 1,
            style: styles.text,
            children: null,
          };
          const intl4 = hasShopDiscount(tmp2[15]).intl;
          obj10.children = intl4.string(hasShopDiscount(tmp2[15]).t.sEAnVH);
          obj9.children = closure_8(hasShopDiscount(tmp2[16]).Text, obj10);
          return closure_8(View, obj9);
        } else if ("nitroClaim" === collectibleProductState) {
          const obj11 = { style: styles.priceDescription, children: null };
          const obj12 = {
            variant: "text-xs/semibold",
            color: "mobile-text-heading-primary",
            lineClamp: 1,
            style: styles.text,
            children: null,
          };
          const intl3 = hasShopDiscount(tmp2[15]).intl;
          obj12.children = intl3.string(hasShopDiscount(tmp2[15]).t.rt69oo);
          obj11.children = closure_8(hasShopDiscount(tmp2[16]).Text, obj12);
          return closure_8(View, obj11);
        } else {
          if (isDisabled) {
            const obj13 = { style: styles.priceDescription, children: null };
            const obj14 = {
              variant: "text-xs/semibold",
              color: "mobile-text-heading-primary",
              lineClamp: 1,
              style: styles.text,
              children: null,
            };
            const intl2 = hasShopDiscount(tmp2[15]).intl;
            obj14.children = intl2.string(hasShopDiscount(tmp2[15]).t.wu4gyV);
            obj13.children = closure_8(hasShopDiscount(tmp2[16]).Text, obj14);
            let tmp11Result = closure_8(View, obj13);
          } else {
            if (null != memo) {
              if (null != balance) {
                if (true !== preferVCPrice) {
                  if (!memo3) {
                    tmp11Result = tmp11(tmp12, obj15);
                  }
                }
                const items4 = [styles.priceDescription];
                let num = 1;
                if (false === memo3) {
                  num = 0.5;
                }
                obj15 = { style: null, children: null };
                const obj16 = { opacity: num };
                items4[1] = obj16;
                obj15.style = items4;
                const obj17 = { size: "xxs", color: "mobile-text-heading-primary", style: styles.wheelIcon };
                const items5 = [closure_8(hasShopDiscount(tmp2[17]).OrbsIcon, obj17), ,];
                const obj18 = {
                  variant: "text-xs/semibold",
                  color: "mobile-text-heading-primary",
                  lineClamp: 1,
                  accessibilityLabel: null,
                  style: null,
                  children: null,
                };
                const intl = hasShopDiscount(tmp2[15]).intl;
                const obj19 = { orbAmount: memo.amount };
                obj18.accessibilityLabel = intl.formatToPlainString(hasShopDiscount(tmp2[15]).t.W4DfeF, obj19);
                const items6 = [styles.text];
                const tmpResult = hasShopDiscount(tmp2[18]);
                items6[1] = hasShopDiscount(tmp2[18]).isAndroid() && styles.androidTextPadding;
                obj18.style = items6;
                obj18.children = memo.amount;
                items5[1] = closure_8(hasShopDiscount(tmp2[16]).Text, obj18);
                let tmp14Result = memo2 >= hasShopDiscount(tmp2[12]).DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
                if (tmp14Result) {
                  const items7 = [, ,];
                  ({ discountPercentage: arr8[0], text: arr8[1] } = styles);
                  let androidTextPadding;
                  if (tmpResult4.isAndroid()) {
                    androidTextPadding = styles.androidTextPadding;
                  }
                  const obj20 = {
                    style: null,
                    color: "text-feedback-positive",
                    variant: "text-xs/semibold",
                    lineClamp: 1,
                    children: null,
                  };
                  items7[2] = androidTextPadding;
                  obj20.style = items7;
                  const _HermesInternal = HermesInternal;
                  obj20.children = "-" + memo2 + "%";
                  tmp14Result = closure_8(hasShopDiscount(tmp2[16]).Text, obj20);
                  tmpResult4 = hasShopDiscount(tmp2[18]);
                }
                items5[2] = tmp14Result;
                obj15.children = items5;
                const tmp15 = hasShopDiscount(tmp2[18]).isAndroid() && styles.androidTextPadding;
              }
            }
            const obj21 = { style: styles.priceDescription, children: null };
            if (!hasShopDiscount) {
              const items8 = [hasShopDiscount, ,];
              const items9 = [styles.text];
              const tmpResult5 = hasShopDiscount(tmp2[18]);
              const obj22 = {
                variant: "text-xs/semibold",
                color: "mobile-text-heading-primary",
                lineClamp: 1,
                style: null,
                children: null,
              };
              items9[1] = hasShopDiscount(tmp2[18]).isAndroid() && styles.androidTextPadding;
              obj22.style = items9;
              obj22.children = formattedPriceForCollectiblesProduct;
              items8[1] = closure_8(hasShopDiscount(tmp2[16]).Text, obj22);
              let tmp24Result = memo1 >= hasShopDiscount(tmp2[12]).DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
              if (tmp24Result) {
                const items10 = [, ,];
                ({ discountPercentage: arr11[0], text: arr11[1] } = styles);
                let androidTextPadding1;
                if (tmpResult6.isAndroid()) {
                  androidTextPadding1 = styles.androidTextPadding;
                }
                const obj23 = {
                  style: null,
                  color: "text-feedback-positive",
                  variant: "text-xs/semibold",
                  lineClamp: 1,
                  children: null,
                };
                items10[2] = androidTextPadding1;
                obj23.style = items10;
                const _HermesInternal2 = HermesInternal;
                obj23.children = "-" + memo1 + "%";
                tmp24Result = closure_8(hasShopDiscount(tmp2[16]).Text, obj23);
                tmpResult6 = hasShopDiscount(tmp2[18]);
              }
              items8[2] = tmp24Result;
              obj21.children = items8;
              obj15 = obj21;
              const tmp25 = hasShopDiscount(tmp2[18]).isAndroid() && styles.androidTextPadding;
            } else if (discountSource === hasShopDiscount(tmp2[12]).ShopDiscountSource.THIRDPARTY) {
              const obj24 = { size: "xs", color: "mobile-text-heading-primary", style: styles.wheelIcon };
              let tmp21 = closure_8(hasShopDiscount(tmp2[19]).TagIcon, obj24);
            } else {
              const obj25 = { size: "xs", color: "mobile-text-heading-primary", style: styles.wheelIcon };
              tmp21 = closure_8(hasShopDiscount(tmp2[20]).NitroWheelIcon, obj25);
            }
          }
          return tmp11Result;
        }
        const obj4 = hasShopDiscount(memo[13]);
      },
);
memoResult.displayName = "PriceDescription";
ReactCompilerGating = fn(558);
let obj3 = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  gap: nativeDefault.space.PX_4,
};
size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardCardDetailsV2.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function CardDetailsV2(arg0) {
        const cResult = c.c(35);
        ({ product, collectibleProductState, preferVCPrice, isDisabled, hidePrice } = arg0);
        const tmp4 = closure_10();
        const currentUser = useCurrentUser.useCurrentUser();
        if (cResult[0] !== currentUser) {
          const canUseShopDiscountsResult = PremiumUtilsDefault.canUseShopDiscounts(currentUser);
          cResult[0] = currentUser;
          cResult[1] = canUseShopDiscountsResult;
          let tmp6 = canUseShopDiscountsResult;
        } else {
          tmp6 = cResult[1];
        }
        if (cResult[2] !== currentUser) {
          const shopDiscountSource = CollectiblesUtils.getShopDiscountSource(currentUser);
          cResult[2] = currentUser;
          cResult[3] = shopDiscountSource;
          let tmp9 = shopDiscountSource;
          const tmpResult = CollectiblesUtils;
        } else {
          tmp9 = cResult[3];
        }
        const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
        if (cResult[4] !== token) {
          const tmpResult9 = ColorUtils;
          const hexToRgbaStringResult = tmpResult9.hexToRgbaString(ColorUtils.hexWithOpacity(token, 0.9));
          cResult[4] = token;
          cResult[5] = hexToRgbaStringResult;
          let tmp13 = hexToRgbaStringResult;
          const tmpResult10 = ColorUtils;
        } else {
          tmp13 = cResult[5];
        }
        if (cResult[6] !== token) {
          const tmpResult11 = ColorUtils;
          const hexToRgbaStringResult1 = tmpResult11.hexToRgbaString(ColorUtils.hexWithOpacity(token, 0));
          cResult[6] = token;
          cResult[7] = hexToRgbaStringResult1;
          let tmp15 = hexToRgbaStringResult1;
          const tmpResult12 = ColorUtils;
        } else {
          tmp15 = cResult[7];
        }
        if (cResult[8] !== product) {
          const cardProductName = getProductName.getCardProductName(product);
          cResult[8] = product;
          cResult[9] = cardProductName;
          let tmp17 = cardProductName;
          const tmpResult13 = getProductName;
        } else {
          tmp17 = cResult[9];
        }
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [IAPStore];
          class V {
            constructor() {
              return closure_1_5.isFetchingGoogleSkus();
            }
          }
          cResult[10] = items;
          cResult[11] = V;
          let tmp20 = V;
          let tmp19 = items;
        } else {
          tmp19 = cResult[10];
          tmp20 = cResult[11];
        }
        const tmpResult8 = useToken;
        const stateFromStores = initialize.useStateFromStores(tmp19, tmp20);
        if (cResult[12] === token) {
          if (cResult[13] === tmp13) {
            if (cResult[14] === tmp15) {
              let tmp23 = cResult[15];
            }
            const _Symbol = Symbol;
            class V {
              constructor() {
                return closure_1_5.isFetchingGoogleSkus();
              }
            }
            if (cResult[17] === tmp17) {
              if (cResult[18] === tmp4.assetName) {
                let tmp26 = cResult[19];
              }
              if (cResult[20] === collectibleProductState) {
                if (cResult[21] === tmp9) {
                  if (cResult[22] === hidePrice) {
                    if (cResult[23] === isDisabled) {
                      if (cResult[24] === stateFromStores) {
                        if (cResult[25] === preferVCPrice) {
                          if (cResult[26] === product) {
                            if (cResult[27] === tmp6) {
                              if (cResult[28] === tmp4) {
                                let tmp29 = cResult[29];
                              }
                              if (cResult[30] === tmp4.regularMetadataContainer) {
                                if (cResult[31] === tmp26) {
                                  if (cResult[32] === tmp29) {
                                    if (cResult[33] === tmp23) {
                                      let tmp31 = cResult[34];
                                    }
                                    return tmp31;
                                  }
                                }
                              }
                              class V {
                                constructor() {
                                  return closure_1_5.isFetchingGoogleSkus();
                                }
                              }
                              tmp33[0] = tmp4.regularMetadataContainer;
                              tmp33[1] = tmp23;
                              tmp33[2] = tmp25;
                              ({ START: tmp33[3], END: tmp33[4] } = constants2);
                              const items1 = [tmp26, tmp29];
                              tmp33[5] = items1;
                              const tmp35 = options(LinearGradientDefault, tmp33);
                              cResult[30] = tmp4.regularMetadataContainer;
                              cResult[31] = tmp26;
                              cResult[32] = tmp29;
                              cResult[33] = tmp23;
                              cResult[34] = tmp35;
                              tmp31 = tmp35;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              class V {
                constructor() {
                  return closure_1_5.isFetchingGoogleSkus();
                }
              }
              cResult[20] = collectibleProductState;
              cResult[21] = tmp9;
              cResult[22] = hidePrice;
              cResult[23] = isDisabled;
              cResult[24] = stateFromStores;
              cResult[25] = preferVCPrice;
              cResult[26] = product;
              cResult[27] = tmp6;
              cResult[28] = tmp4;
              cResult[29] = !hidePrice;
              tmp29 = tmp30;
            }
            const obj4 = {
              style: tmp4.assetName,
              variant: "heading-sm/bold",
              color: "mobile-text-heading-primary",
              lineClamp: 1,
              accessibilityRole: "header",
              children: tmp17,
            };
            const tmp28 = closure_1_8(Text_Text.Text, obj4);
            cResult[17] = tmp17;
            cResult[18] = tmp4.assetName;
            cResult[19] = tmp28;
            tmp26 = tmp28;
          }
        }
        const items2 = [tmp15, tmp13, token];
        cResult[12] = token;
        cResult[13] = tmp13;
        cResult[14] = tmp15;
        cResult[15] = items2;
        tmp23 = items2;
        const tmpResult14 = initialize;
      }
    : function CardDetailsV2(arg0) {
        ({ product, hidePrice } = arg0);
        ({ collectibleProductState, preferVCPrice, isDisabled } = arg0);
        const tmp = closure_10();
        const currentUser = useCurrentUser.useCurrentUser();
        const canUseShopDiscountsResult = PremiumUtilsDefault.canUseShopDiscounts(currentUser);
        const shopDiscountSource = CollectiblesUtils.getShopDiscountSource(currentUser);
        const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
        const obj5 = ColorUtils;
        const hexToRgbaStringResult = obj5.hexToRgbaString(ColorUtils.hexWithOpacity(token, 0.9));
        const obj7 = ColorUtils;
        const hexToRgbaStringResult1 = obj7.hexToRgbaString(ColorUtils.hexWithOpacity(token, 0));
        const cardProductName = getProductName.getCardProductName(product);
        const items = [IAPStore];
        const stateFromStores = initialize.useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus());
        const obj11 = {
          style: tmp.regularMetadataContainer,
          colors: null,
          locations: [0, 0.4, 1],
          start: constants2.START,
          end: constants2.END,
          children: null,
        };
        const items1 = [hexToRgbaStringResult1, hexToRgbaStringResult, token];
        obj11.colors = items1;
        const items2 = [
          closure_1_8(Text_Text.Text, {
            style: tmp.assetName,
            variant: "heading-sm/bold",
            color: "mobile-text-heading-primary",
            lineClamp: 1,
            accessibilityRole: "header",
            children: cardProductName,
          }),
        ];
        let tmp12Result = !hidePrice;
        if (!hidePrice) {
          const obj13 = { style: tmp.priceVariantsContainer, children: null };
          const obj14 = {
            product,
            hasShopDiscount: canUseShopDiscountsResult,
            discountSource: shopDiscountSource,
            styles: tmp,
            collectibleProductState,
            isFetchingGoogleSkus: stateFromStores,
            preferVCPrice,
            isDisabled,
          };
          const items3 = [closure_1_8(memoResult, obj14)];
          const obj15 = { product };
          items3[1] = closure_1_8(CollectiblesShopCardVariantsDefault, obj15);
          obj13.children = items3;
          tmp12Result = options(View, obj13);
        }
        items2[1] = tmp12Result;
        obj11.children = items2;
        return options(LinearGradientDefault, obj11);
      },
);
