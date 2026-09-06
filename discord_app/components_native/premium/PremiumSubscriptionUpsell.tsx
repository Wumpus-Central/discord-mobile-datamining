// === Module 13539: PremiumSubscriptionUpsell ===

// Module 13539 (PremiumSubscriptionUpsell)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import util from "util" /* 1114 */;
import NumberUtils from "NumberUtils" /* 1880 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4218 */;
import CheckmarkLargeIcon from "CheckmarkLargeIcon" /* 4511 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import PremiumFeatureListDefault from "PremiumFeatureList" /* 9391 */;
import _modDef13540 from "module_13540" /* 13540 */;
import _modDef13541 from "module_13541" /* 13541 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4, StyleSheet } = get_ActivityIndicator);
const Gradients = fn(7432).Gradients;
const PremiumConstants = fn(1373);
({ NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_8, GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT: closure_9 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let createStyles = { title: { textAlign: "center" }, subtitle: { lineHeight: 20, marginTop: 8, textAlign: "center" }, upsell: null, upsellCard: null, upsellFeatures: null, upsellFeatureSubLogo: null, upsellFeatureList: null, upsellButton: null, upsellFeatureLogoTier2: null, upsellLabel: null, upsellRow: null };
createStyles = { paddingTop: 32, borderTopWidth: 2 * StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.upsell = createStyles;
createStyles.upsellCard = { borderRadius: nativeDefault.radii.xs, padding: 16, alignItems: "center" };
let obj1 = { borderRadius: nativeDefault.radii.xs, padding: 16, alignItems: "center" };
createStyles.upsellFeatures = { borderRadius: nativeDefault.radii.sm, padding: 16, marginTop: 12, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.upsellFeatureSubLogo = { alignSelf: "center", height: 10, width: 54 };
createStyles.upsellFeatureList = { marginTop: 8 };
createStyles.upsellButton = { marginTop: 16 };
createStyles.upsellFeatureLogoTier2 = { alignSelf: "center", height: 20, marginTop: 6, width: 84 };
let obj2 = { borderRadius: nativeDefault.radii.sm, padding: 16, marginTop: 12, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.upsellLabel = { color: nativeDefault.unsafe_rawColors.WHITE, fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD, fontSize: 16, lineHeight: 20 };
let obj3 = { color: nativeDefault.unsafe_rawColors.WHITE, fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD, fontSize: 16, lineHeight: 20 };
createStyles.upsellRow = { paddingVertical: 0, marginTop: 8, color: nativeDefault.unsafe_rawColors.WHITE };
let closure_13 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumSubscriptionUpsell.tsx");

export default function PremiumSubscriptionUpsell(arg0) {
  ({ onLearnMorePremium, style } = arg0);
  let tmp = closure_13();
  let stringResult = dependencyMap;
  let obj = initialize;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = PremiumUtilsDefault;
  if (obj1.canUsePremiumGuildMemberProfile(stateFromStores)) {
    return null;
  } else {
    obj = { style: null, children: null };
    const items1 = [tmp.upsell, style];
    obj.style = items1;
    obj = { style: tmp.upsellCard, start: null, end: null, colors: null, children: null };
    obj.start = ConstantsIOS.HorizontalGradient.START;
    obj.end = ConstantsIOS.HorizontalGradient.END;
    obj.colors = Gradients.PREMIUM_GUILD;
    const tmp5Result = PremiumUtilsDefault;
    if (tmp5Result.isPremium(stateFromStores)) {
      obj1 = { children: null };
      const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "text-overlay-light", children: null };
      const intl2 = util.intl;
      obj2.children = intl2.string(util.t.YYfHlx);
      const items2 = [closure_1_10(Text_Text.Text, obj2), ];
      const obj3 = { style: tmp.subtitle, variant: "text-md/semibold", color: "text-overlay-light", children: null };
      const intl3 = util.intl;
      const obj4 = { numFreeGuildSubscriptions };
      obj3.children = intl3.format(util.t.Af0zEZ, obj4);
      items2[1] = closure_1_10(Text_Text.Text, obj3);
      obj1.children = items2;
      let tmp6Result = closure_1_12(closure_1_11, obj1);
    } else {
      const obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "text-overlay-light", children: null };
      const intl = util.intl;
      obj5.children = intl.string(util.t["qUl+K4"]);
      tmp6Result = closure_1_10(Text_Text.Text, obj5);
    }
    const items3 = [tmp6Result, , ];
    const obj6 = { style: tmp.upsellFeatures, children: null };
    const obj7 = { style: tmp.upsellFeatureSubLogo, source: _modDef13540 };
    const items4 = [closure_1_10(React4, obj7), , ];
    const obj8 = { style: tmp.upsellFeatureLogoTier2, source: _modDef13541 };
    items4[1] = closure_1_10(React4, obj8);
    const obj9 = { style: tmp.upsellFeatureList, features: null, labelStyle: null, rowStyle: null };
    const obj10 = { IconComponent: CheckmarkLargeIcon.CheckmarkLargeIcon, label: null, color: null };
    const intl4 = util.intl;
    const obj11 = { discountPercentage: null };
    const tmp5Result1 = PremiumFeatureListDefault;
    obj11.discountPercentage = NumberUtils.formatPercent(LocaleStore.locale, React7 / 100);
    obj10.label = intl4.formatToPlainString(util.t.P3aEj6, obj11);
    obj10.color = nativeDefault.unsafe_rawColors.WHITE;
    const items5 = [obj10, ];
    const obj12 = { IconComponent: CheckmarkLargeIcon.CheckmarkLargeIcon, label: null, color: null };
    const intl5 = util.intl;
    const obj13 = { numFreeGuildSubscriptions };
    obj12.label = intl5.formatToPlainString(util.t.Ntlzbd, obj13);
    obj12.color = nativeDefault.unsafe_rawColors.WHITE;
    items5[1] = obj12;
    obj9.features = items5;
    ({ upsellLabel: obj14.labelStyle, upsellRow: obj14.rowStyle } = tmp);
    items4[2] = closure_1_10(tmp5Result1, obj9);
    obj6.children = items4;
    items3[1] = closure_1_12(React3, obj6);
    const obj14 = { style: tmp.upsellButton, children: null };
    const obj15 = { variant: "experimental_premium-secondary", text: null, onPress: null };
    const intl6 = util.intl;
    stringResult = intl6.string(util.t.fJOECn);
    obj15.text = stringResult;
    obj15.onPress = onLearnMorePremium;
    tmp = closure_1_10(components_Button_Button.Button, obj15);
    obj14.children = tmp;
    items3[2] = closure_1_10(React3, obj14);
    obj.children = items3;
    obj = closure_1_12(tmp5Result, obj);
    obj.children = obj;
    tmp6Result = closure_1_10(React3, obj);
    const tmp2Result = NumberUtils;
  }
};