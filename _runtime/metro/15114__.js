// === Module 15114: ? ===

// Module 15114
import noop2 from "noop" /* 19 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _extends from "_extends" /* 15116 */;
import module_8350 from "module_8350" /* 8350 */;
import _getRequireWildcardCache from "_getRequireWildcardCache" /* 15115 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

let closure_2 = module_8350(_extends);
let closure_3 = module_8350(_slicedToArray);
const noop = _getRequireWildcardCache(noop2);
const self = this;
let c7 = "/Users/ananthukanive/side-proj/react-native-youtube-iframe/src/YoutubeIframe.js";
const StyleSheet = get_ActivityIndicator.StyleSheet;
const styles = StyleSheet.create({ webView: { backgroundColor: "transparent" } });

export default noop.forwardRef(function YoutubeIframe(videoId, ref) {
  videoId = videoId.videoId;
  const playList = videoId.playList;
  let play = videoId.play;
  let tmp = undefined !== play;
  ({ height, width } = videoId);
  if (tmp) {
    tmp = play;
  }
  play = tmp;
  const mute = videoId.mute;
  closure_3 = tmp2;
  const volume = videoId.volume;
  let num = 100;
  if (undefined !== volume) {
    num = volume;
  }
  const useLocalHTML = videoId.useLocalHTML;
  const baseUrlOverride = videoId.baseUrlOverride;
  const playbackRate = videoId.playbackRate;
  let num2 = 1;
  let num3 = 1;
  ({ webViewStyle, webViewProps } = videoId);
  if (undefined !== playbackRate) {
    num3 = playbackRate;
  }
  const contentScale = videoId.contentScale;
  if (undefined !== contentScale) {
    num2 = contentScale;
  }
  let fn = videoId.onError;
  if (undefined === fn) {
    fn = (arg0) => {

    };
  }
  let fn2 = videoId.onReady;
  if (undefined === fn2) {
    fn2 = (arg0) => {

    };
  }
  const playListStartIndex = videoId.playListStartIndex;
  let num4 = 0;
  if (undefined !== playListStartIndex) {
    num4 = playListStartIndex;
  }
  ({ initialPlayerParams, allowWebViewZoom } = videoId);
  closure_12 = tmp3;
  const forceAndroidAutoplay = videoId.forceAndroidAutoplay;
  let fn3 = videoId.onChangeState;
  if (undefined === fn3) {
    fn3 = (arg0) => {

    };
  }
  let fn4 = videoId.onFullScreenChange;
  if (undefined === fn4) {
    fn4 = (arg0) => {

    };
  }
  let fn5 = videoId.onPlaybackQualityChange;
  if (undefined === fn5) {
    fn5 = (arg0) => {

    };
  }
  let fn6 = videoId.onPlaybackRateChange;
  if (undefined === fn6) {
    fn6 = (arg0) => {

    };
  }
  let obj = num;
  const defaultResult = closure_3.default(num.useState(false), 2);
  const first = defaultResult[0];
  closure_18 = defaultResult[1];
  closure_19 = num.useRef(videoId);
  closure_20 = num.useRef(playList);
  if (!initialPlayerParams) {
    initialPlayerParams = {};
  }
  ref = num.useRef(initialPlayerParams);
  ref = obj.useRef(null);
  const eventEmitter = new videoId(playList[6]).EventEmitter();
  closure_23 = obj.useRef(eventEmitter);
  const imperativeHandle = obj.useImperativeHandle(ref, () => ({
    getVideoUrl() {
      let current = closure_22.current;
      current.injectJavaScript(closure_1_0(closure_1_1[7]).PLAYER_FUNCTIONS.getVideoUrlScript);
      return new Promise((arg0) => {
        const current = ref.current;
        current.once("getVideoUrl", arg0);
      });
    },
    getDuration() {
      let current = closure_22.current;
      current.injectJavaScript(closure_1_0(closure_1_1[7]).PLAYER_FUNCTIONS.durationScript);
      return new Promise((arg0) => {
        const current = ref.current;
        current.once("getDuration", arg0);
      });
    },
    getCurrentTime() {
      let current = closure_22.current;
      current.injectJavaScript(closure_1_0(closure_1_1[7]).PLAYER_FUNCTIONS.currentTimeScript);
      return new Promise((arg0) => {
        const current = ref.current;
        current.once("getCurrentTime", arg0);
      });
    },
    isMuted() {
      let current = closure_22.current;
      current.injectJavaScript(closure_1_0(closure_1_1[7]).PLAYER_FUNCTIONS.isMutedScript);
      return new Promise((arg0) => {
        const current = ref.current;
        current.once("isMuted", arg0);
      });
    },
    getVolume() {
      let current = closure_22.current;
      current.injectJavaScript(closure_1_0(closure_1_1[7]).PLAYER_FUNCTIONS.getVolumeScript);
      return new Promise((arg0) => {
        const current = ref.current;
        current.once("getVolume", arg0);
      });
    },
    getPlaybackRate() {
      let current = closure_22.current;
      current.injectJavaScript(closure_1_0(closure_1_1[7]).PLAYER_FUNCTIONS.getPlaybackRateScript);
      return new Promise((arg0) => {
        const current = ref.current;
        current.once("getPlaybackRate", arg0);
      });
    },
    getAvailablePlaybackRates() {
      let current = closure_22.current;
      current.injectJavaScript(closure_1_0(closure_1_1[7]).PLAYER_FUNCTIONS.getAvailablePlaybackRatesScript);
      return new Promise((arg0) => {
        const current = ref.current;
        current.once("getAvailablePlaybackRates", arg0);
      });
    },
    seekTo(arg0, arg1) {
      const current = closure_22.current;
      const PLAYER_FUNCTIONS = closure_1_0(closure_1_1[7]).PLAYER_FUNCTIONS;
      current.injectJavaScript(PLAYER_FUNCTIONS.seekToScript(arg0, arg1));
    }
  }), []);
  let items = [tmp, undefined !== mute && mute, num, num3, first];
  const effect = obj.useEffect(() => {
    if (first) {
      const items = [videoId(playList[7]).playMode[play], videoId(playList[7]).soundMode[closure_3], , ];
      const PLAYER_FUNCTIONS = videoId(playList[7]).PLAYER_FUNCTIONS;
      items[2] = PLAYER_FUNCTIONS.setVolume(num);
      const PLAYER_FUNCTIONS2 = videoId(playList[7]).PLAYER_FUNCTIONS;
      items[3] = PLAYER_FUNCTIONS2.setPlaybackRate(num3);
      const item = items.forEach(ref.current.injectJavaScript);
    }
  }, items);
  const items1 = [videoId, tmp, first];
  const effect1 = obj.useEffect(() => {
    let tmp = first;
    if (first) {
      tmp = ref.current !== videoId;
    }
    if (tmp) {
      ref.current = videoId;
      const current = ref.current;
      const PLAYER_FUNCTIONS = videoId(playList[7]).PLAYER_FUNCTIONS;
      current.injectJavaScript(PLAYER_FUNCTIONS.loadVideoById(videoId, play));
    }
  }, items1);
  const items2 = [playList, tmp, num4, first];
  const effect2 = obj.useEffect(() => {
    let tmp = first;
    if (first) {
      tmp = playList;
    }
    if (tmp) {
      tmp = !videoId(playList[8]).deepComparePlayList(ref2.current, playList);
    }
    if (tmp) {
      ref2.current = playList;
      const current = ref.current;
      const PLAYER_FUNCTIONS = videoId(playList[7]).PLAYER_FUNCTIONS;
      current.injectJavaScript(PLAYER_FUNCTIONS.loadPlaylist(playList, num4, play));
    }
  }, items2);
  const items3 = [fn2, fn, fn3, fn4, fn6, fn5];
  const items4 = [baseUrlOverride];
  const onMessage = obj.useCallback((nativeEvent) => {
    try {
      const _JSON = JSON;
      const parsed = JSON.parse(nativeEvent.nativeEvent.data);
      const eventType = parsed.eventType;
      if ("fullScreenChange" === eventType) {
        fn4(parsed.data);
      } else if ("playerStateChange" === eventType) {
        fn3(videoId(playList[9]).PLAYER_STATES[tmp4.data]);
      } else if ("playerReady" === eventType) {
        fn2();
        callback(true);
      } else if ("playerQualityChange" === eventType) {
        fn5(tmp4.data);
      } else if ("playerError" === eventType) {
        fn(videoId(playList[9]).PLAYER_ERROR[tmp4.data]);
      } else if ("playbackRateChange" === eventType) {
        fn6(tmp4.data);
      } else {
        const current = ref3.current;
        current.emit(tmp4.eventType, tmp4.data);
      }
    } catch (tmp30) {
      const _console = console;
      console.warn("[rn-youtube-iframe]", tmp30);
    }
  }, items3);
  const items5 = [useLocalHTML, num2, baseUrlOverride, undefined !== allowWebViewZoom && allowWebViewZoom];
  const callback1 = obj.useCallback((mainDocumentURL) => {
    try {
      let url = mainDocumentURL.mainDocumentURL;
      if (!url) {
        url = mainDocumentURL.url;
      }
      let startsWithResult = "ios" === useLocalHTML.Platform.OS;
      if (startsWithResult) {
        startsWithResult = "about:blank" === obj;
      }
      if (!startsWithResult) {
        let DEFAULT_BASE_URL = baseUrlOverride;
        if (!baseUrlOverride) {
          DEFAULT_BASE_URL = videoId(playList[9]).DEFAULT_BASE_URL;
        }
        startsWithResult = obj.startsWith(DEFAULT_BASE_URL);
      }
      return startsWithResult;
    } catch (err) {
      return true;
    }
  }, items4);
  obj = { style: { height, width }, __self: baseUrlOverride, __source: obj };
  obj = { fileName: num3, lineNumber: 251, columnNumber: 5 };
  const source = obj.useMemo(() => {
    if (useLocalHTML) {
      let obj = { html: null };
      obj[0] = MAIN_SCRIPTResult.htmlString;
      if (baseUrlOverride) {
        obj.baseUrl = baseUrlOverride;
      }
      return obj;
    } else {
      let DEFAULT_BASE_URL = baseUrlOverride;
      if (!baseUrlOverride) {
        DEFAULT_BASE_URL = tmp(tmp2[9]).DEFAULT_BASE_URL;
      }
      obj = { uri: null };
      obj[0] = `${DEFAULT_BASE_URL}?data=${tmp3.urlEncodedJSON}`;
      return obj;
    }
    MAIN_SCRIPTResult = videoId(playList[7]).MAIN_SCRIPT(ref.current, ref2.current, ref.current, closure_12, num2);
    tmp = videoId;
    tmp2 = playList;
  }, items5);
  const __self = baseUrlOverride;
  const fileName = num3;
  obj1 = { bounces: false, originWhitelist: ["*"], allowsInlineMediaPlayback: true, style: items6, mediaPlaybackRequiresUserAction: false, onShouldStartLoadWithRequest: callback1, allowsFullscreenVideo: !ref.current.preventFullScreen, userAgent: null };
  items6 = [num2.webView, webViewStyle];
  let str = "";
  if (tmp4) {
    const Platform = useLocalHTML.Platform;
    const obj2 = { android: null, ios: "" };
    obj2[0] = videoId(playList[9]).CUSTOM_USER_AGENT;
    str = Platform.select(obj2);
  }
  obj1[7] = str;
  return <useLocalHTML.View fileName={num3} lineNumber={251} columnNumber={5}>{obj.default.createElement(videoId(playList[10]).WebView, play.default(obj1, webViewProps, { source, ref, onMessage, __self, __source: { fileName, lineNumber: 252, columnNumber: 7 } }))}</useLocalHTML.View>;
});