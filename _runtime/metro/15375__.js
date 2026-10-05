// === Module 15375: ? ===

// Module 15375
import react2 from "react" /* 19 */;
import _slicedToArray2 from "_slicedToArray" /* 32 */;
import PLAY_MODE from "PLAY_MODE" /* 15374 */;
import _extends from "_extends" /* 15377 */;
import PLAYER_FUNCTIONS3 from "PLAYER_FUNCTIONS" /* 15378 */;
import deepComparePlayList from "deepComparePlayList" /* 15380 */;
import module_7953 from "module_7953" /* 7953 */;
import _typeof from "_typeof" /* 15376 */;
import react_native from "react-native" /* 17 */;

let closure_12;

module_7953(_extends);
let _slicedToArray = module_7953(_slicedToArray2);
const react = _typeof(react2);
const self = this;
let c7 = "/Users/ananthukanive/side-proj/react-native-youtube-iframe/src/YoutubeIframe.js";
const StyleSheet = react_native.StyleSheet;
const styles = StyleSheet.create({ webView: { backgroundColor: "transparent" } });

export default react.forwardRef(function YoutubeIframe(videoId, arg1) {
  let allowWebViewZoom;
  let closure_3;
  let height;
  let initialPlayerParams;
  let items6;
  let str;
  let webViewProps;
  let webViewStyle;
  let width;
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
  const tmp2 = undefined !== mute && mute;
  _slicedToArray = tmp2;
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
  const tmp3 = undefined !== allowWebViewZoom && allowWebViewZoom;
  closure_12 = tmp3;
  const forceAndroidAutoplay = videoId.forceAndroidAutoplay;
  let fn3 = videoId.onChangeState;
  const tmp4 = undefined !== forceAndroidAutoplay && forceAndroidAutoplay;
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
  const defaultResult = _slicedToArray.default(num.useState(false), 2);
  const first = defaultResult[0];
  let closure_18 = defaultResult[1];
  let ref = num.useRef(videoId);
  const ref2 = num.useRef(playList);
  const useRef = num.useRef;
  if (!initialPlayerParams) {
    initialPlayerParams = {};
  }
  ref = useRef(initialPlayerParams);
  const ref1 = obj.useRef(null);
  const useRef2 = obj.useRef;
  const eventEmitter = new videoId(playList[6]).EventEmitter();
  const ref3 = useRef2(eventEmitter);
  const imperativeHandle = obj.useImperativeHandle(arg1, () => ({
    getVideoUrl() {
      let current = ref1.current;
      current.injectJavaScript(videoId(playList[7]).PLAYER_FUNCTIONS.getVideoUrlScript);
      const promise = new Promise((arg0) => {
        const current = ref.current;
        current.once("getVideoUrl", arg0);
      });
      return promise;
    },
    getDuration() {
      let current = ref1.current;
      current.injectJavaScript(videoId(playList[7]).PLAYER_FUNCTIONS.durationScript);
      const promise = new Promise((arg0) => {
        const current = ref.current;
        current.once("getDuration", arg0);
      });
      return promise;
    },
    getCurrentTime() {
      let current = ref1.current;
      current.injectJavaScript(videoId(playList[7]).PLAYER_FUNCTIONS.currentTimeScript);
      const promise = new Promise((arg0) => {
        const current = ref.current;
        current.once("getCurrentTime", arg0);
      });
      return promise;
    },
    isMuted() {
      let current = ref1.current;
      current.injectJavaScript(videoId(playList[7]).PLAYER_FUNCTIONS.isMutedScript);
      const promise = new Promise((arg0) => {
        const current = ref.current;
        current.once("isMuted", arg0);
      });
      return promise;
    },
    getVolume() {
      let current = ref1.current;
      current.injectJavaScript(videoId(playList[7]).PLAYER_FUNCTIONS.getVolumeScript);
      const promise = new Promise((arg0) => {
        const current = ref.current;
        current.once("getVolume", arg0);
      });
      return promise;
    },
    getPlaybackRate() {
      let current = ref1.current;
      current.injectJavaScript(videoId(playList[7]).PLAYER_FUNCTIONS.getPlaybackRateScript);
      const promise = new Promise((arg0) => {
        const current = ref.current;
        current.once("getPlaybackRate", arg0);
      });
      return promise;
    },
    getAvailablePlaybackRates() {
      let current = ref1.current;
      current.injectJavaScript(videoId(playList[7]).PLAYER_FUNCTIONS.getAvailablePlaybackRatesScript);
      const promise = new Promise((arg0) => {
        const current = ref.current;
        current.once("getAvailablePlaybackRates", arg0);
      });
      return promise;
    },
    seekTo(arg0, arg1) {
      const current = ref1.current;
      const injectJavaScript = current.injectJavaScript;
      const PLAYER_FUNCTIONS = videoId(playList[7]).PLAYER_FUNCTIONS;
      injectJavaScript(PLAYER_FUNCTIONS.seekToScript(arg0, arg1));
    }
  }), []);
  let items = [tmp, tmp2, num, num3, first];
  const effect = obj.useEffect(() => {
    if (first) {
      const items = [PLAYER_FUNCTIONS3.playMode[play], PLAYER_FUNCTIONS3.soundMode[closure_3], , ];
      const PLAYER_FUNCTIONS = PLAYER_FUNCTIONS3.PLAYER_FUNCTIONS;
      items[2] = PLAYER_FUNCTIONS.setVolume(num);
      const PLAYER_FUNCTIONS2 = PLAYER_FUNCTIONS3.PLAYER_FUNCTIONS;
      items[3] = PLAYER_FUNCTIONS2.setPlaybackRate(num3);
      const item = items.forEach(ref1.current.injectJavaScript);
    }
  }, items);
  const items1 = [videoId, tmp, first];
  const effect1 = obj.useEffect(() => {
    const tmp = first && ref.current !== videoId;
    if (tmp) {
      ref.current = videoId;
      const current = ref1.current;
      const injectJavaScript = current.injectJavaScript;
      const PLAYER_FUNCTIONS = PLAYER_FUNCTIONS3.PLAYER_FUNCTIONS;
      injectJavaScript(PLAYER_FUNCTIONS.loadVideoById(videoId, play));
    }
  }, items1);
  const items2 = [playList, tmp, num4, first];
  const effect2 = obj.useEffect(() => {
    const tmp = first && playList && !deepComparePlayList.deepComparePlayList(ref2.current, playList);
    if (tmp) {
      ref2.current = playList;
      const current = ref1.current;
      const injectJavaScript = current.injectJavaScript;
      const PLAYER_FUNCTIONS = PLAYER_FUNCTIONS3.PLAYER_FUNCTIONS;
      injectJavaScript(PLAYER_FUNCTIONS.loadPlaylist(playList, num4, play));
    }
  }, items2);
  const items3 = [fn2, fn, fn3, fn4, fn6, fn5];
  const items4 = [baseUrlOverride];
  const callback = obj.useCallback((nativeEvent) => {
    try {
      const _JSON = JSON;
      const parsed = JSON.parse(nativeEvent.nativeEvent.data);
      const eventType = parsed.eventType;
      if ("fullScreenChange" === eventType) {
        fn4(parsed.data);
      } else if ("playerStateChange" === eventType) {
        fn3(PLAY_MODE.PLAYER_STATES[parsed.data]);
      } else if ("playerReady" === eventType) {
        fn2();
        closure_18(true);
      } else if ("playerQualityChange" === eventType) {
        fn5(parsed.data);
      } else if ("playerError" === eventType) {
        fn(PLAY_MODE.PLAYER_ERROR[parsed.data]);
      } else if ("playbackRateChange" === eventType) {
        fn6(parsed.data);
      } else {
        const current = ref3.current;
        current.emit(parsed.eventType, parsed.data);
      }
    } catch (tmp30) {
      const _console = console;
      console.warn("[rn-youtube-iframe]", tmp30);
    }
  }, items3);
  const items5 = [useLocalHTML, num2, baseUrlOverride, tmp3];
  const callback1 = obj.useCallback((mainDocumentURL) => {
    try {
      const url = mainDocumentURL.mainDocumentURL || mainDocumentURL.url;
      let startsWithResult = "ios" === react_native.Platform.OS && "about:blank" === tmp2;
      if (!startsWithResult) {
        let DEFAULT_BASE_URL = baseUrlOverride;
        const startsWith = tmp2.startsWith;
        if (!baseUrlOverride) {
          DEFAULT_BASE_URL = PLAY_MODE.DEFAULT_BASE_URL;
        }
        startsWithResult = startsWith(DEFAULT_BASE_URL);
      }
      return startsWithResult;
    } catch (err) {
      return true;
    }
  }, items4);
  const _default = obj.default;
  const _default2 = obj.default;
  const memo = obj.useMemo(() => {
    const MAIN_SCRIPTResult = PLAYER_FUNCTIONS3.MAIN_SCRIPT(ref.current, ref2.current, ref.current, closure_12, num2);
    if (useLocalHTML) {
      const obj2 = { html: MAIN_SCRIPTResult.htmlString };
      if (baseUrlOverride) {
        obj2.baseUrl = baseUrlOverride;
      }
      return obj2;
    } else {
      const obj = { uri: `${baseUrlOverride || PLAY_MODE.DEFAULT_BASE_URL}?data=${tmp3.urlEncodedJSON}` };
      baseUrlOverride || PLAY_MODE.DEFAULT_BASE_URL;
      return obj;
    }
  }, items5);
  const createElement = _default.createElement;
  const View = useLocalHTML.View;
  const createElement2 = _default2.createElement;
  const obj3 = { bounces: false, originWhitelist: ["*"], allowsInlineMediaPlayback: true, style: items6, mediaPlaybackRequiresUserAction: false, onShouldStartLoadWithRequest: callback1, allowsFullscreenVideo: !ref.current.preventFullScreen, userAgent: str };
  items6 = [num2.webView, webViewStyle];
  str = "";
  const WebView = videoId(playList[10]).WebView;
  const _default3 = play.default;
  const tmp10 = playList;
  const tmp19 = useLocalHTML;
  const tmp20 = baseUrlOverride;
  const tmp21 = num3;
  const tmp9 = videoId;
  if (tmp4) {
    const Platform = tmp19.Platform;
    const select = Platform.select;
    const obj4 = { android: tmp9(tmp10[9]).CUSTOM_USER_AGENT, ios: "" };
    str = select(obj4);
  }
  const obj5 = { source: memo, ref: ref1, onMessage: callback, __self: tmp20, __source: { fileName: tmp21, lineNumber: 252, columnNumber: 7 } };
  return <View style={{ height, width }} __self={baseUrlOverride} __source={{ fileName: num3, lineNumber: 251, columnNumber: 5 }}>{createElement2(WebView, _default3(obj3, webViewProps, obj5))}</View>;
});