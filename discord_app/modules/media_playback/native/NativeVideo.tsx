// === Module 8868: NativeVideo ===

// Module 8868 (NativeVideo)
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_3 = ["src"];
get_ActivityIndicator = fn(17);
({ View: closure_7, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let c10 = 0;
const createStyles = fn(5009);
let obj2 = { container: { overflow: "hidden" }, content: null };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.content = {};
let closure_11 = createStyles.createStyles(obj2);
let size = fn(2);
const result = size.fileFinishedImporting("modules/media_playback/native/NativeVideo.tsx");

export default function NativeVideo(ref) {
  let merged = Object.assign(ref, Object.assign({ ref: 0 }));
  dependencyMap = undefined;
  let json;
  let str;
  let id;
  c7 = undefined;
  const tmp2 = closure_11();
  ref = id.useRef(null);
  [tmp6, c2] = str(id.useState({}), 2);
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
  const tmp4Result = str(id.useState(() => {
    const obj = { id: null, uri: null, headersKey: null, headers: null };
    sum = c10 + 1;
    c10 = sum;
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
    let sum = c10 + 1;
    c10 = sum;
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
  const tmp5 = str(id.useState({}), 2);
  [tmp20, c7] = str(id.useState(null), 2);
  ref = obj.useRef(merged);
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
        const Commands = merged(8869).Commands;
        Commands.seek(tmp.current, arg0, num);
      }
    },
    setNativeProps(src) {
      src = src.src;
      const tmp = json(src, obj2);
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
        const Commands = merged(8869).Commands;
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
    ref(ref(8869), {
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
    tmp25Result = ref(ref(5712), obj7);
    const tmp26Result = ref(5712);
  }
  items2[1] = tmp25Result;
  obj5.children = items2;
  return closure_9(c7, obj5);
};