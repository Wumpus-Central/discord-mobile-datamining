// === Module 8870: MediaModalTiktok ===

// Module 8870 (MediaModalTiktok)
import MediaViewerAnalyticsManager from "MediaViewerAnalyticsManager" /* 8835 */;
import useVideoControls from "useVideoControls" /* 8836 */;
import MediaModalWebViewBase from "MediaModalWebViewBase" /* 8871 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let jsx = fn(21).jsx;
let closure_6 = { autoplay: 1, controls: 0, enable_music_info: 0, enable_timestamp: 0, utm_source: "discord.gg" };
let obj = { "-1": fn(8871).PlayerState.UNSTARTED, 0: null, 1: null, 2: null, 3: null };
obj[0] = fn(8871).PlayerState.ENDED;
obj[1] = fn(8871).PlayerState.PLAYING;
obj[2] = fn(8871).PlayerState.PAUSED;
obj[3] = fn(8871).PlayerState.BUFFERING;
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalTiktok.tsx");

export default noop.memo(function MediaModalTiktok(visible) {
  visible = visible.visible;
  const source = visible.source;
  const controls = visible.controls;
  let playerState;
  noop = undefined;
  let mediaPlayerMutedStore;
  ({ style, onError, onLoad, onLoadStart, onToggleOverlay } = visible);
  let tmp3 = playerState(noop.useState(visible(controls[3]).PlayerState.UNREADY), 2);
  playerState = tmp3[0];
  noop = tmp3[1];
  const tmp6 = source(controls[4])(playerState);
  jsx = tmp6;
  let tmp7 = source(controls[4])(visible);
  closure_6 = tmp7;
  let ref;
  if (controls != null) {
    let props = controls.props;
    if (props != null) {
      ref = props.ref;
    }
  }
  let props1;
  if (controls != null) {
    props1 = controls.props;
  }
  const items = [props1];
  const callback = obj.useCallback((arg0) => {
    const iter = JSON.parse(arg0);
    const type = iter.type;
    if ("onPlayerReady" === type) {
      closure_4(MediaModalWebViewBase.PlayerState.READY);
    } else if ("onStateChange" === type) {
      if (null != obj[iter.value]) {
        if (controls != null) {
          const props2 = controls.props;
          if (props2 != null) {
            props2.onPlayerStateChange(tmp12);
          }
        }
        closure_4(tmp12);
      }
    } else if ("onError" === type) {
      closure_4(MediaModalWebViewBase.PlayerState.ERRORED);
      const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
      value = iter.value;
      if ("1" === value) {
        let str5 = "MEDIA_ERR_ABORTED";
      } else if ("2" === value) {
        str5 = "MEDIA_ERR_NETWORK";
      } else if ("3" === value) {
        str5 = "MEDIA_ERR_DECODE";
      } else {
        str5 = "MEDIA_ERR_SRC_NOT_SUPPORTED";
        if ("4" !== value) {
          str5 = "UNKNOWN";
        }
      }
      obj = { platform: "tiktok", action: "errored", error: str5 };
      const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted(obj);
    } else if ("onCurrentTime" === type) {
      if (controls != null) {
        const props = controls.props;
        if (props != null) {
          const onCurrentSecond = props.onCurrentSecond;
          if (onCurrentSecond != null) {
            onCurrentSecond(iter.value.currentTime);
          }
        }
      }
      if (controls != null) {
        const props3 = controls.props;
        if (props3 != null) {
          const onDuration = props3.onDuration;
          if (onDuration != null) {
            onDuration(iter.value.duration);
          }
        }
      }
    } else if ("onMute" === type) {
      useVideoControls.setMuted(iter.value);
    }
  }, items);
  mediaPlayerMutedStore = visible(controls[7]).useMediaPlayerMutedStore((isMuted) => isMuted.isMuted);
  const items1 = [ref, visible, tmp7, tmp6, playerState, mediaPlayerMutedStore];
  const effect = obj.useEffect(() => {
    let current1;
    if (ref != null) {
      current1 = ref.current;
    }
    let tmp3 = null != current1;
    if (tmp3) {
      tmp3 = first !== MediaModalWebViewBase.PlayerState.UNREADY;
    }
    if (tmp3) {
      let tmp7 = visible;
      let tmp8 = visible;
      if (visible) {
        tmp8 = closure_5 === MediaModalWebViewBase.PlayerState.UNREADY;
      }
      if (tmp8) {
        tmp8 = first === MediaModalWebViewBase.PlayerState.READY;
      }
      if (tmp8) {
        const _JSON = JSON;
        const merged = Object.assign({ type: "play" });
        const current = ref.current;
        if (current != null) {
          const _HermesInternal = HermesInternal;
          current.injectJavaScript("\n    window.postMessage(" + tmp18 + ", '*')\n  ");
        }
        obj = { "x-tiktok-player": true };
      }
      let tmp20 = tmp7;
      if (tmp7) {
        tmp20 = !closure_6;
      }
      if (tmp20) {
        const _JSON2 = JSON;
        const merged1 = Object.assign({ type: "play" });
        const current2 = ref.current;
        if (current2 != null) {
          const _HermesInternal2 = HermesInternal;
          current2.injectJavaScript("\n    window.postMessage(" + tmp25 + ", '*')\n  ");
        }
        const obj2 = { "x-tiktok-player": true };
      }
      let tmp27 = !tmp7;
      if (!tmp7) {
        tmp27 = closure_6;
      }
      if (tmp27) {
        const _JSON3 = JSON;
        const merged2 = Object.assign({ type: "pause" });
        const current3 = ref.current;
        if (current3 != null) {
          const _HermesInternal3 = HermesInternal;
          current3.injectJavaScript("\n    window.postMessage(" + tmp31 + ", '*')\n  ");
        }
        const obj3 = { "x-tiktok-player": true };
      }
      if (!tmp7) {
        let tmp34 = !closure_6;
        if (!closure_6) {
          tmp34 = first !== MediaModalWebViewBase.PlayerState.PLAYING;
        }
        tmp7 = tmp34;
      }
      if (!tmp7) {
        const _JSON4 = JSON;
        const merged3 = Object.assign({ type: "pause" });
        const current4 = ref.current;
        if (current4 != null) {
          const _HermesInternal4 = HermesInternal;
          current4.injectJavaScript("\n    window.postMessage(" + tmp41 + ", '*')\n  ");
        }
        const obj4 = { "x-tiktok-player": true };
      }
      if (first === MediaModalWebViewBase.PlayerState.ENDED) {
        const _JSON7 = JSON;
        const merged4 = Object.assign({ type: "seekTo", value: 0 });
        const current7 = ref.current;
        if (current7 != null) {
          const _HermesInternal5 = HermesInternal;
          current7.injectJavaScript("\n    window.postMessage(" + tmp61 + ", '*')\n  ");
        }
        const _JSON5 = JSON;
        const merged5 = Object.assign({ type: "play" });
        const current5 = ref.current;
        if (current5 != null) {
          const _HermesInternal6 = HermesInternal;
          current5.injectJavaScript("\n    window.postMessage(" + tmp49 + ", '*')\n  ");
        }
        const obj5 = { "x-tiktok-player": true };
        const obj6 = { "x-tiktok-player": true };
      }
      let str13 = "unMute";
      if (mediaPlayerMutedStore) {
        str13 = "mute";
      }
      const obj7 = { type: str13 };
      const _JSON6 = JSON;
      const merged6 = Object.assign(obj7);
      const current6 = ref.current;
      if (current6 != null) {
        const _HermesInternal7 = HermesInternal;
        current6.injectJavaScript("\n    window.postMessage(" + tmp56 + ", '*')\n  ");
      }
      const obj8 = { "x-tiktok-player": true };
    }
  }, items1);
  const effect1 = obj.useEffect(() => {
    const MediaViewerAnalytics = visible(controls[5]).MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "tiktok", action: "attempted" });
  }, []);
  const items2 = [source.uri];
  const memo = obj.useMemo(() => {
    const str = new URL(source.uri);
    const entries = Object.entries(closure_6);
    const item = entries.forEach((item) => {
      [tmp, str] = item;
      const searchParams = str.searchParams;
      searchParams.append(tmp, str.toString());
    });
    return str.toString();
  }, items2);
  let obj2 = { ref, style, source: null, baseURL: "https://www.tiktok.com/player/v1/", injectedJavaScript: "\n  window.addEventListener('message', function(event) {\n    if (!event.data[\"x-tiktok-player\"]) {\n      return;\n    }\n    window.ReactNativeWebView.postMessage(JSON.stringify(event.data));\n  }, true);\n", onDataReceived: null, playerState: null, onToggleOverlay: null, onError: null, onLoad: null, onLoadStart: null };
  let obj3 = {};
  const tmpResult = visible(controls[7]);
  let merged = Object.assign(source);
  obj3.uri = memo;
  obj2.source = obj3;
  obj2.onDataReceived = callback;
  obj2.playerState = playerState;
  obj2.onToggleOverlay = onToggleOverlay;
  obj2.onError = onError;
  obj2.onLoad = onLoad;
  obj2.onLoadStart = onLoadStart;
  return jsx(source(controls[3]), { ref, style, source: null, baseURL: "https://www.tiktok.com/player/v1/", injectedJavaScript: "\n  window.addEventListener('message', function(event) {\n    if (!event.data[\"x-tiktok-player\"]) {\n      return;\n    }\n    window.ReactNativeWebView.postMessage(JSON.stringify(event.data));\n  }, true);\n", onDataReceived: null, playerState: null, onToggleOverlay: null, onError: null, onLoad: null, onLoadStart: null });
});
export function createTiktokVideoControls() {
  const ref = noop.createRef();
  closure_3 = 0;
  noop = 0;
  closure_5 = false;
  return {
    seek(value) {
      const merged = Object.assign({ type: "seekTo", value });
      const current = ref.current;
      if (current != null) {
        const _HermesInternal = HermesInternal;
        current.injectJavaScript("\n    window.postMessage(" + tmp2 + ", '*')\n  ");
      }
    },
    pause(arg0) {
      if (closure_5 !== arg0) {
        closure_5 = arg0;
        let str = "play";
        if (arg0) {
          str = "pause";
        }
        obj = { type: str };
        const _JSON = JSON;
        const merged = Object.assign(obj);
        const current = ref.current;
        if (current != null) {
          const _HermesInternal = HermesInternal;
          current.injectJavaScript("\n    window.postMessage(" + tmp6 + ", '*')\n  ");
        }
        const obj2 = { "x-tiktok-player": true };
      }
    },
    useSubscribe(arg0, arg1, arg2) {
      closure_0 = arg0;
      closure_1 = arg1;
      const layoutEffect = noop.useLayoutEffect(() => {
        if (closure_1_0 != null) {
          tmp(closure_1_3, closure_1_4);
        }
        if (closure_1_1 != null) {
          tmp5(closure_1_5);
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
        closure_3 = arg0;
        if (closure_0 != null) {
          tmp(closure_3, closure_4);
        }
      },
      onDuration(arg0) {
        closure_4 = arg0;
        if (closure_0 != null) {
          tmp(closure_3, closure_4);
        }
      }
    }
  };
}