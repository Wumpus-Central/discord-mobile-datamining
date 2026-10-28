// discord_app/modules/emoji_picker/native/components/EmojiPickerPremiumSearchUpsell.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import PremiumUtils from "../../../../utils/PremiumUtils.tsx";
import NitroWheelIcon from "../../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import usePremiumFeatureUpsellGetNitroDefault from "../../../premium/roadblocks/native/hooks/usePremiumFeatureUpsellGetNitro.tsx";
import PremiumExpressionPickerSearchUpsellDefault from "../../../premium/roadblocks/native/views/PremiumExpressionPickerSearchUpsell.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const PremiumUtilsDefault = PremiumUtils;

require = fn;
const Constants = fn(1084);
({ AnalyticEvents: hasOwnProperty, AnalyticsPages: metroRequire, AnalyticsSections: closure_7 } = Constants);
const PremiumConstants = fn(1391);
({ PremiumSubscriptionSKUs: closure_8, PremiumUpsellTypes: closure_9, SubscriptionPlans: c10 } = PremiumConstants);
const jsx = fn(21).jsx;
const createStyles = fn(5004);
let closure_12 = createStyles.createStyles({ nitroIcon: { marginRight: 8, alignSelf: "center" } });
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useEmojiPickerPremiumSearchUpsellViewed(guildId) {
      const cResult = guildId(useTier0UpsellContent[7]).c(5);
      guildId = guildId.guildId;
      const analyticsLocations = guildId.analyticsLocations;
      useTier0UpsellContent = guildId.useTier0UpsellContent;
      ref = ref.useRef(false);
      if (cResult[0] === analyticsLocations) {
        if (cResult[1] === guildId) {
          if (cResult[2] === useTier0UpsellContent) {
            let tmp3 = cResult[3];
            let tmp4 = cResult[4];
          }
          const effect = ref.useEffect(tmp3, tmp4);
        }
      }
      const fn = function l() {
        if (!ref.current) {
          tmp.current = true;
          let obj2 = { type: constants4.EMOJI_PICKER_SEARCH, location: null, location_stack: null, sku_id: null };
          if (null != guildId) {
            let DM_CHANNEL = constants2.GUILD_CHANNEL;
          } else {
            DM_CHANNEL = constants2.DM_CHANNEL;
          }
          const obj3 = { page: DM_CHANNEL, section: constants3.EMOJI_PICKER_POPOUT };
          obj2.location = obj3;
          obj2.location_stack = analyticsLocations;
          obj2.sku_id = useTier0UpsellContent ? closure_2_8.TIER_0 : closure_2_8.TIER_2;
          obj2 = AnalyticsUtilsDefault.track(constants.PREMIUM_UPSELL_VIEWED, obj2);
        }
      };
      const items = [analyticsLocations, guildId, useTier0UpsellContent, ref];
      cResult[0] = analyticsLocations;
      cResult[1] = guildId;
      cResult[2] = useTier0UpsellContent;
      cResult[3] = fn;
      cResult[4] = items;
      tmp4 = items;
      tmp3 = fn;
    }
  : function useEmojiPickerPremiumSearchUpsellViewed(guildId) {
      guildId = guildId.guildId;
      const analyticsLocations = guildId.analyticsLocations;
      const useTier0UpsellContent = guildId.useTier0UpsellContent;
      let ref;
      ref = ref.useRef(false);
      const items = [analyticsLocations, guildId, useTier0UpsellContent, ref];
      const effect = ref.useEffect(() => {
        if (!ref.current) {
          tmp.current = true;
          let obj2 = { type: constants4.EMOJI_PICKER_SEARCH, location: null, location_stack: null, sku_id: null };
          if (null != guildId) {
            let DM_CHANNEL = constants2.GUILD_CHANNEL;
          } else {
            DM_CHANNEL = constants2.DM_CHANNEL;
          }
          const obj3 = { page: DM_CHANNEL, section: constants3.EMOJI_PICKER_POPOUT };
          obj2.location = obj3;
          obj2.location_stack = analyticsLocations;
          obj2.sku_id = useTier0UpsellContent ? closure_2_8.TIER_0 : closure_2_8.TIER_2;
          obj2 = AnalyticsUtilsDefault.track(constants.PREMIUM_UPSELL_VIEWED, obj2);
        }
      }, items);
    };
let closure_13 = tmp4;
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useEmojiPickerPremiumSearchUpsellClick(arg0) {
      const cResult = onPress(576).c(6);
      ({ analyticsLocations, useTier0UpsellContent } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const upsellType = onPress(9717).getUpsellType(onPress(5063).EntitlementFeatureNames.EMOJIS_EVERYWHERE);
        cResult[0] = upsellType;
        let first = upsellType;
        const tmpResult = onPress(9717);
      } else {
        first = cResult[0];
      }
      let obj = onPress(576);
      const tmpResult2 = onPress(9706);
      ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(
        useTier0UpsellContent,
        onPress(9706).usePremiumUpsellConfig(first, analyticsLocations).onViewAllPerks,
        constants2.PREMIUM_UPSELL_EMOJI_EVERYWHERE,
      ));
      if (cResult[1] !== onPress) {
        const fn = function u() {
          const currentUser = UserStore.getCurrentUser();
          let result = null == currentUser;
          if (!result) {
            result = PremiumUtilsDefault.canUseEmojisEverywhere(currentUser);
          }
          if (!result) {
            onPress();
          }
        };
        cResult[1] = onPress;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === loading) {
        if (cResult[4] === tmp7) {
          let tmp8 = cResult[5];
        }
        return tmp8;
      }
      const obj2 = { loading, onPress: tmp7 };
      cResult[3] = loading;
      cResult[4] = tmp7;
      cResult[5] = obj2;
      tmp8 = obj2;
      const tmp6 = usePremiumFeatureUpsellGetNitroDefault(
        useTier0UpsellContent,
        onPress(9706).usePremiumUpsellConfig(first, analyticsLocations).onViewAllPerks,
        constants2.PREMIUM_UPSELL_EMOJI_EVERYWHERE,
      );
    }
  : function useEmojiPickerPremiumSearchUpsellClick(arg0) {
      let onPress;
      ({ analyticsLocations, useTier0UpsellContent } = arg0);
      let obj = onPress(9706);
      const tmp = usePremiumFeatureUpsellGetNitroDefault(
        useTier0UpsellContent,
        obj.usePremiumUpsellConfig(
          onPress(9717).getUpsellType(onPress(5063).EntitlementFeatureNames.EMOJIS_EVERYWHERE),
          analyticsLocations,
        ).onViewAllPerks,
        constants2.PREMIUM_UPSELL_EMOJI_EVERYWHERE,
      );
      onPress = tmp.onPress;
      const obj3 = { loading: tmp.loading, onPress: null };
      const items = [onPress];
      obj3.onPress = noop.useCallback(() => {
        const currentUser = UserStore.getCurrentUser();
        let result = null == currentUser;
        if (!result) {
          result = PremiumUtilsDefault.canUseEmojisEverywhere(currentUser);
        }
        if (!result) {
          onPress();
        }
      }, items);
      return obj3;
    };
let closure_14 = tmp5;
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerPremiumSearchUpsell.tsx");

export const useEmojiPickerPremiumSearchUpsellViewed = tmp4;
export const useEmojiPickerPremiumSearchUpsellClick = tmp5;
export const PremiumSearchUpsell = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function EmojiPickerListPremiumSearchUpsell(useTier0UpsellContent) {
        const cResult = c.c(12);
        const tmp4 = closure_12();
        ({ loading, onPress } = closure_14(useTier0UpsellContent));
        closure_13(useTier0UpsellContent);
        if (cResult[0] !== useTier0UpsellContent.useTier0UpsellContent) {
          const intl = util.intl;
          if (useTier0UpsellContent.useTier0UpsellContent) {
            const obj2 = { planName: PremiumUtils.getTierDisplayNameByPlanId(v65535.PREMIUM_MONTH_TIER_0) };
            let formatToPlainStringResult = intl.formatToPlainString(util.t.kWBwlJ, obj2);
            const tmpResult = PremiumUtils;
          } else {
            formatToPlainStringResult = intl.string(util.t["5t3lw+"]);
          }
          cResult[0] = useTier0UpsellContent.useTier0UpsellContent;
          cResult[1] = formatToPlainStringResult;
        } else if (cResult[2] !== useTier0UpsellContent.useTier0UpsellContent) {
          const intl2 = util.intl;
          const string = intl2.string;
          let t = util.t;
          if (useTier0UpsellContent.useTier0UpsellContent) {
            t = t["9CM5v9"];
            let stringResult = string(t);
          } else {
            stringResult = string(t.pj0XBN);
          }
          useTier0UpsellContent = useTier0UpsellContent.useTier0UpsellContent;
          cResult[2] = useTier0UpsellContent;
          cResult[3] = stringResult;
        } else {
          if (cResult[4] !== tmp4.nitroIcon) {
            const obj3 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, style: tmp4.nitroIcon };
            const tmp18 = jsx(NitroWheelIcon.NitroWheelIcon, {
              size: "sm",
              color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
              style: tmp4.nitroIcon,
            });
            cResult[4] = tmp4.nitroIcon;
            cResult[5] = tmp18;
            let tmp15 = tmp18;
          } else {
            tmp15 = cResult[5];
          }
          if (cResult[6] === loading) {
            if (cResult[7] === onPress) {
              if (cResult[8] === tmp7) {
                if (cResult[9] === tmp11) {
                  if (cResult[10] === tmp15) {
                    let tmp19 = cResult[11];
                  }
                  return tmp19;
                }
              }
            }
          }
          const obj4 = { body: tmp7, ctaText: cResult[3], icon: tmp15, loading, onPress };
          const tmp22 = jsx(PremiumExpressionPickerSearchUpsellDefault, {
            body: tmp7,
            ctaText: cResult[3],
            icon: tmp15,
            loading,
            onPress,
          });
          cResult[6] = loading;
          cResult[7] = onPress;
          cResult[8] = tmp7;
          cResult[9] = cResult[3];
          cResult[10] = tmp15;
          cResult[11] = tmp22;
          tmp19 = tmp22;
        }
        const tmp5 = closure_14(useTier0UpsellContent);
      }
    : function EmojiPickerListPremiumSearchUpsell(useTier0UpsellContent) {
        const tmp = closure_12();
        ({ loading, onPress } = closure_14(useTier0UpsellContent));
        closure_13(useTier0UpsellContent);
        const tmp2 = closure_14(useTier0UpsellContent);
        const intl = util.intl;
        if (useTier0UpsellContent.useTier0UpsellContent) {
          const obj = { planName: PremiumUtils.getTierDisplayNameByPlanId(v65535.PREMIUM_MONTH_TIER_0) };
          let formatToPlainStringResult = intl.formatToPlainString(util.t.kWBwlJ, obj);
          let tmp10 = require;
          const tmp8Result = PremiumUtils;
        } else {
          formatToPlainStringResult = intl.string(util.t["5t3lw+"]);
          tmp10 = require;
        }
        const obj2 = { body: formatToPlainStringResult, ctaText: null, icon: null, loading: null, onPress: null };
        const intl2 = tmp10(1125).intl;
        const string = intl2.string;
        const t = tmp10(1125).t;
        if (useTier0UpsellContent.useTier0UpsellContent) {
          let stringResult = string(t["9CM5v9"]);
        } else {
          stringResult = string(t.pj0XBN);
        }
        obj2.ctaText = stringResult;
        obj2.icon = jsx(tmp10(9456).NitroWheelIcon, {
          size: "sm",
          color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
          style: tmp.nitroIcon,
        });
        obj2.loading = loading;
        obj2.onPress = onPress;
        return <tmp7 body={formatToPlainStringResult} ctaText={null} icon={null} loading={null} onPress={null} />;
      },
);
