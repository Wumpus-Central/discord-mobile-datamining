// === Module 13927: MediaModalImage ===

// Module 13927 (MediaModalImage)
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import FastImageDefault from "FastImage" /* 5091 */;
import useMediaLoadingDefault from "useMediaLoading" /* 13924 */;
import MediaModalLoadingOverlayDefault from "MediaModalLoadingOverlay" /* 13925 */;
import MediaModalSpoilerOverlayDefault from "MediaModalSpoilerOverlay" /* 13926 */;
import AndroidMediaViewerFullResolutionExperiment from "AndroidMediaViewerFullResolutionExperiment" /* 13928 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalImage.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MediaModalImage(arg0) {
  const cResult = c.c(37);
  ({ fadeDuration, index, onError, onLoad, onLoadingVisible, pointerEvents, source, style } = arg0);
  if (cResult[0] === onError) {
    if (cResult[1] === onLoad) {
      if (cResult[2] === onLoadingVisible) {
        let tmp4 = cResult[3];
      }
      const tmp6 = useMediaLoadingDefault(tmp4);
      ({ isLoadingVisible, progress, handleLoadStart, handleLoad, handleError, handleProgress } = tmp6);
      if (cResult[4] !== handleProgress) {
        const fn = function y(nativeEvent) {
          nativeEvent = nativeEvent.nativeEvent;
          return handleProgress(nativeEvent.loaded, nativeEvent.total);
        };
        cResult[4] = handleProgress;
        cResult[5] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[5];
      }
      if (cResult[6] !== source.uri) {
        const obj2 = { uri: source.uri };
        cResult[6] = source.uri;
        cResult[7] = obj2;
        let tmp8 = obj2;
      } else {
        tmp8 = cResult[7];
      }
      if (tmp6.hasError) {
        if (cResult[8] !== style) {
          const obj3 = { style, status: "error" };
          const tmp27 = React4(MediaModalLoadingOverlayDefault, obj3);
          cResult[8] = style;
          cResult[9] = tmp27;
          let tmp25 = tmp27;
        } else {
          tmp25 = cResult[9];
        }
        return tmp25;
      } else {
        ({ description, height } = source);
        if (cResult[10] !== source) {
          let str;
          if (tmpResult.isAndroid()) {
            if (0 !== source.width) {
              if (0 !== source.height) {
                if (source.width > 2048) {
                  if (source.width * source.height <= 16777216) {
                    const _Math = Math;
                    const _Math2 = Math;
                    const bound = Math.max(source.width, source.height);
                    if (bound / Math.min(source.width, source.height) > 2) {
                      if (tmpResult2.getAndroidMediaViewerFullResolutionEnabled("MediaModal")) {
                        str = "none";
                      }
                      tmpResult2 = AndroidMediaViewerFullResolutionExperiment;
                    }
                  }
                }
              }
            }
          }
          cResult[10] = source;
          cResult[11] = str;
          let tmp9 = str;
          tmpResult = PlatformUtils;
        } else {
          tmp9 = cResult[11];
        }
        if (cResult[12] === fadeDuration) {
          if (cResult[13] === handleError) {
            if (cResult[14] === tmp7) {
              if (cResult[15] === handleLoad) {
                if (cResult[16] === handleLoadStart) {
                  if (cResult[17] === tmp8) {
                    if (cResult[18] === pointerEvents) {
                      if (cResult[19] === source.description) {
                        if (cResult[20] === source.height) {
                          if (cResult[21] === source.width) {
                            if (cResult[22] === style) {
                              if (cResult[23] === tmp9) {
                                let tmp12 = cResult[24];
                              }
                              if (cResult[25] === isLoadingVisible) {
                                if (cResult[26] === progress) {
                                  if (cResult[27] === style) {
                                    let tmp15 = cResult[28];
                                  }
                                  if (cResult[29] === index) {
                                    if (cResult[30] === source) {
                                      if (cResult[31] === style) {
                                        let tmp18 = cResult[32];
                                      }
                                      if (cResult[33] === tmp12) {
                                        if (cResult[34] === tmp15) {
                                          if (cResult[35] === tmp18) {
                                            let tmp21 = cResult[36];
                                          }
                                          return tmp21;
                                        }
                                      }
                                      const obj4 = { children: null };
                                      const items = [tmp12, tmp15, tmp18];
                                      obj4.children = items;
                                      const tmp24 = hasOwnProperty(noop.Fragment, obj4);
                                      cResult[33] = tmp12;
                                      cResult[34] = tmp15;
                                      cResult[35] = tmp18;
                                      cResult[36] = tmp24;
                                      tmp21 = tmp24;
                                    }
                                  }
                                  const obj5 = { style, index, source };
                                  const tmp20 = React4(MediaModalSpoilerOverlayDefault, obj5);
                                  cResult[29] = index;
                                  cResult[30] = source;
                                  cResult[31] = style;
                                  cResult[32] = tmp20;
                                  tmp18 = tmp20;
                                }
                              }
                              let tmp16 = null;
                              if (isLoadingVisible) {
                                const obj6 = { style, status: "loading", progress };
                                tmp16 = React4(MediaModalLoadingOverlayDefault, obj6);
                              }
                              cResult[25] = isLoadingVisible;
                              cResult[26] = progress;
                              cResult[27] = style;
                              cResult[28] = tmp16;
                              tmp15 = tmp16;
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
        const size = { accessibilityRole: "image", accessibilityLabel: description, fadeDuration, height, onError: handleError, onLoad: handleLoad, onLoadStart: handleLoadStart, onProgress: tmp7, pointerEvents, resizeMethod: tmp9, source: tmp8, style, width: source.width };
        const tmp14 = React4(FastImageDefault, size);
        cResult[12] = fadeDuration;
        cResult[13] = handleError;
        cResult[14] = tmp7;
        cResult[15] = handleLoad;
        cResult[16] = handleLoadStart;
        cResult[17] = tmp8;
        cResult[18] = pointerEvents;
        cResult[19] = source.description;
        cResult[20] = source.height;
        cResult[21] = source.width;
        cResult[22] = style;
        cResult[23] = tmp9;
        cResult[24] = tmp14;
        tmp12 = tmp14;
      }
    }
  }
  const obj7 = { onError, onLoad, onLoadingVisible };
  cResult[0] = onError;
  cResult[1] = onLoad;
  cResult[2] = onLoadingVisible;
  cResult[3] = obj7;
  tmp4 = obj7;
}) : (function MediaModalImage(source) {
  source = source.source;
  const style = source.style;
  ({ fadeDuration, index, onError, onLoad, onLoadingVisible, pointerEvents } = source);
  const tmp3 = useMediaLoadingDefault({ onError, onLoad, onLoadingVisible });
  const handleProgress = tmp3.handleProgress;
  const items = [handleProgress];
  ({ hasError, isLoadingVisible, progress, handleLoadStart, handleLoad, handleError } = tmp3);
  [][0] = source.uri;
  const callback = noop.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    return handleProgress(nativeEvent.loaded, nativeEvent.total);
  }, items);
  if (hasError) {
    const obj = { style, status: "error" };
    let tmp7Result = React4(MediaModalLoadingOverlayDefault, obj);
  } else {
    const size = { accessibilityRole: "image", accessibilityLabel: source.description, fadeDuration, height: source.height, onError: handleError, onLoad: handleLoad, onLoadStart: handleLoadStart, onProgress: callback, pointerEvents, resizeMethod: null, source: null, style: null, width: null };
    const tmpResult = FastImageDefault;
    let str;
    if (obj2.isAndroid()) {
      if (0 !== source.width) {
        if (0 !== source.height) {
          if (source.width > 2048) {
            if (source.width * source.height <= 16777216) {
              const _Math = Math;
              const _Math2 = Math;
              const bound = Math.max(source.width, source.height);
              if (bound / Math.min(source.width, source.height) > 2) {
                if (tmp10Result.getAndroidMediaViewerFullResolutionEnabled("MediaModal")) {
                  str = "none";
                }
                tmp10Result = AndroidMediaViewerFullResolutionExperiment;
              }
            }
          }
        }
      }
    }
    size.resizeMethod = str;
    size.source = tmp6;
    size.style = style;
    size.width = source.width;
    const items1 = [React4(tmpResult, size), , ];
    let tmp8Result = null;
    if (isLoadingVisible) {
      const obj3 = { style, status: "loading", progress };
      tmp8Result = React4(MediaModalLoadingOverlayDefault, obj3);
    }
    const obj4 = { children: null };
    items1[1] = tmp8Result;
    const obj5 = { style, index, source };
    items1[2] = React4(MediaModalSpoilerOverlayDefault, obj5);
    obj4.children = items1;
    tmp7Result = hasOwnProperty(noop.Fragment, obj4);
    obj2 = PlatformUtils;
  }
  return tmp7Result;
}));