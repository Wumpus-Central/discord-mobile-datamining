// === Module 12980: InlinePriceTag ===

// Module 12980 (InlinePriceTag)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import intl3 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4528 */;
import useToken from "useToken" /* 4580 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import ChevronSmallRightIcon2 from "ChevronSmallRightIcon" /* 6708 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7064 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7065 */;
import useCurrentUser from "useCurrentUser" /* 7849 */;
import NitroWheelIcon2 from "NitroWheelIcon" /* 8313 */;
import OrbsIcon from "OrbsIcon" /* 8491 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 8506 */;
import CollectiblesShopPricePlaceholder from "CollectiblesShopPricePlaceholder" /* 8523 */;
import TagIcon from "TagIcon" /* 8524 */;
import useProductDisableState from "useProductDisableState" /* 8531 */;
import useOpenNitroSubscribeActionSheetDefault from "useOpenNitroSubscribeActionSheet" /* 12984 */;
import MobileNitroUpsellInShopPdpExperimentDefault from "MobileNitroUpsellInShopPdpExperiment" /* 12985 */;
import useVirtualCurrencyData from "useVirtualCurrencyData" /* 12986 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import IAPStore from "IAPStore" /* 6739 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let StyleSheet;
let c10;
let c3;
let c9;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
function ExpressiveNitroUpsell(arg0) {
  let defaultPriceFormatted;
  let intl;
  let intl2;
  let items;
  let items1;
  let items3;
  let obj6;
  let premiumPriceFormatted;
  ({ onTrackPress: require, handleNitroSubscribe: importDefault, showActionSheet: dependencyMap } = arg0);
  ({ defaultPriceFormatted, premiumPriceFormatted } = arg0);
  const tmp = closure_12();
  const strikedPrice = tmp;
  const tmp4 = _modDef683;
  let obj = useToken;
  const tmp4Result = tmp4(obj.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START));
  const alphaResult = tmp4Result.alpha(0.4);
  const hexResult = alphaResult.hex();
  const tmp7 = _modDef683;
  const obj4 = useToken;
  const obj2 = {
    onPress() {
      let intl;
      let intl2;
      let items;
      if (require != null) {
        tmp(ShopCtaEnum.SUBSCRIBE_NOW);
      }
      if (dependencyMap) {
        const openLazy = ActionSheetActionCreatorsDefault.openLazy;
        const tmp11 = asyncRequire(12981, dependencyMap.paths);
        const obj = { analyticsLocations: items, title: intl.string(intl3.t.XcOMLu), description: intl2.string(intl3.t.JhE8nA) };
        items = [AnalyticsLocationDefault.COLLECTIBLES_SHOP_DETAILS_MODAL];
        intl = intl3.intl;
        intl2 = intl3.intl;
        openLazy(tmp11, "ShopNitroUpsellPromoSheet", obj, "stack");
      } else {
        importDefault();
      }
    },
    style: tmp.nitroUpsellPill,
    accessibilityRole: "button",
    children: items1
  };
  const tmp7Result = tmp7(obj4.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END));
  const alphaResult1 = tmp7Result.alpha(0.4);
  const obj3 = { style: tmp.nitroUpsellGradient, colors: items, start, end, pointerEvents: "none" };
  items = [hexResult, alphaResult1.hex()];
  items1 = [, , ];
  alphaResult1.hex();
  items1[0] = closure_9(LinearGradientDefault, obj3);
  const items2 = [tmp.nitroUpsellSavings, ];
  const Text = Text_Text.Text;
  let androidTextPadding;
  const obj9 = PlatformUtils;
  const tmp10 = strikedPrice;
  if (obj9.isAndroid()) {
    androidTextPadding = tmp.androidTextPadding;
  }
  items2[1] = androidTextPadding;
  const obj5 = { variant: "text-sm/medium", color: "text-subtle", style: items2, children: intl.format(intl3.t.TWtV8E, obj6) };
  intl = intl3.intl;
  obj6 = {
    defaultPrice: defaultPriceFormatted,
    premiumPrice: premiumPriceFormatted,
    defaultPriceHook(children, arg1) {
      const obj = { variant: "text-sm/medium", color: "text-subtle", style: strikedPrice.strikedPrice, children };
      return React4(Text_Text.Text, obj, arg1);
    },
    premiumPriceHook(children, arg1) {
      const obj = { variant: "text-sm/semibold", color: "interactive-text-active", children };
      return closure_1_9(Text_Text.Text, obj, arg1);
    }
  };
  items1[1] = closure_9(Text, obj5);
  const obj7 = { style: tmp.nitroUpsellCta, children: items3 };
  const obj8 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, size: "sm", style: tmp.nitroUpsellIcon };
  const NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
  items3 = [closure_9(NitroWheelIcon, obj8), , ];
  const Text2 = Text_Text.Text;
  let androidTextPadding1;
  const tmp5Result = PlatformUtils;
  if (tmp5Result.isAndroid()) {
    androidTextPadding1 = tmp.androidTextPadding;
  }
  const obj10 = { variant: "text-sm/medium", color: "interactive-text-active", style: androidTextPadding1, children: intl2.string(intl3.t["8x0jKT"]) };
  intl2 = intl3.intl;
  items3[1] = closure_9(Text2, obj10);
  const obj11 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, size: "xs", style: tmp.nitroUpsellChevron };
  const ChevronSmallRightIcon = ChevronSmallRightIcon2.ChevronSmallRightIcon;
  items3[2] = closure_9(ChevronSmallRightIcon, obj11);
  items1[2] = closure_11(closure_4, obj7);
  return closure_11(tmp10, obj2);
}
({ Pressable: c3, View: closure_4, StyleSheet } = react_native);
const ShopCtaEnum = CollectiblesShopConstants.ShopCtaEnum;
({ AnalyticsSections: metroImportDefault, CurrencyCodes: metroImportAll } = Constants);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { priceTag: { flexDirection: "row", alignItems: "center" }, strikedPrice: { textDecorationLine: "line-through", textDecorationStyle: "solid", opacity: 0.7 }, strikedOrbPrice: { textDecorationLine: "line-through", textDecorationStyle: "solid", opacity: 0.7, marginRight: 4 }, regularPrice: {}, nitroIcon: { width: 20, height: 20, marginLeft: 8, marginRight: 4 }, nitroIconSubscribeNow: { marginLeft: 0 }, root: { flexDirection: "column" }, container: { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }, priceTagRow: { flexDirection: "row", alignItems: "center" }, nitroUpsellPill: obj2, nitroUpsellGradient: obj3, nitroUpsellSavings: obj4, nitroUpsellCta: { flexDirection: "row", alignItems: "center", flexShrink: 0 }, nitroUpsellIcon: { width: 16, height: 16, marginRight: 4 }, nitroUpsellChevron: { marginLeft: 2 }, underline: { textDecorationLine: "underline" }, subscribeNowPressable: obj5, androidTextPadding: { paddingBottom: 2 }, orbsIcon: { marginRight: 4 }, disabled: { opacity: 0.5 } };
obj2 = { alignSelf: "stretch", marginTop: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: nativeDefault.radii.round, overflow: "hidden", paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { opacity: 0.6 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { flexShrink: 1, marginRight: nativeDefault.space.PX_8 };
obj5 = { alignSelf: "flex-start", marginBottom: -2, marginTop: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
let closure_12 = createStyles(obj);
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityLabel;
  let color;
  let icon;
  let items;
  let priceFormatted;
  let style;
  let variant;
  const obj = react2;
  const cResult = obj.c(12);
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
    let tmp5;
    if (cResult[1] === tmp4.priceTag) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === accessibilityLabel) {
      if (cResult[4] === str) {
        if (cResult[5] === priceFormatted) {
          if (cResult[6] === tmp5) {
            let tmp6;
            if (cResult[7] === str2) {
              tmp6 = cResult[8];
            }
            if (cResult[9] === icon) {
              let tmp9;
              if (cResult[10] === tmp6) {
                tmp9 = cResult[11];
              }
              return tmp9;
            }
            const obj2 = { children: items };
            items = [icon, tmp6];
            const tmp12 = unpackModuleId(authStore, obj2);
            cResult[9] = icon;
            cResult[10] = tmp6;
            cResult[11] = tmp12;
            tmp9 = tmp12;
          }
        }
      }
    }
    const obj3 = { variant: str2, style: tmp5, color: str, accessibilityLabel, children: priceFormatted };
    const tmp8 = React4(Text_Text.Text, obj3);
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
}) : ((color) => {
  let icon;
  let items;
  let items1;
  let priceFormatted;
  let style;
  let variant;
  let str = color.color;
  ({ priceFormatted, style } = color);
  if (str === undefined) {
    str = "interactive-text-active";
  }
  ({ variant, icon } = color);
  if (variant === undefined) {
    variant = "text-md/medium";
  }
  const accessibilityLabel = color.accessibilityLabel;
  const obj = { children: items };
  items = [icon, ];
  const obj2 = { variant, style: items1, color: str, accessibilityLabel, children: priceFormatted };
  items1 = [closure_12().priceTag, style];
  closure_12();
  items[1] = React4(Text_Text.Text, obj2);
  return unpackModuleId(authStore, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let QfcKZ5;
  let discountPercentage;
  let eligibleForShopDiscount;
  let formatToPlainString;
  let isProductDisabled;
  let items;
  let obj10;
  let obj9;
  let original;
  let product;
  let str2;
  let str3;
  let vcData;
  const obj = react2;
  const cResult = obj.c(41);
  ({ vcData, isProductDisabled, product, eligibleForShopDiscount } = arg0);
  const tmp4 = closure_12();
  if (null == vcData.price) {
    return null;
  } else {
    let tmp5;
    let tmp11;
    let tmp10;
    let tmp9;
    let tmp8;
    let tmp7;
    if (cResult[0] !== product) {
      let result = product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE;
      if (result) {
        const tmpResult = CollectiblesProductUtils;
        result = tmpResult.isOrbsExclusiveProduct(product);
      }
      cResult[0] = product;
      cResult[1] = result;
      tmp5 = result;
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
                    let tmp20;
                    if (cResult[10] === vcData.canAfford) {
                      tmp7 = cResult[11];
                      tmp8 = cResult[12];
                      tmp9 = cResult[13];
                      tmp10 = cResult[14];
                      tmp11 = cResult[15];
                    }
                    if (cResult[19] !== vcData.price.amount) {
                      const str = vcData.price.amount;
                      const str1 = str.toString();
                      cResult[19] = vcData.price.amount;
                      cResult[20] = str1;
                      tmp20 = str1;
                    } else {
                      tmp20 = cResult[20];
                    }
                    if (cResult[21] === tmp9) {
                      let tmp22;
                      let formatToPlainString2Result;
                      if (cResult[22] === tmp4.orbsIcon) {
                        tmp22 = cResult[23];
                      }
                      if (cResult[24] === tmp8) {
                        if (cResult[25] === tmp9) {
                          let tmp25;
                          if (cResult[26] === vcData.price.amount) {
                            tmp25 = cResult[27];
                          }
                          if (cResult[28] === tmp20) {
                            if (cResult[29] === tmp22) {
                              let tmp28;
                              if (cResult[30] === tmp25) {
                                tmp28 = cResult[31];
                              }
                              if (cResult[32] === tmp8) {
                                let tmp32;
                                if (cResult[33] === tmp9) {
                                  tmp32 = cResult[34];
                                }
                                if (cResult[35] === tmp7) {
                                  if (cResult[36] === tmp10) {
                                    if (cResult[37] === tmp11) {
                                      if (cResult[38] === tmp28) {
                                        let tmp36;
                                        if (cResult[39] === tmp32) {
                                          tmp36 = cResult[40];
                                        }
                                        return tmp36;
                                      }
                                    }
                                  }
                                }
                                const obj2 = { style: tmp10, children: items };
                                items = [tmp11, tmp28, tmp32];
                                const tmp38 = unpackModuleId(tmp7, obj2);
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
                                tmp33 = React4(closure_20, obj3);
                              }
                              cResult[32] = tmp8;
                              cResult[33] = tmp9;
                              cResult[34] = tmp33;
                              tmp32 = tmp33;
                            }
                          }
                          const obj4 = { priceFormatted: tmp20, variant: "text-md/semibold", icon: tmp22, accessibilityLabel: tmp25 };
                          const tmp31 = React4(closure_15, obj4);
                          cResult[28] = tmp20;
                          cResult[29] = tmp22;
                          cResult[30] = tmp25;
                          cResult[31] = tmp31;
                          tmp28 = tmp31;
                        }
                      }
                      const intl2 = intl3.intl;
                      const formatToPlainString2 = intl2.formatToPlainString;
                      const t = intl3.t;
                      if (tmp9) {
                        const ckguyq = t.ckguyq;
                        const obj5 = { orbAmount: str3.toString(), discountPercentage: tmp8 };
                        str3 = vcData.price.amount;
                        formatToPlainString2Result = formatToPlainString2(ckguyq, obj5);
                      } else {
                        const prop = t["a/Y8PK"];
                        const obj6 = { orbAmount: str2.toString() };
                        str2 = vcData.price.amount;
                        formatToPlainString2Result = formatToPlainString2(prop, obj6);
                      }
                      cResult[24] = tmp8;
                      cResult[25] = tmp9;
                      cResult[26] = vcData.price.amount;
                      cResult[27] = formatToPlainString2Result;
                      tmp25 = formatToPlainString2Result;
                    }
                    let tmp23;
                    if (!tmp9) {
                      const obj7 = { color: "interactive-text-active", size: "sm", style: tmp4.orbsIcon };
                      tmp23 = React4(OrbsIcon.OrbsIcon, obj7);
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
    const tmpResult2 = CollectiblesUtils;
    const productDiscount = tmpResult2.getProductDiscount(product, eligibleForShopDiscount, metroImportAll.DISCORD_ORB);
    ({ original, discountPercentage } = productDiscount);
    const tmp14 = tmp5 && discountPercentage >= CollectiblesUtils.DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
    const canAfford = vcData.canAfford;
    let disabled = !canAfford;
    if (canAfford) {
      disabled = isProductDisabled;
    }
    if (disabled) {
      disabled = tmp4.disabled;
    }
    if (cResult[16] === tmp4.priceTagRow) {
      let tmp16;
      if (cResult[17] === disabled) {
        tmp16 = cResult[18];
      }
      let tmp17 = tmp14;
      if (tmp17) {
        const obj8 = { priceFormatted: original.toString(), variant: "text-md/medium", style: tmp4.strikedOrbPrice, icon: React4(OrbsIcon.OrbsIcon, obj9), accessibilityLabel: formatToPlainString(QfcKZ5, obj10) };
        obj9 = { color: "interactive-text-active", size: "sm", style: tmp4.orbsIcon };
        const intl = intl3.intl;
        formatToPlainString = intl.formatToPlainString;
        obj10 = { orbAmount: original.toString() };
        QfcKZ5 = intl3.t.QfcKZ5;
        tmp17 = React4(closure_15, obj8);
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
      cResult[11] = React3;
      cResult[12] = discountPercentage;
      cResult[13] = tmp14;
      cResult[14] = tmp16;
      cResult[15] = tmp17;
      tmp11 = tmp17;
      tmp10 = tmp16;
      tmp9 = tmp14;
      tmp8 = discountPercentage;
      tmp7 = React3;
    }
    const items1 = [tmp4.priceTagRow, disabled];
    cResult[16] = tmp4.priceTagRow;
    cResult[17] = disabled;
    cResult[18] = items1;
    tmp16 = items1;
  }
}) : ((arg0) => {
  let QfcKZ5;
  let discountPercentage;
  let eligibleForShopDiscount;
  let formatToPlainString;
  let formatToPlainString2Result;
  let isProductDisabled;
  let items1;
  let obj3;
  let obj4;
  let original;
  let product;
  let str;
  let str2;
  let str3;
  let tmp10Result;
  let vcData;
  ({ vcData, product } = arg0);
  ({ isProductDisabled, eligibleForShopDiscount } = arg0);
  const tmp = closure_12();
  if (null == vcData.price) {
    return null;
  } else {
    let result = product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE;
    if (result) {
      const tmp17Result = CollectiblesProductUtils;
      result = tmp17Result.isOrbsExclusiveProduct(product);
    }
    const tmp17Result2 = CollectiblesUtils;
    const productDiscount = tmp17Result2.getProductDiscount(product, eligibleForShopDiscount, metroImportAll.DISCORD_ORB);
    ({ original, discountPercentage } = productDiscount);
    if (result) {
      result = discountPercentage >= CollectiblesUtils.DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
    }
    const items = [tmp.priceTagRow, ];
    const canAfford = vcData.canAfford;
    let disabled = !canAfford;
    if (canAfford) {
      disabled = isProductDisabled;
    }
    if (disabled) {
      disabled = tmp.disabled;
    }
    const obj = { style: items, children: items1 };
    items[1] = disabled;
    let tmp7 = result;
    if (tmp7) {
      const obj2 = { priceFormatted: original.toString(), variant: "text-md/medium", style: tmp.strikedOrbPrice, icon: React4(OrbsIcon.OrbsIcon, obj3), accessibilityLabel: formatToPlainString(QfcKZ5, obj4) };
      obj3 = { color: "interactive-text-active", size: "sm", style: tmp.orbsIcon };
      const intl = intl3.intl;
      formatToPlainString = intl.formatToPlainString;
      obj4 = { orbAmount: original.toString() };
      QfcKZ5 = intl3.t.QfcKZ5;
      tmp7 = React4(closure_15, obj2);
    }
    items1 = [tmp7, , ];
    const obj5 = { priceFormatted: str.toString(), variant: "text-md/semibold", icon: tmp10Result, accessibilityLabel: formatToPlainString2Result };
    tmp10Result = undefined;
    str = vcData.price.amount;
    if (!result) {
      const obj6 = { color: "interactive-text-active", size: "sm", style: tmp.orbsIcon };
      tmp10Result = React4(OrbsIcon.OrbsIcon, obj6);
    }
    const intl2 = intl3.intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const t = intl3.t;
    if (result) {
      const ckguyq = t.ckguyq;
      const obj7 = { orbAmount: str3.toString(), discountPercentage };
      str3 = vcData.price.amount;
      formatToPlainString2Result = formatToPlainString2(ckguyq, obj7);
    } else {
      const prop = t["a/Y8PK"];
      const obj8 = { orbAmount: str2.toString() };
      str2 = vcData.price.amount;
      formatToPlainString2Result = formatToPlainString2(prop, obj8);
    }
    items1[1] = React4(closure_15, obj5);
    let tmp10Result2 = null;
    if (result) {
      const obj9 = { discountPercentage };
      tmp10Result2 = React4(closure_20, obj9);
    }
    items1[2] = tmp10Result2;
    return unpackModuleId(React3, obj);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((onTrackPress) => {
  let items;
  let items1;
  let underline;
  const tmp = onTrackPress;
  let obj = onTrackPress(576);
  const cResult = obj.c(21);
  onTrackPress = onTrackPress.onTrackPress;
  const handleNitroSubscribe = onTrackPress.handleNitroSubscribe;
  const premiumPriceFormatted = onTrackPress.premiumPriceFormatted;
  const tmp4 = closure_12();
  dependencyMap = tmp4;
  if (cResult[0] === handleNitroSubscribe) {
    let tmp5;
    if (cResult[1] === onTrackPress) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.nitroIcon) {
      let tmp7;
      let tmp10;
      let tmp13;
      if (cResult[4] === tmp4.nitroIconSubscribeNow) {
        tmp7 = cResult[5];
      }
      if (cResult[6] !== tmp4.androidTextPadding) {
        let androidTextPadding;
        const tmpResult = tmp(1369);
        if (tmpResult.isAndroid()) {
          androidTextPadding = tmp4.androidTextPadding;
        }
        cResult[6] = tmp4.androidTextPadding;
        cResult[7] = androidTextPadding;
        tmp10 = androidTextPadding;
      } else {
        tmp10 = cResult[7];
      }
      if (cResult[8] === premiumPriceFormatted) {
        let tmp12;
        if (cResult[9] === tmp4.underline) {
          tmp12 = cResult[10];
        }
        if (cResult[13] === tmp10) {
          let tmp15;
          if (cResult[14] === tmp12) {
            tmp15 = cResult[15];
          }
          if (cResult[16] === tmp4.subscribeNowPressable) {
            if (cResult[17] === tmp5) {
              if (cResult[18] === tmp7) {
                let tmp18;
                if (cResult[19] === tmp15) {
                  tmp18 = cResult[20];
                }
                return tmp18;
              }
            }
          }
          const obj2 = { onPress: tmp5, style: tmp6, accessibilityRole: "button", children: items };
          items = [tmp7, tmp15];
          const tmp21 = closure_11(closure_3, obj2);
          cResult[16] = tmp4.subscribeNowPressable;
          cResult[17] = tmp5;
          cResult[18] = tmp7;
          cResult[19] = tmp15;
          cResult[20] = tmp21;
          tmp18 = tmp21;
        }
        const obj3 = { variant: "text-md/normal", color: "interactive-text-default", style: tmp10, children: tmp12 };
        const tmp17 = closure_9(tmp(4886).Text, obj3);
        cResult[13] = tmp10;
        cResult[14] = tmp12;
        cResult[15] = tmp17;
        tmp15 = tmp17;
      }
      if (cResult[11] !== tmp4.underline) {
        const fn2 = function y(children, arg1) {
          const obj = { variant: "text-md/normal", style: underline.underline, children };
          return React4(Text_Text.Text, obj, arg1);
        };
        cResult[11] = tmp4.underline;
        cResult[12] = fn2;
        tmp13 = fn2;
      } else {
        tmp13 = cResult[12];
      }
      const intl = tmp(1126).intl;
      const obj4 = { price: premiumPriceFormatted, subscribeNowHook: tmp13 };
      const formatResult = intl.format(tmp(1126).t.Kxw2LT, obj4);
      cResult[8] = premiumPriceFormatted;
      cResult[9] = tmp4.underline;
      cResult[10] = formatResult;
      tmp12 = formatResult;
    }
    const obj5 = { color: "interactive-text-default", style: items1 };
    items1 = [, ];
    ({ nitroIcon: arr[0], nitroIconSubscribeNow: arr[1] } = tmp4);
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
}) : ((premiumPriceFormatted) => {
  let intl;
  let items;
  let items1;
  let obj5;
  let underline;
  ({ onTrackPress: require, handleNitroSubscribe: importDefault } = premiumPriceFormatted);
  premiumPriceFormatted = premiumPriceFormatted.premiumPriceFormatted;
  const tmp = closure_12();
  dependencyMap = tmp;
  let obj = {
    onPress() {
      if (require != null) {
        tmp(ShopCtaEnum.SUBSCRIBE_NOW);
      }
      importDefault();
    },
    style: tmp.subscribeNowPressable,
    accessibilityRole: "button",
    children: items1
  };
  const obj2 = { color: "interactive-text-default", style: items };
  items = [, ];
  ({ nitroIcon: arr[0], nitroIconSubscribeNow: arr[1] } = tmp);
  items1 = [closure_9(NitroWheelIcon2.NitroWheelIcon, obj2), ];
  const Text = Text_Text.Text;
  let androidTextPadding;
  const obj3 = PlatformUtils;
  if (obj3.isAndroid()) {
    androidTextPadding = tmp.androidTextPadding;
  }
  const obj4 = { variant: "text-md/normal", color: "interactive-text-default", style: androidTextPadding, children: intl.format(intl3.t.Kxw2LT, obj5) };
  intl = intl3.intl;
  obj5 = {
    price: premiumPriceFormatted,
    subscribeNowHook(children, arg1) {
      const obj = { variant: "text-md/normal", style: underline.underline, children };
      return React4(Text_Text.Text, obj, arg1);
    }
  };
  items1[1] = closure_9(Text, obj4);
  return closure_11(closure_3, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let enabled;
  let fetchingGoogleSkus;
  let onTrackPress;
  let product;
  let showActionSheet;
  let tmp12;
  let tmp16;
  let tmp17;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(52);
  ({ product, onTrackPress } = arg0);
  closure_12();
  const obj2 = useCurrentUser;
  const currentUser = obj2.useCurrentUser();
  const obj3 = CollectiblesUtils;
  const shopDiscountSource = obj3.getShopDiscountSource(currentUser);
  if (cResult[0] !== currentUser) {
    const obj4 = PremiumUtilsDefault;
    const canUseShopDiscountsResult = obj4.canUseShopDiscounts(currentUser);
    cResult[0] = currentUser;
    cResult[1] = canUseShopDiscountsResult;
    tmp7 = canUseShopDiscountsResult;
  } else {
    tmp7 = cResult[1];
  }
  useOpenNitroSubscribeActionSheetDefault(metroImportDefault.SHOP_PRODUCT_DETAILS);
  const tmpResult = useProductDisableState;
  const isDisabled = tmpResult.useProductDisableState(product.skuId).isDisabled;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { location: "InlinePriceTag" };
    cResult[2] = obj5;
    tmp12 = obj5;
  } else {
    tmp12 = cResult[2];
  }
  const tmp10Result = MobileNitroUpsellInShopPdpExperimentDefault;
  const config = tmp10Result.useConfig(tmp12);
  ({ enabled, showActionSheet } = config);
  const tmpResult6 = collectibles_CollectiblesUtils;
  const formattedPriceForCollectiblesProduct = tmpResult6.getFormattedPriceForCollectiblesProduct(product, false, true);
  const tmpResult7 = useVirtualCurrencyData;
  const virtualCurrencyData = tmpResult7.useVirtualCurrencyData(product, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [IAPStore];
    class E {
      constructor() {
        return closure_1_5.isFetchingGoogleSkus();
      }
    }
    cResult[3] = items;
    cResult[4] = E;
    tmp17 = E;
    tmp16 = items;
  } else {
    tmp16 = cResult[3];
    tmp17 = cResult[4];
  }
  const tmpResult8 = get_initialized;
  if (tmpResult8.useStateFromStores(tmp16, tmp17)) {
    if (null == formattedPriceForCollectiblesProduct) {
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        React4(CollectiblesShopPricePlaceholder.CollectiblesShopPricePlaceholder, {});
        class E {
          constructor() {
            return closure_1_5.isFetchingGoogleSkus();
          }
        }
      }
      class E {
        constructor() {
          return closure_1_5.isFetchingGoogleSkus();
        }
      }
    }
  }
  if (null == formattedPriceForCollectiblesProduct) {
    let tmp23 = null;
    if (null != virtualCurrencyData.price) {
      if (cResult[6] === tmp7) {
        if (cResult[7] === isDisabled) {
          if (cResult[8] === product) {
            let tmp24;
            if (cResult[9] === virtualCurrencyData) {
              tmp24 = cResult[10];
            }
            tmp23 = tmp24;
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
      const tmp28 = React4(closure_16, tmp27);
      cResult[6] = tmp7;
      cResult[7] = isDisabled;
      cResult[8] = product;
      cResult[9] = virtualCurrencyData;
      cResult[10] = tmp28;
      tmp24 = tmp28;
    }
    return tmp23;
  } else {
    const tmpResult9 = collectibles_CollectiblesUtils;
    const formattedPriceForCollectiblesProduct1 = tmpResult9.getFormattedPriceForCollectiblesProduct(product, true, true);
    class E {
      constructor() {
        return closure_1_5.isFetchingGoogleSkus();
      }
    }
    const tmpResult10 = CollectiblesUtils;
    const productDiscount = tmpResult10.getProductDiscount(product, tmp7);
    cResult[11] = tmp7;
    cResult[12] = product;
    cResult[13] = productDiscount;
  }
}) : ((arg0) => {
  let androidTextPadding;
  let enabled;
  let fetchingGoogleSkus;
  let intl;
  let intl2;
  let items1;
  let items2;
  let items3;
  let obj14;
  let obj17;
  let onTrackPress;
  let product;
  let showActionSheet;
  let tmp30Result5;
  ({ product, onTrackPress } = arg0);
  const tmp = closure_12();
  const obj = useCurrentUser;
  const currentUser = obj.useCurrentUser();
  const obj2 = CollectiblesUtils;
  const shopDiscountSource = obj2.getShopDiscountSource(currentUser);
  const obj3 = PremiumUtilsDefault;
  const canUseShopDiscountsResult = obj3.canUseShopDiscounts(currentUser);
  const tmp7 = useOpenNitroSubscribeActionSheetDefault(metroImportDefault.SHOP_PRODUCT_DETAILS);
  const obj4 = useProductDisableState;
  const isDisabled = obj4.useProductDisableState(product.skuId).isDisabled;
  const obj5 = MobileNitroUpsellInShopPdpExperimentDefault;
  const config = obj5.useConfig({ location: "InlinePriceTag" });
  ({ enabled, showActionSheet } = config);
  const obj6 = collectibles_CollectiblesUtils;
  const formattedPriceForCollectiblesProduct = obj6.getFormattedPriceForCollectiblesProduct(product, false, true);
  const obj7 = useVirtualCurrencyData;
  const virtualCurrencyData = obj7.useVirtualCurrencyData(product, canUseShopDiscountsResult);
  const items = [IAPStore];
  const obj8 = get_initialized;
  if (obj8.useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus())) {
    if (null == formattedPriceForCollectiblesProduct) {
      return React4(CollectiblesShopPricePlaceholder.CollectiblesShopPricePlaceholder, {});
    }
  }
  if (null == formattedPriceForCollectiblesProduct) {
    let tmp23 = null;
    if (null != virtualCurrencyData.price) {
      const obj9 = { vcData: virtualCurrencyData, isProductDisabled: isDisabled, product, eligibleForShopDiscount: canUseShopDiscountsResult };
      tmp23 = React4(closure_16, obj9);
    }
    return tmp23;
  } else {
    const tmp2Result = collectibles_CollectiblesUtils;
    const formattedPriceForCollectiblesProduct1 = tmp2Result.getFormattedPriceForCollectiblesProduct(product, true, true);
    const obj10 = { style: tmp.root, children: items3 };
    const obj11 = { style: tmp.container, children: items2 };
    const obj12 = { style: tmp.priceTagRow, children: items1 };
    const obj13 = { priceFormatted: formattedPriceForCollectiblesProduct, variant: "heading-md/semibold", style: canUseShopDiscountsResult ? tmp.strikedPrice : tmp.regularPrice, color: "interactive-text-active", accessibilityLabel: intl.formatToPlainString(intl3.t.sPvyr8, obj14) };
    const tmp2Result3 = CollectiblesUtils;
    const discountPercentage = tmp2Result3.getProductDiscount(product, canUseShopDiscountsResult).discountPercentage;
    intl = intl3.intl;
    obj14 = { price: formattedPriceForCollectiblesProduct };
    items1 = [React4(closure_15, obj13), , ];
    let tmp30Result = null;
    if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
      tmp30Result = null;
      if (!canUseShopDiscountsResult) {
        const obj15 = { discountPercentage };
        tmp30Result = React4(closure_20, obj15);
      }
    }
    items1[1] = tmp30Result;
    let tmp30Result6 = null != formattedPriceForCollectiblesProduct1 && canUseShopDiscountsResult;
    if (tmp30Result6) {
      const obj16 = { priceFormatted: formattedPriceForCollectiblesProduct1, variant: "text-md/medium", color: "interactive-text-active", accessibilityLabel: intl2.formatToPlainString(intl3.t.kWkpdG, obj17), style: androidTextPadding, icon: tmp30Result5 };
      intl2 = intl3.intl;
      androidTextPadding = undefined;
      obj17 = { price: formattedPriceForCollectiblesProduct1 };
      const tmp2Result4 = PlatformUtils;
      if (tmp2Result4.isAndroid()) {
        androidTextPadding = tmp.androidTextPadding;
      }
      if (shopDiscountSource === CollectiblesUtils.ShopDiscountSource.THIRDPARTY) {
        const obj18 = { color: "interactive-text-active", style: tmp.nitroIcon };
        tmp30Result5 = React4(TagIcon.TagIcon, obj18);
      } else {
        const obj19 = { color: "interactive-text-active", style: tmp.nitroIcon };
        tmp30Result5 = React4(NitroWheelIcon2.NitroWheelIcon, obj19);
      }
      tmp30Result6 = React4(closure_15, obj16);
    }
    items1[2] = tmp30Result6;
    items2 = [unpackModuleId(React3, obj12), ];
    let tmp30Result7 = null != virtualCurrencyData.price;
    if (tmp30Result7) {
      const obj20 = { vcData: virtualCurrencyData, isProductDisabled: isDisabled, product, eligibleForShopDiscount: canUseShopDiscountsResult };
      tmp30Result7 = React4(closure_16, obj20);
    }
    items2[1] = tmp30Result7;
    items3 = [unpackModuleId(React3, obj11), ];
    let tmp19 = null != formattedPriceForCollectiblesProduct1 && !canUseShopDiscountsResult;
    if (tmp19) {
      let tmp30Result8;
      if (enabled) {
        const obj21 = { defaultPriceFormatted: formattedPriceForCollectiblesProduct, premiumPriceFormatted: formattedPriceForCollectiblesProduct1, onTrackPress, handleNitroSubscribe: tmp7, showActionSheet };
        tmp30Result8 = React4(ExpressiveNitroUpsell, obj21);
      } else {
        const obj22 = { premiumPriceFormatted: formattedPriceForCollectiblesProduct1, onTrackPress, handleNitroSubscribe: tmp7 };
        tmp30Result8 = React4(closure_18, obj22);
      }
      tmp19 = tmp30Result8;
    }
    items3[1] = tmp19;
    return unpackModuleId(React3, obj10);
  }
});
createStyles = createStyles_mod;
let closure_19 = createStyles.createStyles(() => {
  let num;
  let num2;
  const discount = { backgroundColor: "rgba(46, 204, 113, 0.25)", flexDirection: "row", flexShrink: 1, borderRadius: nativeDefault.radii.xs - 1, paddingHorizontal: 6, marginLeft: 6, paddingTop: num, paddingBottom: num2 };
  num = undefined;
  const obj2 = PlatformUtils;
  if (obj2.isAndroid()) {
    num = 0;
  }
  num2 = undefined;
  const tmp2Result = PlatformUtils;
  if (tmp2Result.isAndroid()) {
    num2 = 2;
  }
  return { discount };
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((discountPercentage) => {
  let items;
  const obj = react2;
  const cResult = obj.c(5);
  discountPercentage = discountPercentage.discountPercentage;
  const tmp4 = closure_19();
  let tmp5 = null;
  if (discountPercentage >= CollectiblesUtils.DISCOUNT_DISPLAY_MINIMUM_THRESHOLD) {
    let tmp6;
    if (cResult[0] !== discountPercentage) {
      const obj2 = { variant: "text-md/normal", color: "text-feedback-positive", children: items };
      items = ["-", discountPercentage, "%"];
      const tmp8 = unpackModuleId(Text_Text.Text, obj2);
      cResult[0] = discountPercentage;
      cResult[1] = tmp8;
      tmp6 = tmp8;
    } else {
      tmp6 = cResult[1];
    }
    if (cResult[2] === tmp4.discount) {
      let tmp9;
      if (cResult[3] === tmp6) {
        tmp9 = cResult[4];
      }
      tmp5 = tmp9;
    }
    const obj3 = { style: tmp4.discount, children: tmp6 };
    const tmp12 = React4(React3, obj3);
    cResult[2] = tmp4.discount;
    cResult[3] = tmp6;
    cResult[4] = tmp12;
    tmp9 = tmp12;
  }
  return tmp5;
}) : ((discountPercentage) => {
  let items;
  let obj2;
  discountPercentage = discountPercentage.discountPercentage;
  let tmp4 = null;
  const tmp = closure_19();
  if (discountPercentage >= CollectiblesUtils.DISCOUNT_DISPLAY_MINIMUM_THRESHOLD) {
    const obj = { style: tmp.discount, children: unpackModuleId(Text_Text.Text, obj2) };
    obj2 = { variant: "text-md/normal", color: "text-feedback-positive", children: items };
    items = ["-", discountPercentage, "%"];
    tmp4 = React4(React3, obj);
  }
  return tmp4;
});
let result = size.fileFinishedImporting("modules/collectibles/native/InlinePriceTag.tsx");

export default tmp8;