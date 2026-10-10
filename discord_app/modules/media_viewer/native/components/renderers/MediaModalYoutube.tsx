// discord_app/modules/media_viewer/native/components/renderers/MediaModalYoutube.tsx
import MediaViewerAnalyticsManager from "../../../MediaViewerAnalyticsManager.tsx";
import MediaModalWebViewBase from "MediaModalWebViewBase.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const YOUTUBE_EMBED_PAGE_TYPE = fn(1085).YOUTUBE_EMBED_PAGE_TYPE;
const jsx = fn(21).jsx;
let closure_7 = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalYoutube.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function MediaModalYoutube(visible) {
        let str = visible;
        let videoIdResult = dependencyMap;
        const cResult = visible(576).c(33);
        visible = visible.visible;
        ({ style, source, onError, onLoad, onLoadStart, onToggleOverlay } = visible);
        [playerState, dependencyMap] = noop.useState(visible(8423).PlayerState.UNREADY);
        let obj = visible(576);
        [tmp6, _slicedToArray] = noop.useState(undefined);
        let videoId = playerState;
        let tmp7 = playerState(5922)(playerState);
        noop = tmp7;
        const tmp8 = playerState(5922)(visible);
        closure_5 = tmp8;
        let tmp9 = null;
        const ref = noop.useRef(null);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function c() {
            const MediaViewerAnalytics = visible(8388).MediaViewerAnalytics;
            const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({
              platform: "youtube",
              action: "attempted",
            });
          };
          const items = [];
          cResult[0] = fn;
          cResult[1] = items;
          tmp11 = fn;
          tmp12 = items;
        } else {
          [tmp11, tmp12] = cResult;
        }
        const effect = obj2.useEffect(tmp11, tmp12);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function y(arg0) {
            const parsed = JSON.parse(arg0);
            ({ type, value } = parsed);
            if ("onReady" === type) {
              if ("-1" === value) {
                let READY = MediaModalWebViewBase.PlayerState.ERRORED;
              } else {
                READY = MediaModalWebViewBase.PlayerState.READY;
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
              dependencyMap(MediaModalWebViewBase.PlayerState.ERRORED);
              _slicedToArray(str6);
              const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
              const obj = { platform: "youtube", action: "errored", error: str6 };
              const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted(obj);
            } else if ("onStateChange" === type) {
              const obj2 = { "-1": null, 0: null, 1: null, 2: null, 3: null, 5: null };
              obj2[0] = MediaModalWebViewBase.PlayerState.UNSTARTED;
              obj2[0] = MediaModalWebViewBase.PlayerState.ENDED;
              obj2[1] = MediaModalWebViewBase.PlayerState.PLAYING;
              obj2[2] = MediaModalWebViewBase.PlayerState.PAUSED;
              obj2[3] = MediaModalWebViewBase.PlayerState.BUFFERING;
              obj2[5] = MediaModalWebViewBase.PlayerState.VIDEO_CUED;
              let tmp4 = null != tmp35;
              if (tmp4) {
                tmp4 = tmp35 in MediaModalWebViewBase.PlayerState;
              }
              if (tmp4) {
                dependencyMap(tmp35);
              }
            }
          };
          cResult[2] = fn2;
          let str2 = fn2;
        } else {
          str2 = cResult[2];
        }
        if (cResult[3] === playerState) {
          if (cResult[4] === tmp7) {
            if (cResult[5] === tmp8) {
              if (cResult[6] === visible) {
                let tmp14 = cResult[7];
                let tmp15 = cResult[8];
              }
              const effect1 = obj2.useEffect(tmp14, tmp15);
              if (cResult[9] === tmp6) {
                if (cResult[10] === playerState) {
                  if (cResult[11] === source.uri) {
                    if (cResult[12] === style) {
                      const _Symbol2 = Symbol;
                      if (cResult[15] !== Symbol.for("react.early_return_sentinel")) {
                        return tmp19;
                      } else {
                        if (cResult[20] !== tmp20) {
                          const obj3 = { html: tmp20, baseUrl: baseURL };
                          cResult[20] = tmp20;
                          cResult[21] = obj3;
                          let tmp47 = obj3;
                        } else {
                          tmp47 = cResult[21];
                        }
                        if (cResult[22] === tmp17) {
                          if (cResult[23] === onError) {
                            if (cResult[24] === onLoad) {
                              if (cResult[25] === onLoadStart) {
                                if (cResult[26] === onToggleOverlay) {
                                  if (cResult[27] === playerState) {
                                    if (cResult[28] === tmp47) {
                                      if (cResult[29] === tmp21) {
                                        if (cResult[30] === tmp22) {
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        const obj4 = {
                          ref: tmp22,
                          style: tmp23,
                          source: tmp47,
                          baseURL,
                          playerState,
                          onDataReceived: str2,
                          onToggleOverlay,
                          javaScriptCanOpenWindowsAutomatically: true,
                          domStorageEnabled: tmp18,
                          mixedContentMode: null,
                          nestedScrollEnabled: null,
                          onError: null,
                          onLoad: null,
                          onLoadStart: null,
                          overScrollMode: null,
                        };
                        let str22;
                        if (tmp18) {
                          str22 = "compatibility";
                        }
                        obj4.mixedContentMode = str22;
                        obj4.nestedScrollEnabled = tmp18 || undefined;
                        obj4.onError = onError;
                        obj4.onLoad = onLoad;
                        obj4.onLoadStart = onLoadStart;
                        str2 = undefined;
                        if (tmp18) {
                          str2 = "never";
                        }
                        obj4.overScrollMode = str2;
                        const tmp50Result = ref(tmp17, obj4, tmp21);
                        cResult[22] = tmp17;
                        cResult[23] = onError;
                        cResult[24] = onLoad;
                        cResult[25] = onLoadStart;
                        cResult[26] = onToggleOverlay;
                        cResult[27] = playerState;
                        cResult[28] = tmp47;
                        cResult[29] = tmp21;
                        class V {
                          constructor() {
                            tmp = closure_6;
                            tmp2 = null != closure_6.current;
                            if (tmp2) {
                              tmp3 = closure_1;
                              tmp4 = closure_0;
                              tmp5 = closure_2;
                              tmp2 = closure_1 !== closure_0(closure_2[6]).PlayerState.UNREADY;
                            }
                            if (tmp2) {
                              tmp6 = visible;
                              tmp7 = visible;
                              if (visible) {
                                tmp8 = closure_4;
                                tmp9 = closure_0;
                                tmp10 = closure_2;
                                tmp7 = closure_4 === closure_0(closure_2[6]).PlayerState.UNREADY;
                              }
                              if (tmp7) {
                                tmp11 = closure_1;
                                tmp12 = closure_0;
                                tmp13 = closure_2;
                                tmp7 = closure_1 === closure_0(closure_2[6]).PlayerState.READY;
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
                                injectJavaScriptResult1 = current2.injectJavaScript(
                                  "window.player.playVideo();  true;",
                                );
                              }
                              tmp18 = !tmp6;
                              if (!tmp6) {
                                tmp18 = closure_5;
                              }
                              if (tmp18) {
                                current3 = tmp.current;
                                str3 = "window.player.pauseVideo(); true;";
                                injectJavaScriptResult2 = current3.injectJavaScript(
                                  "window.player.pauseVideo(); true;",
                                );
                              }
                            }
                            return;
                          }
                        }
                        cResult[31] = tmp23;
                        cResult[32] = tmp50Result;
                      }
                    }
                  }
                }
              }
              const _Symbol = Symbol;
              const forResult = Symbol.for("react.early_return_sentinel");
              let str4 = str(8392).getYoutubeVideoIdFromURI(source.uri);
              if (str4 == tmp9) {
                str4 = str(8392).getYoutubeClipVideoIdFromURI(source.uri);
                const strResult1 = str(8392);
              }
              let tmp29 = null;
              if (tmp9 == str4) {
                cResult[9] = tmp6;
                cResult[10] = playerState;
                source = source.uri;
                cResult[11] = source;
                cResult[12] = style;
                cResult[13] = tmp31;
                cResult[14] = tmp30;
                cResult[15] = tmp29;
                cResult[16] = tmp28;
                cResult[17] = tmp27;
                cResult[18] = tmp26;
                cResult[19] = style;
              } else if (playerState === str(8423).PlayerState.ERRORED) {
                if ("embed_not_allowed" === tmp6) {
                  const obj5 = { videoId: str4.videoId };
                  tmp29 = ref(videoId(13067), obj5);
                }
              }
              const strResult = str(8392);
              const strResult2 = str(1382);
              videoIdResult = videoId(8423);
              videoId = str4.videoId;
              let str6 = "";
              let str7 = "";
              if (tmp9 != str4.start) {
                const _HermesInternal = HermesInternal;
                str7 = "'start': " + str4.start + ",";
              }
              let combined = str6;
              if (tmp9 != str4.clip) {
                const _HermesInternal2 = HermesInternal;
                combined = "'clip': '" + str4.clip + "',";
              }
              tmp9 = tmp9 == str4.clipt;
              if (!tmp9) {
                const _HermesInternal3 = HermesInternal;
                str6 = "'clipt': '" + str4.clipt + "',";
              }
              const _HermesInternal4 = HermesInternal;
              const _HermesInternal5 = HermesInternal;
              str = '</script>\n  </head>\n  <body>\n    <div id="player"></div>\n  </body>\n</html>\n';
              const combined1 =
                "\nconst tag = document.createElement('script');\ntag.setAttribute('src', \"https://www.youtube.com/iframe_api\");\ndocument.head.appendChild(tag);\n\nfunction onYouTubeIframeAPIReady() {\n  window.player = new YT.Player('player', {\n    height:     '100%',\n    width:      '100%',\n    videoId:    '" +
                str4.videoId +
                "',\n    playerVars: {\n      'playsinline': 1,\n      'fs': 0,\n      'pageType': " +
                closure_5 +
                ",\n      " +
                str6 +
                "\n      " +
                combined +
                "\n      " +
                str7 +
                "\n    },\n    events: {\n      'onReady': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onReady', value: window.player.getPlayerState()})\n        );\n      },\n      'onError': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onError', value: e.data})\n        );\n      },\n      'onStateChange': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onStateChange', value: e.data})\n        );\n      }\n    }\n  });\n}\n";
              str4 =
                '\n<html>\n  <head>\n    <meta name="viewport" content="initial-scale=1">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        background-color: #000;\n      }\n    </style>\n    <script>';
              class V {
                constructor() {
                  tmp = closure_6;
                  tmp2 = null != closure_6.current;
                  if (tmp2) {
                    tmp3 = closure_1;
                    tmp4 = closure_0;
                    tmp5 = closure_2;
                    tmp2 = closure_1 !== closure_0(closure_2[6]).PlayerState.UNREADY;
                  }
                  if (tmp2) {
                    tmp6 = visible;
                    tmp7 = visible;
                    if (visible) {
                      tmp8 = closure_4;
                      tmp9 = closure_0;
                      tmp10 = closure_2;
                      tmp7 = closure_4 === closure_0(closure_2[6]).PlayerState.UNREADY;
                    }
                    if (tmp7) {
                      tmp11 = closure_1;
                      tmp12 = closure_0;
                      tmp13 = closure_2;
                      tmp7 = closure_1 === closure_0(closure_2[6]).PlayerState.READY;
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
              tmp29 = forResult;
              tmp30 = str(1382).isAndroid();
              const isAndroidResult = str(1382).isAndroid();
            }
          }
        }
        class V {
          constructor() {
            tmp = closure_6;
            tmp2 = null != closure_6.current;
            if (tmp2) {
              tmp3 = closure_1;
              tmp4 = closure_0;
              tmp5 = closure_2;
              tmp2 = closure_1 !== closure_0(closure_2[6]).PlayerState.UNREADY;
            }
            if (tmp2) {
              tmp6 = visible;
              tmp7 = visible;
              if (visible) {
                tmp8 = closure_4;
                tmp9 = closure_0;
                tmp10 = closure_2;
                tmp7 = closure_4 === closure_0(closure_2[6]).PlayerState.UNREADY;
              }
              if (tmp7) {
                tmp11 = closure_1;
                tmp12 = closure_0;
                tmp13 = closure_2;
                tmp7 = closure_1 === closure_0(closure_2[6]).PlayerState.READY;
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
        const items1 = [ref, visible, tmp8, tmp7, playerState];
        cResult[3] = playerState;
        cResult[4] = tmp7;
        cResult[5] = tmp8;
        cResult[6] = visible;
        cResult[7] = V;
        cResult[8] = items1;
        tmp15 = items1;
        tmp14 = V;
        const tmp5 = _slicedToArray(noop.useState(undefined), 2);
      }
    : function MediaModalYoutube(visible) {
        visible = visible.visible;
        const source = visible.source;
        playerState = undefined;
        dependencyMap = undefined;
        _slicedToArray = undefined;
        noop = undefined;
        ({ style, onError, onLoad, onLoadStart, onToggleOverlay } = visible);
        [playerState, dependencyMap] = noop.useState(visible(8423).PlayerState.UNREADY);
        const tmp5 = _slicedToArray(noop.useState(undefined), 2);
        _slicedToArray = tmp5[1];
        let tmp7 = playerState(5922)(playerState);
        noop = tmp7;
        const tmp8 = playerState(5922)(visible);
        closure_5 = tmp8;
        const ref = noop.useRef(null);
        const effect = noop.useEffect(() => {
          const MediaViewerAnalytics = visible(8388).MediaViewerAnalytics;
          const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({
            platform: "youtube",
            action: "attempted",
          });
        }, []);
        const items = [ref, visible, tmp8, tmp7, playerState];
        const callback = noop.useCallback((arg0) => {
          const parsed = JSON.parse(arg0);
          ({ type, value } = parsed);
          if ("onReady" === type) {
            if ("-1" === value) {
              let READY = MediaModalWebViewBase.PlayerState.ERRORED;
            } else {
              READY = MediaModalWebViewBase.PlayerState.READY;
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
            dependencyMap(MediaModalWebViewBase.PlayerState.ERRORED);
            closure_3(str6);
            const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
            const obj = { platform: "youtube", action: "errored", error: str6 };
            const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted(obj);
          } else if ("onStateChange" === type) {
            const obj2 = { "-1": null, 0: null, 1: null, 2: null, 3: null, 5: null };
            obj2[0] = MediaModalWebViewBase.PlayerState.UNSTARTED;
            obj2[0] = MediaModalWebViewBase.PlayerState.ENDED;
            obj2[1] = MediaModalWebViewBase.PlayerState.PLAYING;
            obj2[2] = MediaModalWebViewBase.PlayerState.PAUSED;
            obj2[3] = MediaModalWebViewBase.PlayerState.BUFFERING;
            obj2[5] = MediaModalWebViewBase.PlayerState.VIDEO_CUED;
            let tmp4 = null != tmp35;
            if (tmp4) {
              tmp4 = tmp35 in MediaModalWebViewBase.PlayerState;
            }
            if (tmp4) {
              dependencyMap(tmp35);
            }
          }
        }, []);
        const effect1 = noop.useEffect(() => {
          let tmp2 = null != ref.current;
          if (tmp2) {
            tmp2 = first !== MediaModalWebViewBase.PlayerState.UNREADY;
          }
          if (tmp2) {
            let tmp7 = visible;
            if (visible) {
              tmp7 = closure_4 === MediaModalWebViewBase.PlayerState.UNREADY;
            }
            if (tmp7) {
              tmp7 = first === MediaModalWebViewBase.PlayerState.READY;
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
        let youtubeVideoIdFromURI = visible(8392).getYoutubeVideoIdFromURI(source.uri);
        if (youtubeVideoIdFromURI == null) {
          youtubeVideoIdFromURI = tmp(8392).getYoutubeClipVideoIdFromURI(source.uri);
          const tmpResult = tmp(8392);
        }
        if (null == youtubeVideoIdFromURI) {
          return null;
        } else {
          if (playerState === tmp(8423).PlayerState.ERRORED) {
            if ("embed_not_allowed" === tmp5[0]) {
              let obj2 = { videoId: youtubeVideoIdFromURI.videoId };
              return ref(tmp6(13067), obj2);
            }
          }
          const isAndroidResult = tmp(1382).isAndroid();
          const obj3 = {
            ref,
            style,
            source: null,
            baseURL: null,
            playerState: null,
            onDataReceived: null,
            onToggleOverlay: null,
            javaScriptCanOpenWindowsAutomatically: true,
            domStorageEnabled: null,
            mixedContentMode: null,
            nestedScrollEnabled: null,
            onError: null,
            onLoad: null,
            onLoadStart: null,
            overScrollMode: null,
          };
          let str2 = "";
          let str3 = "";
          let tmp15 = ref;
          const tmpResult2 = tmp(1382);
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
          obj4.html =
            '\n<html>\n  <head>\n    <meta name="viewport" content="initial-scale=1">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        background-color: #000;\n      }\n    </style>\n    <script>' +
            "\nconst tag = document.createElement('script');\ntag.setAttribute('src', \"https://www.youtube.com/iframe_api\");\ndocument.head.appendChild(tag);\n\nfunction onYouTubeIframeAPIReady() {\n  window.player = new YT.Player('player', {\n    height:     '100%',\n    width:      '100%',\n    videoId:    '" +
            youtubeVideoIdFromURI.videoId +
            "',\n    playerVars: {\n      'playsinline': 1,\n      'fs': 0,\n      'pageType': " +
            closure_5 +
            ",\n      " +
            str2 +
            "\n      " +
            combined +
            "\n      " +
            str3 +
            "\n    },\n    events: {\n      'onReady': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onReady', value: window.player.getPlayerState()})\n        );\n      },\n      'onError': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onError', value: e.data})\n        );\n      },\n      'onStateChange': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onStateChange', value: e.data})\n        );\n      }\n    }\n  });\n}\n" +
            '</script>\n  </head>\n  <body>\n    <div id="player"></div>\n  </body>\n</html>\n';
          obj4.baseUrl = baseURL;
          obj3.source = obj4;
          obj3.baseURL = baseURL;
          obj3.playerState = playerState;
          obj3.onDataReceived = callback;
          obj3.onToggleOverlay = onToggleOverlay;
          obj3.domStorageEnabled = isAndroidResult || undefined;
          let str19;
          if (isAndroidResult) {
            str19 = "compatibility";
          }
          obj3.mixedContentMode = str19;
          obj3.nestedScrollEnabled = isAndroidResult || undefined;
          obj3.onError = onError;
          obj3.onLoad = onLoad;
          obj3.onLoadStart = onLoadStart;
          let str20;
          if (isAndroidResult) {
            str20 = "never";
          }
          obj3.overScrollMode = str20;
          return tmp15(tmp6(8423), obj3, youtubeVideoIdFromURI.videoId);
        }
        let obj = visible(8392);
      },
);
