// discord_app/modules/premium/native/PremiumTabBadge.tsx
import _slicedToArray from "_slicedToArray";
import "getPremiumPlanItem";
import { View } from "usePremiumTrialOffer";
import reset from "reset";
import { PREMIUM_TIER_2_REFERRAL_TRIAL_ID as closure_6 } from "GuildFeatures";
import { Gradients } from "items";
import jsxProd from "DismissibleContent";
import createCacheKey from "createCacheKey";

let c9;
let metroImportAll;
const require = arg1;
function ThemedTabBadge(children) {
  const tmp = createCacheKey();
  let obj = require(4039) /* AccessibilityAnnouncer */;
  const isThemeDarkResult = obj.isThemeDark(importDefault(4129)());
  const items = [tmp.badge, ];
  obj = { style: items, children: null };
  items[1] = isThemeDarkResult ? tmp.badgeBackgroundDarkTheme : tmp.badgeBackgroundLightTheme;
  let str = "text-overlay-light";
  if (isThemeDarkResult) {
    str = "text-overlay-dark";
  }
  obj = { variant: "eyebrow", color: str, style: tmp.text, children: children.label };
  obj[1] = closure_8(require(4189) /* Text */.Text, obj);
  return closure_8(View, obj);
}
function OfferBadge(componentId) {
  let acked;
  let ackedBadgeCopy;
  let badgeCopy;
  componentId = componentId.componentId;
  ({ acked, badgeCopy, ackedBadgeCopy } = componentId);
  const tmp = createCacheKey();
  let obj = { type: null, name: null, properties: null };
  obj[0] = require(503) /* encodeProperties */.ImpressionTypes.VIEW;
  obj[1] = require(503) /* encodeProperties */.ImpressionNames.PREMIUM_MARKETING_COMPONENT;
  obj = { component_type: require(6570) /* MarketingComponentType */.MarketingComponentType.PREMIUM_TAB, component_id: componentId };
  obj[2] = obj;
  obj = { disableTrack: null == componentId };
  importDefault(8436)(obj, obj);
  if (acked) {
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.acked;
    const obj2 = { source: null, size: null, color: null, style: null };
    obj2[0] = importDefault(14032);
    obj2[1] = tmp5(1297).Icon.Sizes.EXTRA_SMALL;
    obj2[2] = tmp.icon.color;
    obj2[3] = tmp.icon;
    const items = [callback2(tmp5(1297).Icon, obj2), ];
    const obj3 = { variant: "eyebrow", color: "interactive-text-default", style: null, children: null };
    obj3[2] = tmp.text;
    obj3[3] = ackedBadgeCopy;
    items[1] = callback2(tmp5(4189).Text, obj3);
    obj1[1] = items;
    let tmp9 = callback3(View, obj1);
  } else {
    const obj4 = { label: null };
    obj4[0] = badgeCopy;
    tmp9 = callback2(ThemedTabBadge, obj4);
  }
  return tmp9;
}
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { tag: null, badge: null, badgeBackgroundLightTheme: null, badgeBackgroundDarkTheme: null, acked: null, ackedBadge: null, icon: null, text: null, premiumDiscountBadge: null };
createCacheKey = { paddingVertical: 4, paddingHorizontal: 8, borderRadius: require("Themes").radii.round };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", minWidth: 16, minHeight: 16, paddingHorizontal: 8, justifyContent: "center", alignItems: "center", gap: 4, borderRadius: require("Themes").radii.round };
let obj1 = { display: "flex", minWidth: 16, minHeight: 16, paddingHorizontal: 8, justifyContent: "center", alignItems: "center", gap: 4, borderRadius: require("Themes").radii.round };
createCacheKey[2] = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
let obj2 = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
createCacheKey[3] = { backgroundColor: require("Themes").colors.WHITE };
let obj3 = { backgroundColor: require("Themes").colors.WHITE };
createCacheKey[4] = { paddingVertical: 2, paddingHorizontal: 12, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BORDER_SUBTLE, display: "flex", flexDirection: "row", alignItems: "center", textAlignVertical: "center" };
let obj4 = { paddingVertical: 2, paddingHorizontal: 12, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BORDER_SUBTLE, display: "flex", flexDirection: "row", alignItems: "center", textAlignVertical: "center" };
createCacheKey[5] = { backgroundColor: require("Themes").colors.BORDER_SUBTLE };
let obj5 = { backgroundColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[6] = { color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT, marginRight: 2 };
createCacheKey[7] = { paddingBottom: 2 };
let obj6 = { color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT, marginRight: 2 };
createCacheKey[8] = { paddingVertical: 2, paddingHorizontal: 12, borderRadius: require("Themes").radii.round, display: "flex", flexDirection: "row", alignItems: "center", textAlignVertical: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj7 = { paddingVertical: 2, paddingHorizontal: 12, borderRadius: require("Themes").radii.round, display: "flex", flexDirection: "row", alignItems: "center", textAlignVertical: "center" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/native/PremiumTabBadge.tsx");

export default function PremiumTabBadge() {
  let tmp14;
  let tmp18;
  let tmp = createCacheKey();
  let obj = require(6245) /* usePremiumTrialOffer */;
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  let obj1 = require(6262) /* usePremiumDiscountOffer */;
  const premiumDiscountOffer = obj1.usePremiumDiscountOffer();
  let obj3 = require(3839) /* getPremiumPlanItem */;
  const hasTier2Premium = obj3.useHasTier2Premium();
  let obj4 = require(4009) /* UNSAFE_isDismissibleContentDismissed */;
  const result = obj4.useIsDismissibleContentDismissed_UNSAFE(require(1358) /* DismissibleContent */.DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE);
  let tmp7 = !result;
  if (!result) {
    tmp7 = hasTier2Premium;
  }
  let tmp2Result = tmp2(589);
  const items = [reset];
  const stateFromStores = tmp2Result.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let trialId;
  if (stateFromStores != null) {
    trialId = stateFromStores.trialId;
  }
  tmp2Result = tmp2(8451);
  if (trialId === closure_6) {
    if (!tmp7) {
      let items1 = [tmp2(1358).DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE];
    }
    [tmp14, r10051] = callback(tmp11(items1, undefined, true), 2);
    tmp2(8451);
    if (!tmp7) {
      if (hasTier2Premium) {
        let items2 = [tmp2(1358).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD];
      }
      let tmp12Result = tmp12(tmp16(items2, undefined, true), 2);
      [tmp18, r10063] = tmp12Result;
      const isEligibleSenderForReferralProgram = tmp2(7842).useIsEligibleSenderForReferralProgram();
      const tmp2Result2 = tmp2(7842);
      const isReferralProgramEntrypointBadgeAcknowledged = tmp2(7841).useIsReferralProgramEntrypointBadgeAcknowledged();
      const tmp2Result3 = tmp2(7841);
      const promotionMarketingComponent = tmp2(6566).usePromotionMarketingComponent(tmp2(6570).MarketingComponentType.PREMIUM_TAB);
      const tmp2Result5 = tmp2(8451);
      let prop = null;
      if (null != promotionMarketingComponent) {
        prop = null;
        if ("premiumTab" === promotionMarketingComponent.properties.properties.oneofKind) {
          prop = tmp2(1358).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
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
          obj = { acked: null, badgeCopy: null, ackedBadgeCopy: null, componentId: null };
          obj[0] = tmp27 !== tmp2(1358).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
          obj[1] = promotionMarketingComponent.properties.properties.premiumTab.badgeLabel;
          obj[2] = promotionMarketingComponent.properties.properties.premiumTab.acknowledgedBadgeLabel;
          obj[3] = promotionMarketingComponent.id;
          return callback2(OfferBadge, obj);
        }
      }
      if (tmp14 === tmp2(1358).DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE) {
        const intl2 = tmp2(1236).intl;
        let stringResult = intl2.string(tmp2(1236).t.uO4bXn);
      } else {
        stringResult = null;
        if (tmp18 === tmp2(1358).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD) {
          const intl = tmp2(1236).intl;
          stringResult = intl.string(tmp2(1236).t["jyYgZ+"]);
        }
      }
      if (isEligibleSenderForReferralProgram) {
        if (!isReferralProgramEntrypointBadgeAcknowledged) {
          obj = { label: null };
          const intl3 = tmp2(1236).intl;
          obj[0] = intl3.string(tmp2(1236).t.RDE0Sc);
          return callback2(ThemedTabBadge, obj);
        }
      }
      if (tmp7) {
        obj1 = { style: null, colors: null, start: null, end: null, children: null };
        obj1[0] = tmp.tag;
        obj1[1] = Gradients.PREMIUM_TIER_2;
        obj1[2] = tmp2(691).HorizontalGradient.START;
        obj1[3] = tmp2(691).HorizontalGradient.END;
        const tmp52 = importDefault(4615);
        let text;
        if (tmp2Result6.isAndroid()) {
          text = tmp.text;
        }
        const obj2 = { variant: "eyebrow", color: "text-overlay-light", style: null, children: null };
        obj2[2] = text;
        const intl8 = tmp2(1236).intl;
        obj2[3] = intl8.string(tmp2(1236).t.y2b7CA);
        tmp = tmp50(tmp2(4189).Text, obj2);
        obj1[4] = tmp;
        let tmp47Result = tmp50(tmp52, obj1);
        tmp2Result6 = tmp2(500);
      } else if (null != premiumTrialOffer) {
        let expires_at;
        if (premiumTrialOffer != null) {
          expires_at = premiumTrialOffer.expires_at;
        }
        obj3 = { acked: null, badgeCopy: null, ackedBadgeCopy: null };
        obj3[0] = null != expires_at;
        const intl6 = tmp2(1236).intl;
        obj3[1] = intl6.string(tmp2(1236).t.OS9KPu);
        const intl7 = tmp2(1236).intl;
        obj3[2] = intl7.string(tmp2(1236).t.OS9KPu);
        tmp47Result = callback2(OfferBadge, obj3);
        const tmp47 = callback2;
        const tmp48 = OfferBadge;
      } else if (null != premiumDiscountOffer) {
        if (premiumDiscountOffer.hasAcknowledged()) {
          obj4 = { style: null, children: null };
          const items3 = [, ];
          ({ premiumDiscountBadge: arr4[0], ackedBadge: arr4[1] } = tmp);
          obj4[0] = items3;
          const obj5 = { source: null, size: null, color: null, style: null };
          obj5[0] = importDefault(14032);
          obj5[1] = tmp2(1297).Icon.Sizes.EXTRA_SMALL;
          obj5[2] = tmp.icon.color;
          obj5[3] = tmp.icon;
          const items4 = [callback2(tmp2(1297).Icon, obj5), ];
          const obj6 = { variant: "eyebrow", color: "interactive-text-default", style: null, children: null };
          obj6[2] = tmp.text;
          const intl5 = tmp2(1236).intl;
          obj6[3] = intl5.string(tmp2(1236).t["/DTtr6"]);
          items4[1] = callback2(tmp2(4189).Text, obj6);
          obj4[1] = items4;
          let tmp41 = callback3(View, obj4);
        } else {
          const obj7 = { style: null, colors: null, start: null, end: null, children: null };
          obj7[0] = tmp.premiumDiscountBadge;
          obj7[1] = ["#db00a4", "#5968f0"];
          obj7[2] = tmp2(691).HorizontalGradient.START;
          obj7[3] = tmp2(691).HorizontalGradient.END;
          const obj8 = { variant: "eyebrow", color: "text-overlay-light", style: null, children: null };
          obj8[2] = tmp.text;
          const intl4 = tmp2(1236).intl;
          obj8[3] = intl4.string(tmp2(1236).t["/DTtr6"]);
          obj7[4] = callback2(tmp2(4189).Text, obj8);
          tmp41 = callback2(importDefault(4615), obj7);
          const tmp40 = importDefault(4615);
        }
      } else {
        tmp47Result = null;
        if (null != stringResult) {
          const obj9 = { style: null, colors: null, start: null, end: null, children: null };
          obj9[0] = tmp.tag;
          obj9[1] = Gradients.PREMIUM_TIER_2;
          obj9[2] = tmp2(691).HorizontalGradient.START;
          obj9[3] = tmp2(691).HorizontalGradient.END;
          const tmp34 = importDefault(4615);
          let text1;
          if (tmp2Result7.isAndroid()) {
            text1 = tmp.text;
          }
          const obj10 = { variant: "eyebrow", color: "text-overlay-light", style: null, children: null };
          obj10[2] = text1;
          obj10[3] = stringResult;
          obj9[4] = callback2(tmp2(4189).Text, obj10);
          tmp47Result = tmp32(tmp34, obj9);
          tmp2Result7 = tmp2(500);
        }
      }
      const tmp2Result4 = tmp2(6566);
    }
    items2 = [];
    const tmp13 = callback(tmp11(items1, undefined, true), 2);
  }
  items1 = [];
};