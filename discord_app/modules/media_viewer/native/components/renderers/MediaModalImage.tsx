// === Module 14488: MediaModalImage ===

// Module 14488 (MediaModalImage)
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import FastImageDefault from "FastImage" /* 5705 */;
import useMediaLoadingDefault from "useMediaLoading" /* 14485 */;
import MediaModalLoadingOverlayDefault from "MediaModalLoadingOverlay" /* 14486 */;
import MediaModalSpoilerOverlayDefault from "MediaModalSpoilerOverlay" /* 14487 */;
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
        let tmp3 = cResult[3];
      }
      const tmp5 = useMediaLoadingDefault(tmp3);
      ({ isLoadingVisible, progress, handleLoadStart, handleLoad, handleError, handleProgress } = tmp5);
      if (cResult[4] !== handleProgress) {
        class M {
          constructor(arg0) {
            nativeEvent = arg0.nativeEvent;
            return handleProgress(nativeEvent.loaded, nativeEvent.total);
          }
        }
        cResult[4] = handleProgress;
        cResult[5] = M;
      } else {
        class M {
          constructor(arg0) {
            nativeEvent = arg0.nativeEvent;
            return handleProgress(nativeEvent.loaded, nativeEvent.total);
          }
        }
      }
      if (cResult[6] !== source.uri) {
        class M {
          constructor(arg0) {
            nativeEvent = arg0.nativeEvent;
            return handleProgress(nativeEvent.loaded, nativeEvent.total);
          }
        }
        tmp8[0] = source.uri;
        cResult[6] = source.uri;
        cResult[7] = tmp8;
      } else {
        class M {
          constructor(arg0) {
            nativeEvent = arg0.nativeEvent;
            return handleProgress(nativeEvent.loaded, nativeEvent.total);
          }
        }
      }
      if (tmp5.hasError) {
        class M {
          constructor(arg0) {
            nativeEvent = arg0.nativeEvent;
            return handleProgress(nativeEvent.loaded, nativeEvent.total);
          }
        }
        return tmp16;
      } else {
        class M {
          constructor(arg0) {
            nativeEvent = arg0.nativeEvent;
            return handleProgress(nativeEvent.loaded, nativeEvent.total);
          }
        }
        if (cResult[10] !== source) {
          class M {
            constructor(arg0) {
              nativeEvent = arg0.nativeEvent;
              return handleProgress(nativeEvent.loaded, nativeEvent.total);
            }
          }
          if (obj3.isAndroid()) {
            class M {
              constructor(arg0) {
                nativeEvent = arg0.nativeEvent;
                return handleProgress(nativeEvent.loaded, nativeEvent.total);
              }
            }
            if (0 !== source.width) {
              class M {
                constructor(arg0) {
                  nativeEvent = arg0.nativeEvent;
                  return handleProgress(nativeEvent.loaded, nativeEvent.total);
                }
              }
              if (0 !== source.height) {
                class M {
                  constructor(arg0) {
                    nativeEvent = arg0.nativeEvent;
                    return handleProgress(nativeEvent.loaded, nativeEvent.total);
                  }
                }
                if (source.width > 2048) {
                  class M {
                    constructor(arg0) {
                      nativeEvent = arg0.nativeEvent;
                      return handleProgress(nativeEvent.loaded, nativeEvent.total);
                    }
                  }
                  if (source.width * source.height <= 16777216) {
                    class M {
                      constructor(arg0) {
                        nativeEvent = arg0.nativeEvent;
                        return handleProgress(nativeEvent.loaded, nativeEvent.total);
                      }
                    }
                    const _Math = Math;
                    const _Math2 = Math;
                    const bound = Math.max(source.width, source.height);
                    if (bound / Math.min(source.width, source.height) > 2) {
                      class M {
                        constructor(arg0) {
                          nativeEvent = arg0.nativeEvent;
                          return handleProgress(nativeEvent.loaded, nativeEvent.total);
                        }
                      }
                    }
                  }
                } else {
                  class M {
                    constructor(arg0) {
                      nativeEvent = arg0.nativeEvent;
                      return handleProgress(nativeEvent.loaded, nativeEvent.total);
                    }
                  }
                }
              }
            }
          }
          cResult[10] = source;
          cResult[11] = undefined;
        } else {
          class M {
            constructor(arg0) {
              nativeEvent = arg0.nativeEvent;
              return handleProgress(nativeEvent.loaded, nativeEvent.total);
            }
          }
        }
        if (cResult[12] === fadeDuration) {
          class M {
            constructor(arg0) {
              nativeEvent = arg0.nativeEvent;
              return handleProgress(nativeEvent.loaded, nativeEvent.total);
            }
          }
        }
        const size = { accessibilityRole: "image", accessibilityLabel: tmp9, fadeDuration, height: source.height, onError: handleError, onLoad: handleLoad, onLoadStart: handleLoadStart, onProgress: M, pointerEvents, resizeMethod: tmp10, source: tmp8, style, width: source.width };
        const tmp15 = React4(FastImageDefault, size);
        cResult[12] = fadeDuration;
        cResult[13] = handleError;
        cResult[14] = M;
        cResult[15] = handleLoad;
        cResult[16] = handleLoadStart;
        cResult[17] = tmp8;
        cResult[18] = pointerEvents;
        cResult[19] = source.description;
        cResult[20] = source.height;
        cResult[21] = source.width;
        cResult[22] = style;
        cResult[23] = tmp10;
        cResult[24] = tmp15;
      }
    }
  }
  const obj2 = { onError, onLoad, onLoadingVisible };
  cResult[0] = onError;
  cResult[1] = onLoad;
  cResult[2] = onLoadingVisible;
  cResult[3] = obj2;
  tmp3 = obj2;
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
                str = "none";
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