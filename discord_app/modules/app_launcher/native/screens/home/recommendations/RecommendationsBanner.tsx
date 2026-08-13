// discord_app/modules/app_launcher/native/screens/home/recommendations/RecommendationsBanner.tsx
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import createdAt from "createdAt";
import ME from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { preload } from "../../../../../../components_native/common/FastImage.tsx";
import { getAvatarURL } from "../../../../../../utils/AvatarUtils.tsx";
import { useEmbeddedActivityBackground } from "../../../../../activities/utils/useEmbeddedActivityBackground.tsx";
import { hasFetchedColors } from "../../../../../avatar/useAvatarColor.tsx";
import { useDisplayProfile } from "../../../../../user_profile/hooks/useDisplayProfile.tsx";

let closure_6;
let error;
const require = arg1;
let c3 = importAllResult;
({ BANNER_HEIGHT: closure_6, EMPTY_STRING_SNOWFLAKE_ID: error } = ME);
let closure_9 = createCacheKey.createStyles({ imageContainer: { width: "100%", height: "100%" }, image: { width: "100%", height: "100%" } });
let closure_10 = importAllResult.memo((applicationId) => {
  let imageSource;
  let imageStyle;
  let heroMediaDimensions;
  let importDefault;
  let obj = heroMediaDimensions(9598);
  let obj1 = heroMediaDimensions(11527);
  heroMediaDimensions = obj1.useHeroMediaDimensions({ width: obj.useRequiredAppLauncherContext().width });
  obj = { applicationId: applicationId.applicationId, size: heroMediaDimensions.width, names: ["embedded_cover"] };
  const tmp4 = useEmbeddedActivityBackground(obj);
  importDefault = tmp4;
  let items = [heroMediaDimensions, tmp4];
  const memo = importAllResult.useMemo(() => {
    obj = { imageStyle: obj, imageSource: null };
    obj = { backgroundColor: "black", height: heroMediaDimensions.height, width: heroMediaDimensions.width, transform: items };
    obj = { translateY: (outer1_6 - heroMediaDimensions.height) / 2 };
    items = [obj];
    let tmp2;
    if (null != _undefined.url) {
      const obj1 = { uri: null };
      obj1[0] = tmp.url;
      tmp2 = obj1;
    }
    obj[1] = tmp2;
    return obj;
  }, items);
  ({ imageStyle, imageSource } = memo);
  if (null != imageSource) {
    obj = { style: null, source: null, resizeMode: "cover" };
    obj[0] = imageStyle;
    obj[1] = imageSource;
    let tmp8 = jsx(preload, { style: null, source: null, resizeMode: "cover" });
  } else {
    obj1 = { style: null };
    obj1[0] = imageStyle;
    tmp8 = <View style={null} />;
  }
  return tmp8;
});
let closure_11 = importAllResult.memo((applicationBot) => {
  applicationBot = applicationBot.applicationBot;
  let id;
  if (applicationBot != null) {
    id = applicationBot.id;
  }
  if (id == null) {
    id = closure_7;
  }
  const tmp = importDefault;
  const tmp3 = useDisplayProfile;
  const obj = { displayProfile: useDisplayProfile(id), user: null };
  const tmp3Result = useDisplayProfile(id);
  const tmpResult = tmp(8888);
  obj[1] = new createdAt(applicationBot);
  return <tmpResult displayProfile={useDisplayProfile(id)} user={null} />;
});
const memoResult = importAllResult.memo(function RecommendationBanner(arg0) {
  let applicationBot;
  let applicationEmbedded;
  let applicationIcon;
  let applicationId;
  let overrideImageUrl;
  ({ applicationId, applicationBot, overrideImageUrl } = arg0);
  ({ applicationEmbedded, applicationIcon } = arg0);
  const tmp = callback();
  let obj = getAvatarURL;
  const applicationIconSource = obj.getApplicationIconSource({ id: applicationId, icon: applicationIcon, bot: applicationBot, botIconFirst: true });
  hasFetchedColors;
  if (typeof applicationIconSource !== "number") {
    let uri;
    if (applicationIconSource != null) {
      uri = applicationIconSource.uri;
    }
  }
  if (null != overrideImageUrl) {
    obj = { style: null, children: null };
    obj[0] = tmp.imageContainer;
    obj = { style: null, source: null, resizeMode: "cover" };
    obj[0] = tmp.image;
    const obj1 = { uri: null };
    obj1[0] = overrideImageUrl;
    obj[1] = obj1;
    obj[1] = jsx(preload, { style: null, source: null, resizeMode: "cover" });
    let tmp11 = <View style={null} source={null} resizeMode="cover" />;
  } else if (applicationEmbedded) {
    const obj2 = { applicationId: null };
    obj2[0] = applicationId;
    tmp11 = <closure_10 applicationId={null} />;
  } else if (null != applicationBot) {
    const obj3 = { applicationBot: null };
    obj3[0] = applicationBot;
    tmp11 = <closure_11 applicationBot={null} />;
  } else {
    const obj4 = { style: null };
    const obj5 = { backgroundColor: null };
    obj5[0] = tmp8;
    obj4[0] = obj5;
    tmp11 = <View style={null} />;
  }
  return tmp11;
});
const result = require("createdAt").fileFinishedImporting("modules/app_launcher/native/screens/home/recommendations/RecommendationsBanner.tsx");

export default memoResult;