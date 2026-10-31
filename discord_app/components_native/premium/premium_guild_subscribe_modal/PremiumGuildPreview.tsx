// discord_app/components_native/premium/premium_guild_subscribe_modal/PremiumGuildPreview.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import shared from "../../../design/shared.tsx";
import FastImageDefault from "../../common/FastImage.tsx";
import GuildIcon from "../../../modules/guild/native/GuildIcon.tsx";
import GuildBoostingUtils from "../../../utils/GuildBoostingUtils.tsx";
import _modDef15497 from "../../../../_runtime/metro/15497__.js";
import _modDef15498 from "../../../../_runtime/metro/15498__.js";
import _modDef15499 from "../../../../_runtime/metro/15499__.js";
import _modDef15500 from "../../../../_runtime/metro/15500__.js";
import _modDef15501 from "../../../../_runtime/metro/15501__.js";
import _modDef15502 from "../../../../_runtime/metro/15502__.js";
import _modDef15503 from "../../../../_runtime/metro/15503__.js";
import _modDef15504 from "../../../../_runtime/metro/15504__.js";
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
    let tmp5Result8 = _modDef15498;
    const tmp5Result = _modDef15497;
    if (obj5.isThemeDark(theme)) {
      tmp5Result8 = tmp5Result;
    }
    let tmp9 = tmp5Result8;
    obj5 = shared;
  } else if (BoostedGuildTiers.TIER_1 === tier) {
    let tmp5Result10 = _modDef15500;
    const tmp5Result9 = _modDef15499;
    if (obj4.isThemeDark(theme)) {
      tmp5Result10 = tmp5Result9;
    }
    tmp9 = tmp5Result10;
    obj4 = shared;
  } else if (BoostedGuildTiers.TIER_2 === tier) {
    let tmp5Result12 = _modDef15502;
    const tmp5Result11 = _modDef15501;
    if (obj3.isThemeDark(theme)) {
      tmp5Result12 = tmp5Result11;
    }
    tmp9 = tmp5Result12;
    obj3 = shared;
  } else if (BoostedGuildTiers.TIER_3 === tier) {
    let tmp5Result14 = _modDef15504;
    const tmp5Result13 = _modDef15503;
    if (obj8.isThemeDark(theme)) {
      tmp5Result14 = tmp5Result13;
    }
    tmp9 = tmp5Result14;
    obj8 = shared;
  }
  obj2.source = tmp9;
  const items = [timestampProducer(FastImageDefault, obj2)];
  const obj6 = { style: tmp.tierPillText, children: null };
  obj6.children = GuildBoostingUtils.getTierName(tier);
  items[1] = timestampProducer(native.LegacyText, obj6);
  obj.children = items;
  return React5(View, obj);
}
const View = fn(17).View;
const BoostedGuildTiers = fn(1072).BoostedGuildTiers;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5014);
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
obj2.guildName = { fontSize: 16, lineHeight: 20, color: fn(6778).DARK_WHITE_500_LIGHT_BLACK_500 };
let obj4 = { fontSize: 16, lineHeight: 20, color: fn(6778).DARK_WHITE_500_LIGHT_BLACK_500 };
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
obj2.tierPillText = { fontSize: 12, lineHeight: 16, marginLeft: 4, color: fn(6778).DARK_WHITE_500_LIGHT_PRIMARY_660 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "components_native/premium/premium_guild_subscribe_modal/PremiumGuildPreview.tsx",
);

export default function PremiumGuildPreview(guild) {
  guild = guild.guild;
  const tmp = closure_8();
  const items = [ThemeStore];
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
  items2[1] = React5(View, obj4);
  obj2.children = items2;
  return React5(View, obj2);
}
