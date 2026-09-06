// === Module 8248: VideoBackground ===

// Module 8248 (VideoBackground)
import native from "native" /* 1178 */;
import VideoBackgroundManagerDefault from "VideoBackgroundManager" /* 8250 */;
import useProfileTileGradientDefault from "useProfileTileGradient" /* 8251 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import apply from "module_12" /* 12 */;

const LinearGradientDefault = tmp6(4987);
require = fn;
function useDominantRGBFromImage(arg0, arg1) {
  _require = arg0;
  let first = arg1;
  let tmp = arg1;
  if (Array.isArray(arg1)) {
    first = arg1[0];
    tmp = first;
  }
  const tmp5 = first(8249)();
  dependencyMap = tmp5;
  let hexToRgbResult;
  if (null != arg0) {
    hexToRgbResult = tmp3(8250).cachedDominantColors[arg0];
  }
  if (hexToRgbResult == null) {
    hexToRgbResult = require("ColorUtils").hexToRgb(tmp3(576).unsafe_rawColors.PRIMARY_800);
    const obj2 = require("ColorUtils");
  }
  const tmp8 = _slicedToArray(noop.useState(hexToRgbResult), 2);
  _slicedToArray = tmp8[1];
  const items = [tmp, arg0, tmp5];
  const effect = noop.useEffect(() => {
    let tmp2 = null != first;
    if (tmp2) {
      tmp2 = null != closure_0;
    }
    if (tmp2) {
      if (null == VideoBackgroundManagerDefault.cachedDominantColors[closure_0]) {
        if (typeof tmp === "number") {
          const ImageManager = timestampProducer.ImageManager;
          let dominantColorsLocalAsset = ImageManager.getDominantColorsLocalAsset(React5.resolveAssetSource(tmp));
        } else {
          const ImageManager2 = timestampProducer.ImageManager;
          dominantColorsLocalAsset = ImageManager2.getDominantColors(React5.resolveAssetSource(tmp));
        }
        dominantColorsLocalAsset.then((result) => {
          if (dependencyMap()) {
            const obj = { r: null, g: null, b: null };
            [obj.r, obj.g, obj.b] = closure_3(result[0], 3);
            closure_1_3(obj);
            first(8250).cachedDominantColors[closure_1_0] = obj;
            const tmp3 = closure_3(result[0], 3);
          }
        }).catch(NOOP);
        const nextPromise = dominantColorsLocalAsset.then((result) => {
          if (dependencyMap()) {
            const obj = { r: null, g: null, b: null };
            [obj.r, obj.g, obj.b] = closure_3(result[0], 3);
            closure_1_3(obj);
            first(8250).cachedDominantColors[closure_1_0] = obj;
            const tmp3 = closure_3(result[0], 3);
          }
        });
      } else {
        closure_3(tmp4(8250).cachedDominantColors[tmp6]);
      }
      tmp4 = importDefault;
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
    merged = Object.assign(global, Object.assign({ style: 0, url: 0, isStageCall: 0, avatarStyle: 0, user: 0, guildId: 0, renderVideoDetails: 0 }));
    tmp2 = closure_11();
    tmp3 = closure_12(url);
    tmp4 = useDominantRGBFromImage(url, tmp3);
    combined = "rgb(" + tmp4.r + ", " + tmp4.g + ", " + tmp4.b + ")";
    tmp7 = closure_2;
    tmp6 = closure_1;
    id = undefined;
    tmp8 = closure_1(closure_2[11]);
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
        obj.backgroundColor = combined;
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
          obj.backgroundColor = combined;
          tmp15 = obj;
        }
      }
      tmp16 = jsx;
      tmp17 = closure_0;
      obj1 = { source: null };
      obj1.source = tmp3;
      tmp18 = obj1;
      tmp19 = merged;
      merged1 = Object.assign(merged);
      items1 = [, ];
      items1[0] = avatarStyle;
      items1[1] = tmp15;
      obj1.avatarStyle = items1;
      obj1.isStageCall = isStageCall;
      tmp21 = jsx(closure_0(tmp7[12]).Avatar, obj1);
      if (null != tmp8Result) {
        tmp25 = jsxs;
        obj2 = { colors: null, start: null, end: null, style: null, children: null };
        obj2.colors = tmp8Result;
        obj2.start = { x: 0, y: 0 };
        obj2.end = { x: 0, y: 1 };
        obj2.style = items;
        items2 = [, ];
        items2[0] = tmp21;
        items2[1] = renderVideoDetailsResult;
        obj2.children = items2;
        tmp24 = jsxs(tmp6(tmp7[13]), obj2);
      } else {
        tmp22 = jsxs;
        tmp23 = View;
        obj3 = { style: null, children: null };
        obj3.style = items;
        items3 = [, ];
        items3[0] = tmp21;
        items3[1] = renderVideoDetailsResult;
        obj3.children = items3;
        tmp24 = jsxs(View, obj3);
      }
      return tmp24;
    }
  }
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, NativeModules: metroRequire, Image: closure_7 } = get_ActivityIndicator);
const NOOP = fn(1074).NOOP;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles({ videoBackground: { alignItems: "center" }, videoDetailsSpacer: { paddingTop: 12 } });
const memoizeResult = apply.memoize((uri) => {
  let tmp = null;
  if (null != uri) {
    tmp = null;
    if ("" !== uri) {
      let tmp2 = uri;
      if (typeof uri !== "number") {
        const obj = { uri };
        tmp2 = obj;
      }
      tmp = tmp2;
    }
  }
  return tmp;
});
VideoBackground.AvatarSizes = fn(1178).AvatarSizes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/native/VideoBackground.tsx");

export default noop.memo(VideoBackground);
export const AvatarSizes = fn(1178).AvatarSizes;
export const memoizedImageSource = memoizeResult;
export { useDominantRGBFromImage };
export const useDominantColorFromImage = function useDominantColorFromImage(arg0, arg1) {
  const tmp = useDominantRGBFromImage(arg0, arg1);
  return "rgb(" + tmp.r + ", " + tmp.g + ", " + tmp.b + ")";
};