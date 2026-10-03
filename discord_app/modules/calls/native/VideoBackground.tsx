// discord_app/modules/calls/native/VideoBackground.tsx
import c from "../../../../_runtime/00576_c.js";
import native from "../../../design/void/native.tsx";
import LinearGradientDefault from "../../../../_runtime/05605_LinearGradient.js";
import VideoBackgroundManagerDefault from "VideoBackgroundManager.tsx";
import useProfileTileGradientDefault from "useProfileTileGradient.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import apply from "../../../../_runtime/metro/00012__.js";

require = fn;
function useDominantRGBFromImage(assetImage, cResult) {
  _require = assetImage;
  let first = cResult;
  let tmp = cResult;
  if (Array.isArray(cResult)) {
    first = cResult[0];
    tmp = first;
  }
  const tmp5 = first(7921)();
  dependencyMap = tmp5;
  let hexToRgbResult;
  if (null != assetImage) {
    hexToRgbResult = tmp3(7922).cachedDominantColors[assetImage];
  }
  if (hexToRgbResult == null) {
    hexToRgbResult = require("ColorUtils").hexToRgb(tmp3(587).unsafe_rawColors.PRIMARY_800);
    const obj2 = require("ColorUtils");
  }
  const tmp8 = _slicedToArray(noop.useState(hexToRgbResult), 2);
  closure_3 = tmp8[1];
  const items = [tmp, assetImage, tmp5];
  const effect = noop.useEffect(() => {
    let tmp2 = null != first;
    if (tmp2) {
      tmp2 = null != closure_0;
    }
    if (tmp2) {
      let getDominantColorsLocalAsset = importDefault;
      let nextPromise = dependencyMap;
      if (null == VideoBackgroundManagerDefault.cachedDominantColors[closure_0]) {
        if (typeof first === "number") {
          const dominantColorsLocalAsset = getDominantColorsLocalAsset(1886);
          getDominantColorsLocalAsset = dominantColorsLocalAsset.getDominantColorsLocalAsset;
          let dominantColorsLocalAsset1 = getDominantColorsLocalAsset(closure_2_8.resolveAssetSource(first));
        } else {
          const dominantColorsLocalAsset2 = getDominantColorsLocalAsset(1886);
          dominantColorsLocalAsset1 = dominantColorsLocalAsset2.getDominantColors(
            closure_2_8.resolveAssetSource(first),
          );
        }
        nextPromise = dominantColorsLocalAsset1.then((result) => {
          if (dependencyMap()) {
            const obj = { r: null, g: null, b: null };
            [obj.r, obj.g, obj.b] = result[0];
            closure_1_3(obj);
            first(7922).cachedDominantColors[assetImage] = obj;
            const tmp3 = _slicedToArray(result[0], 3);
          }
        });
        nextPromise.catch(NOOP);
      } else {
        closure_3(getDominantColorsLocalAsset(7922).cachedDominantColors[tmp4]);
      }
    }
  }, items);
  return tmp8[0];
}
let closure_3 = ["style", "url", "isStageCall", "avatarStyle", "user", "guildId", "renderVideoDetails"];
get_ActivityIndicator = fn(17);
({ View: closure_7, Image: closure_8 } = get_ActivityIndicator);
const NOOP = fn(1085).NOOP;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4890);
let closure_12 = createStyles.createStyles({
  videoBackground: { alignItems: "center" },
  videoDetailsSpacer: { paddingTop: 12 },
});
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
let ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (assetImage, cResult) => {
      const tmp = useDominantRGBFromImage(assetImage, cResult);
      return "rgb(" + tmp.r + ", " + tmp.g + ", " + tmp.b + ")";
    }
  : (assetImage, cResult) => {
      const tmp = useDominantRGBFromImage(assetImage, cResult);
      return "rgb(" + tmp.r + ", " + tmp.g + ", " + tmp.b + ")";
    };
let closure_15 = tmp5;
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp2 = dependencyMap;
      const cResult = c.c(47);
      if (cResult[0] !== arg0) {
        ({ style, url, isStageCall, avatarStyle, user, guildId, renderVideoDetails } = arg0);
        const tmp14 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = tmp14;
        cResult[2] = avatarStyle;
        cResult[3] = guildId;
        cResult[4] = renderVideoDetails;
        cResult[5] = style;
        cResult[6] = isStageCall;
        cResult[7] = url;
        cResult[8] = user;
        let tmp11 = user;
        let tmp10 = url;
        let tmp8 = style;
        let tmp7 = renderVideoDetails;
        let tmp6 = guildId;
        let tmp5 = avatarStyle;
        let tmp4 = tmp14;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
        tmp8 = cResult[5];
        tmp10 = cResult[7];
        tmp11 = cResult[8];
      }
      const tmp16 = closure_12();
      if (cResult[9] !== tmp10) {
        const tmp19 = memoizeResult(tmp10);
        cResult[9] = tmp10;
        cResult[10] = tmp19;
        let tmp17 = tmp19;
      } else {
        tmp17 = cResult[10];
      }
      const tmp20 = closure_15(tmp10, tmp17);
      let id;
      if (tmp11 != null) {
        id = tmp11.id;
      }
      if (cResult[11] === tmp6) {
        if (cResult[12] === id) {
          let tmp22 = cResult[13];
        }
        let tmp23 = importDefault;
        const tmp24 = useProfileTileGradientDefault(tmp22);
        if (null == tmp17) {
          return null;
        } else {
          if (cResult[14] !== tmp7) {
            let tmp7Result;
            if (tmp7 != null) {
              tmp7Result = tmp7();
            }
            if (tmp7Result == null) {
              tmp7Result = null;
            }
            cResult[14] = tmp7;
            cResult[15] = tmp7Result;
            let tmp26 = tmp7Result;
          } else {
            tmp26 = cResult[15];
          }
          if (cResult[16] === tmp20) {
            if (cResult[17] === tmp25) {
              let tmp28 = cResult[18];
            }
            let videoDetailsSpacer = null;
            if (null != tmp26) {
              videoDetailsSpacer = tmp16.videoDetailsSpacer;
            }
            if (cResult[19] === tmp8) {
              if (cResult[20] === tmp16.videoBackground) {
                if (cResult[21] === tmp28) {
                  if (cResult[22] === videoDetailsSpacer) {
                    let tmp31 = cResult[23];
                  }
                  if (cResult[24] === tmp20) {
                    if (cResult[25] === tmp15) {
                      if (cResult[26] === tmp25) {
                        let tmp32 = cResult[27];
                      }
                      if (cResult[28] === tmp5) {
                        if (cResult[29] === tmp32) {
                          let tmp34 = cResult[30];
                        }
                        if (cResult[31] === tmp4) {
                          if (cResult[32] === tmp15) {
                            if (cResult[33] === tmp17) {
                              if (cResult[34] === tmp34) {
                                let tmp35 = cResult[35];
                              }
                              if (null != tmp24) {
                                const _Symbol = Symbol;
                                if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
                                  const point = { x: 0, y: 0 };
                                  const point1 = { x: 0, y: 1 };
                                  cResult[36] = point;
                                  cResult[37] = point1;
                                  let items = point1;
                                  let tmp46 = point;
                                } else {
                                  tmp46 = cResult[36];
                                  items = cResult[37];
                                }
                                if (cResult[38] === tmp35) {
                                  if (cResult[39] === tmp31) {
                                    if (cResult[40] === tmp24) {
                                    }
                                  }
                                }
                                tmp23 = tmp23(5605);
                                const obj2 = { colors: tmp24, start: tmp46, end: items, style: tmp31, children: null };
                                items = [tmp35, tmp26];
                                obj2.children = items;
                                tmp2 = closure_1_11(tmp23, obj2);
                                cResult[38] = tmp35;
                                cResult[39] = tmp31;
                                cResult[40] = tmp24;
                                cResult[41] = tmp26;
                                cResult[42] = tmp2;
                              } else {
                                if (cResult[43] === tmp35) {
                                  if (cResult[44] === tmp31) {
                                    if (cResult[45] === tmp26) {
                                      let tmp41 = cResult[46];
                                    }
                                    return tmp41;
                                  }
                                }
                                const obj3 = { style: tmp31, children: null };
                                const items1 = [tmp35, tmp26];
                                obj3.children = items1;
                                const tmp44 = closure_1_11(React5, obj3);
                                cResult[43] = tmp35;
                                cResult[44] = tmp31;
                                cResult[45] = tmp26;
                                cResult[46] = tmp44;
                                tmp41 = tmp44;
                              }
                            }
                          }
                        }
                        const obj4 = { source: tmp17 };
                        const merged = Object.assign(tmp4);
                        obj4.avatarStyle = tmp34;
                        obj4.isStageCall = tmp15;
                        const tmp40 = v65535(native.Avatar, obj4);
                        cResult[31] = tmp4;
                        cResult[32] = tmp15;
                        cResult[33] = tmp17;
                        cResult[34] = tmp34;
                        cResult[35] = tmp40;
                        tmp35 = tmp40;
                      }
                      const items2 = [tmp5, tmp32];
                      cResult[28] = tmp5;
                      cResult[29] = tmp32;
                      cResult[30] = items2;
                      tmp34 = items2;
                    }
                  }
                  let tmp33 = null;
                  if (tmp15) {
                    tmp33 = null;
                    if (!tmp25) {
                      const obj5 = { backgroundColor: tmp20 };
                      tmp33 = obj5;
                    }
                  }
                  cResult[24] = tmp20;
                  cResult[25] = tmp15;
                  cResult[26] = tmp25;
                  cResult[27] = tmp33;
                  tmp32 = tmp33;
                }
              }
            }
            const items3 = [tmp8, tmp16.videoBackground, tmp28, videoDetailsSpacer];
            cResult[19] = tmp8;
            cResult[20] = tmp16.videoBackground;
            cResult[21] = tmp28;
            cResult[22] = videoDetailsSpacer;
            cResult[23] = items3;
            tmp31 = items3;
          }
          let tmp29 = null;
          if (!tmp25) {
            const obj6 = { backgroundColor: tmp20 };
            tmp29 = obj6;
          }
          cResult[16] = tmp20;
          cResult[17] = tmp25;
          cResult[18] = tmp29;
          tmp28 = tmp29;
        }
      }
      const obj7 = { userId: id, guildId: tmp6, location: "VideoBackground-native" };
      cResult[11] = tmp6;
      cResult[12] = id;
      cResult[13] = obj7;
      tmp22 = obj7;
    }
  : (style) => {
      ({ url, isStageCall } = style);
      if (isStageCall === undefined) {
        isStageCall = false;
      }
      ({ user, renderVideoDetails } = style);
      ({ avatarStyle, guildId } = style);
      const merged = Object.assign(
        style,
        Object.assign({ style: 0, url: 0, isStageCall: 0, avatarStyle: 0, user: 0, guildId: 0, renderVideoDetails: 0 }),
      );
      const tmp2 = closure_12();
      const tmp3 = memoizeResult(url);
      const tmp4 = closure_15(url, tmp3);
      let id;
      if (user != null) {
        id = user.id;
      }
      const tmp7Result = useProfileTileGradientDefault({ userId: id, guildId, location: "VideoBackground-native" });
      if (null == tmp3) {
        return null;
      } else {
        let renderVideoDetailsResult;
        if (renderVideoDetails != null) {
          renderVideoDetailsResult = renderVideoDetails();
        }
        if (renderVideoDetailsResult == null) {
          renderVideoDetailsResult = null;
        }
        const items = [style.style, tmp2.videoBackground, ,];
        let tmp12 = null;
        if (!tmp10) {
          const obj = { backgroundColor: tmp4 };
          tmp12 = obj;
        }
        items[2] = tmp12;
        let videoDetailsSpacer = null;
        if (null != renderVideoDetailsResult) {
          videoDetailsSpacer = tmp2.videoDetailsSpacer;
        }
        items[3] = videoDetailsSpacer;
        let tmp14 = null;
        if (isStageCall) {
          tmp14 = null;
          if (!tmp10) {
            const obj2 = { backgroundColor: tmp4 };
            tmp14 = obj2;
          }
        }
        const obj3 = { source: tmp3 };
        const merged1 = Object.assign(merged);
        const items1 = [avatarStyle, tmp14];
        obj3.avatarStyle = items1;
        obj3.isStageCall = isStageCall;
        const tmp20 = v65535(native.Avatar, obj3);
        if (null != tmp7Result) {
          const obj4 = { colors: tmp7Result, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: items, children: null };
          const items2 = [tmp20, renderVideoDetailsResult];
          obj4.children = items2;
          let tmp23 = closure_1_11(LinearGradientDefault, obj4);
        } else {
          const obj5 = { style: items, children: null };
          const items3 = [tmp20, renderVideoDetailsResult];
          obj5.children = items3;
          tmp23 = closure_1_11(React5, obj5);
        }
        return tmp23;
      }
    };
tmp6.AvatarSizes = fn(1188).AvatarSizes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/native/VideoBackground.tsx");

export default noop.memo(tmp6);
export const AvatarSizes = fn(1188).AvatarSizes;
export const memoizedImageSource = memoizeResult;
export { useDominantRGBFromImage };
export const useDominantColorFromImage = tmp5;
