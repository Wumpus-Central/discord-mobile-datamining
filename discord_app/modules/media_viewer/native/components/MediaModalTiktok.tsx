// === Module 9015: createTiktokVideoControls ===

// Module 9015 (createTiktokVideoControls)
import _slicedToArray from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
let c4 = importAllResult;
let closure_6 = { controls: 0, enable_music_info: 0, enable_timestamp: 0, utm_source: "discord.gg" };
let obj = { "-1": require("PlayerState").PlayerState.UNSTARTED, 0: null, 1: null, 2: null, 3: null };
obj[0] = require("PlayerState").PlayerState.ENDED;
obj[1] = require("PlayerState").PlayerState.PLAYING;
obj[2] = require("PlayerState").PlayerState.PAUSED;
obj[3] = require("PlayerState").PlayerState.BUFFERING;
const memoResult = importAllResult.memo((style) => {
  const visible = style.visible;
  const source = style.source;
  const controls = style.controls;
  let merged = Object.assign(style, Object.create(null));
  let first;
  importAllResult = undefined;
  let mediaPlayerMutedStore;
  obj = importAllResult;
  const tmp4 = first(importAllResult.useState(visible(controls[3]).PlayerState.UNREADY), 2);
  first = tmp4[0];
  importAllResult = tmp4[1];
  const tmp7 = source(controls[4])(first);
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
  props = undefined;
  if (controls != null) {
    props = controls.props;
  }
  const items = [props];
  const callback = obj.useCallback((arg0) => {
    const iter = JSON.parse(arg0);
    const type = iter.type;
    if ("onPlayerReady" === type) {
      callback(visible(controls[3]).PlayerState.READY);
    } else if ("onStateChange" === type) {
      if (null != ref[iter.value]) {
        if (controls != null) {
          const props2 = controls.props;
          if (props2 != null) {
            props2.onPlayerStateChange(tmp12);
          }
        }
        callback(tmp12);
      }
    } else if ("onError" === type) {
      callback(visible(controls[3]).PlayerState.ERRORED);
      const MediaViewerAnalytics = visible(controls[5]).MediaViewerAnalytics;
      const value = iter.value;
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
      obj = { platform: "tiktok", action: "errored", error: null };
      obj[2] = str5;
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
      visible(controls[6]).setMuted(iter.value);
      const obj2 = visible(controls[6]);
    }
  }, items);
  mediaPlayerMutedStore = visible(controls[7]).useMediaPlayerMutedStore((isMuted) => isMuted.isMuted);
  const items1 = [ref, visible, tmp8, tmp7, first, mediaPlayerMutedStore];
  const effect = obj.useEffect(() => {
    let current;
    if (ref != null) {
      current = ref.current;
    }
    let tmp3 = null != current;
    if (tmp3) {
      tmp3 = first !== visible(controls[3]).PlayerState.UNREADY;
    }
    if (tmp3) {
      let tmp8 = visible;
      if (visible) {
        tmp8 = closure_5 === visible(controls[3]).PlayerState.UNREADY;
      }
      if (tmp8) {
        tmp8 = first === visible(controls[3]).PlayerState.READY;
      }
      if (tmp8) {
        const _JSON = JSON;
        const merged = Object.assign({ type: "play" });
        current = ref.current;
        if (current != null) {
          const _HermesInternal = HermesInternal;
          current.injectJavaScript("\n    window.postMessage(" + tmp18 + ", '*')\n  ");
        }
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
      }
      if (first === visible(controls[3]).PlayerState.ENDED) {
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
      }
      let str11 = "unMute";
      if (mediaPlayerMutedStore) {
        str11 = "mute";
      }
      const obj3 = { type: null };
      obj3[0] = str11;
      const _JSON5 = JSON;
      const merged5 = Object.assign(obj3);
      const current5 = ref.current;
      if (current5 != null) {
        const _HermesInternal6 = HermesInternal;
        current5.injectJavaScript("\n    window.postMessage(" + tmp46 + ", '*')\n  ");
      }
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
    const item = entries.forEach((item, index) => {
      [tmp, str] = item;
      const searchParams = str.searchParams;
      searchParams.append(tmp, str.toString());
    });
    return str.toString();
  }, items2);
  obj = {};
  const tmp2Result = visible(controls[7]);
  let merged1 = Object.assign(source);
  obj.uri = memo;
  obj[2] = obj;
  obj[5] = callback;
  obj[6] = first;
  let merged2 = Object.assign(merged);
  return jsx(source(controls[3]), {});
});
let result = require("obj132").fileFinishedImporting("modules/media_viewer/native/components/MediaModalTiktok.tsx");

export default memoResult;
export const createTiktokVideoControls = function createTiktokVideoControls() {
  const ref = importAllResult.createRef();
  c3 = 0;
  c5 = false;
  obj = {
    ref,
    onPlayerStateChange(arg0) {
      if (closure_1 != null) {
        tmp(arg0 === require(ref[3]).PlayerState.PAUSED || arg0 === require(ref[3]).PlayerState.ENDED);
        const tmp5 = arg0 === require(ref[3]).PlayerState.PAUSED || arg0 === require(ref[3]).PlayerState.ENDED;
      }
    },
    onCurrentSecond(arg0) {
      closure_3 = arg0;
      if (closure_0 != null) {
        tmp(closure_3, c4);
      }
    },
    onDuration(arg0) {
      closure_4 = arg0;
      if (closure_0 != null) {
        tmp(c3, closure_4);
      }
    }
  };
  return obj;
};