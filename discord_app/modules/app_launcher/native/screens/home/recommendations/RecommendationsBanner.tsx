// discord_app/modules/app_launcher/native/screens/home/recommendations/RecommendationsBanner.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import AvatarUtilsDefault from "../../../../../../utils/AvatarUtils.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import useAvatarColorDefault from "../../../../../avatar/useAvatarColor.tsx";
import useDisplayProfileDefault from "../../../../../user_profile/hooks/useDisplayProfile.tsx";
import UserProfileBannerDefault from "../../../../../user_profile/native/UserProfileBanner.tsx";
import useEmbeddedActivityBackgroundDefault from "../../../../../activities/utils/useEmbeddedActivityBackground.tsx";
import AppLauncherContext from "../../../AppLauncherContext.tsx";
import HeroMedia from "../../application_view/activity/HeroMedia.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import UserRecord from "../../../../../../records/UserRecord.tsx";

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ BANNER_HEIGHT: metroRequire, EMPTY_STRING_SNOWFLAKE_ID: closure_7 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_9 = createStyles.createStyles({
  imageContainer: { width: "100%", height: "100%" },
  image: { width: "100%", height: "100%" },
});
let ReactCompilerGating = fn(558);
let closure_10 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (applicationId) => {
        const cResult = c.c(20);
        applicationId = applicationId.applicationId;
        const width = AppLauncherContext.useRequiredAppLauncherContext().width;
        if (cResult[0] !== width) {
          const obj4 = { width };
          cResult[0] = width;
          cResult[1] = obj4;
          let tmp3 = obj4;
        } else {
          tmp3 = cResult[1];
        }
        const size = HeroMedia.useHeroMediaDimensions(tmp3);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const items = ["embedded_cover"];
          cResult[2] = items;
          let tmp4 = items;
        } else {
          tmp4 = cResult[2];
        }
        if (cResult[3] === applicationId) {
          if (cResult[4] === size.width) {
            let tmp5 = cResult[5];
          }
          let tmp6 = importDefault;
          const tmp7 = useEmbeddedActivityBackgroundDefault(tmp5);
          const result = (timestampProducer - size.height) / 2;
          if (cResult[6] !== result) {
            const obj5 = { translateY: result };
            const items1 = [obj5];
            cResult[6] = result;
            cResult[7] = items1;
            let tmp10 = items1;
          } else {
            tmp10 = cResult[7];
          }
          if (cResult[8] === size.height) {
            if (cResult[9] === size.width) {
              if (cResult[10] === tmp10) {
                let tmp11 = cResult[11];
              }
              if (cResult[12] !== tmp7.url) {
                let tmp14;
                if (null != tmp7.url) {
                  const obj6 = { uri: tmp7.url };
                  tmp14 = obj6;
                }
                cResult[12] = tmp7.url;
                cResult[13] = tmp14;
                let tmp12 = tmp14;
              } else {
                tmp12 = cResult[13];
              }
              if (cResult[14] === tmp11) {
                if (cResult[15] === tmp12) {
                  let tmp15 = cResult[16];
                }
                ({ imageStyle, imageSource } = tmp15);
                if (cResult[17] === imageSource) {
                  if (cResult[18] === imageStyle) {
                    return cResult[19];
                  }
                }
                if (null != imageSource) {
                  tmp6 = tmp6(5974);
                  const obj = { style: imageStyle, source: imageSource, resizeMode: "cover" };
                  let tmp19 = <tmp6 style={imageStyle} source={imageSource} resizeMode="cover" />;
                } else {
                  const obj7 = { style: imageStyle };
                  tmp19 = <View style={imageStyle} />;
                }
                cResult[17] = imageSource;
                cResult[18] = imageStyle;
                cResult[19] = tmp19;
              }
              const obj9 = { imageStyle: tmp11, imageSource: tmp12 };
              cResult[14] = tmp11;
              cResult[15] = tmp12;
              cResult[16] = obj9;
              tmp15 = obj9;
            }
          }
          const size1 = { backgroundColor: "black", height: null, width: null, transform: null };
          ({ height: obj8.height, width: obj8.width } = size);
          size1.transform = tmp10;
          cResult[8] = size.height;
          cResult[9] = size.width;
          cResult[10] = tmp10;
          cResult[11] = size1;
          tmp11 = size1;
        }
        const obj10 = { applicationId, size: size.width, names: tmp4 };
        cResult[3] = applicationId;
        cResult[4] = size.width;
        cResult[5] = obj10;
        tmp5 = obj10;
        const tmpResult = HeroMedia;
      }
    : (applicationId) => {
        let heroMediaDimensions;
        let obj = heroMediaDimensions(10994);
        heroMediaDimensions = heroMediaDimensions(11708).useHeroMediaDimensions({
          width: obj.useRequiredAppLauncherContext().width,
        });
        const tmp4 = useEmbeddedActivityBackgroundDefault({
          applicationId: applicationId.applicationId,
          size: heroMediaDimensions.width,
          names: ["embedded_cover"],
        });
        importDefault = tmp4;
        let items = [heroMediaDimensions, tmp4];
        const memo = noop.useMemo(() => {
          const obj = { imageStyle: null, imageSource: null };
          const size = {
            backgroundColor: "black",
            height: heroMediaDimensions.height,
            width: heroMediaDimensions.width,
            transform: null,
          };
          const items = [{ translateY: (timestampProducer - heroMediaDimensions.height) / 2 }];
          size.transform = items;
          obj.imageStyle = size;
          let tmp2;
          if (null != url.url) {
            const obj3 = { uri: tmp.url };
            tmp2 = obj3;
          }
          obj.imageSource = tmp2;
          return obj;
        }, items);
        ({ imageStyle, imageSource } = memo);
        if (null != imageSource) {
          const obj4 = { style: imageStyle, source: imageSource, resizeMode: "cover" };
          let tmp8 = jsx(FastImageDefault, { style: imageStyle, source: imageSource, resizeMode: "cover" });
        } else {
          const obj5 = { style: imageStyle };
          tmp8 = <View style={imageStyle} />;
        }
        return tmp8;
      },
);
ReactCompilerGating = fn(558);
let closure_11 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (applicationBot) => {
        const cResult = c.c(5);
        applicationBot = applicationBot.applicationBot;
        let id;
        if (applicationBot != null) {
          id = applicationBot.id;
        }
        if (id == null) {
          id = React5;
        }
        const tmp4Result = useDisplayProfileDefault(id);
        if (cResult[0] !== applicationBot) {
          const tmp12 = new UserRecord(applicationBot);
          cResult[0] = applicationBot;
          cResult[1] = tmp12;
          let tmp7 = tmp12;
        } else {
          tmp7 = cResult[1];
        }
        if (cResult[2] === tmp4Result) {
          if (cResult[3] === tmp7) {
            let tmp14 = cResult[4];
          }
          return tmp14;
        }
        const tmp15 = jsx(UserProfileBannerDefault, { displayProfile: tmp4Result, user: tmp7 });
        cResult[2] = tmp4Result;
        cResult[3] = tmp7;
        cResult[4] = tmp15;
        tmp14 = tmp15;
      }
    : (applicationBot) => {
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
      },
);
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/home/recommendations/RecommendationsBanner.tsx",
);

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (isActivity) => {
        const cResult = c.c(18);
        ({ applicationId, applicationIcon, applicationBot, overrideImageUrl } = isActivity);
        let imageContainer = closure_9();
        if (cResult[0] === applicationBot) {
          if (cResult[1] === applicationIcon) {
            if (cResult[2] === applicationId) {
              let tmp3 = cResult[3];
            }
            let tmp7 = tmp3;
            if (typeof tmp3 !== "number") {
              let uri;
              if (tmp3 != null) {
                uri = tmp3.uri;
              }
              tmp7 = uri;
            }
            const tmp6Result = useAvatarColorDefault(tmp7, "");
            if (null != overrideImageUrl) {
              if (cResult[4] !== overrideImageUrl) {
                const obj3 = { uri: overrideImageUrl };
                cResult[4] = overrideImageUrl;
                cResult[5] = obj3;
                let tmp25 = obj3;
              } else {
                tmp25 = cResult[5];
              }
              if (cResult[6] === imageContainer.image) {
                if (cResult[7] === tmp25) {
                  let tmp26 = cResult[8];
                }
                if (cResult[9] === imageContainer.imageContainer) {
                }
                const obj4 = { style: imageContainer.imageContainer, children: tmp26 };
                const tmp32 = <View style={imageContainer.imageContainer}>{tmp26}</View>;
                imageContainer = imageContainer.imageContainer;
                cResult[9] = imageContainer;
                cResult[10] = tmp26;
                cResult[11] = tmp32;
              }
              const obj5 = { style: imageContainer.image, source: tmp25, resizeMode: "cover" };
              const tmp28 = jsx(FastImageDefault, { style: imageContainer.image, source: tmp25, resizeMode: "cover" });
              cResult[6] = imageContainer.image;
              cResult[7] = tmp25;
              cResult[8] = tmp28;
              tmp26 = tmp28;
            } else if (isActivity.isActivity) {
              if (cResult[12] !== applicationId) {
                const obj6 = { applicationId };
                const tmp23 = <closure_10 applicationId={applicationId} />;
                cResult[12] = applicationId;
                cResult[13] = tmp23;
              }
            } else if (null != applicationBot) {
              if (cResult[14] !== applicationBot) {
                const obj7 = { applicationBot };
                const tmp18 = <closure_11 applicationBot={applicationBot} />;
                cResult[14] = applicationBot;
                cResult[15] = tmp18;
              }
            } else {
              if (cResult[16] !== tmp6Result) {
                const obj8 = { style: null };
                const obj9 = { backgroundColor: tmp6Result };
                obj8.style = obj9;
                const tmp14 = <View style={null} />;
                cResult[16] = tmp6Result;
                cResult[17] = tmp14;
                let tmp11 = tmp14;
              } else {
                tmp11 = cResult[17];
              }
              return tmp11;
            }
          }
        }
        const applicationIconSource = AvatarUtilsDefault.getApplicationIconSource({
          id: applicationId,
          icon: applicationIcon,
          bot: applicationBot,
          botIconFirst: true,
        });
        cResult[0] = applicationBot;
        cResult[1] = applicationIcon;
        cResult[2] = applicationId;
        cResult[3] = applicationIconSource;
        tmp3 = applicationIconSource;
      }
    : (arg0) => {
        ({ applicationId, applicationBot, overrideImageUrl } = arg0);
        ({ isActivity, applicationIcon } = arg0);
        const tmp = closure_9();
        const applicationIconSource = AvatarUtilsDefault.getApplicationIconSource({
          id: applicationId,
          icon: applicationIcon,
          bot: applicationBot,
          botIconFirst: true,
        });
        useAvatarColorDefault;
        if (typeof applicationIconSource !== "number") {
          let uri;
          if (applicationIconSource != null) {
            uri = applicationIconSource.uri;
          }
        }
        if (null != overrideImageUrl) {
          const obj2 = { style: tmp.imageContainer, children: null };
          const obj3 = { style: tmp.image, source: null, resizeMode: "cover" };
          const obj4 = { uri: overrideImageUrl };
          obj3.source = obj4;
          obj2.children = jsx(FastImageDefault, { style: tmp.image, source: null, resizeMode: "cover" });
          let tmp11 = <View style={tmp.imageContainer}>{null}</View>;
        } else if (isActivity) {
          const obj5 = { applicationId };
          tmp11 = <closure_10 applicationId={applicationId} />;
        } else if (null != applicationBot) {
          const obj6 = { applicationBot };
          tmp11 = <closure_11 applicationBot={applicationBot} />;
        } else {
          const obj7 = { style: null };
          const obj8 = { backgroundColor: tmp8 };
          obj7.style = obj8;
          tmp11 = <View style={null} />;
        }
        return tmp11;
      },
);
