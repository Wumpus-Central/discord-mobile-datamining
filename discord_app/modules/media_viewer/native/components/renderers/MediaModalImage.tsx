// === Module 13072: MediaModalImage ===

// Module 13072 (MediaModalImage)
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import FastImageDefault from "FastImage" /* 6156 */;
import useMediaLoadingDefault from "useMediaLoading" /* 13069 */;
import MediaModalLoadingOverlayDefault from "MediaModalLoadingOverlay" /* 13070 */;
import MediaModalSpoilerOverlayDefault from "MediaModalSpoilerOverlay" /* 13071 */;
import AndroidMediaViewerFullResolutionExperiment from "AndroidMediaViewerFullResolutionExperiment" /* 13073 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1085);
({ Base64JPEGPrefix: closure_4, Base64GIFPrefix: hasOwnProperty } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const Image = fn(17).Image;
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalImage.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MediaModalImage(arg0) {
  const cResult = c.c(35);
  ({ fadeDuration, index, onError, onLoad, onLoadingVisible, pointerEvents, source, style } = arg0);
  if (cResult[0] === onError) {
    if (cResult[1] === onLoad) {
      if (cResult[2] === onLoadingVisible) {
        let tmp4 = cResult[3];
      }
      const tmp6 = useMediaLoadingDefault(tmp4);
      ({ isLoadingVisible, progress, handleLoadStart, handleLoad, handleError, handleProgress } = tmp6);
      if (cResult[4] !== handleProgress) {
        const fn = function x(nativeEvent) {
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
          const tmp33 = timestampProducer(MediaModalLoadingOverlayDefault, obj3);
          cResult[8] = style;
          cResult[9] = tmp33;
          let tmp31 = tmp33;
        } else {
          tmp31 = cResult[9];
        }
        return tmp31;
      } else {
        if (cResult[10] !== source.uri) {
          const uri = source.uri;
          let startsWithResult = uri.startsWith("assets-library://");
          if (!startsWithResult) {
            const uri2 = source.uri;
            startsWithResult = uri2.startsWith(React4);
          }
          if (!startsWithResult) {
            const uri3 = source.uri;
            startsWithResult = uri3.startsWith(hasOwnProperty);
          }
          cResult[10] = source.uri;
          cResult[11] = startsWithResult;
          let tmp9 = startsWithResult;
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
                      if (cResult[19] === source) {
                        if (cResult[20] === style) {
                          if (cResult[21] === tmp9) {
                            if (cResult[23] === isLoadingVisible) {
                              if (cResult[24] === progress) {
                                if (cResult[25] === style) {
                                  let tmp21 = cResult[26];
                                }
                                if (cResult[27] === index) {
                                  if (cResult[28] === source) {
                                    if (cResult[29] === style) {
                                      let tmp24 = cResult[30];
                                    }
                                    if (cResult[31] === tmp13) {
                                      if (cResult[32] === tmp21) {
                                        if (cResult[33] === tmp24) {
                                          let tmp27 = cResult[34];
                                        }
                                        return tmp27;
                                      }
                                    }
                                    const obj4 = { children: null };
                                    const items = [tmp13, tmp21, tmp24];
                                    obj4.children = items;
                                    const tmp30 = React5(noop.Fragment, obj4);
                                    cResult[31] = tmp13;
                                    cResult[32] = tmp21;
                                    cResult[33] = tmp24;
                                    cResult[34] = tmp30;
                                    tmp27 = tmp30;
                                  }
                                }
                                const obj5 = { style, index, source };
                                const tmp26 = timestampProducer(MediaModalSpoilerOverlayDefault, obj5);
                                cResult[27] = index;
                                cResult[28] = source;
                                cResult[29] = style;
                                cResult[30] = tmp26;
                                tmp24 = tmp26;
                              }
                            }
                            let tmp22 = null;
                            if (isLoadingVisible) {
                              const obj6 = { style, status: "loading", progress };
                              tmp22 = timestampProducer(MediaModalLoadingOverlayDefault, obj6);
                            }
                            cResult[23] = isLoadingVisible;
                            cResult[24] = progress;
                            cResult[25] = style;
                            cResult[26] = tmp22;
                            tmp21 = tmp22;
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
        if (tmp9) {
          const size = { accessibilityRole: "image", accessibilityLabel: source.description, fadeDuration, height: source.height, onError: handleError, onLoad: handleLoad, onLoadStart: handleLoadStart, onProgress: tmp7, pointerEvents, source: tmp8, style, width: source.width };
          let tmp14Result = timestampProducer(Image, size);
        } else {
          const obj7 = { accessibilityRole: "image", accessibilityLabel: source.description, fadeDuration, onError: handleError, onLoad: handleLoad, onLoadStart: handleLoadStart, onProgress: tmp7, pointerEvents, resizeMethod: null, source: null, style: null };
          const tmp5Result = FastImageDefault;
          let str2;
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
                        str2 = "none";
                      }
                      tmpResult2 = AndroidMediaViewerFullResolutionExperiment;
                    }
                  }
                }
              }
            }
          }
          obj7.resizeMethod = str2;
          obj7.source = tmp8;
          obj7.style = style;
          tmp14Result = timestampProducer(tmp5Result, obj7);
          tmpResult = PlatformUtils;
        }
        cResult[12] = fadeDuration;
        cResult[13] = handleError;
        cResult[14] = tmp7;
        cResult[15] = handleLoad;
        cResult[16] = handleLoadStart;
        cResult[17] = tmp8;
        cResult[18] = pointerEvents;
        cResult[19] = source;
        cResult[20] = style;
        cResult[21] = tmp9;
        cResult[22] = tmp14Result;
      }
    }
  }
  const obj8 = { onError, onLoad, onLoadingVisible };
  cResult[0] = onError;
  cResult[1] = onLoad;
  cResult[2] = onLoadingVisible;
  cResult[3] = obj8;
  tmp4 = obj8;
}) : (function MediaModalImage(style) {
  ({ fadeDuration, pointerEvents, source } = style);
  style = style.style;
  handleProgress = undefined;
  ({ index, onError, onLoad, onLoadingVisible } = style);
  const tmp3 = useMediaLoadingDefault({ onError, onLoad, onLoadingVisible });
  ({ handleLoadStart, handleLoad, handleError, handleProgress } = tmp3);
  const items = [handleProgress];
  ({ hasError, isLoadingVisible, progress } = tmp3);
  const callback = noop.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    return handleProgress(nativeEvent.loaded, nativeEvent.total);
  }, items);
  const items1 = [source.uri];
  const memo = noop.useMemo(() => ({ uri: source.uri }), items1);
  if (hasError) {
    const obj3 = { style, status: "error" };
    return timestampProducer(MediaModalLoadingOverlayDefault, obj3);
  } else {
    const uri = source.uri;
    let startsWithResult = uri.startsWith("assets-library://");
    if (!startsWithResult) {
      const uri2 = source.uri;
      startsWithResult = uri2.startsWith(React4);
    }
    if (!startsWithResult) {
      const uri3 = source.uri;
      startsWithResult = uri3.startsWith(hasOwnProperty);
    }
    if (startsWithResult) {
      const size = { accessibilityRole: "image", accessibilityLabel: source.description, fadeDuration, height: source.height, onError: handleError, onLoad: handleLoad, onLoadStart: handleLoadStart, onProgress: callback, pointerEvents, source: memo, style, width: source.width };
      let tmp11Result = timestampProducer(Image, size);
      let tmp17 = timestampProducer;
    } else {
      const obj = { accessibilityRole: "image", accessibilityLabel: source.description, fadeDuration, onError: handleError, onLoad: handleLoad, onLoadStart: handleLoadStart, onProgress: callback, pointerEvents, resizeMethod: null, source: null, style: null };
      const tmpResult = FastImageDefault;
      let str2;
      if (obj2.isAndroid()) {
        if (0 !== source.width) {
          if (0 !== source.height) {
            if (source.width > 2048) {
              if (source.width * source.height <= 16777216) {
                const _Math = Math;
                const _Math2 = Math;
                const bound = Math.max(source.width, source.height);
                if (bound / Math.min(source.width, source.height) > 2) {
                  if (tmp13Result.getAndroidMediaViewerFullResolutionEnabled("MediaModal")) {
                    str2 = "none";
                  }
                  tmp13Result = AndroidMediaViewerFullResolutionExperiment;
                }
              }
            }
          }
        }
      }
      obj.resizeMethod = str2;
      obj.source = memo;
      obj.style = style;
      tmp11Result = timestampProducer(tmpResult, obj);
      tmp17 = timestampProducer;
      obj2 = PlatformUtils;
    }
    const items2 = [tmp11Result, , ];
    let tmp17Result = null;
    if (isLoadingVisible) {
      const obj4 = { style, status: "loading", progress };
      tmp17Result = tmp17(MediaModalLoadingOverlayDefault, obj4);
    }
    const obj5 = { children: null };
    items2[1] = tmp17Result;
    const obj6 = { style, index, source };
    items2[2] = tmp17(MediaModalSpoilerOverlayDefault, obj6);
    obj5.children = items2;
    return React5(noop.Fragment, obj5);
  }
}));