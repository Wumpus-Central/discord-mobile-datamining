// discord_app/modules/collectibles/native/InlinePriceTag.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../_runtime/metro/00683__.js";
import util from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import asyncRequireImpl from "../../../../_runtime/01987_asyncRequireImpl.js";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../_runtime/05605_LinearGradient.js";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import ChevronSmallRightIcon from "../../../design/components/Icon/native/redesign/generated/ChevronSmallRightIcon.tsx";
import CollectiblesProductUtils from "../utils/CollectiblesProductUtils.tsx";
import CollectiblesUtils from "../CollectiblesUtils.tsx";
import useCurrentUser from "../hooks/useCurrentUser.tsx";
import NitroWheelIcon from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import OrbsIcon from "../../../design/components/Icon/native/redesign/generated/OrbsIcon.tsx";
import collectibles_CollectiblesUtils from "CollectiblesUtils.tsx";
import CollectiblesShopPricePlaceholder from "CollectiblesShopPricePlaceholder.tsx";
import TagIcon from "../../../design/components/Icon/native/redesign/generated/TagIcon.tsx";
import useProductDisableState from "../hooks/useProductDisableState.tsx";
import useOpenNitroSubscribeActionSheetDefault from "useOpenNitroSubscribeActionSheet.tsx";
import MobileNitroUpsellInShopPdpExperimentDefault from "MobileNitroUpsellInShopPdpExperiment.tsx";
import useVirtualCurrencyData from "hooks/useVirtualCurrencyData.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import IAPStore from "../../../stores/native/IAPStore.android.tsx";

require = fn;
function ExpressiveNitroUpsell(arg0) {
  ({ onTrackPress: require, handleNitroSubscribe: importDefault, showActionSheet: dependencyMap } = arg0);
  ({ defaultPriceFormatted, premiumPriceFormatted } = arg0);
  const tmp = closure_12();
  const strikedPrice = tmp;
  const tmp4 = _modDef683;
  const tmp4Result = tmp4(useToken.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START));
  const alphaResult = tmp4(useToken.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START)).alpha(0.4);
  const hexResult = tmp4(useToken.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START)).alpha(0.4).hex();
  const tmp7 = _modDef683;
  const tmp7Result = tmp7(useToken.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END));
  let obj2 = {
    onPress() {
      if (closure_1_0 != null) {
        tmp(ShopCtaEnum.SUBSCRIBE_NOW);
      }
      if (closure_1_2) {
        const obj = ActionSheetActionCreatorsDefault;
        const tmp9 = asyncRequireImpl(12981, dependencyMap.paths);
        const obj2 = { analyticsLocations: null, title: null, description: null };
        const items = [AnalyticsLocationDefault.COLLECTIBLES_SHOP_DETAILS_MODAL];
        obj2.analyticsLocations = items;
        const intl = util.intl;
        obj2.title = intl.string(util.t.XcOMLu);
        const intl2 = util.intl;
        obj2.description = intl2.string(util.t.JhE8nA);
        obj.openLazy(tmp9, "ShopNitroUpsellPromoSheet", obj2, "stack");
      } else {
        closure_1_1();
      }
    },
    style: tmp.nitroUpsellPill,
    accessibilityRole: "button",
    children: null,
  };
  const alphaResult1 = tmp7(useToken.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END)).alpha(0.4);
  const obj3 = { style: tmp.nitroUpsellGradient, colors: null, start, end, pointerEvents: "none" };
  let items = [
    hexResult,
    tmp7(useToken.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END)).alpha(0.4).hex(),
  ];
  obj3.colors = items;
  const items1 = [closure_9(LinearGradientDefault, obj3), ,];
  const items2 = [tmp.nitroUpsellSavings];
  const hexResult1 = tmp7(useToken.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END)).alpha(0.4).hex();
  const tmp10 = strikedPrice;
  let androidTextPadding;
  if (obj9.isAndroid()) {
    androidTextPadding = tmp.androidTextPadding;
  }
  const obj5 = { variant: "text-sm/medium", color: "text-subtle", style: items2, children: null };
  items2[1] = androidTextPadding;
  let intl = util.intl;
  obj5.children = intl.format(util.t.TWtV8E, {
    defaultPrice: defaultPriceFormatted,
    premiumPrice: premiumPriceFormatted,
    defaultPriceHook(children, arg1) {
      return options(
        Text_Text.Text,
        { variant: "text-sm/medium", color: "text-subtle", style: strikedPrice.strikedPrice, children },
        arg1,
      );
    },
    premiumPriceHook(children, arg1) {
      return closure_1_9(
        Text_Text.Text,
        { variant: "text-sm/semibold", color: "interactive-text-active", children },
        arg1,
      );
    },
  });
  items1[1] = closure_9(Text_Text.Text, obj5);
  const obj7 = { style: tmp.nitroUpsellCta, children: null };
  const obj6 = {
    defaultPrice: defaultPriceFormatted,
    premiumPrice: premiumPriceFormatted,
    defaultPriceHook(children, arg1) {
      return options(
        Text_Text.Text,
        { variant: "text-sm/medium", color: "text-subtle", style: strikedPrice.strikedPrice, children },
        arg1,
      );
    },
    premiumPriceHook(children, arg1) {
      return closure_1_9(
        Text_Text.Text,
        { variant: "text-sm/semibold", color: "interactive-text-active", children },
        arg1,
      );
    },
  };
  obj9 = PlatformUtils;
  const items3 = [
    closure_9(NitroWheelIcon.NitroWheelIcon, {
      color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
      size: "sm",
      style: tmp.nitroUpsellIcon,
    }),
    ,
  ];
  const obj8 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, size: "sm", style: tmp.nitroUpsellIcon };
  let androidTextPadding1;
  if (tmp5Result.isAndroid()) {
    androidTextPadding1 = tmp.androidTextPadding;
  }
  const obj10 = {
    variant: "text-sm/medium",
    color: "interactive-text-active",
    style: androidTextPadding1,
    children: null,
  };
  let intl2 = util.intl;
  obj10.children = intl2.string(util.t["8x0jKT"]);
  items3[1] = closure_9(Text_Text.Text, obj10);
  tmp5Result = PlatformUtils;
  items3[2] = closure_9(ChevronSmallRightIcon.ChevronSmallRightIcon, {
    color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
    size: "xs",
    style: tmp.nitroUpsellChevron,
  });
  obj7.children = items3;
  items1[2] = closure_11(closure_4, obj7);
  obj2.children = items1;
  return closure_11(tmp10, obj2);
}
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4, StyleSheet } = get_ActivityIndicator);
const ShopCtaEnum = fn(1087).ShopCtaEnum;
const Constants = fn(1085);
({ AnalyticsSections: closure_7, CurrencyCodes: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
let createStyles = fn(4890);
let obj2 = {
  priceTag: { flexDirection: "row", alignItems: "center" },
  strikedPrice: { textDecorationLine: "line-through", textDecorationStyle: "solid", opacity: 0.7 },
  strikedOrbPrice: { textDecorationLine: "line-through", textDecorationStyle: "solid", opacity: 0.7, marginRight: 4 },
  regularPrice: {},
  nitroIcon: { width: 20, height: 20, marginLeft: 8, marginRight: 4 },
  nitroIconSubscribeNow: { marginLeft: 0 },
  root: { flexDirection: "column" },
  container: { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" },
  priceTagRow: { flexDirection: "row", alignItems: "center" },
  nitroUpsellPill: {
    alignSelf: "stretch",
    marginTop: nativeDefault.space.PX_8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: nativeDefault.radii.round,
    overflow: "hidden",
    paddingHorizontal: nativeDefault.space.PX_12,
    paddingVertical: nativeDefault.space.PX_4,
  },
  nitroUpsellGradient: null,
  nitroUpsellSavings: null,
  nitroUpsellCta: null,
  nitroUpsellIcon: null,
  nitroUpsellChevron: null,
  underline: null,
  subscribeNowPressable: null,
  androidTextPadding: null,
  orbsIcon: null,
  disabled: null,
};
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.opacity = 0.6;
obj2.nitroUpsellGradient = obj4;
let obj3 = {
  alignSelf: "stretch",
  marginTop: nativeDefault.space.PX_8,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: nativeDefault.radii.round,
  overflow: "hidden",
  paddingHorizontal: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_4,
};
obj2.nitroUpsellSavings = { flexShrink: 1, marginRight: nativeDefault.space.PX_8 };
obj2.nitroUpsellCta = { flexDirection: "row", alignItems: "center", flexShrink: 0 };
obj2.nitroUpsellIcon = { width: 16, height: 16, marginRight: 4 };
obj2.nitroUpsellChevron = { marginLeft: 2 };
obj2.underline = { textDecorationLine: "underline" };
let obj5 = { flexShrink: 1, marginRight: nativeDefault.space.PX_8 };
obj2.subscribeNowPressable = {
  alignSelf: "flex-start",
  marginBottom: -2,
  marginTop: nativeDefault.space.PX_8,
  flexDirection: "row",
  alignItems: "center",
};
obj2.androidTextPadding = { paddingBottom: 2 };
obj2.orbsIcon = { marginRight: 4 };
obj2.disabled = { opacity: 0.5 };
let closure_12 = createStyles.createStyles(obj2);
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(12);
      ({ priceFormatted, style, color, icon, variant, accessibilityLabel } = arg0);
      let str = "interactive-text-active";
      if (undefined !== color) {
        str = color;
      }
      let str2 = "text-md/medium";
      if (undefined !== variant) {
        str2 = variant;
      }
      const tmp4 = closure_12();
      if (cResult[0] === style) {
        if (cResult[1] === tmp4.priceTag) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === accessibilityLabel) {
          if (cResult[4] === str) {
            if (cResult[5] === priceFormatted) {
              if (cResult[6] === tmp5) {
                if (cResult[7] === str2) {
                  let tmp6 = cResult[8];
                }
                if (cResult[9] === icon) {
                  if (cResult[10] === tmp6) {
                    let tmp9 = cResult[11];
                  }
                  return tmp9;
                }
                const obj2 = { children: null };
                const items = [icon, tmp6];
                obj2.children = items;
                const tmp12 = closure_1_11(v65535, obj2);
                cResult[9] = icon;
                cResult[10] = tmp6;
                cResult[11] = tmp12;
                tmp9 = tmp12;
              }
            }
          }
        }
        const obj3 = { variant: str2, style: tmp5, color: str, accessibilityLabel, children: priceFormatted };
        const tmp8 = options(Text_Text.Text, obj3);
        cResult[3] = accessibilityLabel;
        cResult[4] = str;
        cResult[5] = priceFormatted;
        cResult[6] = tmp5;
        cResult[7] = str2;
        cResult[8] = tmp8;
        tmp6 = tmp8;
      }
      const items1 = [tmp4.priceTag, style];
      cResult[0] = style;
      cResult[1] = tmp4.priceTag;
      cResult[2] = items1;
      tmp5 = items1;
    }
  : (accessibilityLabel) => {
      let str = accessibilityLabel.color;
      ({ priceFormatted, style } = accessibilityLabel);
      if (str === undefined) {
        str = "interactive-text-active";
      }
      ({ variant, icon } = accessibilityLabel);
      if (variant === undefined) {
        variant = "text-md/medium";
      }
      const obj = { children: null };
      const items = [icon];
      const obj2 = {
        variant,
        style: null,
        color: str,
        accessibilityLabel: accessibilityLabel.accessibilityLabel,
        children: priceFormatted,
      };
      const items1 = [closure_12().priceTag, style];
      obj2.style = items1;
      items[1] = options(Text_Text.Text, obj2);
      obj.children = items;
      return closure_1_11(v65535, obj);
    };
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(41);
      ({ vcData, isProductDisabled, product, eligibleForShopDiscount } = arg0);
      const tmp4 = closure_12();
      if (null == vcData.price) {
        return null;
      } else {
        if (cResult[0] !== product) {
          let result = product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE;
          if (result) {
            result = CollectiblesProductUtils.isOrbsExclusiveProduct(product);
            const tmpResult = CollectiblesProductUtils;
          }
          cResult[0] = product;
          cResult[1] = result;
          let tmp5 = result;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] === eligibleForShopDiscount) {
          if (cResult[3] === tmp5) {
            if (cResult[4] === isProductDisabled) {
              if (cResult[5] === product) {
                if (cResult[6] === tmp4.disabled) {
                  if (cResult[7] === tmp4.orbsIcon) {
                    if (cResult[8] === tmp4.priceTagRow) {
                      if (cResult[9] === tmp4.strikedOrbPrice) {
                        if (cResult[10] === vcData.canAfford) {
                          let tmp7 = cResult[11];
                          let tmp8 = cResult[12];
                          let tmp9 = cResult[13];
                          let tmp10 = cResult[14];
                          let tmp11 = cResult[15];
                        }
                        if (cResult[19] !== vcData.price.amount) {
                          const str1 = vcData.price.amount.toString();
                          cResult[19] = vcData.price.amount;
                          cResult[20] = str1;
                          let tmp20 = str1;
                        } else {
                          tmp20 = cResult[20];
                        }
                        if (cResult[21] === tmp9) {
                          if (cResult[22] === tmp4.orbsIcon) {
                            let tmp22 = cResult[23];
                          }
                          if (cResult[24] === tmp8) {
                            if (cResult[25] === tmp9) {
                              if (cResult[26] === vcData.price.amount) {
                                if (cResult[28] === tmp20) {
                                  if (cResult[29] === tmp22) {
                                    if (cResult[30] === tmp25) {
                                      let tmp28 = cResult[31];
                                    }
                                    if (cResult[32] === tmp8) {
                                      if (cResult[33] === tmp9) {
                                        let tmp32 = cResult[34];
                                      }
                                      if (cResult[35] === tmp7) {
                                        if (cResult[36] === tmp10) {
                                          if (cResult[37] === tmp11) {
                                            if (cResult[38] === tmp28) {
                                              if (cResult[39] === tmp32) {
                                                let tmp36 = cResult[40];
                                              }
                                              return tmp36;
                                            }
                                          }
                                        }
                                      }
                                      const obj2 = { style: tmp10, children: null };
                                      const items = [tmp11, tmp28, tmp32];
                                      obj2.children = items;
                                      const tmp38 = closure_1_11(tmp7, obj2);
                                      cResult[35] = tmp7;
                                      cResult[36] = tmp10;
                                      cResult[37] = tmp11;
                                      cResult[38] = tmp28;
                                      cResult[39] = tmp32;
                                      cResult[40] = tmp38;
                                      tmp36 = tmp38;
                                    }
                                    let tmp33 = null;
                                    if (tmp9) {
                                      const obj3 = { discountPercentage: tmp8 };
                                      tmp33 = options(closure_20, obj3);
                                    }
                                    cResult[32] = tmp8;
                                    cResult[33] = tmp9;
                                    cResult[34] = tmp33;
                                    tmp32 = tmp33;
                                  }
                                }
                                const obj4 = {
                                  priceFormatted: tmp20,
                                  variant: "text-md/semibold",
                                  icon: tmp22,
                                  accessibilityLabel: cResult[27],
                                };
                                const tmp31 = options(closure_15, obj4);
                                cResult[28] = tmp20;
                                cResult[29] = tmp22;
                                cResult[30] = cResult[27];
                                cResult[31] = tmp31;
                                tmp28 = tmp31;
                              }
                            }
                          }
                          const intl2 = util.intl;
                          const formatToPlainString = intl2.formatToPlainString;
                          let t = util.t;
                          if (tmp9) {
                            t = { orbAmount: vcData.price.amount.toString(), discountPercentage: tmp8 };
                            let formatToPlainStringResult = formatToPlainString(t.ckguyq, t);
                          } else {
                            const obj5 = { orbAmount: vcData.price.amount.toString() };
                            formatToPlainStringResult = formatToPlainString(t["a/Y8PK"], obj5);
                          }
                          cResult[24] = tmp8;
                          cResult[25] = tmp9;
                          vcData = vcData.price.amount;
                          cResult[26] = vcData;
                          cResult[27] = formatToPlainStringResult;
                        }
                        let tmp23;
                        if (!tmp9) {
                          const obj6 = { color: "interactive-text-active", size: "sm", style: tmp4.orbsIcon };
                          tmp23 = options(OrbsIcon.OrbsIcon, obj6);
                        }
                        cResult[21] = tmp9;
                        cResult[22] = tmp4.orbsIcon;
                        cResult[23] = tmp23;
                        tmp22 = tmp23;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const productDiscount = CollectiblesUtils.getProductDiscount(
          product,
          eligibleForShopDiscount,
          constants2.DISCORD_ORB,
        );
        ({ original, discountPercentage } = productDiscount);
        let tmp14 = tmp5;
        if (tmp5) {
          tmp14 = discountPercentage >= CollectiblesUtils.DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
        }
        const canAfford = vcData.canAfford;
        let disabled = !canAfford;
        if (canAfford) {
          disabled = isProductDisabled;
        }
        if (disabled) {
          disabled = tmp4.disabled;
        }
        if (cResult[16] === tmp4.priceTagRow) {
          if (cResult[17] === disabled) {
            let tmp16 = cResult[18];
          }
          let tmp17 = tmp14;
          if (tmp14) {
            const obj7 = {
              priceFormatted: original.toString(),
              variant: "text-md/medium",
              style: tmp4.strikedOrbPrice,
              icon: null,
              accessibilityLabel: null,
            };
            const obj8 = { color: "interactive-text-active", size: "sm", style: tmp4.orbsIcon };
            obj7.icon = options(OrbsIcon.OrbsIcon, obj8);
            const intl = util.intl;
            const obj9 = { orbAmount: original.toString() };
            obj7.accessibilityLabel = intl.formatToPlainString(util.t.QfcKZ5, obj9);
            tmp17 = options(closure_15, obj7);
          }
          cResult[2] = eligibleForShopDiscount;
          cResult[3] = tmp5;
          cResult[4] = isProductDisabled;
          cResult[5] = product;
          cResult[6] = tmp4.disabled;
          cResult[7] = tmp4.orbsIcon;
          cResult[8] = tmp4.priceTagRow;
          cResult[9] = tmp4.strikedOrbPrice;
          cResult[10] = vcData.canAfford;
          cResult[11] = React4;
          cResult[12] = discountPercentage;
          cResult[13] = tmp14;
          cResult[14] = tmp16;
          cResult[15] = tmp17;
          tmp11 = tmp17;
          tmp10 = tmp16;
          tmp9 = tmp14;
          tmp8 = discountPercentage;
          tmp7 = React4;
        }
        const items1 = [tmp4.priceTagRow, disabled];
        cResult[16] = tmp4.priceTagRow;
        cResult[17] = disabled;
        cResult[18] = items1;
        tmp16 = items1;
        const tmpResult2 = CollectiblesUtils;
      }
    }
  : (arg0) => {
      ({ vcData, product } = arg0);
      ({ isProductDisabled, eligibleForShopDiscount } = arg0);
      const tmp = closure_12();
      if (null == vcData.price) {
        return null;
      } else {
        let result = product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE;
        if (result) {
          result = CollectiblesProductUtils.isOrbsExclusiveProduct(product);
          const tmp16Result = CollectiblesProductUtils;
        }
        const productDiscount = CollectiblesUtils.getProductDiscount(
          product,
          eligibleForShopDiscount,
          constants2.DISCORD_ORB,
        );
        ({ original, discountPercentage } = productDiscount);
        if (result) {
          result = discountPercentage >= CollectiblesUtils.DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
        }
        const items = [tmp.priceTagRow];
        const canAfford = vcData.canAfford;
        let disabled = !canAfford;
        if (canAfford) {
          disabled = isProductDisabled;
        }
        if (disabled) {
          disabled = tmp.disabled;
        }
        const obj = { style: null, children: null };
        items[1] = disabled;
        obj.style = items;
        let tmp7 = result;
        if (result) {
          const obj2 = {
            priceFormatted: original.toString(),
            variant: "text-md/medium",
            style: tmp.strikedOrbPrice,
            icon: null,
            accessibilityLabel: null,
          };
          const obj3 = { color: "interactive-text-active", size: "sm", style: tmp.orbsIcon };
          obj2.icon = options(OrbsIcon.OrbsIcon, obj3);
          const intl = util.intl;
          const obj4 = { orbAmount: original.toString() };
          obj2.accessibilityLabel = intl.formatToPlainString(util.t.QfcKZ5, obj4);
          tmp7 = options(closure_15, obj2);
        }
        const items1 = [tmp7, ,];
        const obj5 = {
          priceFormatted: vcData.price.amount.toString(),
          variant: "text-md/semibold",
          icon: null,
          accessibilityLabel: null,
        };
        let tmp10Result;
        if (!result) {
          const obj6 = { color: "interactive-text-active", size: "sm", style: tmp.orbsIcon };
          tmp10Result = options(OrbsIcon.OrbsIcon, obj6);
        }
        obj5.icon = tmp10Result;
        const intl2 = util.intl;
        const formatToPlainString = intl2.formatToPlainString;
        const t = util.t;
        if (result) {
          const obj7 = { orbAmount: vcData.price.amount.toString(), discountPercentage };
          let formatToPlainStringResult = formatToPlainString(t.ckguyq, obj7);
        } else {
          const obj8 = { orbAmount: vcData.price.amount.toString() };
          formatToPlainStringResult = formatToPlainString(t["a/Y8PK"], obj8);
        }
        obj5.accessibilityLabel = formatToPlainStringResult;
        items1[1] = options(closure_15, obj5);
        let tmp10Result2 = null;
        if (result) {
          const obj9 = { discountPercentage };
          tmp10Result2 = options(closure_20, obj9);
        }
        items1[2] = tmp10Result2;
        obj.children = items1;
        return closure_1_11(React4, obj);
      }
    };
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onTrackPress) => {
      const cResult = onTrackPress(576).c(21);
      onTrackPress = onTrackPress.onTrackPress;
      const handleNitroSubscribe = onTrackPress.handleNitroSubscribe;
      let underline = onTrackPress.premiumPriceFormatted;
      const tmp4 = closure_12();
      dependencyMap = tmp4;
      if (cResult[0] === handleNitroSubscribe) {
        if (cResult[1] === onTrackPress) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === tmp4.nitroIcon) {
          if (cResult[4] === tmp4.nitroIconSubscribeNow) {
            let tmp7 = cResult[5];
          }
          if (cResult[6] !== tmp4.androidTextPadding) {
            let androidTextPadding;
            if (tmpResult.isAndroid()) {
              androidTextPadding = tmp4.androidTextPadding;
            }
            cResult[6] = tmp4.androidTextPadding;
            cResult[7] = androidTextPadding;
            let tmp10 = androidTextPadding;
            tmpResult = tmp(1369);
          } else {
            tmp10 = cResult[7];
          }
          if (cResult[8] === underline) {
            if (cResult[9] === tmp4.underline) {
              if (cResult[13] === tmp10) {
                if (cResult[14] === tmp12) {
                  let tmp16 = cResult[15];
                }
                if (cResult[16] === tmp4.subscribeNowPressable) {
                  if (cResult[17] === tmp5) {
                    if (cResult[18] === tmp7) {
                      if (cResult[19] === tmp16) {
                        let tmp19 = cResult[20];
                      }
                      return tmp19;
                    }
                  }
                }
                const obj2 = { onPress: tmp5, style: tmp6, accessibilityRole: "button", children: null };
                const items = [tmp7, tmp16];
                obj2.children = items;
                const tmp22 = closure_11(closure_3, obj2);
                cResult[16] = tmp4.subscribeNowPressable;
                cResult[17] = tmp5;
                cResult[18] = tmp7;
                cResult[19] = tmp16;
                cResult[20] = tmp22;
                tmp19 = tmp22;
              }
              const obj3 = {
                variant: "text-md/normal",
                color: "interactive-text-default",
                style: tmp10,
                children: cResult[10],
              };
              const tmp18 = closure_9(tmp(4886).Text, obj3);
              cResult[13] = tmp10;
              cResult[14] = cResult[10];
              cResult[15] = tmp18;
              tmp16 = tmp18;
            }
          }
          if (cResult[11] !== tmp4.underline) {
            const fn2 = function y(children, arg1) {
              return options(Text_Text.Text, { variant: "text-md/normal", style: underline.underline, children }, arg1);
            };
            cResult[11] = tmp4.underline;
            cResult[12] = fn2;
            let tmp13 = fn2;
          } else {
            tmp13 = cResult[12];
          }
          const intl = tmp(1126).intl;
          const obj4 = { price: underline, subscribeNowHook: tmp13 };
          const formatResult = intl.format(tmp(1126).t.Kxw2LT, obj4);
          cResult[8] = underline;
          underline = tmp4.underline;
          cResult[9] = underline;
          cResult[10] = formatResult;
        }
        const obj5 = { color: "interactive-text-default", style: null };
        const items1 = [,];
        ({ nitroIcon: arr[0], nitroIconSubscribeNow: arr[1] } = tmp4);
        obj5.style = items1;
        const tmp9 = closure_9(tmp(8313).NitroWheelIcon, obj5);
        cResult[3] = tmp4.nitroIcon;
        cResult[4] = tmp4.nitroIconSubscribeNow;
        cResult[5] = tmp9;
        tmp7 = tmp9;
      }
      const fn = function n() {
        if (onTrackPress != null) {
          tmp(ShopCtaEnum.SUBSCRIBE_NOW);
        }
        handleNitroSubscribe();
      };
      cResult[0] = handleNitroSubscribe;
      cResult[1] = onTrackPress;
      cResult[2] = fn;
      tmp5 = fn;
      const obj = onTrackPress(576);
    }
  : (premiumPriceFormatted) => {
      ({ onTrackPress: require, handleNitroSubscribe: importDefault } = premiumPriceFormatted);
      const tmp = closure_12();
      dependencyMap = tmp;
      const obj = {
        onPress() {
          if (require != null) {
            tmp(ShopCtaEnum.SUBSCRIBE_NOW);
          }
          importDefault();
        },
        style: tmp.subscribeNowPressable,
        accessibilityRole: "button",
        children: null,
      };
      const obj2 = { color: "interactive-text-default", style: null };
      const items = [,];
      ({ nitroIcon: arr[0], nitroIconSubscribeNow: arr[1] } = tmp);
      obj2.style = items;
      const items1 = [closure_9(NitroWheelIcon.NitroWheelIcon, obj2)];
      let androidTextPadding;
      if (obj3.isAndroid()) {
        androidTextPadding = tmp.androidTextPadding;
      }
      const obj4 = {
        variant: "text-md/normal",
        color: "interactive-text-default",
        style: androidTextPadding,
        children: null,
      };
      const intl = util.intl;
      obj4.children = intl.format(util.t.Kxw2LT, {
        price: premiumPriceFormatted.premiumPriceFormatted,
        subscribeNowHook(children, arg1) {
          return options(Text_Text.Text, { variant: "text-md/normal", style: underline.underline, children }, arg1);
        },
      });
      items1[1] = closure_9(Text_Text.Text, obj4);
      obj.children = items1;
      return closure_11(closure_3, obj);
    };
fn(558);
let obj6 = {
  alignSelf: "flex-start",
  marginBottom: -2,
  marginTop: nativeDefault.space.PX_8,
  flexDirection: "row",
  alignItems: "center",
};
createStyles = fn(4890);
let closure_19 = createStyles.createStyles(() => {
  const discount = {
    backgroundColor: "rgba(46, 204, 113, 0.25)",
    flexDirection: "row",
    flexShrink: 1,
    borderRadius: nativeDefault.radii.xs - 1,
    paddingHorizontal: 6,
    marginLeft: 6,
    paddingTop: null,
    paddingBottom: null,
  };
  let num;
  if (obj2.isAndroid()) {
    num = 0;
  }
  discount.paddingTop = num;
  obj2 = PlatformUtils;
  let num2;
  if (tmp2Result.isAndroid()) {
    num2 = 2;
  }
  discount.paddingBottom = num2;
  return { discount };
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (discountPercentage) => {
      const cResult = c.c(5);
      discountPercentage = discountPercentage.discountPercentage;
      let discount = closure_19();
      if (discountPercentage < CollectiblesUtils.DISCOUNT_DISPLAY_MINIMUM_THRESHOLD) {
        return null;
      } else {
        if (cResult[0] !== discountPercentage) {
          const obj2 = { variant: "text-md/normal", color: "text-feedback-positive", children: null };
          const items = ["-", discountPercentage, "%"];
          obj2.children = items;
          const tmp6 = closure_1_11(Text_Text.Text, obj2);
          cResult[0] = discountPercentage;
          cResult[1] = tmp6;
          let tmp4 = tmp6;
        } else {
          tmp4 = cResult[1];
        }
        if (cResult[2] === discount.discount) {
        }
        const obj3 = { style: discount.discount, children: tmp4 };
        const tmp10 = options(React4, obj3);
        discount = discount.discount;
        cResult[2] = discount;
        cResult[3] = tmp4;
        cResult[4] = tmp10;
      }
    }
  : (discountPercentage) => {
      discountPercentage = discountPercentage.discountPercentage;
      let tmp4 = null;
      if (discountPercentage >= CollectiblesUtils.DISCOUNT_DISPLAY_MINIMUM_THRESHOLD) {
        const obj = { style: tmp.discount, children: null };
        const obj2 = { variant: "text-md/normal", color: "text-feedback-positive", children: null };
        const items = ["-", discountPercentage, "%"];
        obj2.children = items;
        obj.children = closure_1_11(Text_Text.Text, obj2);
        tmp4 = options(React4, obj);
      }
      return tmp4;
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/InlinePriceTag.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(52);
      ({ product, onTrackPress } = arg0);
      closure_12();
      const currentUser = useCurrentUser.useCurrentUser();
      const shopDiscountSource = CollectiblesUtils.getShopDiscountSource(currentUser);
      if (cResult[0] !== currentUser) {
        const canUseShopDiscountsResult = PremiumUtilsDefault.canUseShopDiscounts(currentUser);
        cResult[0] = currentUser;
        cResult[1] = canUseShopDiscountsResult;
        let tmp7 = canUseShopDiscountsResult;
      } else {
        tmp7 = cResult[1];
      }
      useOpenNitroSubscribeActionSheetDefault(constants.SHOP_PRODUCT_DETAILS);
      const isDisabled = useProductDisableState.useProductDisableState(product.skuId).isDisabled;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { location: "InlinePriceTag" };
        cResult[2] = obj5;
        let tmp12 = obj5;
      } else {
        tmp12 = cResult[2];
      }
      const tmpResult = useProductDisableState;
      const config = MobileNitroUpsellInShopPdpExperimentDefault.useConfig(tmp12);
      ({ enabled, showActionSheet } = config);
      const tmp10Result = MobileNitroUpsellInShopPdpExperimentDefault;
      const formattedPriceForCollectiblesProduct =
        collectibles_CollectiblesUtils.getFormattedPriceForCollectiblesProduct(product, false, true);
      const tmpResult6 = collectibles_CollectiblesUtils;
      const virtualCurrencyData = useVirtualCurrencyData.useVirtualCurrencyData(product, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [IAPStore];
        class E {
          constructor() {
            return closure_1_5.isFetchingGoogleSkus();
          }
        }
        cResult[3] = items;
        cResult[4] = E;
        let tmp17 = E;
        let tmp16 = items;
      } else {
        tmp16 = cResult[3];
        tmp17 = cResult[4];
      }
      const tmpResult7 = useVirtualCurrencyData;
      if (tmpResult8.useStateFromStores(tmp16, tmp17)) {
        if (null == formattedPriceForCollectiblesProduct) {
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            class E {
              constructor() {
                return closure_1_5.isFetchingGoogleSkus();
              }
            }
            const tmp32 = options(CollectiblesShopPricePlaceholder.CollectiblesShopPricePlaceholder, {});
          }
          class E {
            constructor() {
              return closure_1_5.isFetchingGoogleSkus();
            }
          }
        }
      }
      if (null == formattedPriceForCollectiblesProduct) {
        if (null == virtualCurrencyData.price) {
          return null;
        } else {
          if (cResult[6] === tmp7) {
            if (cResult[7] === isDisabled) {
              if (cResult[8] === product) {
              }
            }
          }
          class E {
            constructor() {
              return closure_1_5.isFetchingGoogleSkus();
            }
          }
          tmp27[0] = virtualCurrencyData;
          tmp27[1] = isDisabled;
          tmp27[2] = product;
          tmp27[3] = tmp7;
          const tmp28 = options(closure_16, tmp27);
          cResult[6] = tmp7;
          cResult[7] = isDisabled;
          cResult[8] = product;
          cResult[9] = virtualCurrencyData;
          cResult[10] = tmp28;
        }
      } else {
        const formattedPriceForCollectiblesProduct1 =
          collectibles_CollectiblesUtils.getFormattedPriceForCollectiblesProduct(product, true, true);
        class E {
          constructor() {
            return closure_1_5.isFetchingGoogleSkus();
          }
        }
        const tmpResult9 = collectibles_CollectiblesUtils;
        const productDiscount = CollectiblesUtils.getProductDiscount(product, tmp7);
        cResult[11] = tmp7;
        cResult[12] = product;
        cResult[13] = productDiscount;
        const tmpResult10 = CollectiblesUtils;
      }
      tmpResult8 = initialize;
    }
  : (arg0) => {
      ({ product, onTrackPress } = arg0);
      let nitroIcon = closure_12();
      const currentUser = useCurrentUser.useCurrentUser();
      const shopDiscountSource = CollectiblesUtils.getShopDiscountSource(currentUser);
      const canUseShopDiscountsResult = PremiumUtilsDefault.canUseShopDiscounts(currentUser);
      const tmp6 = useOpenNitroSubscribeActionSheetDefault(constants.SHOP_PRODUCT_DETAILS);
      const isDisabled = useProductDisableState.useProductDisableState(product.skuId).isDisabled;
      const config = MobileNitroUpsellInShopPdpExperimentDefault.useConfig({ location: "InlinePriceTag" });
      ({ enabled, showActionSheet } = config);
      const formattedPriceForCollectiblesProduct =
        collectibles_CollectiblesUtils.getFormattedPriceForCollectiblesProduct(product, false, true);
      const virtualCurrencyData = useVirtualCurrencyData.useVirtualCurrencyData(product, canUseShopDiscountsResult);
      const items = [IAPStore];
      if (obj8.useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus())) {
        if (null == formattedPriceForCollectiblesProduct) {
          return options(CollectiblesShopPricePlaceholder.CollectiblesShopPricePlaceholder, {});
        }
      }
      if (null == formattedPriceForCollectiblesProduct) {
        let tmp24 = null;
        if (null != virtualCurrencyData.price) {
          const obj9 = {
            vcData: virtualCurrencyData,
            isProductDisabled: isDisabled,
            product,
            eligibleForShopDiscount: canUseShopDiscountsResult,
          };
          tmp24 = options(closure_16, obj9);
        }
        return tmp24;
      } else {
        const formattedPriceForCollectiblesProduct1 =
          collectibles_CollectiblesUtils.getFormattedPriceForCollectiblesProduct(product, true, true);
        const tmpResult = collectibles_CollectiblesUtils;
        const obj10 = { style: nitroIcon.root, children: null };
        const obj11 = { style: nitroIcon.container, children: null };
        const obj12 = { style: nitroIcon.priceTagRow, children: null };
        const obj13 = {
          priceFormatted: formattedPriceForCollectiblesProduct,
          variant: "heading-md/semibold",
          style: canUseShopDiscountsResult ? nitroIcon.strikedPrice : nitroIcon.regularPrice,
          color: "interactive-text-active",
          accessibilityLabel: null,
        };
        const intl = util.intl;
        const obj14 = { price: formattedPriceForCollectiblesProduct };
        obj13.accessibilityLabel = intl.formatToPlainString(util.t.sPvyr8, obj14);
        const items1 = [options(closure_15, obj13), ,];
        let tmp31Result = null;
        if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
          tmp31Result = null;
          if (!canUseShopDiscountsResult) {
            const obj15 = {
              discountPercentage: tmpResult3.getProductDiscount(product, canUseShopDiscountsResult).discountPercentage,
            };
            tmp31Result = options(closure_20, obj15);
          }
        }
        items1[1] = tmp31Result;
        if (!(null != formattedPriceForCollectiblesProduct1 && canUseShopDiscountsResult)) {
          items1[2] = tmp13;
          obj12.children = items1;
          const items2 = [closure_1_11(React4, obj12)];
          let tmp31Result5 = null != virtualCurrencyData.price;
          if (tmp31Result5) {
            const obj16 = {
              vcData: virtualCurrencyData,
              isProductDisabled: isDisabled,
              product,
              eligibleForShopDiscount: canUseShopDiscountsResult,
            };
            tmp31Result5 = options(closure_16, obj16);
          }
          items2[1] = tmp31Result5;
          obj11.children = items2;
          const items3 = [closure_1_11(React4, obj11)];
          if (!(null != formattedPriceForCollectiblesProduct1 && !canUseShopDiscountsResult)) {
            items3[1] = tmp19;
            obj10.children = items3;
            return closure_1_11(React4, obj10);
          } else if (enabled) {
            const obj17 = {
              defaultPriceFormatted: formattedPriceForCollectiblesProduct,
              premiumPriceFormatted: formattedPriceForCollectiblesProduct1,
              onTrackPress,
              handleNitroSubscribe: tmp6,
              showActionSheet,
            };
            let tmp31Result6 = options(ExpressiveNitroUpsell, obj17);
          } else {
            const obj18 = {
              premiumPriceFormatted: formattedPriceForCollectiblesProduct1,
              onTrackPress,
              handleNitroSubscribe: tmp6,
            };
            tmp31Result6 = options(closure_18, obj18);
          }
        } else {
          const obj19 = {
            priceFormatted: formattedPriceForCollectiblesProduct1,
            variant: "text-md/medium",
            color: "interactive-text-active",
            accessibilityLabel: null,
            style: null,
            icon: null,
          };
          const intl2 = util.intl;
          const obj20 = { price: formattedPriceForCollectiblesProduct1 };
          obj19.accessibilityLabel = intl2.formatToPlainString(util.t.kWkpdG, obj20);
          let androidTextPadding;
          if (tmpResult4.isAndroid()) {
            androidTextPadding = nitroIcon.androidTextPadding;
          }
          obj19.style = androidTextPadding;
          if (shopDiscountSource === CollectiblesUtils.ShopDiscountSource.THIRDPARTY) {
            const obj21 = { color: "interactive-text-active", style: null };
            nitroIcon = nitroIcon.nitroIcon;
            obj21.style = nitroIcon;
            let tmp31Result7 = options(TagIcon.TagIcon, obj21);
          } else {
            const obj22 = { color: "interactive-text-active", style: nitroIcon.nitroIcon };
            tmp31Result7 = options(NitroWheelIcon.NitroWheelIcon, obj22);
          }
          obj19.icon = tmp31Result7;
          options(closure_15, obj19);
          tmpResult4 = PlatformUtils;
        }
        tmpResult3 = CollectiblesUtils;
      }
      obj8 = initialize;
    };
