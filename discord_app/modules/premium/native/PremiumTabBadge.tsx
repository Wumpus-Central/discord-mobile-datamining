// === Module 15327: PremiumTabBadge ===

// Module 15327 (PremiumTabBadge)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import dismissible_content from "dismissible_content" /* 2028 */;
import PremiumUtils from "PremiumUtils" /* 4483 */;
import useBadgeTextVariant from "useBadgeTextVariant" /* 4541 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4649 */;
import shared from "shared" /* 4680 */;
import useThemeDefault from "useTheme" /* 4763 */;
import Text_Text from "Text/Text" /* 4825 */;
import LinearGradientDefault from "LinearGradient" /* 5285 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7718 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7777 */;
import ReferralProgramUtils from "ReferralProgramUtils" /* 8404 */;
import useIsEligibleSenderForReferralProgram from "useIsEligibleSenderForReferralProgram" /* 8405 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 8409 */;
import useTrackImpressionDefault from "useTrackImpression" /* 9128 */;
import MarketingComponentType from "MarketingComponentType" /* 11087 */;
import usePromotionMarketingComponent from "usePromotionMarketingComponent" /* 13789 */;
import _modDef15328 from "module_15328" /* 15328 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 4489 */;

require = fn;
function ThemedTabBadge(label) {
  const badgeTextVariant = useBadgeTextVariant.useBadgeTextVariant();
  const tmp4 = closure_10();
  const isThemeDarkResult = shared.isThemeDark(useThemeDefault());
  const items = [tmp4.badge, ];
  const obj3 = { style: items, children: null };
  items[1] = isThemeDarkResult ? tmp4.badgeBackgroundDarkTheme : tmp4.badgeBackgroundLightTheme;
  const obj4 = { variant: badgeTextVariant, color: null, style: null, children: null };
  let str = "text-overlay-light";
  if (isThemeDarkResult) {
    str = "text-overlay-dark";
  }
  obj4.color = str;
  const items1 = [, ];
  ({ uppercase: arr2[0], text: arr2[1] } = tmp4);
  obj4.style = items1;
  obj4.children = label.label;
  obj3.children = React6(Text_Text.Text, obj4);
  return React6(View, obj3);
}
function OfferBadge(componentId) {
  componentId = componentId.componentId;
  ({ acked, badgeCopy, ackedBadgeCopy, promotionId } = componentId);
  const badgeTextVariant = useBadgeTextVariant.useBadgeTextVariant();
  const tmp4 = closure_10();
  const obj2 = { type: null, name: null, properties: null };
  obj2.type = discord_common_AnalyticsUtils.ImpressionTypes.VIEW;
  obj2.name = discord_common_AnalyticsUtils.ImpressionNames.PREMIUM_MARKETING_COMPONENT;
  const tmp6 = useTrackImpressionDefault;
  obj2.properties = { component_type: MarketingComponentType.MarketingComponentType.PREMIUM_TAB, component_id: componentId, promotion_id: promotionId };
  tmp6(obj2, { disableTrack: null == componentId });
  if (acked) {
    const obj5 = { style: tmp4.acked, children: null };
    const obj6 = { source: _modDef15328, size: native.Icon.Sizes.EXTRA_SMALL, color: tmp4.icon.color, style: tmp4.icon };
    const items = [React6(native.Icon, obj6), ];
    const obj7 = { variant: badgeTextVariant, color: "interactive-text-default", style: null, children: null };
    const items1 = [, ];
    ({ uppercase: arr2[0], text: arr2[1] } = tmp4);
    obj7.style = items1;
    obj7.children = ackedBadgeCopy;
    items[1] = React6(Text_Text.Text, obj7);
    obj5.children = items;
    let tmp10 = React7(View, obj5);
  } else {
    const obj8 = { label: badgeCopy };
    tmp10 = React6(ThemedTabBadge, obj8);
  }
  return tmp10;
}
const View = fn(17).View;
let closure_6 = fn(1374).PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
const Gradients = fn(7762).Gradients;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { tag: { paddingVertical: 4, paddingHorizontal: 8, borderRadius: nativeDefault.radii.round }, badge: null, badgeBackgroundLightTheme: null, badgeBackgroundDarkTheme: null, acked: null, ackedBadge: null, icon: null, uppercase: null, text: null, premiumDiscountBadge: null };
let obj3 = { paddingVertical: 4, paddingHorizontal: 8, borderRadius: nativeDefault.radii.round };
obj2.badge = { display: "flex", minWidth: 16, minHeight: 16, paddingHorizontal: 8, justifyContent: "center", alignItems: "center", gap: 4, borderRadius: nativeDefault.radii.round };
let obj4 = { display: "flex", minWidth: 16, minHeight: 16, paddingHorizontal: 8, justifyContent: "center", alignItems: "center", gap: 4, borderRadius: nativeDefault.radii.round };
obj2.badgeBackgroundLightTheme = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.badgeBackgroundDarkTheme = { backgroundColor: nativeDefault.colors.WHITE };
let obj6 = { backgroundColor: nativeDefault.colors.WHITE };
obj2.acked = { paddingVertical: 2, paddingHorizontal: 12, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, display: "flex", flexDirection: "row", alignItems: "center", textAlignVertical: "center" };
let obj7 = { paddingVertical: 2, paddingHorizontal: 12, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, display: "flex", flexDirection: "row", alignItems: "center", textAlignVertical: "center" };
obj2.ackedBadge = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let obj8 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.icon = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginRight: 2 };
obj2.uppercase = { textTransform: "uppercase" };
obj2.text = { paddingBottom: 2 };
let obj9 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginRight: 2 };
obj2.premiumDiscountBadge = { paddingVertical: 2, paddingHorizontal: 12, borderRadius: nativeDefault.radii.round, display: "flex", flexDirection: "row", alignItems: "center", textAlignVertical: "center" };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/PremiumTabBadge.tsx");

export default function PremiumTabBadge() {
  let badgeTextVariant = useBadgeTextVariant.useBadgeTextVariant();
  let intl = closure_10();
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  const premiumDiscountOffer = usePremiumDiscountOffer.usePremiumDiscountOffer();
  const hasTier2Premium = PremiumUtils.useHasTier2Premium();
  const result = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE);
  let tmp7 = !result;
  if (!result) {
    tmp7 = hasTier2Premium;
  }
  const items = [SubscriptionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let trialId;
  if (stateFromStores != null) {
    trialId = stateFromStores.trialId;
  }
  useSelectedDismissibleContent;
  if (trialId === closure_6) {
    if (!tmp7) {
      let items1 = [dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE];
    }
    [tmp14, r10055] = tmp11(items1, undefined, true);
    useSelectedDismissibleContent;
    if (!tmp7) {
      if (hasTier2Premium) {
        let items2 = [dismissible_content.DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD];
      }
      [tmp18, r10067] = tmp16(items2, undefined, true);
      const tmp12Result = _slicedToArray(tmp16(items2, undefined, true), 2);
      const isEligibleSenderForReferralProgram = useIsEligibleSenderForReferralProgram.useIsEligibleSenderForReferralProgram();
      const tmpResult11 = useIsEligibleSenderForReferralProgram;
      const isReferralProgramEntrypointBadgeAcknowledged = ReferralProgramUtils.useIsReferralProgramEntrypointBadgeAcknowledged();
      const tmpResult12 = ReferralProgramUtils;
      const promotionMarketingComponent = usePromotionMarketingComponent.usePromotionMarketingComponent(MarketingComponentType.MarketingComponentType.PREMIUM_TAB);
      const tmpResult14 = useSelectedDismissibleContent;
      let prop = null;
      if (null != promotionMarketingComponent) {
        prop = null;
        if ("premiumTab" === promotionMarketingComponent.properties.properties.oneofKind) {
          prop = dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        }
      }
      let str2;
      if (promotionMarketingComponent != null) {
        str2 = promotionMarketingComponent.promotionId;
      }
      if (str2 == null) {
        str2 = "";
      }
      const tmpResult13 = usePromotionMarketingComponent;
      if (null != promotionMarketingComponent) {
        if ("premiumTab" === promotionMarketingComponent.properties.properties.oneofKind) {
          const obj4 = { acked: tmp27 !== dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, badgeCopy: promotionMarketingComponent.properties.properties.premiumTab.badgeLabel, ackedBadgeCopy: promotionMarketingComponent.properties.properties.premiumTab.acknowledgedBadgeLabel, componentId: null, promotionId: null };
          ({ id: obj25.componentId, promotionId: obj25.promotionId } = promotionMarketingComponent);
          return React6(OfferBadge, obj4);
        }
      }
      if (tmp14 === dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE) {
        const intl3 = util.intl;
        let stringResult = intl3.string(util.t.uO4bXn);
      } else {
        stringResult = null;
        if (tmp18 === dismissible_content.DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD) {
          const intl2 = util.intl;
          stringResult = intl2.string(util.t["jyYgZ+"]);
        }
      }
      if (isEligibleSenderForReferralProgram) {
        if (!isReferralProgramEntrypointBadgeAcknowledged) {
          const obj7 = { label: null };
          const intl4 = util.intl;
          obj7.label = intl4.string(util.t.RDE0Sc);
          return React6(ThemedTabBadge, obj7);
        }
      }
      if (tmp7) {
        const obj8 = { style: intl.tag, colors: Gradients.PREMIUM_TIER_2, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, children: null };
        const obj9 = { variant: badgeTextVariant, color: "text-overlay-light", style: null, children: null };
        const items3 = [intl.uppercase, ];
        const tmp52 = LinearGradientDefault;
        let text;
        if (tmpResult15.isAndroid()) {
          text = intl.text;
        }
        items3[1] = text;
        obj9.style = items3;
        intl = util.intl;
        badgeTextVariant = intl.string(util.t.y2b7CA);
        obj9.children = badgeTextVariant;
        obj8.children = React6(Text_Text.Text, obj9);
        let tmp47Result = React6(tmp52, obj8);
        tmpResult15 = PlatformUtils;
      } else if (null != premiumTrialOffer) {
        let hasAcknowledged;
        if (premiumTrialOffer != null) {
          hasAcknowledged = premiumTrialOffer.hasAcknowledged;
        }
        const obj10 = { acked: true === hasAcknowledged, badgeCopy: null, ackedBadgeCopy: null };
        const intl7 = util.intl;
        obj10.badgeCopy = intl7.string(util.t.OS9KPu);
        const intl8 = util.intl;
        obj10.ackedBadgeCopy = intl8.string(util.t.OS9KPu);
        tmp47Result = React6(OfferBadge, obj10);
      } else if (null != premiumDiscountOffer) {
        if (premiumDiscountOffer.hasAcknowledged()) {
          const obj11 = { style: null, children: null };
          const items4 = [, ];
          ({ premiumDiscountBadge: arr6[0], ackedBadge: arr6[1] } = intl);
          obj11.style = items4;
          const obj12 = { source: _modDef15328, size: native.Icon.Sizes.EXTRA_SMALL, color: intl.icon.color, style: intl.icon };
          const items5 = [React6(native.Icon, obj12), ];
          const obj13 = { variant: badgeTextVariant, color: "interactive-text-default", style: null, children: null };
          const items6 = [, ];
          ({ uppercase: arr8[0], text: arr8[1] } = intl);
          obj13.style = items6;
          const intl6 = util.intl;
          obj13.children = intl6.string(util.t["/DTtr6"]);
          items5[1] = React6(Text_Text.Text, obj13);
          obj11.children = items5;
          let tmp41 = React7(View, obj11);
        } else {
          const obj14 = { style: intl.premiumDiscountBadge, colors: ["#db00a4", "#5968f0"], start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, children: null };
          const obj15 = { variant: badgeTextVariant, color: "text-overlay-light", style: null, children: null };
          const items7 = [, ];
          ({ uppercase: arr5[0], text: arr5[1] } = intl);
          obj15.style = items7;
          const intl5 = util.intl;
          obj15.children = intl5.string(util.t["/DTtr6"]);
          obj14.children = React6(Text_Text.Text, obj15);
          tmp41 = React6(LinearGradientDefault, obj14);
        }
      } else {
        tmp47Result = null;
        if (null != stringResult) {
          const obj16 = { style: intl.tag, colors: Gradients.PREMIUM_TIER_2, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, children: null };
          const obj17 = { variant: badgeTextVariant, color: "text-overlay-light", style: null, children: null };
          const items8 = [intl.uppercase, ];
          const tmp34 = LinearGradientDefault;
          let text1;
          if (tmpResult16.isAndroid()) {
            text1 = intl.text;
          }
          items8[1] = text1;
          obj17.style = items8;
          obj17.children = stringResult;
          obj16.children = React6(Text_Text.Text, obj17);
          tmp47Result = React6(tmp34, obj16);
          tmpResult16 = PlatformUtils;
        }
      }
      const tmp12Result2 = _slicedToArray(tmpResult14.useSelectedSnowflakeBoundDismissibleContent(prop, str2, undefined, true), 2);
    }
    items2 = [];
    const tmp13 = _slicedToArray(tmp11(items1, undefined, true), 2);
  }
  items1 = [];
  const tmpResult = initialize;
};