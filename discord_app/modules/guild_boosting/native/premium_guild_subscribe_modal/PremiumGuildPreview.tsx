// === Module 14685: PremiumGuildPreview ===

// Module 14685 (PremiumGuildPreview)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1186 */;
import shared from "shared" /* 4801 */;
import FastImageDefault from "FastImage" /* 5481 */;
import GuildIcon from "GuildIcon" /* 7202 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 8623 */;
import _modDef14686 from "module_14686" /* 14686 */;
import _modDef14687 from "module_14687" /* 14687 */;
import _modDef14688 from "module_14688" /* 14688 */;
import _modDef14689 from "module_14689" /* 14689 */;
import _modDef14690 from "module_14690" /* 14690 */;
import _modDef14691 from "module_14691" /* 14691 */;
import _modDef14692 from "module_14692" /* 14692 */;
import _modDef14693 from "module_14693" /* 14693 */;
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
    let tmp5Result8 = _modDef14687;
    const tmp5Result = _modDef14686;
    if (obj5.isThemeDark(theme)) {
      tmp5Result8 = tmp5Result;
    }
    let tmp9 = tmp5Result8;
    obj5 = shared;
  } else if (BoostedGuildTiers.TIER_1 === tier) {
    let tmp5Result10 = _modDef14689;
    const tmp5Result9 = _modDef14688;
    if (obj4.isThemeDark(theme)) {
      tmp5Result10 = tmp5Result9;
    }
    tmp9 = tmp5Result10;
    obj4 = shared;
  } else if (BoostedGuildTiers.TIER_2 === tier) {
    let tmp5Result12 = _modDef14691;
    const tmp5Result11 = _modDef14690;
    if (obj3.isThemeDark(theme)) {
      tmp5Result12 = tmp5Result11;
    }
    tmp9 = tmp5Result12;
    obj3 = shared;
  } else if (BoostedGuildTiers.TIER_3 === tier) {
    let tmp5Result14 = _modDef14693;
    const tmp5Result13 = _modDef14692;
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
const createStyles = fn(4794);
let obj2 = { guild: { padding: 16, borderRadius: nativeDefault.radii.xs, flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, guildInfo: { marginLeft: 16 }, guildName: null, tierPill: null, tierPillImage: null, tierPillText: null };
let obj3 = { padding: 16, borderRadius: nativeDefault.radii.xs, flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.guildName = { fontSize: 16, lineHeight: 20, color: fn(6436).DARK_WHITE_500_LIGHT_BLACK_500 };
let obj4 = { fontSize: 16, lineHeight: 20, color: fn(6436).DARK_WHITE_500_LIGHT_BLACK_500 };
obj2.tierPill = { marginTop: 8, padding: 4, paddingRight: 8, alignSelf: "flex-start", flexDirection: "row", borderRadius: 11, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.tierPillImage = { width: 16, height: 16 };
let obj5 = { marginTop: 8, padding: 4, paddingRight: 8, alignSelf: "flex-start", flexDirection: "row", borderRadius: 11, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.tierPillText = { fontSize: 12, lineHeight: 16, marginLeft: 4, color: fn(6436).DARK_WHITE_500_LIGHT_PRIMARY_660 };
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