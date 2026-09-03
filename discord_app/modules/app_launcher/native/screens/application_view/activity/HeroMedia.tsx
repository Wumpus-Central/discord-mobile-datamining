// === Module 11885: HeroMedia ===

// Module 11885 (HeroMedia)
import noopAll from "noop" /* 19 */;
import useDefaultAppLauncherWidth from "useDefaultAppLauncherWidth" /* 9068 */;
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground" /* 9638 */;
import getPreviewVideoAssetUrlDefault from "getPreviewVideoAssetUrl" /* 11859 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import { DEFAULT_CONTENT_PADDING } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON" /* 1497 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
noopAll;
let closure_6 = createCacheKey.createStyles({ mediaBackground: { backgroundColor: "black" } });
const result = require("set").fileFinishedImporting("modules/app_launcher/native/screens/application_view/activity/HeroMedia.tsx");

export default function HeroMedia(arg0) {
  ({ applicationId, containerHeight } = arg0);
  ({ width, contentWidth } = arg0);
  const tmp = callback();
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
  let tmp2Result = tmp2(586);
  const items = [closure_3];
  const stateFromStores = tmp2Result.useStateFromStores(items, () => useReducedMotion.useReducedMotion, []);
  tmp2Result = tmp2(5968);
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
      obj = { muted: true, paused: null, src: null, height: null, width: null, poster: null, resizeMode: "cover", accessibilityLabel: null, style: null, videoStyle: null, postponeRender: false };
      obj[1] = stateFromStores;
      if (null != tmp12) {
        if ("" !== tmp12) {
          obj = { videoURI: null };
          obj[0] = tmp12;
          let obj5 = obj;
        }
        obj[2] = obj5;
        obj[3] = rounded;
        obj[4] = contentWidth2;
        obj[5] = tmp7.url;
        const intl = tmp2(1233).intl;
        let str3;
        if (getOrFetchApplication != null) {
          str3 = getOrFetchApplication.name;
        }
        if (str3 == null) {
          str3 = "";
        }
        obj1 = { applicationName: null };
        obj1[0] = str3;
        obj[7] = intl.formatToPlainString(tmp2(1233).t["Af+EQD"], obj1);
        const items1 = [tmp.mediaBackground, , ];
        const obj2 = { maxHeight: null };
        obj2[0] = rounded;
        items1[1] = obj2;
        let tmp14 = null != containerHeight;
        if (tmp14) {
          const obj3 = { transform: null };
          const obj4 = { translateY: null };
          obj4[0] = (containerHeight - rounded) / 2;
          const items2 = [obj4];
          obj3[0] = items2;
          tmp14 = obj3;
        }
        items1[2] = tmp14;
        obj[8] = items1;
        obj[9] = tmp.mediaBackground;
        tmp15Result = tmp15(tmp16, obj);
      }
      let str2 = tmp7.url;
      if (str2 == null) {
        str2 = "";
      }
      obj5 = { uri: null };
      obj5[0] = str2;
      tmp15 = jsx;
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
  obj = { width: contentWidth, height: Math.floor(9 * contentWidth / 16) };
  return obj;
};