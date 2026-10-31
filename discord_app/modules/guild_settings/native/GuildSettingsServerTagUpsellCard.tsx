// === Module 19748: GuildSettingsServerTagUpsellCard ===

// Module 19748 (GuildSettingsServerTagUpsellCard)
import nativeDefault from "native" /* 575 */;
import Powerups from "Powerups" /* 5233 */;
import LinearGradientDefault from "LinearGradient" /* 5587 */;
import GuildPowerupsActionCreators from "GuildPowerupsActionCreators" /* 14049 */;
import useGetGuildPowerupBannerImageDefault from "useGetGuildPowerupBannerImage" /* 14079 */;
import GuildPowerupsImageDefault from "GuildPowerupsImage" /* 14082 */;
import noop from "module_19" /* 19 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 5229 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const ThemeTypes = fn(1072).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const colors = ["rgba(88, 101, 242, 0.3)", "rgba(22, 26, 138, 0.3)"];
const colors2 = ["rgba(151, 151, 159, 0.04)", "rgba(151, 151, 159, 0.04)"];
let c13 = "#29292D";
const createStyles = fn(5014);
let obj2 = { card: { borderRadius: nativeDefault.radii.xl, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: "#29292D", overflow: "hidden", paddingHorizontal: nativeDefault.space.PX_24, paddingTop: nativeDefault.space.PX_20, paddingBottom: nativeDefault.space.PX_24 }, imageContainer: { height: 104, justifyContent: "center" }, textBlock: { alignItems: "center" }, centerText: { textAlign: "center" }, body: { maxWidth: 320 }, backgroundLayer: StyleSheet.absoluteFillObject, powerupImage: { width: "92%" } };
let closure_14 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagUpsellCard.tsx");

export default function GuildSettingsServerTagUpsellCard(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_14();
  const items = [GuildPowerupsStore];
  const items1 = [guildId];
  const stateFromStores = guildId(504).useStateFromStores(items, () => {
    const stateForGuild = GuildPowerupsStore.getStateForGuild(guildId);
    let tmp2;
    if (stateForGuild != null) {
      tmp2 = stateForGuild.allPowerups[Powerups.GUILD_POWERUP_TAG_SKU_ID];
    }
    return tmp2;
  }, items1);
  const tmp6 = useGetGuildPowerupBannerImageDefault(stateFromStores, true);
  const items2 = [guildId];
  const effect = noop.useEffect(() => {
    if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
      const powerupCatalogForGuild = GuildPowerupsActionCreators.fetchPowerupCatalogForGuild(guildId);
    }
  }, items2);
  const obj2 = { theme: ThemeTypes.DARK, children: null };
  const obj3 = { style: tmp.card, children: null };
  const obj4 = { style: tmp.backgroundLayer, colors: null, locations: [0, 0.7], start: { x: 0.5, y: 0 }, end: { x: 0.5, y: 1 }, pointerEvents: "none" };
  const items3 = ["rgba(41, 41, 45, 0)", c13];
  obj4.colors = items3;
  const items4 = [closure_7(LinearGradientDefault, obj4), closure_7(LinearGradientDefault, { style: tmp.backgroundLayer, colors, start, end, pointerEvents: "none" }), closure_7(LinearGradientDefault, { style: tmp.backgroundLayer, colors: colors2, start, end, pointerEvents: "none" }), ];
  const obj7 = { spacing: nativeDefault.space.PX_16, children: null };
  const obj8 = { style: tmp.imageContainer, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  let tmp8Result = null != tmp6;
  if (tmp8Result) {
    const obj9 = { imageUrl: tmp6, style: tmp.powerupImage };
    tmp8Result = closure_7(GuildPowerupsImageDefault, obj9);
  }
  obj8.children = tmp8Result;
  const items5 = [closure_7(closure_4, obj8), , ];
  const obj10 = { spacing: nativeDefault.space.PX_8, style: tmp.textBlock, children: null };
  const obj11 = { variant: "heading-xl/semibold", color: "text-strong", style: tmp.centerText, children: null };
  const intl = tmp2(1113).intl;
  obj11.children = intl.string(guildId(1113).t["2QmKZ2"]);
  const items6 = [closure_7(guildId(5624).Text, obj11), ];
  const obj12 = { variant: "text-sm/medium", color: "text-subtle", style: null, children: null };
  const items7 = [, ];
  ({ centerText: arr8[0], body: arr8[1] } = tmp);
  obj12.style = items7;
  const intl2 = tmp2(1113).intl;
  obj12.children = intl2.string(guildId(1113).t.Tg0fDm);
  items6[1] = closure_7(guildId(5624).Text, obj12);
  obj10.children = items6;
  items5[1] = closure_8(guildId(6027).Stack, obj10);
  const obj13 = { variant: "primary", size: "lg", text: null, icon: null, iconPosition: "start", onPress: null };
  const intl3 = tmp2(1113).intl;
  obj13.text = intl3.string(guildId(1113).t.kMRDWs);
  obj13.icon = closure_7(guildId(18267).BoostTier2Icon, { color: "white" });
  obj13.onPress = guildId.onUnlockPress;
  items5[2] = closure_7(guildId(5634).Button, obj13);
  obj7.children = items5;
  items4[3] = closure_8(guildId(6027).Stack, obj7);
  obj3.children = items4;
  obj2.children = closure_8(closure_4, obj3);
  return closure_7(guildId(5080).ThemeContextProvider, obj2);
};