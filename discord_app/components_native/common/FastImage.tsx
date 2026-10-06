// === Module 5981: FastImage ===

// Module 5981 (FastImage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import FastImageNativeComponentDefault from "FastImageNativeComponent" /* 5982 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3 = ["accessible", "accessibilityLabel", "enableAnimation", "fade", "manualPlayback", "paused", "placeholder", "source", "style", "tintColor", "usesSmallCache"];
const Image = react_native.Image;
const jsx = Fragment.jsx;
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityLabel;
  let accessible;
  let enableAnimation;
  let fade;
  let manualPlayback;
  let paused;
  let placeholder;
  let source;
  let style;
  let tintColor;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp22;
  let tmp23;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let usesSmallCache;
  const obj = react2;
  const cResult = obj.c(44);
  if (cResult[0] !== arg0) {
    ({ accessible, accessibilityLabel, enableAnimation, fade, manualPlayback, paused, placeholder, source, style, tintColor, usesSmallCache } = arg0);
    const tmp18 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = accessibilityLabel;
    cResult[2] = accessible;
    cResult[3] = manualPlayback;
    cResult[4] = paused;
    cResult[5] = placeholder;
    cResult[6] = tmp18;
    cResult[7] = source;
    cResult[8] = style;
    cResult[9] = enableAnimation;
    cResult[10] = fade;
    cResult[11] = usesSmallCache;
    cResult[12] = tintColor;
    tmp15 = tintColor;
    tmp14 = usesSmallCache;
    tmp13 = fade;
    tmp12 = enableAnimation;
    tmp11 = style;
    tmp10 = source;
    tmp9 = tmp18;
    tmp8 = placeholder;
    tmp7 = paused;
    tmp6 = manualPlayback;
    tmp5 = accessible;
    tmp4 = accessibilityLabel;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
    tmp11 = cResult[8];
    tmp12 = cResult[9];
    tmp13 = cResult[10];
    tmp14 = cResult[11];
    tmp15 = cResult[12];
  }
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { overflow: "hidden" };
    cResult[13] = obj2;
    tmp22 = obj2;
  } else {
    tmp22 = cResult[13];
  }
  if (cResult[14] !== tmp15) {
    let tmp25;
    if (null != tmp15) {
      tmp25 = { tintColor: tmp15 };
      const obj3 = { tintColor: tmp15 };
    }
    cResult[14] = tmp15;
    cResult[15] = tmp25;
    tmp23 = tmp25;
  } else {
    tmp23 = cResult[15];
  }
  if (cResult[16] === tmp11) {
    let tmp26;
    let tmp43;
    if (cResult[17] === tmp23) {
      tmp26 = cResult[18];
    }
    if (tmp5 == null) {
      tmp5 = null != tmp4 || undefined;
    }
    const tmpResult = PlatformUtils;
    if (!tmpResult.isAndroid()) {
      if (typeof tmp10 !== "number") {
        let tmp30;
        const _Array = Array;
        let first = tmp10;
        if (Array.isArray(tmp10)) {
          first = tmp10[0];
        }
        if (cResult[30] !== tmp8) {
          let assetSource = null;
          if (null != tmp8) {
            assetSource = Image.resolveAssetSource(tmp8);
          }
          let uri;
          if (assetSource != null) {
            uri = assetSource.uri;
          }
          cResult[30] = tmp8;
          cResult[31] = uri;
          tmp30 = uri;
        } else {
          tmp30 = cResult[31];
        }
        if (cResult[32] === tmp4) {
          if (cResult[33] === tmp5) {
            if (cResult[34] === (undefined === tmp12 || tmp12)) {
              if (cResult[35] === (undefined === tmp13 || tmp13)) {
                if (cResult[36] === tmp6) {
                  if (cResult[37] === tmp7) {
                    if (cResult[38] === tmp9) {
                      if (cResult[39] === tmp26) {
                        if (cResult[40] === first) {
                          if (cResult[41] === tmp30) {
                            let tmp34;
                            if (cResult[42] === (undefined !== tmp14 && tmp14)) {
                              tmp34 = cResult[43];
                            }
                            return tmp34;
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
        FastImageNativeComponentDefault;
        const merged = Object.assign(tmp9);
        const tmp41 = <tmp37 accessible={tmp5} accessibilityLabel={tmp4} source={first} style={tmp26} placeholder={tmp30} enableAnimation={undefined === tmp12 || tmp12} paused={tmp7} manualPlayback={tmp6} fade={undefined === tmp13 || tmp13} usesSmallCache={undefined !== tmp14 && tmp14} />;
        cResult[32] = tmp4;
        cResult[33] = tmp5;
        cResult[34] = undefined === tmp12 || tmp12;
        cResult[35] = undefined === tmp13 || tmp13;
        cResult[36] = tmp6;
        cResult[37] = tmp7;
        cResult[38] = tmp9;
        cResult[39] = tmp26;
        cResult[40] = first;
        cResult[41] = tmp30;
        cResult[42] = undefined !== tmp14 && tmp14;
        cResult[43] = tmp41;
        tmp34 = tmp41;
      }
    }
    let tmp42;
    const tmpResult3 = PlatformUtils;
    if (tmpResult3.isAndroid()) {
      tmp42 = tmp8;
    }
    if (cResult[19] !== tmp9) {
      let num31 = 0;
      const tmpResult4 = PlatformUtils;
      if (!tmpResult4.isAndroid()) {
        num31 = tmp9.fadeDuration;
      }
      cResult[19] = tmp9;
      cResult[20] = num31;
      tmp43 = num31;
    } else {
      tmp43 = cResult[20];
    }
    if (cResult[21] === tmp4) {
      if (cResult[22] === tmp5) {
        if (cResult[23] === tmp9) {
          if (cResult[24] === tmp10) {
            if (cResult[25] === tmp26) {
              if (cResult[26] === tmp42) {
                if (cResult[27] === tmp43) {
                  let tmp44;
                  if (cResult[28] === tmp15) {
                    tmp44 = cResult[29];
                  }
                  return tmp44;
                }
              }
            }
          }
        }
      }
    }
    const merged1 = Object.assign(tmp9);
    const tmp50 = <Image source={tmp10} style={tmp26} tintColor={tmp15} accessible={tmp5} accessibilityLabel={tmp4} defaultSource={tmp42} fadeDuration={tmp43} />;
    cResult[21] = tmp4;
    cResult[22] = tmp5;
    cResult[23] = tmp9;
    cResult[24] = tmp10;
    cResult[25] = tmp26;
    cResult[26] = tmp42;
    cResult[27] = tmp43;
    cResult[28] = tmp15;
    cResult[29] = tmp50;
    tmp44 = tmp50;
  }
  const items = [tmp22, tmp11, tmp23];
  cResult[16] = tmp11;
  cResult[17] = tmp23;
  cResult[18] = items;
  tmp26 = items;
}) : ((fade) => {
  let accessibilityLabel;
  let accessible;
  let enableAnimation;
  let manualPlayback;
  let paused;
  let placeholder;
  let source;
  let style;
  let tintColor;
  let usesSmallCache;
  ({ accessible, accessibilityLabel, enableAnimation } = fade);
  if (enableAnimation === undefined) {
    enableAnimation = true;
  }
  let flag = fade.fade;
  if (flag === undefined) {
    flag = true;
  }
  ({ placeholder, source, tintColor, usesSmallCache, manualPlayback, paused, style } = fade);
  if (usesSmallCache === undefined) {
    usesSmallCache = false;
  }
  const merged = Object.assign(fade, Object.assign({ accessible: 0, accessibilityLabel: 0, enableAnimation: 0, fade: 0, manualPlayback: 0, paused: 0, placeholder: 0, source: 0, style: 0, tintColor: 0, usesSmallCache: 0 }));
  const items = [{ overflow: "hidden" }, style, ];
  let tmp2;
  if (null != tintColor) {
    tmp2 = { tintColor };
    const obj = { tintColor };
  }
  items[2] = tmp2;
  if (accessible == null) {
    accessible = null != accessibilityLabel || undefined;
  }
  const obj2 = PlatformUtils;
  if (!obj2.isAndroid()) {
    let tmp11Result;
    if (typeof source !== "number") {
      FastImageNativeComponentDefault;
      const merged1 = Object.assign(merged);
      const _Array = Array;
      let first = source;
      if (Array.isArray(source)) {
        first = source[0];
      }
      let assetSource = null;
      if (null != placeholder) {
        assetSource = Image.resolveAssetSource(placeholder);
      }
      let uri;
      if (assetSource != null) {
        uri = assetSource.uri;
      }
      tmp11Result = <tmp17 accessible={accessible} accessibilityLabel={accessibilityLabel} source={first} style={items} placeholder={uri} enableAnimation={enableAnimation} paused={paused} manualPlayback={manualPlayback} fade={flag} usesSmallCache={usesSmallCache} />;
    }
    return tmp11Result;
  }
  const merged2 = Object.assign(merged);
  let tmp14;
  const tmp4Result = PlatformUtils;
  if (tmp4Result.isAndroid()) {
    tmp14 = placeholder;
  }
  let num = 0;
  const tmp4Result2 = PlatformUtils;
  if (!tmp4Result2.isAndroid()) {
    num = merged.fadeDuration;
  }
  tmp11Result = <Image source={source} style={items} tintColor={tintColor} accessible={accessible} accessibilityLabel={accessibilityLabel} defaultSource={tmp14} fadeDuration={num} />;
}));
const result = size.fileFinishedImporting("components_native/common/FastImage.tsx");

export default memoResult;