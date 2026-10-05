// discord_app/modules/media_viewer/native/components/MediaModalWebVideoFile.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import MediaViewerAnalyticsManager from "../../MediaViewerAnalyticsManager.tsx";
import MediaModalWebView from "MediaModalWebView.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import _objectWithoutProperties_mod from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c6, importDefault, visible;

let closure_3 = ["visible", "style", "source", "controls"];
let _slicedToArray = _slicedToArray_mod;
let _objectWithoutProperties = _objectWithoutProperties_mod;
let react = react_mod;
const jsx = Fragment.jsx;
let closure_8 = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (visible) => {
        let closure_0;
        let closure_1;
        let closure_4;
        let closure_5;
        let controls;
        let first;
        let ref;
        let source;
        let style;
        let tmp17;
        let tmp18;
        const tmp = _require;
        const tmp2 = first;
        const obj = require("react");
        const cResult = obj.c(31);
        if (cResult[0] !== visible) {
          visible = visible.visible;
          importDefault = visible;
          ({ style, source, controls } = visible);
          _require = controls;
          let tmp11 = _objectWithoutProperties(visible, closure_3);
          cResult[0] = visible;
          cResult[1] = controls;
          cResult[2] = tmp11;
          cResult[3] = source;
          cResult[4] = style;
          cResult[5] = visible;
        } else {
          _require = cResult[1];
          importDefault = cResult[5];
        }
        [first, closure_3] = ref.useState(tmp(tmp2[4]).PlayerState.UNREADY);
        const tmp14 = require("usePrevious")(first);
        _slicedToArray = tmp14;
        const tmp15 = require("usePrevious")(tmp8);
        _objectWithoutProperties = tmp15;
        const obj2 = ref;
        ref = undefined;
        if (controls != null) {
          let props = controls.props;
          if (props != null) {
            ref = props.ref;
          }
        }
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function f() {
            const MediaViewerAnalytics = closure_0(first[8]).MediaViewerAnalytics;
            const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({
              platform: "file",
              action: "attempted",
            });
          };
          const items = [];
          cResult[6] = fn;
          cResult[7] = items;
          tmp18 = items;
          tmp17 = fn;
        } else {
          tmp17 = cResult[6];
          tmp18 = cResult[7];
        }
        const effect = obj2.useEffect(tmp17, tmp18);
        let props1;
        const tmp20 = cResult[8];
        if (controls != null) {
          props1 = controls.props;
        }
        if (tmp20 !== props1) {
          let props2;
          if (controls != null) {
            props2 = controls.props;
          }
          const fn2 = function w(arg0) {
            const iter = ((arg0) => {
              try {
                const _JSON = JSON;
                return JSON.parse(arg0);
              } catch (err) {
                return {};
              }
            })(arg0);
            const value = iter.value;
            switch (iter.type) {
              case "loaded": {
                closure_3(MediaModalWebView.PlayerState.READY);
                break;
              }
              case "canplay": {
                if (closure_0 != null) {
                  const props5 = closure_0.props;
                  if (props5 != null) {
                    props5.onPlayerStateChange(MediaModalWebView.PlayerState.VIDEO_CUED);
                  }
                }
                closure_3(MediaModalWebView.PlayerState.VIDEO_CUED);
                break;
              }
              case "error": {
                closure_3(MediaModalWebView.PlayerState.ERRORED);
                const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
                const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({
                  platform: "file",
                  action: "errored",
                  error: "unknown",
                });
                break;
              }
              case "ended": {
                if (closure_0 != null) {
                  const props4 = closure_0.props;
                  if (props4 != null) {
                    props4.onPlayerStateChange(MediaModalWebView.PlayerState.ENDED);
                  }
                }
                closure_3(MediaModalWebView.PlayerState.ENDED);
                break;
              }
              case "play": {
                if (closure_0 != null) {
                  const props3 = closure_0.props;
                  if (props3 != null) {
                    props3.onPlayerStateChange(MediaModalWebView.PlayerState.PLAYING);
                  }
                }
                closure_3(MediaModalWebView.PlayerState.PLAYING);
                break;
              }
              case "pause": {
                if (closure_0 != null) {
                  const props2 = closure_0.props;
                  if (props2 != null) {
                    props2.onPlayerStateChange(MediaModalWebView.PlayerState.PAUSED);
                  }
                }
                closure_3(MediaModalWebView.PlayerState.PAUSED);
                break;
              }
              case "stalled": {
                if (closure_0 != null) {
                  const props = closure_0.props;
                  if (props != null) {
                    props.onPlayerStateChange(MediaModalWebView.PlayerState.BUFFERING);
                  }
                }
                closure_3(MediaModalWebView.PlayerState.BUFFERING);
                break;
              }
              case "durationchange": {
                if (null != value) {
                  if (closure_0 != null) {
                    const props8 = closure_0.props;
                    if (props8 != null) {
                      const onDuration = props8.onDuration;
                      if (onDuration != null) {
                        onDuration(value);
                      }
                    }
                  }
                }
                break;
              }
              case "progress": {
                if (null != value) {
                  if (closure_0 != null) {
                    const props7 = closure_0.props;
                    if (props7 != null) {
                      const onDownloadProgress = props7.onDownloadProgress;
                      if (onDownloadProgress != null) {
                        onDownloadProgress(value);
                      }
                    }
                  }
                }
                break;
              }
              case "timeupdate": {
                if (null != value) {
                  if (closure_0 != null) {
                    const props6 = closure_0.props;
                    if (props6 != null) {
                      const onCurrentSecond = props6.onCurrentSecond;
                      if (onCurrentSecond != null) {
                        onCurrentSecond(value);
                      }
                    }
                  }
                }
                break;
              }
            }
          };
          cResult[8] = props2;
          cResult[9] = fn2;
          let tmp22 = fn2;
        } else {
          tmp22 = cResult[9];
        }
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class U {
            constructor(isMuted) {
              return isMuted.isMuted;
            }
          }
          cResult[10] = U;
        } else {
          class U {
            constructor(isMuted) {
              return isMuted.isMuted;
            }
          }
        }
        const tmpResult = tmp(tmp2[9]);
        const mediaPlayerMutedStore = tmpResult.useMediaPlayerMutedStore(U);
        if (cResult[11] === mediaPlayerMutedStore) {
          class U {
            constructor(isMuted) {
              return isMuted.isMuted;
            }
          }
        }
        class J {
          constructor() {
            let current1;
            if (ref != null) {
              current1 = ref.current;
            }
            const tmp3 = null != current1 && first !== MediaModalWebView.PlayerState.UNREADY;
            if (tmp3) {
              const current = ref.current;
              const _JSON = JSON;
              const _HermesInternal = HermesInternal;
              current.injectJavaScript("window.player.muted = " + JSON.stringify(mediaPlayerMutedStore) + "; true;");
              const tmp11 =
                closure_1 &&
                closure_4 === MediaModalWebView.PlayerState.UNREADY &&
                first === MediaModalWebView.PlayerState.READY;
              if (tmp11) {
                const current2 = ref.current;
                current2.injectJavaScript("window.player.play();  true;");
              }
              const tmp19 = closure_1 && !closure_5;
              if (tmp19) {
                const current3 = ref.current;
                current3.injectJavaScript("window.player.play();  true;");
              }
              const tmp22 = !closure_1 && closure_5;
              if (tmp22) {
                const current4 = ref.current;
                current4.injectJavaScript("window.player.pause(); true;");
              }
            }
          }
        }
        const items1 = [ref, tmp8, tmp15, tmp14, first, mediaPlayerMutedStore];
        cResult[11] = mediaPlayerMutedStore;
        cResult[12] = first;
        cResult[13] = tmp14;
        cResult[14] = tmp15;
        cResult[15] = tmp8;
        cResult[16] = ref;
        cResult[17] = J;
        cResult[18] = items1;
      }
    : (visible) => {
        let closure_4;
        let controls;
        let obj3;
        let playerState;
        let source;
        visible = visible.visible;
        ({ source, controls } = visible);
        const style = visible.style;
        const merged = Object.assign(visible, Object.assign({ visible: 0, style: 0, source: 0, controls: 0 }));
        playerState = undefined;
        closure_3 = undefined;
        let ref;
        let mediaPlayerMutedStore;
        let tmp3 = playerState;
        const tmp2 = visible;
        [playerState, closure_3] = ref.useState(visible(playerState[4]).PlayerState.UNREADY);
        const tmp7 = controls(playerState[7])(playerState);
        _slicedToArray = tmp7;
        const tmp8 = controls(playerState[7])(visible);
        let closure_5 = tmp8;
        ref = undefined;
        const tmp6 = controls;
        if (controls != null) {
          let props = controls.props;
          if (props != null) {
            ref = props.ref;
          }
        }
        const effect = obj.useEffect(() => {
          const MediaViewerAnalytics = visible(first[8]).MediaViewerAnalytics;
          const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({
            platform: "file",
            action: "attempted",
          });
        }, []);
        let props1;
        const useCallback = ref.useCallback;
        if (controls != null) {
          props1 = controls.props;
        }
        const items = [props1];
        const callback = useCallback((arg0) => {
          const iter = ((arg0) => {
            try {
              const _JSON = JSON;
              return JSON.parse(arg0);
            } catch (err) {
              return {};
            }
          })(arg0);
          const value = iter.value;
          switch (iter.type) {
            case "loaded": {
              closure_3(MediaModalWebView.PlayerState.READY);
              break;
            }
            case "canplay": {
              if (controls != null) {
                const props5 = controls.props;
                if (props5 != null) {
                  props5.onPlayerStateChange(MediaModalWebView.PlayerState.VIDEO_CUED);
                }
              }
              closure_3(MediaModalWebView.PlayerState.VIDEO_CUED);
              break;
            }
            case "error": {
              closure_3(MediaModalWebView.PlayerState.ERRORED);
              const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
              const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({
                platform: "file",
                action: "errored",
                error: "unknown",
              });
              break;
            }
            case "ended": {
              if (controls != null) {
                const props4 = controls.props;
                if (props4 != null) {
                  props4.onPlayerStateChange(MediaModalWebView.PlayerState.ENDED);
                }
              }
              closure_3(MediaModalWebView.PlayerState.ENDED);
              break;
            }
            case "play": {
              if (controls != null) {
                const props3 = controls.props;
                if (props3 != null) {
                  props3.onPlayerStateChange(MediaModalWebView.PlayerState.PLAYING);
                }
              }
              closure_3(MediaModalWebView.PlayerState.PLAYING);
              break;
            }
            case "pause": {
              if (controls != null) {
                const props2 = controls.props;
                if (props2 != null) {
                  props2.onPlayerStateChange(MediaModalWebView.PlayerState.PAUSED);
                }
              }
              closure_3(MediaModalWebView.PlayerState.PAUSED);
              break;
            }
            case "stalled": {
              if (controls != null) {
                const props = controls.props;
                if (props != null) {
                  props.onPlayerStateChange(MediaModalWebView.PlayerState.BUFFERING);
                }
              }
              closure_3(MediaModalWebView.PlayerState.BUFFERING);
              break;
            }
            case "durationchange": {
              if (null != value) {
                if (controls != null) {
                  const props8 = controls.props;
                  if (props8 != null) {
                    const onDuration = props8.onDuration;
                    if (onDuration != null) {
                      onDuration(value);
                    }
                  }
                }
              }
              break;
            }
            case "progress": {
              if (null != value) {
                if (controls != null) {
                  const props7 = controls.props;
                  if (props7 != null) {
                    const onDownloadProgress = props7.onDownloadProgress;
                    if (onDownloadProgress != null) {
                      onDownloadProgress(value);
                    }
                  }
                }
              }
              break;
            }
            case "timeupdate": {
              if (null != value) {
                if (controls != null) {
                  const props6 = controls.props;
                  if (props6 != null) {
                    const onCurrentSecond = props6.onCurrentSecond;
                    if (onCurrentSecond != null) {
                      onCurrentSecond(value);
                    }
                  }
                }
              }
              break;
            }
          }
        }, items);
        const tmp2Result = tmp2(tmp3[9]);
        mediaPlayerMutedStore = tmp2Result.useMediaPlayerMutedStore((isMuted) => isMuted.isMuted);
        const items1 = [ref, visible, tmp8, tmp7, playerState, mediaPlayerMutedStore];
        const effect1 = obj.useEffect(() => {
          let current1;
          if (ref != null) {
            current1 = ref.current;
          }
          const tmp3 = null != current1 && first !== MediaModalWebView.PlayerState.UNREADY;
          if (tmp3) {
            const current = ref.current;
            const _JSON = JSON;
            const _HermesInternal = HermesInternal;
            current.injectJavaScript("window.player.muted = " + JSON.stringify(mediaPlayerMutedStore) + "; true;");
            const tmp11 =
              visible &&
              closure_4 === MediaModalWebView.PlayerState.UNREADY &&
              first === MediaModalWebView.PlayerState.READY;
            if (tmp11) {
              const current2 = ref.current;
              current2.injectJavaScript("window.player.play();  true;");
            }
            const tmp19 = visible && !closure_5;
            if (tmp19) {
              const current3 = ref.current;
              current3.injectJavaScript("window.player.play();  true;");
            }
            const tmp22 = !visible && closure_5;
            if (tmp22) {
              const current4 = ref.current;
              current4.injectJavaScript("window.player.pause(); true;");
            }
          }
        }, items1);
        const combined =
          '\n<html>\n  <head>\n    <meta name="viewport" content="initial-scale=1">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        inset: 0;\n        width: 100%;\n        height: 100%;\n        background-color: #000;\n        object-fit: contain;\n      }\n    </style>\n    <script>' +
          "\nfunction onReady() {\n  const player = window.player = document.createElement('video');\n  player.controls = false;\n  player.autoplay = false;\n  player.playsInline = true;\n  player.disablePictureInPicture = true;\n  const addEvent = (name, func) => {\n    player.addEventListener(name, (e) => {\n      window.ReactNativeWebView.postMessage(\n        JSON.stringify({type: name, value: func ? func() : undefined})\n      );\n    });\n  };\n  addEvent('error', () => player.error);\n  addEvent('canplay');\n  addEvent('ended');\n  addEvent('pause');\n  addEvent('play');\n  addEvent('stalled');\n  addEvent('durationchange', () => player.duration);\n  addEvent('timeupdate', () => player.currentTime);\n  addEvent('progress', () => {\n    const ranges = player.buffered;\n    let total = 0;\n    for (let i = 0; i < ranges.length; i++) {\n      total += (ranges.end(i) - ranges.start(i));\n    }\n    return total;\n  });\n  player.src = " +
          JSON.stringify(source.uri) +
          ";\n  document.body.appendChild(player);\n  player.load();\n  window.ReactNativeWebView.postMessage(JSON.stringify({type: 'loaded'}));\n}\nwindow.addEventListener('load', onReady);\n" +
          "</script>\n  </head>\n  <body>\n  </body>\n</html>\n";
        const obj2 = {
          ref,
          style,
          source: obj3,
          baseURL: baseUrl,
          playerState,
          onDataReceived: callback,
          javaScriptEnabled: true,
          javaScriptCanOpenWindowsAutomatically: true,
        };
        obj3 = { html: combined, baseUrl };
        const tmp6Result = tmp6(tmp3[4]);
        const merged1 = Object.assign(merged);
        return mediaPlayerMutedStore(tmp6Result, obj2, source.uri);
      },
);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalWebVideoFile.tsx");

export default memoResult;
export const createWebFileVideoControls = function createWebFileVideoControls() {
  const ref = react.createRef();
  let c4 = 0;
  let c5 = 0;
  react = 0;
  return {
    seek(arg0) {
      const current = ref.current;
      if (current != null) {
        const _JSON = JSON;
        const _HermesInternal = HermesInternal;
        current.injectJavaScript("window.player.currentTime = " + JSON.stringify(arg0) + "; true;");
      }
    },
    pause(arg0) {
      const current = ref.current;
      if (current != null) {
        let str = "play";
        const injectJavaScript = current.injectJavaScript;
        if (arg0) {
          str = "pause";
        }
        const _HermesInternal = HermesInternal;
        injectJavaScript("window.player." + str + "(); true;");
      }
    },
    useSubscribe(arg0, arg1, arg2) {
      let closure_1_0 = arg0;
      let closure_1_1 = arg1;
      let closure_1_2 = arg2;
      const layoutEffect = react.useLayoutEffect(() => {
        if (closure_1_0 != null) {
          tmp(closure_1_4, closure_1_5);
        }
      }, []);
    },
    props: {
      ref,
      onPlayerStateChange(arg0) {
        if (importDefault != null) {
          const tmp5 = arg0 === MediaModalWebView.PlayerState.PAUSED || arg0 === MediaModalWebView.PlayerState.ENDED;
          tmp(tmp5);
        }
      },
      onCurrentSecond(arg0) {
        c4 = arg0;
        if (_require != null) {
          tmp(c4, c5);
        }
      },
      onDuration(arg0) {
        c5 = arg0;
        if (_require != null) {
          tmp(c4, c5);
        }
        if (c5 > 0) {
          if (dependencyMap != null) {
            tmp8(tmp7);
          }
        }
      },
      onDownloadProgress(arg0) {
        c6 = arg0;
        if (c5 > 0) {
          if (dependencyMap != null) {
            tmp4(tmp3);
          }
        }
      },
    },
  };
};
