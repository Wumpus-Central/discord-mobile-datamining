// === Module 5974: FastImage ===

// Module 5974 (FastImage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import FastImageNativeComponentDefault from "FastImageNativeComponent" /* 5975 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import size from "module_2" /* 2 */;

let accessible;

let closure_3 = ["tintColor"];
let closure_4 = ["tintColor"];
const Image = react_native.Image;
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ base: { overflow: "hidden" } });
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((accessible) => {
  let enableAnimation;
  let fade;
  let manualPlayback;
  let paused;
  let placeholder;
  let source;
  let style;
  let tintColor;
  let usesSmallCache;
  const obj = react2;
  const cResult = obj.c(22);
  const tmp3 = closure_8();
  accessible = accessible.accessible;
  if (accessible == null) {
    const tmp4 = null != accessible.accessibilityLabel || undefined;
    accessible = tmp4;
  }
  ({ source, style, tintColor, placeholder, enableAnimation, paused, manualPlayback, fade, usesSmallCache } = accessible);
  if (typeof source === "number") {
    if (cResult[0] === accessible) {
      let tmp28;
      if (cResult[1] === accessible) {
        tmp28 = cResult[2];
      }
      return tmp28;
    }
    const merged = Object.assign(accessible);
    const tmp34 = <Image accessible={accessible} />;
    cResult[0] = accessible;
    cResult[1] = accessible;
    cResult[2] = tmp34;
    tmp28 = tmp34;
  } else {
    let tmp8;
    let items1;
    if (cResult[3] !== placeholder) {
      let assetSource = null;
      if (null != placeholder) {
        assetSource = Image.resolveAssetSource(placeholder);
      }
      cResult[3] = placeholder;
      cResult[4] = assetSource;
      tmp8 = assetSource;
    } else {
      tmp8 = cResult[4];
    }
    let tmp11 = accessible;
    if ("tintColor" in accessible) {
      let tmp12;
      if (cResult[5] !== accessible) {
        const tintColor2 = accessible.tintColor;
        const tmp15 = _objectWithoutProperties(accessible, closure_3);
        cResult[5] = accessible;
        cResult[6] = tmp15;
        tmp12 = tmp15;
      } else {
        tmp12 = cResult[6];
      }
      tmp11 = tmp12;
    }
    const _Array = Array;
    let first = source;
    if (Array.isArray(source)) {
      first = source[0];
    }
    if (cResult[7] === style) {
      if (cResult[8] === tmp3.base) {
        let tmp18;
        if (cResult[9] === tintColor) {
          tmp18 = cResult[10];
        }
        let uri;
        if (tmp8 != null) {
          uri = tmp8.uri;
        }
        if (cResult[11] === accessible) {
          if (cResult[12] === (undefined === enableAnimation || enableAnimation)) {
            if (cResult[13] === (undefined === fade || fade)) {
              if (cResult[14] === manualPlayback) {
                if (cResult[15] === tmp11) {
                  if (cResult[16] === paused) {
                    if (cResult[17] === first) {
                      if (cResult[18] === tmp18) {
                        if (cResult[19] === uri) {
                          let tmp20;
                          if (cResult[20] === (undefined !== usesSmallCache && usesSmallCache)) {
                            tmp20 = cResult[21];
                          }
                          return tmp20;
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
        const merged1 = Object.assign(tmp11);
        const tmp27 = <tmp23 accessible={accessible} source={first} style={tmp18} placeholder={uri} enableAnimation={undefined === enableAnimation || enableAnimation} paused={paused} manualPlayback={manualPlayback} fade={undefined === fade || fade} usesSmallCache={undefined !== usesSmallCache && usesSmallCache} />;
        cResult[11] = accessible;
        cResult[12] = undefined === enableAnimation || enableAnimation;
        cResult[13] = undefined === fade || fade;
        cResult[14] = manualPlayback;
        cResult[15] = tmp11;
        cResult[16] = paused;
        cResult[17] = first;
        cResult[18] = tmp18;
        cResult[19] = uri;
        cResult[20] = undefined !== usesSmallCache && usesSmallCache;
        cResult[21] = tmp27;
        tmp20 = tmp27;
      }
    }
    if (null == tintColor) {
      const items = [tmp3.base, style];
      items1 = items;
    } else {
      items1 = [tmp3.base, style, ];
      const obj4 = { tintColor };
      items1[2] = obj4;
    }
    cResult[7] = style;
    cResult[8] = tmp3.base;
    cResult[9] = tintColor;
    cResult[10] = items1;
    tmp18 = items1;
  }
}) : ((accessible) => {
  let enableAnimation;
  let manualPlayback;
  let paused;
  let placeholder;
  let source;
  let style;
  let tintColor;
  const tmp = closure_8();
  accessible = accessible.accessible;
  if (accessible == null) {
    const tmp2 = null != accessible.accessibilityLabel || undefined;
    accessible = tmp2;
  }
  ({ source, style, tintColor, placeholder, enableAnimation } = accessible);
  const fade = accessible.fade;
  let tmp4 = undefined === fade;
  const tmp3 = undefined === enableAnimation || enableAnimation;
  ({ paused, manualPlayback } = accessible);
  if (!tmp4) {
    tmp4 = fade;
  }
  const usesSmallCache = accessible.usesSmallCache;
  const tmp5 = undefined !== usesSmallCache && usesSmallCache;
  if (typeof source === "number") {
    const merged = Object.assign(accessible);
    return <Image accessible={accessible} />;
  } else {
    let items1;
    let assetSource = null;
    if (null != placeholder) {
      assetSource = Image.resolveAssetSource(placeholder);
    }
    let tmp8 = accessible;
    if ("tintColor" in accessible) {
      const tintColor2 = accessible.tintColor;
      tmp8 = _objectWithoutProperties(accessible, closure_4);
    }
    FastImageNativeComponentDefault;
    const merged1 = Object.assign(tmp8);
    const _Array = Array;
    let first = source;
    if (Array.isArray(source)) {
      first = source[0];
    }
    if (null == tintColor) {
      const items = [tmp.base, style];
      items1 = items;
    } else {
      items1 = [tmp.base, style, ];
      const obj3 = { tintColor };
      items1[2] = obj3;
    }
    let uri;
    if (assetSource != null) {
      uri = assetSource.uri;
    }
    return <tmp14 accessible={accessible} source={first} style={items1} placeholder={uri} enableAnimation={tmp3} paused={paused} manualPlayback={manualPlayback} fade={tmp4} usesSmallCache={tmp5} />;
  }
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((accessible) => {
  const obj = react2;
  const cResult = obj.c(3);
  accessible = accessible.accessible;
  if (accessible == null) {
    const tmp2 = null != accessible.accessibilityLabel || undefined;
    accessible = tmp2;
  }
  if (cResult[0] === accessible) {
    let tmp3;
    if (cResult[1] === accessible) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const merged = Object.assign(accessible);
  const tmp5 = <Image accessible={accessible} defaultSource={accessible.placeholder} fadeDuration={0} />;
  cResult[0] = accessible;
  cResult[1] = accessible;
  cResult[2] = tmp5;
  tmp3 = tmp5;
}) : ((accessible) => {
  accessible = accessible.accessible;
  if (accessible == null) {
    const tmp = null != accessible.accessibilityLabel || undefined;
    accessible = tmp;
  }
  const merged = Object.assign(accessible);
  return <Image accessible={accessible} defaultSource={accessible.placeholder} fadeDuration={0} />;
});
if (PlatformUtils.isAndroid()) {
  memoResult = tmp4;
}
const result = size.fileFinishedImporting("components_native/common/FastImage.tsx");

export default memoResult;