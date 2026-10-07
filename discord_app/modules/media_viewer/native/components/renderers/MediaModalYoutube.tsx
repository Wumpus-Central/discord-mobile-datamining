// === Module 12792: MediaModalYoutube ===

// Module 12792 (MediaModalYoutube)
import MediaViewerAnalyticsManager from "MediaViewerAnalyticsManager" /* 7946 */;
import MediaModalWebView from "MediaModalWebView" /* 7982 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["visible", "style", "source"];
const YOUTUBE_EMBED_PAGE_TYPE = fn(1085).YOUTUBE_EMBED_PAGE_TYPE;
const jsx = fn(21).jsx;
let closure_9 = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalYoutube.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((visible) => {
  let videoIdResult = dependencyMap;
  const cResult = require("c").c(37);
  if (cResult[0] !== visible) {
    visible = visible.visible;
    _require = visible;
    ({ style, source } = visible);
    const tmp9 = _objectWithoutProperties(visible, closure_3);
    cResult[0] = visible;
    cResult[1] = tmp9;
    cResult[2] = source;
    cResult[3] = style;
    cResult[4] = visible;
    let tmp5 = style;
    let uri = source;
    let tmp4 = tmp9;
  } else {
    tmp4 = cResult[1];
    uri = cResult[2];
    tmp5 = cResult[3];
    _require = cResult[4];
  }
  [playerState, dependencyMap] = ref.useState(require("MediaModalWebView").PlayerState.UNREADY);
  let obj = require("c");
  [tmp13, closure_3] = ref.useState(undefined);
  let videoId = playerState;
  const tmp14 = playerState(7957)(playerState);
  _slicedToArray = tmp14;
  let tmp15 = playerState(7957)(tmp6);
  _objectWithoutProperties = tmp15;
  let tmp16 = null;
  ref = ref.useRef(null);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function b() {
      const MediaViewerAnalytics = closure_0(7946).MediaViewerAnalytics;
      const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "youtube", action: "attempted" });
    };
    const items = [];
    cResult[5] = fn;
    cResult[6] = items;
    let tmp19 = items;
    let tmp18 = fn;
  } else {
    tmp18 = cResult[5];
    tmp19 = cResult[6];
  }
  const effect = obj2.useEffect(tmp18, tmp19);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function w(arg0) {
      const parsed = JSON.parse(arg0);
      ({ type, value } = parsed);
      if ("onReady" === type) {
        if ("-1" === value) {
          let READY = MediaModalWebView.PlayerState.ERRORED;
        } else {
          READY = MediaModalWebView.PlayerState.READY;
        }
        dependencyMap(READY);
      } else if ("onError" === type) {
        let str1 = value;
        if (typeof value === "number") {
          str1 = value.toString();
        }
        if ("2" === str1) {
          let str6 = "invalid_parameter";
        } else if ("5" === str1) {
          str6 = "html5_error";
        } else if ("100" === str1) {
          str6 = "video_not_found";
        } else {
          str6 = "embed_not_allowed";
          if ("101" !== str1) {
            str6 = "embed_not_allowed";
            if ("150" !== str1) {
              str6 = "unknown";
            }
          }
        }
        dependencyMap(MediaModalWebView.PlayerState.ERRORED);
        closure_1_3(str6);
        const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
        const obj = { platform: "youtube", action: "errored", error: str6 };
        const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted(obj);
      } else if ("onStateChange" === type) {
        const obj2 = { "-1": null, 0: null, 1: null, 2: null, 3: null, 5: null };
        obj2[0] = MediaModalWebView.PlayerState.UNSTARTED;
        obj2[0] = MediaModalWebView.PlayerState.ENDED;
        obj2[1] = MediaModalWebView.PlayerState.PLAYING;
        obj2[2] = MediaModalWebView.PlayerState.PAUSED;
        obj2[3] = MediaModalWebView.PlayerState.BUFFERING;
        obj2[5] = MediaModalWebView.PlayerState.VIDEO_CUED;
        let tmp4 = null != tmp35;
        if (tmp4) {
          tmp4 = tmp35 in MediaModalWebView.PlayerState;
        }
        if (tmp4) {
          dependencyMap(tmp35);
        }
      }
    };
    cResult[7] = fn2;
    let merged1 = fn2;
  } else {
    merged1 = cResult[7];
  }
  if (cResult[8] === playerState) {
    if (cResult[9] === tmp14) {
      if (cResult[10] === tmp15) {
        if (cResult[11] === tmp6) {
          let tmp22 = cResult[12];
          let tmp23 = cResult[13];
        }
        const effect1 = obj2.useEffect(tmp22, tmp23);
        if (cResult[14] === tmp13) {
          if (cResult[15] === playerState) {
            if (cResult[16] === uri.uri) {
              if (cResult[17] === tmp5) {
                const _Symbol3 = Symbol;
                if (cResult[20] !== Symbol.for("react.early_return_sentinel")) {
                  return tmp27;
                } else {
                  if (cResult[26] !== tmp28) {
                    const obj3 = { html: tmp28, baseUrl: baseURL };
                    cResult[26] = tmp28;
                    cResult[27] = obj3;
                    let tmp56 = obj3;
                  } else {
                    tmp56 = cResult[27];
                  }
                  if (cResult[28] === tmp25) {
                    if (cResult[29] === tmp26) {
                      if (cResult[30] === playerState) {
                        if (cResult[31] === tmp4) {
                          if (cResult[32] === tmp56) {
                            if (cResult[33] === tmp29) {
                              if (cResult[34] === tmp30) {
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj4 = { ref: tmp30, style: tmp31, source: tmp56, baseURL, playerState, onDataReceived: merged1, javaScriptEnabled: true, javaScriptCanOpenWindowsAutomatically: true };
                  const merged = Object.assign(tmp26);
                  merged1 = Object.assign(tmp4);
                  const tmp66 = <tmp25 key={tmp29} ref={tmp30} style={tmp31} source={tmp56} baseURL={baseURL} playerState={playerState} onDataReceived={merged1} javaScriptEnabled javaScriptCanOpenWindowsAutomatically />;
                  cResult[28] = tmp25;
                  cResult[29] = tmp26;
                  cResult[30] = playerState;
                  cResult[31] = tmp4;
                  cResult[32] = tmp56;
                  cResult[33] = tmp29;
                  cResult[34] = tmp30;
                  cResult[35] = tmp31;
                  cResult[36] = tmp66;
                }
              }
            }
          }
        }
        const _Symbol = Symbol;
        const forResult = Symbol.for("react.early_return_sentinel");
        let str3 = tmp(7950).getYoutubeVideoIdFromURI(uri.uri);
        if (str3 == tmp16) {
          str3 = tmp(7950).getYoutubeClipVideoIdFromURI(uri.uri);
          const tmpResult3 = tmp(7950);
        }
        let tmp37 = null;
        if (tmp16 == str3) {
          cResult[14] = tmp13;
          cResult[15] = playerState;
          uri = uri.uri;
          cResult[16] = uri;
          cResult[17] = tmp5;
          cResult[18] = tmp39;
          cResult[19] = tmp38;
          cResult[20] = tmp37;
          cResult[21] = combined2;
          cResult[22] = tmp35;
          cResult[23] = tmp34;
          cResult[24] = tmp33;
        } else if (playerState === tmp(7982).PlayerState.ERRORED) {
          if ("embed_not_allowed" === tmp13) {
            const obj5 = { videoId: str3.videoId };
            tmp37 = jsx(videoId(12793), { videoId: str3.videoId });
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[25] === Symbol.for(str)) {
          const tmp41 = tmp(1369).isAndroid() ? { nestedScrollEnabled: true, overScrollMode: "never", domStorageEnabled: true, mixedContentMode: "compatibility" } : {};
          cResult[25] = tmp41;
          const tmpResult4 = tmp(1369);
        } else {
          videoIdResult = videoId(7982);
          videoId = str3.videoId;
          let str5 = "";
          let str6 = "";
          if (tmp16 != str3.start) {
            const _HermesInternal = HermesInternal;
            str6 = "'start': " + str3.start + ",";
          }
          let combined = str5;
          if (tmp16 != str3.clip) {
            const _HermesInternal2 = HermesInternal;
            combined = "'clip': '" + str3.clip + "',";
          }
          tmp16 = tmp16 == str3.clipt;
          if (!tmp16) {
            const _HermesInternal3 = HermesInternal;
            str5 = "'clipt': '" + str3.clipt + "',";
          }
          const _HermesInternal4 = HermesInternal;
          const _HermesInternal5 = HermesInternal;
          const combined1 = "\nconst tag = document.createElement('script');\ntag.setAttribute('src', \"https://www.youtube.com/iframe_api\");\ndocument.head.appendChild(tag);\n\nfunction onYouTubeIframeAPIReady() {\n  window.player = new YT.Player('player', {\n    height:     '100%',\n    width:      '100%',\n    videoId:    '" + str3.videoId + "',\n    playerVars: {\n      'playsinline': 1,\n      'fs': 0,\n      'pageType': " + YOUTUBE_EMBED_PAGE_TYPE + ",\n      " + str5 + "\n      " + combined + "\n      " + str6 + "\n    },\n    events: {\n      'onReady': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onReady', value: window.player.getPlayerState()})\n        );\n      },\n      'onError': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onError', value: e.data})\n        );\n      },\n      'onStateChange': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onStateChange', value: e.data})\n        );\n      }\n    }\n  });\n}\n";
          str3 = "\n<html>\n  <head>\n    <meta name=\"viewport\" content=\"initial-scale=1\">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        background-color: #000;\n      }\n    </style>\n    <script>";
          combined2 = "\n<html>\n  <head>\n    <meta name=\"viewport\" content=\"initial-scale=1\">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        background-color: #000;\n      }\n    </style>\n    <script>" + combined1 + "</script>\n  </head>\n  <body>\n    <div id=\"player\"></div>\n  </body>\n</html>\n";
          tmp37 = forResult;
        }
        const tmpResult = tmp(7950);
      }
    }
  }
  class Y {
    constructor() {
      tmp = closure_6;
      tmp2 = null != closure_6.current;
      if (tmp2) {
        tmp3 = closure_1;
        tmp4 = closure_0;
        tmp5 = closure_2;
        tmp2 = closure_1 !== closure_0(closure_2[7]).PlayerState.UNREADY;
      }
      if (tmp2) {
        tmp6 = closure_0;
        tmp7 = closure_0;
        if (closure_0) {
          tmp8 = closure_4;
          tmp9 = closure_0;
          tmp10 = closure_2;
          tmp7 = closure_4 === closure_0(closure_2[7]).PlayerState.UNREADY;
        }
        if (tmp7) {
          tmp11 = closure_1;
          tmp12 = closure_0;
          tmp13 = closure_2;
          tmp7 = closure_1 === closure_0(closure_2[7]).PlayerState.READY;
        }
        if (tmp7) {
          current = tmp.current;
          str = "window.player.playVideo();  true;";
          injectJavaScriptResult = current.injectJavaScript("window.player.playVideo();  true;");
        }
        tmp15 = tmp6;
        if (tmp6) {
          tmp16 = closure_5;
          tmp15 = !closure_5;
        }
        if (tmp15) {
          current2 = tmp.current;
          str2 = "window.player.playVideo();  true;";
          injectJavaScriptResult1 = current2.injectJavaScript("window.player.playVideo();  true;");
        }
        tmp18 = !tmp6;
        if (!tmp6) {
          tmp18 = closure_5;
        }
        if (tmp18) {
          current3 = tmp.current;
          str3 = "window.player.pauseVideo(); true;";
          injectJavaScriptResult2 = current3.injectJavaScript("window.player.pauseVideo(); true;");
        }
      }
      return;
    }
  }
  const items1 = [ref, tmp6, tmp15, tmp14, playerState];
  cResult[8] = playerState;
  cResult[9] = tmp14;
  cResult[10] = tmp15;
  cResult[11] = tmp6;
  cResult[12] = Y;
  cResult[13] = items1;
  tmp23 = items1;
  tmp22 = Y;
  const tmp12 = _slicedToArray(ref.useState(undefined), 2);
}) : ((visible) => {
  visible = visible.visible;
  const source = visible.source;
  const merged = Object.assign(visible, Object.assign({ visible: 0, style: 0, source: 0 }));
  playerState = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let ref;
  [playerState, dependencyMap] = ref.useState(visible(7982).PlayerState.UNREADY);
  const tmp6 = _slicedToArray(ref.useState(undefined), 2);
  closure_3 = tmp6[1];
  const tmp8 = playerState(7957)(playerState);
  _slicedToArray = tmp8;
  const tmp9 = playerState(7957)(visible);
  closure_5 = tmp9;
  ref = ref.useRef(null);
  const effect = ref.useEffect(() => {
    const MediaViewerAnalytics = visible(7946).MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "youtube", action: "attempted" });
  }, []);
  const items = [ref, visible, tmp9, tmp8, playerState];
  const callback = ref.useCallback((arg0) => {
    const parsed = JSON.parse(arg0);
    ({ type, value } = parsed);
    if ("onReady" === type) {
      if ("-1" === value) {
        let READY = MediaModalWebView.PlayerState.ERRORED;
      } else {
        READY = MediaModalWebView.PlayerState.READY;
      }
      dependencyMap(READY);
    } else if ("onError" === type) {
      let str1 = value;
      if (typeof value === "number") {
        str1 = value.toString();
      }
      if ("2" === str1) {
        let str6 = "invalid_parameter";
      } else if ("5" === str1) {
        str6 = "html5_error";
      } else if ("100" === str1) {
        str6 = "video_not_found";
      } else {
        str6 = "embed_not_allowed";
        if ("101" !== str1) {
          str6 = "embed_not_allowed";
          if ("150" !== str1) {
            str6 = "unknown";
          }
        }
      }
      dependencyMap(MediaModalWebView.PlayerState.ERRORED);
      closure_3(str6);
      const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
      const obj = { platform: "youtube", action: "errored", error: str6 };
      const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted(obj);
    } else if ("onStateChange" === type) {
      const obj2 = { "-1": null, 0: null, 1: null, 2: null, 3: null, 5: null };
      obj2[0] = MediaModalWebView.PlayerState.UNSTARTED;
      obj2[0] = MediaModalWebView.PlayerState.ENDED;
      obj2[1] = MediaModalWebView.PlayerState.PLAYING;
      obj2[2] = MediaModalWebView.PlayerState.PAUSED;
      obj2[3] = MediaModalWebView.PlayerState.BUFFERING;
      obj2[5] = MediaModalWebView.PlayerState.VIDEO_CUED;
      let tmp4 = null != tmp35;
      if (tmp4) {
        tmp4 = tmp35 in MediaModalWebView.PlayerState;
      }
      if (tmp4) {
        dependencyMap(tmp35);
      }
    }
  }, []);
  const effect1 = ref.useEffect(() => {
    let tmp2 = null != ref.current;
    if (tmp2) {
      tmp2 = first !== MediaModalWebView.PlayerState.UNREADY;
    }
    if (tmp2) {
      let tmp7 = visible;
      if (visible) {
        tmp7 = closure_4 === MediaModalWebView.PlayerState.UNREADY;
      }
      if (tmp7) {
        tmp7 = first === MediaModalWebView.PlayerState.READY;
      }
      if (tmp7) {
        const current = ref.current;
        current.injectJavaScript("window.player.playVideo();  true;");
      }
      let tmp15 = visible;
      if (visible) {
        tmp15 = !closure_5;
      }
      if (tmp15) {
        const current2 = ref.current;
        current2.injectJavaScript("window.player.playVideo();  true;");
      }
      let tmp18 = !visible;
      if (!visible) {
        tmp18 = closure_5;
      }
      if (tmp18) {
        const current3 = ref.current;
        current3.injectJavaScript("window.player.pauseVideo(); true;");
      }
    }
  }, items);
  let youtubeVideoIdFromURI = visible(7950).getYoutubeVideoIdFromURI(source.uri);
  if (youtubeVideoIdFromURI == null) {
    youtubeVideoIdFromURI = tmp2(7950).getYoutubeClipVideoIdFromURI(source.uri);
    const tmp2Result = tmp2(7950);
  }
  if (null == youtubeVideoIdFromURI) {
    return null;
  } else {
    if (playerState === tmp2(7982).PlayerState.ERRORED) {
      if ("embed_not_allowed" === tmp6[0]) {
        let obj2 = { videoId: youtubeVideoIdFromURI.videoId };
        return jsx(tmp7(12793), { videoId: youtubeVideoIdFromURI.videoId });
      }
    }
    let tmp15 = tmp2(1369).isAndroid() ? { nestedScrollEnabled: true, overScrollMode: "never", domStorageEnabled: true, mixedContentMode: "compatibility" } : {};
    const obj3 = { ref, style: visible.style, source: null, baseURL: null, playerState: null, onDataReceived: null, javaScriptEnabled: true, javaScriptCanOpenWindowsAutomatically: true };
    let str2 = "";
    let str3 = "";
    const tmp2Result2 = tmp2(1369);
    if (null != youtubeVideoIdFromURI.start) {
      const _HermesInternal = HermesInternal;
      str3 = "'start': " + youtubeVideoIdFromURI.start + ",";
    }
    let combined = str2;
    if (null != youtubeVideoIdFromURI.clip) {
      const _HermesInternal2 = HermesInternal;
      combined = "'clip': '" + youtubeVideoIdFromURI.clip + "',";
    }
    if (null != youtubeVideoIdFromURI.clipt) {
      const _HermesInternal3 = HermesInternal;
      str2 = "'clipt': '" + youtubeVideoIdFromURI.clipt + "',";
    }
    const obj4 = { html: null, baseUrl: null };
    const _HermesInternal4 = HermesInternal;
    const _HermesInternal5 = HermesInternal;
    obj4.html = "\n<html>\n  <head>\n    <meta name=\"viewport\" content=\"initial-scale=1\">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        background-color: #000;\n      }\n    </style>\n    <script>" + "\nconst tag = document.createElement('script');\ntag.setAttribute('src', \"https://www.youtube.com/iframe_api\");\ndocument.head.appendChild(tag);\n\nfunction onYouTubeIframeAPIReady() {\n  window.player = new YT.Player('player', {\n    height:     '100%',\n    width:      '100%',\n    videoId:    '" + youtubeVideoIdFromURI.videoId + "',\n    playerVars: {\n      'playsinline': 1,\n      'fs': 0,\n      'pageType': " + YOUTUBE_EMBED_PAGE_TYPE + ",\n      " + str2 + "\n      " + combined + "\n      " + str3 + "\n    },\n    events: {\n      'onReady': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onReady', value: window.player.getPlayerState()})\n        );\n      },\n      'onError': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onError', value: e.data})\n        );\n      },\n      'onStateChange': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onStateChange', value: e.data})\n        );\n      }\n    }\n  });\n}\n" + "</script>\n  </head>\n  <body>\n    <div id=\"player\"></div>\n  </body>\n</html>\n";
    obj4.baseUrl = baseURL;
    obj3.source = obj4;
    obj3.baseURL = baseURL;
    obj3.playerState = playerState;
    obj3.onDataReceived = callback;
    const merged1 = Object.assign(tmp15);
    const merged2 = Object.assign(merged);
    return jsx(tmp7(7982), { ref, style: visible.style, source: null, baseURL: null, playerState: null, onDataReceived: null, javaScriptEnabled: true, javaScriptCanOpenWindowsAutomatically: true }, youtubeVideoIdFromURI.videoId);
  }
  let obj = visible(7950);
}));