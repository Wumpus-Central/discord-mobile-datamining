// === Module 7920: VideoBackground ===

// Module 7920 (VideoBackground)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1188 */;
import react_nativeDefault from "react-native" /* 1886 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import VideoBackgroundManagerDefault from "VideoBackgroundManager" /* 7922 */;
import useProfileTileGradientDefault from "useProfileTileGradient" /* 7923 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import module_12 from "module_12" /* 12 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let c10;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
function useDominantRGBFromImage(assetImage, cResult) {
  let closure_2;
  let first1;
  _require = assetImage;
  let first = cResult;
  let tmp = cResult;
  if (Array.isArray(cResult)) {
    first = cResult[0];
    tmp = first;
  }
  const tmp3 = first;
  const tmp5 = first(7921)();
  dependencyMap = tmp5;
  let hexToRgbResult;
  const useState = react.useState;
  if (null != assetImage) {
    hexToRgbResult = tmp3(7922).cachedDominantColors[assetImage];
  }
  if (hexToRgbResult == null) {
    const obj2 = require("ColorUtils");
    hexToRgbResult = obj2.hexToRgb(tmp3(587).unsafe_rawColors.PRIMARY_800);
  }
  [first1, closure_3] = useState(hexToRgbResult);
  const items = [tmp, assetImage, tmp5];
  const effect = react.useEffect(() => {
    const tmp2 = null != first && null != assetImage;
    if (tmp2) {
      if (null == VideoBackgroundManagerDefault.cachedDominantColors[assetImage]) {
        let dominantColorsLocalAsset;
        if (typeof first === "number") {
          const tmp4Result = react_nativeDefault;
          dominantColorsLocalAsset = tmp4Result.getDominantColorsLocalAsset(metroImportAll.resolveAssetSource(first));
        } else {
          const tmp4Result2 = react_nativeDefault;
          dominantColorsLocalAsset = tmp4Result2.getDominantColors(metroImportAll.resolveAssetSource(first));
        }
        const nextPromise = dominantColorsLocalAsset.then((result) => {
          if (closure_1_2()) {
            const obj = { r: null, g: null, b: null };
            [obj.r, obj.g, obj.b] = result[0];
            _slicedToArray(result[0], 3);
            closure_1_3(obj);
            first(closure_2[9]).cachedDominantColors[assetImage] = obj;
          }
        });
        nextPromise.catch(NOOP);
      } else {
        closure_3(VideoBackgroundManagerDefault.cachedDominantColors[tmp6]);
      }
    }
  }, items);
  return first1;
}
let closure_3 = ["style", "url", "isStageCall", "avatarStyle", "user", "guildId", "renderVideoDetails"];
({ View: metroImportDefault, Image: metroImportAll } = react_native);
const NOOP = Constants.NOOP;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({ videoBackground: { alignItems: "center" }, videoDetailsSpacer: { paddingTop: 12 } });
const memoizeResult = module_12.memoize((uri) => {
  let tmp = null;
  if (null != uri) {
    tmp = null;
    if ("" !== uri) {
      let tmp2 = uri;
      if (typeof uri !== "number") {
        tmp2 = { uri };
        const obj = { uri };
      }
      tmp = tmp2;
    }
  }
  return tmp;
});
const map1 = memoizeResult;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((assetImage, cResult) => {
  const tmp = useDominantRGBFromImage(assetImage, cResult);
  return "rgb(" + tmp.r + ", " + tmp.g + ", " + tmp.b + ")";
}) : ((assetImage, cResult) => {
  const tmp = useDominantRGBFromImage(assetImage, cResult);
  return "rgb(" + tmp.r + ", " + tmp.g + ", " + tmp.b + ")";
});
let closure_15 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let avatarStyle;
  let guildId;
  let isStageCall;
  let items;
  let items1;
  let renderVideoDetails;
  let style;
  let tmp10;
  let tmp11;
  let tmp17;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let url;
  let user;
  const obj = react2;
  const cResult = obj.c(47);
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
    tmp11 = user;
    tmp10 = url;
    tmp9 = isStageCall;
    tmp8 = style;
    tmp7 = renderVideoDetails;
    tmp6 = guildId;
    tmp5 = avatarStyle;
    tmp4 = tmp14;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
    tmp11 = cResult[8];
  }
  const tmp16 = closure_12();
  if (cResult[9] !== tmp10) {
    const tmp19 = map1(tmp10);
    cResult[9] = tmp10;
    cResult[10] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[10];
  }
  const tmp20 = closure_15(tmp10, tmp17);
  let id;
  if (tmp11 != null) {
    id = tmp11.id;
  }
  if (cResult[11] === tmp6) {
    let tmp22;
    if (cResult[12] === id) {
      tmp22 = cResult[13];
    }
    const tmp24 = useProfileTileGradientDefault(tmp22);
    if (null == tmp17) {
      return null;
    } else {
      let tmp26;
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
        tmp26 = tmp7Result;
      } else {
        tmp26 = cResult[15];
      }
      if (cResult[16] === tmp20) {
        let tmp28;
        if (cResult[17] === null != tmp24) {
          tmp28 = cResult[18];
        }
        let videoDetailsSpacer = null;
        if (null != tmp26) {
          videoDetailsSpacer = tmp16.videoDetailsSpacer;
        }
        if (cResult[19] === tmp8) {
          if (cResult[20] === tmp16.videoBackground) {
            if (cResult[21] === tmp28) {
              let tmp31;
              if (cResult[22] === videoDetailsSpacer) {
                tmp31 = cResult[23];
              }
              if (cResult[24] === tmp20) {
                if (cResult[25] === (undefined !== tmp9 && tmp9)) {
                  let tmp32;
                  if (cResult[26] === null != tmp24) {
                    tmp32 = cResult[27];
                  }
                  if (cResult[28] === tmp5) {
                    let tmp34;
                    if (cResult[29] === tmp32) {
                      tmp34 = cResult[30];
                    }
                    if (cResult[31] === tmp4) {
                      if (cResult[32] === (undefined !== tmp9 && tmp9)) {
                        if (cResult[33] === tmp17) {
                          let tmp35;
                          let tmp41;
                          if (cResult[34] === tmp34) {
                            tmp35 = cResult[35];
                          }
                          if (null != tmp24) {
                            let tmp47;
                            let tmp46;
                            const _Symbol = Symbol;
                            if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
                              const point = { x: 0, y: 0 };
                              const point1 = { x: 0, y: 1 };
                              cResult[36] = point;
                              cResult[37] = point1;
                              tmp47 = point1;
                              tmp46 = point;
                            } else {
                              tmp46 = cResult[36];
                              tmp47 = cResult[37];
                            }
                            if (cResult[38] === tmp35) {
                              if (cResult[39] === tmp31) {
                                if (cResult[40] === tmp24) {
                                  let tmp48;
                                  if (cResult[41] === tmp26) {
                                    tmp48 = cResult[42];
                                  }
                                  tmp41 = tmp48;
                                }
                              }
                            }
                            const obj2 = { colors: tmp24, start: tmp46, end: tmp47, style: tmp31, children: items };
                            items = [tmp35, tmp26];
                            const tmp50 = unpackModuleId(LinearGradientDefault, obj2);
                            cResult[38] = tmp35;
                            cResult[39] = tmp31;
                            cResult[40] = tmp24;
                            cResult[41] = tmp26;
                            cResult[42] = tmp50;
                            tmp48 = tmp50;
                          } else {
                            if (cResult[43] === tmp35) {
                              if (cResult[44] === tmp31) {
                                if (cResult[45] === tmp26) {
                                  tmp41 = cResult[46];
                                }
                              }
                            }
                            const obj3 = { style: tmp31, children: items1 };
                            items1 = [tmp35, tmp26];
                            const tmp44 = unpackModuleId(metroImportDefault, obj3);
                            cResult[43] = tmp35;
                            cResult[44] = tmp31;
                            cResult[45] = tmp26;
                            cResult[46] = tmp44;
                            tmp41 = tmp44;
                          }
                          return tmp41;
                        }
                      }
                    }
                    const obj4 = { source: tmp17, avatarStyle: tmp34, isStageCall: undefined !== tmp9 && tmp9 };
                    const Avatar = native.Avatar;
                    const merged = Object.assign(tmp4);
                    const tmp40 = authStore(Avatar, obj4);
                    cResult[31] = tmp4;
                    cResult[32] = undefined !== tmp9 && tmp9;
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
              if (undefined !== tmp9 && tmp9) {
                tmp33 = null;
                if (null == tmp24) {
                  tmp33 = { backgroundColor: tmp20 };
                  const obj5 = { backgroundColor: tmp20 };
                }
              }
              cResult[24] = tmp20;
              cResult[25] = undefined !== tmp9 && tmp9;
              cResult[26] = null != tmp24;
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
      if (null == tmp24) {
        tmp29 = { backgroundColor: tmp20 };
        const obj6 = { backgroundColor: tmp20 };
      }
      cResult[16] = tmp20;
      cResult[17] = null != tmp24;
      cResult[18] = tmp29;
      tmp28 = tmp29;
    }
  }
  const obj7 = { userId: id, guildId: tmp6, location: "VideoBackground-native" };
  cResult[11] = tmp6;
  cResult[12] = id;
  cResult[13] = obj7;
  tmp22 = obj7;
}) : ((style) => {
  let avatarStyle;
  let guildId;
  let isStageCall;
  let items1;
  let items2;
  let items3;
  let renderVideoDetails;
  let url;
  let user;
  ({ url, isStageCall } = style);
  style = style.style;
  if (isStageCall === undefined) {
    isStageCall = false;
  }
  ({ user, renderVideoDetails } = style);
  ({ avatarStyle, guildId } = style);
  const merged = Object.assign(style, Object.assign({ style: 0, url: 0, isStageCall: 0, avatarStyle: 0, user: 0, guildId: 0, renderVideoDetails: 0 }));
  const tmp2 = closure_12();
  const tmp3 = map1(url);
  const tmp4 = closure_15(url, tmp3);
  let id;
  const tmp7 = useProfileTileGradientDefault;
  if (user != null) {
    id = user.id;
  }
  const tmp7Result = tmp7({ userId: id, guildId, location: "VideoBackground-native" });
  if (null == tmp3) {
    return null;
  } else {
    let tmp23;
    let renderVideoDetailsResult;
    if (renderVideoDetails != null) {
      renderVideoDetailsResult = renderVideoDetails();
    }
    if (renderVideoDetailsResult == null) {
      renderVideoDetailsResult = null;
    }
    const items = [style, tmp2.videoBackground, , ];
    let tmp12 = null;
    if (null == tmp7Result) {
      tmp12 = { backgroundColor: tmp4 };
      const obj = { backgroundColor: tmp4 };
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
      if (null == tmp7Result) {
        tmp14 = { backgroundColor: tmp4 };
        const obj2 = { backgroundColor: tmp4 };
      }
    }
    const obj3 = { source: tmp3, avatarStyle: items1, isStageCall };
    const Avatar = native.Avatar;
    const merged1 = Object.assign(merged);
    items1 = [avatarStyle, tmp14];
    const tmp20 = authStore(Avatar, obj3);
    if (null != tmp7Result) {
      const obj4 = { colors: tmp7Result, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: items, children: items2 };
      items2 = [tmp20, renderVideoDetailsResult];
      tmp23 = unpackModuleId(LinearGradientDefault, obj4);
    } else {
      const obj5 = { style: items, children: items3 };
      items3 = [tmp20, renderVideoDetailsResult];
      tmp23 = unpackModuleId(metroImportDefault, obj5);
    }
    return tmp23;
  }
});
tmp6.AvatarSizes = native.AvatarSizes;
const memoResult = react.memo(tmp6);
const result = size.fileFinishedImporting("modules/calls/native/VideoBackground.tsx");

export default memoResult;
export const AvatarSizes = native.AvatarSizes;
export const memoizedImageSource = memoizeResult;
export { useDominantRGBFromImage };
export const useDominantColorFromImage = tmp5;