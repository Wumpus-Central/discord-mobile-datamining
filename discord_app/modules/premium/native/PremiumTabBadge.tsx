// === Module 15036: PremiumTabBadge ===

// Module 15036 (PremiumTabBadge)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import native from "native" /* 1178 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import PremiumUtils from "PremiumUtils" /* 4264 */;
import useBadgeTextVariant from "useBadgeTextVariant" /* 4323 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4427 */;
import shared from "shared" /* 4458 */;
import useThemeDefault from "useTheme" /* 4541 */;
import Text_Text from "Text/Text" /* 4602 */;
import LinearGradientDefault from "LinearGradient" /* 5038 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7461 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7520 */;
import ReferralProgramUtils from "ReferralProgramUtils" /* 8130 */;
import useIsEligibleSenderForReferralProgram from "useIsEligibleSenderForReferralProgram" /* 8131 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 8135 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8859 */;
import MarketingComponentType from "MarketingComponentType" /* 10831 */;
import usePromotionMarketingComponent from "usePromotionMarketingComponent" /* 13471 */;
import _modDef15037 from "module_15037" /* 15037 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 4270 */;

require = fn;
function ThemedTabBadge(label) {
  let obj = useBadgeTextVariant;
  const badgeTextVariant = obj.useBadgeTextVariant();
  const tmp4 = closure_10();
  const isThemeDarkResult = shared.isThemeDark(useThemeDefault());
  const items = [tmp4.badge, ];
  obj = { style: items, children: null };
  items[1] = isThemeDarkResult ? tmp4.badgeBackgroundDarkTheme : tmp4.badgeBackgroundLightTheme;
  obj = { variant: badgeTextVariant, color: null, style: null, children: null };
  let str = "text-overlay-light";
  if (isThemeDarkResult) {
    str = "text-overlay-dark";
  }
  obj.color = str;
  const items1 = [, ];
  ({ uppercase: arr2[0], text: arr2[1] } = tmp4);
  obj.style = items1;
  obj.children = label.label;
  obj.children = React6(Text_Text.Text, obj);
  return React6(View, obj);
}
function OfferBadge(componentId) {
  componentId = componentId.componentId;
  ({ acked, badgeCopy, ackedBadgeCopy, promotionId } = componentId);
  let obj = useBadgeTextVariant;
  const badgeTextVariant = obj.useBadgeTextVariant();
  const tmp4 = closure_10();
  obj = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.PREMIUM_MARKETING_COMPONENT, properties: null };
  obj = { component_type: MarketingComponentType.MarketingComponentType.PREMIUM_TAB, component_id: componentId, promotion_id: promotionId };
  obj.properties = obj;
  useTrackImpressionDefault(obj, { disableTrack: null == componentId });
  if (acked) {
    const obj2 = { style: tmp4.acked, children: null };
    const obj3 = { source: _modDef15037, size: native.Icon.Sizes.EXTRA_SMALL, color: tmp4.icon.color, style: tmp4.icon };
    const items = [React6(native.Icon, obj3), ];
    const obj4 = { variant: badgeTextVariant, color: "interactive-text-default", style: null, children: null };
    const items1 = [, ];
    ({ uppercase: arr2[0], text: arr2[1] } = tmp4);
    obj4.style = items1;
    obj4.children = ackedBadgeCopy;
    items[1] = React6(Text_Text.Text, obj4);
    obj2.children = items;
    let tmp10 = React7(View, obj2);
  } else {
    const obj5 = { label: badgeCopy };
    tmp10 = React6(ThemedTabBadge, obj5);
  }
  return tmp10;
}
const View = fn(17).View;
let closure_6 = fn(1373).PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
const Gradients = fn(7505).Gradients;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4606);
let createStyles = { tag: null, badge: null, badgeBackgroundLightTheme: null, badgeBackgroundDarkTheme: null, acked: null, ackedBadge: null, icon: null, uppercase: null, text: null, premiumDiscountBadge: null };
createStyles = { paddingVertical: 4, paddingHorizontal: 8, borderRadius: nativeDefault.radii.round };
createStyles.tag = createStyles;
createStyles.badge = { display: "flex", minWidth: 16, minHeight: 16, paddingHorizontal: 8, justifyContent: "center", alignItems: "center", gap: 4, borderRadius: nativeDefault.radii.round };
let obj1 = { display: "flex", minWidth: 16, minHeight: 16, paddingHorizontal: 8, justifyContent: "center", alignItems: "center", gap: 4, borderRadius: nativeDefault.radii.round };
createStyles.badgeBackgroundLightTheme = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles.badgeBackgroundDarkTheme = { backgroundColor: nativeDefault.colors.WHITE };
let obj3 = { backgroundColor: nativeDefault.colors.WHITE };
createStyles.acked = { paddingVertical: 2, paddingHorizontal: 12, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, display: "flex", flexDirection: "row", alignItems: "center", textAlignVertical: "center" };
let obj4 = { paddingVertical: 2, paddingHorizontal: 12, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, display: "flex", flexDirection: "row", alignItems: "center", textAlignVertical: "center" };
createStyles.ackedBadge = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let obj5 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.icon = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginRight: 2 };
createStyles.uppercase = { textTransform: "uppercase" };
createStyles.text = { paddingBottom: 2 };
let obj6 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginRight: 2 };
createStyles.premiumDiscountBadge = { paddingVertical: 2, paddingHorizontal: 12, borderRadius: nativeDefault.radii.round, display: "flex", flexDirection: "row", alignItems: "center", textAlignVertical: "center" };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/PremiumTabBadge.tsx");

export default function PremiumTabBadge() {
  let obj = useBadgeTextVariant;
  let badgeTextVariant = obj.useBadgeTextVariant();
  let intl = closure_10();
  let obj1 = usePremiumTrialOffer;
  const premiumTrialOffer = obj1.usePremiumTrialOffer();
  let obj2 = usePremiumDiscountOffer;
  const premiumDiscountOffer = obj2.usePremiumDiscountOffer();
  let obj4 = PremiumUtils;
  const hasTier2Premium = obj4.useHasTier2Premium();
  let obj5 = DismissibleContentUnsafeUtils;
  const result = obj5.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE);
  let tmp7 = !result;
  if (!result) {
    tmp7 = hasTier2Premium;
  }
  let tmpResult = initialize;
  const items = [SubscriptionStore];
  const stateFromStores = tmpResult.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let trialId;
  if (stateFromStores != null) {
    trialId = stateFromStores.trialId;
  }
  tmpResult = useSelectedDismissibleContent;
  if (trialId === closure_6) {
    if (!tmp7) {
      let items1 = [dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE];
    }
    [tmp14, r10055] = _slicedToArray(tmp11(items1, undefined, true), 2);
    useSelectedDismissibleContent;
    if (!tmp7) {
      if (hasTier2Premium) {
        let items2 = [dismissible_content.DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD];
      }
      let tmp12Result = _slicedToArray(tmp16(items2, undefined, true), 2);
      [tmp18, r10067] = tmp12Result;
      const isEligibleSenderForReferralProgram = useIsEligibleSenderForReferralProgram.useIsEligibleSenderForReferralProgram();
      const tmpResult2 = useIsEligibleSenderForReferralProgram;
      const isReferralProgramEntrypointBadgeAcknowledged = ReferralProgramUtils.useIsReferralProgramEntrypointBadgeAcknowledged();
      const tmpResult3 = ReferralProgramUtils;
      const promotionMarketingComponent = usePromotionMarketingComponent.usePromotionMarketingComponent(MarketingComponentType.MarketingComponentType.PREMIUM_TAB);
      const tmpResult5 = useSelectedDismissibleContent;
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
      tmp12Result = _slicedToArray(tmpResult5.useSelectedSnowflakeBoundDismissibleContent(prop, str2, undefined, true), 2);
      if (null != promotionMarketingComponent) {
        if ("premiumTab" === promotionMarketingComponent.properties.properties.oneofKind) {
          obj = { acked: tmp27 !== dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, badgeCopy: promotionMarketingComponent.properties.properties.premiumTab.badgeLabel, ackedBadgeCopy: promotionMarketingComponent.properties.properties.premiumTab.acknowledgedBadgeLabel, componentId: null, promotionId: null };
          ({ id: obj25.componentId, promotionId: obj25.promotionId } = promotionMarketingComponent);
          return React6(OfferBadge, obj);
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
          obj = { label: null };
          const intl4 = util.intl;
          obj.label = intl4.string(util.t.RDE0Sc);
          return React6(ThemedTabBadge, obj);
        }
      }
      if (tmp7) {
        obj1 = { style: intl.tag, colors: Gradients.PREMIUM_TIER_2, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, children: null };
        obj2 = { variant: badgeTextVariant, color: "text-overlay-light", style: null, children: null };
        const items3 = [intl.uppercase, ];
        const tmp52 = LinearGradientDefault;
        let text;
        if (tmpResult6.isAndroid()) {
          text = intl.text;
        }
        items3[1] = text;
        obj2.style = items3;
        intl = util.intl;
        badgeTextVariant = intl.string(util.t.y2b7CA);
        obj2.children = badgeTextVariant;
        obj1.children = React6(Text_Text.Text, obj2);
        let tmp47Result = React6(tmp52, obj1);
        tmpResult6 = PlatformUtils;
      } else if (null != premiumTrialOffer) {
        let hasAcknowledged;
        if (premiumTrialOffer != null) {
          hasAcknowledged = premiumTrialOffer.hasAcknowledged;
        }
        const obj3 = { acked: true === hasAcknowledged, badgeCopy: null, ackedBadgeCopy: null };
        const intl7 = util.intl;
        obj3.badgeCopy = intl7.string(util.t.OS9KPu);
        const intl8 = util.intl;
        obj3.ackedBadgeCopy = intl8.string(util.t.OS9KPu);
        tmp47Result = React6(OfferBadge, obj3);
      } else if (null != premiumDiscountOffer) {
        if (premiumDiscountOffer.hasAcknowledged()) {
          obj4 = { style: null, children: null };
          const items4 = [, ];
          ({ premiumDiscountBadge: arr6[0], ackedBadge: arr6[1] } = intl);
          obj4.style = items4;
          obj5 = { source: _modDef15037, size: native.Icon.Sizes.EXTRA_SMALL, color: intl.icon.color, style: intl.icon };
          const items5 = [React6(native.Icon, obj5), ];
          const obj6 = { variant: badgeTextVariant, color: "interactive-text-default", style: null, children: null };
          const items6 = [, ];
          ({ uppercase: arr8[0], text: arr8[1] } = intl);
          obj6.style = items6;
          const intl6 = util.intl;
          obj6.children = intl6.string(util.t["/DTtr6"]);
          items5[1] = React6(Text_Text.Text, obj6);
          obj4.children = items5;
          let tmp41 = React7(View, obj4);
        } else {
          const obj7 = { style: intl.premiumDiscountBadge, colors: ["#db00a4", "#5968f0"], start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, children: null };
          const obj8 = { variant: badgeTextVariant, color: "text-overlay-light", style: null, children: null };
          const items7 = [, ];
          ({ uppercase: arr5[0], text: arr5[1] } = intl);
          obj8.style = items7;
          const intl5 = util.intl;
          obj8.children = intl5.string(util.t["/DTtr6"]);
          obj7.children = React6(Text_Text.Text, obj8);
          tmp41 = React6(LinearGradientDefault, obj7);
        }
      } else {
        tmp47Result = null;
        if (null != stringResult) {
          const obj9 = { style: intl.tag, colors: Gradients.PREMIUM_TIER_2, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, children: null };
          const obj10 = { variant: badgeTextVariant, color: "text-overlay-light", style: null, children: null };
          const items8 = [intl.uppercase, ];
          const tmp34 = LinearGradientDefault;
          let text1;
          if (tmpResult7.isAndroid()) {
            text1 = intl.text;
          }
          items8[1] = text1;
          obj10.style = items8;
          obj10.children = stringResult;
          obj9.children = React6(Text_Text.Text, obj10);
          tmp47Result = React6(tmp34, obj9);
          tmpResult7 = PlatformUtils;
        }
      }
      const tmpResult4 = usePromotionMarketingComponent;
    }
    items2 = [];
    const tmp13 = _slicedToArray(tmp11(items1, undefined, true), 2);
  }
  items1 = [];
};