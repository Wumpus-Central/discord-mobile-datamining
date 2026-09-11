// === Module 13663: PremiumGuildPreview ===

// Module 13663 (PremiumGuildPreview)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import shared from "shared" /* 4458 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 4500 */;
import GuildIcon from "GuildIcon" /* 5635 */;
import _modDef13664 from "module_13664" /* 13664 */;
import _modDef13665 from "module_13665" /* 13665 */;
import _modDef13666 from "module_13666" /* 13666 */;
import _modDef13667 from "module_13667" /* 13667 */;
import _modDef13668 from "module_13668" /* 13668 */;
import _modDef13669 from "module_13669" /* 13669 */;
import _modDef13670 from "module_13670" /* 13670 */;
import _modDef13671 from "module_13671" /* 13671 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1183 */;

const GuildIconDefault = GuildIcon;

require = fn;
function PremiumGuildTierPill(arg0) {
  ({ tier, theme } = arg0);
  const tmp = closure_9();
  let obj = { style: tmp.tierPill, children: null };
  obj = { style: tmp.tierPillImage, source: null };
  if (BoostedGuildTiers.NONE === tier) {
    let tmp22 = _modDef13665;
    const tmp21 = _modDef13664;
    if (obj5.isThemeDark(theme)) {
      tmp22 = tmp21;
    }
    let tmp7 = tmp22;
    obj5 = shared;
  } else if (BoostedGuildTiers.TIER_1 === tier) {
    let tmp17 = _modDef13667;
    const tmp16 = _modDef13666;
    if (obj4.isThemeDark(theme)) {
      tmp17 = tmp16;
    }
    tmp7 = tmp17;
    obj4 = shared;
  } else if (BoostedGuildTiers.TIER_2 === tier) {
    let tmp12 = _modDef13669;
    const tmp11 = _modDef13668;
    if (obj3.isThemeDark(theme)) {
      tmp12 = tmp11;
    }
    tmp7 = tmp12;
    obj3 = shared;
  } else if (BoostedGuildTiers.TIER_3 === tier) {
    let tmp8 = _modDef13671;
    const tmp26 = _modDef13670;
    if (obj8.isThemeDark(theme)) {
      tmp8 = tmp26;
    }
    tmp7 = tmp8;
    obj8 = shared;
  }
  obj.source = tmp7;
  const items = [React5(React4, obj), ];
  obj = { style: tmp.tierPillText, children: GuildBoostingUtils.getTierName(tier) };
  items[1] = React5(native.LegacyText, obj);
  obj.children = items;
  return React6(React3, obj);
}
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const BoostedGuildTiers = fn(1074).BoostedGuildTiers;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4606);
let createStyles = { guild: null, guildInfo: null, guildName: null, tierPill: null, tierPillImage: null, tierPillText: null };
createStyles = { padding: 16, borderRadius: nativeDefault.radii.xs, flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.guild = createStyles;
createStyles.guildInfo = { marginLeft: 16 };
createStyles.guildName = { fontSize: 16, lineHeight: 20, color: fn(5492).DARK_WHITE_500_LIGHT_BLACK_500 };
let obj1 = { fontSize: 16, lineHeight: 20, color: fn(5492).DARK_WHITE_500_LIGHT_BLACK_500 };
createStyles.tierPill = { marginTop: 8, padding: 4, paddingRight: 8, alignSelf: "flex-start", flexDirection: "row", borderRadius: 11, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.tierPillImage = { width: 16, height: 16 };
const obj2 = { marginTop: 8, padding: 4, paddingRight: 8, alignSelf: "flex-start", flexDirection: "row", borderRadius: 11, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.tierPillText = { fontSize: 12, lineHeight: 16, marginLeft: 4, color: fn(5492).DARK_WHITE_500_LIGHT_PRIMARY_660 };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/PremiumGuildPreview.tsx");

export default function PremiumGuildPreview(guild) {
  guild = guild.guild;
  const tmp = closure_9();
  const items = [ThemeStore];
  let obj = { style: null, children: null };
  const items1 = [tmp.guild, guild.style];
  obj.style = items1;
  const stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  obj = { guild, size: GuildIcon.GuildIconSizes.LARGE, selected: false };
  const items2 = [React5(GuildIconDefault, obj), ];
  const obj1 = { style: tmp.guildInfo, children: null };
  const items3 = [React5(native.LegacyText, { style: tmp.guildName, children: guild.name }), React5(PremiumGuildTierPill, { tier: guild.premiumTier, theme: stateFromStores })];
  obj1.children = items3;
  items2[1] = React6(React3, obj1);
  obj.children = items2;
  return React6(React3, obj);
};