// discord_app/modules/guild_settings/native/GuildSettingsServerTagUpsellCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Powerups from "../../../../discord_common/js/shared/shared-constants/Powerups.tsx";
import LinearGradientDefault from "../../../../_runtime/05072_LinearGradient.js";
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
const createStyles = fn(4638);
let obj2 = {
  card: {
    borderRadius: nativeDefault.radii.xl,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    backgroundColor: "#29292D",
    overflow: "hidden",
    paddingHorizontal: nativeDefault.space.PX_24,
    paddingTop: nativeDefault.space.PX_20,
    paddingBottom: nativeDefault.space.PX_24,
  },
  imageContainer: { height: 104, justifyContent: "center" },
  textBlock: { alignItems: "center" },
  centerText: { textAlign: "center" },
  body: { maxWidth: 320 },
  backgroundLayer: StyleSheet.absoluteFillObject,
  powerupImage: { width: "92%" },
};
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagUpsellCard.tsx");

export default function GuildSettingsServerTagUpsellCard(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_13();
  const items = [GuildPowerupsStore];
  const items1 = [guildId];
  const stateFromStores = guildId(504).useStateFromStores(
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
  const obj2 = { style: tmp.card, children: null };
  const obj3 = {
    style: tmp.backgroundLayer,
    colors: null,
    locations: [0, 0.7],
    start: { x: 0.5, y: 0 },
    end: { x: 0.5, y: 1 },
    pointerEvents: "none",
  };
  const items3 = ["rgba(41, 41, 45, 0)", c12];
  obj3.colors = items3;
  const items4 = [
    closure_6(LinearGradientDefault, obj3),
    closure_6(LinearGradientDefault, { style: tmp.backgroundLayer, colors, start, end, pointerEvents: "none" }),
    closure_6(LinearGradientDefault, {
      style: tmp.backgroundLayer,
      colors: colors2,
      start,
      end,
      pointerEvents: "none",
    }),
  ];
  const obj6 = { spacing: nativeDefault.space.PX_16, children: null };
  const obj7 = {
    style: tmp.imageContainer,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  let tmp10Result = null != tmp6;
  if (tmp10Result) {
    const obj8 = { imageUrl: tmp6, style: tmp.powerupImage };
    tmp10Result = closure_6(GuildPowerupsImageDefault, obj8);
  }
  obj7.children = tmp10Result;
  const items5 = [closure_6(closure_4, obj7), ,];
  const obj9 = { spacing: nativeDefault.space.PX_8, style: tmp.textBlock, children: null };
  const obj10 = { variant: "heading-xl/semibold", color: "text-strong", style: tmp.centerText, children: null };
  const intl = tmp2(1115).intl;
  obj10.children = intl.string(guildId(1115).t["2QmKZ2"]);
  const items6 = [closure_6(guildId(4634).Text, obj10)];
  const obj11 = { variant: "text-sm/medium", color: "text-subtle", style: null, children: null };
  const items7 = [,];
  ({ centerText: arr8[0], body: arr8[1] } = tmp);
  obj11.style = items7;
  const intl2 = tmp2(1115).intl;
  obj11.children = intl2.string(guildId(1115).t.Tg0fDm);
  items6[1] = closure_6(guildId(4634).Text, obj11);
  obj9.children = items6;
  items5[1] = closure_7(guildId(5058).Stack, obj9);
  const obj12 = { variant: "primary", size: "lg", text: null, icon: null, iconPosition: "start", onPress: null };
  const intl3 = tmp2(1115).intl;
  obj12.text = intl3.string(guildId(1115).t.kMRDWs);
  obj12.icon = closure_6(guildId(16348).BoostTier2Icon, { color: "white" });
  obj12.onPress = guildId.onUnlockPress;
  items5[2] = closure_6(guildId(5060).Button, obj12);
  obj6.children = items5;
  items4[3] = closure_7(guildId(5058).Stack, obj6);
  obj2.children = items4;
  return closure_7(closure_4, obj2);
}
