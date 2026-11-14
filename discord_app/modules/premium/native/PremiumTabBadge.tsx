// === Module 17510: PremiumTabBadge ===

// Module 17510 (PremiumTabBadge)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import util from "util" /* 1113 */;
import native from "native" /* 1187 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1264 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import PremiumUtils from "PremiumUtils" /* 2174 */;
import dismissible_content from "dismissible_content" /* 5139 */;
import shared from "shared" /* 5313 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5348 */;
import useThemeDefault from "useTheme" /* 5547 */;
import LinearGradientDefault from "LinearGradient" /* 5893 */;
import Text_Text from "Text/Text" /* 5929 */;
import useTrackImpressionDefault from "useTrackImpression" /* 6338 */;
import ReferralProgramUtils from "ReferralProgramUtils" /* 9306 */;
import useIsEligibleSenderForReferralProgram from "useIsEligibleSenderForReferralProgram" /* 9307 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 9310 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 9313 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 9560 */;
import MarketingSurfaceType from "MarketingSurfaceType" /* 9627 */;
import usePromotionMarketingSurface from "usePromotionMarketingSurface" /* 10010 */;
import _modDef17511 from "module_17511" /* 17511 */;
import PremiumTabBadgeCopy from "PremiumTabBadgeCopy" /* 17512 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 2179 */;

require = fn;
function ThemedTabBadge(children) {
  const tmp = closure_10();
  const isThemeDarkResult = shared.isThemeDark(useThemeDefault());
  items = [tmp.badge, ];
  const obj2 = { style: items, children: null };
  items[1] = isThemeDarkResult ? tmp.badgeBackgroundDarkTheme : tmp.badgeBackgroundLightTheme;
  let str = "text-overlay-light";
  if (isThemeDarkResult) {
    str = "text-overlay-dark";
  }
  const obj3 = { variant: "body-xs/semibold", color: str, style: null, children: children.label };
  const items1 = [, ];
  ({ uppercase: arr2[0], text: arr2[1] } = tmp);
  obj3.style = items1;
  obj2.children = React5(Text_Text.Text, obj3);
  return React5(View, obj2);
}
function OfferBadge(componentId) {
  componentId = componentId.componentId;
  ({ acked, badgeCopy, ackedBadgeCopy, componentType, promotionId } = componentId);
  const tmp = closure_10();
  const obj = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.PREMIUM_MARKETING_COMPONENT, properties: { component_type: componentType, component_id: componentId, promotion_id: promotionId } };
  useTrackImpressionDefault(obj, { disableTrack: null == componentId });
  if (acked) {
    const obj3 = { style: tmp.acked, children: null };
    const obj4 = { source: _modDef17511, size: native.Icon.Sizes.EXTRA_SMALL, color: tmp.icon.color, style: tmp.icon };
    items = [React5(native.Icon, obj4), ];
    const obj5 = { variant: "body-xs/semibold", color: "interactive-text-default", style: null, children: null };
    const items1 = [, ];
    ({ uppercase: arr2[0], text: arr2[1] } = tmp);
    obj5.style = items1;
    obj5.children = ackedBadgeCopy;
    items[1] = React5(Text_Text.Text, obj5);
    obj3.children = items;
    let tmp9 = React6(View, obj3);
  } else {
    const obj6 = { label: badgeCopy };
    tmp9 = React5(ThemedTabBadge, obj6);
  }
  return tmp9;
}
const View = fn(17).View;
let closure_6 = fn(1390).PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
const Gradients = fn(9435).Gradients;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5306);
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
  let tmp = closure_10();
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  const premiumDiscountOffer = usePremiumDiscountOffer.usePremiumDiscountOffer();
  const hasTier2Premium = PremiumUtils.useHasTier2Premium();
  const result = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE);
  let tmp7 = !result;
  if (!result) {
    tmp7 = hasTier2Premium;
  }
  items = [SubscriptionStore];
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
    [tmp14, r10051] = tmp11(items1, { bypassAutoDismiss: true });
    useSelectedDismissibleContent;
    if (!tmp7) {
      if (hasTier2Premium) {
        let items2 = [dismissible_content.DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD];
      }
      [tmp18, r10064] = tmp16(items2, { bypassAutoDismiss: true });
      const tmp12Result = _slicedToArray(tmp16(items2, { bypassAutoDismiss: true }), 2);
      const isEligibleSenderForReferralProgram = useIsEligibleSenderForReferralProgram.useIsEligibleSenderForReferralProgram();
      const tmp2Result13 = useIsEligibleSenderForReferralProgram;
      const isReferralProgramEntrypointBadgeAcknowledged = ReferralProgramUtils.useIsReferralProgramEntrypointBadgeAcknowledged();
      const tmp2Result14 = ReferralProgramUtils;
      const promotionMarketingSurface = usePromotionMarketingSurface.usePromotionMarketingSurface(MarketingSurfaceType.MarketingSurfaceType.PREMIUM_TAB);
      const tmp2Result16 = useSelectedDismissibleContent;
      let prop = null;
      if (null != promotionMarketingSurface) {
        prop = dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
      }
      let str;
      if (promotionMarketingSurface != null) {
        str = promotionMarketingSurface.promotionId;
      }
      if (str == null) {
        str = "";
      }
      const tmp12Result2 = _slicedToArray(tmp2Result16.useSelectedSnowflakeBoundDismissibleContent(prop, str, undefined, true), 2);
      let premiumTabBadgeCopy = null;
      if (null != promotionMarketingSurface) {
        premiumTabBadgeCopy = PremiumTabBadgeCopy.getPremiumTabBadgeCopy(promotionMarketingSurface);
        const tmp2Result17 = PremiumTabBadgeCopy;
      }
      if (null != promotionMarketingSurface) {
        if (null != premiumTabBadgeCopy) {
          ({ id, promotionId, componentType } = promotionMarketingSurface);
          const tmp56 = tmp12Result2[0] !== dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
          let tmp57 = null;
          if (tmp2Result18.hasVisiblePremiumTabBadgeCopy(premiumTabBadgeCopy, tmp56)) {
            const obj3 = { acked: tmp56, badgeCopy: null, ackedBadgeCopy: null, componentId: null, componentType: null, promotionId: null };
            ({ badgeCopy: obj26.badgeCopy, acknowledgedBadgeCopy: obj26.ackedBadgeCopy } = premiumTabBadgeCopy);
            obj3.componentId = id;
            obj3.componentType = componentType;
            obj3.promotionId = promotionId;
            tmp57 = React5(OfferBadge, obj3);
          }
          return tmp57;
        }
      }
      if (tmp14 === dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE) {
        const intl2 = util.intl;
        let stringResult = intl2.string(util.t.uO4bXn);
      } else {
        stringResult = null;
        if (tmp18 === dismissible_content.DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD) {
          const intl = util.intl;
          stringResult = intl.string(util.t["jyYgZ+"]);
        }
      }
      if (isEligibleSenderForReferralProgram) {
        if (!isReferralProgramEntrypointBadgeAcknowledged) {
          const obj6 = { label: null };
          const intl3 = util.intl;
          obj6.label = intl3.string(util.t.RDE0Sc);
          return React5(ThemedTabBadge, obj6);
        }
      }
      if (tmp7) {
        const obj7 = { style: tmp.tag, colors: Gradients.PREMIUM_TIER_2, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, children: null };
        const items3 = [tmp.uppercase, ];
        const tmp52 = LinearGradientDefault;
        let text;
        if (tmp2Result19.isAndroid()) {
          text = tmp.text;
        }
        const obj8 = { variant: "body-xs/semibold", color: "text-overlay-light", style: null, children: null };
        items3[1] = text;
        obj8.style = items3;
        const intl8 = util.intl;
        obj8.children = intl8.string(util.t.y2b7CA);
        tmp = React5(Text_Text.Text, obj8);
        obj7.children = tmp;
        let tmp47Result = React5(tmp52, obj7);
        tmp2Result19 = PlatformUtils;
      } else if (null != premiumTrialOffer) {
        let hasAcknowledged;
        if (premiumTrialOffer != null) {
          hasAcknowledged = premiumTrialOffer.hasAcknowledged;
        }
        const obj9 = { acked: true === hasAcknowledged, badgeCopy: null, ackedBadgeCopy: null };
        const intl6 = util.intl;
        obj9.badgeCopy = intl6.string(util.t.OS9KPu);
        const intl7 = util.intl;
        obj9.ackedBadgeCopy = intl7.string(util.t.OS9KPu);
        tmp47Result = React5(OfferBadge, obj9);
      } else if (null != premiumDiscountOffer) {
        if (premiumDiscountOffer.hasAcknowledged()) {
          const obj10 = { style: null, children: null };
          const items4 = [, ];
          ({ premiumDiscountBadge: arr6[0], ackedBadge: arr6[1] } = tmp);
          obj10.style = items4;
          const obj11 = { source: _modDef17511, size: native.Icon.Sizes.EXTRA_SMALL, color: tmp.icon.color, style: tmp.icon };
          const items5 = [React5(native.Icon, obj11), ];
          const obj12 = { variant: "body-xs/semibold", color: "interactive-text-default", style: null, children: null };
          const items6 = [, ];
          ({ uppercase: arr8[0], text: arr8[1] } = tmp);
          obj12.style = items6;
          const intl5 = util.intl;
          obj12.children = intl5.string(util.t["/DTtr6"]);
          items5[1] = React5(Text_Text.Text, obj12);
          obj10.children = items5;
          let tmp41 = React6(View, obj10);
        } else {
          const obj13 = { style: tmp.premiumDiscountBadge, colors: ["#db00a4", "#5968f0"], start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, children: null };
          const obj14 = { variant: "body-xs/semibold", color: "text-overlay-light", style: null, children: null };
          const items7 = [, ];
          ({ uppercase: arr5[0], text: arr5[1] } = tmp);
          obj14.style = items7;
          const intl4 = util.intl;
          obj14.children = intl4.string(util.t["/DTtr6"]);
          obj13.children = React5(Text_Text.Text, obj14);
          tmp41 = React5(LinearGradientDefault, obj13);
        }
      } else {
        tmp47Result = null;
        if (null != stringResult) {
          const obj15 = { style: tmp.tag, colors: Gradients.PREMIUM_TIER_2, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, children: null };
          const items8 = [tmp.uppercase, ];
          const tmp34 = LinearGradientDefault;
          let text1;
          if (tmp2Result20.isAndroid()) {
            text1 = tmp.text;
          }
          const obj16 = { variant: "body-xs/semibold", color: "text-overlay-light", style: null, children: null };
          items8[1] = text1;
          obj16.style = items8;
          obj16.children = stringResult;
          obj15.children = React5(Text_Text.Text, obj16);
          tmp47Result = React5(tmp34, obj15);
          tmp2Result20 = PlatformUtils;
        }
      }
      const tmp2Result15 = usePromotionMarketingSurface;
    }
    items2 = [];
    const tmp13 = _slicedToArray(tmp11(items1, { bypassAutoDismiss: true }), 2);
  }
  items1 = [];
  const tmp2Result = initialize;
};