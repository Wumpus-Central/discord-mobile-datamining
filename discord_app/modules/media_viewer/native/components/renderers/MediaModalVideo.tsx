// === Module 14752: MediaModalVideo ===

// Module 14752 (MediaModalVideo)
import common_Video from "common/Video" /* 8864 */;
import useMediaLoadingDefault from "useMediaLoading" /* 14753 */;
import MediaModalLoadingOverlayDefault from "MediaModalLoadingOverlay" /* 14754 */;
import MediaModalSpoilerOverlayDefault from "MediaModalSpoilerOverlay" /* 14755 */;
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
  const items = [uri, , ];
  ({ width: arr[1], height: arr[2] } = source);
  ({ hasError, isLoadingVisible, handleLoadStart, handleLoad, handleError } = useMediaLoadingDefault({ onError, onLoad, onLoadingVisible }));
  if (hasError) {
    const obj2 = { style, status: "error" };
    let tmp6Result = React4(MediaModalLoadingOverlayDefault, obj2);
  } else {
    const obj = { controls, muted, onError: handleError, onLoad: handleLoad, onLoadStart: handleLoadStart, paused, source: tmp5, style };
    const items1 = [React4(common_Video.VideoComponent, obj), , ];
    let tmp7Result = null;
    if (isLoadingVisible) {
      const obj3 = { style, status: "loading" };
      tmp7Result = React4(MediaModalLoadingOverlayDefault, obj3);
    }
    const obj4 = { children: null };
    items1[1] = tmp7Result;
    const obj5 = { style, index, source };
    items1[2] = React4(MediaModalSpoilerOverlayDefault, obj5);
    obj4.children = items1;
    tmp6Result = hasOwnProperty(noop.Fragment, obj4);
  }
  return tmp6Result;
});