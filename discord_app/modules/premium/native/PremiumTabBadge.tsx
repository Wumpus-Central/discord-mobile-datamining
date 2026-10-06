// discord_app/modules/premium/native/PremiumTabBadge.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import intl9 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import discord_common_AnalyticsUtils from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import PremiumConstants from "../PremiumConstants.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import useBadgeTextVariant from "../../../../discord_common/js/packages/design/hooks/useBadgeTextVariant.native.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import shared from "../../../design/shared.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../_runtime/05612_LinearGradient.js";
import useSelectedDismissibleContent from "../../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import ColorConstants from "../../colors/native/ColorConstants.tsx";
import usePremiumTrialOffer from "../hooks/usePremiumTrialOffer.android.tsx";
import ReferralProgramUtils from "../referral_program/ReferralProgramUtils.tsx";
import useIsEligibleSenderForReferralProgram from "../referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx";
import usePremiumDiscountOffer from "../hooks/usePremiumDiscountOffer.android.tsx";
import useTrackImpressionDefault from "../../app_analytics/useTrackImpression.tsx";
import MarketingComponentType from "../../../../discord_common/js/shared/shared-constants/MarketingComponentType.tsx";
import usePromotionMarketingComponent from "../hooks/usePromotionMarketingComponent.tsx";
import AssetRegistryDefault from "../../../../_runtime/14807_AssetRegistry.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import SubscriptionStore from "../../../stores/billing/SubscriptionStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let label;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
const View = react_native.View;
let closure_6 = PremiumConstants.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
const Gradients = ColorConstants.Gradients;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  tag: obj2,
  badge: obj3,
  badgeBackgroundLightTheme: obj4,
  badgeBackgroundDarkTheme: obj5,
  acked: obj6,
  ackedBadge: obj7,
  icon: obj8,
  uppercase: { textTransform: "uppercase" },
  text: { paddingBottom: 2 },
  premiumDiscountBadge: obj9,
};
obj2 = { paddingVertical: 4, paddingHorizontal: 8, borderRadius: nativeDefault.radii.round };
createStyles = createStyles.createStyles;
obj3 = {
  display: "flex",
  minWidth: 16,
  minHeight: 16,
  paddingHorizontal: 8,
  justifyContent: "center",
  alignItems: "center",
  gap: 4,
  borderRadius: nativeDefault.radii.round,
};
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj5 = { backgroundColor: nativeDefault.colors.WHITE };
obj6 = {
  paddingVertical: 2,
  paddingHorizontal: 12,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  textAlignVertical: "center",
};
obj7 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj8 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginRight: 2 };
obj9 = {
  paddingVertical: 2,
  paddingHorizontal: 12,
  borderRadius: nativeDefault.radii.round,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  textAlignVertical: "center",
};
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (label) => {
      const obj = react2;
      const cResult = obj.c(14);
      label = label.label;
      const obj2 = useBadgeTextVariant;
      const badgeTextVariant = obj2.useBadgeTextVariant();
      const tmp5 = closure_10();
      const obj3 = shared;
      const isThemeDarkResult = obj3.isThemeDark(useThemeDefault());
      const tmp7 = isThemeDarkResult ? tmp5.badgeBackgroundDarkTheme : tmp5.badgeBackgroundLightTheme;
      if (cResult[0] === tmp5.badge) {
        let tmp8;
        if (cResult[1] === tmp7) {
          tmp8 = cResult[2];
        }
        let str = "text-overlay-light";
        if (isThemeDarkResult) {
          str = "text-overlay-dark";
        }
        if (cResult[3] === tmp5.text) {
          let tmp9;
          if (cResult[4] === tmp5.uppercase) {
            tmp9 = cResult[5];
          }
          if (cResult[6] === badgeTextVariant) {
            if (cResult[7] === label) {
              if (cResult[8] === str) {
                let tmp10;
                if (cResult[9] === tmp9) {
                  tmp10 = cResult[10];
                }
                if (cResult[11] === tmp8) {
                  let tmp13;
                  if (cResult[12] === tmp10) {
                    tmp13 = cResult[13];
                  }
                  return tmp13;
                }
                const obj4 = { style: tmp8, children: tmp10 };
                const tmp16 = metroImportAll(View, obj4);
                cResult[11] = tmp8;
                cResult[12] = tmp10;
                cResult[13] = tmp16;
                tmp13 = tmp16;
              }
            }
          }
          const obj5 = { variant: badgeTextVariant, color: str, style: tmp9, children: label };
          const tmp12 = metroImportAll(Text_Text.Text, obj5);
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
  : (label) => {
      let Text;
      let items1;
      let obj4;
      let str;
      label = label.label;
      const obj = useBadgeTextVariant;
      const badgeTextVariant = obj.useBadgeTextVariant();
      const tmp4 = closure_10();
      const obj2 = shared;
      const isThemeDarkResult = obj2.isThemeDark(useThemeDefault());
      const items = [tmp4.badge];
      items[1] = isThemeDarkResult ? tmp4.badgeBackgroundDarkTheme : tmp4.badgeBackgroundLightTheme;
      const obj3 = { style: items, children: metroImportAll(Text, obj4) };
      obj4 = { variant: badgeTextVariant, color: str, style: items1, children: label };
      str = "text-overlay-light";
      Text = Text_Text.Text;
      if (isThemeDarkResult) {
        str = "text-overlay-dark";
      }
      items1 = [,];
      ({ uppercase: arr2[0], text: arr2[1] } = tmp4);
      return metroImportAll(View, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let acked;
      let ackedBadgeCopy;
      let badgeCopy;
      let componentId;
      let items;
      let promotionId;
      const obj = react2;
      const cResult = obj.c(20);
      ({ badgeCopy, ackedBadgeCopy, componentId, promotionId, acked } = arg0);
      const obj2 = useBadgeTextVariant;
      const badgeTextVariant = obj2.useBadgeTextVariant();
      const tmp5 = closure_10();
      if (cResult[0] === componentId) {
        let tmp6;
        let tmp9;
        let tmp12;
        if (cResult[1] === promotionId) {
          tmp6 = cResult[2];
        }
        if (cResult[3] !== (null == componentId)) {
          const obj3 = { disableTrack: null == componentId };
          cResult[3] = null == componentId;
          cResult[4] = obj3;
          tmp9 = obj3;
        } else {
          tmp9 = cResult[4];
        }
        useTrackImpressionDefault(tmp6, tmp9);
        if (acked) {
          let tmp16;
          if (cResult[5] !== tmp5.icon) {
            const obj4 = {
              source: AssetRegistryDefault,
              size: native.Icon.Sizes.EXTRA_SMALL,
              color: tmp5.icon.color,
              style: tmp5.icon,
            };
            const Icon = native.Icon;
            const tmp18 = metroImportAll(Icon, obj4);
            cResult[5] = tmp5.icon;
            cResult[6] = tmp18;
            tmp16 = tmp18;
          } else {
            tmp16 = cResult[6];
          }
          if (cResult[7] === tmp5.text) {
            let tmp19;
            if (cResult[8] === tmp5.uppercase) {
              tmp19 = cResult[9];
            }
            if (cResult[10] === ackedBadgeCopy) {
              if (cResult[11] === badgeTextVariant) {
                let tmp20;
                if (cResult[12] === tmp19) {
                  tmp20 = cResult[13];
                }
                if (cResult[14] === tmp5.acked) {
                  if (cResult[15] === tmp16) {
                    let tmp23;
                    if (cResult[16] === tmp20) {
                      tmp23 = cResult[17];
                    }
                    tmp12 = tmp23;
                  }
                }
                const obj5 = { style: tmp5.acked, children: items };
                items = [tmp16, tmp20];
                const tmp26 = React4(View, obj5);
                cResult[14] = tmp5.acked;
                cResult[15] = tmp16;
                cResult[16] = tmp20;
                cResult[17] = tmp26;
                tmp23 = tmp26;
              }
            }
            const obj6 = {
              variant: badgeTextVariant,
              color: "interactive-text-default",
              style: tmp19,
              children: ackedBadgeCopy,
            };
            const tmp22 = metroImportAll(Text_Text.Text, obj6);
            cResult[10] = ackedBadgeCopy;
            cResult[11] = badgeTextVariant;
            cResult[12] = tmp19;
            cResult[13] = tmp22;
            tmp20 = tmp22;
          }
          const items1 = [,];
          ({ uppercase: arr[0], text: arr[1] } = tmp5);
          cResult[7] = tmp5.text;
          cResult[8] = tmp5.uppercase;
          cResult[9] = items1;
          tmp19 = items1;
        } else if (cResult[18] !== badgeCopy) {
          const obj7 = { label: badgeCopy };
          const tmp15 = metroImportAll(closure_11, obj7);
          cResult[18] = badgeCopy;
          cResult[19] = tmp15;
          tmp12 = tmp15;
        } else {
          tmp12 = cResult[19];
        }
        return tmp12;
      }
      const obj8 = {
        type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW,
        name: discord_common_AnalyticsUtils.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: {
          component_type: MarketingComponentType.MarketingComponentType.PREMIUM_TAB,
          component_id: componentId,
          promotion_id: promotionId,
        },
      };
      cResult[0] = componentId;
      cResult[1] = promotionId;
      cResult[2] = obj8;
      tmp6 = obj8;
      ({
        component_type: MarketingComponentType.MarketingComponentType.PREMIUM_TAB,
        component_id: componentId,
        promotion_id: promotionId,
      });
    }
  : (componentId) => {
      let acked;
      let ackedBadgeCopy;
      let badgeCopy;
      let items;
      let items1;
      let promotionId;
      let tmp10;
      componentId = componentId.componentId;
      ({ acked, badgeCopy, ackedBadgeCopy, promotionId } = componentId);
      const obj = useBadgeTextVariant;
      const badgeTextVariant = obj.useBadgeTextVariant();
      const tmp4 = closure_10();
      const obj2 = {
        type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW,
        name: discord_common_AnalyticsUtils.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: {
          component_type: MarketingComponentType.MarketingComponentType.PREMIUM_TAB,
          component_id: componentId,
          promotion_id: promotionId,
        },
      };
      const tmp6 = useTrackImpressionDefault;
      ({
        component_type: MarketingComponentType.MarketingComponentType.PREMIUM_TAB,
        component_id: componentId,
        promotion_id: promotionId,
      });
      const obj4 = { disableTrack: null == componentId };
      tmp6(obj2, obj4);
      if (acked) {
        const obj5 = { style: tmp4.acked, children: items };
        const obj6 = {
          source: AssetRegistryDefault,
          size: native.Icon.Sizes.EXTRA_SMALL,
          color: tmp4.icon.color,
          style: tmp4.icon,
        };
        const Icon = native.Icon;
        items = [metroImportAll(Icon, obj6)];
        const obj7 = {
          variant: badgeTextVariant,
          color: "interactive-text-default",
          style: items1,
          children: ackedBadgeCopy,
        };
        items1 = [,];
        ({ uppercase: arr2[0], text: arr2[1] } = tmp4);
        items[1] = metroImportAll(Text_Text.Text, obj7);
        tmp10 = React4(View, obj5);
      } else {
        const obj8 = { label: badgeCopy };
        tmp10 = metroImportAll(closure_11, obj8);
      }
      return tmp10;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let intl3;
      let items2;
      let premiumTypeSubscription;
      let tmp10;
      let tmp11;
      const obj = react2;
      const cResult = obj.c(72);
      const obj2 = useBadgeTextVariant;
      const badgeTextVariant = obj2.useBadgeTextVariant();
      const tmp5 = closure_10();
      const obj3 = usePremiumTrialOffer;
      const premiumTrialOffer = obj3.usePremiumTrialOffer();
      const obj4 = usePremiumDiscountOffer;
      const premiumDiscountOffer = obj4.usePremiumDiscountOffer();
      const obj6 = PremiumUtils;
      const hasTier2Premium = obj6.useHasTier2Premium();
      const obj7 = DismissibleContentUnsafeUtils;
      const result = obj7.useIsDismissibleContentDismissed_UNSAFE(
        dismissible_content.DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE,
      );
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp10, tmp11);
      let trialId;
      if (stateFromStores != null) {
        trialId = stateFromStores.trialId;
      }
      if ((cResult[2] === trialId) === closure_6) {
        let tmp20;
        useSelectedDismissibleContent;
        if (cResult[5] === hasTier2Premium) {
          let tmp31;
          if (cResult[6] === (!result && hasTier2Premium)) {
            tmp20 = cResult[7];
          }
          const tmpResult10 = useSelectedDismissibleContent;
          const first = _slicedToArray(tmpResult10.useSelectedDismissibleContent(tmp20, undefined, true), 1)[0];
          const tmpResult11 = useIsEligibleSenderForReferralProgram;
          const isEligibleSenderForReferralProgram = tmpResult11.useIsEligibleSenderForReferralProgram();
          const tmpResult12 = ReferralProgramUtils;
          const isReferralProgramEntrypointBadgeAcknowledged =
            tmpResult12.useIsReferralProgramEntrypointBadgeAcknowledged();
          const tmpResult13 = usePromotionMarketingComponent;
          const promotionMarketingComponent = tmpResult13.usePromotionMarketingComponent(
            MarketingComponentType.MarketingComponentType.PREMIUM_TAB,
          );
          let prop = null;
          const useSelectedSnowflakeBoundDismissibleContent =
            useSelectedDismissibleContent.useSelectedSnowflakeBoundDismissibleContent;
          const tmpResult14 = useSelectedDismissibleContent;
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
              const tmp104 = tmp30 !== dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
              if (cResult[8] === promotionMarketingComponent.id) {
                if (cResult[9] === promotionMarketingComponent.promotionId) {
                  if (
                    cResult[10] === promotionMarketingComponent.properties.properties.premiumTab.acknowledgedBadgeLabel
                  ) {
                    if (cResult[11] === promotionMarketingComponent.properties.properties.premiumTab.badgeLabel) {
                      let tmp105;
                      if (cResult[12] === tmp104) {
                        tmp105 = cResult[13];
                      }
                      return tmp105;
                    }
                  }
                }
              }
              const obj5 = {
                acked: tmp104,
                badgeCopy: promotionMarketingComponent.properties.properties.premiumTab.badgeLabel,
                ackedBadgeCopy: promotionMarketingComponent.properties.properties.premiumTab.acknowledgedBadgeLabel,
                componentId: null,
                promotionId: null,
              };
              ({ id: obj26.componentId, promotionId: obj26.promotionId } = promotionMarketingComponent);
              const tmp108 = metroImportAll(closure_12, obj5);
              cResult[8] = promotionMarketingComponent.id;
              cResult[9] = promotionMarketingComponent.promotionId;
              cResult[10] = promotionMarketingComponent.properties.properties.premiumTab.acknowledgedBadgeLabel;
              cResult[11] = promotionMarketingComponent.properties.properties.premiumTab.badgeLabel;
              cResult[12] = tmp104;
              cResult[13] = tmp108;
              tmp105 = tmp108;
            }
          }
          if (tmp19 === dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE) {
            let tmp34;
            const _Symbol = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = intl9.intl;
              const stringResult = intl2.string(intl9.t.uO4bXn);
              cResult[14] = stringResult;
              tmp34 = stringResult;
            } else {
              tmp34 = cResult[14];
            }
            tmp31 = tmp34;
          } else {
            tmp31 = null;
            if (first === dismissible_content.DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD) {
              let tmp32;
              const _Symbol8 = Symbol;
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = intl9.intl;
                const stringResult1 = intl.string(intl9.t["jyYgZ+"]);
                cResult[15] = stringResult1;
                tmp32 = stringResult1;
              } else {
                tmp32 = cResult[15];
              }
              tmp31 = tmp32;
            }
          }
          if (isEligibleSenderForReferralProgram) {
            if (!isReferralProgramEntrypointBadgeAcknowledged) {
              let tmp36;
              const _Symbol2 = Symbol;
              if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                const obj8 = { label: intl3.string(intl9.t.RDE0Sc) };
                intl3 = intl9.intl;
                const tmp39 = metroImportAll(closure_11, obj8);
                cResult[16] = tmp39;
                tmp36 = tmp39;
              } else {
                tmp36 = cResult[16];
              }
              return tmp36;
            }
          }
          if (!result && hasTier2Premium) {
            let tmp90;
            const tag = tmp5.tag;
            if (cResult[17] !== tmp5.text) {
              let text;
              const tmpResult15 = PlatformUtils;
              if (tmpResult15.isAndroid()) {
                text = tmp5.text;
              }
              cResult[17] = tmp5.text;
              cResult[18] = text;
              tmp90 = text;
            } else {
              tmp90 = cResult[18];
            }
            if (cResult[19] === tmp5.uppercase) {
              let tmp92;
              let tmp93;
              if (cResult[20] === tmp90) {
                tmp92 = cResult[21];
              }
              const _Symbol7 = Symbol;
              if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                const intl8 = intl9.intl;
                const stringResult2 = intl8.string(intl9.t.y2b7CA);
                cResult[22] = stringResult2;
                tmp93 = stringResult2;
              } else {
                tmp93 = cResult[22];
              }
              if (cResult[23] === badgeTextVariant) {
                let tmp95;
                if (cResult[24] === tmp92) {
                  tmp95 = cResult[25];
                }
                if (cResult[26] === tmp5.tag) {
                  let tmp98;
                  if (cResult[27] === tmp95) {
                    tmp98 = cResult[28];
                  }
                  return tmp98;
                }
                const obj9 = {
                  style: tag,
                  colors: Gradients.PREMIUM_TIER_2,
                  start: ConstantsIOS.HorizontalGradient.START,
                  end: ConstantsIOS.HorizontalGradient.END,
                  children: tmp95,
                };
                const tmp101 = LinearGradientDefault;
                const tmp103 = metroImportAll(tmp101, obj9);
                cResult[26] = tmp5.tag;
                cResult[27] = tmp95;
                cResult[28] = tmp103;
                tmp98 = tmp103;
              }
              const obj10 = { variant: badgeTextVariant, color: "text-overlay-light", style: tmp92, children: tmp93 };
              const tmp97 = metroImportAll(Text_Text.Text, obj10);
              cResult[23] = badgeTextVariant;
              cResult[24] = tmp92;
              cResult[25] = tmp97;
              tmp95 = tmp97;
            }
            const items1 = [tmp5.uppercase, tmp90];
            cResult[19] = tmp5.uppercase;
            cResult[20] = tmp90;
            cResult[21] = items1;
            tmp92 = items1;
          } else if (null != premiumTrialOffer) {
            let tmp82;
            let tmp81;
            let tmp86;
            let hasAcknowledged;
            if (premiumTrialOffer != null) {
              hasAcknowledged = premiumTrialOffer.hasAcknowledged;
            }
            const _Symbol6 = Symbol;
            if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
              const intl6 = intl9.intl;
              const stringResult3 = intl6.string(intl9.t.OS9KPu);
              const intl7 = intl9.intl;
              const stringResult4 = intl7.string(intl9.t.OS9KPu);
              cResult[29] = stringResult3;
              cResult[30] = stringResult4;
              tmp82 = stringResult4;
              tmp81 = stringResult3;
            } else {
              tmp81 = cResult[29];
              tmp82 = cResult[30];
            }
            if (cResult[31] !== (true === hasAcknowledged)) {
              const obj11 = { acked: true === hasAcknowledged, badgeCopy: tmp81, ackedBadgeCopy: tmp82 };
              const tmp89 = metroImportAll(closure_12, obj11);
              cResult[31] = true === hasAcknowledged;
              cResult[32] = tmp89;
              tmp86 = tmp89;
            } else {
              tmp86 = cResult[32];
            }
            return tmp86;
          } else if (null != premiumDiscountOffer) {
            if (premiumDiscountOffer.hasAcknowledged()) {
              if (cResult[44] === tmp5.ackedBadge) {
                let tmp65;
                let tmp66;
                if (cResult[45] === tmp5.premiumDiscountBadge) {
                  tmp65 = cResult[46];
                }
                if (cResult[47] !== tmp5.icon) {
                  const obj12 = {
                    source: AssetRegistryDefault,
                    size: native.Icon.Sizes.EXTRA_SMALL,
                    color: tmp5.icon.color,
                    style: tmp5.icon,
                  };
                  const Icon = native.Icon;
                  const tmp69 = metroImportAll(Icon, obj12);
                  cResult[47] = tmp5.icon;
                  cResult[48] = tmp69;
                  tmp66 = tmp69;
                } else {
                  tmp66 = cResult[48];
                }
                if (cResult[49] === tmp5.text) {
                  let tmp70;
                  let tmp71;
                  if (cResult[50] === tmp5.uppercase) {
                    tmp70 = cResult[51];
                  }
                  const _Symbol5 = Symbol;
                  if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl5 = intl9.intl;
                    const stringResult5 = intl5.string(intl9.t["/DTtr6"]);
                    cResult[52] = stringResult5;
                    tmp71 = stringResult5;
                  } else {
                    tmp71 = cResult[52];
                  }
                  if (cResult[53] === badgeTextVariant) {
                    let tmp73;
                    if (cResult[54] === tmp70) {
                      tmp73 = cResult[55];
                    }
                    if (cResult[56] === tmp65) {
                      if (cResult[57] === tmp66) {
                        let tmp76;
                        if (cResult[58] === tmp73) {
                          tmp76 = cResult[59];
                        }
                        return tmp76;
                      }
                    }
                    const obj13 = { style: tmp65, children: items2 };
                    items2 = [tmp66, tmp73];
                    const tmp79 = React4(View, obj13);
                    cResult[56] = tmp65;
                    cResult[57] = tmp66;
                    cResult[58] = tmp73;
                    cResult[59] = tmp79;
                    tmp76 = tmp79;
                  }
                  const obj14 = {
                    variant: badgeTextVariant,
                    color: "interactive-text-default",
                    style: tmp70,
                    children: tmp71,
                  };
                  const tmp75 = metroImportAll(Text_Text.Text, obj14);
                  cResult[53] = badgeTextVariant;
                  cResult[54] = tmp70;
                  cResult[55] = tmp75;
                  tmp73 = tmp75;
                }
                const items3 = [,];
                ({ uppercase: arr8[0], text: arr8[1] } = tmp5);
                cResult[49] = tmp5.text;
                cResult[50] = tmp5.uppercase;
                cResult[51] = items3;
                tmp70 = items3;
              }
              const items4 = [,];
              ({ premiumDiscountBadge: arr7[0], ackedBadge: arr7[1] } = tmp5);
              cResult[44] = tmp5.ackedBadge;
              cResult[45] = tmp5.premiumDiscountBadge;
              cResult[46] = items4;
              tmp65 = items4;
            } else {
              let tmp53;
              const _Symbol3 = Symbol;
              const premiumDiscountBadge = tmp5.premiumDiscountBadge;
              if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                const items5 = ["#db00a4", "#5968f0"];
                cResult[33] = items5;
                tmp53 = items5;
              } else {
                tmp53 = cResult[33];
              }
              if (cResult[34] === tmp5.text) {
                let tmp54;
                let tmp55;
                if (cResult[35] === tmp5.uppercase) {
                  tmp54 = cResult[36];
                }
                const _Symbol4 = Symbol;
                if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl4 = intl9.intl;
                  const stringResult6 = intl4.string(intl9.t["/DTtr6"]);
                  cResult[37] = stringResult6;
                  tmp55 = stringResult6;
                } else {
                  tmp55 = cResult[37];
                }
                if (cResult[38] === badgeTextVariant) {
                  let tmp57;
                  if (cResult[39] === tmp54) {
                    tmp57 = cResult[40];
                  }
                  if (cResult[41] === tmp5.premiumDiscountBadge) {
                    let tmp60;
                    if (cResult[42] === tmp57) {
                      tmp60 = cResult[43];
                    }
                    return tmp60;
                  }
                  const obj15 = {
                    style: premiumDiscountBadge,
                    colors: tmp53,
                    start: ConstantsIOS.HorizontalGradient.START,
                    end: ConstantsIOS.HorizontalGradient.END,
                    children: tmp57,
                  };
                  const tmp63 = LinearGradientDefault;
                  const tmp64 = metroImportAll(tmp63, obj15);
                  cResult[41] = tmp5.premiumDiscountBadge;
                  cResult[42] = tmp57;
                  cResult[43] = tmp64;
                  tmp60 = tmp64;
                }
                const obj16 = { variant: badgeTextVariant, color: "text-overlay-light", style: tmp54, children: tmp55 };
                const tmp59 = metroImportAll(Text_Text.Text, obj16);
                cResult[38] = badgeTextVariant;
                cResult[39] = tmp54;
                cResult[40] = tmp59;
                tmp57 = tmp59;
              }
              const items6 = [,];
              ({ uppercase: arr6[0], text: arr6[1] } = tmp5);
              cResult[34] = tmp5.text;
              cResult[35] = tmp5.uppercase;
              cResult[36] = items6;
              tmp54 = items6;
            }
          } else {
            let tmp52 = null;
            if (null != tmp31) {
              let tmp40;
              if (cResult[60] !== tmp5.text) {
                let text1;
                const tmpResult16 = PlatformUtils;
                if (tmpResult16.isAndroid()) {
                  text1 = tmp5.text;
                }
                cResult[60] = tmp5.text;
                cResult[61] = text1;
                tmp40 = text1;
              } else {
                tmp40 = cResult[61];
              }
              if (cResult[62] === tmp5.uppercase) {
                let tmp42;
                if (cResult[63] === tmp40) {
                  tmp42 = cResult[64];
                }
                if (cResult[65] === tmp31) {
                  if (cResult[66] === badgeTextVariant) {
                    let tmp43;
                    if (cResult[67] === tmp42) {
                      tmp43 = cResult[68];
                    }
                    if (cResult[69] === tmp5.tag) {
                      let tmp46;
                      if (cResult[70] === tmp43) {
                        tmp46 = cResult[71];
                      }
                      tmp52 = tmp46;
                    }
                    const obj17 = {
                      style: tmp5.tag,
                      colors: Gradients.PREMIUM_TIER_2,
                      start: ConstantsIOS.HorizontalGradient.START,
                      end: ConstantsIOS.HorizontalGradient.END,
                      children: tmp43,
                    };
                    const tmp49 = LinearGradientDefault;
                    const tmp51 = metroImportAll(tmp49, obj17);
                    cResult[69] = tmp5.tag;
                    cResult[70] = tmp43;
                    cResult[71] = tmp51;
                    tmp46 = tmp51;
                  }
                }
                const obj18 = { variant: badgeTextVariant, color: "text-overlay-light", style: tmp42, children: tmp31 };
                const tmp45 = metroImportAll(Text_Text.Text, obj18);
                cResult[65] = tmp31;
                cResult[66] = badgeTextVariant;
                cResult[67] = tmp42;
                cResult[68] = tmp45;
                tmp43 = tmp45;
              }
              const items7 = [tmp5.uppercase, tmp40];
              cResult[62] = tmp5.uppercase;
              cResult[63] = tmp40;
              cResult[64] = items7;
              tmp42 = items7;
            }
            return tmp52;
          }
        }
        if (!(!result && hasTier2Premium)) {
          let items8;
          if (hasTier2Premium) {
            items8 = [dismissible_content.DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD];
          }
          cResult[5] = hasTier2Premium;
          cResult[6] = !result && hasTier2Premium;
          cResult[7] = items8;
          tmp20 = items8;
        }
        items8 = [];
      }
      if (trialId === closure_6) {
        let items9;
        if (!(!result && hasTier2Premium)) {
          items9 = [dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE];
        }
        cResult[2] = trialId === closure_6;
        cResult[3] = !result && hasTier2Premium;
        cResult[4] = items9;
      }
      items9 = [];
    }
  : () => {
      let Text;
      let Text2;
      let Text4;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let intl8;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let items8;
      let obj15;
      let obj17;
      let obj9;
      let premiumTypeSubscription;
      let tmp15;
      let tmp19;
      const obj = useBadgeTextVariant;
      const badgeTextVariant = obj.useBadgeTextVariant();
      const tmp4 = closure_10();
      const obj2 = usePremiumTrialOffer;
      const premiumTrialOffer = obj2.usePremiumTrialOffer();
      const obj3 = usePremiumDiscountOffer;
      const premiumDiscountOffer = obj3.usePremiumDiscountOffer();
      const obj5 = PremiumUtils;
      const hasTier2Premium = obj5.useHasTier2Premium();
      const obj6 = DismissibleContentUnsafeUtils;
      const result = obj6.useIsDismissibleContentDismissed_UNSAFE(
        dismissible_content.DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE,
      );
      const items = [SubscriptionStore];
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(items, () =>
        premiumTypeSubscription.getPremiumTypeSubscription(),
      );
      let trialId;
      if (stateFromStores != null) {
        trialId = stateFromStores.trialId;
      }
      useSelectedDismissibleContent;
      if (trialId === closure_6) {
        let items1;
        if (!(!result && hasTier2Premium)) {
          items1 = [dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE];
        }
        [tmp15, r10055] = tmp12(items1, undefined, true);
        _slicedToArray(tmp12(items1, undefined, true), 2);
        useSelectedDismissibleContent;
        if (!(!result && hasTier2Premium)) {
          let items2;
          let stringResult;
          let tmp49Result;
          if (hasTier2Premium) {
            items2 = [dismissible_content.DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD];
          }
          [tmp19, r10067] = tmp17(items2, undefined, true);
          _slicedToArray(tmp17(items2, undefined, true), 2);
          const tmpResult11 = useIsEligibleSenderForReferralProgram;
          const isEligibleSenderForReferralProgram = tmpResult11.useIsEligibleSenderForReferralProgram();
          const tmpResult12 = ReferralProgramUtils;
          const isReferralProgramEntrypointBadgeAcknowledged =
            tmpResult12.useIsReferralProgramEntrypointBadgeAcknowledged();
          const tmpResult13 = usePromotionMarketingComponent;
          const promotionMarketingComponent = tmpResult13.usePromotionMarketingComponent(
            MarketingComponentType.MarketingComponentType.PREMIUM_TAB,
          );
          let prop = null;
          const useSelectedSnowflakeBoundDismissibleContent =
            useSelectedDismissibleContent.useSelectedSnowflakeBoundDismissibleContent;
          const tmpResult14 = useSelectedDismissibleContent;
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
          _slicedToArray(useSelectedSnowflakeBoundDismissibleContent(prop, str2, undefined, true), 2);
          if (null != promotionMarketingComponent) {
            if ("premiumTab" === promotionMarketingComponent.properties.properties.oneofKind) {
              ({ id: obj24.componentId, promotionId: obj24.promotionId } = promotionMarketingComponent);
              const obj4 = {
                acked: tmp29 !== dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
                badgeCopy: promotionMarketingComponent.properties.properties.premiumTab.badgeLabel,
                ackedBadgeCopy: promotionMarketingComponent.properties.properties.premiumTab.acknowledgedBadgeLabel,
                componentId: null,
                promotionId: null,
              };
              return metroImportAll(closure_12, obj4);
            }
          }
          if (tmp15 === dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE) {
            const intl2 = intl9.intl;
            stringResult = intl2.string(intl9.t.uO4bXn);
          } else {
            stringResult = null;
            if (tmp19 === dismissible_content.DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD) {
              const intl = intl9.intl;
              stringResult = intl.string(intl9.t["jyYgZ+"]);
            }
          }
          if (isEligibleSenderForReferralProgram) {
            let tmp34;
            if (!isReferralProgramEntrypointBadgeAcknowledged) {
              const obj7 = { label: intl3.string(intl9.t.RDE0Sc) };
              intl3 = intl9.intl;
              tmp34 = metroImportAll(closure_11, obj7);
            }
            return tmp34;
          }
          if (!result && hasTier2Premium) {
            const obj8 = {
              style: tmp4.tag,
              colors: Gradients.PREMIUM_TIER_2,
              start: ConstantsIOS.HorizontalGradient.START,
              end: ConstantsIOS.HorizontalGradient.END,
              children: metroImportAll(Text4, obj9),
            };
            const tmp54 = LinearGradientDefault;
            obj9 = {
              variant: badgeTextVariant,
              color: "text-overlay-light",
              style: items3,
              children: intl8.string(intl9.t.y2b7CA),
            };
            items3 = [tmp4.uppercase];
            Text4 = Text_Text.Text;
            let text;
            const tmpResult15 = PlatformUtils;
            if (tmpResult15.isAndroid()) {
              text = tmp4.text;
            }
            items3[1] = text;
            intl8 = intl9.intl;
            tmp49Result = metroImportAll(tmp54, obj8);
          } else if (null != premiumTrialOffer) {
            let hasAcknowledged;
            if (premiumTrialOffer != null) {
              hasAcknowledged = premiumTrialOffer.hasAcknowledged;
            }
            const obj10 = {
              acked: true === hasAcknowledged,
              badgeCopy: intl6.string(intl9.t.OS9KPu),
              ackedBadgeCopy: intl7.string(intl9.t.OS9KPu),
            };
            intl6 = intl9.intl;
            intl7 = intl9.intl;
            tmp49Result = metroImportAll(closure_12, obj10);
          } else if (null != premiumDiscountOffer) {
            let tmp44;
            if (premiumDiscountOffer.hasAcknowledged()) {
              const obj11 = { style: items4, children: items5 };
              items4 = [,];
              ({ premiumDiscountBadge: arr6[0], ackedBadge: arr6[1] } = tmp4);
              const obj12 = {
                source: AssetRegistryDefault,
                size: native.Icon.Sizes.EXTRA_SMALL,
                color: tmp4.icon.color,
                style: tmp4.icon,
              };
              const Icon = native.Icon;
              items5 = [metroImportAll(Icon, obj12)];
              const obj13 = {
                variant: badgeTextVariant,
                color: "interactive-text-default",
                style: items6,
                children: intl5.string(intl9.t["/DTtr6"]),
              };
              items6 = [,];
              ({ uppercase: arr8[0], text: arr8[1] } = tmp4);
              const Text3 = Text_Text.Text;
              intl5 = intl9.intl;
              items5[1] = metroImportAll(Text3, obj13);
              tmp44 = React4(View, obj11);
            } else {
              const obj14 = {
                style: tmp4.premiumDiscountBadge,
                colors: ["#db00a4", "#5968f0"],
                start: ConstantsIOS.HorizontalGradient.START,
                end: ConstantsIOS.HorizontalGradient.END,
                children: metroImportAll(Text2, obj15),
              };
              const tmp43 = LinearGradientDefault;
              obj15 = {
                variant: badgeTextVariant,
                color: "text-overlay-light",
                style: items7,
                children: intl4.string(intl9.t["/DTtr6"]),
              };
              items7 = [,];
              ({ uppercase: arr5[0], text: arr5[1] } = tmp4);
              Text2 = Text_Text.Text;
              intl4 = intl9.intl;
              tmp44 = metroImportAll(tmp43, obj14);
            }
            tmp49Result = tmp44;
          } else {
            tmp49Result = null;
            if (null != stringResult) {
              const obj16 = {
                style: tmp4.tag,
                colors: Gradients.PREMIUM_TIER_2,
                start: ConstantsIOS.HorizontalGradient.START,
                end: ConstantsIOS.HorizontalGradient.END,
                children: metroImportAll(Text, obj17),
              };
              obj17 = { variant: badgeTextVariant, color: "text-overlay-light", style: items8, children: stringResult };
              items8 = [tmp4.uppercase];
              const tmp37 = LinearGradientDefault;
              Text = Text_Text.Text;
              let text1;
              const tmpResult16 = PlatformUtils;
              if (tmpResult16.isAndroid()) {
                text1 = tmp4.text;
              }
              items8[1] = text1;
              tmp49Result = metroImportAll(tmp37, obj16);
            }
          }
          tmp34 = tmp49Result;
        }
        items2 = [];
      }
      items1 = [];
    };
let result = size.fileFinishedImporting("modules/premium/native/PremiumTabBadge.tsx");

export default tmp5;
