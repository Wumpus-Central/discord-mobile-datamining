// discord_app/components_native/premium/premium_guild_subscribe_modal/PremiumGuildPreview.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import shared from "../../../design/shared.tsx";
import FastImageDefault from "../../common/FastImage.tsx";
import GuildIcon from "../../../modules/guild/native/GuildIcon.tsx";
import GuildBoostingUtils from "../../../utils/GuildBoostingUtils.tsx";
import _modDef16037 from "../../../../_runtime/metro/16037__.js";
import _modDef16038 from "../../../../_runtime/metro/16038__.js";
import _modDef16039 from "../../../../_runtime/metro/16039__.js";
import _modDef16040 from "../../../../_runtime/metro/16040__.js";
import _modDef16041 from "../../../../_runtime/metro/16041__.js";
import _modDef16042 from "../../../../_runtime/metro/16042__.js";
import _modDef16043 from "../../../../_runtime/metro/16043__.js";
import _modDef16044 from "../../../../_runtime/metro/16044__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../../modules/user_settings/ThemeStore.tsx";

const GuildIconDefault = GuildIcon;

require = fn;
function PremiumGuildTierPill(arg0) {
  ({ tier, theme } = arg0);
  const tmp = closure_8();
  const obj = { style: tmp.tierPill, children: null };
  const obj2 = { style: tmp.tierPillImage, source: null };
  if (BoostedGuildTiers.NONE === tier) {
    let tmp5Result8 = _modDef16038;
    const tmp5Result = _modDef16037;
    if (obj5.isThemeDark(theme)) {
      tmp5Result8 = tmp5Result;
    }
    let tmp9 = tmp5Result8;
    obj5 = shared;
  } else if (BoostedGuildTiers.TIER_1 === tier) {
    let tmp5Result10 = _modDef16040;
    const tmp5Result9 = _modDef16039;
    if (obj4.isThemeDark(theme)) {
      tmp5Result10 = tmp5Result9;
    }
    tmp9 = tmp5Result10;
    obj4 = shared;
  } else if (BoostedGuildTiers.TIER_2 === tier) {
    let tmp5Result12 = _modDef16042;
    const tmp5Result11 = _modDef16041;
    if (obj3.isThemeDark(theme)) {
      tmp5Result12 = tmp5Result11;
    }
    tmp9 = tmp5Result12;
    obj3 = shared;
  } else if (BoostedGuildTiers.TIER_3 === tier) {
    let tmp5Result14 = _modDef16044;
    const tmp5Result13 = _modDef16043;
    if (obj8.isThemeDark(theme)) {
      tmp5Result14 = tmp5Result13;
    }
    tmp9 = tmp5Result14;
    obj8 = shared;
  }
  obj2.source = tmp9;
  items = [timestampProducer(FastImageDefault, obj2)];
  const obj6 = { style: tmp.tierPillText, children: null };
  obj6.children = GuildBoostingUtils.getTierName(tier);
  items[1] = timestampProducer(native.LegacyText, obj6);
  obj.children = items;
  return metroImportDefault(View, obj);
}
const View = fn(17).View;
const BoostedGuildTiers = fn(1072).BoostedGuildTiers;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5306);
let obj2 = {
  guild: {
    padding: 16,
    borderRadius: nativeDefault.radii.xs,
    flexDirection: "row",
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  },
  guildInfo: { marginLeft: 16 },
  guildName: null,
  tierPill: null,
  tierPillImage: null,
  tierPillText: null,
};
let obj3 = {
  padding: 16,
  borderRadius: nativeDefault.radii.xs,
  flexDirection: "row",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj2.guildName = { fontSize: 16, lineHeight: 20, color: fn(6961).DARK_WHITE_500_LIGHT_BLACK_500 };
let obj4 = { fontSize: 16, lineHeight: 20, color: fn(6961).DARK_WHITE_500_LIGHT_BLACK_500 };
obj2.tierPill = {
  marginTop: 8,
  padding: 4,
  paddingRight: 8,
  alignSelf: "flex-start",
  flexDirection: "row",
  borderRadius: 11,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj2.tierPillImage = { width: 16, height: 16 };
let obj5 = {
  marginTop: 8,
  padding: 4,
  paddingRight: 8,
  alignSelf: "flex-start",
  flexDirection: "row",
  borderRadius: 11,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj2.tierPillText = { fontSize: 12, lineHeight: 16, marginLeft: 4, color: fn(6961).DARK_WHITE_500_LIGHT_PRIMARY_660 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "components_native/premium/premium_guild_subscribe_modal/PremiumGuildPreview.tsx",
);

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
  const items2 = [timestampProducer(GuildIconDefault, obj3)];
  const obj4 = { style: tmp.guildInfo, children: null };
  const items3 = [
    timestampProducer(native.LegacyText, { style: tmp.guildName, children: guild.name }),
    timestampProducer(PremiumGuildTierPill, { tier: guild.premiumTier, theme: stateFromStores }),
  ];
  obj4.children = items3;
  items2[1] = metroImportDefault(View, obj4);
  obj2.children = items2;
  return metroImportDefault(View, obj2);
}
