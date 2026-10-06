// === Module 7981: MediaModalTiktok ===

// Module 7981 (MediaModalTiktok)
import Fragment from "Fragment" /* 21 */;
import MediaViewerAnalyticsManager from "MediaViewerAnalyticsManager" /* 7946 */;
import useVideoControls from "useVideoControls" /* 7947 */;
import MediaModalWebView from "MediaModalWebView" /* 7982 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _objectWithoutProperties_mod from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let closure_3 = ["visible", "style", "source", "controls"];
let _slicedToArray = _slicedToArray_mod;
let _objectWithoutProperties = _objectWithoutProperties_mod;
let react = react_mod;
const jsx = Fragment.jsx;
let c8 = "https://www.tiktok.com/player/v1/";
let closure_9 = { controls: 0, enable_music_info: 0, enable_timestamp: 0, utm_source: "discord.gg" };
let c10 = "\n  window.addEventListener('message', function(event) {\n    if (!event.data[\"x-tiktok-player\"]) {\n      return;\n    }\n    window.ReactNativeWebView.postMessage(JSON.stringify(event.data));\n  }, true);\n";
let obj = { "-1": MediaModalWebView.PlayerState.UNSTARTED, 0: null, 1: null, 2: null, 3: null };
obj[0] = MediaModalWebView.PlayerState.ENDED;
obj[1] = MediaModalWebView.PlayerState.PLAYING;
obj[2] = MediaModalWebView.PlayerState.PAUSED;
obj[3] = MediaModalWebView.PlayerState.BUFFERING;
let memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function(visible) {
  let closure_0;
  let closure_1;
  let closure_4;
  let closure_5;
  let controls;
  let playerState;
  let ref;
  let source;
  let style;
  let tmp20;
  let tmp22;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp = _require;
  obj = require("react");
  const cResult = obj.c(31);
  if (cResult[0] !== visible) {
    visible = visible.visible;
    importDefault = visible;
    ({ style, source, controls } = visible);
    _require = controls;
    const tmp11 = _objectWithoutProperties(visible, closure_3);
    cResult[0] = visible;
    cResult[1] = controls;
    cResult[2] = tmp11;
    cResult[3] = source;
    cResult[4] = style;
    cResult[5] = visible;
    tmp8 = visible;
    tmp7 = style;
    tmp6 = source;
    tmp5 = tmp11;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    importDefault = cResult[5];
  }
  let obj2 = ref;
  [playerState, closure_3] = ref.useState(tmp(playerState[4]).PlayerState.UNREADY);
  const tmp15 = require("usePrevious")(playerState);
  _slicedToArray = tmp15;
  const tmp16 = require("usePrevious")(tmp8);
  _objectWithoutProperties = tmp16;
  ref = undefined;
  const tmp14 = importDefault;
  if (controls != null) {
    let props = controls.props;
    if (props != null) {
      ref = props.ref;
    }
  }
  let props1;
  const tmp18 = cResult[6];
  if (controls != null) {
    props1 = controls.props;
  }
  if (tmp18 !== props1) {
    let props2;
    if (controls != null) {
      props2 = controls.props;
    }
    const fn = function k(arg0) {
      const iter = JSON.parse(arg0);
      const type = iter.type;
      if ("onPlayerReady" === type) {
        closure_3(MediaModalWebView.PlayerState.READY);
      } else if ("onStateChange" === type) {
        if (null != obj[iter.value]) {
          if (closure_0 != null) {
            const props2 = closure_0.props;
            if (props2 != null) {
              props2.onPlayerStateChange(obj[iter.value]);
            }
          }
          closure_3(obj[iter.value]);
        }
      } else if ("onError" === type) {
        let str5;
        closure_3(MediaModalWebView.PlayerState.ERRORED);
        const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
        const value = iter.value;
        const trackMessageEmbedsActionCompleted = MediaViewerAnalytics.trackMessageEmbedsActionCompleted;
        if ("1" === value) {
          str5 = "MEDIA_ERR_ABORTED";
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
        const result = trackMessageEmbedsActionCompleted(obj);
      } else if ("onCurrentTime" === type) {
        if (closure_0 != null) {
          const props = closure_0.props;
          if (props != null) {
            const onCurrentSecond = props.onCurrentSecond;
            if (onCurrentSecond != null) {
              onCurrentSecond(iter.value.currentTime);
            }
          }
        }
        if (closure_0 != null) {
          const props3 = closure_0.props;
          if (props3 != null) {
            const onDuration = props3.onDuration;
            if (onDuration != null) {
              onDuration(iter.value.duration);
            }
          }
        }
      } else if ("onMute" === type) {
        const obj2 = useVideoControls;
        obj2.setMuted(iter.value);
      }
    };
    cResult[6] = props2;
    cResult[7] = fn;
    tmp20 = fn;
  } else {
    tmp20 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function h(isMuted) {
      return isMuted.isMuted;
    };
    cResult[8] = fn2;
    tmp22 = fn2;
  } else {
    tmp22 = cResult[8];
  }
  const tmpResult = tmp(playerState[10]);
  const mediaPlayerMutedStore = tmpResult.useMediaPlayerMutedStore(tmp22);
  if (cResult[9] === mediaPlayerMutedStore) {
    if (cResult[10] === playerState) {
      if (cResult[11] === tmp15) {
        if (cResult[12] === tmp16) {
          if (cResult[13] === tmp8) {
            let tmp24;
            let tmp25;
            let tmp28;
            let str;
            if (cResult[14] === ref) {
              tmp24 = cResult[15];
              tmp25 = cResult[16];
            }
            const effect = obj2.useEffect(tmp24, tmp25);
            const _Symbol = Symbol;
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              class Y {
                constructor() {
                  const MediaViewerAnalytics = closure_0(first[8]).MediaViewerAnalytics;
                  const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "tiktok", action: "attempted" });
                }
              }
              const items = [];
              cResult[17] = Y;
              cResult[18] = items;
              tmp28 = items;
            } else {
              class Y {
                constructor() {
                  const MediaViewerAnalytics = closure_0(first[8]).MediaViewerAnalytics;
                  const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "tiktok", action: "attempted" });
                }
              }
              tmp28 = cResult[18];
            }
            const effect1 = obj2.useEffect(Y, tmp28);
            if (cResult[19] !== tmp6.uri) {
              class Y {
                constructor() {
                  const MediaViewerAnalytics = closure_0(first[8]).MediaViewerAnalytics;
                  const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "tiktok", action: "attempted" });
                }
              }
              const self = this;
              const self2 = this;
              str = new URL(tmp6.uri);
              const tmp31 = str;
              const _Object = Object;
              const entries = Object.entries(closure_9);
              const item = entries.forEach((item) => {
                const tmp = _slicedToArray(item, 2);
                const searchParams = str.searchParams;
                searchParams.append(tmp[0], tmp[1].toString());
              });
              cResult[19] = tmp6.uri;
              cResult[20] = str.toString();
              const str1 = str.toString();
            } else {
              class Y {
                constructor() {
                  const MediaViewerAnalytics = closure_0(first[8]).MediaViewerAnalytics;
                  const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "tiktok", action: "attempted" });
                }
              }
            }
            if (cResult[21] === tmp30) {
              class Y {
                constructor() {
                  const MediaViewerAnalytics = closure_0(first[8]).MediaViewerAnalytics;
                  const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "tiktok", action: "attempted" });
                }
              }
              if (cResult[24] === tmp20) {
                class Y {
                  constructor() {
                    const MediaViewerAnalytics = closure_0(first[8]).MediaViewerAnalytics;
                    const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "tiktok", action: "attempted" });
                  }
                }
              }
              const obj3 = { ref, style: tmp7, source: tmp35, baseURL: str, injectedJavaScript, onDataReceived: tmp20, playerState };
              const tmp14Result = tmp14(playerState[4]);
              let merged = Object.assign(tmp5);
              const tmp47 = mediaPlayerMutedStore(tmp14Result, obj3);
              cResult[24] = tmp20;
              cResult[25] = playerState;
              cResult[26] = tmp5;
              cResult[27] = tmp7;
              cResult[28] = tmp35;
              cResult[29] = ref;
              cResult[30] = tmp47;
              const tmp39 = tmp47;
            }
            const obj4 = { uri: tmp30 };
            let merged1 = Object.assign(tmp6);
            cResult[21] = tmp30;
            cResult[22] = tmp6;
            cResult[23] = obj4;
          }
        }
      }
    }
  }
  class U {
    constructor() {
      let current1;
      if (ref != null) {
        current1 = ref.current;
      }
      const tmp3 = null != current1 && first !== MediaModalWebView.PlayerState.UNREADY;
      if (tmp3) {
        const tmp8 = closure_1 && closure_4 === MediaModalWebView.PlayerState.UNREADY && first === MediaModalWebView.PlayerState.READY;
        if (tmp8) {
          const _JSON = JSON;
          const merged = Object.assign({ type: "play" });
          const current = ref.current;
          if (current != null) {
            const _HermesInternal = HermesInternal;
            current.injectJavaScript("\n    window.postMessage(" + tmp18 + ", '*')\n  ");
          }
        }
        const tmp20 = closure_1 && !closure_5;
        if (tmp20) {
          const _JSON2 = JSON;
          const stringify2 = JSON.stringify;
          const merged1 = Object.assign({ type: "play" });
          const current2 = ref.current;
          if (current2 != null) {
            const _HermesInternal2 = HermesInternal;
            current2.injectJavaScript("\n    window.postMessage(" + tmp25 + ", '*')\n  ");
          }
        }
        const tmp27 = !closure_1 && closure_5;
        if (tmp27) {
          const _JSON3 = JSON;
          const stringify3 = JSON.stringify;
          const merged2 = Object.assign({ type: "pause" });
          const current3 = ref.current;
          if (current3 != null) {
            const _HermesInternal3 = HermesInternal;
            current3.injectJavaScript("\n    window.postMessage(" + tmp31 + ", '*')\n  ");
          }
        }
        if (first === MediaModalWebView.PlayerState.ENDED) {
          const _JSON6 = JSON;
          const stringify6 = JSON.stringify;
          const merged3 = Object.assign({ type: "seekTo", value: 0 });
          const current6 = ref.current;
          if (current6 != null) {
            const _HermesInternal4 = HermesInternal;
            current6.injectJavaScript("\n    window.postMessage(" + tmp51 + ", '*')\n  ");
          }
          const _JSON4 = JSON;
          const stringify4 = JSON.stringify;
          const merged4 = Object.assign({ type: "play" });
          const current4 = ref.current;
          if (current4 != null) {
            const _HermesInternal5 = HermesInternal;
            current4.injectJavaScript("\n    window.postMessage(" + tmp39 + ", '*')\n  ");
          }
        }
        let str11 = "unMute";
        if (mediaPlayerMutedStore) {
          str11 = "mute";
        }
        const _JSON5 = JSON;
        const stringify5 = JSON.stringify;
        const obj6 = { type: str11 };
        const merged5 = Object.assign(obj6);
        const current5 = ref.current;
        if (current5 != null) {
          const _HermesInternal6 = HermesInternal;
          current5.injectJavaScript("\n    window.postMessage(" + tmp46 + ", '*')\n  ");
        }
      }
    }
  }
  const items1 = [ref, tmp8, tmp16, tmp15, playerState, mediaPlayerMutedStore];
  cResult[9] = mediaPlayerMutedStore;
  cResult[10] = playerState;
  cResult[11] = tmp15;
  cResult[12] = tmp16;
  cResult[13] = tmp8;
  cResult[14] = ref;
  cResult[15] = U;
  cResult[16] = items1;
  tmp25 = items1;
  tmp24 = U;
}) : ((visible) => {
  let closure_4;
  let closure_6;
  let obj3;
  let playerState;
  visible = visible.visible;
  const source = visible.source;
  const controls = visible.controls;
  const style = visible.style;
  let merged = Object.assign(visible, Object.assign({ visible: 0, style: 0, source: 0, controls: 0 }));
  playerState = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let mediaPlayerMutedStore;
  obj = react;
  let tmp3 = controls;
  [playerState, _slicedToArray] = react.useState(visible(controls[4]).PlayerState.UNREADY);
  const tmp7 = source(controls[7])(playerState);
  let closure_5 = tmp7;
  let tmp8 = source(controls[7])(visible);
  react = tmp8;
  let ref;
  const tmp2 = visible;
  const tmp6 = source;
  if (controls != null) {
    let props = controls.props;
    if (props != null) {
      ref = props.ref;
    }
  }
  let props1;
  const useCallback = obj.useCallback;
  if (controls != null) {
    props1 = controls.props;
  }
  const items = [props1];
  const callback = useCallback((arg0) => {
    const iter = JSON.parse(arg0);
    const type = iter.type;
    if ("onPlayerReady" === type) {
      closure_4(MediaModalWebView.PlayerState.READY);
    } else if ("onStateChange" === type) {
      if (null != obj[iter.value]) {
        if (controls != null) {
          const props2 = controls.props;
          if (props2 != null) {
            props2.onPlayerStateChange(obj[iter.value]);
          }
        }
        closure_4(obj[iter.value]);
      }
    } else if ("onError" === type) {
      let str5;
      closure_4(MediaModalWebView.PlayerState.ERRORED);
      const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
      const value = iter.value;
      const trackMessageEmbedsActionCompleted = MediaViewerAnalytics.trackMessageEmbedsActionCompleted;
      if ("1" === value) {
        str5 = "MEDIA_ERR_ABORTED";
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
      const result = trackMessageEmbedsActionCompleted(obj);
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
      const obj2 = useVideoControls;
      obj2.setMuted(iter.value);
    }
  }, items);
  const tmp2Result = tmp2(tmp3[10]);
  mediaPlayerMutedStore = tmp2Result.useMediaPlayerMutedStore((isMuted) => isMuted.isMuted);
  const items1 = [ref, visible, tmp8, tmp7, playerState, mediaPlayerMutedStore];
  const effect = obj.useEffect(() => {
    let current1;
    if (ref != null) {
      current1 = ref.current;
    }
    const tmp3 = null != current1 && first !== MediaModalWebView.PlayerState.UNREADY;
    if (tmp3) {
      const tmp8 = visible && closure_5 === MediaModalWebView.PlayerState.UNREADY && first === MediaModalWebView.PlayerState.READY;
      if (tmp8) {
        const _JSON = JSON;
        const merged = Object.assign({ type: "play" });
        const current = ref.current;
        if (current != null) {
          const _HermesInternal = HermesInternal;
          current.injectJavaScript("\n    window.postMessage(" + tmp18 + ", '*')\n  ");
        }
      }
      const tmp20 = visible && !closure_6;
      if (tmp20) {
        const _JSON2 = JSON;
        const stringify2 = JSON.stringify;
        const merged1 = Object.assign({ type: "play" });
        const current2 = ref.current;
        if (current2 != null) {
          const _HermesInternal2 = HermesInternal;
          current2.injectJavaScript("\n    window.postMessage(" + tmp25 + ", '*')\n  ");
        }
      }
      const tmp27 = !visible && closure_6;
      if (tmp27) {
        const _JSON3 = JSON;
        const stringify3 = JSON.stringify;
        const merged2 = Object.assign({ type: "pause" });
        const current3 = ref.current;
        if (current3 != null) {
          const _HermesInternal3 = HermesInternal;
          current3.injectJavaScript("\n    window.postMessage(" + tmp31 + ", '*')\n  ");
        }
      }
      if (first === MediaModalWebView.PlayerState.ENDED) {
        const _JSON6 = JSON;
        const stringify6 = JSON.stringify;
        const merged3 = Object.assign({ type: "seekTo", value: 0 });
        const current6 = ref.current;
        if (current6 != null) {
          const _HermesInternal4 = HermesInternal;
          current6.injectJavaScript("\n    window.postMessage(" + tmp51 + ", '*')\n  ");
        }
        const _JSON4 = JSON;
        const stringify4 = JSON.stringify;
        const merged4 = Object.assign({ type: "play" });
        const current4 = ref.current;
        if (current4 != null) {
          const _HermesInternal5 = HermesInternal;
          current4.injectJavaScript("\n    window.postMessage(" + tmp39 + ", '*')\n  ");
        }
      }
      let str11 = "unMute";
      if (mediaPlayerMutedStore) {
        str11 = "mute";
      }
      const _JSON5 = JSON;
      const stringify5 = JSON.stringify;
      const obj6 = { type: str11 };
      const merged5 = Object.assign(obj6);
      const current5 = ref.current;
      if (current5 != null) {
        const _HermesInternal6 = HermesInternal;
        current5.injectJavaScript("\n    window.postMessage(" + tmp46 + ", '*')\n  ");
      }
    }
  }, items1);
  const effect1 = obj.useEffect(() => {
    const MediaViewerAnalytics = visible(controls[8]).MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "tiktok", action: "attempted" });
  }, []);
  const items2 = [source.uri];
  const memo = obj.useMemo(() => {
    const str = new URL(source.uri);
    const entries = Object.entries(closure_9);
    const item = entries.forEach((item) => {
      let tmp;
      [tmp, str] = item;
      const searchParams = str.searchParams;
      searchParams.append(tmp, str.toString());
    });
    return str.toString();
  }, items2);
  let obj2 = { ref, style, source: obj3, baseURL: mediaPlayerMutedStore, injectedJavaScript, onDataReceived: callback, playerState };
  obj3 = { uri: memo };
  const tmp6Result = tmp6(tmp3[4]);
  let merged1 = Object.assign(source);
  let merged2 = Object.assign(merged);
  return ref(tmp6Result, obj2);
}));
let result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalTiktok.tsx");

export default memoResult;
export const createTiktokVideoControls = function createTiktokVideoControls() {
  const ref = react.createRef();
  let c3 = 0;
  let c4 = 0;
  let c5 = false;
  obj = {
    seek(value) {
      obj = { type: "seekTo", value };
      const merged = Object.assign(obj);
      const current = ref.current;
      if (current != null) {
        const _HermesInternal = HermesInternal;
        current.injectJavaScript("\n    window.postMessage(" + tmp2 + ", '*')\n  ");
      }
    },
    pause(arg0) {
      if (c5 !== arg0) {
        c5 = arg0;
        let str = "play";
        if (arg0) {
          str = "pause";
        }
        const _JSON = JSON;
        obj = { type: str };
        const merged = Object.assign(obj);
        const current = ref.current;
        if (current != null) {
          const _HermesInternal = HermesInternal;
          current.injectJavaScript("\n    window.postMessage(" + tmp6 + ", '*')\n  ");
        }
      }
    },
    useSubscribe(arg0, arg1, arg2) {
      let closure_1_0 = arg0;
      let closure_1_1 = arg1;
      const layoutEffect = react.useLayoutEffect(() => {
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
        if (importDefault != null) {
          const tmp5 = arg0 === MediaModalWebView.PlayerState.PAUSED || arg0 === MediaModalWebView.PlayerState.ENDED;
          tmp(tmp5);
        }
      },
      onCurrentSecond(arg0) {
        c3 = arg0;
        if (_require != null) {
          tmp(c3, c4);
        }
      },
      onDuration(arg0) {
        c4 = arg0;
        if (_require != null) {
          tmp(c3, c4);
        }
      }
    }
  };
  return obj;
};