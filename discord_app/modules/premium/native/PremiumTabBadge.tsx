// discord_app/modules/premium/native/PremiumTabBadge.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import discord_common_AnalyticsUtils from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import useBadgeTextVariant from "../../../../discord_common/js/packages/design/hooks/useBadgeTextVariant.native.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import shared from "../../../design/shared.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../_runtime/05388_LinearGradient.js";
import useSelectedDismissibleContent from "../../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import usePremiumTrialOffer from "../hooks/usePremiumTrialOffer.android.tsx";
import ReferralProgramUtils from "../referral_program/ReferralProgramUtils.tsx";
import useIsEligibleSenderForReferralProgram from "../referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx";
import usePremiumDiscountOffer from "../hooks/usePremiumDiscountOffer.android.tsx";
import useTrackImpressionDefault from "../../app_analytics/useTrackImpression.tsx";
import MarketingComponentType from "../../../../discord_common/js/shared/shared-constants/MarketingComponentType.tsx";
import usePromotionMarketingComponent from "../hooks/usePromotionMarketingComponent.tsx";
import _modDef15180 from "../../../../_runtime/metro/15180__.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import SubscriptionStore from "../../../stores/billing/SubscriptionStore.tsx";

require = fn;
const View = fn(17).View;
let closure_6 = fn(1392).PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
const Gradients = fn(7145).Gradients;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5091);
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
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ThemedTabBadge(label) {
      const cResult = c.c(14);
      label = label.label;
      const badgeTextVariant = useBadgeTextVariant.useBadgeTextVariant();
      const tmp5 = closure_10();
      const isThemeDarkResult = shared.isThemeDark(useThemeDefault());
      const tmp7 = isThemeDarkResult ? tmp5.badgeBackgroundDarkTheme : tmp5.badgeBackgroundLightTheme;
      if (cResult[0] === tmp5.badge) {
        if (cResult[1] === tmp7) {
          let tmp8 = cResult[2];
        }
        let str = "text-overlay-light";
        if (isThemeDarkResult) {
          str = "text-overlay-dark";
        }
        if (cResult[3] === tmp5.text) {
          if (cResult[4] === tmp5.uppercase) {
            let tmp9 = cResult[5];
          }
          if (cResult[6] === badgeTextVariant) {
            if (cResult[7] === label) {
              if (cResult[8] === str) {
                if (cResult[9] === tmp9) {
                  let tmp10 = cResult[10];
                }
                if (cResult[11] === tmp8) {
                  if (cResult[12] === tmp10) {
                    let tmp13 = cResult[13];
                  }
                  return tmp13;
                }
                const obj4 = { style: tmp8, children: tmp10 };
                const tmp16 = closure_1_8(View, obj4);
                cResult[11] = tmp8;
                cResult[12] = tmp10;
                cResult[13] = tmp16;
                tmp13 = tmp16;
              }
            }
          }
          const obj5 = { variant: badgeTextVariant, color: str, style: tmp9, children: label };
          const tmp12 = closure_1_8(Text_Text.Text, obj5);
          cResult[6] = badgeTextVariant;
          cResult[7] = label;
          cResult[8] = str;
          cResult[9] = tmp9;
          cResult[10] = tmp12;
          tmp10 = tmp12;
        }
        const items = [,];
        ({ uppercase: arr2[0], text: arr2[1] } = tmp5);
        cResult[3] = tmp5.text;
        cResult[4] = tmp5.uppercase;
        cResult[5] = items;
        tmp9 = items;
      }
      const items1 = [tmp5.badge, tmp7];
      cResult[0] = tmp5.badge;
      cResult[1] = tmp7;
      cResult[2] = items1;
      tmp8 = items1;
    }
  : function ThemedTabBadge(label) {
      const badgeTextVariant = useBadgeTextVariant.useBadgeTextVariant();
      const tmp4 = closure_10();
      const isThemeDarkResult = shared.isThemeDark(useThemeDefault());
      const items = [tmp4.badge];
      const obj3 = { style: items, children: null };
      items[1] = isThemeDarkResult ? tmp4.badgeBackgroundDarkTheme : tmp4.badgeBackgroundLightTheme;
      const obj4 = { variant: badgeTextVariant, color: null, style: null, children: null };
      let str = "text-overlay-light";
      if (isThemeDarkResult) {
        str = "text-overlay-dark";
      }
      obj4.color = str;
      const items1 = [,];
      ({ uppercase: arr2[0], text: arr2[1] } = tmp4);
      obj4.style = items1;
      obj4.children = label.label;
      obj3.children = closure_1_8(Text_Text.Text, obj4);
      return closure_1_8(View, obj3);
    };
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function OfferBadge(arg0) {
      const cResult = c.c(20);
      ({ badgeCopy, ackedBadgeCopy, componentId, promotionId, acked } = arg0);
      const badgeTextVariant = useBadgeTextVariant.useBadgeTextVariant();
      let acked2 = closure_10();
      if (cResult[0] === componentId) {
        if (cResult[1] === promotionId) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] !== (null == componentId)) {
          const obj3 = { disableTrack: tmp7 };
          cResult[3] = tmp7;
          cResult[4] = obj3;
          let tmp8 = obj3;
        } else {
          tmp8 = cResult[4];
        }
        useTrackImpressionDefault(tmp5, tmp8);
        if (acked) {
          if (cResult[5] !== acked2.icon) {
            const obj4 = {
              source: _modDef15180,
              size: native.Icon.Sizes.EXTRA_SMALL,
              color: acked2.icon.color,
              style: acked2.icon,
            };
            const tmp17 = closure_1_8(native.Icon, obj4);
            cResult[5] = acked2.icon;
            cResult[6] = tmp17;
            let tmp15 = tmp17;
          } else {
            tmp15 = cResult[6];
          }
          if (cResult[7] === acked2.text) {
            if (cResult[8] === acked2.uppercase) {
              let tmp18 = cResult[9];
            }
            if (cResult[10] === ackedBadgeCopy) {
              if (cResult[11] === badgeTextVariant) {
                if (cResult[12] === tmp18) {
                  let tmp19 = cResult[13];
                }
                if (cResult[14] === acked2.acked) {
                  if (cResult[15] === tmp15) {
                  }
                }
                const obj5 = { style: acked2.acked, children: null };
                const items = [tmp15, tmp19];
                obj5.children = items;
                const tmp25 = options(View, obj5);
                acked2 = acked2.acked;
                cResult[14] = acked2;
                cResult[15] = tmp15;
                cResult[16] = tmp19;
                cResult[17] = tmp25;
              }
            }
            const obj6 = {
              variant: badgeTextVariant,
              color: "interactive-text-default",
              style: tmp18,
              children: ackedBadgeCopy,
            };
            const tmp21 = closure_1_8(Text_Text.Text, obj6);
            cResult[10] = ackedBadgeCopy;
            cResult[11] = badgeTextVariant;
            cResult[12] = tmp18;
            cResult[13] = tmp21;
            tmp19 = tmp21;
          }
          const items1 = [,];
          ({ uppercase: arr[0], text: arr[1] } = acked2);
          cResult[7] = acked2.text;
          cResult[8] = acked2.uppercase;
          cResult[9] = items1;
          tmp18 = items1;
        } else {
          if (cResult[18] !== badgeCopy) {
            const obj7 = { label: badgeCopy };
            const tmp14 = closure_1_8(closure_11, obj7);
            cResult[18] = badgeCopy;
            cResult[19] = tmp14;
            let tmp11 = tmp14;
          } else {
            tmp11 = cResult[19];
          }
          return tmp11;
        }
      }
      const obj8 = {
        type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW,
        name: discord_common_AnalyticsUtils.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: null,
      };
      obj8.properties = {
        component_type: MarketingComponentType.MarketingComponentType.PREMIUM_TAB,
        component_id: componentId,
        promotion_id: promotionId,
      };
      cResult[0] = componentId;
      cResult[1] = promotionId;
      cResult[2] = obj8;
      tmp5 = obj8;
      const obj9 = {
        component_type: MarketingComponentType.MarketingComponentType.PREMIUM_TAB,
        component_id: componentId,
        promotion_id: promotionId,
      };
    }
  : function OfferBadge(componentId) {
      componentId = componentId.componentId;
      ({ acked, badgeCopy, ackedBadgeCopy, promotionId } = componentId);
      const badgeTextVariant = useBadgeTextVariant.useBadgeTextVariant();
      const tmp4 = closure_10();
      const obj2 = { type: null, name: null, properties: null };
      obj2.type = discord_common_AnalyticsUtils.ImpressionTypes.VIEW;
      obj2.name = discord_common_AnalyticsUtils.ImpressionNames.PREMIUM_MARKETING_COMPONENT;
      const tmp6 = useTrackImpressionDefault;
      obj2.properties = {
        component_type: MarketingComponentType.MarketingComponentType.PREMIUM_TAB,
        component_id: componentId,
        promotion_id: promotionId,
      };
      tmp6(obj2, { disableTrack: null == componentId });
      if (acked) {
        const obj5 = { style: tmp4.acked, children: null };
        const obj6 = {
          source: _modDef15180,
          size: native.Icon.Sizes.EXTRA_SMALL,
          color: tmp4.icon.color,
          style: tmp4.icon,
        };
        const items = [closure_1_8(native.Icon, obj6)];
        const obj7 = { variant: badgeTextVariant, color: "interactive-text-default", style: null, children: null };
        const items1 = [,];
        ({ uppercase: arr2[0], text: arr2[1] } = tmp4);
        obj7.style = items1;
        obj7.children = ackedBadgeCopy;
        items[1] = closure_1_8(Text_Text.Text, obj7);
        obj5.children = items;
        let tmp10 = options(View, obj5);
      } else {
        const obj8 = { label: badgeCopy };
        tmp10 = closure_1_8(closure_11, obj8);
      }
      return tmp10;
    };
ReactCompilerGating = fn(558);
let obj10 = {
  paddingVertical: 2,
  paddingHorizontal: 12,
  borderRadius: nativeDefault.radii.round,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  textAlignVertical: "center",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/PremiumTabBadge.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function PremiumTabBadge() {
      const cResult = c.c(74);
      const badgeTextVariant = useBadgeTextVariant.useBadgeTextVariant();
      const tmp5 = closure_10();
      const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
      const premiumDiscountOffer = usePremiumDiscountOffer.usePremiumDiscountOffer();
      const hasTier2Premium = PremiumUtils.useHasTier2Premium();
      const result = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(
        dismissible_content.DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE,
      );
      let tmp9 = !result;
      if (!result) {
        tmp9 = hasTier2Premium;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SubscriptionStore];
        const fn = function b() {
          return premiumTypeSubscription.getPremiumTypeSubscription();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp10 = items;
        tmp11 = fn;
      } else {
        [tmp10, tmp11] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp10, tmp11);
      let trialId;
      if (stateFromStores != null) {
        trialId = stateFromStores.trialId;
      }
      if ((cResult[2] === trialId) === closure_6) {
        if (cResult[3] === tmp9) {
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const obj5 = { bypassAutoDismiss: true };
            cResult[5] = obj5;
          }
          useSelectedDismissibleContent;
          if (cResult[6] === hasTier2Premium) {
            if (cResult[7] === tmp9) {
              const _Symbol2 = Symbol;
              if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
                const obj8 = { bypassAutoDismiss: true };
                cResult[9] = obj8;
                let tmp23 = obj8;
              } else {
                tmp23 = cResult[9];
              }
              const tmpResult10 = useSelectedDismissibleContent;
              const isEligibleSenderForReferralProgram =
                useIsEligibleSenderForReferralProgram.useIsEligibleSenderForReferralProgram();
              const tmpResult11 = useIsEligibleSenderForReferralProgram;
              const isReferralProgramEntrypointBadgeAcknowledged =
                ReferralProgramUtils.useIsReferralProgramEntrypointBadgeAcknowledged();
              const tmpResult12 = ReferralProgramUtils;
              const promotionMarketingComponent = usePromotionMarketingComponent.usePromotionMarketingComponent(
                MarketingComponentType.MarketingComponentType.PREMIUM_TAB,
              );
              const tmpResult14 = useSelectedDismissibleContent;
              let prop = null;
              const useSelectedSnowflakeBoundDismissibleContent =
                tmpResult14.useSelectedSnowflakeBoundDismissibleContent;
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
              if (null != promotionMarketingComponent) {
                if ("premiumTab" === promotionMarketingComponent.properties.properties.oneofKind) {
                  const tmp107 =
                    tmp32 !== dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
                  if (cResult[10] === promotionMarketingComponent.id) {
                    if (cResult[11] === promotionMarketingComponent.promotionId) {
                      if (
                        cResult[12] ===
                        promotionMarketingComponent.properties.properties.premiumTab.acknowledgedBadgeLabel
                      ) {
                        if (cResult[13] === promotionMarketingComponent.properties.properties.premiumTab.badgeLabel) {
                          if (cResult[14] === tmp107) {
                            let tmp108 = cResult[15];
                          }
                          return tmp108;
                        }
                      }
                    }
                  }
                  const obj9 = {
                    acked: tmp107,
                    badgeCopy: promotionMarketingComponent.properties.properties.premiumTab.badgeLabel,
                    ackedBadgeCopy: promotionMarketingComponent.properties.properties.premiumTab.acknowledgedBadgeLabel,
                    componentId: null,
                    promotionId: null,
                  };
                  ({ id: obj28.componentId, promotionId: obj28.promotionId } = promotionMarketingComponent);
                  const tmp111 = closure_1_8(closure_12, obj9);
                  cResult[10] = promotionMarketingComponent.id;
                  cResult[11] = promotionMarketingComponent.promotionId;
                  cResult[12] = promotionMarketingComponent.properties.properties.premiumTab.acknowledgedBadgeLabel;
                  cResult[13] = promotionMarketingComponent.properties.properties.premiumTab.badgeLabel;
                  cResult[14] = tmp107;
                  cResult[15] = tmp111;
                  tmp108 = tmp111;
                }
              }
              if (tmp21 === dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE) {
                const _Symbol3 = Symbol;
                if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl2 = util.intl;
                  const stringResult = intl2.string(util.t.uO4bXn);
                  cResult[16] = stringResult;
                }
              } else {
                let tmp33 = null;
                if (
                  _slicedToArray(tmpResult10.useSelectedDismissibleContent(cResult[8], tmp23), 1)[0] ===
                  dismissible_content.DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD
                ) {
                  const _Symbol10 = Symbol;
                  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl = util.intl;
                    const stringResult1 = intl.string(util.t["jyYgZ+"]);
                    cResult[17] = stringResult1;
                    let tmp34 = stringResult1;
                  } else {
                    tmp34 = cResult[17];
                  }
                  tmp33 = tmp34;
                }
                if (isEligibleSenderForReferralProgram) {
                  if (!isReferralProgramEntrypointBadgeAcknowledged) {
                    const _Symbol4 = Symbol;
                    if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                      const obj10 = { label: null };
                      const intl3 = util.intl;
                      obj10.label = intl3.string(util.t.RDE0Sc);
                      const tmp42 = closure_1_8(closure_11, obj10);
                      cResult[18] = tmp42;
                      let tmp39 = tmp42;
                    } else {
                      tmp39 = cResult[18];
                    }
                    return tmp39;
                  }
                }
                if (tmp9) {
                  if (cResult[19] !== tmp5.text) {
                    let text;
                    if (tmpResult15.isAndroid()) {
                      text = tmp5.text;
                    }
                    cResult[19] = tmp5.text;
                    cResult[20] = text;
                    let tmp93 = text;
                    tmpResult15 = PlatformUtils;
                  } else {
                    tmp93 = cResult[20];
                  }
                  if (cResult[21] === tmp5.uppercase) {
                    if (cResult[22] === tmp93) {
                      let tmp95 = cResult[23];
                    }
                    const _Symbol9 = Symbol;
                    if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl8 = util.intl;
                      const stringResult2 = intl8.string(util.t.y2b7CA);
                      cResult[24] = stringResult2;
                      let tmp96 = stringResult2;
                    } else {
                      tmp96 = cResult[24];
                    }
                    if (cResult[25] === badgeTextVariant) {
                      if (cResult[26] === tmp95) {
                        let tmp98 = cResult[27];
                      }
                      if (cResult[28] === tmp5.tag) {
                        if (cResult[29] === tmp98) {
                          let tmp101 = cResult[30];
                        }
                        return tmp101;
                      }
                      const obj11 = {
                        style: tmp5.tag,
                        colors: Gradients.PREMIUM_TIER_2,
                        start: ConstantsIOS.HorizontalGradient.START,
                        end: ConstantsIOS.HorizontalGradient.END,
                        children: tmp98,
                      };
                      const tmp106 = closure_1_8(LinearGradientDefault, obj11);
                      cResult[28] = tmp5.tag;
                      cResult[29] = tmp98;
                      cResult[30] = tmp106;
                      tmp101 = tmp106;
                    }
                    const obj12 = {
                      variant: badgeTextVariant,
                      color: "text-overlay-light",
                      style: tmp95,
                      children: tmp96,
                    };
                    const tmp100 = closure_1_8(Text_Text.Text, obj12);
                    cResult[25] = badgeTextVariant;
                    cResult[26] = tmp95;
                    cResult[27] = tmp100;
                    tmp98 = tmp100;
                  }
                  const items1 = [tmp5.uppercase, tmp93];
                  cResult[21] = tmp5.uppercase;
                  cResult[22] = tmp93;
                  cResult[23] = items1;
                  tmp95 = items1;
                } else if (null != premiumTrialOffer) {
                  let hasAcknowledged;
                  if (premiumTrialOffer != null) {
                    hasAcknowledged = premiumTrialOffer.hasAcknowledged;
                  }
                  const _Symbol8 = Symbol;
                  if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl6 = util.intl;
                    const stringResult3 = intl6.string(util.t.OS9KPu);
                    const intl7 = util.intl;
                    const stringResult4 = intl7.string(util.t.OS9KPu);
                    cResult[31] = stringResult3;
                    cResult[32] = stringResult4;
                    let tmp85 = stringResult4;
                    let tmp84 = stringResult3;
                  } else {
                    tmp84 = cResult[31];
                    tmp85 = cResult[32];
                  }
                  if (cResult[33] !== (true === hasAcknowledged)) {
                    const obj13 = { acked: tmp88, badgeCopy: tmp84, ackedBadgeCopy: tmp85 };
                    const tmp92 = closure_1_8(closure_12, obj13);
                    cResult[33] = tmp88;
                    cResult[34] = tmp92;
                    let tmp89 = tmp92;
                  } else {
                    tmp89 = cResult[34];
                  }
                  return tmp89;
                } else if (null != premiumDiscountOffer) {
                  if (premiumDiscountOffer.hasAcknowledged()) {
                    if (cResult[46] === tmp5.ackedBadge) {
                      if (cResult[47] === tmp5.premiumDiscountBadge) {
                        let tmp68 = cResult[48];
                      }
                      if (cResult[49] !== tmp5.icon) {
                        const obj14 = {
                          source: _modDef15180,
                          size: native.Icon.Sizes.EXTRA_SMALL,
                          color: tmp5.icon.color,
                          style: tmp5.icon,
                        };
                        const tmp72 = closure_1_8(native.Icon, obj14);
                        cResult[49] = tmp5.icon;
                        cResult[50] = tmp72;
                        let tmp69 = tmp72;
                      } else {
                        tmp69 = cResult[50];
                      }
                      if (cResult[51] === tmp5.text) {
                        if (cResult[52] === tmp5.uppercase) {
                          let tmp73 = cResult[53];
                        }
                        const _Symbol7 = Symbol;
                        if (cResult[54] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl5 = util.intl;
                          const stringResult5 = intl5.string(util.t["/DTtr6"]);
                          cResult[54] = stringResult5;
                          let tmp74 = stringResult5;
                        } else {
                          tmp74 = cResult[54];
                        }
                        if (cResult[55] === badgeTextVariant) {
                          if (cResult[56] === tmp73) {
                            let tmp76 = cResult[57];
                          }
                          if (cResult[58] === tmp76) {
                            if (cResult[59] === tmp68) {
                              if (cResult[60] === tmp69) {
                                let tmp79 = cResult[61];
                              }
                              return tmp79;
                            }
                          }
                          const obj15 = { style: tmp68, children: null };
                          const items2 = [tmp69, tmp76];
                          obj15.children = items2;
                          const tmp82 = options(View, obj15);
                          cResult[58] = tmp76;
                          cResult[59] = tmp68;
                          cResult[60] = tmp69;
                          cResult[61] = tmp82;
                          tmp79 = tmp82;
                        }
                        const obj16 = {
                          variant: badgeTextVariant,
                          color: "interactive-text-default",
                          style: tmp73,
                          children: tmp74,
                        };
                        const tmp78 = closure_1_8(Text_Text.Text, obj16);
                        cResult[55] = badgeTextVariant;
                        cResult[56] = tmp73;
                        cResult[57] = tmp78;
                        tmp76 = tmp78;
                      }
                      const items3 = [,];
                      ({ uppercase: arr8[0], text: arr8[1] } = tmp5);
                      cResult[51] = tmp5.text;
                      cResult[52] = tmp5.uppercase;
                      cResult[53] = items3;
                      tmp73 = items3;
                    }
                    const items4 = [,];
                    ({ premiumDiscountBadge: arr7[0], ackedBadge: arr7[1] } = tmp5);
                    cResult[46] = tmp5.ackedBadge;
                    cResult[47] = tmp5.premiumDiscountBadge;
                    cResult[48] = items4;
                    tmp68 = items4;
                  } else {
                    const _Symbol5 = Symbol;
                    if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                      const items5 = ["#db00a4", "#5968f0"];
                      cResult[35] = items5;
                      let tmp56 = items5;
                    } else {
                      tmp56 = cResult[35];
                    }
                    if (cResult[36] === tmp5.text) {
                      if (cResult[37] === tmp5.uppercase) {
                        let tmp57 = cResult[38];
                      }
                      const _Symbol6 = Symbol;
                      if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl4 = util.intl;
                        const stringResult6 = intl4.string(util.t["/DTtr6"]);
                        cResult[39] = stringResult6;
                        let tmp58 = stringResult6;
                      } else {
                        tmp58 = cResult[39];
                      }
                      if (cResult[40] === badgeTextVariant) {
                        if (cResult[41] === tmp57) {
                          let tmp60 = cResult[42];
                        }
                        if (cResult[43] === tmp5.premiumDiscountBadge) {
                          if (cResult[44] === tmp60) {
                            let tmp63 = cResult[45];
                          }
                          return tmp63;
                        }
                        const obj17 = {
                          style: tmp5.premiumDiscountBadge,
                          colors: tmp56,
                          start: ConstantsIOS.HorizontalGradient.START,
                          end: ConstantsIOS.HorizontalGradient.END,
                          children: tmp60,
                        };
                        const tmp67 = closure_1_8(LinearGradientDefault, obj17);
                        cResult[43] = tmp5.premiumDiscountBadge;
                        cResult[44] = tmp60;
                        cResult[45] = tmp67;
                        tmp63 = tmp67;
                      }
                      const obj18 = {
                        variant: badgeTextVariant,
                        color: "text-overlay-light",
                        style: tmp57,
                        children: tmp58,
                      };
                      const tmp62 = closure_1_8(Text_Text.Text, obj18);
                      cResult[40] = badgeTextVariant;
                      cResult[41] = tmp57;
                      cResult[42] = tmp62;
                      tmp60 = tmp62;
                    }
                    const items6 = [,];
                    ({ uppercase: arr6[0], text: arr6[1] } = tmp5);
                    cResult[36] = tmp5.text;
                    cResult[37] = tmp5.uppercase;
                    cResult[38] = items6;
                    tmp57 = items6;
                  }
                } else if (null == tmp33) {
                  return null;
                } else {
                  if (cResult[62] !== tmp5.text) {
                    let text1;
                    if (tmpResult16.isAndroid()) {
                      text1 = tmp5.text;
                    }
                    cResult[62] = tmp5.text;
                    cResult[63] = text1;
                    let tmp43 = text1;
                    tmpResult16 = PlatformUtils;
                  } else {
                    tmp43 = cResult[63];
                  }
                  if (cResult[64] === tmp5.uppercase) {
                    if (cResult[65] === tmp43) {
                      let tmp45 = cResult[66];
                    }
                    if (cResult[67] === tmp33) {
                      if (cResult[68] === badgeTextVariant) {
                        if (cResult[69] === tmp45) {
                          let tmp46 = cResult[70];
                        }
                        if (cResult[71] === tmp5.tag) {
                        }
                        const obj19 = {
                          style: tmp5.tag,
                          colors: Gradients.PREMIUM_TIER_2,
                          start: ConstantsIOS.HorizontalGradient.START,
                          end: ConstantsIOS.HorizontalGradient.END,
                          children: tmp46,
                        };
                        const tmp54 = closure_1_8(LinearGradientDefault, obj19);
                        cResult[71] = tmp5.tag;
                        cResult[72] = tmp46;
                        cResult[73] = tmp54;
                      }
                    }
                    const obj20 = {
                      variant: badgeTextVariant,
                      color: "text-overlay-light",
                      style: tmp45,
                      children: tmp33,
                    };
                    const tmp48 = closure_1_8(Text_Text.Text, obj20);
                    cResult[67] = tmp33;
                    cResult[68] = badgeTextVariant;
                    cResult[69] = tmp45;
                    cResult[70] = tmp48;
                    tmp46 = tmp48;
                  }
                  const items7 = [tmp5.uppercase, tmp43];
                  cResult[64] = tmp5.uppercase;
                  cResult[65] = tmp43;
                  cResult[66] = items7;
                  tmp45 = items7;
                }
              }
              const tmpResult13 = usePromotionMarketingComponent;
            }
          }
          if (!tmp9) {
            if (hasTier2Premium) {
              let items8 = [dismissible_content.DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD];
            }
            cResult[6] = hasTier2Premium;
            cResult[7] = tmp9;
            cResult[8] = items8;
          }
          items8 = [];
        }
      }
      if (trialId === closure_6) {
        if (!tmp9) {
          let items9 = [dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE];
        }
        cResult[2] = tmp15;
        cResult[3] = tmp9;
        cResult[4] = items9;
      }
      items9 = [];
      const tmpResult = initialize;
    }
  : function PremiumTabBadge() {
      let badgeTextVariant = useBadgeTextVariant.useBadgeTextVariant();
      let intl = closure_10();
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
      const items = [SubscriptionStore];
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
        [tmp14, r10055] = tmp11(items1, { bypassAutoDismiss: true });
        useSelectedDismissibleContent;
        if (!tmp7) {
          if (hasTier2Premium) {
            let items2 = [dismissible_content.DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD];
          }
          [tmp18, r10068] = tmp16(items2, { bypassAutoDismiss: true });
          const tmp12Result = _slicedToArray(tmp16(items2, { bypassAutoDismiss: true }), 2);
          const isEligibleSenderForReferralProgram =
            useIsEligibleSenderForReferralProgram.useIsEligibleSenderForReferralProgram();
          const tmpResult11 = useIsEligibleSenderForReferralProgram;
          const isReferralProgramEntrypointBadgeAcknowledged =
            ReferralProgramUtils.useIsReferralProgramEntrypointBadgeAcknowledged();
          const tmpResult12 = ReferralProgramUtils;
          const promotionMarketingComponent = usePromotionMarketingComponent.usePromotionMarketingComponent(
            MarketingComponentType.MarketingComponentType.PREMIUM_TAB,
          );
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
              const obj4 = {
                acked: tmp27 !== dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
                badgeCopy: promotionMarketingComponent.properties.properties.premiumTab.badgeLabel,
                ackedBadgeCopy: promotionMarketingComponent.properties.properties.premiumTab.acknowledgedBadgeLabel,
                componentId: null,
                promotionId: null,
              };
              ({ id: obj25.componentId, promotionId: obj25.promotionId } = promotionMarketingComponent);
              return closure_1_8(closure_12, obj4);
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
              return closure_1_8(closure_11, obj7);
            }
          }
          if (tmp7) {
            const obj8 = {
              style: intl.tag,
              colors: Gradients.PREMIUM_TIER_2,
              start: ConstantsIOS.HorizontalGradient.START,
              end: ConstantsIOS.HorizontalGradient.END,
              children: null,
            };
            const obj9 = { variant: badgeTextVariant, color: "text-overlay-light", style: null, children: null };
            const items3 = [intl.uppercase];
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
            obj8.children = closure_1_8(Text_Text.Text, obj9);
            let tmp47Result = closure_1_8(tmp52, obj8);
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
            tmp47Result = closure_1_8(closure_12, obj10);
          } else if (null != premiumDiscountOffer) {
            if (premiumDiscountOffer.hasAcknowledged()) {
              const obj11 = { style: null, children: null };
              const items4 = [,];
              ({ premiumDiscountBadge: arr6[0], ackedBadge: arr6[1] } = intl);
              obj11.style = items4;
              const obj12 = {
                source: _modDef15180,
                size: native.Icon.Sizes.EXTRA_SMALL,
                color: intl.icon.color,
                style: intl.icon,
              };
              const items5 = [closure_1_8(native.Icon, obj12)];
              const obj13 = {
                variant: badgeTextVariant,
                color: "interactive-text-default",
                style: null,
                children: null,
              };
              const items6 = [,];
              ({ uppercase: arr8[0], text: arr8[1] } = intl);
              obj13.style = items6;
              const intl6 = util.intl;
              obj13.children = intl6.string(util.t["/DTtr6"]);
              items5[1] = closure_1_8(Text_Text.Text, obj13);
              obj11.children = items5;
              let tmp41 = options(View, obj11);
            } else {
              const obj14 = {
                style: intl.premiumDiscountBadge,
                colors: ["#db00a4", "#5968f0"],
                start: ConstantsIOS.HorizontalGradient.START,
                end: ConstantsIOS.HorizontalGradient.END,
                children: null,
              };
              const obj15 = { variant: badgeTextVariant, color: "text-overlay-light", style: null, children: null };
              const items7 = [,];
              ({ uppercase: arr5[0], text: arr5[1] } = intl);
              obj15.style = items7;
              const intl5 = util.intl;
              obj15.children = intl5.string(util.t["/DTtr6"]);
              obj14.children = closure_1_8(Text_Text.Text, obj15);
              tmp41 = closure_1_8(LinearGradientDefault, obj14);
            }
          } else {
            tmp47Result = null;
            if (null != stringResult) {
              const obj16 = {
                style: intl.tag,
                colors: Gradients.PREMIUM_TIER_2,
                start: ConstantsIOS.HorizontalGradient.START,
                end: ConstantsIOS.HorizontalGradient.END,
                children: null,
              };
              const obj17 = { variant: badgeTextVariant, color: "text-overlay-light", style: null, children: null };
              const items8 = [intl.uppercase];
              const tmp34 = LinearGradientDefault;
              let text1;
              if (tmpResult16.isAndroid()) {
                text1 = intl.text;
              }
              items8[1] = text1;
              obj17.style = items8;
              obj17.children = stringResult;
              obj16.children = closure_1_8(Text_Text.Text, obj17);
              tmp47Result = closure_1_8(tmp34, obj16);
              tmpResult16 = PlatformUtils;
            }
          }
          const tmp12Result2 = _slicedToArray(
            tmpResult14.useSelectedSnowflakeBoundDismissibleContent(prop, str2, undefined, true),
            2,
          );
        }
        items2 = [];
        const tmp13 = _slicedToArray(tmp11(items1, { bypassAutoDismiss: true }), 2);
      }
      items1 = [];
      const tmpResult = initialize;
    };
