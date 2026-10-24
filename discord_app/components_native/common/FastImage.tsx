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
  "autoPlay",
  "enableAnimation",
  "fadeDuration",
  "paused",
  "placeholder",
  "resizeMode",
  "source",
  "style",
  "tintColor",
  "usesSmallCache",
];
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let FastImageApngExperiment = fn(5670);
FastImageApngExperiment = FastImageApngExperiment.initializeFastImageApngExperiment();
const ReactCompilerGating = fn(558);
let size = fn(2);
const result1 = size.fileFinishedImporting("components_native/common/FastImage.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function FastImage(arg0) {
        const cResult = c.c(56);
        if (cResult[0] !== arg0) {
          ({
            accessible,
            accessibilityLabel,
            autoPlay,
            enableAnimation,
            fadeDuration,
            paused,
            placeholder,
            resizeMode,
            source,
            style,
            tintColor,
            usesSmallCache,
          } = arg0);
          const tmp18 = _objectWithoutProperties(arg0, closure_3);
          cResult[0] = arg0;
          cResult[1] = accessibilityLabel;
          cResult[2] = accessible;
          cResult[3] = paused;
          cResult[4] = placeholder;
          cResult[5] = tmp18;
          cResult[6] = resizeMode;
          cResult[7] = source;
          cResult[8] = style;
          cResult[9] = autoPlay;
          cResult[10] = enableAnimation;
          cResult[11] = fadeDuration;
          cResult[12] = usesSmallCache;
          cResult[13] = tintColor;
          let tmp15 = tintColor;
          let tmp13 = fadeDuration;
          let tmp10 = style;
          let tmp9 = source;
          let tmp8 = resizeMode;
          let size = tmp18;
          let tmp7 = placeholder;
          let tmp6 = paused;
          let tmp5 = accessible;
          let tmp4 = accessibilityLabel;
        } else {
          tmp4 = cResult[1];
          tmp5 = cResult[2];
          tmp6 = cResult[3];
          tmp7 = cResult[4];
          size = cResult[5];
          tmp8 = cResult[6];
          tmp9 = cResult[7];
          tmp10 = cResult[8];
          tmp13 = cResult[11];
          tmp15 = cResult[13];
        }
        let num15 = 200;
        if (undefined !== tmp13) {
          num15 = tmp13;
        }
        if (cResult[14] !== tmp9) {
          let tmp24;
          if (null != tmp9) {
            if (typeof tmp9 !== "number") {
              const _Array = Array;
              let tmp25 = tmp9;
              if (!Array.isArray(tmp9)) {
                const items = [tmp9];
                tmp25 = items;
              }
              tmp24 = tmp25;
            }
          }
          cResult[14] = tmp9;
          cResult[15] = tmp24;
          let tmp22 = tmp24;
        } else {
          tmp22 = cResult[15];
        }
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { overflow: "hidden" };
          cResult[16] = obj2;
          let tmp26 = obj2;
        } else {
          tmp26 = cResult[16];
        }
        if (cResult[17] !== tmp15) {
          let tmp29;
          if (null != tmp15) {
            const obj3 = { tintColor: tmp15 };
            tmp29 = obj3;
          }
          cResult[17] = tmp15;
          cResult[18] = tmp29;
          let tmp27 = tmp29;
        } else {
          tmp27 = cResult[18];
        }
        if (cResult[19] !== tmp8) {
          let tmp32;
          if (null != tmp8) {
            const obj4 = { resizeMode: tmp8 };
            tmp32 = obj4;
          }
          cResult[19] = tmp8;
          cResult[20] = tmp32;
          let tmp30 = tmp32;
        } else {
          tmp30 = cResult[20];
        }
        if (cResult[21] === tmp10) {
          if (cResult[22] === tmp27) {
            if (cResult[23] === tmp30) {
              let tmp33 = cResult[24];
            }
            if (tmp5 == null) {
              tmp5 = null != tmp4 || undefined;
              const tmp35 = null != tmp4 || undefined;
            }
            let tmp36 = null != tmp9 && typeof tmp9 === "object";
            if (tmp36) {
              tmp36 = "__packager_asset" in tmp9;
            }
            if (tmp36) {
              tmp36 = true === tmp9.__packager_asset;
            }
            timestampProducer.flatten(tmp10);
            if (typeof tmp9 !== "number") {
              if (!tmp36) {
                const tmp39 =
                  null != size.onLoadStart ||
                  null != size.onLoad ||
                  null != size.onLoadEnd ||
                  null != size.onError ||
                  null != size.onProgress;
                if (cResult[35] === size.height) {
                  if (cResult[36] === size.width) {
                    let tmp40 = cResult[37];
                  }
                  if (cResult[38] === tmp33) {
                    if (cResult[39] === tmp40) {
                      let tmp41 = cResult[40];
                    }
                    if (cResult[41] !== tmp7) {
                      let assetSource = null;
                      if (null != tmp7) {
                        assetSource = hasOwnProperty.resolveAssetSource(tmp7);
                      }
                      let uri;
                      if (assetSource != null) {
                        uri = assetSource.uri;
                      }
                      cResult[41] = tmp7;
                      cResult[42] = uri;
                      let tmp42 = uri;
                    } else {
                      tmp42 = cResult[42];
                    }
                    if (cResult[43] === tmp4) {
                      if (cResult[44] === tmp5) {
                        if (cResult[45] === tmp19) {
                          if (cResult[46] === tmp20) {
                            if (cResult[47] === num15) {
                              if (cResult[48] === tmp6) {
                                if (cResult[49] === size) {
                                  if (cResult[50] === tmp22) {
                                    if (cResult[51] === tmp39) {
                                      if (cResult[52] === tmp41) {
                                        if (cResult[53] === tmp42) {
                                          if (cResult[54] === tmp21) {
                                            let tmp46 = cResult[55];
                                          }
                                          return tmp46;
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
                    }
                    const obj6 = {};
                    const merged = Object.assign(size);
                    obj6.accessible = tmp5;
                    obj6.accessibilityLabel = tmp4;
                    obj6.shouldNotifyLoadEvents = tmp39;
                    obj6.source = tmp22;
                    obj6.style = tmp41;
                    obj6.placeholder = tmp42;
                    obj6.autoPlay = tmp19;
                    obj6.enableAnimation = tmp20;
                    obj6.paused = tmp6;
                    obj6.fadeDuration = num15;
                    obj6.usesSmallCache = tmp21;
                    const tmp53 = jsx(FastImageNativeComponentDefault, {});
                    cResult[43] = tmp4;
                    cResult[44] = tmp5;
                    cResult[45] = tmp19;
                    cResult[46] = tmp20;
                    cResult[47] = num15;
                    cResult[48] = tmp6;
                    cResult[49] = size;
                    cResult[50] = tmp22;
                    cResult[51] = tmp39;
                    cResult[52] = tmp41;
                    cResult[53] = tmp42;
                    cResult[54] = tmp21;
                    cResult[55] = tmp53;
                    tmp46 = tmp53;
                  }
                  const items1 = [tmp40, tmp33];
                  cResult[38] = tmp33;
                  cResult[39] = tmp40;
                  cResult[40] = items1;
                  tmp41 = items1;
                }
                const size1 = { width: null, height: null };
                ({ width: obj5.width, height: obj5.height } = size);
                cResult[35] = size.height;
                cResult[36] = size.width;
                cResult[37] = size1;
                tmp40 = size1;
              }
            }
            let tmp54;
            if (tmpResult.isAndroid()) {
              tmp54 = tmp7;
            }
            let num44 = 0;
            if (typeof tmp9 !== "number") {
              num44 = 0;
              if (!tmp36) {
                num44 = num15;
              }
            }
            if (cResult[25] === tmp4) {
              if (cResult[26] === tmp5) {
                if (cResult[27] === size) {
                  if (cResult[28] === tmp8) {
                    if (cResult[29] === tmp9) {
                      if (cResult[30] === tmp33) {
                        if (cResult[31] === tmp54) {
                          if (cResult[32] === num44) {
                            if (cResult[33] === tmp15) {
                              let tmp55 = cResult[34];
                            }
                            return tmp55;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            const obj7 = {};
            const merged1 = Object.assign(size);
            obj7.resizeMode = tmp8;
            obj7.source = tmp9;
            obj7.style = tmp33;
            obj7.tintColor = tmp15;
            obj7.accessible = tmp5;
            obj7.accessibilityLabel = tmp4;
            obj7.defaultSource = tmp54;
            obj7.fadeDuration = num44;
            const tmp61 = <hasOwnProperty />;
            cResult[25] = tmp4;
            cResult[26] = tmp5;
            cResult[27] = size;
            cResult[28] = tmp8;
            cResult[29] = tmp9;
            cResult[30] = tmp33;
            cResult[31] = tmp54;
            cResult[32] = num44;
            cResult[33] = tmp15;
            cResult[34] = tmp61;
            tmp55 = tmp61;
            tmpResult = PlatformUtils;
          }
        }
        const items2 = [tmp26, tmp10, tmp27, tmp30];
        cResult[21] = tmp10;
        cResult[22] = tmp27;
        cResult[23] = tmp30;
        cResult[24] = items2;
        tmp33 = items2;
      }
    : function FastImage(enableAnimation) {
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
        const merged = Object.assign(
          enableAnimation,
          Object.assign({
            accessible: 0,
            accessibilityLabel: 0,
            autoPlay: 0,
            enableAnimation: 0,
            fadeDuration: 0,
            paused: 0,
            placeholder: 0,
            resizeMode: 0,
            source: 0,
            style: 0,
            tintColor: 0,
            usesSmallCache: 0,
          }),
        );
        if (null != source) {
          if (typeof source !== "number") {
            const _Array = Array;
            let tmp3 = source;
            if (!Array.isArray(source)) {
              const items = [source];
              tmp3 = items;
            }
            const tmp2 = tmp3;
          }
        }
        const items1 = [{ overflow: "hidden" }, style, ,];
        let tmp4;
        if (null != tintColor) {
          const obj = { tintColor };
          tmp4 = obj;
        }
        items1[2] = tmp4;
        let tmp5;
        if (null != resizeMode) {
          const obj2 = { resizeMode };
          tmp5 = obj2;
        }
        items1[3] = tmp5;
        if (accessible == null) {
          accessible = null != accessibilityLabel || undefined;
          const tmp6 = null != accessibilityLabel || undefined;
        }
        let tmp7 = null != source && typeof source === "object";
        if (tmp7) {
          tmp7 = "__packager_asset" in source;
        }
        if (tmp7) {
          tmp7 = true === source.__packager_asset;
        }
        timestampProducer.flatten(style);
        if (typeof source !== "number") {
          if (!tmp7) {
            const obj3 = {};
            const merged1 = Object.assign(merged);
            obj3.accessible = accessible;
            obj3.accessibilityLabel = accessibilityLabel;
            obj3.shouldNotifyLoadEvents =
              null != merged.onLoadStart ||
              null != merged.onLoad ||
              null != merged.onLoadEnd ||
              null != merged.onError ||
              null != merged.onProgress;
            obj3.source = tmp2;
            const size = { width: null, height: null };
            ({ width: obj4.width, height: obj4.height } = merged);
            const items2 = [size, items1];
            obj3.style = items2;
            let assetSource = null;
            if (null != placeholder) {
              assetSource = hasOwnProperty.resolveAssetSource(placeholder);
            }
            let uri;
            if (assetSource != null) {
              uri = assetSource.uri;
            }
            obj3.placeholder = uri;
            obj3.autoPlay = autoPlay;
            obj3.enableAnimation = flag;
            obj3.paused = paused;
            obj3.fadeDuration = num;
            obj3.usesSmallCache = usesSmallCache;
            let tmp20Result = jsx(FastImageNativeComponentDefault, {});
          }
          return tmp20Result;
        }
        const obj5 = {};
        const merged2 = Object.assign(merged);
        obj5.resizeMode = resizeMode;
        obj5.source = source;
        obj5.style = items1;
        obj5.tintColor = tintColor;
        obj5.accessible = accessible;
        obj5.accessibilityLabel = accessibilityLabel;
        let tmp23;
        if (obj6.isAndroid()) {
          tmp23 = placeholder;
        }
        obj5.defaultSource = tmp23;
        let num2 = 0;
        if (typeof source !== "number") {
          num2 = 0;
          if (!tmp7) {
            num2 = num;
          }
        }
        obj5.fadeDuration = num2;
        tmp20Result = <hasOwnProperty />;
        obj6 = PlatformUtils;
      },
);
