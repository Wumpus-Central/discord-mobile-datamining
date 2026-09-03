// === Module 14825: ThemedTabBadge ===

// Module 14825 (ThemedTabBadge)
import noopAll from "noop" /* 19 */;
import encodeProperties from "encodeProperties" /* 500 */;
import ThemesDefault from "Themes" /* 709 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1362 */;
import DismissibleContent from "DismissibleContent" /* 1372 */;
import getPremiumPlanItem from "getPremiumPlanItem" /* 4139 */;
import UNSAFE_isDismissibleContentDismissed from "UNSAFE_isDismissibleContentDismissed" /* 4298 */;
import useThemeDefault from "useTheme" /* 4413 */;
import Text from "Text" /* 4474 */;
import LinearGradientDefault from "LinearGradient" /* 4941 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7202 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 7981 */;
import trackImpressionDefault from "trackImpression" /* 8911 */;
import MarketingComponentType from "MarketingComponentType" /* 10740 */;
import registerAssetDefault from "registerAsset" /* 14826 */;
import closure_3 from "_slicedToArray" /* 32 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "reset" /* 4145 */;
import { PREMIUM_TIER_2_REFERRAL_TRIAL_ID as closure_6 } from "GuildFeatures" /* 1923 */;
import { Gradients } from "items" /* 7187 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function ThemedTabBadge(children) {
  const tmp = callback4();
  let obj = AccessibilityAnnouncer;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const items = [tmp.badge, ];
  obj = { style: items, children: null };
  items[1] = isThemeDarkResult ? tmp.badgeBackgroundDarkTheme : tmp.badgeBackgroundLightTheme;
  let str = "text-overlay-light";
  if (isThemeDarkResult) {
    str = "text-overlay-dark";
  }
  const items1 = [, ];
  ({ uppercase: arr2[0], text: arr2[1] } = tmp);
  obj[1] = closure_8(Text.Text, { variant: "eyebrow", color: str, style: items1, children: children.label });
  return closure_8(View, obj);
}
function OfferBadge(componentId) {
  componentId = componentId.componentId;
  ({ acked, badgeCopy, ackedBadgeCopy, promotionId } = componentId);
  const tmp = callback4();
  let obj = { type: encodeProperties.ImpressionTypes.VIEW, name: encodeProperties.ImpressionNames.PREMIUM_MARKETING_COMPONENT, properties: null };
  obj = { component_type: MarketingComponentType.MarketingComponentType.PREMIUM_TAB, component_id: componentId, promotion_id: promotionId };
  obj[2] = obj;
  obj = { disableTrack: null == componentId };
  trackImpressionDefault(obj, obj);
  if (acked) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.acked;
    const obj2 = { source: null, size: null, color: null, style: null };
    obj2[0] = registerAssetDefault;
    obj2[1] = tmp5(1296).Icon.Sizes.EXTRA_SMALL;
    obj2[2] = tmp.icon.color;
    obj2[3] = tmp.icon;
    const items = [callback2(tmp5(1296).Icon, obj2), ];
    const obj3 = { variant: "eyebrow", color: "interactive-text-default", style: null, children: null };
    const items1 = [, ];
    ({ uppercase: arr2[0], text: arr2[1] } = tmp);
    obj3[2] = items1;
    obj3[3] = ackedBadgeCopy;
    items[1] = callback2(tmp5(4474).Text, obj3);
    obj1[1] = items;
    let tmp9 = callback3(View, obj1);
  } else {
    const obj4 = { label: null };
    obj4[0] = badgeCopy;
    tmp9 = callback2(ThemedTabBadge, obj4);
  }
  return tmp9;
}
noopAll;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { tag: null, badge: null, badgeBackgroundLightTheme: null, badgeBackgroundDarkTheme: null, acked: null, ackedBadge: null, icon: null, uppercase: null, text: null, premiumDiscountBadge: null };
createCacheKey = { paddingVertical: 4, paddingHorizontal: 8, borderRadius: ThemesDefault.radii.round };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", minWidth: 16, minHeight: 16, paddingHorizontal: 8, justifyContent: "center", alignItems: "center", gap: 4, borderRadius: ThemesDefault.radii.round };
let obj1 = { display: "flex", minWidth: 16, minHeight: 16, paddingHorizontal: 8, justifyContent: "center", alignItems: "center", gap: 4, borderRadius: ThemesDefault.radii.round };
createCacheKey[2] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
let obj2 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[3] = { backgroundColor: ThemesDefault.colors.WHITE };
let obj3 = { backgroundColor: ThemesDefault.colors.WHITE };
createCacheKey[4] = { paddingVertical: 2, paddingHorizontal: 12, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, display: "flex", flexDirection: "row", alignItems: "center", textAlignVertical: "center" };
let obj4 = { paddingVertical: 2, paddingHorizontal: 12, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, display: "flex", flexDirection: "row", alignItems: "center", textAlignVertical: "center" };
createCacheKey[5] = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
let obj5 = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[6] = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginRight: 2 };
createCacheKey[7] = { textTransform: "uppercase" };
createCacheKey[8] = { paddingBottom: 2 };
let obj6 = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginRight: 2 };
createCacheKey[9] = { paddingVertical: 2, paddingHorizontal: 12, borderRadius: ThemesDefault.radii.round, display: "flex", flexDirection: "row", alignItems: "center", textAlignVertical: "center" };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj7 = { paddingVertical: 2, paddingHorizontal: 12, borderRadius: ThemesDefault.radii.round, display: "flex", flexDirection: "row", alignItems: "center", textAlignVertical: "center" };
let result = require("set").fileFinishedImporting("modules/premium/native/PremiumTabBadge.tsx");

export default function PremiumTabBadge() {
  let tmp = callback4();
  let obj = usePremiumTrialOffer;
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  obj1 = usePremiumDiscountOffer;
  const premiumDiscountOffer = obj1.usePremiumDiscountOffer();
  let obj3 = getPremiumPlanItem;
  const hasTier2Premium = obj3.useHasTier2Premium();
  let obj4 = UNSAFE_isDismissibleContentDismissed;
  const result = obj4.useIsDismissibleContentDismissed_UNSAFE(DismissibleContent.DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE);
  let tmp7 = !result;
  if (!result) {
    tmp7 = hasTier2Premium;
  }
  let tmp2Result = tmp2(586);
  const items = [closure_5];
  const stateFromStores = tmp2Result.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let trialId;
  if (stateFromStores != null) {
    trialId = stateFromStores.trialId;
  }
  tmp2Result = tmp2(6261);
  if (trialId === closure_6) {
    if (!tmp7) {
      let items1 = [tmp2(1372).DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE];
    }
    [tmp14, r10051] = callback(tmp11(items1, undefined, true), 2);
    tmp2(6261);
    if (!tmp7) {
      if (hasTier2Premium) {
        let items2 = [tmp2(1372).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD];
      }
      let tmp12Result = tmp12(tmp16(items2, undefined, true), 2);
      [tmp18, r10063] = tmp12Result;
      const isEligibleSenderForReferralProgram = tmp2(7977).useIsEligibleSenderForReferralProgram();
      const tmp2Result2 = tmp2(7977);
      const isReferralProgramEntrypointBadgeAcknowledged = tmp2(7976).useIsReferralProgramEntrypointBadgeAcknowledged();
      const tmp2Result3 = tmp2(7976);
      const promotionMarketingComponent = tmp2(13247).usePromotionMarketingComponent(tmp2(10740).MarketingComponentType.PREMIUM_TAB);
      const tmp2Result5 = tmp2(6261);
      let prop = null;
      if (null != promotionMarketingComponent) {
        prop = null;
        if ("premiumTab" === promotionMarketingComponent.properties.properties.oneofKind) {
          prop = tmp2(1372).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        }
      }
      let str2;
      if (promotionMarketingComponent != null) {
        str2 = promotionMarketingComponent.promotionId;
      }
      if (str2 == null) {
        str2 = "";
      }
      tmp12Result = tmp12(tmp2Result5.useSelectedSnowflakeBoundDismissibleContent(prop, str2, undefined, true), 2);
      if (null != promotionMarketingComponent) {
        if ("premiumTab" === promotionMarketingComponent.properties.properties.oneofKind) {
          obj = { acked: null, badgeCopy: null, ackedBadgeCopy: null, componentId: null, promotionId: null };
          obj[0] = tmp27 !== tmp2(1372).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
          obj[1] = promotionMarketingComponent.properties.properties.premiumTab.badgeLabel;
          obj[2] = promotionMarketingComponent.properties.properties.premiumTab.acknowledgedBadgeLabel;
          ({ id: obj24[3], promotionId: obj24[4] } = promotionMarketingComponent);
          return callback2(OfferBadge, obj);
        }
      }
      if (tmp14 === tmp2(1372).DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE) {
        const intl2 = tmp2(1233).intl;
        let stringResult = intl2.string(tmp2(1233).t.uO4bXn);
      } else {
        stringResult = null;
        if (tmp18 === tmp2(1372).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD) {
          const intl = tmp2(1233).intl;
          stringResult = intl.string(tmp2(1233).t["jyYgZ+"]);
        }
      }
      if (isEligibleSenderForReferralProgram) {
        if (!isReferralProgramEntrypointBadgeAcknowledged) {
          obj = { label: null };
          const intl3 = tmp2(1233).intl;
          obj[0] = intl3.string(tmp2(1233).t.RDE0Sc);
          return callback2(ThemedTabBadge, obj);
        }
      }
      if (tmp7) {
        obj1 = { style: null, colors: null, start: null, end: null, children: null };
        obj1[0] = tmp.tag;
        obj1[1] = Gradients.PREMIUM_TIER_2;
        obj1[2] = tmp2(688).HorizontalGradient.START;
        obj1[3] = tmp2(688).HorizontalGradient.END;
        const items3 = [tmp.uppercase, ];
        const tmp52 = LinearGradientDefault;
        let text;
        if (tmp2Result6.isAndroid()) {
          text = tmp.text;
        }
        const obj2 = { variant: "eyebrow", color: "text-overlay-light", style: null, children: null };
        items3[1] = text;
        obj2[2] = items3;
        const intl8 = tmp2(1233).intl;
        obj2[3] = intl8.string(tmp2(1233).t.y2b7CA);
        tmp = tmp50(tmp2(4474).Text, obj2);
        obj1[4] = tmp;
        let tmp47Result = tmp50(tmp52, obj1);
        tmp2Result6 = tmp2(1234);
      } else if (null != premiumTrialOffer) {
        let hasAcknowledged;
        if (premiumTrialOffer != null) {
          hasAcknowledged = premiumTrialOffer.hasAcknowledged;
        }
        obj3 = { acked: null, badgeCopy: null, ackedBadgeCopy: null };
        obj3[0] = true === hasAcknowledged;
        const intl6 = tmp2(1233).intl;
        obj3[1] = intl6.string(tmp2(1233).t.OS9KPu);
        const intl7 = tmp2(1233).intl;
        obj3[2] = intl7.string(tmp2(1233).t.OS9KPu);
        tmp47Result = callback2(OfferBadge, obj3);
        const tmp47 = callback2;
        const tmp48 = OfferBadge;
      } else if (null != premiumDiscountOffer) {
        if (premiumDiscountOffer.hasAcknowledged()) {
          obj4 = { style: null, children: null };
          const items4 = [, ];
          ({ premiumDiscountBadge: arr6[0], ackedBadge: arr6[1] } = tmp);
          obj4[0] = items4;
          const obj5 = { source: null, size: null, color: null, style: null };
          obj5[0] = registerAssetDefault;
          obj5[1] = tmp2(1296).Icon.Sizes.EXTRA_SMALL;
          obj5[2] = tmp.icon.color;
          obj5[3] = tmp.icon;
          const items5 = [callback2(tmp2(1296).Icon, obj5), ];
          const obj6 = { variant: "eyebrow", color: "interactive-text-default", style: null, children: null };
          const items6 = [, ];
          ({ uppercase: arr8[0], text: arr8[1] } = tmp);
          obj6[2] = items6;
          const intl5 = tmp2(1233).intl;
          obj6[3] = intl5.string(tmp2(1233).t["/DTtr6"]);
          items5[1] = callback2(tmp2(4474).Text, obj6);
          obj4[1] = items5;
          let tmp41 = callback3(View, obj4);
        } else {
          const obj7 = { style: null, colors: null, start: null, end: null, children: null };
          obj7[0] = tmp.premiumDiscountBadge;
          obj7[1] = ["#db00a4", "#5968f0"];
          obj7[2] = tmp2(688).HorizontalGradient.START;
          obj7[3] = tmp2(688).HorizontalGradient.END;
          const obj8 = { variant: "eyebrow", color: "text-overlay-light", style: null, children: null };
          const items7 = [, ];
          ({ uppercase: arr5[0], text: arr5[1] } = tmp);
          obj8[2] = items7;
          const intl4 = tmp2(1233).intl;
          obj8[3] = intl4.string(tmp2(1233).t["/DTtr6"]);
          obj7[4] = callback2(tmp2(4474).Text, obj8);
          tmp41 = callback2(LinearGradientDefault, obj7);
          const tmp40 = LinearGradientDefault;
        }
      } else {
        tmp47Result = null;
        if (null != stringResult) {
          const obj9 = { style: null, colors: null, start: null, end: null, children: null };
          obj9[0] = tmp.tag;
          obj9[1] = Gradients.PREMIUM_TIER_2;
          obj9[2] = tmp2(688).HorizontalGradient.START;
          obj9[3] = tmp2(688).HorizontalGradient.END;
          const items8 = [tmp.uppercase, ];
          const tmp34 = LinearGradientDefault;
          let text1;
          if (tmp2Result7.isAndroid()) {
            text1 = tmp.text;
          }
          const obj10 = { variant: "eyebrow", color: "text-overlay-light", style: null, children: null };
          items8[1] = text1;
          obj10[2] = items8;
          obj10[3] = stringResult;
          obj9[4] = callback2(tmp2(4474).Text, obj10);
          tmp47Result = tmp32(tmp34, obj9);
          tmp2Result7 = tmp2(1234);
        }
      }
      const tmp2Result4 = tmp2(13247);
    }
    items2 = [];
    const tmp13 = callback(tmp11(items1, undefined, true), 2);
  }
  items1 = [];
};