// === Module 13812: PremiumGuildPreview ===

// Module 13812 (PremiumGuildPreview)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import shared from "shared" /* 4573 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 4615 */;
import GuildIcon from "GuildIcon" /* 5754 */;
import _modDef13813 from "module_13813" /* 13813 */;
import _modDef13814 from "module_13814" /* 13814 */;
import _modDef13815 from "module_13815" /* 13815 */;
import _modDef13816 from "module_13816" /* 13816 */;
import _modDef13817 from "module_13817" /* 13817 */;
import _modDef13818 from "module_13818" /* 13818 */;
import _modDef13819 from "module_13819" /* 13819 */;
import _modDef13820 from "module_13820" /* 13820 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1182 */;

const GuildIconDefault = GuildIcon;

require = fn;
function PremiumGuildTierPill(arg0) {
  ({ tier, theme } = arg0);
  const tmp = closure_9();
  const obj = { style: tmp.tierPill, children: null };
  const obj2 = { style: tmp.tierPillImage, source: null };
  if (BoostedGuildTiers.NONE === tier) {
    let tmp22 = _modDef13814;
    const tmp21 = _modDef13813;
    if (obj5.isThemeDark(theme)) {
      tmp22 = tmp21;
    }
    let tmp7 = tmp22;
    obj5 = shared;
  } else if (BoostedGuildTiers.TIER_1 === tier) {
    let tmp17 = _modDef13816;
    const tmp16 = _modDef13815;
    if (obj4.isThemeDark(theme)) {
      tmp17 = tmp16;
    }
    tmp7 = tmp17;
    obj4 = shared;
  } else if (BoostedGuildTiers.TIER_2 === tier) {
    let tmp12 = _modDef13818;
    const tmp11 = _modDef13817;
    if (obj3.isThemeDark(theme)) {
      tmp12 = tmp11;
    }
    tmp7 = tmp12;
    obj3 = shared;
  } else if (BoostedGuildTiers.TIER_3 === tier) {
    let tmp8 = _modDef13820;
    const tmp26 = _modDef13819;
    if (obj8.isThemeDark(theme)) {
      tmp8 = tmp26;
    }
    tmp7 = tmp8;
    obj8 = shared;
  }
  obj2.source = tmp7;
  const items = [React5(React4, obj2), ];
  const obj6 = { style: tmp.tierPillText, children: GuildBoostingUtils.getTierName(tier) };
  items[1] = React5(native.LegacyText, obj6);
  obj.children = items;
  return React6(React3, obj);
}
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const BoostedGuildTiers = fn(1074).BoostedGuildTiers;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4722);
let obj2 = { guild: { padding: 16, borderRadius: nativeDefault.radii.xs, flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, guildInfo: { marginLeft: 16 }, guildName: null, tierPill: null, tierPillImage: null, tierPillText: null };
let obj3 = { padding: 16, borderRadius: nativeDefault.radii.xs, flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.guildName = { fontSize: 16, lineHeight: 20, color: fn(5611).DARK_WHITE_500_LIGHT_BLACK_500 };
let obj4 = { fontSize: 16, lineHeight: 20, color: fn(5611).DARK_WHITE_500_LIGHT_BLACK_500 };
obj2.tierPill = { marginTop: 8, padding: 4, paddingRight: 8, alignSelf: "flex-start", flexDirection: "row", borderRadius: 11, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.tierPillImage = { width: 16, height: 16 };
let obj5 = { marginTop: 8, padding: 4, paddingRight: 8, alignSelf: "flex-start", flexDirection: "row", borderRadius: 11, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.tierPillText = { fontSize: 12, lineHeight: 16, marginLeft: 4, color: fn(5611).DARK_WHITE_500_LIGHT_PRIMARY_660 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/PremiumGuildPreview.tsx");

export default function PremiumGuildPreview(guild) {
  guild = guild.guild;
  const tmp = closure_9();
  const items = [ThemeStore];
  const obj2 = { style: null, children: null };
  const items1 = [tmp.guild, guild.style];
  obj2.style = items1;
  const stateFromStores = initialize.useStateFromStores(items, () => theme.theme);
  const obj3 = { guild, size: null, selected: false };
  obj3.size = GuildIcon.GuildIconSizes.LARGE;
  const items2 = [React5(GuildIconDefault, obj3), ];
  const obj4 = { style: tmp.guildInfo, children: null };
  const items3 = [React5(native.LegacyText, { style: tmp.guildName, children: guild.name }), React5(PremiumGuildTierPill, { tier: guild.premiumTier, theme: stateFromStores })];
  obj4.children = items3;
  items2[1] = React6(React3, obj4);
  obj2.children = items2;
  return React6(React3, obj2);
};