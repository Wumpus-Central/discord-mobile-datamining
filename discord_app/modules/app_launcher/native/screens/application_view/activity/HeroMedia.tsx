import "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { DEFAULT_CONTENT_PADDING } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_7 = createCacheKey.createStyles({ mediaBackground: { backgroundColor: "black" } });
const result = require("APP_LAUNCHER_BUILT_IN_SECTION_ICON").fileFinishedImporting("modules/app_launcher/native/screens/application_view/activity/HeroMedia.tsx");

export default function HeroMedia(width) {
  let applicationId;
  let containerHeight;
  ({ applicationId, containerHeight } = width);
  const tmp = callback();
  width = { width: width.width }.width;
  require(9468) /* useDefaultAppLauncherWidth */;
  let bound = width;
  if (width == null) {
    let tmp8 = width;
    if (width == null) {
      tmp8 = tmp5;
    }
    bound = Math.min(tmp8, ACTION_SHEET_MAX_WIDTH);
  }
  const diff = bound - 2 * DEFAULT_CONTENT_PADDING;
  const rounded = Math.floor(9 * diff / 16);
  const tmp13 = importDefault(10643)({ applicationId, size: diff, names: ["embedded_cover"] });
  let tmp2Result = tmp2(589);
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = tmp2Result.useStateFromStores(items, () => useReducedMotion.useReducedMotion, []);
  tmp2Result = tmp2(5616);
  const getOrFetchApplication = tmp2Result.useGetOrFetchApplication(applicationId);
  let prop;
  if (getOrFetchApplication != null) {
    prop = getOrFetchApplication.embeddedActivityConfig;
  }
  let prop1;
  if (prop != null) {
    prop1 = prop.activity_preview_video_asset_id;
  }
  let tmp18 = null;
  if (null != prop1) {
    tmp18 = importDefault(11357)(applicationId, prop.activity_preview_video_asset_id);
  }
  let tmp21Result = null;
  if (null != tmp18) {
    tmp21Result = null;
    if ("" !== tmp18) {
      let obj = { muted: true, paused: null, src: null, height: null, width: null, poster: null, resizeMode: "cover", accessibilityLabel: null, style: null, videoStyle: null, postponeRender: false };
      obj[1] = stateFromStores;
      if (null != tmp18) {
        if ("" !== tmp18) {
          obj = { videoURI: null };
          obj[0] = tmp18;
          let obj5 = obj;
        }
        obj[2] = obj5;
        obj[3] = rounded;
        obj[4] = diff;
        obj[5] = tmp13.url;
        const intl = tmp2(1236).intl;
        let str3;
        if (getOrFetchApplication != null) {
          str3 = getOrFetchApplication.name;
        }
        if (str3 == null) {
          str3 = "";
        }
        const obj1 = { applicationName: null };
        obj1[0] = str3;
        obj[7] = intl.formatToPlainString(tmp2(1236).t["Af+EQD"], obj1);
        const items1 = [tmp.mediaBackground, , ];
        const obj2 = { maxHeight: null };
        obj2[0] = rounded;
        items1[1] = obj2;
        let tmp20 = null != containerHeight;
        if (tmp20) {
          const obj3 = { transform: null };
          const obj4 = { translateY: null };
          obj4[0] = (containerHeight - rounded) / 2;
          const items2 = [obj4];
          obj3[0] = items2;
          tmp20 = obj3;
        }
        items1[2] = tmp20;
        obj[8] = items1;
        obj[9] = tmp.mediaBackground;
        tmp21Result = tmp21(tmp22, obj);
      }
      let str2 = tmp13.url;
      if (str2 == null) {
        str2 = "";
      }
      obj5 = { uri: null };
      obj5[0] = str2;
      tmp21 = jsx;
    }
  }
  return tmp21Result;
};
export const useHeroMediaDimensions = function useHeroMediaDimensions(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const width = obj.width;
  require(9468) /* useDefaultAppLauncherWidth */;
  let bound = width;
  if (width == null) {
    let tmp5 = width;
    if (width == null) {
      tmp5 = tmp2;
    }
    bound = Math.min(tmp5, ACTION_SHEET_MAX_WIDTH);
  }
  const diff = bound - 2 * DEFAULT_CONTENT_PADDING;
  obj = { width: diff, height: Math.floor(9 * diff / 16) };
  return obj;
};