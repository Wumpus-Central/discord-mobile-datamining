// === Module 8834: NativeVideo ===

// Module 8834 (NativeVideo)
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = ["ref"];
let closure_4 = ["src"];
let closure_5 = ["src"];
get_ActivityIndicator = fn(17);
({ View: closure_9, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let c12 = 0;
const createStyles = fn(5005);
let obj2 = { container: { overflow: "hidden" }, content: null };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.content = {};
let closure_13 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/media_playback/native/NativeVideo.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function NativeVideo(ref) {
  const cResult = require("c").c(12);
  let tmp3 = _objectWithoutProperties(ref, obj4);
  _require = tmp3;
  const tmp4 = closure_13();
  ref = noop.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = {};
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  let obj = require("c");
  [tmp9, tmp10] = id(noop.useState(first), 2);
  dependencyMap = tmp10;
  obj4 = {};
  let merged = Object.assign(tmp3);
  let merged1 = Object.assign(tmp9);
  if (typeof obj4.source === "number") {
    let source = ref(81)(obj4.source);
  } else {
    source = obj4.source;
  }
  if (typeof obj4.source === "object") {
    let headers = obj4.source.headers;
    if (headers == null) {
      headers = {};
    }
    let obj5 = headers;
  } else {
    obj5 = {};
  }
  const json = JSON.stringify(obj5);
  let str;
  if (source != null) {
    str = source.uri;
  }
  if (str == null) {
    str = "";
  }
  if (cResult[1] === json) {
    if (cResult[2] === str) {
      let tmp15 = cResult[3];
    }
    const tmp7Result = tmp7(obj2.useState(tmp15), 2);
    const first1 = tmp7Result[0];
    let tmp18 = first1.uri === str;
    if (tmp18) {
      tmp18 = first1.headersKey === json;
    }
    if (!tmp18) {
      const _JSON = JSON;
      let obj6 = { id: null, uri: null, headersKey: null, headers: null };
      const _String = String;
      let sum = c12 + 1;
      c12 = sum;
      let parsed = JSON.parse(json);
      obj6.id = String(sum);
      obj6.uri = str;
      obj6.headersKey = json;
      const _Object = Object;
      let entries = Object.entries(parsed);
      obj6.headers = entries.map((item) => {
        [tmp, tmp2] = item;
        return { name, value };
      });
      tmp7Result[1](obj6);
    }
    id = first1.id;
    [tmp24, _objectWithoutProperties] = tmp7(obj2.useState(null), 2);
    noop = obj2.useRef(tmp3);
    if (cResult[4] === tmp3) {
      if (cResult[5] === tmp10) {
        let tmp25 = cResult[6];
      }
      if (cResult[7] !== tmp3) {
        const items = [tmp3];
        cResult[7] = tmp3;
        cResult[8] = items;
        let tmp26 = items;
      } else {
        tmp26 = cResult[8];
      }
      const effect = obj2.useEffect(tmp25, tmp26);
      if (cResult[9] !== tmp10) {
        const fn2 = function j() {
          return {
            seek(arg0, arg1) {
              let num = 100;
              if (undefined !== arg1) {
                num = arg1;
              }
              if (null != ref.current) {
                const Commands = closure_0(8835).Commands;
                Commands.seek(tmp.current, arg0, num);
              }
            },
            setNativeProps(src) {
              src = src.src;
              const tmp = _objectWithoutProperties(src, json);
              closure_0 = tmp;
              if (null != src) {
                const uri = src.uri;
                const obj = { uri };
                tmp.source = obj;
              }
              let uri1;
              if (src != null) {
                uri1 = src.uri;
              }
              let tmp3 = null === uri1;
              if (tmp3) {
                tmp3 = null != ref.current;
              }
              if (tmp3) {
                const Commands = closure_0(8835).Commands;
                Commands.reset(ref.current);
              }
              dependencyMap((arg0) => {
                const merged = Object.assign(arg0);
                const merged1 = Object.assign(closure_0);
                return {};
              });
            }
          };
        };
        cResult[9] = tmp10;
        cResult[10] = fn2;
        let tmp28 = fn2;
      } else {
        tmp28 = cResult[10];
      }
      const _Symbol = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [];
        cResult[11] = items1;
        let tmp29 = items1;
      } else {
        tmp29 = cResult[11];
      }
      const imperativeHandle = obj2.useImperativeHandle(ref.ref, tmp28, tmp29);
      let obj7 = { style: null, onLayout: null, accessible: null, accessibilityRole: null, importantForAccessibility: null, "aria-hidden": null, children: null };
      const items2 = [tmp4.container, obj4.style];
      obj7.style = items2;
      obj7.onLayout = obj4.onLayout;
      class O {
        constructor() {
          current = closure_8.current;
          closure_8.current = current;
          tmp = closure_2((arg0) => {
            const keys = Object.keys(arg0);
            const found = keys.filter((item) => current[item] !== closure_1_0[item]);
            if (0 === found.length) {
              return arg0;
            } else {
              const obj = {};
              const merged = Object.assign(arg0);
              for (const item10018 of found) {
                delete tmp[tmp2];
                continue;
              }
              return obj;
            }
          });
          return;
        }
      }
      ({ accessibilityRole: obj8.accessibilityRole, importantForAccessibility: obj8.importantForAccessibility, aria-hidden: obj8["aria-hidden"] } = obj4);
      const obj10 = { ref, style: tmp4.content, sourceId: id, sourceUri: null, sourceHeaders: null, paused: null, muted: null, volume: null, rate: null, repeat: null, controls: null, resizeMode: null, audioPolicy: null, disableFocus: null, httpEngine: null, bufferConfig: null, playInBackground: null, playWhenInactive: null, pictureInPicture: null, preventsDisplaySleepDuringVideoPlayback: null, automaticallyWaitsToMinimizeStalling: null, maxBitRate: null, preferredForwardBufferDuration: null, onPlaybackEvent: null };
      ({ uri: obj9.sourceUri, headers: obj9.sourceHeaders } = first1);
      ({ paused: obj9.paused, muted: obj9.muted, volume: obj9.volume, rate: obj9.rate, repeat: obj9.repeat, controls: obj9.controls, resizeMode: obj9.resizeMode, mixWithOthers: obj9.audioPolicy, disableFocus: obj9.disableFocus, httpEngine: obj9.httpEngine, bufferConfig: obj9.bufferConfig, playInBackground: obj9.playInBackground, playWhenInactive: obj9.playWhenInactive, pictureInPicture: obj9.pictureInPicture, preventsDisplaySleepDuringVideoPlayback: obj9.preventsDisplaySleepDuringVideoPlayback, automaticallyWaitsToMinimizeStalling: obj9.automaticallyWaitsToMinimizeStalling, maxBitRate: obj9.maxBitRate, preferredForwardBufferDuration: obj9.preferredForwardBufferDuration } = obj4);
      obj10.onPlaybackEvent = function handleEvent(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        if (nativeEvent.sourceId === id) {
          switch (nativeEvent.type) {
            case "loading":
              const onLoadStart = obj4.onLoadStart;
              if (onLoadStart != null) {
                onLoadStart();
              }
            break;
            case "loaded":
              const onLoad = obj4.onLoad;
              if (onLoad != null) {
                const obj3 = { currentTime: nativeEvent.positionMs / 1000, duration: nativeEvent.durationMs / 1000, naturalSize: null, canPlayFastForward: null, canPlayReverse: null, canPlaySlowForward: null, canPlaySlowReverse: null, canStepBackward: null, canStepForward: null };
                const size = { width: null, height: null, orientation: null };
                ({ width: obj10.width, height: obj10.height } = nativeEvent);
                let str2 = "portrait";
                if (nativeEvent.width >= nativeEvent.height) {
                  str2 = "landscape";
                }
                size.orientation = str2;
                obj3.naturalSize = size;
                ({ canPlayFastForward: obj9.canPlayFastForward, canPlayReverse: obj9.canPlayReverse, canPlaySlowForward: obj9.canPlaySlowForward, canPlaySlowReverse: obj9.canPlaySlowReverse, canStepBackward: obj9.canStepBackward, canStepForward: obj9.canStepForward } = nativeEvent);
                onLoad(obj3);
              }
            break;
            case "firstFrame":
              _objectWithoutProperties(tmp);
              const onReadyForDisplay = obj4.onReadyForDisplay;
              if (onReadyForDisplay != null) {
                onReadyForDisplay();
              }
            break;
            case "tracks":
              const onVideoTracks = obj4.onVideoTracks;
              if (onVideoTracks != null) {
                obj4 = { videoTracks: nativeEvent.videoTracks, selectedVideoTrackId: null };
                const first = nativeEvent.videoTracks[0];
                str = undefined;
                if (first != null) {
                  str = first.trackId;
                }
                if (str == null) {
                  str = "";
                }
                obj4.selectedVideoTrackId = str;
                onVideoTracks(obj4);
              }
            break;
            case "buffering":
              const onBuffer = obj4.onBuffer;
              if (onBuffer != null) {
                const obj5 = { isBuffering: nativeEvent.buffering };
                onBuffer(obj5);
              }
            break;
            case "downloadProgress":
              const onDownloadProgress = obj4.onDownloadProgress;
              if (onDownloadProgress != null) {
                const obj6 = { progressPercent: nativeEvent.downloadProgress };
                onDownloadProgress(obj6);
              }
            break;
            case "progress":
              const onProgress = obj4.onProgress;
              if (onProgress != null) {
                const obj7 = { currentTime: nativeEvent.positionMs / 1000, playableDuration: nativeEvent.bufferedPositionMs / 1000, seekableDuration: nativeEvent.durationMs / 1000 };
                onProgress(obj7);
              }
            break;
            case "seek":
              const onSeek = obj4.onSeek;
              if (onSeek != null) {
                const obj8 = { currentTime: nativeEvent.positionMs / 1000, seekTime: nativeEvent.requestedPositionMs / 1000 };
                onSeek(obj8);
              }
            break;
            case "rate":
              const onPlaybackRateChange = obj4.onPlaybackRateChange;
              if (onPlaybackRateChange != null) {
                const obj18 = { playbackRate: nativeEvent.playbackRate };
                onPlaybackRateChange(obj18);
              }
            break;
            case "stalled":
              const onPlaybackStalled = obj4.onPlaybackStalled;
              if (onPlaybackStalled != null) {
                onPlaybackStalled();
              }
            break;
            case "resumed":
              const onPlaybackResume = obj4.onPlaybackResume;
              if (onPlaybackResume != null) {
                onPlaybackResume();
              }
            break;
            case "ended":
              const onEnd = obj4.onEnd;
              if (onEnd != null) {
                onEnd();
              }
            break;
            case "error":
              const onError = obj4.onError;
              if (onError != null) {
                const obj = { error: null };
                ({ errorMessage: obj2[""], errorCode: obj2.code, errorDomain: obj2.domain, errorMessage: obj2.localizedDescription } = nativeEvent);
                obj.error = { "": null, code: null, domain: null, localizedDescription: null };
                onError(obj);
                const obj19 = { "": null, code: null, domain: null, localizedDescription: null };
              }
            break;
          }
        }
      };
      const items3 = [closure_10(ref(8835), obj10), ];
      let tmp33Result = null != obj4.poster && tmp24 !== id;
      if (tmp33Result) {
        const obj11 = { accessible: false, style: tmp4.content, source: null, resizeMode: null };
        let obj19 = { uri: obj4.poster };
        obj11.source = obj19;
        let str2 = "center";
        if ("none" !== obj4.posterResizeMode) {
          let str4 = obj4.posterResizeMode;
          if (str4 == null) {
            str4 = "contain";
          }
          str2 = str4;
        }
        obj11.resizeMode = str2;
        tmp33Result = closure_10(ref(5707), obj11);
        const tmp34Result = ref(5707);
      }
      items3[1] = tmp33Result;
      obj7.children = items3;
      return closure_11(closure_9, obj7);
    }
    class O {
      constructor() {
        current = closure_8.current;
        closure_8.current = current;
        tmp = closure_2((arg0) => {
          const keys = Object.keys(arg0);
          const found = keys.filter((item) => current[item] !== closure_1_0[item]);
          if (0 === found.length) {
            return arg0;
          } else {
            const obj = {};
            const merged = Object.assign(arg0);
            for (const item10018 of found) {
              delete tmp[tmp2];
              continue;
            }
            return obj;
          }
        });
        return;
      }
    }
    cResult[4] = tmp3;
    cResult[5] = tmp10;
    cResult[6] = O;
    tmp25 = O;
    const tmp7Result2 = tmp7(obj2.useState(null), 2);
  }
  const fn = function w() {
    const obj = { id: null, uri: null, headersKey: null, headers: null };
    sum = c12 + 1;
    c12 = sum;
    const parsed = JSON.parse(json);
    obj.id = String(sum);
    obj.uri = str;
    obj.headersKey = json;
    const entries = Object.entries(parsed);
    obj.headers = entries.map((item) => {
      [tmp, tmp2] = item;
      return { name, value };
    });
    return obj;
  };
  cResult[1] = json;
  cResult[2] = str;
  cResult[3] = fn;
  tmp15 = fn;
  const tmp8 = id(noop.useState(first), 2);
}) : (function NativeVideo(ref) {
  let merged = Object.assign(ref, Object.assign({ ref: 0 }));
  dependencyMap = undefined;
  let json;
  let str;
  let id;
  c7 = undefined;
  noop = undefined;
  const tmp2 = closure_13();
  ref = noop.useRef(null);
  [tmp6, c2] = id(noop.useState({}), 2);
  const obj2 = {};
  let merged1 = Object.assign(merged);
  const merged2 = Object.assign(tmp6);
  if (typeof obj2.source === "number") {
    let source = ref(81)(obj2.source);
  } else {
    source = obj2.source;
  }
  if (typeof obj2.source === "object") {
    let headers = obj2.source.headers;
    if (headers == null) {
      headers = {};
    }
    let obj3 = headers;
  } else {
    obj3 = {};
  }
  json = JSON.stringify(obj3);
  str = undefined;
  if (source != null) {
    str = source.uri;
  }
  if (str == null) {
    str = "";
  }
  const tmp4Result = id(noop.useState(() => {
    const obj = { id: null, uri: null, headersKey: null, headers: null };
    sum = c12 + 1;
    c12 = sum;
    const parsed = JSON.parse(json);
    obj.id = String(sum);
    obj.uri = str;
    obj.headersKey = json;
    const entries = Object.entries(parsed);
    obj.headers = entries.map((item) => {
      [tmp, tmp2] = item;
      return { name, value };
    });
    return obj;
  }), 2);
  let first = tmp4Result[0];
  let tmp14 = first.uri === str;
  if (tmp14) {
    tmp14 = first.headersKey === json;
  }
  if (!tmp14) {
    const _JSON = JSON;
    let obj4 = { id: null, uri: null, headersKey: null, headers: null };
    const _String = String;
    let sum = c12 + 1;
    c12 = sum;
    let parsed = JSON.parse(json);
    obj4.id = String(sum);
    obj4.uri = str;
    obj4.headersKey = json;
    const _Object = Object;
    let entries = Object.entries(parsed);
    obj4.headers = entries.map((item) => {
      [tmp, tmp2] = item;
      return { name, value };
    });
    tmp4Result[1](obj4);
  }
  id = first.id;
  const tmp5 = id(noop.useState({}), 2);
  [tmp20, c7] = id(noop.useState(null), 2);
  noop = obj.useRef(merged);
  const items = [merged];
  const effect = obj.useEffect(() => {
    const current = ref.current;
    ref.current = current;
    _undefined((arg0) => {
      const keys = Object.keys(arg0);
      const found = keys.filter((item) => current[item] !== closure_1_0[item]);
      if (0 === found.length) {
        return arg0;
      } else {
        const obj = {};
        merged = Object.assign(arg0);
        for (const item10018 of found) {
          delete tmp[tmp2];
          continue;
        }
        return obj;
      }
    });
  }, items);
  const imperativeHandle = obj.useImperativeHandle(ref.ref, () => ({
    seek(arg0) {
      let num = arg1;
      if (arg1 === undefined) {
        num = 100;
      }
      if (null != ref.current) {
        const Commands = merged(8835).Commands;
        Commands.seek(tmp.current, arg0, num);
      }
    },
    setNativeProps(src) {
      src = src.src;
      const tmp = c7(src, str);
      closure_0 = tmp;
      if (null != src) {
        const uri = src.uri;
        const obj = { uri };
        tmp.source = obj;
      }
      let uri1;
      if (src != null) {
        uri1 = src.uri;
      }
      let tmp3 = null === uri1;
      if (tmp3) {
        tmp3 = null != ref.current;
      }
      if (tmp3) {
        const Commands = merged(8835).Commands;
        Commands.reset(ref.current);
      }
      dependencyMap((arg0) => {
        merged = Object.assign(arg0);
        const merged1 = Object.assign(closure_0);
        return {};
      });
    }
  }), []);
  let obj5 = { style: null, onLayout: obj2.onLayout, accessible: obj2.accessible, accessibilityRole: obj2.accessibilityRole, importantForAccessibility: obj2.importantForAccessibility, "aria-hidden": obj2["aria-hidden"], children: null };
  const items1 = [tmp2.container, obj2.style];
  obj5.style = items1;
  const items2 = [
    closure_10(ref(8835), {
      ref,
      style: tmp2.content,
      sourceId: id,
      sourceUri: first.uri,
      sourceHeaders: first.headers,
      paused: obj2.paused,
      muted: obj2.muted,
      volume: obj2.volume,
      rate: obj2.rate,
      repeat: obj2.repeat,
      controls: obj2.controls,
      resizeMode: obj2.resizeMode,
      audioPolicy: obj2.mixWithOthers,
      disableFocus: obj2.disableFocus,
      httpEngine: obj2.httpEngine,
      bufferConfig: obj2.bufferConfig,
      playInBackground: obj2.playInBackground,
      playWhenInactive: obj2.playWhenInactive,
      pictureInPicture: obj2.pictureInPicture,
      preventsDisplaySleepDuringVideoPlayback: obj2.preventsDisplaySleepDuringVideoPlayback,
      automaticallyWaitsToMinimizeStalling: obj2.automaticallyWaitsToMinimizeStalling,
      maxBitRate: obj2.maxBitRate,
      preferredForwardBufferDuration: obj2.preferredForwardBufferDuration,
      onPlaybackEvent: function handleEvent(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        if (nativeEvent.sourceId === id) {
          switch (nativeEvent.type) {
            case "loading":
              const onLoadStart = obj2.onLoadStart;
              if (onLoadStart != null) {
                onLoadStart();
              }
            break;
            case "loaded":
              const onLoad = obj2.onLoad;
              if (onLoad != null) {
                const obj3 = { currentTime: nativeEvent.positionMs / 1000, duration: nativeEvent.durationMs / 1000, naturalSize: null, canPlayFastForward: null, canPlayReverse: null, canPlaySlowForward: null, canPlaySlowReverse: null, canStepBackward: null, canStepForward: null };
                const size = { width: null, height: null, orientation: null };
                ({ width: obj10.width, height: obj10.height } = nativeEvent);
                let str2 = "portrait";
                if (nativeEvent.width >= nativeEvent.height) {
                  str2 = "landscape";
                }
                size.orientation = str2;
                obj3.naturalSize = size;
                ({ canPlayFastForward: obj9.canPlayFastForward, canPlayReverse: obj9.canPlayReverse, canPlaySlowForward: obj9.canPlaySlowForward, canPlaySlowReverse: obj9.canPlaySlowReverse, canStepBackward: obj9.canStepBackward, canStepForward: obj9.canStepForward } = nativeEvent);
                onLoad(obj3);
              }
            break;
            case "firstFrame":
              _undefined2(tmp);
              const onReadyForDisplay = obj2.onReadyForDisplay;
              if (onReadyForDisplay != null) {
                onReadyForDisplay();
              }
            break;
            case "tracks":
              const onVideoTracks = obj2.onVideoTracks;
              if (onVideoTracks != null) {
                const obj4 = { videoTracks: nativeEvent.videoTracks, selectedVideoTrackId: null };
                const first = nativeEvent.videoTracks[0];
                str = undefined;
                if (first != null) {
                  str = first.trackId;
                }
                if (str == null) {
                  str = "";
                }
                obj4.selectedVideoTrackId = str;
                onVideoTracks(obj4);
              }
            break;
            case "buffering":
              const onBuffer = obj2.onBuffer;
              if (onBuffer != null) {
                const obj5 = { isBuffering: nativeEvent.buffering };
                onBuffer(obj5);
              }
            break;
            case "downloadProgress":
              const onDownloadProgress = obj2.onDownloadProgress;
              if (onDownloadProgress != null) {
                const obj6 = { progressPercent: nativeEvent.downloadProgress };
                onDownloadProgress(obj6);
              }
            break;
            case "progress":
              const onProgress = obj2.onProgress;
              if (onProgress != null) {
                const obj7 = { currentTime: nativeEvent.positionMs / 1000, playableDuration: nativeEvent.bufferedPositionMs / 1000, seekableDuration: nativeEvent.durationMs / 1000 };
                onProgress(obj7);
              }
            break;
            case "seek":
              const onSeek = obj2.onSeek;
              if (onSeek != null) {
                const obj8 = { currentTime: nativeEvent.positionMs / 1000, seekTime: nativeEvent.requestedPositionMs / 1000 };
                onSeek(obj8);
              }
            break;
            case "rate":
              const onPlaybackRateChange = obj2.onPlaybackRateChange;
              if (onPlaybackRateChange != null) {
                const obj18 = { playbackRate: nativeEvent.playbackRate };
                onPlaybackRateChange(obj18);
              }
            break;
            case "stalled":
              const onPlaybackStalled = obj2.onPlaybackStalled;
              if (onPlaybackStalled != null) {
                onPlaybackStalled();
              }
            break;
            case "resumed":
              const onPlaybackResume = obj2.onPlaybackResume;
              if (onPlaybackResume != null) {
                onPlaybackResume();
              }
            break;
            case "ended":
              const onEnd = obj2.onEnd;
              if (onEnd != null) {
                onEnd();
              }
            break;
            case "error":
              const onError = obj2.onError;
              if (onError != null) {
                const obj = { error: null };
                ({ errorMessage: obj2[""], errorCode: obj2.code, errorDomain: obj2.domain, errorMessage: obj2.localizedDescription } = nativeEvent);
                obj.error = { "": null, code: null, domain: null, localizedDescription: null };
                onError(obj);
                const obj19 = { "": null, code: null, domain: null, localizedDescription: null };
              }
            break;
          }
        }
      }
    }),

  ];
  let tmp25Result = null != obj2.poster && tmp20 !== id;
  if (tmp25Result) {
    let obj7 = { accessible: false, style: tmp2.content, source: null, resizeMode: null };
    let obj8 = { uri: obj2.poster };
    obj7.source = obj8;
    let str2 = "center";
    if ("none" !== obj2.posterResizeMode) {
      let str4 = obj2.posterResizeMode;
      if (str4 == null) {
        str4 = "contain";
      }
      str2 = str4;
    }
    obj7.resizeMode = str2;
    tmp25Result = closure_10(ref(5707), obj7);
    const tmp26Result = ref(5707);
  }
  items2[1] = tmp25Result;
  obj5.children = items2;
  return closure_11(closure_9, obj5);
});