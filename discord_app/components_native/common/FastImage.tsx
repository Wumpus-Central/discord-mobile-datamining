// discord_app/components_native/common/FastImage.tsx
import c from "../../../_runtime/00576_c.js";
import FastImageNativeComponentDefault from "../../../discord_common/js/packages/rtn-codegen/js/FastImageNativeComponent.tsx";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["tintColor"];
let closure_4 = ["tintColor"];
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_8 = createStyles.createStyles({ base: { overflow: "hidden" } });
let ReactCompilerGating = fn(558);
let memoResult = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (accessible) => {
        const cResult = c.c(22);
        let base = closure_8();
        accessible = accessible.accessible;
        if (accessible == null) {
          accessible = null != accessible.accessibilityLabel || undefined;
          const tmp3 = null != accessible.accessibilityLabel || undefined;
        }
        ({ source, style, tintColor, placeholder, enableAnimation, paused, manualPlayback, fade, usesSmallCache } =
          accessible);
        if (typeof source === "number") {
          if (cResult[0] === accessible) {
            if (cResult[1] === accessible) {
              let tmp29 = cResult[2];
            }
            return tmp29;
          }
          const obj2 = {};
          const merged = Object.assign(accessible);
          obj2.accessible = accessible;
          const tmp35 = <Image />;
          cResult[0] = accessible;
          cResult[1] = accessible;
          cResult[2] = tmp35;
          tmp29 = tmp35;
        } else {
          if (cResult[3] !== placeholder) {
            let assetSource = null;
            if (null != placeholder) {
              assetSource = Image.resolveAssetSource(placeholder);
            }
            cResult[3] = placeholder;
            cResult[4] = assetSource;
            let tmp7 = assetSource;
          } else {
            tmp7 = cResult[4];
          }
          if (!("tintColor" in accessible)) {
            const _Array = Array;
            let first = source;
            if (Array.isArray(source)) {
              first = source[0];
            }
            if (cResult[7] === style) {
              if (cResult[8] === base.base) {
                if (cResult[9] === tintColor) {
                  let uri;
                  if (tmp7 != null) {
                    uri = tmp7.uri;
                  }
                  if (cResult[11] === accessible) {
                    if (cResult[12] === tmp4) {
                      if (cResult[13] === tmp5) {
                        if (cResult[14] === manualPlayback) {
                          if (cResult[15] === accessible) {
                            if (cResult[16] === paused) {
                              if (cResult[17] === first) {
                                if (cResult[18] === tmp18) {
                                  if (cResult[19] === uri) {
                                    if (cResult[20] === tmp6) {
                                      let tmp21 = cResult[21];
                                    }
                                    return tmp21;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj3 = {};
                  const merged1 = Object.assign(accessible);
                  obj3.accessible = accessible;
                  obj3.source = first;
                  obj3.style = cResult[10];
                  obj3.placeholder = uri;
                  obj3.enableAnimation = tmp4;
                  obj3.paused = paused;
                  obj3.manualPlayback = manualPlayback;
                  obj3.fade = tmp5;
                  obj3.usesSmallCache = tmp6;
                  const tmp28 = jsx(FastImageNativeComponentDefault, {});
                  cResult[11] = accessible;
                  cResult[12] = tmp4;
                  cResult[13] = tmp5;
                  cResult[14] = manualPlayback;
                  cResult[15] = accessible;
                  cResult[16] = paused;
                  cResult[17] = first;
                  cResult[18] = cResult[10];
                  cResult[19] = uri;
                  cResult[20] = tmp6;
                  cResult[21] = tmp28;
                  tmp21 = tmp28;
                }
              }
            }
            if (null == tintColor) {
              const items = [base.base, style];
              let items1 = items;
            } else {
              items1 = [base.base, style];
              const obj4 = { tintColor };
              items1[2] = obj4;
            }
            cResult[7] = style;
            base = base.base;
            cResult[8] = base;
            cResult[9] = tintColor;
            cResult[10] = items1;
          } else if (cResult[5] !== accessible) {
            const tintColor2 = accessible.tintColor;
            const tmp14 = _objectWithoutProperties(accessible, closure_3);
            cResult[5] = accessible;
            cResult[6] = tmp14;
          }
        }
      }
    : (accessible) => {
        const tmp = closure_8();
        accessible = accessible.accessible;
        if (accessible == null) {
          accessible = null != accessible.accessibilityLabel || undefined;
          const tmp2 = null != accessible.accessibilityLabel || undefined;
        }
        ({ source, style, tintColor, placeholder, enableAnimation } = accessible);
        const fade = accessible.fade;
        let tmp4 = undefined === fade;
        ({ paused, manualPlayback } = accessible);
        if (!tmp4) {
          tmp4 = fade;
        }
        const usesSmallCache = accessible.usesSmallCache;
        if (typeof source === "number") {
          const obj2 = {};
          const merged = Object.assign(accessible);
          obj2.accessible = accessible;
          return <Image />;
        } else {
          let assetSource = null;
          if (null != placeholder) {
            assetSource = Image.resolveAssetSource(placeholder);
          }
          let tmp8 = accessible;
          if ("tintColor" in accessible) {
            const tintColor2 = accessible.tintColor;
            tmp8 = _objectWithoutProperties(accessible, closure_4);
          }
          const obj = {};
          const merged1 = Object.assign(tmp8);
          obj.accessible = accessible;
          const _Array = Array;
          let first = source;
          if (Array.isArray(source)) {
            first = source[0];
          }
          obj.source = first;
          if (null == tintColor) {
            const items = [tmp.base, style];
            let items1 = items;
          } else {
            items1 = [tmp.base, style];
            const obj3 = { tintColor };
            items1[2] = obj3;
          }
          obj.style = items1;
          let uri;
          if (assetSource != null) {
            uri = assetSource.uri;
          }
          obj.placeholder = uri;
          obj.enableAnimation = tmp3;
          obj.paused = paused;
          obj.manualPlayback = manualPlayback;
          obj.fade = tmp4;
          obj.usesSmallCache = tmp5;
          return jsx(FastImageNativeComponentDefault, {});
        }
        tmp3 = undefined === enableAnimation || enableAnimation;
        tmp5 = undefined !== usesSmallCache && usesSmallCache;
      },
);
ReactCompilerGating = fn(558);
const PlatformUtils = fn(1369);
if (PlatformUtils.isAndroid()) {
  memoResult = tmp3;
}
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/FastImage.tsx");

export default memoResult;
