// === Module 12092: RecommendationsBanner ===

// Module 12092 (RecommendationsBanner)
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import FastImageDefault from "FastImage" /* 5587 */;
import useAvatarColorDefault from "useAvatarColor" /* 8132 */;
import useDisplayProfileDefault from "useDisplayProfile" /* 8186 */;
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground" /* 9652 */;
import noop from "module_19" /* 19 */;
import UserRecord from "UserRecord" /* 1385 */;

const UserProfileBannerDefault = tmp(8246);
const require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ BANNER_HEIGHT: metroRequire, EMPTY_STRING_SNOWFLAKE_ID: closure_7 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({ imageContainer: { width: "100%", height: "100%" }, image: { width: "100%", height: "100%" } });
let closure_10 = noop.memo((applicationId) => {
  let heroMediaDimensions;
  let obj = heroMediaDimensions(11215);
  let obj1 = heroMediaDimensions(12084);
  heroMediaDimensions = obj1.useHeroMediaDimensions({ width: obj.useRequiredAppLauncherContext().width });
  obj = { applicationId: applicationId.applicationId, size: heroMediaDimensions.width, names: ["embedded_cover"] };
  const tmp4 = useEmbeddedActivityBackgroundDefault(obj);
  importDefault = tmp4;
  let items = [heroMediaDimensions, tmp4];
  const memo = noop.useMemo(() => {
    let obj = { imageStyle: null, imageSource: null };
    const size = { backgroundColor: "black", height: heroMediaDimensions.height, width: heroMediaDimensions.width, transform: null };
    obj = { translateY: (timestampProducer - heroMediaDimensions.height) / 2 };
    const items = [obj];
    size.transform = items;
    obj.imageStyle = size;
    let tmp2;
    if (null != url.url) {
      obj = { uri: tmp.url };
      tmp2 = obj;
    }
    obj.imageSource = tmp2;
    return obj;
  }, items);
  ({ imageStyle, imageSource } = memo);
  if (null != imageSource) {
    obj = { style: imageStyle, source: imageSource, resizeMode: "cover" };
    let tmp8 = jsx(FastImageDefault, { style: imageStyle, source: imageSource, resizeMode: "cover" });
  } else {
    obj1 = { style: imageStyle };
    tmp8 = <View style={imageStyle} />;
  }
  return tmp8;
});
let closure_11 = noop.memo((applicationBot) => {
  applicationBot = applicationBot.applicationBot;
  let id;
  if (applicationBot != null) {
    id = applicationBot.id;
  }
  if (id == null) {
    id = React5;
  }
  const obj = { displayProfile: useDisplayProfileDefault(id), user: null };
  const tmp3Result = useDisplayProfileDefault(id);
  const tmpResult = UserProfileBannerDefault;
  obj.user = new UserRecord(applicationBot);
  return <tmpResult displayProfile={useDisplayProfileDefault(id)} user={null} />;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/recommendations/RecommendationsBanner.tsx");

export default noop.memo(function RecommendationBanner(arg0) {
  ({ applicationId, applicationBot, overrideImageUrl } = arg0);
  ({ applicationEmbedded, applicationIcon } = arg0);
  const tmp = closure_9();
  let obj = AvatarUtilsDefault;
  const applicationIconSource = obj.getApplicationIconSource({ id: applicationId, icon: applicationIcon, bot: applicationBot, botIconFirst: true });
  useAvatarColorDefault;
  if (typeof applicationIconSource !== "number") {
    let uri;
    if (applicationIconSource != null) {
      uri = applicationIconSource.uri;
    }
  }
  if (null != overrideImageUrl) {
    obj = { style: tmp.imageContainer, children: null };
    obj = { style: tmp.image, source: null, resizeMode: "cover" };
    const obj1 = { uri: overrideImageUrl };
    obj.source = obj1;
    obj.children = jsx(FastImageDefault, { style: tmp.image, source: null, resizeMode: "cover" });
    let tmp11 = <View style={tmp.image} source={null} resizeMode="cover" />;
  } else if (applicationEmbedded) {
    const obj2 = { applicationId };
    tmp11 = <closure_10 applicationId={applicationId} />;
  } else if (null != applicationBot) {
    const obj3 = { applicationBot };
    tmp11 = <closure_11 applicationBot={applicationBot} />;
  } else {
    const obj4 = { style: null };
    const obj5 = { backgroundColor: tmp8 };
    obj4.style = obj5;
    tmp11 = <View style={null} />;
  }
  return tmp11;
});