// === Module 8306: MediaModalWebVideoFile ===

// Module 8306 (MediaModalWebVideoFile)
import MediaViewerAnalyticsManager from "MediaViewerAnalyticsManager" /* 8266 */;
import MediaModalWebView from "MediaModalWebView" /* 8297 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let jsx = fn(21).jsx;
let closure_6 = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalWebVideoFile.tsx");

export default noop.memo((style) => {
  const visible = style.visible;
  ({ source, controls } = style);
  const merged = Object.assign(style, Object.assign({ visible: 0, style: 0, source: 0, controls: 0 }));
  let playerState;
  _slicedToArray = undefined;
  noop = undefined;
  let mediaPlayerMutedStore;
  let obj = noop;
  const tmp4 = _slicedToArray(noop.useState(visible(playerState[3]).PlayerState.UNREADY), 2);
  playerState = tmp4[0];
  _slicedToArray = tmp4[1];
  const tmp7 = controls(playerState[4])(playerState);
  noop = tmp7;
  const tmp8 = controls(playerState[4])(visible);
  jsx = tmp8;
  let ref;
  if (controls != null) {
    let props = controls.props;
    if (props != null) {
      ref = props.ref;
    }
  }
  const effect = obj.useEffect(() => {
    const MediaViewerAnalytics = visible(first[5]).MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "file", action: "attempted" });
  }, []);
  props = undefined;
  if (controls != null) {
    props = controls.props;
  }
  const items = [props];
  const callback = obj.useCallback((arg0) => {
    const iter = ((arg0) => {
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
        closure_3(MediaModalWebView.PlayerState.READY);
      break;
      case "canplay":
        if (controls != null) {
          const props5 = controls.props;
          if (props5 != null) {
            props5.onPlayerStateChange(MediaModalWebView.PlayerState.VIDEO_CUED);
          }
        }
        closure_3(MediaModalWebView.PlayerState.VIDEO_CUED);
      break;
      case "error":
        closure_3(MediaModalWebView.PlayerState.ERRORED);
        const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
        const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "file", action: "errored", error: "unknown" });
      break;
      case "ended":
        if (controls != null) {
          const props4 = controls.props;
          if (props4 != null) {
            props4.onPlayerStateChange(MediaModalWebView.PlayerState.ENDED);
          }
        }
        closure_3(MediaModalWebView.PlayerState.ENDED);
      break;
      case "play":
        if (controls != null) {
          const props3 = controls.props;
          if (props3 != null) {
            props3.onPlayerStateChange(MediaModalWebView.PlayerState.PLAYING);
          }
        }
        closure_3(MediaModalWebView.PlayerState.PLAYING);
      break;
      case "pause":
        if (controls != null) {
          const props2 = controls.props;
          if (props2 != null) {
            props2.onPlayerStateChange(MediaModalWebView.PlayerState.PAUSED);
          }
        }
        closure_3(MediaModalWebView.PlayerState.PAUSED);
      break;
      case "stalled":
        if (controls != null) {
          const props = controls.props;
          if (props != null) {
            props.onPlayerStateChange(MediaModalWebView.PlayerState.BUFFERING);
          }
        }
        closure_3(MediaModalWebView.PlayerState.BUFFERING);
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
  mediaPlayerMutedStore = visible(playerState[6]).useMediaPlayerMutedStore((isMuted) => isMuted.isMuted);
  const items1 = [ref, visible, tmp8, tmp7, playerState, mediaPlayerMutedStore];
  const effect1 = obj.useEffect(() => {
    let current;
    if (ref != null) {
      current = tmp.current;
    }
    let tmp3 = null != current;
    if (tmp3) {
      tmp3 = first !== MediaModalWebView.PlayerState.UNREADY;
    }
    if (tmp3) {
      current = tmp.current;
      const _JSON = JSON;
      const _HermesInternal = HermesInternal;
      current.injectJavaScript("window.player.muted = " + JSON.stringify(mediaPlayerMutedStore) + "; true;");
      let tmp11 = visible;
      if (visible) {
        tmp11 = closure_4 === MediaModalWebView.PlayerState.UNREADY;
      }
      if (tmp11) {
        tmp11 = first === MediaModalWebView.PlayerState.READY;
      }
      if (tmp11) {
        const current2 = tmp.current;
        current2.injectJavaScript("window.player.play();  true;");
      }
      let tmp19 = tmp10;
      if (visible) {
        tmp19 = !closure_5;
      }
      if (tmp19) {
        const current3 = tmp.current;
        current3.injectJavaScript("window.player.play();  true;");
      }
      let tmp22 = !tmp10;
      if (!visible) {
        tmp22 = closure_5;
      }
      if (tmp22) {
        const current4 = tmp.current;
        current4.injectJavaScript("window.player.pause(); true;");
      }
    }
  }, items1);
  const combined = "\n<html>\n  <head>\n    <meta name=\"viewport\" content=\"initial-scale=1\">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        inset: 0;\n        width: 100%;\n        height: 100%;\n        background-color: #000;\n        object-fit: contain;\n      }\n    </style>\n    <script>" + "\nfunction onReady() {\n  const player = window.player = document.createElement('video');\n  player.controls = false;\n  player.autoplay = false;\n  player.playsInline = true;\n  player.disablePictureInPicture = true;\n  const addEvent = (name, func) => {\n    player.addEventListener(name, (e) => {\n      window.ReactNativeWebView.postMessage(\n        JSON.stringify({type: name, value: func ? func() : undefined})\n      );\n    });\n  };\n  addEvent('error', () => player.error);\n  addEvent('canplay');\n  addEvent('ended');\n  addEvent('pause');\n  addEvent('play');\n  addEvent('stalled');\n  addEvent('durationchange', () => player.duration);\n  addEvent('timeupdate', () => player.currentTime);\n  addEvent('progress', () => {\n    const ranges = player.buffered;\n    let total = 0;\n    for (let i = 0; i < ranges.length; i++) {\n      total += (ranges.end(i) - ranges.start(i));\n    }\n    return total;\n  });\n  player.src = " + JSON.stringify(source.uri) + ";\n  document.body.appendChild(player);\n  player.load();\n  window.ReactNativeWebView.postMessage(JSON.stringify({type: 'loaded'}));\n}\nwindow.addEventListener('load', onReady);\n" + "</script>\n  </head>\n  <body>\n  </body>\n</html>\n";
  obj = { ref, style: style.style, source: null, baseURL: ref, playerState, onDataReceived: callback, javaScriptEnabled: true, javaScriptCanOpenWindowsAutomatically: true };
  obj = { html: combined, baseUrl: ref };
  obj.source = obj;
  const tmp2Result = visible(playerState[6]);
  const merged1 = Object.assign(merged);
  return jsx(controls(playerState[3]), { html: combined, baseUrl: ref }, source.uri);
});
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
          tmp(arg0 === MediaModalWebView.PlayerState.PAUSED || arg0 === MediaModalWebView.PlayerState.ENDED);
          const tmp5 = arg0 === MediaModalWebView.PlayerState.PAUSED || arg0 === MediaModalWebView.PlayerState.ENDED;
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