// === Module 13539: PremiumSubscriptionUpsell ===

// Module 13539 (PremiumSubscriptionUpsell)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4218 */;
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
    tmp5(4987);
    obj.start = tmp2(1093).HorizontalGradient.START;
    obj.end = tmp2(1093).HorizontalGradient.END;
    obj.colors = Gradients.PREMIUM_GUILD;
    const tmp5Result = tmp5(4218);
    if (tmp5Result.isPremium(stateFromStores)) {
      obj1 = { children: null };
      const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "text-overlay-light", children: null };
      const intl2 = tmp2(1114).intl;
      obj2.children = intl2.string(tmp2(1114).t.YYfHlx);
      const items2 = [tmp6(tmp2(4556).Text, obj2), ];
      const obj3 = { style: tmp.subtitle, variant: "text-md/semibold", color: "text-overlay-light", children: null };
      const intl3 = tmp2(1114).intl;
      const obj4 = { numFreeGuildSubscriptions };
      obj3.children = intl3.format(tmp2(1114).t.Af0zEZ, obj4);
      items2[1] = tmp6(tmp2(4556).Text, obj3);
      obj1.children = items2;
      let tmp6Result = tmp8(closure_1_11, obj1);
    } else {
      const obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "text-overlay-light", children: null };
      const intl = tmp2(1114).intl;
      obj5.children = intl.string(tmp2(1114).t["qUl+K4"]);
      tmp6Result = tmp6(tmp2(4556).Text, obj5);
    }
    const items3 = [tmp6Result, , ];
    const obj6 = { style: tmp.upsellFeatures, children: null };
    const obj7 = { style: tmp.upsellFeatureSubLogo, source: tmp5(13540) };
    const items4 = [closure_1_10(React4, obj7), , ];
    const obj8 = { style: tmp.upsellFeatureLogoTier2, source: tmp5(13541) };
    items4[1] = closure_1_10(React4, obj8);
    const obj9 = { style: tmp.upsellFeatureList, features: null, labelStyle: null, rowStyle: null };
    const obj10 = { IconComponent: tmp2(4511).CheckmarkLargeIcon, label: null, color: null };
    const intl4 = tmp2(1114).intl;
    const obj11 = { discountPercentage: null };
    const tmp5Result1 = tmp5(9391);
    obj11.discountPercentage = tmp2(1880).formatPercent(LocaleStore.locale, React7 / 100);
    obj10.label = intl4.formatToPlainString(tmp2(1114).t.P3aEj6, obj11);
    obj10.color = tmp5(576).unsafe_rawColors.WHITE;
    const items5 = [obj10, ];
    const obj12 = { IconComponent: tmp2(4511).CheckmarkLargeIcon, label: null, color: null };
    const intl5 = tmp2(1114).intl;
    const obj13 = { numFreeGuildSubscriptions };
    obj12.label = intl5.formatToPlainString(tmp2(1114).t.Ntlzbd, obj13);
    obj12.color = tmp5(576).unsafe_rawColors.WHITE;
    items5[1] = obj12;
    obj9.features = items5;
    ({ upsellLabel: obj14.labelStyle, upsellRow: obj14.rowStyle } = tmp);
    items4[2] = closure_1_10(tmp5Result1, obj9);
    obj6.children = items4;
    items3[1] = closure_1_12(React3, obj6);
    const obj14 = { style: tmp.upsellButton, children: null };
    const obj15 = { variant: "experimental_premium-secondary", text: null, onPress: null };
    const intl6 = tmp2(1114).intl;
    stringResult = intl6.string(tmp2(1114).t.fJOECn);
    obj15.text = stringResult;
    obj15.onPress = onLearnMorePremium;
    tmp = tmp6(tmp2(4975).Button, obj15);
    obj14.children = tmp;
    items3[2] = closure_1_10(React3, obj14);
    obj.children = items3;
    obj = tmp8(tmp5Result, obj);
    obj.children = obj;
    tmp6Result = tmp6(tmp7, obj);
    const tmp2Result = tmp2(1880);
  }
};