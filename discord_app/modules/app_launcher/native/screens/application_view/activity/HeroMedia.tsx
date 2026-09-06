// === Module 12084: HeroMedia ===

// Module 12084 (HeroMedia)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7168 */;
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground" /* 9652 */;
import useDefaultAppLauncherWidth from "useDefaultAppLauncherWidth" /* 11216 */;
import getPreviewVideoAssetUrlDefault from "getPreviewVideoAssetUrl" /* 12058 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
const DEFAULT_CONTENT_PADDING = fn(1482).DEFAULT_CONTENT_PADDING;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ mediaBackground: { backgroundColor: "black" } });
let size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/activity/HeroMedia.tsx");

export default function HeroMedia(arg0) {
  ({ applicationId, containerHeight } = arg0);
  ({ width, contentWidth } = arg0);
  const tmp = closure_6();
  ({ width: width2, contentWidth: contentWidth2 } = { width, contentWidth });
  let obj = useDefaultAppLauncherWidth;
  if (contentWidth2 == null) {
    if (width2 == null) {
      width2 = obj.useDefaultAppLauncherWidth();
    }
    contentWidth2 = width2 - 2 * DEFAULT_CONTENT_PADDING;
  }
  const rounded = Math.floor(9 * contentWidth2 / 16);
  const tmp7 = useEmbeddedActivityBackgroundDefault({ applicationId, size: contentWidth2, names: ["embedded_cover"] });
  let tmp2Result = initialize;
  const items = [AccessibilityStore];
  const stateFromStores = tmp2Result.useStateFromStores(items, () => useReducedMotion.useReducedMotion, []);
  tmp2Result = useGetOrFetchApplications;
  const getOrFetchApplication = tmp2Result.useGetOrFetchApplication(applicationId);
  let prop;
  if (getOrFetchApplication != null) {
    prop = getOrFetchApplication.embeddedActivityConfig;
  }
  let prop1;
  if (prop != null) {
    prop1 = prop.activity_preview_video_asset_id;
  }
  let tmp12 = null;
  if (null != prop1) {
    tmp12 = getPreviewVideoAssetUrlDefault(applicationId, prop.activity_preview_video_asset_id);
  }
  let tmp15Result = null;
  if (null != tmp12) {
    tmp15Result = null;
    if ("" !== tmp12) {
      const size = { muted: true, paused: stateFromStores, src: null, height: null, width: null, poster: null, resizeMode: "cover", accessibilityLabel: null, style: null, videoStyle: null, postponeRender: false };
      if (null != tmp12) {
        if ("" !== tmp12) {
          obj = { videoURI: tmp12 };
          let obj4 = obj;
        }
        size.src = obj4;
        size.height = rounded;
        size.width = contentWidth2;
        size.poster = tmp7.url;
        const intl = util.intl;
        let str3;
        if (getOrFetchApplication != null) {
          str3 = getOrFetchApplication.name;
        }
        if (str3 == null) {
          str3 = "";
        }
        obj = { applicationName: str3 };
        size.accessibilityLabel = intl.formatToPlainString(util.t["Af+EQD"], obj);
        const items1 = [tmp.mediaBackground, , ];
        const obj1 = { maxHeight: rounded };
        items1[1] = obj1;
        let tmp14 = null != containerHeight;
        if (tmp14) {
          const obj2 = { transform: null };
          const obj3 = { translateY: (containerHeight - rounded) / 2 };
          const items2 = [obj3];
          obj2.transform = items2;
          tmp14 = obj2;
        }
        items1[2] = tmp14;
        size.style = items1;
        size.videoStyle = tmp.mediaBackground;
        tmp15Result = <tmp16 {...size} />;
      }
      let str2 = tmp7.url;
      if (str2 == null) {
        str2 = "";
      }
      obj4 = { uri: str2 };
    }
  }
  return tmp15Result;
};
export const useHeroMediaDimensions = function useHeroMediaDimensions(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ width, contentWidth } = obj);
  if (contentWidth == null) {
    if (width == null) {
      width = obj2.useDefaultAppLauncherWidth();
    }
    contentWidth = width - 2 * DEFAULT_CONTENT_PADDING;
  }
  const size = { width: contentWidth, height: Math.floor(9 * contentWidth / 16) };
  return size;
};