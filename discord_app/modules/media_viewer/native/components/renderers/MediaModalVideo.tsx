// discord_app/modules/media_viewer/native/components/renderers/MediaModalVideo.tsx
import c from "../../../../../../_runtime/00576_c.js";
import common_Video from "../../../../../components_native/common/Video.tsx";
import useMediaLoadingDefault from "../../useMediaLoading.tsx";
import MediaModalLoadingOverlayDefault from "../MediaModalLoadingOverlay.tsx";
import MediaModalSpoilerOverlayDefault from "../MediaModalSpoilerOverlay.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalVideo.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function MediaModalVideo(arg0) {
        let tmp2 = dependencyMap;
        const cResult = c.c(30);
        ({ controls, index, muted, onError, onLoad, onLoadingVisible, paused, source, style } = arg0);
        let uri = source.videoURI;
        if (uri == null) {
          uri = source.uri;
        }
        if (cResult[0] === onError) {
          if (cResult[1] === onLoad) {
            if (cResult[2] === onLoadingVisible) {
              let tmp4 = cResult[3];
            }
            let tmp5 = importDefault;
            ({ isLoadingVisible, handleLoadStart, handleLoad, handleError } = useMediaLoadingDefault(tmp4));
            if (cResult[4] === source.height) {
              if (cResult[5] === source.width) {
                if (cResult[6] === uri) {
                  let tmp8 = cResult[7];
                }
                if (tmp7) {
                  if (cResult[8] !== style) {
                    tmp5 = tmp5(13070);
                    const obj2 = { style, status: "error" };
                    tmp2 = React4(tmp5, obj2);
                    cResult[8] = style;
                    cResult[9] = tmp2;
                  }
                } else {
                  if (cResult[10] === controls) {
                    if (cResult[11] === handleError) {
                      if (cResult[12] === handleLoad) {
                        if (cResult[13] === handleLoadStart) {
                          if (cResult[14] === muted) {
                            if (cResult[15] === paused) {
                              if (cResult[16] === style) {
                                if (cResult[17] === tmp8) {
                                  let tmp9 = cResult[18];
                                }
                                if (cResult[19] === isLoadingVisible) {
                                  if (cResult[20] === style) {
                                    let tmp12 = cResult[21];
                                  }
                                  if (cResult[22] === index) {
                                    if (cResult[23] === source) {
                                      if (cResult[24] === style) {
                                        let tmp15 = cResult[25];
                                      }
                                      if (cResult[26] === tmp9) {
                                        if (cResult[27] === tmp12) {
                                          if (cResult[28] === tmp15) {
                                            let tmp18 = cResult[29];
                                          }
                                          return tmp18;
                                        }
                                      }
                                      const obj4 = { children: null };
                                      const items = [tmp9, tmp12, tmp15];
                                      obj4.children = items;
                                      const tmp21 = hasOwnProperty(noop.Fragment, obj4);
                                      cResult[26] = tmp9;
                                      cResult[27] = tmp12;
                                      cResult[28] = tmp15;
                                      cResult[29] = tmp21;
                                      tmp18 = tmp21;
                                    }
                                  }
                                  const obj5 = { style, index, source };
                                  const tmp17 = React4(tmp5(13071), obj5);
                                  cResult[22] = index;
                                  cResult[23] = source;
                                  cResult[24] = style;
                                  cResult[25] = tmp17;
                                  tmp15 = tmp17;
                                }
                                let tmp13 = null;
                                if (isLoadingVisible) {
                                  const obj6 = { style, status: "loading" };
                                  tmp13 = React4(tmp5(13070), obj6);
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
                  const obj7 = {
                    controls,
                    muted,
                    onError: handleError,
                    onLoad: handleLoad,
                    onLoadStart: handleLoadStart,
                    paused,
                    source: tmp8,
                    style,
                  };
                  const tmp11 = React4(common_Video.VideoComponent, obj7);
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
              }
            }
            const size = { uri, width: null, height: null };
            ({ width: obj3.width, height: obj3.height } = source);
            cResult[4] = source.height;
            cResult[5] = source.width;
            cResult[6] = uri;
            cResult[7] = size;
            tmp8 = size;
            const tmp6 = useMediaLoadingDefault(tmp4);
          }
        }
        const obj8 = { onError, onLoad, onLoadingVisible };
        cResult[0] = onError;
        cResult[1] = onLoad;
        cResult[2] = onLoadingVisible;
        cResult[3] = obj8;
        tmp4 = obj8;
      }
    : function MediaModalVideo(source) {
        source = source.source;
        const style = source.style;
        let uri = source.videoURI;
        ({ controls, index, muted, onError, onLoad, onLoadingVisible, paused } = source);
        if (uri == null) {
          uri = source.uri;
        }
        const items = [uri, ,];
        ({ width: arr[1], height: arr[2] } = source);
        ({ hasError, isLoadingVisible, handleLoadStart, handleLoad, handleError } = useMediaLoadingDefault({
          onError,
          onLoad,
          onLoadingVisible,
        }));
        if (hasError) {
          const obj2 = { style, status: "error" };
          let tmp6Result = React4(MediaModalLoadingOverlayDefault, obj2);
        } else {
          const obj = {
            controls,
            muted,
            onError: handleError,
            onLoad: handleLoad,
            onLoadStart: handleLoadStart,
            paused,
            source: tmp5,
            style,
          };
          const items1 = [React4(common_Video.VideoComponent, obj), ,];
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
      },
);
