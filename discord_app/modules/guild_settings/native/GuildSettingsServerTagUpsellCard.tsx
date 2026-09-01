// discord_app/modules/guild_settings/native/GuildSettingsServerTagUpsellCard.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import LinearGradientDefault from "../../../../_runtime/04940_LinearGradient.js";
import useGetGuildPowerupBannerImageDefault from "../../premium/powerups/hooks/useGetGuildPowerupBannerImage.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../premium/powerups/GuildPowerupsStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = { x: 0, y: 0.5 };
let closure_9 = { x: 1, y: 0.5 };
let closure_10 = ["rgba(88, 101, 242, 0.3)", "rgba(22, 26, 138, 0.3)"];
let closure_11 = ["rgba(151, 151, 159, 0.04)", "rgba(151, 151, 159, 0.04)"];
let c12 = "#29292D";
createCacheKey = {
  card: null,
  imageContainer: null,
  textBlock: null,
  centerText: null,
  body: null,
  backgroundLayer: null,
  powerupImage: null,
};
createCacheKey = {
  borderRadius: ThemesDefault.radii.xl,
  borderWidth: 1,
  borderColor: ThemesDefault.colors.BORDER_SUBTLE,
  backgroundColor: "#29292D",
  overflow: "hidden",
  paddingHorizontal: ThemesDefault.space.PX_24,
  paddingTop: ThemesDefault.space.PX_20,
  paddingBottom: ThemesDefault.space.PX_24,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 104, justifyContent: "center" };
createCacheKey[2] = { alignItems: "center" };
createCacheKey[3] = { textAlign: "center" };
createCacheKey[4] = { maxWidth: 320 };
createCacheKey[5] = StyleSheet.absoluteFillObject;
createCacheKey[6] = { width: "92%" };
let closure_13 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting(
  "modules/guild_settings/native/GuildSettingsServerTagUpsellCard.tsx",
);

export default function GuildSettingsServerTagUpsellCard(guildId) {
  guildId = guildId.guildId;
  const tmp = callback2();
  let obj = guildId(589);
  const items = [closure_5];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(
    items,
    () => {
      const stateForGuild = closure_1_5.getStateForGuild(guildId);
      let tmp2;
      if (stateForGuild != null) {
        tmp2 = stateForGuild.allPowerups[guildId(undefined, closure_1_2[7]).GUILD_POWERUP_TAG_SKU_ID];
      }
      return tmp2;
    },
    items1,
  );
  const tmp6 = useGetGuildPowerupBannerImageDefault(stateFromStores, true);
  const items2 = [guildId];
  const effect = React.useEffect(() => {
    if (closure_1_5.shouldFetchCatalogForGuild(guildId)) {
      const powerupCatalogForGuild = guildId(closure_1_2[9]).fetchPowerupCatalogForGuild(guildId);
      const obj = guildId(closure_1_2[9]);
    }
  }, items2);
  obj = { style: tmp.card, children: null };
  obj = {
    style: tmp.backgroundLayer,
    colors: items3,
    locations: [0, 0.7],
    start: { x: 0.5, y: 0 },
    end: { x: 0.5, y: 1 },
    pointerEvents: "none",
  };
  items3 = ["rgba(41, 41, 45, 0)", c12];
  const items4 = [
    callback(LinearGradientDefault, obj),
    callback(LinearGradientDefault, {
      style: tmp.backgroundLayer,
      colors: closure_10,
      start: closure_8,
      end: closure_9,
      pointerEvents: "none",
    }),
    callback(LinearGradientDefault, {
      style: tmp.backgroundLayer,
      colors: closure_11,
      start: closure_8,
      end: closure_9,
      pointerEvents: "none",
    }),
  ];
  const obj3 = { spacing: ThemesDefault.space.PX_16, children: null };
  const obj4 = {
    style: tmp.imageContainer,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  let tmp10Result = null != tmp6;
  if (tmp10Result) {
    const obj5 = { imageUrl: null, style: null };
    obj5[0] = tmp6;
    obj5[1] = tmp.powerupImage;
    tmp10Result = tmp10(tmp5(12087), obj5);
  }
  obj4[3] = tmp10Result;
  const items5 = [callback(closure_4, obj4), ,];
  const obj6 = { spacing: ThemesDefault.space.PX_8, style: tmp.textBlock, children: null };
  const obj7 = { variant: "heading-xl/semibold", color: "text-strong", style: tmp.centerText, children: null };
  const intl = tmp2(1236).intl;
  obj7[3] = intl.string(guildId(1236).t["2QmKZ2"]);
  const items6 = [callback(guildId(4474).Text, obj7)];
  const obj8 = { variant: "text-sm/medium", color: "text-subtle", style: items7, children: null };
  items7 = [,];
  ({ centerText: arr8[0], body: arr8[1] } = tmp);
  const intl2 = tmp2(1236).intl;
  obj8[3] = intl2.string(guildId(1236).t.Tg0fDm);
  items6[1] = callback(guildId(4474).Text, obj8);
  obj6[2] = items6;
  items5[1] = closure_7(guildId(4926).Stack, obj6);
  const obj9 = { variant: "primary", size: "lg", text: null, icon: null, iconPosition: "start", onPress: null };
  const intl3 = tmp2(1236).intl;
  obj9[2] = intl3.string(guildId(1236).t.kMRDWs);
  obj9[3] = callback(guildId(15807).BoostTier2Icon, { color: "white" });
  obj9[5] = guildId.onUnlockPress;
  items5[2] = callback(guildId(4928).Button, obj9);
  obj3[1] = items5;
  items4[3] = closure_7(guildId(4926).Stack, obj3);
  obj[1] = items4;
  return closure_7(closure_4, obj);
}
