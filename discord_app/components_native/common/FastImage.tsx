// discord_app/components_native/common/FastImage.tsx
import c from "../../../_runtime/00576_c.js";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import FastImageNativeComponentDefault from "../../../discord_common/js/packages/rtn-codegen/js/FastImageNativeComponent.tsx";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = [
  "accessible",
  "accessibilityLabel",
  "enableAnimation",
  "fade",
  "manualPlayback",
  "paused",
  "placeholder",
  "source",
  "style",
  "tintColor",
  "usesSmallCache",
];
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/FastImage.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = c.c(44);
        if (cResult[0] !== arg0) {
          ({
            accessible,
            accessibilityLabel,
            enableAnimation,
            fade,
            manualPlayback,
            paused,
            placeholder,
            source,
            style,
            tintColor,
            usesSmallCache,
          } = arg0);
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
          let tmp15 = tintColor;
          let tmp11 = style;
          let tmp10 = source;
          let tmp9 = tmp18;
          let tmp8 = placeholder;
          let tmp7 = paused;
          let tmp6 = manualPlayback;
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
          tmp15 = cResult[12];
        }
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { overflow: "hidden" };
          cResult[13] = obj2;
          let tmp22 = obj2;
        } else {
          tmp22 = cResult[13];
        }
        if (cResult[14] !== tmp15) {
          let tmp25;
          if (null != tmp15) {
            const obj3 = { tintColor: tmp15 };
            tmp25 = obj3;
          }
          cResult[14] = tmp15;
          cResult[15] = tmp25;
          let tmp23 = tmp25;
        } else {
          tmp23 = cResult[15];
        }
        if (cResult[16] === tmp11) {
          if (cResult[17] === tmp23) {
            let tmp26 = cResult[18];
          }
          if (tmp5 == null) {
            tmp5 = null != tmp4 || undefined;
            const tmp28 = null != tmp4 || undefined;
          }
          if (!tmpResult.isAndroid()) {
            if (typeof tmp10 !== "number") {
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
                let tmp30 = uri;
              } else {
                tmp30 = cResult[31];
              }
              if (cResult[32] === tmp4) {
                if (cResult[33] === tmp5) {
                  if (cResult[34] === tmp19) {
                    if (cResult[35] === tmp20) {
                      if (cResult[36] === tmp6) {
                        if (cResult[37] === tmp7) {
                          if (cResult[38] === tmp9) {
                            if (cResult[39] === tmp26) {
                              if (cResult[40] === first) {
                                if (cResult[41] === tmp30) {
                                  if (cResult[42] === tmp21) {
                                    let tmp34 = cResult[43];
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
              const obj4 = {};
              const merged = Object.assign(tmp9);
              obj4.accessible = tmp5;
              obj4.accessibilityLabel = tmp4;
              obj4.source = first;
              obj4.style = tmp26;
              obj4.placeholder = tmp30;
              obj4.enableAnimation = tmp19;
              obj4.paused = tmp7;
              obj4.manualPlayback = tmp6;
              obj4.fade = tmp20;
              obj4.usesSmallCache = tmp21;
              const tmp41 = jsx(FastImageNativeComponentDefault, {});
              cResult[32] = tmp4;
              cResult[33] = tmp5;
              cResult[34] = tmp19;
              cResult[35] = tmp20;
              cResult[36] = tmp6;
              cResult[37] = tmp7;
              cResult[38] = tmp9;
              cResult[39] = tmp26;
              cResult[40] = first;
              cResult[41] = tmp30;
              cResult[42] = tmp21;
              cResult[43] = tmp41;
              tmp34 = tmp41;
            }
          }
          tmpResult = PlatformUtils;
          let tmp42;
          if (tmpResult3.isAndroid()) {
            tmp42 = tmp8;
          }
          if (cResult[19] !== tmp9) {
            let num31 = 0;
            if (!tmpResult4.isAndroid()) {
              num31 = tmp9.fadeDuration;
            }
            cResult[19] = tmp9;
            cResult[20] = num31;
            let tmp43 = num31;
            tmpResult4 = PlatformUtils;
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
                        if (cResult[28] === tmp15) {
                          let tmp44 = cResult[29];
                        }
                        return tmp44;
                      }
                    }
                  }
                }
              }
            }
          }
          const obj5 = {};
          const merged1 = Object.assign(tmp9);
          obj5.source = tmp10;
          obj5.style = tmp26;
          obj5.tintColor = tmp15;
          obj5.accessible = tmp5;
          obj5.accessibilityLabel = tmp4;
          obj5.defaultSource = tmp42;
          obj5.fadeDuration = tmp43;
          const tmp50 = <Image />;
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
          tmpResult3 = PlatformUtils;
        }
        const items = [tmp22, tmp11, tmp23];
        cResult[16] = tmp11;
        cResult[17] = tmp23;
        cResult[18] = items;
        tmp26 = items;
      }
    : (fade) => {
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
        const merged = Object.assign(
          fade,
          Object.assign({
            accessible: 0,
            accessibilityLabel: 0,
            enableAnimation: 0,
            fade: 0,
            manualPlayback: 0,
            paused: 0,
            placeholder: 0,
            source: 0,
            style: 0,
            tintColor: 0,
            usesSmallCache: 0,
          }),
        );
        const items = [{ overflow: "hidden" }, style];
        let tmp2;
        if (null != tintColor) {
          const obj = { tintColor };
          tmp2 = obj;
        }
        items[2] = tmp2;
        if (accessible == null) {
          accessible = null != accessibilityLabel || undefined;
          const tmp3 = null != accessibilityLabel || undefined;
        }
        if (!obj2.isAndroid()) {
          if (typeof source !== "number") {
            const obj3 = {};
            const merged1 = Object.assign(merged);
            obj3.accessible = accessible;
            obj3.accessibilityLabel = accessibilityLabel;
            const _Array = Array;
            let first = source;
            if (Array.isArray(source)) {
              first = source[0];
            }
            obj3.source = first;
            obj3.style = items;
            let assetSource = null;
            if (null != placeholder) {
              assetSource = Image.resolveAssetSource(placeholder);
            }
            let uri;
            if (assetSource != null) {
              uri = assetSource.uri;
            }
            obj3.placeholder = uri;
            obj3.enableAnimation = enableAnimation;
            obj3.paused = paused;
            obj3.manualPlayback = manualPlayback;
            obj3.fade = flag;
            obj3.usesSmallCache = usesSmallCache;
            let tmp11Result = jsx(FastImageNativeComponentDefault, {});
          }
          return tmp11Result;
        }
        const obj4 = {};
        const merged2 = Object.assign(merged);
        obj4.source = source;
        obj4.style = items;
        obj4.tintColor = tintColor;
        obj4.accessible = accessible;
        obj4.accessibilityLabel = accessibilityLabel;
        obj2 = PlatformUtils;
        let tmp14;
        if (tmp4Result.isAndroid()) {
          tmp14 = placeholder;
        }
        obj4.defaultSource = tmp14;
        tmp4Result = PlatformUtils;
        let num = 0;
        if (!tmp4Result2.isAndroid()) {
          num = merged.fadeDuration;
        }
        obj4.fadeDuration = num;
        tmp11Result = <Image />;
        tmp4Result2 = PlatformUtils;
      },
);
