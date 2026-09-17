// discord_app/modules/media_viewer/native/components/MediaModalTiktok.tsx
import MediaViewerAnalyticsManager from "../../MediaViewerAnalyticsManager.tsx";
import useVideoControls from "../useVideoControls.tsx";
import MediaModalWebView from "MediaModalWebView.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let jsx = fn(21).jsx;
let closure_6 = { controls: 0, enable_music_info: 0, enable_timestamp: 0, utm_source: "discord.gg" };
let obj = { "-1": fn(8446).PlayerState.UNSTARTED, 0: null, 1: null, 2: null, 3: null };
obj[0] = fn(8446).PlayerState.ENDED;
obj[1] = fn(8446).PlayerState.PLAYING;
obj[2] = fn(8446).PlayerState.PAUSED;
obj[3] = fn(8446).PlayerState.BUFFERING;
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalTiktok.tsx");

export default noop.memo((style) => {
  const visible = style.visible;
  const source = style.source;
  const controls = style.controls;
  let merged = Object.assign(style, Object.assign({ visible: 0, style: 0, source: 0, controls: 0 }));
  let playerState;
  noop = undefined;
  let mediaPlayerMutedStore;
  const tmp4 = playerState(noop.useState(visible(controls[3]).PlayerState.UNREADY), 2);
  playerState = tmp4[0];
  noop = tmp4[1];
  const tmp7 = source(controls[4])(playerState);
  jsx = tmp7;
  let tmp8 = source(controls[4])(visible);
  closure_6 = tmp8;
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
      closure_4(MediaModalWebView.PlayerState.READY);
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
      closure_4(MediaModalWebView.PlayerState.ERRORED);
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
  const items1 = [ref, visible, tmp8, tmp7, playerState, mediaPlayerMutedStore];
  const effect = obj.useEffect(() => {
    let current1;
    if (ref != null) {
      current1 = ref.current;
    }
    let tmp3 = null != current1;
    if (tmp3) {
      tmp3 = first !== MediaModalWebView.PlayerState.UNREADY;
    }
    if (tmp3) {
      let tmp8 = visible;
      if (visible) {
        tmp8 = closure_5 === MediaModalWebView.PlayerState.UNREADY;
      }
      if (tmp8) {
        tmp8 = first === MediaModalWebView.PlayerState.READY;
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
      let tmp20 = visible;
      if (visible) {
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
      let tmp27 = !visible;
      if (!visible) {
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
      if (first === MediaModalWebView.PlayerState.ENDED) {
        const _JSON6 = JSON;
        const merged3 = Object.assign({ type: "seekTo", value: 0 });
        const current6 = ref.current;
        if (current6 != null) {
          const _HermesInternal4 = HermesInternal;
          current6.injectJavaScript("\n    window.postMessage(" + tmp51 + ", '*')\n  ");
        }
        const _JSON4 = JSON;
        const merged4 = Object.assign({ type: "play" });
        const current4 = ref.current;
        if (current4 != null) {
          const _HermesInternal5 = HermesInternal;
          current4.injectJavaScript("\n    window.postMessage(" + tmp39 + ", '*')\n  ");
        }
        const obj4 = { "x-tiktok-player": true };
        const obj5 = { "x-tiktok-player": true };
      }
      let str11 = "unMute";
      if (mediaPlayerMutedStore) {
        str11 = "mute";
      }
      const obj6 = { type: str11 };
      const _JSON5 = JSON;
      const merged5 = Object.assign(obj6);
      const current5 = ref.current;
      if (current5 != null) {
        const _HermesInternal6 = HermesInternal;
        current5.injectJavaScript("\n    window.postMessage(" + tmp46 + ", '*')\n  ");
      }
      const obj7 = { "x-tiktok-player": true };
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
  let obj2 = {
    ref,
    style: style.style,
    source: null,
    baseURL: "https://www.tiktok.com/player/v1/",
    injectedJavaScript:
      "\n  window.addEventListener('message', function(event) {\n    if (!event.data[\"x-tiktok-player\"]) {\n      return;\n    }\n    window.ReactNativeWebView.postMessage(JSON.stringify(event.data));\n  }, true);\n",
    onDataReceived: null,
    playerState: null,
  };
  let obj3 = {};
  const tmp2Result = visible(controls[7]);
  let merged1 = Object.assign(source);
  obj3.uri = memo;
  obj2.source = obj3;
  obj2.onDataReceived = callback;
  obj2.playerState = playerState;
  let merged2 = Object.assign(merged);
  return jsx(source(controls[3]), {
    ref,
    style: style.style,
    source: null,
    baseURL: "https://www.tiktok.com/player/v1/",
    injectedJavaScript:
      "\n  window.addEventListener('message', function(event) {\n    if (!event.data[\"x-tiktok-player\"]) {\n      return;\n    }\n    window.ReactNativeWebView.postMessage(JSON.stringify(event.data));\n  }, true);\n",
    onDataReceived: null,
    playerState: null,
  });
});
export const createTiktokVideoControls = function createTiktokVideoControls() {
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
          tmp(arg0 === MediaModalWebView.PlayerState.PAUSED || arg0 === MediaModalWebView.PlayerState.ENDED);
          const tmp5 = arg0 === MediaModalWebView.PlayerState.PAUSED || arg0 === MediaModalWebView.PlayerState.ENDED;
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
      },
    },
  };
};
