// discord_app/modules/media_viewer/native/components/renderers/MediaModalImage.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import PlatformUtils from "../../../../../utils/PlatformUtils.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import useMediaLoadingDefault from "../../useMediaLoading.tsx";
import MediaModalLoadingOverlayDefault from "../MediaModalLoadingOverlay.tsx";
import MediaModalSpoilerOverlayDefault from "../MediaModalSpoilerOverlay.tsx";
import AndroidMediaViewerFullResolutionExperiment from "../../AndroidMediaViewerFullResolutionExperiment.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import Constants from "../../../../../Constants.tsx";
import Fragment_mod from "../../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

let nativeEvent;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const Image = react_native.Image;
({ Base64JPEGPrefix: closure_4, Base64GIFPrefix: hasOwnProperty } = Constants);
let Fragment = Fragment_mod;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let fade;
        let fadeDuration;
        let handleError;
        let handleLoad;
        let handleLoadStart;
        let handleProgress;
        let index;
        let isLoadingVisible;
        let onError;
        let onLoad;
        let onLoadingVisible;
        let pointerEvents;
        let progress;
        let source;
        let style;
        const obj = react2;
        const cResult = obj.c(38);
        ({ fade, fadeDuration, index, onError, onLoad, onLoadingVisible, pointerEvents, source, style } = arg0);
        if (cResult[0] === onError) {
          if (cResult[1] === onLoad) {
            let tmp3;
            if (cResult[2] === onLoadingVisible) {
              tmp3 = cResult[3];
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
            size = { uri: null, width: null, height: null };
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
      }
    : (style) => {
        let fade;
        let fadeDuration;
        let handleError;
        let handleLoad;
        let handleLoadStart;
        let handleProgress;
        let hasError;
        let index;
        let isLoadingVisible;
        let onError;
        let onLoad;
        let onLoadingVisible;
        let pointerEvents;
        let progress;
        let source;
        let str2;
        ({ fadeDuration, pointerEvents, source } = style);
        style = style.style;
        handleProgress = undefined;
        ({ fade, index, onError, onLoad, onLoadingVisible } = style);
        const tmp3 = useMediaLoadingDefault({ onError, onLoad, onLoadingVisible });
        ({ handleLoadStart, handleLoad, handleError, handleProgress } = tmp3);
        const items = [handleProgress];
        ({ hasError, isLoadingVisible, progress } = tmp3);
        const callback = react.useCallback((nativeEvent) => {
          nativeEvent = nativeEvent.nativeEvent;
          return handleProgress(nativeEvent.loaded, nativeEvent.total);
        }, items);
        const items1 = [, ,];
        ({ uri: arr2[0], width: arr2[1], height: arr2[2] } = source);
        const memo = react.useMemo(() => {
          size = { uri: source.uri, width: source.width, height: source.height };
          return size;
        }, items1);
        if (hasError) {
          const obj3 = { style, status: "error" };
          return metroRequire(MediaModalLoadingOverlayDefault, obj3);
        } else {
          let tmp11Result;
          let tmp17;
          const uri = source.uri;
          let startsWithResult = uri.startsWith("assets-library://");
          if (!startsWithResult) {
            const uri2 = source.uri;
            startsWithResult = uri2.startsWith(React3);
          }
          if (!startsWithResult) {
            const uri3 = source.uri;
            startsWithResult = uri3.startsWith(hasOwnProperty);
          }
          const Fragment = react.Fragment;
          if (startsWithResult) {
            const obj4 = {
              accessibilityRole: "image",
              accessibilityLabel: source.description,
              fadeDuration,
              onError: handleError,
              onLoad: handleLoad,
              onLoadStart: handleLoadStart,
              onProgress: callback,
              pointerEvents,
              source: memo,
              style,
            };
            tmp11Result = metroRequire(Image, obj4);
            tmp17 = metroRequire;
          } else {
            const obj = {
              accessibilityRole: "image",
              accessibilityLabel: source.description,
              fade,
              fadeDuration,
              onError: handleError,
              onLoad: handleLoad,
              onLoadStart: handleLoadStart,
              onProgress: callback,
              pointerEvents,
              resizeMethod: str2,
              source: memo,
              style,
            };
            str2 = undefined;
            const tmpResult = FastImageDefault;
            const obj2 = PlatformUtils;
            if (obj2.isAndroid()) {
              if (0 !== source.width) {
                if (0 !== source.height) {
                  if (source.width > 2048) {
                    if (source.width * source.height <= 16777216) {
                      const _Math = Math;
                      const _Math2 = Math;
                      const bound = Math.max(source.width, source.height);
                      if (bound / Math.min(source.width, source.height) > 2) {
                        const tmp13Result = AndroidMediaViewerFullResolutionExperiment;
                        if (tmp13Result.getAndroidMediaViewerFullResolutionEnabled("MediaModal")) {
                          str2 = "none";
                        }
                      }
                    }
                  }
                }
              }
            }
            tmp11Result = metroRequire(tmpResult, obj);
            tmp17 = metroRequire;
          }
          const items2 = [tmp11Result, ,];
          let tmp17Result = null;
          if (isLoadingVisible) {
            const obj5 = { style, status: "loading", progress };
            tmp17Result = tmp17(MediaModalLoadingOverlayDefault, obj5);
          }
          const obj6 = { children: items2 };
          items2[1] = tmp17Result;
          const obj7 = { style, index, source };
          items2[2] = tmp17(MediaModalSpoilerOverlayDefault, obj7);
          return metroImportDefault(Fragment, obj6);
        }
      },
);
let size = size_mod;
const result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalImage.tsx");

export default memoResult;
