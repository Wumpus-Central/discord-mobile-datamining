// discord_app/modules/guild_profile/native/components/GuildProfileView.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import GuildRecordUtils from "../../../../utils/GuildRecordUtils.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import themes from "../../../../design/utils/shared/themes.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import LinearGradientDefault from "../../../../../_runtime/05072_LinearGradient.js";
import utils_getDevicePixelRatioDefault from "../../../../utils/getDevicePixelRatio.web.tsx";
import guild_profile_GuildProfileUtils from "../GuildProfileUtils.tsx";
import GuildProfileHeaderDefault from "GuildProfileHeader.tsx";
import GuildProfileGamesDefault from "GuildProfileGames.tsx";
import GuildProfileTraitsDefault from "GuildProfileTraits.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
function GuildProfileBackground(guildProfile) {
  guildProfile = guildProfile.guildProfile;
  const items = [GuildStore];
  const stateFromStores = guildProfile(504).useStateFromStores(items, () => {
    let guild = GuildStore.getGuild(guildProfile.id);
    if (guild == null) {
      guild = GuildRecordUtils.fromGuildProfile(guildProfile);
    }
    const features = guild.features;
    return features.has(GuildFeatures.DISCOVERABLE);
  });
  if (stateFromStores) {
    if (null != guildProfile.customBanner) {
      const obj2 = { id: null, splash: null, size: null };
      ({ id: obj3.id, customBanner: obj3.splash } = guildProfile);
      obj2.size = utils_getDevicePixelRatioDefault() * useWindowDimensionsDefault().width;
      const obj4 = { style: tmp4.imageBanner, source: AvatarUtilsDefault.getGuildDiscoverySplashSource(obj2) };
      return closure_8(closure_5, obj4);
    }
  }
  return closure_8(GuildProfileGradient, { guildProfile });
}
function GuildProfileGradient(guildProfile) {
  const tmp = styles();
  const tmp2 = useThemeDefault();
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  const profilePrimaryColor = guild_profile_GuildProfileUtils.useProfilePrimaryColor(guildProfile.guildProfile, token);
  const obj3 = { style: tmp.colorBanner, start: frozen.START, end: frozen.END, colors: null };
  const items = [profilePrimaryColor];
  const tmp6 = LinearGradientDefault;
  const obj5 = native;
  if (isThemeDarkResult) {
    let brightenColorResult = obj5.brightenColor(profilePrimaryColor, 0.8);
  } else {
    brightenColorResult = obj5.darkenColor(profilePrimaryColor, 0.8);
  }
  items[1] = brightenColorResult;
  obj3.colors = items;
  return React6(tmp6, obj3);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const GuildFeatures = fn(1074).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4638);
let obj2 = {
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  colorBanner: { height: 140, width: "100%" },
  imageBanner: { height: 140, width: "100%", objectFit: "cover" },
  body: { marginTop: 12, paddingHorizontal: 16, gap: 16 },
  error: { display: "flex", flexDirection: "row", alignItems: "center", gap: 8 },
  buttonContainer: { marginTop: 160 },
  header: { paddingHorizontal: 16, marginTop: -32, display: "flex", flexDirection: "column", gap: 0 },
  avatarBackground: null,
  restrictedAcronym: null,
};
let size = {
  width: 86,
  height: 86,
  borderRadius: 28.666666666666668,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
};
obj2.avatarBackground = size;
obj2.restrictedAcronym = { fontSize: 24 };
const styles = createStyles.createStyles(obj2);
const frozen = Object.freeze({ START: { x: 0, y: 1 }, END: { x: 1.5, y: 0 } });
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileView.tsx");

export default function GuildProfileView(guildProfile) {
  guildProfile = guildProfile.guildProfile;
  const tmp = styles();
  const items = [guildProfile];
  const obj = { style: tmp.container, children: null };
  const memo = noop.useMemo(() => {
    if (null == guildProfile) {
      return null;
    } else {
      ({ id: obj2.id, icon: obj2.icon } = guildProfile);
      const guildIconSource = AvatarUtilsDefault.getGuildIconSource({
        id: null,
        icon: null,
        size: 96,
        canAnimate: true,
      });
      let uri = null;
      if (typeof guildIconSource !== "number") {
        uri = guildIconSource.uri;
      }
      return uri;
    }
  }, items);
  const items1 = [
    closure_8(GuildProfileBackground, { guildProfile }),
    closure_8(GuildProfileHeaderDefault, { profile: guildProfile, guildIconSource: memo }),
  ];
  const obj2 = { style: tmp.body, children: null };
  let tmp5Result = null != guildProfile.description;
  if (tmp5Result) {
    tmp5Result = guildProfile.description.length > 0;
  }
  if (tmp5Result) {
    const obj3 = { variant: "text-md/medium", color: "text-subtle", children: guildProfile.description };
    tmp5Result = closure_8(guildProfile(4634).Text, obj3);
  }
  const items2 = [
    tmp5Result,
    closure_8(GuildProfileGamesDefault, { profile: guildProfile }),
    closure_8(GuildProfileTraitsDefault, { profile: guildProfile }),
  ];
  obj2.children = items2;
  items1[2] = closure_9(closure_4, obj2);
  obj.children = items1;
  return closure_9(closure_4, obj);
}
export const getBackgroundForProfile = function getBackgroundForProfile(theme, token) {
  const items = [token];
  const obj2 = native;
  if (isThemeDarkResult) {
    let brightenColorResult = obj2.brightenColor(token, 0.8);
  } else {
    brightenColorResult = obj2.darkenColor(token, 0.8);
  }
  items[1] = brightenColorResult;
  return items;
};
export const useStyles = styles;
export const DiagonalGradient = frozen;
