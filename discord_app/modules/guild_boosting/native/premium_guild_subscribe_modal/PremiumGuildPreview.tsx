// === Module 14813: PremiumGuildPreview ===

// Module 14813 (PremiumGuildPreview)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1186 */;
import shared from "shared" /* 5050 */;
import FastImageDefault from "FastImage" /* 5730 */;
import GuildIcon from "GuildIcon" /* 7052 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 10363 */;
import _modDef14814 from "module_14814" /* 14814 */;
import _modDef14815 from "module_14815" /* 14815 */;
import _modDef14816 from "module_14816" /* 14816 */;
import _modDef14817 from "module_14817" /* 14817 */;
import _modDef14818 from "module_14818" /* 14818 */;
import _modDef14819 from "module_14819" /* 14819 */;
import _modDef14820 from "module_14820" /* 14820 */;
import _modDef14821 from "module_14821" /* 14821 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1191 */;

const GuildIconDefault = GuildIcon;

require = fn;
function PremiumGuildTierPill(arg0) {
  ({ tier, theme } = arg0);
  const tmp = closure_8();
  const obj = { style: tmp.tierPill, children: null };
  const obj2 = { style: tmp.tierPillImage, source: null };
  if (BoostedGuildTiers.NONE === tier) {
    let tmp5Result8 = _modDef14815;
    const tmp5Result = _modDef14814;
    if (obj5.isThemeDark(theme)) {
      tmp5Result8 = tmp5Result;
    }
    let tmp9 = tmp5Result8;
    obj5 = shared;
  } else if (BoostedGuildTiers.TIER_1 === tier) {
    let tmp5Result10 = _modDef14817;
    const tmp5Result9 = _modDef14816;
    if (obj4.isThemeDark(theme)) {
      tmp5Result10 = tmp5Result9;
    }
    tmp9 = tmp5Result10;
    obj4 = shared;
  } else if (BoostedGuildTiers.TIER_2 === tier) {
    let tmp5Result12 = _modDef14819;
    const tmp5Result11 = _modDef14818;
    if (obj3.isThemeDark(theme)) {
      tmp5Result12 = tmp5Result11;
    }
    tmp9 = tmp5Result12;
    obj3 = shared;
  } else if (BoostedGuildTiers.TIER_3 === tier) {
    let tmp5Result14 = _modDef14821;
    const tmp5Result13 = _modDef14820;
    if (obj8.isThemeDark(theme)) {
      tmp5Result14 = tmp5Result13;
    }
    tmp9 = tmp5Result14;
    obj8 = shared;
  }
  obj2.source = tmp9;
  items = [timestampProducer(FastImageDefault, obj2), ];
  const obj6 = { style: tmp.tierPillText, children: null };
  obj6.children = GuildBoostingUtils.getTierName(tier);
  items[1] = timestampProducer(native.LegacyText, obj6);
  obj.children = items;
  return metroImportDefault(View, obj);
}
const View = fn(17).View;
const BoostedGuildTiers = fn(1071).BoostedGuildTiers;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5043);
let obj2 = { guild: { padding: 16, borderRadius: nativeDefault.radii.xs, flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, guildInfo: { marginLeft: 16 }, guildName: null, tierPill: null, tierPillImage: null, tierPillText: null };
let obj3 = { padding: 16, borderRadius: nativeDefault.radii.xs, flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.guildName = { fontSize: 16, lineHeight: 20, color: fn(6868).DARK_WHITE_500_LIGHT_BLACK_500 };
let obj4 = { fontSize: 16, lineHeight: 20, color: fn(6868).DARK_WHITE_500_LIGHT_BLACK_500 };
obj2.tierPill = { marginTop: 8, padding: 4, paddingRight: 8, alignSelf: "flex-start", flexDirection: "row", borderRadius: 11, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.tierPillImage = { width: 16, height: 16 };
let obj5 = { marginTop: 8, padding: 4, paddingRight: 8, alignSelf: "flex-start", flexDirection: "row", borderRadius: 11, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.tierPillText = { fontSize: 12, lineHeight: 16, marginLeft: 4, color: fn(6868).DARK_WHITE_500_LIGHT_PRIMARY_660 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_boosting/native/premium_guild_subscribe_modal/PremiumGuildPreview.tsx");

export default function PremiumGuildPreview(guild) {
  guild = guild.guild;
  const tmp = closure_8();
  items = [ThemeStore];
  const obj2 = { style: null, children: null };
  const items1 = [tmp.guild, guild.style];
  obj2.style = items1;
  const stateFromStores = initialize.useStateFromStores(items, () => theme.theme);
  const obj3 = { guild, size: null, selected: false };
  obj3.size = GuildIcon.GuildIconSizes.LARGE;
  const items2 = [timestampProducer(GuildIconDefault, obj3), ];
  const obj4 = { style: tmp.guildInfo, children: null };
  const items3 = [timestampProducer(native.LegacyText, { style: tmp.guildName, children: guild.name }), timestampProducer(PremiumGuildTierPill, { tier: guild.premiumTier, theme: stateFromStores })];
  obj4.children = items3;
  items2[1] = metroImportDefault(View, obj4);
  obj2.children = items2;
  return metroImportDefault(View, obj2);
};