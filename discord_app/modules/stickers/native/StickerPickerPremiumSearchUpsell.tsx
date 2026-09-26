// === Module 9879: StickerPickerPremiumSearchUpsell ===

// Module 9879 (StickerPickerPremiumSearchUpsell)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PremiumUtils from "PremiumUtils" /* 4488 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Constants = fn(1074);
({ AnalyticEvents: closure_4, AnalyticsPages: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
const PremiumConstants = fn(1374);
({ PremiumSubscriptionSKUs: closure_7, PremiumUpsellTypes: closure_8 } = PremiumConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let obj2 = { nitroIcon: { marginRight: nativeDefault.space.PX_8, alignSelf: "center" } };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/StickerPickerPremiumSearchUpsell.tsx");

export default function StickerPickerPremiumSearchUpsell(guildId) {
  guildId = guildId.guildId;
  let analyticsLocations;
  let useTier0UpsellContent;
  importDefault = useTier0UpsellContent.useRef(false);
  analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  const tmp = closure_10();
  let obj = guildId(analyticsLocations[7]);
  const premiumUpsellConfig = obj.usePremiumUpsellConfig(guildId(analyticsLocations[8]).getUpsellType(guildId(analyticsLocations[9]).EntitlementFeatureNames.STICKERS_EVERYWHERE), analyticsLocations);
  useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  let obj2 = guildId(analyticsLocations[8]);
  const items = [analyticsLocations, guildId, useTier0UpsellContent];
  ({ loading, onPress } = require("usePremiumFeatureUpsellGetNitro")(useTier0UpsellContent, premiumUpsellConfig.onViewAllPerks, constants2.PREMIUM_UPSELL_STICKERS_EVERYWHERE));
  const effect = useTier0UpsellContent.useEffect(() => {
    if (!ref.current) {
      tmp.current = true;
      let obj2 = { type: constants4.STICKERS_EVERYWHERE_INLINE_UPSELL, location: null, location_stack: null, sku_id: null };
      if (null != guildId) {
        let DM_CHANNEL = constants2.GUILD_CHANNEL;
      } else {
        DM_CHANNEL = constants2.DM_CHANNEL;
      }
      const obj3 = { page: DM_CHANNEL, section: constants3.STICKER_PICKER_UPSELL };
      obj2.location = obj3;
      obj2.location_stack = analyticsLocations;
      const obj = AnalyticsUtilsDefault;
      obj2.sku_id = PremiumUtils.castPremiumSubscriptionAsSkuId(useTier0UpsellContent ? React5.TIER_0 : React5.TIER_2);
      obj2 = obj.track(constants.PREMIUM_UPSELL_VIEWED, obj2);
    }
  }, items);
  let obj3 = { body: null, ctaText: null, icon: null, loading: null, onPress: null };
  const tmp3 = require("usePremiumFeatureUpsellGetNitro")(useTier0UpsellContent, premiumUpsellConfig.onViewAllPerks, constants2.PREMIUM_UPSELL_STICKERS_EVERYWHERE);
  const intl = guildId(analyticsLocations[14]).intl;
  obj3.body = intl.string(guildId(analyticsLocations[14]).t.Mr9vVW);
  const intl2 = guildId(analyticsLocations[14]).intl;
  obj3.ctaText = intl2.string(guildId(analyticsLocations[14]).t.pj0XBN);
  const tmp5 = require("PremiumExpressionPickerSearchUpsell");
  obj3.icon = jsx(guildId(analyticsLocations[15]).NitroWheelIcon, { size: "sm", color: require("native").colors.INTERACTIVE_TEXT_ACTIVE, style: tmp.nitroIcon });
  obj3.loading = loading;
  obj3.onPress = onPress;
  return <tmp5 body={null} ctaText={null} icon={null} loading={null} onPress={null} />;
};