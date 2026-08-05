// discord_app/modules/guild_profile/native/components/GuildProfileView.tsx
import Text from "Text";
import get_ActivityIndicator from "LinearGradient";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { GuildFeatures } from "ME";
import jsxProd from "TraitEmoji";
import createCacheKey from "createCacheKey";
import { LinearGradient } from "../../../../../_runtime/04676_LinearGradient.js";
import { ManaContext } from "../../../../../discord_common/js/packages/design/native.tsx";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { map } from "../../../../design/tokens/native/useToken.tsx";
import { isThemeLight } from "../../../../design/utils/shared/themes.tsx";
import { useTheme } from "../../../../hooks/useTheme.tsx";
import { useWindowDimensions } from "../../../screen/useWindowDimensions.native.tsx";
import { useProfilePrimaryColor } from "../GuildProfileUtils.tsx";
import { ClickableGameIcon } from "GuildProfileGames.tsx";
import { styles } from "GuildProfileHeader.tsx";
import { TraitEmoji } from "GuildProfileTraits.tsx";

let c4;
let c5;
let c9;
let metroImportAll;
const require = arg1;
function GuildProfileBackground(guildProfile) {
  guildProfile = guildProfile.guildProfile;
  let obj = guildProfile(589);
  const items = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild = outer1_6.getGuild(guildProfile.id);
    if (guild == null) {
      guild = guildProfile(outer1_2[10]).fromGuildProfile(guildProfile);
      const obj = guildProfile(outer1_2[10]);
    }
    const features = guild.features;
    return features.has(outer1_7.DISCOVERABLE);
  });
  if (stateFromStores) {
    if (null != guildProfile.customBanner) {
      obj = { id: null, splash: null, size: null };
      ({ id: obj3[0], customBanner: obj3[1] } = guildProfile);
      obj[2] = tmp3(9146)() * useWindowDimensions().width;
      obj = { style: null, source: null };
      obj[0] = tmp4.imageBanner;
      obj[1] = tmp3(1416).getGuildDiscoverySplashSource(obj);
      return callback(closure_5, obj);
    }
  }
  return callback(GuildProfileGradient, { guildProfile });
}
function GuildProfileGradient(guildProfile) {
  const tmp = createCacheKey();
  let obj = map;
  const token = obj.useToken(Themes.colors.BACKGROUND_BASE_LOWEST);
  const tmp2 = useTheme();
  const profilePrimaryColor = useProfilePrimaryColor.useProfilePrimaryColor(guildProfile.guildProfile, token);
  obj = { style: tmp.colorBanner, start: frozen.START, end: frozen.END, colors: null };
  const items = [profilePrimaryColor, ];
  const obj2 = useProfilePrimaryColor;
  const tmp5 = closure_8;
  const tmp6 = LinearGradient;
  const obj4 = isThemeLight;
  const obj5 = ManaContext;
  if (isThemeDarkResult) {
    let brightenColorResult = obj5.brightenColor(profilePrimaryColor, 0.8);
  } else {
    brightenColorResult = obj5.darkenColor(profilePrimaryColor, 0.8);
  }
  items[1] = brightenColorResult;
  obj[3] = items;
  return tmp5(tmp6, obj);
}
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { container: null, colorBanner: null, imageBanner: null, body: null, error: null, buttonContainer: null, header: null, avatarBackground: null, restrictedAcronym: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 140, width: "100%" };
createCacheKey[2] = { height: 140, width: "100%", objectFit: "cover" };
createCacheKey[3] = { marginTop: 12, paddingHorizontal: 16, gap: 16 };
createCacheKey[4] = { display: "flex", flexDirection: "row", alignItems: "center", gap: 8 };
createCacheKey[5] = { marginTop: 160 };
createCacheKey[6] = { paddingHorizontal: 16, marginTop: -32, display: "flex", flexDirection: "column", gap: 0 };
createCacheKey[7] = { width: 86, height: 86, borderRadius: 28.666666666666668, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" };
createCacheKey[8] = { fontSize: 24 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const frozen = Object.freeze({ START: { x: 0, y: 1 }, END: { x: 1.5, y: 0 } });
const obj1 = { width: 86, height: 86, borderRadius: 28.666666666666668, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" };
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/guild_profile/native/components/GuildProfileView.tsx");

export default function GuildProfileView(guildProfile) {
  guildProfile = guildProfile.guildProfile;
  let tmp = createCacheKey();
  const items = [guildProfile];
  let obj = { style: tmp.container, children: null };
  const memo = React.useMemo(() => {
    if (null == guildProfile) {
      return null;
    } else {
      let obj = outer1_1(outer1_2[12]);
      obj = { id: null, icon: null, size: 96, canAnimate: true };
      ({ id: obj2[0], icon: obj2[1] } = tmp);
      const guildIconSource = obj.getGuildIconSource(obj);
      let uri = null;
      if (typeof guildIconSource !== "number") {
        uri = guildIconSource.uri;
      }
      return uri;
    }
    tmp = guildProfile;
  }, items);
  const items1 = [callback(GuildProfileBackground, { guildProfile }), callback(styles, { profile: guildProfile, guildIconSource: memo }), ];
  obj = { style: tmp.body, children: null };
  let tmp5Result = null != guildProfile.description;
  if (tmp5Result) {
    tmp5Result = guildProfile.description.length > 0;
  }
  if (tmp5Result) {
    obj = { variant: "text-md/medium", color: "text-subtle", children: null };
    obj[2] = guildProfile.description;
    tmp5Result = tmp5(guildProfile(4251).Text, obj);
  }
  const items2 = [tmp5Result, callback(ClickableGameIcon, { profile: guildProfile }), callback(TraitEmoji, { profile: guildProfile })];
  obj[1] = items2;
  items1[2] = closure_9(closure_4, obj);
  obj[1] = items1;
  return closure_9(closure_4, obj);
};
export const getBackgroundForProfile = function getBackgroundForProfile(closure_2, token) {
  const items = [token, ];
  const obj = isThemeLight;
  const obj2 = ManaContext;
  if (isThemeDarkResult) {
    let brightenColorResult = obj2.brightenColor(token, 0.8);
  } else {
    brightenColorResult = obj2.darkenColor(token, 0.8);
  }
  items[1] = brightenColorResult;
  return items;
};
export const useStyles = createCacheKey;
export const DiagonalGradient = frozen;