// === Module 12798: MediaModalImage ===

// Module 12798 (MediaModalImage)
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import FastImageDefault from "FastImage" /* 5981 */;
import useMediaLoadingDefault from "useMediaLoading" /* 12795 */;
import MediaModalLoadingOverlayDefault from "MediaModalLoadingOverlay" /* 12796 */;
import MediaModalSpoilerOverlayDefault from "MediaModalSpoilerOverlay" /* 12797 */;
import AndroidMediaViewerFullResolutionExperiment from "AndroidMediaViewerFullResolutionExperiment" /* 12799 */;
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

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(38);
  ({ fade, fadeDuration, index, onError, onLoad, onLoadingVisible, pointerEvents, source, style } = arg0);
  if (cResult[0] === onError) {
    if (cResult[1] === onLoad) {
      if (cResult[2] === onLoadingVisible) {
        let tmp3 = cResult[3];
      }
      const tmp5 = useMediaLoadingDefault(tmp3);
      ({ isLoadingVisible, progress, handleLoadStart, handleLoad, handleError, handleProgress } = tmp5);
      const hasError = tmp5.hasError;
      if (cResult[4] !== handleProgress) {
        class P {
          constructor(arg0) {
            nativeEvent = arg0.nativeEvent;
            return handleProgress(nativeEvent.loaded, nativeEvent.total);
          }
        }
        cResult[4] = handleProgress;
        cResult[5] = P;
      } else {
        class P {
          constructor(arg0) {
            nativeEvent = arg0.nativeEvent;
            return handleProgress(nativeEvent.loaded, nativeEvent.total);
          }
        }
      }
      if (cResult[6] === source.height) {
        class P {
          constructor(arg0) {
            nativeEvent = arg0.nativeEvent;
            return handleProgress(nativeEvent.loaded, nativeEvent.total);
          }
        }
      }
      const size = { uri: null, width: null, height: null };
      ({ uri: obj3.uri, width: obj3.width, height: obj3.height } = source);
      cResult[6] = source.height;
      cResult[7] = source.uri;
      cResult[8] = source.width;
      cResult[9] = size;
    }
  }
  const obj2 = { onError, onLoad, onLoadingVisible };
  cResult[0] = onError;
  cResult[1] = onLoad;
  cResult[2] = onLoadingVisible;
  cResult[3] = obj2;
  tmp3 = obj2;
}) : ((style) => {
  ({ fadeDuration, pointerEvents, source } = style);
  style = style.style;
  handleProgress = undefined;
  ({ fade, index, onError, onLoad, onLoadingVisible } = style);
  const tmp3 = useMediaLoadingDefault({ onError, onLoad, onLoadingVisible });
  ({ handleLoadStart, handleLoad, handleError, handleProgress } = tmp3);
  const items = [handleProgress];
  ({ hasError, isLoadingVisible, progress } = tmp3);
  const callback = noop.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    return handleProgress(nativeEvent.loaded, nativeEvent.total);
  }, items);
  const items1 = [, , ];
  ({ uri: arr2[0], width: arr2[1], height: arr2[2] } = source);
  const memo = noop.useMemo(() => {
    const size = { uri: source.uri, width: source.width, height: source.height };
    return size;
  }, items1);
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
      const obj4 = { accessibilityRole: "image", accessibilityLabel: source.description, fadeDuration, onError: handleError, onLoad: handleLoad, onLoadStart: handleLoadStart, onProgress: callback, pointerEvents, source: memo, style };
      let tmp11Result = timestampProducer(Image, obj4);
      let tmp17 = timestampProducer;
    } else {
      const obj = { accessibilityRole: "image", accessibilityLabel: source.description, fade, fadeDuration, onError: handleError, onLoad: handleLoad, onLoadStart: handleLoadStart, onProgress: callback, pointerEvents, resizeMethod: null, source: null, style: null };
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
      const obj5 = { style, status: "loading", progress };
      tmp17Result = tmp17(MediaModalLoadingOverlayDefault, obj5);
    }
    const obj6 = { children: null };
    items2[1] = tmp17Result;
    const obj7 = { style, index, source };
    items2[2] = tmp17(MediaModalSpoilerOverlayDefault, obj7);
    obj6.children = items2;
    return React5(noop.Fragment, obj6);
  }
}));