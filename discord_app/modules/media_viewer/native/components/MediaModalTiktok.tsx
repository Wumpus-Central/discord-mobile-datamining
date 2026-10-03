// === Module 7971: MediaModalTiktok ===

// Module 7971 (MediaModalTiktok)
import MediaViewerAnalyticsManager from "MediaViewerAnalyticsManager" /* 7935 */;
import useVideoControls from "useVideoControls" /* 7936 */;
import MediaModalWebView from "MediaModalWebView" /* 7972 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["visible", "style", "source", "controls"];
const jsx = fn(21).jsx;
let c8 = "https://www.tiktok.com/player/v1/";
let closure_9 = { controls: 0, enable_music_info: 0, enable_timestamp: 0, utm_source: "discord.gg" };
let c10 = "\n  window.addEventListener('message', function(event) {\n    if (!event.data[\"x-tiktok-player\"]) {\n      return;\n    }\n    window.ReactNativeWebView.postMessage(JSON.stringify(event.data));\n  }, true);\n";
let obj = { "-1": fn(7972).PlayerState.UNSTARTED, 0: null, 1: null, 2: null, 3: null };
obj[0] = fn(7972).PlayerState.ENDED;
obj[1] = fn(7972).PlayerState.PLAYING;
obj[2] = fn(7972).PlayerState.PAUSED;
obj[3] = fn(7972).PlayerState.BUFFERING;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalTiktok.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((visible) => {
  const cResult = require("c").c(31);
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
    let tmp7 = style;
    let tmp6 = source;
    let tmp5 = tmp11;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    importDefault = cResult[5];
  }
  [playerState, closure_3] = ref.useState(require("MediaModalWebView").PlayerState.UNREADY);
  const tmp15 = require("usePrevious")(playerState);
  _slicedToArray = tmp15;
  const tmp16 = require("usePrevious")(tmp8);
  _objectWithoutProperties = tmp16;
  ref = undefined;
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
  if (cResult[6] !== props1) {
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
              props2.onPlayerStateChange(tmp12);
            }
          }
          closure_3(tmp12);
        }
      } else if ("onError" === type) {
        closure_3(MediaModalWebView.PlayerState.ERRORED);
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
        useVideoControls.setMuted(iter.value);
      }
    };
    cResult[6] = props2;
    cResult[7] = fn;
    let tmp19 = fn;
  } else {
    tmp19 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function h(isMuted) {
      return isMuted.isMuted;
    };
    cResult[8] = fn2;
    let tmp21 = fn2;
  } else {
    tmp21 = cResult[8];
  }
  obj = require("c");
  const tmp14 = importDefault;
  const mediaPlayerMutedStore = require("MediaPlayerMuteManager").useMediaPlayerMutedStore(tmp21);
  if (cResult[9] === mediaPlayerMutedStore) {
    if (cResult[10] === playerState) {
      if (cResult[11] === tmp15) {
        if (cResult[12] === tmp16) {
          if (cResult[13] === tmp8) {
            if (cResult[14] === ref) {
              let tmp23 = cResult[15];
              let tmp24 = cResult[16];
            }
            const effect = obj2.useEffect(tmp23, tmp24);
            const _Symbol = Symbol;
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              class Y {
                constructor() {
                  MediaViewerAnalytics = closure_0(closure_2[8]).MediaViewerAnalytics;
                  result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "tiktok", action: "attempted" });
                  return;
                }
              }
              const items = [];
              cResult[17] = Y;
              cResult[18] = items;
              let tmp27 = items;
            } else {
              class Y {
                constructor() {
                  MediaViewerAnalytics = closure_0(closure_2[8]).MediaViewerAnalytics;
                  result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "tiktok", action: "attempted" });
                  return;
                }
              }
              tmp27 = cResult[18];
            }
            const effect1 = obj2.useEffect(Y, tmp27);
            if (cResult[19] !== tmp6.uri) {
              class Y {
                constructor() {
                  MediaViewerAnalytics = closure_0(closure_2[8]).MediaViewerAnalytics;
                  result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "tiktok", action: "attempted" });
                  return;
                }
              }
              const str = new URL(tmp6.uri);
              const _Object = Object;
              const entries = Object.entries(closure_9);
              const item = entries.forEach((item) => {
                const tmp = _slicedToArray(item, 2);
                const searchParams = str.searchParams;
                searchParams.append(tmp[0], tmp[1].toString());
              });
              const str1 = str.toString();
              cResult[19] = tmp6.uri;
              cResult[20] = str1;
            } else {
              class Y {
                constructor() {
                  MediaViewerAnalytics = closure_0(closure_2[8]).MediaViewerAnalytics;
                  result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "tiktok", action: "attempted" });
                  return;
                }
              }
            }
            if (cResult[21] === tmp29) {
              class Y {
                constructor() {
                  MediaViewerAnalytics = closure_0(closure_2[8]).MediaViewerAnalytics;
                  result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "tiktok", action: "attempted" });
                  return;
                }
              }
              if (cResult[24] === tmp19) {
                class Y {
                  constructor() {
                    MediaViewerAnalytics = closure_0(closure_2[8]).MediaViewerAnalytics;
                    result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "tiktok", action: "attempted" });
                    return;
                  }
                }
              }
              let obj3 = { ref, style: tmp7, source: tmp36, baseURL: str, injectedJavaScript, onDataReceived: tmp19, playerState };
              let merged = Object.assign(tmp5);
              const tmp48 = mediaPlayerMutedStore(tmp14(tmp2[4]), obj3);
              cResult[24] = tmp19;
              cResult[25] = playerState;
              cResult[26] = tmp5;
              cResult[27] = tmp7;
              cResult[28] = tmp36;
              cResult[29] = ref;
              cResult[30] = tmp48;
              const tmp14Result = tmp14(tmp2[4]);
            }
            let obj4 = {};
            let merged1 = Object.assign(tmp6);
            obj4.uri = tmp29;
            cResult[21] = tmp29;
            cResult[22] = tmp6;
            cResult[23] = obj4;
          }
        }
      }
    }
  }
  class U {
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
        tmp3 = closure_2 !== closure_0(closure_2[4]).PlayerState.UNREADY;
      }
      if (tmp3) {
        tmp7 = closure_1;
        tmp8 = closure_1;
        if (closure_1) {
          tmp9 = closure_4;
          tmp10 = closure_0;
          tmp11 = closure_2;
          tmp8 = closure_4 === closure_0(closure_2[4]).PlayerState.UNREADY;
        }
        if (tmp8) {
          tmp12 = closure_2;
          tmp13 = closure_0;
          tmp14 = closure_2;
          tmp8 = closure_2 === closure_0(closure_2[4]).PlayerState.READY;
        }
        if (tmp8) {
          tmp15 = globalThis;
          _JSON = JSON;
          obj = { "x-tiktok-player": true };
          tmp16 = obj;
          stringify = JSON.stringify;
          merged = Object.assign({ type: "play" });
          current = tmp.current;
          if (current != null) {
            _HermesInternal = HermesInternal;
            str = ", '*')\n  ";
            str2 = "\n    window.postMessage(";
            injectJavaScriptResult = current.injectJavaScript("\n    window.postMessage(" + tmp18 + ", '*')\n  ");
          }
        }
        tmp20 = tmp7;
        if (tmp7) {
          tmp21 = closure_5;
          tmp20 = !closure_5;
        }
        if (tmp20) {
          tmp22 = globalThis;
          _JSON2 = JSON;
          obj1 = { "x-tiktok-player": true };
          tmp23 = obj1;
          stringify2 = JSON.stringify;
          merged1 = Object.assign({ type: "play" });
          current2 = tmp.current;
          if (current2 != null) {
            _HermesInternal2 = HermesInternal;
            str3 = ", '*')\n  ";
            str4 = "\n    window.postMessage(";
            injectJavaScriptResult1 = current2.injectJavaScript("\n    window.postMessage(" + tmp25 + ", '*')\n  ");
          }
        }
        tmp27 = !tmp7;
        if (!tmp7) {
          tmp27 = closure_5;
        }
        if (tmp27) {
          tmp28 = globalThis;
          _JSON3 = JSON;
          obj8 = { "x-tiktok-player": true };
          tmp29 = obj8;
          stringify3 = JSON.stringify;
          merged2 = Object.assign({ type: "pause" });
          current3 = tmp.current;
          if (current3 != null) {
            _HermesInternal3 = HermesInternal;
            str5 = ", '*')\n  ";
            str6 = "\n    window.postMessage(";
            injectJavaScriptResult2 = current3.injectJavaScript("\n    window.postMessage(" + tmp31 + ", '*')\n  ");
          }
        }
        tmp33 = closure_2;
        tmp34 = closure_0;
        tmp35 = closure_2;
        if (closure_2 === closure_0(closure_2[4]).PlayerState.ENDED) {
          tmp48 = globalThis;
          _JSON6 = JSON;
          obj9 = { "x-tiktok-player": true };
          tmp49 = obj9;
          stringify6 = JSON.stringify;
          merged3 = Object.assign({ type: "seekTo", value: 0 });
          current6 = tmp.current;
          if (current6 != null) {
            _HermesInternal4 = HermesInternal;
            str7 = ", '*')\n  ";
            str8 = "\n    window.postMessage(";
            injectJavaScriptResult3 = current6.injectJavaScript("\n    window.postMessage(" + tmp51 + ", '*')\n  ");
          }
          _JSON4 = JSON;
          obj10 = { "x-tiktok-player": true };
          tmp37 = obj10;
          stringify4 = JSON.stringify;
          merged4 = Object.assign({ type: "play" });
          current4 = tmp.current;
          if (current4 != null) {
            _HermesInternal5 = HermesInternal;
            str9 = ", '*')\n  ";
            str10 = "\n    window.postMessage(";
            injectJavaScriptResult4 = current4.injectJavaScript("\n    window.postMessage(" + tmp39 + ", '*')\n  ");
          }
        }
        tmp41 = closure_7;
        str11 = "unMute";
        if (closure_7) {
          str11 = "mute";
        }
        obj11 = { type: null };
        obj11.type = str11;
        tmp42 = globalThis;
        _JSON5 = JSON;
        obj12 = { "x-tiktok-player": true };
        tmp43 = obj12;
        tmp44 = obj11;
        stringify5 = JSON.stringify;
        merged5 = Object.assign(obj11);
        current5 = tmp.current;
        if (current5 != null) {
          _HermesInternal6 = HermesInternal;
          str12 = ", '*')\n  ";
          str13 = "\n    window.postMessage(";
          injectJavaScriptResult5 = current5.injectJavaScript("\n    window.postMessage(" + tmp46 + ", '*')\n  ");
        }
      }
      return;
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
  tmp24 = items1;
  tmp23 = U;
  const tmpResult = require("MediaPlayerMuteManager");
}) : ((style) => {
  const visible = style.visible;
  const source = style.source;
  const controls = style.controls;
  let merged = Object.assign(style, Object.assign({ visible: 0, style: 0, source: 0, controls: 0 }));
  playerState = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  let mediaPlayerMutedStore;
  [playerState, _slicedToArray] = noop.useState(visible(controls[4]).PlayerState.UNREADY);
  const tmp7 = source(controls[7])(playerState);
  closure_5 = tmp7;
  let tmp8 = source(controls[7])(visible);
  noop = tmp8;
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
  mediaPlayerMutedStore = visible(controls[10]).useMediaPlayerMutedStore((isMuted) => isMuted.isMuted);
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
    const MediaViewerAnalytics = visible(controls[8]).MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "tiktok", action: "attempted" });
  }, []);
  const items2 = [source.uri];
  const memo = obj.useMemo(() => {
    const str = new URL(source.uri);
    const entries = Object.entries(closure_9);
    const item = entries.forEach((item) => {
      [tmp, str] = item;
      const searchParams = str.searchParams;
      searchParams.append(tmp, str.toString());
    });
    return str.toString();
  }, items2);
  let obj2 = { ref, style: style.style, source: null, baseURL: null, injectedJavaScript: null, onDataReceived: null, playerState: null };
  let obj3 = {};
  const tmp2Result = visible(controls[10]);
  let merged1 = Object.assign(source);
  obj3.uri = memo;
  obj2.source = obj3;
  obj2.baseURL = mediaPlayerMutedStore;
  obj2.injectedJavaScript = injectedJavaScript;
  obj2.onDataReceived = callback;
  obj2.playerState = playerState;
  let merged2 = Object.assign(merged);
  return ref(source(controls[4]), obj2);
}));
export const createTiktokVideoControls = function createTiktokVideoControls() {
  const ref = noop.createRef();
  closure_3 = 0;
  closure_4 = 0;
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
      }
    }
  };
};