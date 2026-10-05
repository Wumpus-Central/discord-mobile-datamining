// === Module 13344: PremiumSubscriptionUpsell ===

// Module 13344 (PremiumSubscriptionUpsell)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import intl5 from "intl" /* 1126 */;
import NumberUtils from "NumberUtils" /* 1888 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4528 */;
import CheckmarkLargeIcon from "CheckmarkLargeIcon" /* 4577 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import ColorConstants from "ColorConstants" /* 6938 */;
import PremiumFeatureListDefault from "PremiumFeatureList" /* 8894 */;
import AssetRegistryDefault from "AssetRegistry" /* 13345 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13346 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import UserStore from "UserStore" /* 1377 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c10;
let c3;
let c9;
let closure_12;
let closure_4;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let unpackModuleId;
({ View: c3, Image: closure_4, StyleSheet } = react_native);
const Fonts = Constants.Fonts;
const Gradients = ColorConstants.Gradients;
({ NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: metroImportAll, GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT: c9 } = PremiumConstants);
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { title: { textAlign: "center" }, subtitle: { lineHeight: 20, marginTop: 8, textAlign: "center" }, upsell: obj2, upsellCard: obj3, upsellFeatures: obj4, upsellFeatureSubLogo: { alignSelf: "center", height: 10, width: 54 }, upsellFeatureList: { marginTop: 8 }, upsellButton: { marginTop: 16 }, upsellFeatureLogoTier2: { alignSelf: "center", height: 20, marginTop: 6, width: 84 }, upsellLabel: obj5, upsellRow: obj6 };
obj2 = { paddingTop: 32, borderTopWidth: 2 * StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.xs, padding: 16, alignItems: "center" };
obj4 = { borderRadius: nativeDefault.radii.sm, padding: 16, marginTop: 12, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj5 = { color: nativeDefault.unsafe_rawColors.WHITE, fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 16, lineHeight: 20 };
obj6 = { paddingVertical: 0, marginTop: 8, color: nativeDefault.unsafe_rawColors.WHITE };
let closure_13 = createStyles(obj);
function FEATURES_UPSELL_PREMIUM_TIER_2() {
  let P3aEj6;
  let formatToPlainString;
  let intl2;
  let obj2;
  let obj3;
  let obj5;
  const obj = { IconComponent: CheckmarkLargeIcon.CheckmarkLargeIcon, label: formatToPlainString(P3aEj6, obj2), color: nativeDefault.unsafe_rawColors.WHITE };
  const intl = intl5.intl;
  formatToPlainString = intl.formatToPlainString;
  obj2 = { discountPercentage: obj3.formatPercent(LocaleStore.locale, React4 / 100) };
  P3aEj6 = intl5.t.P3aEj6;
  const items = [obj, ];
  obj3 = NumberUtils;
  const obj4 = { IconComponent: CheckmarkLargeIcon.CheckmarkLargeIcon, label: intl2.formatToPlainString(intl5.t.Ntlzbd, obj5), color: nativeDefault.unsafe_rawColors.WHITE };
  intl2 = intl5.intl;
  obj5 = { numFreeGuildSubscriptions: metroImportAll };
  items[1] = obj4;
  return items;
}
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let currentUser;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let items3;
  let obj15;
  let onLearnMorePremium;
  let style;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(37);
  ({ onLearnMorePremium, style } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const obj3 = PremiumUtilsDefault;
  if (obj3.canUsePremiumGuildMemberProfile(stateFromStores)) {
    return null;
  } else {
    if (cResult[2] === style) {
      let tmp10;
      let tmp14;
      if (cResult[3] === tmp4.upsell) {
        tmp10 = cResult[4];
      }
      if (cResult[5] === stateFromStores) {
        if (cResult[6] === tmp4.subtitle) {
          let tmp12;
          let tmp19;
          let tmp23;
          let tmp27;
          if (cResult[7] === tmp4.title) {
            tmp12 = cResult[8];
          }
          const upsellFeatures = tmp4.upsellFeatures;
          if (cResult[9] !== tmp4.upsellFeatureSubLogo) {
            const obj2 = { style: tmp4.upsellFeatureSubLogo, source: AssetRegistryDefault };
            const tmp22 = authStore(React3, obj2);
            cResult[9] = tmp4.upsellFeatureSubLogo;
            cResult[10] = tmp22;
            tmp19 = tmp22;
          } else {
            tmp19 = cResult[10];
          }
          if (cResult[11] !== tmp4.upsellFeatureLogoTier2) {
            const obj4 = { style: tmp4.upsellFeatureLogoTier2, source: AssetRegistryDefault2 };
            const tmp26 = authStore(React3, obj4);
            cResult[11] = tmp4.upsellFeatureLogoTier2;
            cResult[12] = tmp26;
            tmp23 = tmp26;
          } else {
            tmp23 = cResult[12];
          }
          const _Symbol = Symbol;
          const upsellFeatureList = tmp4.upsellFeatureList;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp29 = FEATURES_UPSELL_PREMIUM_TIER_2();
            cResult[13] = tmp29;
            tmp27 = tmp29;
          } else {
            tmp27 = cResult[13];
          }
          if (cResult[14] === tmp4.upsellFeatureList) {
            if (cResult[15] === tmp4.upsellLabel) {
              let tmp30;
              if (cResult[16] === tmp4.upsellRow) {
                tmp30 = cResult[17];
              }
              if (cResult[18] === tmp4.upsellFeatures) {
                if (cResult[19] === tmp30) {
                  if (cResult[20] === tmp19) {
                    let tmp33;
                    let tmp37;
                    let tmp39;
                    if (cResult[21] === tmp23) {
                      tmp33 = cResult[22];
                    }
                    const _Symbol2 = Symbol;
                    const upsellButton = tmp4.upsellButton;
                    if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl4 = intl5.intl;
                      const stringResult = intl4.string(intl5.t.fJOECn);
                      cResult[23] = stringResult;
                      tmp37 = stringResult;
                    } else {
                      tmp37 = cResult[23];
                    }
                    if (cResult[24] !== onLearnMorePremium) {
                      const obj5 = { variant: "experimental_premium-secondary", text: tmp37, onPress: onLearnMorePremium };
                      const tmp41 = authStore(components_Button_Button.Button, obj5);
                      cResult[24] = onLearnMorePremium;
                      cResult[25] = tmp41;
                      tmp39 = tmp41;
                    } else {
                      tmp39 = cResult[25];
                    }
                    if (cResult[26] === tmp4.upsellButton) {
                      let tmp42;
                      if (cResult[27] === tmp39) {
                        tmp42 = cResult[28];
                      }
                      if (cResult[29] === tmp4.upsellCard) {
                        if (cResult[30] === tmp33) {
                          if (cResult[31] === tmp42) {
                            let tmp46;
                            if (cResult[32] === tmp12) {
                              tmp46 = cResult[33];
                            }
                            if (cResult[34] === tmp46) {
                              let tmp51;
                              if (cResult[35] === tmp10) {
                                tmp51 = cResult[36];
                              }
                              return tmp51;
                            }
                            const obj6 = { style: tmp10, children: tmp46 };
                            const tmp54 = authStore(_false, obj6);
                            cResult[34] = tmp46;
                            cResult[35] = tmp10;
                            cResult[36] = tmp54;
                            tmp51 = tmp54;
                          }
                        }
                      }
                      const obj7 = { style: tmp11, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: Gradients.PREMIUM_GUILD, children: items1 };
                      items1 = [tmp12, tmp33, tmp42];
                      const tmp9Result = LinearGradientDefault;
                      const tmp50 = closure_12(tmp9Result, obj7);
                      cResult[29] = tmp4.upsellCard;
                      cResult[30] = tmp33;
                      cResult[31] = tmp42;
                      cResult[32] = tmp12;
                      cResult[33] = tmp50;
                      tmp46 = tmp50;
                    }
                    const obj8 = { style: upsellButton, children: tmp39 };
                    const tmp45 = authStore(_false, obj8);
                    cResult[26] = tmp4.upsellButton;
                    cResult[27] = tmp39;
                    cResult[28] = tmp45;
                    tmp42 = tmp45;
                  }
                }
              }
              const obj9 = { style: upsellFeatures, children: items2 };
              items2 = [tmp19, tmp23, tmp30];
              const tmp36 = closure_12(_false, obj9);
              cResult[18] = tmp4.upsellFeatures;
              cResult[19] = tmp30;
              cResult[20] = tmp19;
              cResult[21] = tmp23;
              cResult[22] = tmp36;
              tmp33 = tmp36;
            }
          }
          const obj10 = { style: upsellFeatureList, features: tmp27, labelStyle: null, rowStyle: null };
          ({ upsellLabel: obj12.labelStyle, upsellRow: obj12.rowStyle } = tmp4);
          const tmp32 = authStore(PremiumFeatureListDefault, obj10);
          cResult[14] = tmp4.upsellFeatureList;
          cResult[15] = tmp4.upsellLabel;
          cResult[16] = tmp4.upsellRow;
          cResult[17] = tmp32;
          tmp30 = tmp32;
        }
      }
      const tmp9Result2 = PremiumUtilsDefault;
      if (tmp9Result2.isPremium(stateFromStores)) {
        const obj11 = { children: items3 };
        const obj13 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "text-overlay-light", children: intl2.string(intl5.t.YYfHlx) };
        const Text2 = Text_Text.Text;
        intl2 = intl5.intl;
        items3 = [authStore(Text2, obj13), ];
        const obj14 = { style: tmp4.subtitle, variant: "text-md/semibold", color: "text-overlay-light", children: intl3.format(intl5.t.Af0zEZ, obj15) };
        const Text3 = Text_Text.Text;
        intl3 = intl5.intl;
        obj15 = { numFreeGuildSubscriptions: metroImportAll };
        items3[1] = authStore(Text3, obj14);
        tmp14 = closure_12(unpackModuleId, obj11);
      } else {
        const obj16 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "text-overlay-light", children: intl.string(intl5.t["qUl+K4"]) };
        const Text = Text_Text.Text;
        intl = intl5.intl;
        tmp14 = authStore(Text, obj16);
      }
      cResult[5] = stateFromStores;
      cResult[6] = tmp4.subtitle;
      cResult[7] = tmp4.title;
      cResult[8] = tmp14;
      tmp12 = tmp14;
    }
    const items4 = [tmp4.upsell, style];
    cResult[2] = style;
    cResult[3] = tmp4.upsell;
    cResult[4] = items4;
    tmp10 = items4;
  }
}) : ((arg0) => {
  let Button;
  let currentUser;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj16;
  let obj4;
  let obj8;
  let onLearnMorePremium;
  let style;
  let tmp5Result;
  ({ onLearnMorePremium, style } = arg0);
  const tmp = closure_13();
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let tmp7Result = null;
  const obj2 = PremiumUtilsDefault;
  if (!obj2.canUsePremiumGuildMemberProfile(stateFromStores)) {
    let tmp7Result1;
    const obj3 = { style: items1, children: closure_12(tmp5Result, obj4) };
    items1 = [tmp.upsell, style];
    obj4 = { style: tmp.upsellCard, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: Gradients.PREMIUM_GUILD, children: items3 };
    tmp5Result = LinearGradientDefault;
    const tmp5Result3 = PremiumUtilsDefault;
    if (tmp5Result3.isPremium(stateFromStores)) {
      const obj5 = { children: items2 };
      const obj6 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "text-overlay-light", children: intl2.string(intl5.t.YYfHlx) };
      const Text2 = Text_Text.Text;
      intl2 = intl5.intl;
      items2 = [authStore(Text2, obj6), ];
      const obj7 = { style: tmp.subtitle, variant: "text-md/semibold", color: "text-overlay-light", children: intl3.format(intl5.t.Af0zEZ, obj8) };
      const Text3 = Text_Text.Text;
      intl3 = intl5.intl;
      obj8 = { numFreeGuildSubscriptions: metroImportAll };
      items2[1] = authStore(Text3, obj7);
      tmp7Result1 = closure_12(unpackModuleId, obj5);
    } else {
      const obj9 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "text-overlay-light", children: intl.string(intl5.t["qUl+K4"]) };
      const Text = Text_Text.Text;
      intl = intl5.intl;
      tmp7Result1 = authStore(Text, obj9);
    }
    items3 = [tmp7Result1, , ];
    const obj10 = { style: tmp.upsellFeatures, children: items4 };
    const obj11 = { style: tmp.upsellFeatureSubLogo, source: AssetRegistryDefault };
    items4 = [authStore(React3, obj11), , ];
    const obj12 = { style: tmp.upsellFeatureLogoTier2, source: AssetRegistryDefault2 };
    items4[1] = authStore(React3, obj12);
    const obj13 = { style: tmp.upsellFeatureList, features: FEATURES_UPSELL_PREMIUM_TIER_2(), labelStyle: null, rowStyle: null };
    ({ upsellLabel: obj14.labelStyle, upsellRow: obj14.rowStyle } = tmp);
    const tmp5Result4 = PremiumFeatureListDefault;
    items4[2] = authStore(tmp5Result4, obj13);
    items3[1] = closure_12(_false, obj10);
    const obj15 = { style: tmp.upsellButton, children: authStore(Button, obj16) };
    obj16 = { variant: "experimental_premium-secondary", text: intl4.string(intl5.t.fJOECn), onPress: onLearnMorePremium };
    Button = components_Button_Button.Button;
    intl4 = intl5.intl;
    items3[2] = authStore(_false, obj15);
    tmp7Result = authStore(_false, obj3);
  }
  return tmp7Result;
});
const result = size.fileFinishedImporting("components_native/premium/PremiumSubscriptionUpsell.tsx");

export default tmp7;