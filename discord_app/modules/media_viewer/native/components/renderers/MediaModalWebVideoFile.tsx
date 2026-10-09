// === Module 8408: MediaModalWebVideoFile ===

// Module 8408 (MediaModalWebVideoFile)
import MediaViewerAnalyticsManager from "MediaViewerAnalyticsManager" /* 8372 */;
import MediaModalWebViewBase from "MediaModalWebViewBase" /* 8407 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let jsx = fn(21).jsx;
let closure_6 = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalWebVideoFile.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MediaModalWebVideoFile(visible) {
  const cResult = visible(first[5]).c(28);
  visible = visible.visible;
  ({ style, source, controls } = visible);
  ({ onError, onLoad, onLoadStart, onToggleOverlay } = visible);
  [first, _slicedToArray] = noop.useState(visible(first[3]).PlayerState.UNREADY);
  const tmp6 = controls(first[6])(first);
  noop = tmp6;
  const tmp7 = controls(first[6])(visible);
  closure_5 = tmp7;
  let ref;
  if (controls != null) {
    let props = controls.props;
    if (props != null) {
      ref = props.ref;
    }
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      const MediaViewerAnalytics = visible(first[7]).MediaViewerAnalytics;
      const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "file", action: "attempted" });
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp10 = items;
    tmp9 = fn;
  } else {
    [tmp9, tmp10] = cResult;
  }
  const effect = noop.useEffect(tmp9, tmp10);
  let props1;
  if (controls != null) {
    props1 = controls.props;
  }
  if (cResult[2] !== props1) {
    let props2;
    if (controls != null) {
      props2 = controls.props;
    }
    const fn2 = function u(arg0) {
      const iter = (function safeParse(arg0) {
        try {
          const _JSON = JSON;
          return JSON.parse(arg0);
        } catch (err) {
          return {};
        }
      })(arg0);
      value = iter.value;
      switch (iter.type) {
        case "loaded":
          closure_3(MediaModalWebViewBase.PlayerState.READY);
        break;
        case "canplay":
          if (controls != null) {
            const props5 = controls.props;
            if (props5 != null) {
              props5.onPlayerStateChange(MediaModalWebViewBase.PlayerState.VIDEO_CUED);
            }
          }
          closure_3(MediaModalWebViewBase.PlayerState.VIDEO_CUED);
        break;
        case "error":
          closure_3(MediaModalWebViewBase.PlayerState.ERRORED);
          const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
          const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "file", action: "errored", error: "unknown" });
        break;
        case "ended":
          if (controls != null) {
            const props4 = controls.props;
            if (props4 != null) {
              props4.onPlayerStateChange(MediaModalWebViewBase.PlayerState.ENDED);
            }
          }
          closure_3(MediaModalWebViewBase.PlayerState.ENDED);
        break;
        case "play":
          if (controls != null) {
            const props3 = controls.props;
            if (props3 != null) {
              props3.onPlayerStateChange(MediaModalWebViewBase.PlayerState.PLAYING);
            }
          }
          closure_3(MediaModalWebViewBase.PlayerState.PLAYING);
        break;
        case "pause":
          if (controls != null) {
            const props2 = controls.props;
            if (props2 != null) {
              props2.onPlayerStateChange(MediaModalWebViewBase.PlayerState.PAUSED);
            }
          }
          closure_3(MediaModalWebViewBase.PlayerState.PAUSED);
        break;
        case "stalled":
          if (controls != null) {
            const props = controls.props;
            if (props != null) {
              props.onPlayerStateChange(MediaModalWebViewBase.PlayerState.BUFFERING);
            }
          }
          closure_3(MediaModalWebViewBase.PlayerState.BUFFERING);
        break;
        case "durationchange":
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
        case "progress":
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
        case "timeupdate":
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
    };
    cResult[2] = props2;
    cResult[3] = fn2;
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor(arg0) {
        return visible.isMuted;
      }
    }
    cResult[4] = U;
  } else {
    class U {
      constructor(arg0) {
        return visible.isMuted;
      }
    }
  }
  const obj = visible(first[5]);
  const mediaPlayerMutedStore = visible(first[8]).useMediaPlayerMutedStore(U);
  if (cResult[5] === mediaPlayerMutedStore) {
    class U {
      constructor(arg0) {
        return visible.isMuted;
      }
    }
  }
  class O {
    constructor() {
      tmp = ref;
      current1 = undefined;
      if (ref != null) {
        current1 = tmp.current;
      }
      tmp3 = null != current1;
      if (tmp3) {
        tmp4 = closure_2;
        tmp5 = closure_0;
        tmp6 = closure_2;
        tmp3 = closure_2 !== closure_0(closure_2[3]).PlayerState.UNREADY;
      }
      if (tmp3) {
        current = tmp.current;
        tmp7 = globalThis;
        _JSON = JSON;
        tmp8 = closure_7;
        _HermesInternal = HermesInternal;
        str = "; true;";
        str2 = "window.player.muted = ";
        injectJavaScriptResult = current.injectJavaScript("window.player.muted = " + JSON.stringify(closure_7) + "; true;");
        tmp10 = visible;
        tmp11 = visible;
        if (visible) {
          tmp12 = closure_4;
          tmp13 = closure_0;
          tmp14 = closure_2;
          tmp11 = closure_4 === closure_0(closure_2[3]).PlayerState.UNREADY;
        }
        if (tmp11) {
          tmp15 = closure_2;
          tmp16 = closure_0;
          tmp17 = closure_2;
          tmp11 = closure_2 === closure_0(closure_2[3]).PlayerState.READY;
        }
        if (tmp11) {
          current2 = tmp.current;
          str3 = "window.player.play();  true;";
          injectJavaScriptResult1 = current2.injectJavaScript("window.player.play();  true;");
        }
        tmp19 = tmp10;
        if (tmp10) {
          tmp20 = closure_5;
          tmp19 = !closure_5;
        }
        if (tmp19) {
          current3 = tmp.current;
          str4 = "window.player.play();  true;";
          injectJavaScriptResult2 = current3.injectJavaScript("window.player.play();  true;");
        }
        tmp22 = !tmp10;
        if (!tmp10) {
          tmp22 = closure_5;
        }
        if (tmp22) {
          current4 = tmp.current;
          str5 = "window.player.pause(); true;";
          injectJavaScriptResult3 = current4.injectJavaScript("window.player.pause(); true;");
        }
      }
      return;
    }
  }
  const items1 = [ref, visible, tmp7, tmp6, first, mediaPlayerMutedStore];
  cResult[5] = mediaPlayerMutedStore;
  cResult[6] = first;
  cResult[7] = tmp6;
  cResult[8] = tmp7;
  cResult[9] = visible;
  cResult[10] = ref;
  cResult[11] = O;
  cResult[12] = items1;
  const tmpResult = visible(first[8]);
}) : (function MediaModalWebVideoFile(visible) {
  visible = visible.visible;
  ({ source, controls } = visible);
  playerState = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  let mediaPlayerMutedStore;
  ({ style, onError, onLoad, onLoadStart, onToggleOverlay } = visible);
  [playerState, _slicedToArray] = noop.useState(visible(playerState[3]).PlayerState.UNREADY);
  const tmp6 = controls(playerState[6])(playerState);
  noop = tmp6;
  const tmp7 = controls(playerState[6])(visible);
  jsx = tmp7;
  let ref;
  if (controls != null) {
    let props = controls.props;
    if (props != null) {
      ref = props.ref;
    }
  }
  const effect = obj.useEffect(() => {
    const MediaViewerAnalytics = visible(first[7]).MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "file", action: "attempted" });
  }, []);
  let props1;
  if (controls != null) {
    props1 = controls.props;
  }
  const items = [props1];
  const callback = obj.useCallback((arg0) => {
    const iter = (function safeParse(arg0) {
      try {
        const _JSON = JSON;
        return JSON.parse(arg0);
      } catch (err) {
        return {};
      }
    })(arg0);
    value = iter.value;
    switch (iter.type) {
      case "loaded":
        closure_3(MediaModalWebViewBase.PlayerState.READY);
      break;
      case "canplay":
        if (controls != null) {
          const props5 = controls.props;
          if (props5 != null) {
            props5.onPlayerStateChange(MediaModalWebViewBase.PlayerState.VIDEO_CUED);
          }
        }
        closure_3(MediaModalWebViewBase.PlayerState.VIDEO_CUED);
      break;
      case "error":
        closure_3(MediaModalWebViewBase.PlayerState.ERRORED);
        const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
        const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "file", action: "errored", error: "unknown" });
      break;
      case "ended":
        if (controls != null) {
          const props4 = controls.props;
          if (props4 != null) {
            props4.onPlayerStateChange(MediaModalWebViewBase.PlayerState.ENDED);
          }
        }
        closure_3(MediaModalWebViewBase.PlayerState.ENDED);
      break;
      case "play":
        if (controls != null) {
          const props3 = controls.props;
          if (props3 != null) {
            props3.onPlayerStateChange(MediaModalWebViewBase.PlayerState.PLAYING);
          }
        }
        closure_3(MediaModalWebViewBase.PlayerState.PLAYING);
      break;
      case "pause":
        if (controls != null) {
          const props2 = controls.props;
          if (props2 != null) {
            props2.onPlayerStateChange(MediaModalWebViewBase.PlayerState.PAUSED);
          }
        }
        closure_3(MediaModalWebViewBase.PlayerState.PAUSED);
      break;
      case "stalled":
        if (controls != null) {
          const props = controls.props;
          if (props != null) {
            props.onPlayerStateChange(MediaModalWebViewBase.PlayerState.BUFFERING);
          }
        }
        closure_3(MediaModalWebViewBase.PlayerState.BUFFERING);
      break;
      case "durationchange":
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
      case "progress":
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
      case "timeupdate":
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
  }, items);
  mediaPlayerMutedStore = visible(playerState[8]).useMediaPlayerMutedStore((isMuted) => isMuted.isMuted);
  const items1 = [ref, visible, tmp7, tmp6, playerState, mediaPlayerMutedStore];
  const effect1 = obj.useEffect(() => {
    let current1;
    if (ref != null) {
      current1 = ref.current;
    }
    let tmp3 = null != current1;
    if (tmp3) {
      tmp3 = first !== MediaModalWebViewBase.PlayerState.UNREADY;
    }
    if (tmp3) {
      const current = ref.current;
      const _JSON = JSON;
      const _HermesInternal = HermesInternal;
      current.injectJavaScript("window.player.muted = " + JSON.stringify(mediaPlayerMutedStore) + "; true;");
      let tmp11 = visible;
      if (visible) {
        tmp11 = closure_4 === MediaModalWebViewBase.PlayerState.UNREADY;
      }
      if (tmp11) {
        tmp11 = first === MediaModalWebViewBase.PlayerState.READY;
      }
      if (tmp11) {
        const current2 = ref.current;
        current2.injectJavaScript("window.player.play();  true;");
      }
      let tmp19 = visible;
      if (visible) {
        tmp19 = !closure_5;
      }
      if (tmp19) {
        const current3 = ref.current;
        current3.injectJavaScript("window.player.play();  true;");
      }
      let tmp22 = !visible;
      if (!visible) {
        tmp22 = closure_5;
      }
      if (tmp22) {
        const current4 = ref.current;
        current4.injectJavaScript("window.player.pause(); true;");
      }
    }
  }, items1);
  const combined = "\n<html>\n  <head>\n    <meta name=\"viewport\" content=\"initial-scale=1\">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        inset: 0;\n        width: 100%;\n        height: 100%;\n        background-color: #000;\n        object-fit: contain;\n      }\n    </style>\n    <script>" + "\nfunction onReady() {\n  const player = window.player = document.createElement('video');\n  player.controls = false;\n  player.autoplay = false;\n  player.playsInline = true;\n  player.disablePictureInPicture = true;\n  const addEvent = (name, func) => {\n    player.addEventListener(name, (e) => {\n      window.ReactNativeWebView.postMessage(\n        JSON.stringify({type: name, value: func ? func() : undefined})\n      );\n    });\n  };\n  addEvent('error', () => player.error);\n  addEvent('canplay');\n  addEvent('ended');\n  addEvent('pause');\n  addEvent('play');\n  addEvent('stalled');\n  addEvent('durationchange', () => player.duration);\n  addEvent('timeupdate', () => player.currentTime);\n  addEvent('progress', () => {\n    const ranges = player.buffered;\n    let total = 0;\n    for (let i = 0; i < ranges.length; i++) {\n      total += (ranges.end(i) - ranges.start(i));\n    }\n    return total;\n  });\n  player.src = " + JSON.stringify(source.uri) + ";\n  document.body.appendChild(player);\n  player.load();\n  window.ReactNativeWebView.postMessage(JSON.stringify({type: 'loaded'}));\n}\nwindow.addEventListener('load', onReady);\n" + "</script>\n  </head>\n  <body>\n  </body>\n</html>\n";
  const obj2 = { ref, style, source: { html: combined, baseUrl: ref }, baseURL: ref, playerState, onDataReceived: callback, onToggleOverlay, javaScriptCanOpenWindowsAutomatically: true, onError, onLoad, onLoadStart };
  return jsx(controls(playerState[3]), { ref, style, source: { html: combined, baseUrl: ref }, baseURL: ref, playerState, onDataReceived: callback, onToggleOverlay, javaScriptCanOpenWindowsAutomatically: true, onError, onLoad, onLoadStart }, source.uri);
}));
export const createWebFileVideoControls = function createWebFileVideoControls() {
  const ref = noop.createRef();
  noop = 0;
  closure_5 = 0;
  closure_6 = 0;
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
        if (arg0) {
          str = "pause";
        }
        const _HermesInternal = HermesInternal;
        current.injectJavaScript("window.player." + str + "(); true;");
      }
    },
    useSubscribe(arg0, arg1, arg2) {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_2 = arg2;
      const layoutEffect = noop.useLayoutEffect(() => {
        if (closure_1_0 != null) {
          tmp(closure_1_4, closure_1_5);
        }
      }, []);
    },
    props: {
      ref,
      onPlayerStateChange(arg0) {
        if (closure_1 != null) {
          tmp(arg0 === MediaModalWebViewBase.PlayerState.PAUSED || arg0 === MediaModalWebViewBase.PlayerState.ENDED);
          const tmp5 = arg0 === MediaModalWebViewBase.PlayerState.PAUSED || arg0 === MediaModalWebViewBase.PlayerState.ENDED;
        }
      },
      onCurrentSecond(arg0) {
        closure_4 = arg0;
        if (closure_0 != null) {
          tmp(closure_4, closure_5);
        }
      },
      onDuration(arg0) {
        closure_5 = arg0;
        if (closure_0 != null) {
          tmp(closure_4, closure_5);
        }
        if (closure_5 > 0) {
          if (closure_2 != null) {
            tmp8(tmp7);
          }
        }
      },
      onDownloadProgress(arg0) {
        closure_6 = arg0;
        if (closure_5 > 0) {
          if (closure_2 != null) {
            tmp4(tmp3);
          }
        }
      }
    }
  };
};