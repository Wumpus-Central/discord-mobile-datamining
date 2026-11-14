// discord_app/modules/waterwheels/interest/native/InterestGuildProfileBanner.tsx
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import GuildRecordUtils from "../../../../utils/GuildRecordUtils.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import VideoBackground from "../../../calls/native/VideoBackground.tsx";
import utils_getDevicePixelRatioDefault from "../../../../utils/getDevicePixelRatio.web.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
function InterestGuildProfileSolidBanner(profile) {
  profile = profile.profile;
  const tmp = closure_7();
  const guildIconURL = AvatarUtilsDefault.getGuildIconURL({ id: profile.id, icon: profile.icon, size: 80 });
  const obj2 = { id: profile.id, icon: profile.icon, size: 80 };
  const obj3 = VideoBackground;
  const obj5 = { style: null };
  items = [tmp.banner];
  items[1] = {
    backgroundColor: obj3.useDominantColorFromImage(guildIconURL, VideoBackground.memoizedImageSource(guildIconURL)),
  };
  obj5.style = items;
  return <View style={null} />;
}
const View = fn(17).View;
const GuildFeatures = fn(1072).GuildFeatures;
const jsx = fn(21).jsx;
const createStyles = fn(5306);
let closure_7 = createStyles.createStyles({ banner: { height: 140, width: "100%" }, image: { resizeMode: "cover" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGuildProfileBanner.tsx");

export default function InterestGuildProfileBanner(profile) {
  profile = profile.profile;
  const tmp = closure_7();
  items = [GuildStore];
  if (
    obj.useStateFromStores(items, () => {
      guild = GuildStore.getGuild(profile.id);
      if (guild == null) {
        guild = GuildRecordUtils.fromGuildProfile(profile);
      }
      const features = guild.features;
      return features.has(GuildFeatures.DISCOVERABLE);
    })
  ) {
    if (null != profile.customBanner) {
      const obj2 = { id: null, splash: null, size: null };
      ({ id: obj3.id, customBanner: obj3.splash } = profile);
      obj2.size = utils_getDevicePixelRatioDefault() * useWindowDimensionsDefault().width;
      const guildDiscoverySplashSource = AvatarUtilsDefault.getGuildDiscoverySplashSource(obj2);
      const obj4 = { style: null, source: null };
      const items1 = [,];
      ({ banner: arr2[0], image: arr2[1] } = tmp);
      obj4.style = items1;
      obj4.source = guildDiscoverySplashSource;
      return jsx(FastImageDefault, { style: null, source: null });
    }
  }
  return <InterestGuildProfileSolidBanner profile={profile} />;
}
