// === Module 6164: FastImage ===

// Module 6164 (FastImage)
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import FastImageNativeComponentDefault from "FastImageNativeComponent" /* 6165 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["accessible", "accessibilityLabel", "autoPlay", "enableAnimation", "fadeDuration", "paused", "placeholder", "resizeMode", "source", "style", "tintColor", "usesSmallCache"];
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/FastImage.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function FastImage(arg0) {
  const cResult = c.c(47);
  if (cResult[0] !== arg0) {
    ({ accessible, accessibilityLabel, autoPlay, enableAnimation, fadeDuration, paused, placeholder, resizeMode, source, style, tintColor, usesSmallCache } = arg0);
    const tmp19 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = accessibilityLabel;
    cResult[2] = accessible;
    cResult[3] = paused;
    cResult[4] = placeholder;
    cResult[5] = tmp19;
    cResult[6] = resizeMode;
    cResult[7] = source;
    cResult[8] = style;
    cResult[9] = autoPlay;
    cResult[10] = enableAnimation;
    cResult[11] = fadeDuration;
    cResult[12] = usesSmallCache;
    cResult[13] = tintColor;
    let tmp16 = tintColor;
    let tmp14 = fadeDuration;
    let tmp11 = style;
    let tmp10 = source;
    let tmp9 = resizeMode;
    let tmp8 = tmp19;
    let tmp7 = placeholder;
    let tmp6 = paused;
    let tmp5 = accessible;
    let tmp4 = accessibilityLabel;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
    tmp11 = cResult[8];
    tmp14 = cResult[11];
    tmp16 = cResult[13];
  }
  let num15 = 200;
  if (undefined !== tmp14) {
    num15 = tmp14;
  }
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { overflow: "hidden" };
    cResult[14] = obj2;
    let tmp23 = obj2;
  } else {
    tmp23 = cResult[14];
  }
  if (cResult[15] !== tmp16) {
    let tmp26;
    if (null != tmp16) {
      const obj3 = { tintColor: tmp16 };
      tmp26 = obj3;
    }
    cResult[15] = tmp16;
    cResult[16] = tmp26;
    let tmp24 = tmp26;
  } else {
    tmp24 = cResult[16];
  }
  if (cResult[17] !== tmp9) {
    let tmp29;
    if (null != tmp9) {
      const obj4 = { resizeMode: tmp9 };
      tmp29 = obj4;
    }
    cResult[17] = tmp9;
    cResult[18] = tmp29;
    let tmp27 = tmp29;
  } else {
    tmp27 = cResult[18];
  }
  if (cResult[19] === tmp11) {
    if (cResult[20] === tmp24) {
      if (cResult[21] === tmp27) {
        let tmp30 = cResult[22];
      }
      if (tmp5 == null) {
        tmp5 = null != tmp4 || undefined;
        const tmp32 = null != tmp4 || undefined;
      }
      let tmp33 = null != tmp10 && typeof tmp10 === "object";
      if (tmp33) {
        tmp33 = "__packager_asset" in tmp10;
      }
      if (tmp33) {
        tmp33 = true === tmp10.__packager_asset;
      }
      const _Array = Array;
      const isArray = Array.isArray(tmp10);
      timestampProducer.flatten(tmp11);
      if (!tmpResult.isAndroid()) {
        if (typeof tmp10 !== "number") {
          if (!tmp33) {
            const _Array2 = Array;
            let first = tmp10;
            if (Array.isArray(tmp10)) {
              first = tmp10[0];
            }
            if (cResult[33] !== tmp7) {
              let assetSource = null;
              if (null != tmp7) {
                assetSource = hasOwnProperty.resolveAssetSource(tmp7);
              }
              let uri;
              if (assetSource != null) {
                uri = assetSource.uri;
              }
              cResult[33] = tmp7;
              cResult[34] = uri;
              let tmp38 = uri;
            } else {
              tmp38 = cResult[34];
            }
            if (cResult[35] === tmp4) {
              if (cResult[36] === tmp5) {
                if (cResult[37] === tmp20) {
                  if (cResult[38] === tmp21) {
                    if (cResult[39] === num15) {
                      if (cResult[40] === tmp6) {
                        if (cResult[41] === tmp8) {
                          if (cResult[42] === tmp30) {
                            if (cResult[43] === tmp38) {
                              if (cResult[44] === first) {
                                if (cResult[45] === tmp22) {
                                  let tmp42 = cResult[46];
                                }
                                return tmp42;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            const obj5 = {};
            const merged = Object.assign(tmp8);
            obj5.accessible = tmp5;
            obj5.accessibilityLabel = tmp4;
            obj5.source = first;
            obj5.style = tmp30;
            obj5.placeholder = tmp38;
            obj5.autoPlay = tmp20;
            obj5.enableAnimation = tmp21;
            obj5.paused = tmp6;
            obj5.fadeDuration = num15;
            obj5.usesSmallCache = tmp22;
            const tmp49 = jsx(FastImageNativeComponentDefault, {});
            cResult[35] = tmp4;
            cResult[36] = tmp5;
            cResult[37] = tmp20;
            cResult[38] = tmp21;
            cResult[39] = num15;
            cResult[40] = tmp6;
            cResult[41] = tmp8;
            cResult[42] = tmp30;
            cResult[43] = tmp38;
            cResult[44] = first;
            cResult[45] = tmp22;
            cResult[46] = tmp49;
            tmp42 = tmp49;
          }
        }
      }
      tmpResult = PlatformUtils;
      let tmp50;
      if (tmpResult2.isAndroid()) {
        tmp50 = tmp7;
      }
      let num35 = 0;
      if (typeof tmp10 !== "number") {
        num35 = 0;
        if (!tmp33) {
          num35 = num15;
        }
      }
      if (cResult[23] === tmp4) {
        if (cResult[24] === tmp5) {
          if (cResult[25] === tmp8) {
            if (cResult[26] === tmp9) {
              if (cResult[27] === tmp10) {
                if (cResult[28] === tmp30) {
                  if (cResult[29] === num35) {
                    if (cResult[30] === tmp50) {
                      if (cResult[31] === tmp16) {
                        let tmp51 = cResult[32];
                      }
                      return tmp51;
                    }
                  }
                }
              }
            }
          }
        }
      }
      const obj6 = {};
      const merged1 = Object.assign(tmp8);
      obj6.resizeMode = tmp9;
      obj6.source = tmp10;
      obj6.style = tmp30;
      obj6.tintColor = tmp16;
      obj6.accessible = tmp5;
      obj6.accessibilityLabel = tmp4;
      obj6.defaultSource = tmp50;
      obj6.fadeDuration = num35;
      const tmp57 = <hasOwnProperty />;
      cResult[23] = tmp4;
      cResult[24] = tmp5;
      cResult[25] = tmp8;
      cResult[26] = tmp9;
      cResult[27] = tmp10;
      cResult[28] = tmp30;
      cResult[29] = num35;
      cResult[30] = tmp50;
      cResult[31] = tmp16;
      cResult[32] = tmp57;
      tmp51 = tmp57;
      tmpResult2 = PlatformUtils;
    }
  }
  const items = [tmp23, tmp11, tmp24, tmp27];
  cResult[19] = tmp11;
  cResult[20] = tmp24;
  cResult[21] = tmp27;
  cResult[22] = items;
  tmp30 = items;
}) : (function FastImage(enableAnimation) {
  ({ accessible, accessibilityLabel, autoPlay } = enableAnimation);
  if (autoPlay === undefined) {
    autoPlay = true;
  }
  let flag = enableAnimation.enableAnimation;
  if (flag === undefined) {
    flag = true;
  }
  let num = enableAnimation.fadeDuration;
  if (num === undefined) {
    num = 200;
  }
  ({ placeholder, resizeMode, source, style, tintColor, usesSmallCache, paused } = enableAnimation);
  if (usesSmallCache === undefined) {
    usesSmallCache = false;
  }
  const merged = Object.assign(enableAnimation, Object.assign({ accessible: 0, accessibilityLabel: 0, autoPlay: 0, enableAnimation: 0, fadeDuration: 0, paused: 0, placeholder: 0, resizeMode: 0, source: 0, style: 0, tintColor: 0, usesSmallCache: 0 }));
  const items = [{ overflow: "hidden" }, style, , ];
  let tmp2;
  if (null != tintColor) {
    const obj = { tintColor };
    tmp2 = obj;
  }
  items[2] = tmp2;
  let tmp3;
  if (null != resizeMode) {
    const obj2 = { resizeMode };
    tmp3 = obj2;
  }
  items[3] = tmp3;
  if (accessible == null) {
    accessible = null != accessibilityLabel || undefined;
    const tmp4 = null != accessibilityLabel || undefined;
  }
  let tmp5 = null != source && typeof source === "object";
  if (tmp5) {
    tmp5 = "__packager_asset" in source;
  }
  if (tmp5) {
    tmp5 = true === source.__packager_asset;
  }
  const isArray = Array.isArray(source);
  timestampProducer.flatten(style);
  if (!obj3.isAndroid()) {
    if (typeof source !== "number") {
      if (!tmp5) {
        const obj4 = {};
        const merged1 = Object.assign(merged);
        obj4.accessible = accessible;
        obj4.accessibilityLabel = accessibilityLabel;
        const _Array = Array;
        let first = source;
        if (Array.isArray(source)) {
          first = source[0];
        }
        obj4.source = first;
        obj4.style = items;
        let assetSource = null;
        if (null != placeholder) {
          assetSource = hasOwnProperty.resolveAssetSource(placeholder);
        }
        let uri;
        if (assetSource != null) {
          uri = assetSource.uri;
        }
        obj4.placeholder = uri;
        obj4.autoPlay = autoPlay;
        obj4.enableAnimation = flag;
        obj4.paused = paused;
        obj4.fadeDuration = num;
        obj4.usesSmallCache = usesSmallCache;
        let tmp21Result = jsx(FastImageNativeComponentDefault, {});
      }
      return tmp21Result;
    }
  }
  const obj5 = {};
  const merged2 = Object.assign(merged);
  obj5.resizeMode = resizeMode;
  obj5.source = source;
  obj5.style = items;
  obj5.tintColor = tintColor;
  obj5.accessible = accessible;
  obj5.accessibilityLabel = accessibilityLabel;
  obj3 = PlatformUtils;
  let tmp24;
  if (tmp8Result.isAndroid()) {
    tmp24 = placeholder;
  }
  obj5.defaultSource = tmp24;
  let num2 = 0;
  if (typeof source !== "number") {
    num2 = 0;
    if (!tmp5) {
      num2 = num;
    }
  }
  obj5.fadeDuration = num2;
  tmp21Result = <hasOwnProperty />;
  tmp8Result = PlatformUtils;
}));