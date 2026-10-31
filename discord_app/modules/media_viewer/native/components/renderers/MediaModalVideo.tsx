// === Module 14790: MediaModalVideo ===

// Module 14790 (MediaModalVideo)
import MediaViewerVideoPerfExperiment from "MediaViewerVideoPerfExperiment" /* 8847 */;
import common_Video from "common/Video" /* 8873 */;
import useMediaLoadingDefault from "useMediaLoading" /* 14791 */;
import MediaModalLoadingOverlayDefault from "MediaModalLoadingOverlay" /* 14792 */;
import MediaModalSpoilerOverlayDefault from "MediaModalSpoilerOverlay" /* 14793 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalVideo.tsx");

export default noop.memo(function MediaModalVideo(source) {
  source = source.source;
  const style = source.style;
  let uri = source.videoURI;
  ({ controls, index, muted, onError, onLoad, onLoadingVisible, paused } = source);
  if (uri == null) {
    uri = source.uri;
  }
  const isMediaViewerVideoPerfEnabled = MediaViewerVideoPerfExperiment.useIsMediaViewerVideoPerfEnabled();
  const items = [uri, , ];
  ({ width: arr[1], height: arr[2] } = source);
  ({ hasError, isLoadingVisible, handleLoadStart, handleLoad, handleError } = useMediaLoadingDefault({ onError, onLoad, onLoadingVisible }));
  if (hasError) {
    const obj2 = { style, status: "error" };
    let tmp8Result = React4(MediaModalLoadingOverlayDefault, obj2);
  } else {
    const obj3 = { controls, muted, onError: handleError, onLoad: handleLoad, onLoadStart: handleLoadStart, paused, source: tmp7, style, useTextureView: !isMediaViewerVideoPerfEnabled };
    const items1 = [React4(common_Video.VideoComponent, obj3), , ];
    let tmp9Result = null;
    if (isLoadingVisible) {
      const obj4 = { style, status: "loading" };
      tmp9Result = React4(MediaModalLoadingOverlayDefault, obj4);
    }
    const obj5 = { children: null };
    items1[1] = tmp9Result;
    const obj6 = { style, index, source };
    items1[2] = React4(MediaModalSpoilerOverlayDefault, obj6);
    obj5.children = items1;
    tmp8Result = hasOwnProperty(noop.Fragment, obj5);
  }
  return tmp8Result;
});