// === Module 12794: MediaModalVideo ===

// Module 12794 (MediaModalVideo)
import react2 from "react" /* 576 */;
import common_Video from "common/Video" /* 7993 */;
import useMediaLoadingDefault from "useMediaLoading" /* 12795 */;
import MediaModalLoadingOverlayDefault from "MediaModalLoadingOverlay" /* 12796 */;
import MediaModalSpoilerOverlayDefault from "MediaModalSpoilerOverlay" /* 12797 */;
import react from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let Fragment = Fragment_mod;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let controls;
  let handleError;
  let handleLoad;
  let handleLoadStart;
  let index;
  let isLoadingVisible;
  let items;
  let muted;
  let onError;
  let onLoad;
  let onLoadingVisible;
  let paused;
  let source;
  let style;
  const obj = react2;
  const cResult = obj.c(30);
  ({ controls, index, muted, onError, onLoad, onLoadingVisible, paused, source, style } = arg0);
  let uri = source.videoURI;
  if (uri == null) {
    uri = source.uri;
  }
  if (cResult[0] === onError) {
    if (cResult[1] === onLoad) {
      let tmp4;
      if (cResult[2] === onLoadingVisible) {
        tmp4 = cResult[3];
      }
      ({ isLoadingVisible, handleLoadStart, handleLoad, handleError } = useMediaLoadingDefault(tmp4));
      useMediaLoadingDefault(tmp4);
      if (cResult[4] === source.height) {
        if (cResult[5] === source.width) {
          let tmp8;
          let tmp18;
          if (cResult[6] === uri) {
            tmp8 = cResult[7];
          }
          if (tmp7) {
            let tmp22;
            if (cResult[8] !== style) {
              const obj2 = { style, status: "error" };
              const tmp24 = React3(MediaModalLoadingOverlayDefault, obj2);
              cResult[8] = style;
              cResult[9] = tmp24;
              tmp22 = tmp24;
            } else {
              tmp22 = cResult[9];
            }
            tmp18 = tmp22;
          } else {
            if (cResult[10] === controls) {
              if (cResult[11] === handleError) {
                if (cResult[12] === handleLoad) {
                  if (cResult[13] === handleLoadStart) {
                    if (cResult[14] === muted) {
                      if (cResult[15] === paused) {
                        if (cResult[16] === style) {
                          let tmp9;
                          if (cResult[17] === tmp8) {
                            tmp9 = cResult[18];
                          }
                          if (cResult[19] === isLoadingVisible) {
                            let tmp12;
                            if (cResult[20] === style) {
                              tmp12 = cResult[21];
                            }
                            if (cResult[22] === index) {
                              if (cResult[23] === source) {
                                let tmp15;
                                if (cResult[24] === style) {
                                  tmp15 = cResult[25];
                                }
                                if (cResult[26] === tmp9) {
                                  if (cResult[27] === tmp12) {
                                    if (cResult[28] === tmp15) {
                                      tmp18 = cResult[29];
                                    }
                                  }
                                }
                                const obj4 = { children: items };
                                items = [tmp9, tmp12, tmp15];
                                const tmp21 = hasOwnProperty(react.Fragment, obj4);
                                cResult[26] = tmp9;
                                cResult[27] = tmp12;
                                cResult[28] = tmp15;
                                cResult[29] = tmp21;
                                tmp18 = tmp21;
                              }
                            }
                            const obj5 = { style, index, source };
                            const tmp17 = React3(MediaModalSpoilerOverlayDefault, obj5);
                            cResult[22] = index;
                            cResult[23] = source;
                            cResult[24] = style;
                            cResult[25] = tmp17;
                            tmp15 = tmp17;
                          }
                          let tmp13 = null;
                          if (isLoadingVisible) {
                            const obj6 = { style, status: "loading" };
                            tmp13 = React3(MediaModalLoadingOverlayDefault, obj6);
                          }
                          cResult[19] = isLoadingVisible;
                          cResult[20] = style;
                          cResult[21] = tmp13;
                          tmp12 = tmp13;
                        }
                      }
                    }
                  }
                }
              }
            }
            const obj7 = { controls, muted, onError: handleError, onLoad: handleLoad, onLoadStart: handleLoadStart, paused, source: tmp8, style };
            const tmp11 = React3(common_Video.VideoComponent, obj7);
            cResult[10] = controls;
            cResult[11] = handleError;
            cResult[12] = handleLoad;
            cResult[13] = handleLoadStart;
            cResult[14] = muted;
            cResult[15] = paused;
            cResult[16] = style;
            cResult[17] = tmp8;
            cResult[18] = tmp11;
            tmp9 = tmp11;
          }
          return tmp18;
        }
      }
      size = { uri, width: null, height: null };
      ({ width: obj3.width, height: obj3.height } = source);
      cResult[4] = source.height;
      cResult[5] = source.width;
      cResult[6] = uri;
      cResult[7] = size;
      tmp8 = size;
    }
  }
  const obj8 = { onError, onLoad, onLoadingVisible };
  cResult[0] = onError;
  cResult[1] = onLoad;
  cResult[2] = onLoadingVisible;
  cResult[3] = obj8;
  tmp4 = obj8;
}) : ((source) => {
  let controls;
  let handleError;
  let handleLoad;
  let handleLoadStart;
  let hasError;
  let index;
  let isLoadingVisible;
  let muted;
  let onError;
  let onLoad;
  let onLoadingVisible;
  let paused;
  let tmp6Result;
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
  useMediaLoadingDefault({ onError, onLoad, onLoadingVisible });
  if (hasError) {
    const obj2 = { style, status: "error" };
    tmp6Result = React3(MediaModalLoadingOverlayDefault, obj2);
  } else {
    const Fragment = react.Fragment;
    const obj = { controls, muted, onError: handleError, onLoad: handleLoad, onLoadStart: handleLoadStart, paused, source: tmp5, style };
    const items1 = [React3(common_Video.VideoComponent, obj), , ];
    let tmp7Result = null;
    if (isLoadingVisible) {
      const obj3 = { style, status: "loading" };
      tmp7Result = React3(MediaModalLoadingOverlayDefault, obj3);
    }
    const obj4 = { children: items1 };
    items1[1] = tmp7Result;
    const obj5 = { style, index, source };
    items1[2] = React3(MediaModalSpoilerOverlayDefault, obj5);
    tmp6Result = hasOwnProperty(Fragment, obj4);
  }
  return tmp6Result;
}));
let size = size_mod;
const result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalVideo.tsx");

export default memoResult;