// === Module 14756: MediaModalImage ===

// Module 14756 (MediaModalImage)
import PlatformUtils from "PlatformUtils" /* 1376 */;
import FastImageDefault from "FastImage" /* 5712 */;
import useMediaLoadingDefault from "useMediaLoading" /* 14753 */;
import MediaModalLoadingOverlayDefault from "MediaModalLoadingOverlay" /* 14754 */;
import MediaModalSpoilerOverlayDefault from "MediaModalSpoilerOverlay" /* 14755 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalImage.tsx");

export default noop.memo(function MediaModalImage(source) {
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
});