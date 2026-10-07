// discord_app/components_native/premium/PremiumSubscriptionUpsell.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../ConstantsIOS.tsx";
import util from "../../intl/index.native.tsx";
import NumberUtils from "../../../discord_common/js/shared/utils/NumberUtils.tsx";
import PremiumUtilsDefault from "../../utils/PremiumUtils.tsx";
import CheckmarkLargeIcon from "../../design/components/Icon/native/redesign/generated/CheckmarkLargeIcon.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../design/components/Button/native/Button.native.tsx";
import LinearGradientDefault from "../../../_runtime/05612_LinearGradient.js";
import PremiumFeatureListDefault from "PremiumFeatureList.tsx";
import _modDef13364 from "../../../_runtime/metro/13364__.js";
import _modDef13365 from "../../../_runtime/metro/13365__.js";
import noop from "../../../_runtime/metro/00019__.js";
import LocaleStore from "../../modules/user_settings/LocaleStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4, StyleSheet } = get_ActivityIndicator);
const Gradients = fn(6951).Gradients;
const PremiumConstants = fn(1379);
({ NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_8, GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT: closure_9 } =
  PremiumConstants);
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  title: { textAlign: "center" },
  subtitle: { lineHeight: 20, marginTop: 8, textAlign: "center" },
  upsell: {
    paddingTop: 32,
    borderTopWidth: 2 * StyleSheet.hairlineWidth,
    borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
  },
  upsellCard: null,
  upsellFeatures: null,
  upsellFeatureSubLogo: null,
  upsellFeatureList: null,
  upsellButton: null,
  upsellFeatureLogoTier2: null,
  upsellLabel: null,
  upsellRow: null,
};
let obj3 = {
  paddingTop: 32,
  borderTopWidth: 2 * StyleSheet.hairlineWidth,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.upsellCard = { borderRadius: nativeDefault.radii.xs, padding: 16, alignItems: "center" };
let obj4 = { borderRadius: nativeDefault.radii.xs, padding: 16, alignItems: "center" };
obj2.upsellFeatures = {
  borderRadius: nativeDefault.radii.sm,
  padding: 16,
  marginTop: 12,
  alignSelf: "stretch",
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.upsellFeatureSubLogo = { alignSelf: "center", height: 10, width: 54 };
obj2.upsellFeatureList = { marginTop: 8 };
obj2.upsellButton = { marginTop: 16 };
obj2.upsellFeatureLogoTier2 = { alignSelf: "center", height: 20, marginTop: 6, width: 84 };
let obj5 = {
  borderRadius: nativeDefault.radii.sm,
  padding: 16,
  marginTop: 12,
  alignSelf: "stretch",
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.upsellLabel = {
  color: nativeDefault.unsafe_rawColors.WHITE,
  fontFamily: fn(1085).Fonts.PRIMARY_SEMIBOLD,
  fontSize: 16,
  lineHeight: 20,
};
let obj6 = {
  color: nativeDefault.unsafe_rawColors.WHITE,
  fontFamily: fn(1085).Fonts.PRIMARY_SEMIBOLD,
  fontSize: 16,
  lineHeight: 20,
};
obj2.upsellRow = { paddingVertical: 0, marginTop: 8, color: nativeDefault.unsafe_rawColors.WHITE };
let closure_13 = createStyles.createStyles(obj2);
function FEATURES_UPSELL_PREMIUM_TIER_2() {
  const obj = { IconComponent: CheckmarkLargeIcon.CheckmarkLargeIcon, label: null, color: null };
  const intl = util.intl;
  const obj2 = { discountPercentage: NumberUtils.formatPercent(LocaleStore.locale, options / 100) };
  obj.label = intl.formatToPlainString(util.t.P3aEj6, obj2);
  obj.color = nativeDefault.unsafe_rawColors.WHITE;
  const items = [obj];
  const obj4 = { IconComponent: CheckmarkLargeIcon.CheckmarkLargeIcon, label: null, color: null };
  const intl2 = util.intl;
  obj4.label = intl2.formatToPlainString(util.t.Ntlzbd, { numFreeGuildSubscriptions });
  obj4.color = nativeDefault.unsafe_rawColors.WHITE;
  items[1] = obj4;
  return items;
}
const ReactCompilerGating = fn(558);
let obj7 = { paddingVertical: 0, marginTop: 8, color: nativeDefault.unsafe_rawColors.WHITE };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumSubscriptionUpsell.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(37);
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
      title = initialize.useStateFromStores(tmp5, tmp6);
      const tmpResult = initialize;
      if (obj3.canUsePremiumGuildMemberProfile(title)) {
        return null;
      } else {
        if (cResult[2] === style) {
          if (cResult[3] === tmp4.upsell) {
            let tmp9 = cResult[4];
          }
          if (cResult[5] === title) {
            if (cResult[6] === tmp4.subtitle) {
              if (cResult[7] === tmp4.title) {
                if (cResult[9] !== tmp4.upsellFeatureSubLogo) {
                  const obj2 = { style: tmp4.upsellFeatureSubLogo, source: _modDef13364 };
                  const tmp22 = v65535(React4, obj2);
                  cResult[9] = tmp4.upsellFeatureSubLogo;
                  cResult[10] = tmp22;
                  let tmp19 = tmp22;
                } else {
                  tmp19 = cResult[10];
                }
                if (cResult[11] !== tmp4.upsellFeatureLogoTier2) {
                  const obj4 = { style: tmp4.upsellFeatureLogoTier2, source: _modDef13365 };
                  const tmp26 = v65535(React4, obj4);
                  cResult[11] = tmp4.upsellFeatureLogoTier2;
                  cResult[12] = tmp26;
                  let tmp23 = tmp26;
                } else {
                  tmp23 = cResult[12];
                }
                const _Symbol = Symbol;
                if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp29 = FEATURES_UPSELL_PREMIUM_TIER_2();
                  cResult[13] = tmp29;
                  let tmp27 = tmp29;
                } else {
                  tmp27 = cResult[13];
                }
                if (cResult[14] === tmp4.upsellFeatureList) {
                  if (cResult[15] === tmp4.upsellLabel) {
                    if (cResult[16] === tmp4.upsellRow) {
                      let tmp30 = cResult[17];
                    }
                    if (cResult[18] === tmp4.upsellFeatures) {
                      if (cResult[19] === tmp30) {
                        if (cResult[20] === tmp19) {
                          if (cResult[21] === tmp23) {
                            let tmp33 = cResult[22];
                          }
                          const _Symbol2 = Symbol;
                          if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl4 = util.intl;
                            const stringResult = intl4.string(util.t.fJOECn);
                            cResult[23] = stringResult;
                            let tmp37 = stringResult;
                          } else {
                            tmp37 = cResult[23];
                          }
                          if (cResult[24] !== onLearnMorePremium) {
                            const obj5 = {
                              variant: "experimental_premium-secondary",
                              text: tmp37,
                              onPress: onLearnMorePremium,
                            };
                            const tmp41 = v65535(components_Button_Button.Button, obj5);
                            cResult[24] = onLearnMorePremium;
                            cResult[25] = tmp41;
                            let tmp39 = tmp41;
                          } else {
                            tmp39 = cResult[25];
                          }
                          if (cResult[26] === tmp4.upsellButton) {
                            if (cResult[27] === tmp39) {
                              let tmp42 = cResult[28];
                            }
                            if (cResult[29] === tmp4.upsellCard) {
                              if (cResult[30] === tmp33) {
                                if (cResult[31] === tmp42) {
                                  if (cResult[32] === tmp11) {
                                    let tmp46 = cResult[33];
                                  }
                                  if (cResult[34] === tmp46) {
                                    if (cResult[35] === tmp9) {
                                      let tmp51 = cResult[36];
                                    }
                                    return tmp51;
                                  }
                                  const obj6 = { style: tmp9, children: tmp46 };
                                  const tmp54 = v65535(React3, obj6);
                                  cResult[34] = tmp46;
                                  cResult[35] = tmp9;
                                  cResult[36] = tmp54;
                                  tmp51 = tmp54;
                                }
                              }
                            }
                            const obj7 = {
                              style: tmp10,
                              start: ConstantsIOS.HorizontalGradient.START,
                              end: ConstantsIOS.HorizontalGradient.END,
                              colors: Gradients.PREMIUM_GUILD,
                              children: null,
                            };
                            const items1 = [tmp11, tmp33, tmp42];
                            obj7.children = items1;
                            const tmp50 = __initData(LinearGradientDefault, obj7);
                            cResult[29] = tmp4.upsellCard;
                            cResult[30] = tmp33;
                            cResult[31] = tmp42;
                            cResult[32] = tmp11;
                            cResult[33] = tmp50;
                            tmp46 = tmp50;
                            const tmp8Result = LinearGradientDefault;
                          }
                          const obj8 = { style: tmp4.upsellButton, children: tmp39 };
                          const tmp45 = v65535(React3, obj8);
                          cResult[26] = tmp4.upsellButton;
                          cResult[27] = tmp39;
                          cResult[28] = tmp45;
                          tmp42 = tmp45;
                        }
                      }
                    }
                    const obj9 = { style: tmp4.upsellFeatures, children: null };
                    const items2 = [tmp19, tmp23, tmp30];
                    obj9.children = items2;
                    const tmp36 = __initData(React3, obj9);
                    cResult[18] = tmp4.upsellFeatures;
                    cResult[19] = tmp30;
                    cResult[20] = tmp19;
                    cResult[21] = tmp23;
                    cResult[22] = tmp36;
                    tmp33 = tmp36;
                  }
                }
                const obj10 = { style: tmp4.upsellFeatureList, features: tmp27, labelStyle: null, rowStyle: null };
                ({ upsellLabel: obj12.labelStyle, upsellRow: obj12.rowStyle } = tmp4);
                const tmp32 = v65535(PremiumFeatureListDefault, obj10);
                cResult[14] = tmp4.upsellFeatureList;
                cResult[15] = tmp4.upsellLabel;
                cResult[16] = tmp4.upsellRow;
                cResult[17] = tmp32;
                tmp30 = tmp32;
              }
            }
          }
          if (tmp8Result2.isPremium(title)) {
            const obj11 = { children: null };
            const obj13 = {
              style: tmp4.title,
              accessibilityRole: "header",
              variant: "heading-lg/semibold",
              color: "text-overlay-light",
              children: null,
            };
            const intl2 = util.intl;
            obj13.children = intl2.string(util.t.YYfHlx);
            const items3 = [v65535(Text_Text.Text, obj13)];
            const obj14 = {
              style: tmp4.subtitle,
              variant: "text-md/semibold",
              color: "text-overlay-light",
              children: null,
            };
            const intl3 = util.intl;
            const obj15 = { numFreeGuildSubscriptions };
            obj14.children = intl3.format(util.t.Af0zEZ, obj15);
            items3[1] = v65535(Text_Text.Text, obj14);
            obj11.children = items3;
            let tmp13 = __initData(closure_1_11, obj11);
          } else {
            const obj16 = {
              style: tmp4.title,
              accessibilityRole: "header",
              variant: "heading-lg/semibold",
              color: "text-overlay-light",
              children: null,
            };
            const intl = util.intl;
            obj16.children = intl.string(util.t["qUl+K4"]);
            tmp13 = v65535(Text_Text.Text, obj16);
          }
          cResult[5] = title;
          ({ subtitle: tmp3[6], title } = tmp4);
          cResult[7] = title;
          cResult[8] = tmp13;
          tmp8Result2 = PremiumUtilsDefault;
        }
        const items4 = [tmp4.upsell, style];
        cResult[2] = style;
        cResult[3] = tmp4.upsell;
        cResult[4] = items4;
        tmp9 = items4;
      }
      obj3 = PremiumUtilsDefault;
    }
  : (arg0) => {
      ({ onLearnMorePremium, style } = arg0);
      let tmp = closure_13();
      let stringResult = dependencyMap;
      const items = [UserStore];
      const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
      let intl = importDefault;
      if (obj2.canUsePremiumGuildMemberProfile(stateFromStores)) {
        return null;
      } else {
        const obj3 = { style: null, children: null };
        const items1 = [tmp.upsell, style];
        obj3.style = items1;
        let obj4 = {
          style: tmp.upsellCard,
          start: ConstantsIOS.HorizontalGradient.START,
          end: ConstantsIOS.HorizontalGradient.END,
          colors: Gradients.PREMIUM_GUILD,
          children: null,
        };
        const intlResult = LinearGradientDefault;
        if (intlResult1.isPremium(stateFromStores)) {
          const obj5 = { children: null };
          const obj6 = {
            style: tmp.title,
            accessibilityRole: "header",
            variant: "heading-lg/semibold",
            color: "text-overlay-light",
            children: null,
          };
          const intl3 = util.intl;
          obj6.children = intl3.string(util.t.YYfHlx);
          const items2 = [v65535(Text_Text.Text, obj6)];
          const obj7 = {
            style: tmp.subtitle,
            variant: "text-md/semibold",
            color: "text-overlay-light",
            children: null,
          };
          const intl4 = util.intl;
          const obj8 = { numFreeGuildSubscriptions };
          obj7.children = intl4.format(util.t.Af0zEZ, obj8);
          items2[1] = v65535(Text_Text.Text, obj7);
          obj5.children = items2;
          let tmp5Result1 = __initData(closure_1_11, obj5);
        } else {
          const obj9 = {
            style: tmp.title,
            accessibilityRole: "header",
            variant: "heading-lg/semibold",
            color: "text-overlay-light",
            children: null,
          };
          const intl2 = util.intl;
          obj9.children = intl2.string(util.t["qUl+K4"]);
          tmp5Result1 = v65535(Text_Text.Text, obj9);
        }
        const items3 = [tmp5Result1, ,];
        const obj10 = { style: tmp.upsellFeatures, children: null };
        const obj11 = { style: tmp.upsellFeatureSubLogo, source: _modDef13364 };
        const items4 = [v65535(React4, obj11), ,];
        const obj12 = { style: tmp.upsellFeatureLogoTier2, source: _modDef13365 };
        items4[1] = v65535(React4, obj12);
        const obj13 = { style: tmp.upsellFeatureList, features: null, labelStyle: null, rowStyle: null };
        intlResult1 = PremiumUtilsDefault;
        obj13.features = FEATURES_UPSELL_PREMIUM_TIER_2();
        ({ upsellLabel: obj14.labelStyle, upsellRow: obj14.rowStyle } = tmp);
        items4[2] = v65535(PremiumFeatureListDefault, obj13);
        obj10.children = items4;
        items3[1] = __initData(React3, obj10);
        const obj15 = { style: tmp.upsellButton, children: null };
        const obj16 = { variant: "experimental_premium-secondary", text: null, onPress: null };
        intl = util.intl;
        stringResult = intl.string(util.t.fJOECn);
        obj16.text = stringResult;
        obj16.onPress = onLearnMorePremium;
        tmp = v65535(components_Button_Button.Button, obj16);
        obj15.children = tmp;
        items3[2] = v65535(React3, obj15);
        obj4.children = items3;
        obj4 = __initData(intlResult, obj4);
        obj3.children = obj4;
        v65535(React3, obj3);
        const intlResult2 = PremiumFeatureListDefault;
      }
      obj2 = PremiumUtilsDefault;
    };
