// discord_app/modules/stickers/native/StickerPickerPremiumSearchUpsell.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Constants = fn(1085);
({ AnalyticEvents: closure_4, AnalyticsPages: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
const PremiumConstants = fn(1391);
({ PremiumSubscriptionSKUs: closure_7, PremiumUpsellTypes: closure_8 } = PremiumConstants);
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = { nitroIcon: { marginRight: nativeDefault.space.PX_8, alignSelf: "center" } };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginRight: nativeDefault.space.PX_8, alignSelf: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/StickerPickerPremiumSearchUpsell.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function StickerPickerPremiumSearchUpsell(guildId) {
      const cResult = guildId(analyticsLocations[7]).c(14);
      guildId = guildId.guildId;
      const tmp4 = closure_10();
      importDefault = useTier0UpsellContent.useRef(false);
      analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const upsellType = tmp(tmp2[9]).getUpsellType(tmp(tmp2[10]).EntitlementFeatureNames.STICKERS_EVERYWHERE);
        cResult[0] = upsellType;
        let first = upsellType;
        const tmpResult = tmp(tmp2[9]);
      } else {
        first = cResult[0];
      }
      let obj = guildId(analyticsLocations[7]);
      let obj2 = useTier0UpsellContent;
      const premiumUpsellConfig = guildId(analyticsLocations[11]).usePremiumUpsellConfig(first, analyticsLocations);
      useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
      const tmpResult2 = guildId(analyticsLocations[11]);
      ({ loading, onPress } = require("usePremiumFeatureUpsellGetNitro")(
        useTier0UpsellContent,
        premiumUpsellConfig.onViewAllPerks,
        constants2.PREMIUM_UPSELL_STICKERS_EVERYWHERE,
      ));
      if (cResult[1] === analyticsLocations) {
        if (cResult[2] === guildId) {
          if (cResult[3] === useTier0UpsellContent) {
            let tmp10 = cResult[4];
            let tmp11 = cResult[5];
          }
          const effect = obj2.useEffect(tmp10, tmp11);
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[15]).intl;
            const stringResult = intl.string(tmp(tmp2[15]).t.Mr9vVW);
            const intl2 = tmp(tmp2[15]).intl;
            const stringResult1 = intl2.string(tmp(tmp2[15]).t.pj0XBN);
            cResult[6] = stringResult;
            cResult[7] = stringResult1;
            let tmp14 = stringResult1;
            let tmp13 = stringResult;
          } else {
            tmp13 = cResult[6];
            tmp14 = cResult[7];
          }
          if (cResult[8] !== tmp4.nitroIcon) {
            let obj3 = { size: "sm", color: tmp5(tmp2[5]).colors.INTERACTIVE_TEXT_ACTIVE, style: tmp4.nitroIcon };
            const tmp19 = jsx(tmp(tmp2[16]).NitroWheelIcon, {
              size: "sm",
              color: tmp5(tmp2[5]).colors.INTERACTIVE_TEXT_ACTIVE,
              style: tmp4.nitroIcon,
            });
            cResult[8] = tmp4.nitroIcon;
            cResult[9] = tmp19;
            let tmp17 = tmp19;
          } else {
            tmp17 = cResult[9];
          }
          if (cResult[10] === loading) {
            if (cResult[11] === onPress) {
              if (cResult[12] === tmp17) {
                let tmp20 = cResult[13];
              }
              return tmp20;
            }
          }
          let obj4 = { body: tmp13, ctaText: tmp14, icon: tmp17, loading, onPress };
          const tmp22 = jsx(tmp5(tmp2[17]), { body: tmp13, ctaText: tmp14, icon: tmp17, loading, onPress });
          cResult[10] = loading;
          cResult[11] = onPress;
          cResult[12] = tmp17;
          cResult[13] = tmp22;
          tmp20 = tmp22;
        }
      }
      class L {
        constructor() {
          if (closure_1.current) {
            return;
          } else {
            flag = true;
            tmp.current = true;
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[13]);
            tmp4 = AnalyticEvents;
            obj1 = { type: null, location: null, location_stack: null, sku_id: null };
            tmp5 = PremiumUpsellTypes;
            obj1.type = PremiumUpsellTypes.STICKERS_EVERYWHERE_INLINE_UPSELL;
            tmp6 = guildId;
            tmp7 = null;
            if (null != guildId) {
              tmp9 = AnalyticsPages;
              DM_CHANNEL = AnalyticsPages.GUILD_CHANNEL;
            } else {
              tmp8 = AnalyticsPages;
              DM_CHANNEL = AnalyticsPages.DM_CHANNEL;
            }
            obj5 = { page: null, section: null };
            obj5.page = DM_CHANNEL;
            tmp10 = AnalyticsSections;
            obj5.section = AnalyticsSections.STICKER_PICKER_UPSELL;
            obj1.location = obj5;
            tmp11 = analyticsLocations;
            obj1.location_stack = analyticsLocations;
            tmp12 = closure_0;
            obj4 = closure_0(tmp3[14]);
            tmp13 = useTier0UpsellContent;
            tmp14 = PremiumSubscriptionSKUs;
            obj1.sku_id = obj4.castPremiumSubscriptionAsSkuId(useTier0UpsellContent ? tmp14.TIER_0 : tmp14.TIER_2);
            obj1 = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
          }
          return;
        }
      }
      const items = [analyticsLocations, guildId, useTier0UpsellContent];
      cResult[1] = analyticsLocations;
      cResult[2] = guildId;
      cResult[3] = useTier0UpsellContent;
      cResult[4] = L;
      cResult[5] = items;
      tmp11 = items;
      tmp10 = L;
      const tmp9 = require("usePremiumFeatureUpsellGetNitro")(
        useTier0UpsellContent,
        premiumUpsellConfig.onViewAllPerks,
        constants2.PREMIUM_UPSELL_STICKERS_EVERYWHERE,
      );
    }
  : function StickerPickerPremiumSearchUpsell(guildId) {
      guildId = guildId.guildId;
      let analyticsLocations;
      let useTier0UpsellContent;
      importDefault = useTier0UpsellContent.useRef(false);
      analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
      const tmp = closure_10();
      let obj = guildId(analyticsLocations[11]);
      const premiumUpsellConfig = obj.usePremiumUpsellConfig(
        guildId(analyticsLocations[9]).getUpsellType(
          guildId(analyticsLocations[10]).EntitlementFeatureNames.STICKERS_EVERYWHERE,
        ),
        analyticsLocations,
      );
      useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
      let obj2 = guildId(analyticsLocations[9]);
      const items = [analyticsLocations, guildId, useTier0UpsellContent];
      ({ loading, onPress } = require("usePremiumFeatureUpsellGetNitro")(
        useTier0UpsellContent,
        premiumUpsellConfig.onViewAllPerks,
        constants2.PREMIUM_UPSELL_STICKERS_EVERYWHERE,
      ));
      const effect = useTier0UpsellContent.useEffect(() => {
        if (!ref.current) {
          tmp.current = true;
          let obj2 = {
            type: constants4.STICKERS_EVERYWHERE_INLINE_UPSELL,
            location: null,
            location_stack: null,
            sku_id: null,
          };
          if (null != guildId) {
            let DM_CHANNEL = constants2.GUILD_CHANNEL;
          } else {
            DM_CHANNEL = constants2.DM_CHANNEL;
          }
          const obj3 = { page: DM_CHANNEL, section: constants3.STICKER_PICKER_UPSELL };
          obj2.location = obj3;
          obj2.location_stack = analyticsLocations;
          const obj = AnalyticsUtilsDefault;
          obj2.sku_id = PremiumUtils.castPremiumSubscriptionAsSkuId(
            useTier0UpsellContent ? React5.TIER_0 : React5.TIER_2,
          );
          obj2 = obj.track(constants.PREMIUM_UPSELL_VIEWED, obj2);
        }
      }, items);
      let obj3 = { body: null, ctaText: null, icon: null, loading: null, onPress: null };
      const tmp3 = require("usePremiumFeatureUpsellGetNitro")(
        useTier0UpsellContent,
        premiumUpsellConfig.onViewAllPerks,
        constants2.PREMIUM_UPSELL_STICKERS_EVERYWHERE,
      );
      const intl = guildId(analyticsLocations[15]).intl;
      obj3.body = intl.string(guildId(analyticsLocations[15]).t.Mr9vVW);
      const intl2 = guildId(analyticsLocations[15]).intl;
      obj3.ctaText = intl2.string(guildId(analyticsLocations[15]).t.pj0XBN);
      const tmp5 = require("PremiumExpressionPickerSearchUpsell");
      obj3.icon = jsx(guildId(analyticsLocations[16]).NitroWheelIcon, {
        size: "sm",
        color: require("native").colors.INTERACTIVE_TEXT_ACTIVE,
        style: tmp.nitroIcon,
      });
      obj3.loading = loading;
      obj3.onPress = onPress;
      return <tmp5 body={null} ctaText={null} icon={null} loading={null} onPress={null} />;
    };
