// === Module 11730: RecommendationsBanner ===

// Module 11730 (RecommendationsBanner)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import FastImageDefault from "FastImage" /* 5981 */;
import useAvatarColorDefault from "useAvatarColor" /* 7826 */;
import useDisplayProfileDefault from "useDisplayProfile" /* 7868 */;
import UserProfileBannerDefault from "UserProfileBanner" /* 7929 */;
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground" /* 9184 */;
import AppLauncherContext from "AppLauncherContext" /* 11007 */;
import HeroMedia from "HeroMedia" /* 11722 */;
import react from "react" /* 19 */;
import UserRecord from "UserRecord" /* 1391 */;
import Constants from "Constants" /* 1085 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let importDefault;

let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ BANNER_HEIGHT: metroRequire, EMPTY_STRING_SNOWFLAKE_ID: metroImportDefault } = Constants);
const jsx = Fragment.jsx;
let closure_9 = createStyles.createStyles({ imageContainer: { width: "100%", height: "100%" }, image: { width: "100%", height: "100%" } });
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((applicationId) => {
  let imageSource;
  let imageStyle;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(20);
  applicationId = applicationId.applicationId;
  const obj2 = AppLauncherContext;
  const width = obj2.useRequiredAppLauncherContext().width;
  if (cResult[0] !== width) {
    const obj3 = { width };
    cResult[0] = width;
    cResult[1] = obj3;
    tmp4 = obj3;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = HeroMedia;
  size = tmpResult.useHeroMediaDimensions(tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = ["embedded_cover"];
    cResult[2] = items;
    tmp5 = items;
  } else {
    tmp5 = cResult[2];
  }
  if (cResult[3] === applicationId) {
    let tmp6;
    let tmp11;
    if (cResult[4] === size.width) {
      tmp6 = cResult[5];
    }
    const tmp8 = useEmbeddedActivityBackgroundDefault(tmp6);
    const result = (metroRequire - size.height) / 2;
    if (cResult[6] !== result) {
      const items1 = [{ translateY: result }];
      const obj4 = { translateY: result };
      cResult[6] = result;
      cResult[7] = items1;
      tmp11 = items1;
    } else {
      tmp11 = cResult[7];
    }
    if (cResult[8] === size.height) {
      if (cResult[9] === size.width) {
        let tmp12;
        let tmp13;
        if (cResult[10] === tmp11) {
          tmp12 = cResult[11];
        }
        if (cResult[12] !== tmp8.url) {
          let tmp15;
          if (null != tmp8.url) {
            tmp15 = { uri: tmp8.url };
            const obj5 = { uri: tmp8.url };
          }
          cResult[12] = tmp8.url;
          cResult[13] = tmp15;
          tmp13 = tmp15;
        } else {
          tmp13 = cResult[13];
        }
        if (cResult[14] === tmp12) {
          let tmp16;
          let tmp21;
          if (cResult[15] === tmp13) {
            tmp16 = cResult[16];
          }
          ({ imageStyle, imageSource } = tmp16);
          if (cResult[17] === imageSource) {
            let tmp17;
            if (cResult[18] === imageStyle) {
              tmp17 = cResult[19];
            }
            return tmp17;
          }
          if (null != imageSource) {
            tmp21 = jsx(FastImageDefault, { style: imageStyle, source: imageSource, resizeMode: "cover" });
          } else {
            tmp21 = <View style={imageStyle} />;
          }
          cResult[17] = imageSource;
          cResult[18] = imageStyle;
          cResult[19] = tmp21;
          tmp17 = tmp21;
        }
        const obj9 = { imageStyle: tmp12, imageSource: tmp13 };
        cResult[14] = tmp12;
        cResult[15] = tmp13;
        cResult[16] = obj9;
        tmp16 = obj9;
      }
    }
    const size1 = { backgroundColor: "black", height: null, width: null, transform: tmp11 };
    ({ height: obj7.height, width: obj7.width } = size);
    cResult[8] = size.height;
    cResult[9] = size.width;
    cResult[10] = tmp11;
    cResult[11] = size1;
    tmp12 = size1;
  }
  const obj10 = { applicationId, size: size.width, names: tmp5 };
  cResult[3] = applicationId;
  cResult[4] = size.width;
  cResult[5] = obj10;
  tmp6 = obj10;
}) : ((applicationId) => {
  let imageSource;
  let imageStyle;
  let tmp8;
  let url;
  let heroMediaDimensions;
  importDefault = undefined;
  applicationId = applicationId.applicationId;
  let obj = heroMediaDimensions(11007);
  const width = obj.useRequiredAppLauncherContext().width;
  let obj2 = heroMediaDimensions(11722);
  heroMediaDimensions = obj2.useHeroMediaDimensions({ width });
  let obj3 = { applicationId, size: heroMediaDimensions.width, names: ["embedded_cover"] };
  const tmp4 = useEmbeddedActivityBackgroundDefault(obj3);
  importDefault = tmp4;
  let items = [heroMediaDimensions, tmp4];
  const memo = react.useMemo(() => {
    let items;
    let tmp2;
    const obj = { imageStyle: size, imageSource: tmp2 };
    size = { backgroundColor: "black", height: heroMediaDimensions.height, width: heroMediaDimensions.width, transform: items };
    items = [];
    const obj2 = { translateY: (metroRequire - heroMediaDimensions.height) / 2 };
    items[0] = obj2;
    tmp2 = undefined;
    if (null != url.url) {
      tmp2 = { uri: tmp.url };
      const obj3 = { uri: tmp.url };
    }
    return obj;
  }, items);
  ({ imageStyle, imageSource } = memo);
  if (null != imageSource) {
    tmp8 = jsx(FastImageDefault, { style: imageStyle, source: imageSource, resizeMode: "cover" });
  } else {
    tmp8 = <View style={imageStyle} />;
  }
  return tmp8;
}));
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = memo2(ReactCompilerGating.isReactCompilerEnabled() ? (function(applicationBot) {
  let tmp7;
  const obj = react2;
  const cResult = obj.c(5);
  applicationBot = applicationBot.applicationBot;
  let id;
  const tmp4 = useDisplayProfileDefault;
  if (applicationBot != null) {
    id = applicationBot.id;
  }
  if (id == null) {
    id = metroImportDefault;
  }
  const tmp4Result = tmp4(id);
  if (cResult[0] !== applicationBot) {
    const self = this;
    const self2 = this;
    const tmp10 = new UserRecord(applicationBot);
    cResult[0] = applicationBot;
    cResult[1] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === tmp4Result) {
    let tmp12;
    if (cResult[3] === tmp7) {
      tmp12 = cResult[4];
    }
    return tmp12;
  }
  const tmp13 = jsx(UserProfileBannerDefault, { displayProfile: tmp4Result, user: tmp7 });
  cResult[2] = tmp4Result;
  cResult[3] = tmp7;
  cResult[4] = tmp13;
  tmp12 = tmp13;
}) : ((applicationBot) => {
  applicationBot = applicationBot.applicationBot;
  let id;
  const tmp3 = useDisplayProfileDefault;
  if (applicationBot != null) {
    id = applicationBot.id;
  }
  if (id == null) {
    id = metroImportDefault;
  }
  UserProfileBannerDefault;
  new UserRecord(applicationBot);
  return <tmpResult displayProfile={tmp3(id)} user={new UserRecord(applicationBot)} />;
}));
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((isActivity) => {
  let applicationBot;
  let applicationIcon;
  let applicationId;
  let overrideImageUrl;
  const obj = react2;
  const cResult = obj.c(18);
  ({ applicationId, applicationIcon, applicationBot, overrideImageUrl } = isActivity);
  isActivity = isActivity.isActivity;
  const tmp3 = closure_9();
  if (cResult[0] === applicationBot) {
    if (cResult[1] === applicationIcon) {
      let tmp4;
      let tmp12;
      if (cResult[2] === applicationId) {
        tmp4 = cResult[3];
      }
      let tmp8 = tmp4;
      const tmp7 = useAvatarColorDefault;
      if (typeof tmp4 !== "number") {
        let uri;
        if (tmp4 != null) {
          uri = tmp4.uri;
        }
        tmp8 = uri;
      }
      const tmp7Result = tmp7(tmp8, "");
      if (null != overrideImageUrl) {
        let tmp24;
        if (cResult[4] !== overrideImageUrl) {
          const obj3 = { uri: overrideImageUrl };
          cResult[4] = overrideImageUrl;
          cResult[5] = obj3;
          tmp24 = obj3;
        } else {
          tmp24 = cResult[5];
        }
        if (cResult[6] === tmp3.image) {
          let tmp25;
          if (cResult[7] === tmp24) {
            tmp25 = cResult[8];
          }
          if (cResult[9] === tmp3.imageContainer) {
            let tmp28;
            if (cResult[10] === tmp25) {
              tmp28 = cResult[11];
            }
            tmp12 = tmp28;
          }
          const tmp31 = <View style={tmp3.imageContainer}>{tmp25}</View>;
          cResult[9] = tmp3.imageContainer;
          cResult[10] = tmp25;
          cResult[11] = tmp31;
          tmp28 = tmp31;
        }
        const tmp27 = jsx(FastImageDefault, { style: tmp3.image, source: tmp24, resizeMode: "cover" });
        cResult[6] = tmp3.image;
        cResult[7] = tmp24;
        cResult[8] = tmp27;
        tmp25 = tmp27;
      } else if (isActivity) {
        let tmp20;
        if (cResult[12] !== applicationId) {
          const tmp23 = <closure_10 applicationId={applicationId} />;
          cResult[12] = applicationId;
          cResult[13] = tmp23;
          tmp20 = tmp23;
        } else {
          tmp20 = cResult[13];
        }
        tmp12 = tmp20;
      } else if (null != applicationBot) {
        let tmp16;
        if (cResult[14] !== applicationBot) {
          const tmp19 = <closure_11 applicationBot={applicationBot} />;
          cResult[14] = applicationBot;
          cResult[15] = tmp19;
          tmp16 = tmp19;
        } else {
          tmp16 = cResult[15];
        }
        tmp12 = tmp16;
      } else if (cResult[16] !== tmp7Result) {
        const tmp15 = <View style={{ backgroundColor: tmp7Result }} />;
        cResult[16] = tmp7Result;
        cResult[17] = tmp15;
        tmp12 = tmp15;
      } else {
        tmp12 = cResult[17];
      }
      return tmp12;
    }
  }
  const obj2 = AvatarUtilsDefault;
  const applicationIconSource = obj2.getApplicationIconSource({ id: applicationId, icon: applicationIcon, bot: applicationBot, botIconFirst: true });
  cResult[0] = applicationBot;
  cResult[1] = applicationIcon;
  cResult[2] = applicationId;
  cResult[3] = applicationIconSource;
  tmp4 = applicationIconSource;
}) : ((arg0) => {
  let applicationBot;
  let applicationIcon;
  let applicationId;
  let isActivity;
  let overrideImageUrl;
  let tmp11;
  ({ applicationId, applicationBot, overrideImageUrl } = arg0);
  ({ isActivity, applicationIcon } = arg0);
  const tmp = closure_9();
  const obj = AvatarUtilsDefault;
  const applicationIconSource = obj.getApplicationIconSource({ id: applicationId, icon: applicationIcon, bot: applicationBot, botIconFirst: true });
  useAvatarColorDefault;
  if (typeof applicationIconSource !== "number") {
    let uri;
    if (applicationIconSource != null) {
      uri = applicationIconSource.uri;
    }
  }
  if (null != overrideImageUrl) {
    tmp11 = <View style={tmp.imageContainer}>{null}</View>;
    const obj4 = { uri: overrideImageUrl };
  } else if (isActivity) {
    tmp11 = <closure_10 applicationId={applicationId} />;
  } else if (null != applicationBot) {
    tmp11 = <closure_11 applicationBot={applicationBot} />;
  } else {
    tmp11 = <View style={{ backgroundColor: tmp8 }} />;
    const obj8 = { backgroundColor: tmp8 };
  }
  return tmp11;
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/recommendations/RecommendationsBanner.tsx");

export default memoResult;