// === Module 8248: useDominantRGBFromImage ===

// Module 8248 (useDominantRGBFromImage)
import Button from "Button" /* 1178 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import useProfileTileGradientDefault from "useProfileTileGradient" /* 8251 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { NOOP } from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;
import importDefaultResult from "apply" /* 12 */;

require = arg1;
function useDominantRGBFromImage(arg0, arg1) {
  const _require = arg0;
  let first = arg1;
  let tmp = arg1;
  if (Array.isArray(arg1)) {
    first = arg1[0];
    tmp = first;
  }
  let tmp5 = first(8249)();
  dependencyMap = tmp5;
  let hexToRgbResult;
  if (null != arg0) {
    hexToRgbResult = tmp3(8250).cachedDominantColors[arg0];
  }
  if (hexToRgbResult == null) {
    hexToRgbResult = _require(4409).hexToRgb(tmp3(576).unsafe_rawColors.PRIMARY_800);
    const obj2 = _require(4409);
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
      if (null == first(table[8]).cachedDominantColors[closure_0]) {
        if (typeof tmp === "number") {
          const ImageManager = closure_1_6.ImageManager;
          let dominantColorsLocalAsset = ImageManager.getDominantColorsLocalAsset(closure_1_7.resolveAssetSource(tmp));
        } else {
          const ImageManager2 = closure_1_6.ImageManager;
          dominantColorsLocalAsset = ImageManager2.getDominantColors(closure_1_7.resolveAssetSource(tmp));
        }
        dominantColorsLocalAsset.then((arg0) => {
          if (callback()) {
            const obj = { r: null, g: null, b: null };
            [obj[0], obj[1], obj[2]] = closure_1_3(arg0[0], 3);
            callback2(obj);
            closure_1_1(closure_1_2[8]).cachedDominantColors[closure_0] = obj;
            const tmp3 = closure_1_3(arg0[0], 3);
          }
        }).catch(closure_1_8);
        const nextPromise = dominantColorsLocalAsset.then((arg0) => {
          if (callback()) {
            const obj = { r: null, g: null, b: null };
            [obj[0], obj[1], obj[2]] = closure_1_3(arg0[0], 3);
            callback2(obj);
            closure_1_1(closure_1_2[8]).cachedDominantColors[closure_0] = obj;
            const tmp3 = closure_1_3(arg0[0], 3);
          }
        });
      } else {
        callback(tmp4(tmp5[8]).cachedDominantColors[tmp6]);
      }
      tmp4 = first;
      tmp5 = table;
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
    ({ user, renderVideoDetails } = global);
    ({ avatarStyle, guildId } = global);
    merged = Object.assign(global, Object.create(null));
    tmp2 = closure_11();
    tmp3 = closure_12(url);
    tmp4 = useDominantRGBFromImage(url, tmp3);
    combined = "rgb(" + tmp4.r + ", " + tmp4.g + ", " + tmp4.b + ")";
    tmp7 = closure_2;
    tmp6 = closure_1;
    id = undefined;
    tmp8 = require("useProfileTileGradient");
    if (user != null) {
      id = user.id;
    }
    tmp8Result = tmp8({ userId: id, guildId, location: "VideoBackground-native" });
    tmp11 = null != tmp8Result;
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
      items = [, , , ];
      items[0] = global.style;
      items[1] = tmp2.videoBackground;
      tmp13 = null;
      if (!tmp11) {
        obj = { backgroundColor: null };
        obj[0] = combined;
        tmp13 = obj;
      }
      items[2] = tmp13;
      videoDetailsSpacer = null;
      if (null != renderVideoDetailsResult) {
        videoDetailsSpacer = tmp2.videoDetailsSpacer;
      }
      items[3] = videoDetailsSpacer;
      tmp15 = null;
      if (isStageCall) {
        tmp15 = null;
        if (!tmp11) {
          obj = { backgroundColor: null };
          obj[0] = combined;
          tmp15 = obj;
        }
      }
      tmp16 = jsx;
      tmp17 = closure_0;
      obj1 = { source: null };
      obj1[0] = tmp3;
      tmp18 = obj1;
      tmp19 = merged;
      merged1 = Object.assign(merged);
      items1 = [, ];
      items1[0] = avatarStyle;
      items1[1] = tmp15;
      obj1.avatarStyle = items1;
      obj1.isStageCall = isStageCall;
      tmp21 = jsx(require("Button").Avatar, obj1);
      if (null != tmp8Result) {
        tmp25 = jsxs;
        obj2 = { colors: null, start: null, end: null, style: null, children: null };
        obj2[0] = tmp8Result;
        obj2[1] = { x: 0, y: 0 };
        obj2[2] = { x: 0, y: 1 };
        obj2[3] = items;
        items2 = [, ];
        items2[0] = tmp21;
        items2[1] = renderVideoDetailsResult;
        obj2[4] = items2;
        tmp24 = jsxs(require("LinearGradient"), obj2);
      } else {
        tmp22 = jsxs;
        tmp23 = View;
        obj3 = { style: null, children: null };
        obj3[0] = items;
        items3 = [, ];
        items3[0] = tmp21;
        items3[1] = renderVideoDetailsResult;
        obj3[1] = items3;
        tmp24 = jsxs(View, obj3);
      }
      return tmp24;
    }
  }
}
let c4 = importAllResult;
({ View: c5, NativeModules: closure_6, Image: error } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles({ videoBackground: { alignItems: "center" }, videoDetailsSpacer: { paddingTop: 12 } });
const memoizeResult = importDefaultResult.memoize((num) => {
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
const result = require("set").fileFinishedImporting("modules/calls/native/VideoBackground.tsx");

export default memoResult;
export const AvatarSizes = require("Button").AvatarSizes;
export const memoizedImageSource = memoizeResult;
export { useDominantRGBFromImage };
export const useDominantColorFromImage = function useDominantColorFromImage(arg0, arg1) {
  const tmp = useDominantRGBFromImage(arg0, arg1);
  return "rgb(" + tmp.r + ", " + tmp.g + ", " + tmp.b + ")";
};