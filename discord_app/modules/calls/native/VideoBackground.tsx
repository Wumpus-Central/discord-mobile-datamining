// discord_app/modules/calls/native/VideoBackground.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import get_ActivityIndicator from "set";
import ME from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "useDisplayProfile";
import { hexToRgba } from "../../../utils/ColorUtils.tsx";

let c10;
let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function useDominantRGBFromImage(arg0, arg1) {
  const _require = arg0;
  let first = arg1;
  let tmp = arg1;
  if (Array.isArray(arg1)) {
    first = arg1[0];
    tmp = first;
  }
  const tmp5 = first(8349)();
  const dependencyMap = tmp5;
  let hexToRgbResult;
  if (null != arg0) {
    hexToRgbResult = tmp3(8350).cachedDominantColors[arg0];
  }
  if (hexToRgbResult == null) {
    hexToRgbResult = _hexToRgba.hexToRgb(tmp3(712).unsafe_rawColors.PRIMARY_800);
    const obj2 = _hexToRgba;
  }
  const tmp8 = callback(importAllResult.useState(hexToRgbResult), 2);
  callback = tmp8[1];
  const items = [tmp, arg0, tmp5];
  const effect = importAllResult.useEffect(() => {
    let tmp2 = null != first;
    if (tmp2) {
      tmp2 = null != closure_0;
    }
    if (tmp2) {
      if (null == first(tmp5[8]).cachedDominantColors[closure_0]) {
        if (typeof tmp === "number") {
          const ImageManager = outer1_6.ImageManager;
          let dominantColorsLocalAsset = ImageManager.getDominantColorsLocalAsset(outer1_7.resolveAssetSource(tmp));
        } else {
          const ImageManager2 = outer1_6.ImageManager;
          dominantColorsLocalAsset = ImageManager2.getDominantColors(outer1_7.resolveAssetSource(tmp));
        }
        dominantColorsLocalAsset.then((arg0) => {
          if (callback()) {
            const obj = { r: null, g: null, b: null };
            [obj[0], obj[1], obj[2]] = outer1_3(arg0[0], 3);
            callback2(obj);
            outer1_1(outer1_2[8]).cachedDominantColors[closure_0] = obj;
            const tmp3 = outer1_3(arg0[0], 3);
          }
        }).catch(outer1_9);
        const nextPromise = dominantColorsLocalAsset.then((arg0) => {
          if (callback()) {
            const obj = { r: null, g: null, b: null };
            [obj[0], obj[1], obj[2]] = outer1_3(arg0[0], 3);
            callback2(obj);
            outer1_1(outer1_2[8]).cachedDominantColors[closure_0] = obj;
            const tmp3 = outer1_3(arg0[0], 3);
          }
        });
      } else {
        callback(tmp4(tmp5[8]).cachedDominantColors[tmp6]);
      }
      tmp4 = first;
    }
  }, items);
  return tmp8[0];
}
class VideoBackground {
  constructor(arg0) {
    ({ url, isStageCall } = global);
    if (isStageCall === undefined) {
      isStageCall = false;
    }
    ({ user, guildId } = global);
    renderVideoDetails = global.renderVideoDetails;
    merged = Object.assign(global, Object.create(null));
    c1 = undefined;
    id = undefined;
    tmp2 = jsxs();
    tmp3 = f43670(url);
    tmp4 = useDominantRGBFromImage(url, tmp3);
    combined = "rgb(" + tmp4.r + ", " + tmp4.g + ", " + tmp4.b + ")";
    tmp6 = c1;
    tmp7 = id;
    tmp8 = require("useIsMobileVisualRefreshExperimentEnabled")("VideoBackground-native");
    c1 = tmp8;
    id = undefined;
    if (user != null) {
      id = user.id;
    }
    if (id == null) {
      id = EMPTY_STRING_SNOWFLAKE_ID;
    }
    tmp10 = require("useDisplayProfile")(id, guildId);
    first = undefined;
    if (tmp10 != null) {
      themeColors = tmp10.themeColors;
      if (themeColors != null) {
        first = themeColors[0];
      }
    }
    if (first == null) {
      first = null;
    }
    tmp12 = undefined;
    if (tmp10 != null) {
      themeColors2 = tmp10.themeColors;
      if (themeColors2 != null) {
        tmp12 = themeColors2[1];
      }
    }
    if (tmp12 == null) {
      tmp12 = null;
    }
    tmp13 = tmp8;
    if (tmp8) {
      tmp13 = null != first;
    }
    if (tmp13) {
      tmp13 = null != tmp12;
    }
    tmp14 = guildId;
    obj = require("rgbToHex");
    tmp15 = null;
    if (tmp13) {
      tmp15 = first;
    }
    tmp16 = null;
    if (tmp13) {
      tmp16 = tmp12;
    }
    videoTileGradientColors = obj.useVideoTileGradientColors(tmp15, tmp16);
    items = [, , ];
    items[0] = tmp8;
    items[1] = id;
    items[2] = guildId;
    effect = __esModule.useEffect(() => {
      let tmp2 = id !== outer1_8;
      if (tmp2) {
        tmp2 = _undefined;
      }
      if (tmp2) {
        const obj = { guildId: null, dispatchWait: true };
        obj[0] = guildId;
        _undefined(id[14])(id, undefined, obj);
      }
    }, items);
    if (null == tmp3) {
      return null;
    } else {
      renderVideoDetailsResult = undefined;
      if (renderVideoDetails != null) {
        renderVideoDetailsResult = renderVideoDetails();
      }
      if (renderVideoDetailsResult == null) {
        renderVideoDetailsResult = null;
      }
      items1 = [, , , ];
      items1[0] = global.style;
      items1[1] = tmp2.videoBackground;
      tmp20 = null;
      if (!tmp13) {
        obj = { backgroundColor: null };
        obj[0] = combined;
        tmp20 = obj;
      }
      items1[2] = tmp20;
      videoDetailsSpacer = null;
      if (null != renderVideoDetailsResult) {
        videoDetailsSpacer = tmp2.videoDetailsSpacer;
      }
      items1[3] = videoDetailsSpacer;
      tmp22 = null;
      if (isStageCall) {
        tmp22 = null;
        if (!tmp13) {
          obj1 = { backgroundColor: null };
          obj1[0] = combined;
          tmp22 = obj1;
        }
      }
      tmp23 = jsx;
      obj2 = { source: null };
      obj2[0] = tmp3;
      tmp24 = obj2;
      tmp25 = merged;
      merged1 = Object.assign(merged);
      items2 = [, ];
      items2[0] = global.avatarStyle;
      items2[1] = tmp22;
      obj2.avatarStyle = items2;
      obj2.isStageCall = isStageCall;
      tmp27 = jsx(require("Button").Avatar, obj2);
      if (null != videoTileGradientColors) {
        tmp31 = jsxs;
        obj3 = { colors: null, start: null, end: null, style: null, children: null };
        obj3[0] = videoTileGradientColors;
        obj3[1] = { x: 0, y: 0 };
        obj3[2] = { x: 0, y: 1 };
        obj3[3] = items1;
        items3 = [, ];
        items3[0] = tmp27;
        items3[1] = renderVideoDetailsResult;
        obj3[4] = items3;
        tmp30 = jsxs(require("LinearGradient"), obj3);
      } else {
        tmp28 = jsxs;
        tmp29 = View;
        obj4 = { style: null, children: null };
        obj4[0] = items1;
        items4 = [, ];
        items4[0] = tmp27;
        items4[1] = renderVideoDetailsResult;
        obj4[1] = items4;
        tmp30 = jsxs(View, obj4);
      }
      return tmp30;
    }
  }
}
let c4 = importAllResult;
({ View: c5, NativeModules: closure_6, Image: error } = get_ActivityIndicator);
({ EMPTY_STRING_SNOWFLAKE_ID: metroImportAll, NOOP: c9 } = ME);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = createCacheKey.createStyles({ videoBackground: { alignItems: "center" }, videoDetailsSpacer: { paddingTop: 12 } });
const memoizeResult = require("useDisplayProfile").memoize((num) => {
  let tmp = null;
  if (null != num) {
    tmp = null;
    if ("" !== num) {
      let tmp2 = num;
      if (typeof num !== "number") {
        const obj = { uri: null };
        obj[0] = num;
        tmp2 = obj;
      }
      tmp = tmp2;
    }
  }
  return tmp;
});
VideoBackground.AvatarSizes = require("Button").AvatarSizes;
const memoResult = importAllResult.memo(VideoBackground);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/calls/native/VideoBackground.tsx");

export default memoResult;
export const AvatarSizes = require("Button").AvatarSizes;
export const memoizedImageSource = memoizeResult;
export { useDominantRGBFromImage };
export const useDominantColorFromImage = function useDominantColorFromImage(arg0, arg1) {
  const tmp = useDominantRGBFromImage(arg0, arg1);
  return "rgb(" + tmp.r + ", " + tmp.g + ", " + tmp.b + ")";
};