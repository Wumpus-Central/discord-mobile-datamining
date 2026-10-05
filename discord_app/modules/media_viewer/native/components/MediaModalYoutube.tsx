// discord_app/modules/media_viewer/native/components/MediaModalYoutube.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../Constants.tsx";
import MediaViewerAnalyticsManager from "../../MediaViewerAnalyticsManager.tsx";
import MediaModalWebView from "MediaModalWebView.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import _objectWithoutProperties_mod from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, visible;

let closure_3 = ["visible", "style", "source"];
let _slicedToArray = _slicedToArray_mod;
let _objectWithoutProperties = _objectWithoutProperties_mod;
const YOUTUBE_EMBED_PAGE_TYPE = Constants.YOUTUBE_EMBED_PAGE_TYPE;
const jsx = Fragment.jsx;
let closure_9 = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (visible) => {
        let closure_0;
        let closure_2;
        let closure_4;
        let closure_5;
        let playerState;
        let ref;
        let source;
        let style;
        let tmp14;
        let tmp19;
        let tmp20;
        let tmp22;
        let tmp4;
        let tmp5;
        let tmp6;
        let tmp7;
        let tmp2 = dependencyMap;
        let obj = require("react");
        const cResult = obj.c(37);
        if (cResult[0] !== visible) {
          visible = visible.visible;
          _require = visible;
          ({ style, source } = visible);
          const tmp10 = _objectWithoutProperties(visible, closure_3);
          cResult[0] = visible;
          cResult[1] = tmp10;
          cResult[2] = source;
          cResult[3] = style;
          cResult[4] = visible;
          tmp7 = visible;
          tmp6 = style;
          tmp5 = source;
          tmp4 = tmp10;
        } else {
          tmp4 = cResult[1];
          tmp5 = cResult[2];
          tmp6 = cResult[3];
          _require = cResult[4];
        }
        let obj2 = ref;
        [playerState, dependencyMap] = ref.useState(tmp(7972).PlayerState.UNREADY);
        [tmp14, closure_3] = _slicedToArray(ref.useState(undefined), 2);
        let tmp15 = playerState;
        const tmp13 = _slicedToArray(ref.useState(undefined), 2);
        const tmp16 = playerState(7946)(playerState);
        _slicedToArray = tmp16;
        const tmp17 = playerState(7946)(tmp7);
        _objectWithoutProperties = tmp17;
        ref = ref.useRef(null);
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function b() {
            const MediaViewerAnalytics = closure_0(closure_2[9]).MediaViewerAnalytics;
            const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({
              platform: "youtube",
              action: "attempted",
            });
          };
          const items = [];
          cResult[5] = fn;
          cResult[6] = items;
          tmp20 = items;
          tmp19 = fn;
        } else {
          tmp19 = cResult[5];
          tmp20 = cResult[6];
        }
        const effect = obj2.useEffect(tmp19, tmp20);
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function w(arg0) {
            let type;
            let value;
            const parsed = JSON.parse(arg0);
            ({ type, value } = parsed);
            if ("onReady" === type) {
              let READY;
              if ("-1" === value) {
                READY = MediaModalWebView.PlayerState.ERRORED;
              } else {
                READY = MediaModalWebView.PlayerState.READY;
              }
              closure_2(READY);
            } else if ("onError" === type) {
              let str6;
              let str1 = value;
              if (typeof value === "number") {
                str1 = value.toString();
              }
              if ("2" === str1) {
                str6 = "invalid_parameter";
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
              closure_2(MediaModalWebView.PlayerState.ERRORED);
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
              const tmp4 = null != tmp35 && tmp35 in MediaModalWebView.PlayerState;
              if (tmp4) {
                closure_2(obj2[value]);
              }
            }
          };
          cResult[7] = fn2;
          tmp22 = fn2;
        } else {
          tmp22 = cResult[7];
        }
        if (cResult[8] === playerState) {
          if (cResult[9] === tmp16) {
            if (cResult[10] === tmp17) {
              let tmp23;
              let tmp24;
              if (cResult[11] === tmp7) {
                tmp23 = cResult[12];
                tmp24 = cResult[13];
              }
              const effect1 = obj2.useEffect(tmp23, tmp24);
              if (cResult[14] === tmp14) {
                if (cResult[15] === playerState) {
                  if (cResult[16] === tmp5.uri) {
                    let tmp26;
                    let tmp27;
                    let tmp28;
                    let tmp29;
                    let tmp30;
                    let tmp31;
                    let tmp32;
                    if (cResult[17] === tmp6) {
                      tmp26 = cResult[18];
                      tmp27 = cResult[19];
                      tmp28 = cResult[20];
                      tmp29 = cResult[21];
                      tmp30 = cResult[22];
                      tmp31 = cResult[23];
                      tmp32 = cResult[24];
                    }
                    const _Symbol3 = Symbol;
                    if (tmp28 === Symbol.for("react.early_return_sentinel")) {
                      let tmp51;
                      if (cResult[26] !== tmp29) {
                        const obj3 = { html: tmp29, baseUrl: baseURL };
                        cResult[26] = tmp29;
                        cResult[27] = obj3;
                        tmp51 = obj3;
                      } else {
                        tmp51 = cResult[27];
                      }
                      if (cResult[28] === tmp26) {
                        if (cResult[29] === tmp27) {
                          if (cResult[30] === playerState) {
                            if (cResult[31] === tmp4) {
                              if (cResult[32] === tmp51) {
                                if (cResult[33] === tmp30) {
                                  if (cResult[34] === tmp31) {
                                    let tmp53;
                                    if (cResult[35] === tmp32) {
                                      tmp53 = cResult[36];
                                    }
                                    tmp28 = tmp53;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      const merged = Object.assign(tmp27);
                      const merged1 = Object.assign(tmp4);
                      const tmp62 = (
                        <tmp26
                          key={tmp30}
                          ref={tmp31}
                          style={tmp32}
                          source={tmp51}
                          baseURL={baseURL}
                          playerState={playerState}
                          onDataReceived={tmp22}
                          javaScriptEnabled
                          javaScriptCanOpenWindowsAutomatically
                        />
                      );
                      cResult[28] = tmp26;
                      cResult[29] = tmp27;
                      cResult[30] = playerState;
                      cResult[31] = tmp4;
                      cResult[32] = tmp51;
                      cResult[33] = tmp30;
                      cResult[34] = tmp31;
                      cResult[35] = tmp32;
                      cResult[36] = tmp62;
                      tmp53 = tmp62;
                    }
                    return tmp28;
                  }
                }
              }
              const _Symbol = Symbol;
              const forResult = Symbol.for("react.early_return_sentinel");
              const tmpResult = require("MediaSourceUtil");
              let youtubeVideoIdFromURI = tmpResult.getYoutubeVideoIdFromURI(tmp5.uri);
              if (youtubeVideoIdFromURI == null) {
                const tmpResult3 = require("MediaSourceUtil");
                youtubeVideoIdFromURI = tmpResult3.getYoutubeClipVideoIdFromURI(tmp5.uri);
              }
              let tmp35;
              let tmp36;
              let tmp37;
              let combined1;
              let tmp39 = null;
              let tmp40;
              let tmp41;
              if (null != youtubeVideoIdFromURI) {
                let tmp43;
                if (playerState === require("MediaModalWebView").PlayerState.ERRORED) {
                  if ("embed_not_allowed" === tmp14) {
                    tmp39 = jsx(tmp15(12778), { videoId: youtubeVideoIdFromURI.videoId });
                  }
                }
                const _Symbol2 = Symbol;
                if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmpResult4 = require("PlatformUtils");
                  const tmp44 = tmpResult4.isAndroid()
                    ? {
                        nestedScrollEnabled: true,
                        overScrollMode: "never",
                        domStorageEnabled: true,
                        mixedContentMode: "compatibility",
                      }
                    : {};
                  cResult[25] = tmp44;
                  tmp43 = tmp44;
                } else {
                  tmp43 = cResult[25];
                }
                let str3 = "";
                let str4 = "";
                const videoId = youtubeVideoIdFromURI.videoId;
                const tmp15Result = tmp15(7972);
                if (null != youtubeVideoIdFromURI.start) {
                  const _HermesInternal = HermesInternal;
                  let str6 = "'start': ";
                  str4 = "'start': " + youtubeVideoIdFromURI.start + ",";
                }
                let combined = str3;
                if (null != youtubeVideoIdFromURI.clip) {
                  const _HermesInternal2 = HermesInternal;
                  combined = "'clip': '" + youtubeVideoIdFromURI.clip + "',";
                }
                if (null != youtubeVideoIdFromURI.clipt) {
                  const _HermesInternal3 = HermesInternal;
                  str3 = "'clipt': '" + youtubeVideoIdFromURI.clipt + "',";
                }
                const _HermesInternal4 = HermesInternal;
                const _HermesInternal5 = HermesInternal;
                combined1 =
                  '\n<html>\n  <head>\n    <meta name="viewport" content="initial-scale=1">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        background-color: #000;\n      }\n    </style>\n    <script>' +
                  "\nconst tag = document.createElement('script');\ntag.setAttribute('src', \"https://www.youtube.com/iframe_api\");\ndocument.head.appendChild(tag);\n\nfunction onYouTubeIframeAPIReady() {\n  window.player = new YT.Player('player', {\n    height:     '100%',\n    width:      '100%',\n    videoId:    '" +
                  youtubeVideoIdFromURI.videoId +
                  "',\n    playerVars: {\n      'playsinline': 1,\n      'fs': 0,\n      'pageType': " +
                  YOUTUBE_EMBED_PAGE_TYPE +
                  ",\n      " +
                  str3 +
                  "\n      " +
                  combined +
                  "\n      " +
                  str4 +
                  "\n    },\n    events: {\n      'onReady': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onReady', value: window.player.getPlayerState()})\n        );\n      },\n      'onError': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onError', value: e.data})\n        );\n      },\n      'onStateChange': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onStateChange', value: e.data})\n        );\n      }\n    }\n  });\n}\n" +
                  '</script>\n  </head>\n  <body>\n    <div id="player"></div>\n  </body>\n</html>\n';
                tmp35 = tmp6;
                tmp36 = ref;
                tmp37 = videoId;
                tmp39 = forResult;
                tmp40 = tmp43;
                tmp41 = tmp15Result;
              }
              cResult[14] = tmp14;
              cResult[15] = playerState;
              cResult[16] = tmp5.uri;
              cResult[17] = tmp6;
              cResult[18] = tmp41;
              cResult[19] = tmp40;
              cResult[20] = tmp39;
              cResult[21] = combined1;
              cResult[22] = tmp37;
              cResult[23] = tmp36;
              class Y {
                constructor() {
                  const tmp2 = null != ref.current && first !== MediaModalWebView.PlayerState.UNREADY;
                  if (tmp2) {
                    const tmp7 =
                      closure_0 &&
                      closure_4 === MediaModalWebView.PlayerState.UNREADY &&
                      first === MediaModalWebView.PlayerState.READY;
                    if (tmp7) {
                      const current = ref.current;
                      current.injectJavaScript("window.player.playVideo();  true;");
                    }
                    const tmp15 = closure_0 && !closure_5;
                    if (tmp15) {
                      const current2 = ref.current;
                      current2.injectJavaScript("window.player.playVideo();  true;");
                    }
                    const tmp18 = !closure_0 && closure_5;
                    if (tmp18) {
                      const current3 = ref.current;
                      current3.injectJavaScript("window.player.pauseVideo(); true;");
                    }
                  }
                }
              }
              tmp32 = tmp35;
              tmp31 = tmp36;
              tmp30 = tmp37;
              tmp29 = combined1;
              tmp28 = tmp39;
              tmp27 = tmp40;
              tmp26 = tmp41;
            }
          }
        }
        class Y {
          constructor() {
            const tmp2 = null != ref.current && first !== MediaModalWebView.PlayerState.UNREADY;
            if (tmp2) {
              const tmp7 =
                closure_0 &&
                closure_4 === MediaModalWebView.PlayerState.UNREADY &&
                first === MediaModalWebView.PlayerState.READY;
              if (tmp7) {
                const current = ref.current;
                current.injectJavaScript("window.player.playVideo();  true;");
              }
              const tmp15 = closure_0 && !closure_5;
              if (tmp15) {
                const current2 = ref.current;
                current2.injectJavaScript("window.player.playVideo();  true;");
              }
              const tmp18 = !closure_0 && closure_5;
              if (tmp18) {
                const current3 = ref.current;
                current3.injectJavaScript("window.player.pauseVideo(); true;");
              }
            }
          }
        }
        const items1 = [ref, tmp7, tmp17, tmp16, playerState];
        cResult[8] = playerState;
        cResult[9] = tmp16;
        cResult[10] = tmp17;
        cResult[11] = tmp7;
        cResult[12] = Y;
        cResult[13] = items1;
        tmp24 = items1;
        tmp23 = Y;
      }
    : (visible) => {
        let closure_2;
        let closure_4;
        let first1;
        let playerState;
        visible = visible.visible;
        const source = visible.source;
        const style = visible.style;
        const merged = Object.assign(visible, Object.assign({ visible: 0, style: 0, source: 0 }));
        playerState = undefined;
        dependencyMap = undefined;
        closure_3 = undefined;
        let ref;
        let tmp2 = visible;
        [playerState, dependencyMap] = ref.useState(visible(7972).PlayerState.UNREADY);
        [first1, closure_3] = ref.useState(undefined);
        const tmp9 = playerState(7946)(playerState);
        _slicedToArray = tmp9;
        const tmp10 = playerState(7946)(visible);
        let closure_5 = tmp10;
        ref = ref.useRef(null);
        const effect = ref.useEffect(() => {
          const MediaViewerAnalytics = visible(closure_2[9]).MediaViewerAnalytics;
          const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({
            platform: "youtube",
            action: "attempted",
          });
        }, []);
        const items = [ref, visible, tmp10, tmp9, playerState];
        const callback = ref.useCallback((arg0) => {
          let type;
          let value;
          const parsed = JSON.parse(arg0);
          ({ type, value } = parsed);
          if ("onReady" === type) {
            let READY;
            if ("-1" === value) {
              READY = MediaModalWebView.PlayerState.ERRORED;
            } else {
              READY = MediaModalWebView.PlayerState.READY;
            }
            closure_2(READY);
          } else if ("onError" === type) {
            let str6;
            let str1 = value;
            if (typeof value === "number") {
              str1 = value.toString();
            }
            if ("2" === str1) {
              str6 = "invalid_parameter";
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
            closure_2(MediaModalWebView.PlayerState.ERRORED);
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
            const tmp4 = null != tmp35 && tmp35 in MediaModalWebView.PlayerState;
            if (tmp4) {
              closure_2(obj2[value]);
            }
          }
        }, []);
        const effect1 = ref.useEffect(() => {
          const tmp2 = null != ref.current && first !== MediaModalWebView.PlayerState.UNREADY;
          if (tmp2) {
            const tmp7 =
              visible &&
              closure_4 === MediaModalWebView.PlayerState.UNREADY &&
              first === MediaModalWebView.PlayerState.READY;
            if (tmp7) {
              const current = ref.current;
              current.injectJavaScript("window.player.playVideo();  true;");
            }
            const tmp15 = visible && !closure_5;
            if (tmp15) {
              const current2 = ref.current;
              current2.injectJavaScript("window.player.playVideo();  true;");
            }
            const tmp18 = !visible && closure_5;
            if (tmp18) {
              const current3 = ref.current;
              current3.injectJavaScript("window.player.pauseVideo(); true;");
            }
          }
        }, items);
        let obj = visible(7939);
        let youtubeVideoIdFromURI = obj.getYoutubeVideoIdFromURI(source.uri);
        if (youtubeVideoIdFromURI == null) {
          const tmp2Result = tmp2(7939);
          youtubeVideoIdFromURI = tmp2Result.getYoutubeClipVideoIdFromURI(source.uri);
        }
        if (null == youtubeVideoIdFromURI) {
          return null;
        } else {
          if (playerState === tmp2(7972).PlayerState.ERRORED) {
            if ("embed_not_allowed" === first1) {
              return jsx(playerState(12778), { videoId: youtubeVideoIdFromURI.videoId });
            }
          }
          const tmp2Result2 = tmp2(1369);
          let str2 = "";
          let str3 = "";
          const tmp16 = tmp2Result2.isAndroid()
            ? {
                nestedScrollEnabled: true,
                overScrollMode: "never",
                domStorageEnabled: true,
                mixedContentMode: "compatibility",
              }
            : {};
          playerState(7972);
          if (null != youtubeVideoIdFromURI.start) {
            const _HermesInternal = HermesInternal;
            str3 = "'start': " + youtubeVideoIdFromURI.start + ",";
          }
          let combined = str2;
          if (null != youtubeVideoIdFromURI.clip) {
            const _HermesInternal2 = HermesInternal;
            let str6 = "',";
            combined = "'clip': '" + youtubeVideoIdFromURI.clip + "',";
          }
          if (null != youtubeVideoIdFromURI.clipt) {
            const _HermesInternal3 = HermesInternal;
            str2 = "'clipt': '" + youtubeVideoIdFromURI.clipt + "',";
          }
          const _HermesInternal4 = HermesInternal;
          const _HermesInternal5 = HermesInternal;
          const obj4 = {
            html:
              '\n<html>\n  <head>\n    <meta name="viewport" content="initial-scale=1">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        background-color: #000;\n      }\n    </style>\n    <script>' +
              "\nconst tag = document.createElement('script');\ntag.setAttribute('src', \"https://www.youtube.com/iframe_api\");\ndocument.head.appendChild(tag);\n\nfunction onYouTubeIframeAPIReady() {\n  window.player = new YT.Player('player', {\n    height:     '100%',\n    width:      '100%',\n    videoId:    '" +
              youtubeVideoIdFromURI.videoId +
              "',\n    playerVars: {\n      'playsinline': 1,\n      'fs': 0,\n      'pageType': " +
              YOUTUBE_EMBED_PAGE_TYPE +
              ",\n      " +
              str2 +
              "\n      " +
              combined +
              "\n      " +
              str3 +
              "\n    },\n    events: {\n      'onReady': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onReady', value: window.player.getPlayerState()})\n        );\n      },\n      'onError': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onError', value: e.data})\n        );\n      },\n      'onStateChange': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onStateChange', value: e.data})\n        );\n      }\n    }\n  });\n}\n" +
              '</script>\n  </head>\n  <body>\n    <div id="player"></div>\n  </body>\n</html>\n',
            baseUrl: baseURL,
          };
          const merged1 = Object.assign(tmp16);
          const merged2 = Object.assign(merged);
          return (
            <tmp8Result
              key={youtubeVideoIdFromURI.videoId}
              ref={ref}
              style={style}
              source={obj4}
              baseURL={baseURL}
              playerState={playerState}
              onDataReceived={callback}
              javaScriptEnabled
              javaScriptCanOpenWindowsAutomatically
            />
          );
        }
      },
);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalYoutube.tsx");

export default memoResult;
