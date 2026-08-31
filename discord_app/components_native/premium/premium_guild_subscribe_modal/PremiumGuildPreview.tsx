// === Module 13232: PremiumGuildTierPill ===

// Module 13232 (PremiumGuildTierPill)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getGuildTierFromGuild from "getGuildTierFromGuild" /* 4339 */;
import GuildIconSizes from "GuildIconSizes" /* 5972 */;
import GuildIconSizesDefault from "GuildIconSizes" /* 5972 */;
import registerAssetDefault from "registerAsset" /* 13233 */;
import registerAssetDefault2 from "registerAsset" /* 13234 */;
import registerAssetDefault3 from "registerAsset" /* 13235 */;
import registerAssetDefault4 from "registerAsset" /* 13236 */;
import registerAssetDefault5 from "registerAsset" /* 13237 */;
import registerAssetDefault6 from "registerAsset" /* 13238 */;
import registerAssetDefault7 from "registerAsset" /* 13239 */;
import registerAssetDefault8 from "registerAsset" /* 13240 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_5 from "handleThemeChange" /* 1302 */;
import { BoostedGuildTiers } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
function PremiumGuildTierPill(arg0) {
  ({ tier, theme } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.tierPill, children: null };
  obj = { style: tmp.tierPillImage, source: null };
  if (BoostedGuildTiers.NONE === tier) {
    let tmp22 = registerAssetDefault2;
    const tmp21 = registerAssetDefault;
    if (obj5.isThemeDark(theme)) {
      tmp22 = tmp21;
    }
    let tmp7 = tmp22;
    obj5 = AccessibilityAnnouncer;
  } else if (tmp6.TIER_1 === tier) {
    let tmp17 = registerAssetDefault4;
    const tmp16 = registerAssetDefault3;
    if (obj4.isThemeDark(theme)) {
      tmp17 = tmp16;
    }
    tmp7 = tmp17;
    obj4 = AccessibilityAnnouncer;
  } else if (tmp6.TIER_2 === tier) {
    let tmp12 = registerAssetDefault6;
    const tmp11 = registerAssetDefault5;
    if (obj3.isThemeDark(theme)) {
      tmp12 = tmp11;
    }
    tmp7 = tmp12;
    obj3 = AccessibilityAnnouncer;
  } else if (tmp6.TIER_3 === tier) {
    let tmp8 = registerAssetDefault8;
    const tmp26 = registerAssetDefault7;
    if (obj8.isThemeDark(theme)) {
      tmp8 = tmp26;
    }
    tmp7 = tmp8;
    obj8 = AccessibilityAnnouncer;
  }
  obj[1] = tmp7;
  const items = [closure_7(closure_4, obj), ];
  obj = { style: tmp.tierPillText, children: getGuildTierFromGuild.getTierName(tier) };
  items[1] = closure_7(Button.LegacyText, obj);
  obj[1] = items;
  return closure_8(closure_3, obj);
}
noopAll;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { guild: null, guildInfo: null, guildName: null, tierPill: null, tierPillImage: null, tierPillText: null };
createCacheKey = { padding: 16, borderRadius: ThemesDefault.radii.xs, flexDirection: "row", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginLeft: 16 };
createCacheKey[2] = { fontSize: 16, lineHeight: 20, color: require("result").DARK_WHITE_500_LIGHT_BLACK_500 };
let obj1 = { fontSize: 16, lineHeight: 20, color: require("result").DARK_WHITE_500_LIGHT_BLACK_500 };
createCacheKey[3] = { marginTop: 8, padding: 4, paddingRight: 8, alignSelf: "flex-start", flexDirection: "row", borderRadius: 11, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[4] = { width: 16, height: 16 };
const obj2 = { marginTop: 8, padding: 4, paddingRight: 8, alignSelf: "flex-start", flexDirection: "row", borderRadius: 11, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[5] = { fontSize: 12, lineHeight: 16, marginLeft: 4, color: require("result").DARK_WHITE_500_LIGHT_PRIMARY_660 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj3 = { fontSize: 12, lineHeight: 16, marginLeft: 4, color: require("result").DARK_WHITE_500_LIGHT_PRIMARY_660 };
const result = require("set").fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/PremiumGuildPreview.tsx");

export default function PremiumGuildPreview(guild) {
  guild = guild.guild;
  const tmp = callback3();
  let obj = initialize;
  const items = [closure_5];
  obj = { style: items1, children: null };
  items1 = [tmp.guild, guild.style];
  const stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  obj = { guild, size: GuildIconSizes.GuildIconSizes.LARGE, selected: false };
  const items2 = [callback(GuildIconSizesDefault, obj), ];
  obj1 = { style: tmp.guildInfo, children: null };
  const items3 = [callback(Button.LegacyText, { style: tmp.guildName, children: guild.name }), callback(PremiumGuildTierPill, { tier: guild.premiumTier, theme: stateFromStores })];
  obj1[1] = items3;
  items2[1] = callback2(closure_3, obj1);
  obj[1] = items2;
  return callback2(closure_3, obj);
};