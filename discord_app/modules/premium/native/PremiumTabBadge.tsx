// discord_app/modules/premium/native/PremiumTabBadge.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import discord_common_AnalyticsUtils from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import shared from "../../../design/shared.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import LinearGradientDefault from "../../../../_runtime/05745_LinearGradient.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useTrackImpressionDefault from "../../app_analytics/useTrackImpression.tsx";
import useSelectedDismissibleContent from "../../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import usePremiumTrialOffer from "../hooks/usePremiumTrialOffer.android.tsx";
import ReferralProgramUtils from "../referral_program/ReferralProgramUtils.tsx";
import useIsEligibleSenderForReferralProgram from "../referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx";
import usePremiumDiscountOffer from "../hooks/usePremiumDiscountOffer.android.tsx";
import MarketingComponentType from "../../../../discord_common/js/shared/shared-constants/MarketingComponentType.tsx";
import usePromotionMarketingComponent from "../hooks/usePromotionMarketingComponent.tsx";
import _modDef17143 from "../../../../_runtime/metro/17143__.js";
import PremiumTabBadgeCopy from "../promotions/PremiumTabBadgeCopy.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import SubscriptionStore from "../../../stores/billing/SubscriptionStore.tsx";

require = fn;
function ThemedTabBadge(children) {
  const tmp = closure_10();
  const isThemeDarkResult = shared.isThemeDark(useThemeDefault());
  items = [tmp.badge];
  const obj2 = { style: items, children: null };
  items[1] = isThemeDarkResult ? tmp.badgeBackgroundDarkTheme : tmp.badgeBackgroundLightTheme;
  let str = "text-overlay-light";
  if (isThemeDarkResult) {
    str = "text-overlay-dark";
  }
  const obj3 = { variant: "body-xs/semibold", color: str, style: null, children: children.label };
  const items1 = [,];
  ({ uppercase: arr2[0], text: arr2[1] } = tmp);
  obj3.style = items1;
  obj2.children = React5(Text_Text.Text, obj3);
  return React5(View, obj2);
}
function OfferBadge(componentId) {
  componentId = componentId.componentId;
  ({ acked, badgeCopy, ackedBadgeCopy, promotionId } = componentId);
  const tmp = closure_10();
  const obj = {
    type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW,
    name: discord_common_AnalyticsUtils.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
    properties: null,
  };
  const tmp4 = useTrackImpressionDefault;
  obj.properties = {
    component_type: MarketingComponentType.MarketingComponentType.PREMIUM_TAB,
    component_id: componentId,
    promotion_id: promotionId,
  };
  tmp4(obj, { disableTrack: null == componentId });
  if (acked) {
    const obj4 = { style: tmp.acked, children: null };
    const obj5 = { source: _modDef17143, size: native.Icon.Sizes.EXTRA_SMALL, color: tmp.icon.color, style: tmp.icon };
    items = [React5(native.Icon, obj5)];
    const obj6 = { variant: "body-xs/semibold", color: "interactive-text-default", style: null, children: null };
    const items1 = [,];
    ({ uppercase: arr2[0], text: arr2[1] } = tmp);
    obj6.style = items1;
    obj6.children = ackedBadgeCopy;
    items[1] = React5(Text_Text.Text, obj6);
    obj4.children = items;
    let tmp9 = React6(View, obj4);
  } else {
    const obj7 = { label: badgeCopy };
    tmp9 = React5(ThemedTabBadge, obj7);
  }
  return tmp9;
}
const View = fn(17).View;
let closure_6 = fn(1387).PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
const Gradients = fn(7716).Gradients;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5170);
let obj2 = {
  tag: { paddingVertical: 4, paddingHorizontal: 8, borderRadius: nativeDefault.radii.round },
  badge: null,
  badgeBackgroundLightTheme: null,
  badgeBackgroundDarkTheme: null,
  acked: null,
  ackedBadge: null,
  icon: null,
  uppercase: null,
  text: null,
  premiumDiscountBadge: null,
};
let obj3 = { paddingVertical: 4, paddingHorizontal: 8, borderRadius: nativeDefault.radii.round };
obj2.badge = {
  display: "flex",
  minWidth: 16,
  minHeight: 16,
  paddingHorizontal: 8,
  justifyContent: "center",
  alignItems: "center",
  gap: 4,
  borderRadius: nativeDefault.radii.round,
};
let obj4 = {
  display: "flex",
  minWidth: 16,
  minHeight: 16,
  paddingHorizontal: 8,
  justifyContent: "center",
  alignItems: "center",
  gap: 4,
  borderRadius: nativeDefault.radii.round,
};
obj2.badgeBackgroundLightTheme = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.badgeBackgroundDarkTheme = { backgroundColor: nativeDefault.colors.WHITE };
let obj6 = { backgroundColor: nativeDefault.colors.WHITE };
obj2.acked = {
  paddingVertical: 2,
  paddingHorizontal: 12,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  textAlignVertical: "center",
};
let obj7 = {
  paddingVertical: 2,
  paddingHorizontal: 12,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  textAlignVertical: "center",
};
obj2.ackedBadge = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let obj8 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.icon = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginRight: 2 };
obj2.uppercase = { textTransform: "uppercase" };
obj2.text = { paddingBottom: 2 };
let obj9 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginRight: 2 };
obj2.premiumDiscountBadge = {
  paddingVertical: 2,
  paddingHorizontal: 12,
  borderRadius: nativeDefault.radii.round,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  textAlignVertical: "center",
};
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/PremiumTabBadge.tsx");

export default function PremiumTabBadge() {
  let tmp = closure_10();
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  const premiumDiscountOffer = usePremiumDiscountOffer.usePremiumDiscountOffer();
  const hasTier2Premium = PremiumUtils.useHasTier2Premium();
  const result = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(
    dismissible_content.DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE,
  );
  let tmp7 = !result;
  if (!result) {
    tmp7 = hasTier2Premium;
  }
  items = [SubscriptionStore];
  const stateFromStores = initialize.useStateFromStores(items, () =>
    premiumTypeSubscription.getPremiumTypeSubscription(),
  );
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
      const isEligibleSenderForReferralProgram =
        useIsEligibleSenderForReferralProgram.useIsEligibleSenderForReferralProgram();
      const tmp2Result12 = useIsEligibleSenderForReferralProgram;
      const isReferralProgramEntrypointBadgeAcknowledged =
        ReferralProgramUtils.useIsReferralProgramEntrypointBadgeAcknowledged();
      const tmp2Result13 = ReferralProgramUtils;
      const promotionMarketingComponent = usePromotionMarketingComponent.usePromotionMarketingComponent(
        MarketingComponentType.MarketingComponentType.PREMIUM_TAB,
      );
      const tmp2Result15 = useSelectedDismissibleContent;
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
      const tmp12Result2 = _slicedToArray(
        tmp2Result15.useSelectedSnowflakeBoundDismissibleContent(prop, str2, undefined, true),
        2,
      );
      let premiumTabBadgeCopy = null;
      if (null != promotionMarketingComponent) {
        premiumTabBadgeCopy = PremiumTabBadgeCopy.getPremiumTabBadgeCopy(promotionMarketingComponent);
        const tmp2Result16 = PremiumTabBadgeCopy;
      }
      if (null != promotionMarketingComponent) {
        if (null != premiumTabBadgeCopy) {
          const obj3 = {
            acked: tmp12Result2[0] !== dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            badgeCopy: null,
            ackedBadgeCopy: null,
            componentId: null,
            promotionId: null,
          };
          ({ badgeCopy: obj25.badgeCopy, acknowledgedBadgeCopy: obj25.ackedBadgeCopy } = premiumTabBadgeCopy);
          ({ id: obj25.componentId, promotionId: obj25.promotionId } = promotionMarketingComponent);
          return React5(OfferBadge, obj3);
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
        const obj7 = {
          style: tmp.tag,
          colors: Gradients.PREMIUM_TIER_2,
          start: ConstantsIOS.HorizontalGradient.START,
          end: ConstantsIOS.HorizontalGradient.END,
          children: null,
        };
        const items3 = [tmp.uppercase];
        const tmp52 = LinearGradientDefault;
        let text;
        if (tmp2Result17.isAndroid()) {
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
        tmp2Result17 = PlatformUtils;
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
          const items4 = [,];
          ({ premiumDiscountBadge: arr6[0], ackedBadge: arr6[1] } = tmp);
          obj10.style = items4;
          const obj11 = {
            source: _modDef17143,
            size: native.Icon.Sizes.EXTRA_SMALL,
            color: tmp.icon.color,
            style: tmp.icon,
          };
          const items5 = [React5(native.Icon, obj11)];
          const obj12 = { variant: "body-xs/semibold", color: "interactive-text-default", style: null, children: null };
          const items6 = [,];
          ({ uppercase: arr8[0], text: arr8[1] } = tmp);
          obj12.style = items6;
          const intl5 = util.intl;
          obj12.children = intl5.string(util.t["/DTtr6"]);
          items5[1] = React5(Text_Text.Text, obj12);
          obj10.children = items5;
          let tmp41 = React6(View, obj10);
        } else {
          const obj13 = {
            style: tmp.premiumDiscountBadge,
            colors: ["#db00a4", "#5968f0"],
            start: ConstantsIOS.HorizontalGradient.START,
            end: ConstantsIOS.HorizontalGradient.END,
            children: null,
          };
          const obj14 = { variant: "body-xs/semibold", color: "text-overlay-light", style: null, children: null };
          const items7 = [,];
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
          const obj15 = {
            style: tmp.tag,
            colors: Gradients.PREMIUM_TIER_2,
            start: ConstantsIOS.HorizontalGradient.START,
            end: ConstantsIOS.HorizontalGradient.END,
            children: null,
          };
          const items8 = [tmp.uppercase];
          const tmp34 = LinearGradientDefault;
          let text1;
          if (tmp2Result18.isAndroid()) {
            text1 = tmp.text;
          }
          const obj16 = { variant: "body-xs/semibold", color: "text-overlay-light", style: null, children: null };
          items8[1] = text1;
          obj16.style = items8;
          obj16.children = stringResult;
          obj15.children = React5(Text_Text.Text, obj16);
          tmp47Result = React5(tmp34, obj15);
          tmp2Result18 = PlatformUtils;
        }
      }
      const tmp2Result14 = usePromotionMarketingComponent;
    }
    items2 = [];
    const tmp13 = _slicedToArray(tmp11(items1, { bypassAutoDismiss: true }), 2);
  }
  items1 = [];
  const tmp2Result = initialize;
}
