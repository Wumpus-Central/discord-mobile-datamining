// discord_app/modules/guild_settings/native/GuildSettingsServerTagUpsellCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Powerups from "../../../../discord_common/js/shared/shared-constants/Powerups.tsx";
import LinearGradientDefault from "../../../../_runtime/04987_LinearGradient.js";
import GuildPowerupsActionCreators from "../../premium/powerups/GuildPowerupsActionCreators.tsx";
import useGetGuildPowerupBannerImageDefault from "../../premium/powerups/hooks/useGetGuildPowerupBannerImage.tsx";
import GuildPowerupsImageDefault from "../../premium/powerups/native/GuildPowerupsImage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildPowerupsStore from "../../premium/powerups/GuildPowerupsStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const colors = ["rgba(88, 101, 242, 0.3)", "rgba(22, 26, 138, 0.3)"];
const colors2 = ["rgba(151, 151, 159, 0.04)", "rgba(151, 151, 159, 0.04)"];
let c12 = "#29292D";
fn(4560);
let createStyles = {
  card: null,
  imageContainer: null,
  textBlock: null,
  centerText: null,
  body: null,
  backgroundLayer: null,
  powerupImage: null,
};
createStyles = {
  borderRadius: nativeDefault.radii.xl,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: "#29292D",
  overflow: "hidden",
  paddingHorizontal: nativeDefault.space.PX_24,
  paddingTop: nativeDefault.space.PX_20,
  paddingBottom: nativeDefault.space.PX_24,
};
createStyles.card = createStyles;
createStyles.imageContainer = { height: 104, justifyContent: "center" };
createStyles.textBlock = { alignItems: "center" };
createStyles.centerText = { textAlign: "center" };
createStyles.body = { maxWidth: 320 };
createStyles.backgroundLayer = StyleSheet.absoluteFillObject;
createStyles.powerupImage = { width: "92%" };
let closure_13 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagUpsellCard.tsx");

export default function GuildSettingsServerTagUpsellCard(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_13();
  let obj = guildId(504);
  const items = [GuildPowerupsStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(
    items,
    () => {
      const stateForGuild = GuildPowerupsStore.getStateForGuild(guildId);
      let tmp2;
      if (stateForGuild != null) {
        tmp2 = stateForGuild.allPowerups[Powerups.GUILD_POWERUP_TAG_SKU_ID];
      }
      return tmp2;
    },
    items1,
  );
  const tmp6 = useGetGuildPowerupBannerImageDefault(stateFromStores, true);
  const items2 = [guildId];
  const effect = noop.useEffect(() => {
    if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
      const powerupCatalogForGuild = GuildPowerupsActionCreators.fetchPowerupCatalogForGuild(guildId);
    }
  }, items2);
  obj = { style: tmp.card, children: null };
  obj = {
    style: tmp.backgroundLayer,
    colors: null,
    locations: [0, 0.7],
    start: { x: 0.5, y: 0 },
    end: { x: 0.5, y: 1 },
    pointerEvents: "none",
  };
  const items3 = ["rgba(41, 41, 45, 0)", c12];
  obj.colors = items3;
  const items4 = [
    closure_6(LinearGradientDefault, obj),
    closure_6(LinearGradientDefault, { style: tmp.backgroundLayer, colors, start, end, pointerEvents: "none" }),
    closure_6(LinearGradientDefault, {
      style: tmp.backgroundLayer,
      colors: colors2,
      start,
      end,
      pointerEvents: "none",
    }),
  ];
  const obj3 = { spacing: nativeDefault.space.PX_16, children: null };
  const obj4 = {
    style: tmp.imageContainer,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  let tmp10Result = null != tmp6;
  if (tmp10Result) {
    const obj5 = { imageUrl: tmp6, style: tmp.powerupImage };
    tmp10Result = closure_6(GuildPowerupsImageDefault, obj5);
  }
  obj4.children = tmp10Result;
  const items5 = [closure_6(closure_4, obj4), ,];
  const obj6 = { spacing: nativeDefault.space.PX_8, style: tmp.textBlock, children: null };
  const obj7 = { variant: "heading-xl/semibold", color: "text-strong", style: tmp.centerText, children: null };
  const intl = tmp2(1114).intl;
  obj7.children = intl.string(guildId(1114).t["2QmKZ2"]);
  const items6 = [closure_6(guildId(4556).Text, obj7)];
  const obj8 = { variant: "text-sm/medium", color: "text-subtle", style: null, children: null };
  const items7 = [,];
  ({ centerText: arr8[0], body: arr8[1] } = tmp);
  obj8.style = items7;
  const intl2 = tmp2(1114).intl;
  obj8.children = intl2.string(guildId(1114).t.Tg0fDm);
  items6[1] = closure_6(guildId(4556).Text, obj8);
  obj6.children = items6;
  items5[1] = closure_7(guildId(4973).Stack, obj6);
  const obj9 = { variant: "primary", size: "lg", text: null, icon: null, iconPosition: "start", onPress: null };
  const intl3 = tmp2(1114).intl;
  obj9.text = intl3.string(guildId(1114).t.kMRDWs);
  obj9.icon = closure_6(guildId(16218).BoostTier2Icon, { color: "white" });
  obj9.onPress = guildId.onUnlockPress;
  items5[2] = closure_6(guildId(4975).Button, obj9);
  obj3.children = items5;
  items4[3] = closure_7(guildId(4973).Stack, obj3);
  obj.children = items4;
  return closure_7(closure_4, obj);
}
