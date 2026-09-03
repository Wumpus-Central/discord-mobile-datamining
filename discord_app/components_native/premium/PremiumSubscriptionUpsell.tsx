// discord_app/components_native/premium/PremiumSubscriptionUpsell.tsx
import noopAll from "../../../_runtime/00019_noop.js";
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import getPremiumPlanItemDefault from "../../utils/PremiumUtils.tsx";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../modules/user_settings/LocaleStore.tsx";
import closure_6 from "../../stores/UserStore.tsx";
import { Gradients } from "../../modules/colors/native/ColorConstants.tsx";
import GuildFeatures from "../../modules/premium/PremiumConstants.tsx";
import jsxProd from "../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ View: c3, Image: c4, StyleSheet } = get_ActivityIndicator);
({ NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_8, GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT: c9 } =
  GuildFeatures);
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = {
  title: { textAlign: "center" },
  subtitle: { lineHeight: 20, marginTop: 8, textAlign: "center" },
  upsell: null,
  upsellCard: null,
  upsellFeatures: null,
  upsellFeatureSubLogo: null,
  upsellFeatureList: null,
  upsellButton: null,
  upsellFeatureLogoTier2: null,
  upsellLabel: null,
  upsellRow: null,
};
createCacheKey = {
  paddingTop: 32,
  borderTopWidth: 2 * StyleSheet.hairlineWidth,
  borderTopColor: ThemesDefault.colors.BORDER_SUBTLE,
};
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { borderRadius: ThemesDefault.radii.xs, padding: 16, alignItems: "center" };
let obj1 = { borderRadius: ThemesDefault.radii.xs, padding: 16, alignItems: "center" };
createCacheKey[4] = {
  borderRadius: ThemesDefault.radii.sm,
  padding: 16,
  marginTop: 12,
  alignSelf: "stretch",
  backgroundColor: ThemesDefault.colors.BORDER_SUBTLE,
};
createCacheKey[5] = { alignSelf: "center", height: 10, width: 54 };
createCacheKey[6] = { marginTop: 8 };
createCacheKey[7] = { marginTop: 16 };
createCacheKey[8] = { alignSelf: "center", height: 20, marginTop: 6, width: 84 };
let obj2 = {
  borderRadius: ThemesDefault.radii.sm,
  padding: 16,
  marginTop: 12,
  alignSelf: "stretch",
  backgroundColor: ThemesDefault.colors.BORDER_SUBTLE,
};
createCacheKey[9] = {
  color: ThemesDefault.unsafe_rawColors.WHITE,
  fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD,
  fontSize: 16,
  lineHeight: 20,
};
let obj3 = {
  color: ThemesDefault.unsafe_rawColors.WHITE,
  fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD,
  fontSize: 16,
  lineHeight: 20,
};
createCacheKey[10] = { paddingVertical: 0, marginTop: 8, color: ThemesDefault.unsafe_rawColors.WHITE };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let obj4 = { paddingVertical: 0, marginTop: 8, color: ThemesDefault.unsafe_rawColors.WHITE };
const result = require("set").fileFinishedImporting("components_native/premium/PremiumSubscriptionUpsell.tsx");

export default function PremiumSubscriptionUpsell(arg0) {
  ({ onLearnMorePremium, style } = arg0);
  let tmp = callback();
  let stringResult = dependencyMap;
  let obj = initialize;
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  obj1 = getPremiumPlanItemDefault;
  if (obj1.canUsePremiumGuildMemberProfile(stateFromStores)) {
    return null;
  } else {
    obj = { style: null, children: null };
    const items1 = [tmp.upsell, style];
    obj[0] = items1;
    obj = { style: null, start: null, end: null, colors: null, children: null };
    obj[0] = tmp.upsellCard;
    let tmp5Result = tmp5(4941);
    obj[1] = tmp2(688).HorizontalGradient.START;
    obj[2] = tmp2(688).HorizontalGradient.END;
    obj[3] = Gradients.PREMIUM_GUILD;
    tmp5Result = tmp5(4139);
    if (tmp5Result.isPremium(stateFromStores)) {
      obj1 = { children: null };
      const obj2 = {
        style: null,
        accessibilityRole: "header",
        variant: "heading-lg/semibold",
        color: "text-overlay-light",
        children: null,
      };
      obj2[0] = tmp.title;
      const intl2 = tmp2(1233).intl;
      obj2[4] = intl2.string(tmp2(1233).t.YYfHlx);
      const items2 = [tmp6(tmp2(4474).Text, obj2)];
      const obj3 = { style: null, variant: "text-md/semibold", color: "text-overlay-light", children: null };
      obj3[0] = tmp.subtitle;
      const intl3 = tmp2(1233).intl;
      const obj4 = { numFreeGuildSubscriptions: null };
      obj4[0] = closure_8;
      obj3[3] = intl3.format(tmp2(1233).t.Af0zEZ, obj4);
      items2[1] = tmp6(tmp2(4474).Text, obj3);
      obj1[0] = items2;
      let tmp6Result = tmp8(closure_11, obj1);
    } else {
      const obj5 = {
        style: null,
        accessibilityRole: "header",
        variant: "heading-lg/semibold",
        color: "text-overlay-light",
        children: null,
      };
      obj5[0] = tmp.title;
      const intl = tmp2(1233).intl;
      obj5[4] = intl.string(tmp2(1233).t["qUl+K4"]);
      tmp6Result = tmp6(tmp2(4474).Text, obj5);
    }
    const items3 = [tmp6Result, ,];
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.upsellFeatures;
    const obj7 = { style: null, source: null };
    obj7[0] = tmp.upsellFeatureSubLogo;
    obj7[1] = tmp5(13434);
    const items4 = [closure_10(closure_4, obj7), ,];
    const obj8 = { style: null, source: null };
    obj8[0] = tmp.upsellFeatureLogoTier2;
    obj8[1] = tmp5(13435);
    items4[1] = closure_10(closure_4, obj8);
    const obj9 = { style: null, features: null, labelStyle: null, rowStyle: null };
    obj9[0] = tmp.upsellFeatureList;
    const obj10 = { IconComponent: null, label: null, color: null };
    obj10[0] = tmp2(4429).CheckmarkLargeIcon;
    const intl4 = tmp2(1233).intl;
    const obj11 = { discountPercentage: null };
    const tmp5Result1 = tmp5(8375);
    obj11[0] = tmp2(1896).formatPercent(locale.locale, closure_9 / 100);
    obj10[1] = intl4.formatToPlainString(tmp2(1233).t.P3aEj6, obj11);
    obj10[2] = tmp5(709).unsafe_rawColors.WHITE;
    const items5 = [obj10];
    const obj12 = { IconComponent: null, label: null, color: null };
    obj12[0] = tmp2(4429).CheckmarkLargeIcon;
    const intl5 = tmp2(1233).intl;
    const obj13 = { numFreeGuildSubscriptions: null };
    obj13[0] = closure_8;
    obj12[1] = intl5.formatToPlainString(tmp2(1233).t.Ntlzbd, obj13);
    obj12[2] = tmp5(709).unsafe_rawColors.WHITE;
    items5[1] = obj12;
    obj9[1] = items5;
    ({ upsellLabel: obj14[2], upsellRow: obj14[3] } = tmp);
    items4[2] = closure_10(tmp5Result1, obj9);
    obj6[1] = items4;
    items3[1] = closure_12(closure_3, obj6);
    const obj14 = { style: null, children: null };
    obj14[0] = tmp.upsellButton;
    const obj15 = { variant: "experimental_premium-secondary", text: null, onPress: null };
    const intl6 = tmp2(1233).intl;
    stringResult = intl6.string(tmp2(1233).t.fJOECn);
    obj15[1] = stringResult;
    obj15[2] = onLearnMorePremium;
    tmp = tmp6(tmp2(4929).Button, obj15);
    obj14[1] = tmp;
    items3[2] = closure_10(closure_3, obj14);
    obj[4] = items3;
    obj = tmp8(tmp5Result, obj);
    obj[1] = obj;
    tmp6Result = tmp6(tmp7, obj);
    const tmp2Result = tmp2(1896);
  }
}
